"use client";

import { useState, useEffect, useCallback } from "react";

/* ========================================
   BOOKING MODAL
   Multi-step: Date → Time → Details → Confirm
   Sends to /api/book → n8n webhook
   ======================================== */

type Step = "date" | "time" | "details" | "success" | "error";

interface BookingState {
  date: Date | null;
  time: string | null;
  name: string;
  email: string;
  note: string;
}

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function formatDate(d: Date) {
  return `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function getNext14Days() {
  const days: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 1; i <= 21; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // Skip weekends
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      days.push(d);
      if (days.length === 14) break;
    }
  }
  return days;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<Step>("date");
  const [booking, setBooking] = useState<BookingState>({ date: null, time: null, name: "", email: "", note: "" });
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [meetLink, setMeetLink] = useState("");

  const availableDays = getNext14Days();

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const reset = useCallback(() => {
    setStep("date");
    setBooking({ date: null, time: null, name: "", email: "", note: "" });
    setErrorMsg("");
    setMeetLink("");
  }, []);

  const handleClose = () => { reset(); onClose(); };

  const handleSubmit = async () => {
    if (!booking.name.trim() || !booking.email.trim()) return;
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: booking.name.trim(),
          email: booking.email.trim(),
          note: booking.note.trim(),
          date: booking.date?.toISOString(),
          dateFormatted: booking.date ? formatDate(booking.date) : "",
          time: booking.time,
          timeFormatted: booking.time ? formatTime(booking.time) : "",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || `Server error ${res.status}`);
      }

      setMeetLink(data?.meetLink || data?.hangoutLink || "");
      setStep("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStep("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a call"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Book a Free Call</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">30 min · Google Meet · IST</p>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Step indicator */}
        {(step === "date" || step === "time" || step === "details") && (
          <div className="flex items-center px-6 pt-4 gap-2">
            {(["date", "time", "details"] as const).map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                  step === s
                    ? "bg-primary-600 text-white"
                    : (["date", "time", "details"].indexOf(step) > i)
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                }`}>
                  {(["date", "time", "details"].indexOf(step) > i) ? "✓" : i + 1}
                </div>
                <span className={`text-xs font-medium capitalize ${step === s ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>
                  {s === "date" ? "Pick Date" : s === "time" ? "Pick Time" : "Your Details"}
                </span>
                {i < 2 && <div className="w-6 h-px bg-gray-200 dark:bg-gray-700" />}
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-5">

          {/* STEP 1: Date */}
          {step === "date" && (
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Select a date</p>
              <div className="grid grid-cols-7 gap-1.5 max-h-64 overflow-y-auto pr-1">
                {availableDays.map((d) => (
                  <button
                    key={d.toISOString()}
                    onClick={() => { setBooking(b => ({ ...b, date: d })); setStep("time"); }}
                    className={`flex flex-col items-center p-2 rounded-xl border text-center transition-all hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 ${
                      booking.date?.toDateString() === d.toDateString()
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                        : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="text-[10px] font-medium text-gray-400 uppercase">{DAYS[d.getDay()]}</span>
                    <span className="text-sm font-bold mt-0.5">{d.getDate()}</span>
                    <span className="text-[10px] text-gray-400">{MONTHS[d.getMonth()].slice(0, 3)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Time */}
          {step === "time" && (
            <div>
              <button onClick={() => setStep("date")} className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-3 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                {booking.date ? formatDate(booking.date) : ""}
              </button>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Select a time slot</p>
              <div className="grid grid-cols-3 gap-2 max-h-56 overflow-y-auto pr-1">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    onClick={() => { setBooking(b => ({ ...b, time: t })); setStep("details"); }}
                    className={`py-2.5 rounded-xl border text-sm font-medium transition-all hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 ${
                      booking.time === t
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                        : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {formatTime(t)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Details */}
          {step === "details" && (
            <div>
              <button onClick={() => setStep("time")} className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-1 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                {booking.date ? formatDate(booking.date) : ""} · {booking.time ? formatTime(booking.time) : ""}
              </button>

              <div className="mt-3 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={booking.name}
                    onChange={e => setBooking(b => ({ ...b, name: e.target.value }))}
                    placeholder="John Doe"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={booking.email}
                    onChange={e => setBooking(b => ({ ...b, email: e.target.value }))}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">What do you want to automate? <span className="text-gray-400 font-normal">(optional)</span></label>
                  <textarea
                    value={booking.note}
                    onChange={e => setBooking(b => ({ ...b, note: e.target.value }))}
                    placeholder="e.g. WhatsApp booking system for my salon..."
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 text-sm resize-none transition-colors"
                  />
                </div>

                {/* Summary */}
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {booking.date ? formatDate(booking.date) : ""} at {booking.time ? formatTime(booking.time) : ""}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">30 min · Google Meet link sent via email</p>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={submitting || !booking.name.trim() || !booking.email.trim()}
                  className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all hover:shadow-lg"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Booking...
                    </span>
                  ) : "Confirm Booking →"}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Success */}
          {step === "success" && (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">You&apos;re booked!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {booking.date ? formatDate(booking.date) : ""} at {booking.time ? formatTime(booking.time) : ""}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-left space-y-2">
                <p className="text-sm font-medium text-blue-800 dark:text-blue-300">✉️ Check your inbox at <span className="font-bold">{booking.email}</span></p>
                <p className="text-xs text-blue-600 dark:text-blue-400">A calendar invite with Google Meet link has been sent to both of us.</p>
                {meetLink && (
                  <a href={meetLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:underline mt-1">
                    Join Meet now →
                  </a>
                )}
              </div>
              <button
                onClick={handleClose}
                className="w-full py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Close
              </button>
            </div>
          )}

          {/* Error state */}
          {step === "error" && (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Something went wrong</h3>
                <p className="text-sm text-red-500 mt-1">{errorMsg}</p>
              </div>
              <button
                onClick={() => setStep("details")}
                className="w-full py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-all"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
