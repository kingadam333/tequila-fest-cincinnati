// Shared between the signup form and /api/subscribe so the field name can
// only ever be defined once.
//
// This form posts straight through to the Brevo mailing list, so an
// unguarded POST pollutes the list and burns send quota — and the route
// previously accepted any string at all as an "email" and forwarded it.
// Deliberately no CAPTCHA: this is a one-field email capture on a splash
// page and friction here costs real signups. A hidden field bots fill and
// people never see does the job without being felt.
export const HONEYPOT_FIELD = "company_website";

export function honeypotTripped(body: Record<string, unknown>): boolean {
  const v = body?.[HONEYPOT_FIELD];
  return typeof v === "string" && v.trim().length > 0;
}

/** Conservative shape check — one @, a dot in the domain, no whitespace. */
export function looksLikeEmail(value: string): boolean {
  const v = value.trim();
  return v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}
