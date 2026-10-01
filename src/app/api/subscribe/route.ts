import { NextRequest, NextResponse } from "next/server";
import { honeypotTripped, looksLikeEmail } from "@/lib/spamGuard";

const BREVO_LIST_ID = 93; // Tequila Fest Cincinnati

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Hidden field only a bot fills in. Vague on purpose so a bot learns
  // nothing from the response; the reason is logged instead.
  if (honeypotTripped(body)) {
    console.warn("[subscribe] rejected: honeypot field filled");
    return NextResponse.json({ error: "Unable to subscribe. Please try again." }, { status: 400 });
  }

  // The old check accepted ANY string and forwarded it to Brevo.
  if (!looksLikeEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
  }

  const cleanEmail = email.trim().toLowerCase();

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Service unavailable" }, { status: 500 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      email: cleanEmail,
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    }),
  });

  if (!res.ok && res.status !== 400) {
    const detail = await res.text();
    return NextResponse.json({ error: "Brevo request failed", detail }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
