import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/book
 *
 * Forwards booking data to the n8n webhook.
 * n8n then:
 *  1. Checks Google Sheet for slot availability
 *  2. Creates a Google Calendar event with Meet link
 *  3. Marks slot as booked in Google Sheet
 *  4. Sends confirmation emails via Gmail
 *
 * Required env var:
 *  N8N_BOOKING_WEBHOOK=https://your-n8n-instance/webhook/book-call
 */
export async function POST(req: NextRequest) {
  const webhookUrl = process.env.N8N_BOOKING_WEBHOOK;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Booking webhook not configured. Set N8N_BOOKING_WEBHOOK in .env.local" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, date, dateFormatted, time, timeFormatted, note } = body as Record<string, string>;

  if (!name || !email || !date || !time) {
    return NextResponse.json({ error: "Missing required fields: name, email, date, time" }, { status: 400 });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    const n8nRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        date,
        dateFormatted,
        time,
        timeFormatted,
        note: note || "",
        source: "website",
        bookedAt: new Date().toISOString(),
      }),
      // 15 second timeout
      signal: AbortSignal.timeout(15000),
    });

    const text = await n8nRes.text();
    let data: Record<string, unknown> = {};
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (!n8nRes.ok) {
      const errMsg = (data?.error as string) || (data?.message as string) || `n8n error: ${n8nRes.status}`;
      return NextResponse.json({ error: errMsg }, { status: 502 });
    }

    // Pass through meet link if n8n returns it
    return NextResponse.json({
      success: true,
      meetLink: data?.meetLink || data?.hangoutLink || data?.conferenceLink || null,
      eventId: data?.eventId || null,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to connect to booking service";
    console.error("[/api/book] Error:", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
