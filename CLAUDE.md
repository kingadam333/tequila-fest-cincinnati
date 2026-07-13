# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server — port 4000 (3000=Willoughby, 4000=Cincinnati, 4001=Cleveland, 4002=USA, 4003=Columbus)
nohup npm run dev -- --port 4000 > /tmp/tequila-dev.log 2>&1 &

# Build (always verify before committing)
npm run build

# Lint
npm run lint

# Install dependencies (npm cache is broken at default location — use temp cache)
npm install --cache /tmp/npm-cache
```

## What This Is

A single-page marketing/splash site for **Tequila Fest Cincinnati** — an annual tequila festival held at Fountain Square, downtown Cincinnati. All ticket sales redirect to TequilaFestUSA.com; this site has no e-commerce or auth.

**All three city sites (Cincinnati, Cleveland, Columbus) share identical design, layout, and components. Only the city-specific content differs: event date, venue, logo, hero image, gallery photos, and ticket URLs.**

**Event details:**
- Date: June 12, 2027, 3:00 PM – 9:00 PM
- Tequila sampling: 4:00 PM – 8:00 PM
- Venue: Fountain Square, Downtown Cincinnati, OH
- Ticket URL: `https://www.tequilafestusa.com/events/cincinnati#tickets`
- Vendor URL: `https://www.tequilafestusa.com/vendors`
- Brand packages URL: `https://www.tequilafestusa.com/brand-packages`

## Architecture

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

All content lives in `src/app/page.tsx` as a stack of section components imported from `src/components/`. There is no routing — the entire site is one page (`/`).

**Section order (top to bottom):**
1. `OfficialBanner` — sticky top bar (`sticky top-0 z-50`); Código 1530 as presenting sponsor; platinum shimmer sweep; dismissible with ✕ button
2. `Hero` — full-viewport `hero-bg.jpg` with `bg-black/65` overlay; logo; TEQUILA FEST + CINCINNATI headline; date/time/venue info row; sampling hours; live countdown; GET TICKETS button (gold, pulsing); Learn More + Vendors Wanted buttons (grey, smaller, below); confetti canvas; scroll indicator; papel picado bottom border
3. `Highlights` — "LA FIESTA GRANDE" section; 4-card grid (50+ Tequilas gold, Tacos red, Music purple, VIP platinum); below the cards: 3 ticket option cards (GA/DD $5 green, Tequila Sampling $55 gold, VIP $125 platinum) — all link to ticket URL
4. `VIPExperience` — full platinum section; 3D tilt cards on hover; sparkle particles; sweeping spotlight; VIP tequila brand marquee (7 brands duplicated for seamless loop); CTA links to ticket URL
5. `EventDetails` — marigold (`#F5A623`) strip with date/time/venue/admission info
6. `TequilaSpotlight` — "50+ TEQUILAS" section; auto-scrolling brand marquee (24 brands, duplicated); tequila type breakdown grid (Blanco/Reposado/Añejo/Extra Añejo); "Add Your Tequila Brand" button (black + gold border, swaps on hover) linking to brand-packages URL
7. `LiveMusic` — animated equalizer bars; DJ Fusemania card (3–6 PM yellow badge); Apostle Jones Band card (6:30–9 PM red badge); full schedule timeline
8. `Gallery` — masonry grid from `/public/gallery/`; lightbox on click; video autoplays muted in grid, plays with sound in lightbox
9. `EmailSignup` — red section; Supabase `email_subscribers` table (null-safe when env vars missing)
10. `TicketsCTA` — spinning decorative rings; pulsing gold CTA button; links to ticket URL
11. `Footer` — social links, legal, 21+ notice; links to ticket URL

## Hero CTA Structure (important — do not revert to side-by-side layout)

```
[GET TICKETS →]          ← gold, large, pulsing glow, full width-ish
[Learn More]  [Vendors Wanted]  ← grey outlined, smaller, side by side below
```

## Ticket Cards in Highlights (La Fiesta Grande)

Three cards below the 4 feature cards:
- **GA / Designated Driver** — Starting at $5 · "Entry + food & entertainment access" · green (#00A878)
- **Tequila Sampling** — Starting at $55 · "Entry + 12 tasting tickets + souvenir item" · gold (#F5A623)
- **VIP Experience** — Starting at $125 · "Private area · 8 ultra-premium pours · build-your-own taco bar" · platinum (#C0C0C0)

All three link to the ticket URL.

## Public Assets

```
/public/hero-bg.jpg                  — hero background photo
/public/tequilafest_cinci_logo.png   — event logo (displayed in hero + OG image)
/public/gallery/
  2024-06-15 15.03.59.jpg  (row-span-2)
  2024-06-15 15.04.44.jpg
  2024-06-15 16.08.30.jpg
  2024-06-15 16.11.06.mp4  (row-span-2, video — autoplays muted)
  2024-06-15 16.15.04.jpg
  2024-06-15 16.25.19.jpg
  2024-06-15 16.26.50.jpg
```

## OG / Social Image

`src/app/opengraph-image.tsx` — Node.js runtime (NOT edge); reads `hero-bg.jpg` and logo via `fs.readFileSync`, converts to base64, renders as 1200×630 ImageResponse with hero photo background, dark overlay, logo, city name, date, and venue. Do NOT add `export const runtime = "edge"` — it will break `fs`.

## Key Design Details

**Color palette:**
- Gold/warm: `#F5A623` (marigold) — primary festival color
- Red: `#C8102E` (agave red)
- Purple: `#7B2FBE` (fiesta purple)
- Green: `#00A878` (cactus)
- Dark bg: `#0d0500` (tequila barrel)
- Platinum: `#C0C0C0` (VIP)

**CSS shimmer classes** (in `globals.css` — do not remove):
- `.text-shimmer` — gold/red animated gradient (used on "TEQUILA")
- `.text-shimmer-blue` — light blue/turquoise/navy (used on "FEST")
- `.text-shimmer-platinum` — silver/white animated gradient (VIP sections)
- `.animate-pulse-glow` — yellow glow pulse on CTA buttons
- `.animate-float` — gentle float for scroll indicator
- `.papel-picado-border` — Mexican paper-cut SVG border between sections

**Fonts:** Bebas Neue (display/headlines), Playfair Display (subheadings), Source Sans 3 (body) — loaded via Google Fonts `@import` in `globals.css`. The `@import` **must stay above** `@import "tailwindcss"` or the build will warn.

**`Confetti.tsx`** — canvas-based particle animation; automatically disabled when `prefers-reduced-motion` is set.

**`VIPExperience.tsx`** — 3D card tilt via Framer Motion `useMotionValue`/`useTransform`. The `vipTequilas` array **must be duplicated** (7 entries × 2) for the CSS marquee loop to be seamless.

**`TequilaSpotlight.tsx`** — brands array has 24 real brands; duplicated in the render `[...brands, ...brands]` for seamless marquee.

## Tequila Brand Lineup (TequilaSpotlight)

Camerena · Avion · Gran Coramino · 1800 · Jose Cuervo · Gran Centenario · Dobel · Milagro · Del Maguey · Olmeca Altos · Codigo 1530 · El Jimador · Hornitos · El Tesoro · Sauza · Ghost · G4 · Los Linderos · Suavecito · Teremana · Viva Agave · Dolce Vida · Corazon · Authentico

## Content Updates

All content is hardcoded — no CMS. To update:
- **Event date/countdown:** `Hero.tsx` → `eventDate` constant
- **Hero date/venue display:** `Hero.tsx` → the date/time/venue info row below the tagline
- **Event details strip:** `EventDetails.tsx` → `details` array
- **Hero city name:** `Hero.tsx` → the `CINCINNATI` text in the h2
- **Sponsor banner:** `OfficialBanner.tsx` → brand name and label
- **Tequila brands (general):** `TequilaSpotlight.tsx` → `brands` array (keep the render duplicated)
- **VIP tequila brands:** `VIPExperience.tsx` → `vipTequilas` array (keep duplicated for marquee)
- **Music lineup:** `LiveMusic.tsx` → artist cards and schedule timeline
- **Gallery:** drop files into `/public/gallery/`, update `media` array in `Gallery.tsx`
- **All ticket links:** grep for `tequilafestusa.com/events/cincinnati` to find all instances
- **OG image date/venue:** `src/app/opengraph-image.tsx` → date/venue string

## Cloning for a New City

All three city sites are identical in structure — only city-specific content differs. To clone:
1. `cp -r /Users/adambossin/Sites/tequila-fest-cincinnati /Users/adambossin/Sites/tequila-fest-[city]`
2. `cd /Users/adambossin/Sites/tequila-fest-[city] && rm -rf .git .next node_modules`
3. `npm install --cache /tmp/npm-cache`
4. Find/replace Cincinnati→[City], CINCINNATI→[CITY] in `src/`
5. Update `package.json` name field
6. Update `src/app/layout.tsx` metadata
7. Update `Hero.tsx`: `eventDate`, logo `src`, city name h2, date/venue info row
8. Update `EventDetails.tsx`: date, venue, city
9. Update `LiveMusic.tsx`: artist lineup if different
10. Update `Gallery.tsx`: `media` array with new city photos
11. Replace `/public/hero-bg.jpg` and logo file
12. Update all ticket links to new city slug
13. Update `src/app/opengraph-image.tsx`: alt text, date/venue string, logo filename
14. `git init && git add -A && git commit` → create GitHub repo → push → connect Vercel
15. Update `CLAUDE.md` with correct city details and port number

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Both optional for local dev — Supabase client is null-safe when empty. Only email signup requires them at runtime. Values must be empty (not placeholder text) or Supabase will throw a URL validation error at build time.

## Deployment

- GitHub: `kingadam333/tequila-fest-cincinnati`
- Hosted on Vercel, domain: `tequilafestcincinnati.com`
- Push to `main` → auto-deploys via Vercel GitHub integration
