# Lumpy landing page — deploy notes

**Artifact:** `index.html` (self-contained, inline CSS/JS) + `vercel.json`.
**Target:** `lumpy.nublear.com` (dedicated subdomain, standalone Vercel project).
**Positioning:** sell-as-product; primary CTA = Join the waitlist.
**Brand:** Nublear dark navy (#040d1a) + cyan/indigo accent.

## Deploy steps (run when Vercel MCP is connected)
1. `Vercel.list_projects` → confirm the Nublear team/scope.
2. `Vercel.deploy_to_vercel` with this folder as a static deployment → new project (suggest name `lumpy`).
3. Add domain `lumpy.nublear.com` to the new project.
4. DNS: add a CNAME `lumpy` → `cname.vercel-dns.com` wherever nublear.com DNS is managed
   (likely needs Matthew or Vercel Domains). Vercel will auto-issue TLS.
5. Verify: `https://lumpy.nublear.com` returns 200 and renders.

## Blocked
- Vercel MCP server intermittently disconnected this session; no Vercel CLI/token on host.
- Deploy is an outward/live action — confirm go-ahead before publishing.

## Placeholders to fill before/after launch (marked in index.html)
- Customer/partner logos (logo cloud).
- Stats band numbers (currently placeholder, e.g. "XX%").
- Testimonials (quotes + attribution).
- Pricing tiers/amounts ("$XX").
- Waitlist form endpoint (currently client-side only; wire to Formspree/API/CRM).
- OG image at /og.png (1200x630).
- Confirm Nublear routes: /contact.
