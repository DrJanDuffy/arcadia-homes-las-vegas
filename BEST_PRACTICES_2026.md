# Best Practices 2026 – Arcadia Homes Las Vegas

This doc summarizes how this Next.js project aligns with 2026 best practices (SEO, a11y, performance, security).

---

## Next.js App Router

- **App Router only** – All routes live under `app/`. No Pages Router (`getStaticProps` / `getServerSideProps`).
- **Dynamic params** – Use typed `params: Promise<{ id: string }>` (and `await params`) for dynamic routes (Next 15–ready).
- **Server components by default** – Use `"use client"` only where interactivity is required (forms, widgets, chat).

---

## SEO & Metadata

- **Root layout** – `metadata` and `viewport` (themeColor, width, initialScale) exported from `app/layout.tsx`.
- **metadataBase** – Set to `siteConfig.url` (https://www.arcadiahomeslasvegas.com) for correct canonical and OG URLs.
- **NAP** – Dr. Jan Duffy, (702) 500-0337, DrDuffy@arcadiahomeslasvegas.com; consistent in visible copy and JSON-LD.
- **ISR** – Key pages use `export const revalidate = 3600` (home) or `86400` (about, contact) for incremental static revalidation.

---

## Accessibility

- **Skip link** – “Skip to main content” in root layout; target `#main-content` (wrapper div so no nested `<main>`).
- **Semantic HTML** – Pages use `<main>`, `<nav>`, headings in order.
- **Lang** – `<html lang="en">` in layout.

---

## Performance

- **Images** – `next/image` with AVIF/WebP; `loading="lazy"` and sensible `sizes` where needed.
- **next.config.js** – `images.formats`, `minimumCacheTTL: 31536000`, `compress: true`, `swcMinify: true`.
- **Scripts** – GTM and third-party scripts use `next/script` with `strategy="afterInteractive"` or `beforeInteractive` as appropriate.

---

## Security

- **Headers** – CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy in `next.config.js` and/or `vercel.json`.
- **RealScout/Calendly** – CSP includes `em.realscout.com`, `www.realscout.com`, Calendly domains as required.
- **Secrets** – No API keys in client bundles; server-only usage in API routes or server components.

---

## Deployment (Vercel)

- **Framework** – Next.js; build command `next build`; output `.next`.
- **Primary domain** – www.arcadiahomeslasvegas.com; apex redirects to www via `next.config.js` redirects.

---

## References

- `.cursor/rules/best-practices-2026.mdc` – Research-first, match existing patterns, minimal safe changes.
- `.cursor/rules/2026-performance-best-practices.mdc` – Images, caching, Core Web Vitals, a11y snippets.
