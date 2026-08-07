import { NextRequest, NextResponse } from "next/server";

const BREVO_LIST_ID = 93; // Tequila Fest Cincinnati

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

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
      email,
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
