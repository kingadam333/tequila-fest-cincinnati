# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server — always run on port 4000 (port 3000 is taken by another project)
nohup npm run dev -- --port 4000 > /tmp/tequila-dev.log 2>&1 &

# Build (check for errors before committing)
npm run build

# Lint
npm run lint

# Install dependencies (npm cache is broken at default location — use temp cache)
npm install --cache /tmp/npm-cache
```

## What This Is

A single-page marketing/splash site for **Tequila Fest Cincinnati** — an annual tequila festival held at Fountain Square, downtown Cincinnati. All ticket sales redirect to an external URL; this site has no e-commerce or auth.

**Event details (update these when they change):**
- Date: June 13, 2026, 3:00 PM – 9:00 PM
- Tequila sampling: 4:00 PM – 8:00 PM
- Venue: Fountain Square, Downtown Cincinnati, OH
- Tickets URL: `https://tequilafestusa.com/events/tequila-fest-cincinnati-2026`

## Architecture

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

All content lives in `src/app/page.tsx` as a stack of section components imported from `src/components/`. There is no routing — the entire site is one page (`/`).

**Section order (top to bottom):**
1. `OfficialBanner` — sticky top bar; Código 1530 as presenting sponsor
2. `Hero` — full-viewport background photo, logo, TEQUILA FEST headline, live countdown, confetti canvas
3. `Highlights` — 4-card grid (tequilas, tacos, music, VIP)
4. `VIPExperience` — platinum-themed section with 3D tilt cards, sparkle effects, VIP tequila brand marquee
5. `EventDetails` — marigold strip with date/time/venue/admission
6. `TequilaSpotlight` — scrolling marquee of 50+ general tequila brands + type breakdown
7. `LiveMusic` — DJ Fusemania (3–6 PM) and Apostle Jones Band (6:30–9 PM) cards + schedule timeline
8. `Gallery` — real photos/video from `/public/gallery/` with lightbox; click any item to expand
9. `EmailSignup` — red section; wired to Supabase `email_subscribers` table (guarded — works only when env vars are set)
10. `TicketsCTA` — final full-width CTA section
11. `Footer`

## Key Design Details

**Color palette** (defined in `globals.css` custom classes):
- Gold/warm: `#F5A623` (marigold) — primary festival color
- Red: `#C8102E` (agave red)
- Purple: `#7B2FBE` (fiesta purple)
- Green: `#00A878` (cactus)
- Dark bg: `#0d0500` (tequila barrel)

**CSS shimmer classes** (in `globals.css` — used heavily, do not remove):
- `.text-shimmer` — gold/red animated gradient (used on "TEQUILA")
- `.text-shimmer-blue` — light blue/turquoise/navy (used on "FEST")
- `.text-shimmer-platinum` — silver/white animated gradient (used throughout VIP section)

**Fonts:** Bebas Neue (display/headlines), Playfair Display (subheadings), Source Sans 3 (body) — loaded via Google Fonts `@import` in `globals.css`. The `@import` must stay above the `@import "tailwindcss"` line or the build will warn.

**`Confetti.tsx`** — canvas-based particle animation; automatically disabled when `prefers-reduced-motion` is set.

**`VIPExperience.tsx`** — uses Framer Motion `useMotionValue`/`useTransform` for 3D card tilt on hover. The `vipTequilas` array must be duplicated (first 7 + same 7 again) for the CSS marquee loop to be seamless.

## Content Updates

All content is hardcoded — no CMS or database for editorial content. To update:
- **Event date/countdown:** `Hero.tsx` → `eventDate` constant
- **Event details strip:** `EventDetails.tsx` → `details` array
- **Tequila brands (general):** `TequilaSpotlight.tsx` → `brands` array
- **VIP tequila brands:** `VIPExperience.tsx` → `vipTequilas` array (keep duplicated for marquee loop)
- **Music lineup:** `LiveMusic.tsx`
- **Gallery:** drop files into `/public/gallery/`, then add entries to the `media` array in `Gallery.tsx`
- **All ticket links** point to `https://tequilafestusa.com/events/tequila-fest-cincinnati-2026` — grep for this URL if it ever changes

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Both are optional for local dev — the Supabase client in `src/lib/supabase.ts` is guarded and returns null when env vars are empty, so the build and most features work without them. Only the email signup form requires them at runtime.

## Deployment

- GitHub: `kingadam333/tequila-fest-cincinnati`
- Hosted on Vercel, domain: `tequilafestcincinnati.com`
- Push to `main` → auto-deploys
