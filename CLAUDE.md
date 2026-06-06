# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server — port 4000 (3000=Willoughby, 4000=Cincinnati, 4001=Cleveland, 4002=Columbus, 4003=USA)
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
1. `OfficialBanner` — **sticky** top bar; Código 1530 as presenting sponsor; has dismiss button
2. `Hero` — full-viewport `hero-bg.jpg`, logo `tequilafest_cinci_logo.png`, TEQUILA FEST CINCINNATI headline, live countdown, confetti canvas
3. `Highlights` — 4-card grid: 50+ Tequilas (gold), Tacos (red), Music (purple), VIP (platinum)
4. `VIPExperience` — platinum-themed section; 3D tilt cards on hover; sparkle particles; sweeping spotlight; VIP tequila brand marquee (7 brands, duplicated for seamless loop)
5. `EventDetails` — marigold (`#F5A623`) strip with date/time/venue/admission
6. `TequilaSpotlight` — auto-scrolling marquee of 15 general tequila brands + tequila type breakdown grid
7. `LiveMusic` — animated equalizer bars; two artist cards (DJ Fusemania 3–6 PM, Apostle Jones Band 6:30–9 PM); full schedule timeline row
8. `Gallery` — real media from `/public/gallery/` in masonry grid; click opens lightbox; video autoplays muted as preview
9. `EmailSignup` — red (`#C8102E`) section; Supabase `email_subscribers` table (guarded — null-safe when env vars missing)
10. `TicketsCTA` — spinning decorative rings; pulsing gold CTA button
11. `Footer` — social icon links, legal, 21+ notice

## Public Assets

```
/public/hero-bg.jpg                  — hero background photo
/public/tequilafest_cinci_logo.png   — event logo (displayed in hero)
/public/gallery/
  2024-06-15 15.03.59.jpg  (row-span-2)
  2024-06-15 15.04.44.jpg
  2024-06-15 16.08.30.jpg
  2024-06-15 16.11.06.mp4  (row-span-2, video — autoplays muted)
  2024-06-15 16.15.04.jpg
  2024-06-15 16.25.19.jpg
  2024-06-15 16.26.50.jpg
```

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
- `.text-shimmer-platinum` — silver/white animated gradient (VIP section throughout)
- `.animate-pulse-glow` — yellow glow pulse on CTA buttons
- `.animate-float` — gentle float for scroll indicator
- `.papel-picado-border` — Mexican paper-cut SVG border between sections

**Fonts:** Bebas Neue (display/headlines), Playfair Display (subheadings), Source Sans 3 (body) — loaded via Google Fonts `@import` in `globals.css`. The `@import` **must stay above** `@import "tailwindcss"` or the build will warn.

**`Confetti.tsx`** — canvas-based particle animation (squares, circles, triangles in festival colors); automatically disabled when `prefers-reduced-motion` is set.

**`VIPExperience.tsx`** — uses Framer Motion `useMotionValue`/`useTransform` for 3D card tilt on hover. The `vipTequilas` array **must be duplicated** (first 7 entries + same 7 again) for the CSS marquee loop to be seamless.

**`OfficialBanner.tsx`** — `sticky top-0 z-50`; platinum shimmer sweep animation; dismissible with ✕ button.

**`Gallery.tsx`** — lightbox opens on click; video plays with sound+controls in lightbox; muted autoplay as grid preview. `type: "video"` items show play icon badge.

## Content Updates

All content is hardcoded — no CMS. To update:
- **Event date/countdown:** `Hero.tsx` → `eventDate` constant (`new Date("2026-06-13T15:00:00")`)
- **Event details strip:** `EventDetails.tsx` → `details` array
- **Hero city name:** `Hero.tsx` → the `CINCINNATI` text in the h2
- **Sponsor banner:** `OfficialBanner.tsx` → brand name and "Presenting Sponsor" label
- **Tequila brands (general):** `TequilaSpotlight.tsx` → `brands` array
- **VIP tequila brands:** `VIPExperience.tsx` → `vipTequilas` array (keep duplicated for marquee)
- **VIP perks:** `VIPExperience.tsx` → `perks` array
- **Music lineup:** `LiveMusic.tsx` → artist cards and schedule timeline array
- **Gallery:** drop files into `/public/gallery/`, update `media` array in `Gallery.tsx`
- **All ticket links:** `https://tequilafestusa.com/events/tequila-fest-cincinnati-2026` — grep for this if it changes

## Cloning for a New City

This is the **template** site. To create a new city (e.g. Columbus):
1. `cp -r /Users/adambossin/Sites/tequila-fest-cincinnati /Users/adambossin/Sites/tequila-fest-columbus`
2. `cd /Users/adambossin/Sites/tequila-fest-columbus && rm -rf .git .next node_modules`
3. `npm install --cache /tmp/npm-cache`
4. Find/replace all Cincinnati→Columbus, CINCINNATI→COLUMBUS references in `src/`
5. Update `package.json` name field
6. Update `src/app/layout.tsx` metadata description
7. Update `Hero.tsx`: `eventDate`, logo `src`, city name h2
8. Update `EventDetails.tsx`: date, venue, city
9. Update `LiveMusic.tsx`: artist lineup
10. Update `Gallery.tsx`: `media` array with new city photos
11. Replace `/public/hero-bg.jpg` and logo file
12. Update all ticket links to new city slug
13. `git init && git add -A && git commit` → create new GitHub repo → push
14. Update `CLAUDE.md` with correct city details and port number

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Both optional for local dev — Supabase client is null-safe when empty. Only email signup requires them at runtime.

## Deployment

- GitHub: `kingadam333/tequila-fest-cincinnati`
- Hosted on Vercel, domain: `tequilafestcincinnati.com`
- Push to `main` → auto-deploys via Vercel GitHub integration
