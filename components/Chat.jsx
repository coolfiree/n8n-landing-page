"use client";

// components/Chat.jsx
import { useEffect, useRef, useState } from "react";

/**
 * Chat component for Next.js
 *
 * Props:
 * - webhookUrl (string, optional) : if provided, client will POST directly to this URL.
 *    If you want to proxy via Next.js, omit webhookUrl and use the API route (recommended).
 *
 * Usage:
 * <Chat webhookUrl={process.env.NEXT_PUBLIC_N8N_WEBHOOK} />
 */

const SESSION_KEY = "101x_chat_session_v1";
const MSG_KEY = "101x_chat_messages_v1";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

function safeParse(str, fallback) {
  try { return JSON.parse(str); } catch (e) { return fallback; }
}

function createSession() {
  return { id: "s_" + Math.random().toString(36).slice(2), createdAt: Date.now() };
}

export default function Chat({ webhookUrl }) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [session, setSession] = useState(null);
  const [input, setInput] = useState("");
  const [inflight, setInflight] = useState(false);
  const [error, setError] = useState(null);
  const messagesRef = useRef(null);

  // Initialize session and messages from localStorage
  useEffect(() => {
    let s = safeParse(localStorage.getItem(SESSION_KEY), null);
    const needsNewSession = !s || (Date.now() - (s.createdAt || 0)) > SESSION_TTL_MS;
    
    console.log('[Chat] Initializing...', { session: s, needsNewSession });
    
    if (needsNewSession) {
      // Create new session and clear messages only when session expired/missing
      s = createSession();
      localStorage.setItem(SESSION_KEY, JSON.stringify(s));
      localStorage.setItem(MSG_KEY, "[]");
      setMsgs([]);
      console.log('[Chat] Created new session:', s.id);
    } else {
      // Session is valid - load existing messages
      const savedMsgs = safeParse(localStorage.getItem(MSG_KEY), []) || [];
      setMsgs(savedMsgs);
      console.log('[Chat] Loaded existing session with', savedMsgs.length, 'messages');
    }
    
    setSession(s);
  }, []);

  // sync localStorage -> state on storage events (cross-tab)
  useEffect(() => {
    function onStorage(e) {
      if (e.key === MSG_KEY) {
        setMsgs(safeParse(e.newValue, []) || []);
      }
      if (e.key === SESSION_KEY) {
        setSession(safeParse(e.newValue, null));
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // persist messages on change
  useEffect(() => {
    try { localStorage.setItem(MSG_KEY, JSON.stringify(msgs)); } catch (e) {}
    // scroll to bottom
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [msgs]);

  // helper: normalize many server shapes into { reply, quickReplies, attachments }
  function normalizeResponse(body) {
    // body may be string, object, array, etc.
    if (!body) return { reply: null, quickReplies: null, attachments: null, raw: body };
    if (typeof body === "string") return { reply: body, raw: body };
    if (Array.isArray(body)) {
      const first = body[0] || {};
      return {
        reply: first.reply || first.text || JSON.stringify(body),
        quickReplies: first.quickReplies || first.quick_replies || null,
        attachments: first.attachments || null,
        raw: body
      };
    }
    // object
    return {
      reply: body.reply || body.text || body.message || body.data?.reply || body.body?.reply || JSON.stringify(body),
      quickReplies: body.quickReplies || body.quick_replies || body.quick || body.body?.quickReplies || null,
      attachments: body.attachments || body.files || null,
      raw: body
    };
  }

  // fetch with timeout
  async function fetchWithTimeout(url, opts = {}, timeout = 10000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
      const res = await fetch(url, { ...opts, signal: controller.signal });
      clearTimeout(id);
      return res;
    } catch (e) {
      clearTimeout(id);
      throw e;
    }
  }

  // robust post to webhook (retries)
  async function postToWebhook(payload, maxRetries = 2) {
    const target = webhookUrl || "/api/n8n-proxy";
    let attempt = 0;
    let delay = 500;
    while (attempt <= maxRetries) {
      try {
        const res = await fetchWithTimeout(target, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }, 10000);
        const raw = await res.text().catch(()=>null);
        let parsed = null;
        try { parsed = raw ? JSON.parse(raw) : null; } catch(e){ parsed = raw; }
        return { ok: res.ok, status: res.status, body: parsed, raw };
      } catch (err) {
        attempt++;
        if (attempt > maxRetries) throw err;
        await new Promise(r => setTimeout(r, delay));
        delay *= 2;
      }
    }
  }

  async function sendMessage(text) {
    if (!text || inflight) return;
    setError(null);

    // push user message
    const userMsg = { id: "u_" + Date.now(), role: "user", text, ts: Date.now(), delivered: false };
    setMsgs(prev => { const n = [...prev, userMsg]; localStorage.setItem(MSG_KEY, JSON.stringify(n)); return n; });

    // add typing indicator
    const typingId = "bot_typing_" + Date.now();
    setMsgs(prev => { const n = [...prev, { id: typingId, role: "bot", text: "...", typing: true }]; localStorage.setItem(MSG_KEY, JSON.stringify(n)); return n; });

    setInflight(true);

    const payload = {
      sessionId: session?.id || "anon",
      message: text,
      url: window.location.href,
      ts: Date.now()
    };

    try {
      const res = await postToWebhook(payload);
      // remove typing indicator
      setMsgs(prev => prev.filter(m => !m.typing));

      if (!res || !res.ok) {
        const errMsg = res && res.body && (res.body.error || res.body.message) ? (res.body.error || res.body.message) : (res && res.raw) || "network error";
        setMsgs(prev => {
          const n = [...prev, { id: "b_err_" + Date.now(), role: "bot", text: "Error: " + errMsg }];
          localStorage.setItem(MSG_KEY, JSON.stringify(n));
          return n;
        });
        setError(errMsg);
        setInflight(false);
        return;
      }

      const normalized = normalizeResponse(res.body);
      const botMsg = {
        id: "b_" + Date.now(),
        role: "bot",
        text: normalized.reply || "No reply",
        quickReplies: normalized.quickReplies || null,
        attachments: normalized.attachments || null,
        ts: Date.now()
      };

      // mark last user delivered
      setMsgs(prev => {
        const copy = prev.map(m => m.role === "user" && !m.delivered ? { ...m, delivered: true } : m);
        const n = [...copy, botMsg];
        try { localStorage.setItem(MSG_KEY, JSON.stringify(n)); } catch(e) {}
        return n;
      });
    } catch (err) {
      // error
      setMsgs(prev => {
        const n = [...prev, { id: "b_err_" + Date.now(), role: "bot", text: "Network error: " + (err.message || err) }];
        localStorage.setItem(MSG_KEY, JSON.stringify(n));
        return n;
      });
      setError(err.message || String(err));
    } finally {
      setInflight(false);
    }
  }

  // quick-reply click handler
  function handleQuickReply(value) {
    // send value as a message
    sendMessage(typeof value === "string" ? value : (value.value || value.label || JSON.stringify(value)));
  }

  // UI helpers
  function renderMessage(m) {
    const commonBubble = {
      padding: "10px 12px",
      borderRadius: 12,
      maxWidth: "82%",
      lineHeight: 1.35,
      fontSize: 14,
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
    };

    if (m.role === "user") {
      return (
        <div key={m.id} style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8, alignItems: "flex-end", gap: 6 }}>
          <div style={{ ...commonBubble, background: "#fff", color: "#000" }}>
            {m.text}
          </div>
          {m.delivered && <div style={{ fontSize: 11, color: "#8e8e8e" }}>✓</div>}
        </div>
      );
    } else {
      return (
        <div key={m.id} style={{ display: "flex", justifyContent: "flex-start", marginBottom: 8 }}>
          <div style={{ ...commonBubble, background: "#1a1a1a", color: "#fff" }}>
            {m.text}
            {m.attachments && m.attachments.map((a, i) => a.type === "image" && a.url ? (
              <img key={i} src={a.url} alt={a.alt || "attachment"} style={{ display: "block", maxWidth: 220, borderRadius: 8, marginTop: 8 }} />
            ) : null)}
            {m.quickReplies && (
              <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {m.quickReplies.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(q)}
                    style={{
                      padding: "6px 12px",
                      borderRadius: 18,
                      border: "1px solid #333",
                      background: "#2a2a2a",
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 500,
                      transition: "all 0.2s"
                    }}
                    onMouseOver={(e) => e.target.style.background = "#333"}
                    onMouseOut={(e) => e.target.style.background = "#2a2a2a"}
                    aria-label={q.label || q}
                  >
                    {q.label || q}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }
  }

  // initial system greeting if empty
  useEffect(() => {
    if (!msgs || msgs.length === 0) {
      const greeting = { id: "b_greet", role: "bot", text: "Hello! 👋 Welcome — how can I help you today?", ts: Date.now() };
      setMsgs([greeting]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keyboard: Ctrl+/ toggles
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        setOpen(o => !o);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* floating bubble */}
      {!open && (
        <button
          aria-label="Open chat"
          onClick={() => { setOpen(o => !o); setTimeout(()=>document.getElementById("chat_input")?.focus(), 100); }}
          style={{
            position: "fixed",
            right: 18,
            bottom: 18,
            width: 58,
            height: 58,
            borderRadius: 30,
            background: "linear-gradient(135deg, #0f0f10 0%, #1a1a1a 100%)",
            color: "#fff",
            border: "1px solid #2a2a2a",
            fontWeight: 700,
            fontSize: 16,
            zIndex: 2147483647,
            cursor: "pointer",
            boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
            transition: "all 0.3s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          101X
        </button>
      )}

      {/* chat pane */}
      {open && (
        <aside
          role="dialog"
          aria-label="Chat support"
          aria-modal="true"
          style={{
            position: "fixed",
            right: 18,
            bottom: 88,
            width: 360,
            maxWidth: "calc(100% - 36px)",
            height: 520,
            background: "#0b0b0b",
            color: "#fff",
            borderRadius: 14,
            border: "1px solid #2a2a2a",
            display: "flex",
            flexDirection: "column",
            zIndex: 2147483646,
            overflow: "hidden",
            fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
          }}
        >
          <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 14, borderBottom: "1px solid #1a1a1a", background: "#0f0f0f" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #fff 0%, #e0e0e0 100%)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 }}>101X</div>
              <div style={{ lineHeight: 1 }}>
                <div style={{ fontSize: 12, color: "#9a9a9a", marginTop: 2, display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }}></span>
                  Online
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button 
                onClick={() => { setMsgs([]); localStorage.setItem(MSG_KEY, "[]"); }} 
                aria-label="Reset conversation"
                style={{ background: "transparent", border: "none", color: "#9a9a9a", cursor: "pointer", fontSize: 13, padding: "4px 8px", borderRadius: 6, transition: "all 0.2s" }}
                onMouseOver={(e) => { e.target.style.background = "#1a1a1a"; e.target.style.color = "#fff"; }}
                onMouseOut={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#9a9a9a"; }}
              >
                Reset
              </button>
              <button 
                onClick={() => setOpen(false)} 
                aria-label="Close chat"
                style={{ background: "transparent", border: "none", color: "#9a9a9a", cursor: "pointer", fontSize: 18, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 6, transition: "all 0.2s" }}
                onMouseOver={(e) => { e.target.style.background = "#1a1a1a"; e.target.style.color = "#fff"; }}
                onMouseOut={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#9a9a9a"; }}
              >
                ✕
              </button>
            </div>
          </header>

          <div 
            id="chat_messages" 
            ref={messagesRef} 
            style={{ 
              flex: 1, 
              overflow: "auto", 
              padding: 12, 
              display: "flex", 
              flexDirection: "column", 
              gap: 10,
              background: "#0b0b0b"
            }}
            role="log"
            aria-live="polite"
            aria-atomic="false"
          >
            {msgs.map(m => renderMessage(m))}
            {error && (
              <div style={{ padding: 8, background: "#3f1515", border: "1px solid #7f1d1d", borderRadius: 8, fontSize: 12, color: "#fca5a5" }}>
                ⚠ {error}
              </div>
            )}
          </div>

          <div style={{ padding: 12, borderTop: "1px solid #1a1a1a", display: "flex", gap: 8, alignItems: "center", background: "#0f0f0f" }}>
            <input
              id="chat_input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); setInput(""); } }}
              placeholder="Type your message..."
              aria-label="Type your message"
              disabled={inflight}
              style={{ 
                flex: 1, 
                padding: "10px 14px", 
                borderRadius: 999, 
                border: "1px solid #2a2a2a", 
                background: "#0b0b0b", 
                color: "#fff", 
                outline: "none",
                fontSize: 14,
                transition: "all 0.2s"
              }}
              onFocus={(e) => e.target.style.borderColor = "#3a3a3a"}
              onBlur={(e) => e.target.style.borderColor = "#2a2a2a"}
            />
            <button
              onClick={() => { if (input.trim()) { sendMessage(input.trim()); setInput(""); } }}
              disabled={inflight || !input.trim()}
              aria-label="Send message"
              style={{ 
                padding: "10px 20px", 
                borderRadius: 999, 
                border: "none", 
                background: (inflight || !input.trim()) ? "#1a1a1a" : "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)", 
                color: "#fff", 
                cursor: (inflight || !input.trim()) ? "not-allowed" : "pointer",
                fontSize: 14,
                fontWeight: 600,
                transition: "all 0.2s",
                opacity: (inflight || !input.trim()) ? 0.5 : 1
              }}
              onMouseOver={(e) => { if (!inflight && input.trim()) e.target.style.transform = "scale(1.05)"; }}
              onMouseOut={(e) => e.target.style.transform = "scale(1)"}
            >
              {inflight ? "⋯" : "Send"}
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
