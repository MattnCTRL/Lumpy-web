# Lumpy landing page — deploy notes

**Stack:** Vite + React 19 + Tailwind 3 (TypeScript). Mirrors the real product's
look (`/opt/lumpy/apps/web`): neutral-950 + monospace, status-dot dashboard.
**Target:** `lumpy.nublear.com` (dedicated subdomain, standalone Vercel project).
**Positioning:** sell-as-product; primary CTA = Join the waitlist.

> Supersedes the old hand-written `../lumpy/index.html` (single static file).
> Once this is deployed and verified, the legacy folder can be retired.

## Build locally

```
npm install
npm run build      # tsc --noEmit + vite build → dist/
npm run preview    # serve the built dist/ to eyeball it
npm run dev        # hot-reload dev server
```

## Deploy (Vercel)

The repo is a standard Vite app; Vercel auto-detects it (`vercel.json` pins it
explicitly). Deploy with the account token:

```
VERCEL_TOKEN=$(cat ~/.vercel-token) npx vercel pull --yes --environment=production
VERCEL_TOKEN=$(cat ~/.vercel-token) npx vercel build --prod
VERCEL_TOKEN=$(cat ~/.vercel-token) npx vercel deploy --prebuilt --prod
```

Domain `lumpy.nublear.com` and its CNAME (`lumpy` → `cname.vercel-dns.com`) are
already configured on the existing Vercel project — point this deployment at the
same project so the domain carries over.

> Deploy is an outward / live action — confirm go-ahead before publishing.

## Placeholders still to fill before/after launch (clearly marked in the UI)

- Customer/partner logos (logo cloud) — `Logos` in `src/App.tsx`.
- Stats band numbers (`XX%`) — `STATS` in `src/content.ts`.
- Testimonials (quotes + attribution) — `Testimonials` in `src/App.tsx`.
- Pricing amounts (`$XX`) — `PRICING` in `src/content.ts`.
- Waitlist form endpoint — currently client-side only (`Waitlist` in `src/App.tsx`);
  wire to Formspree / API route / CRM.
- OG image at `/og.png` (1200x630) — referenced in `index.html`, drop the file in `public/`.
- Confirm Nublear routes (`/contact`).
