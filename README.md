# Arcadia Homes Las Vegas - Luxury Real Estate Website

Built for **Dr. Jan Duffy** – Summerlin West & Arcadia specialist, Berkshire Hathaway HomeServices Nevada Properties.

## Stack

- **Frontend:** React 18, Vite, Wouter, Tailwind CSS, shadcn/ui, TanStack Query
- **Backend:** Express, Drizzle ORM, PostgreSQL (Neon/Vercel Postgres)
- **Deploy:** Vercel (output `dist/public`, SPA rewrite in `vercel.json`) – see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## Integrations

- **Calendly** – Floating “Schedule a showing” badge + inline widget on Contact; Dr. Jan Duffy booking URL.
- **AI Chat** – Floating widget (`/api/chat`). Set `OPENROUTER_API_KEY` for OpenRouter/Claude replies; otherwise shows contact fallback (call/email).
- **Leads** – `POST /api/leads`; `LeadCaptureForm` on Contact (“Looking for a Home in Arcadia?”) and reusable for other pages.
- **Reviews** – `ReviewsSection` (testimonials page + optional elsewhere) with aggregate rating and Google reviews CTA.

## Commands

- `npm run dev` – Development server
- `npm run build` – Production build (Vite + server bundle)
- `npm run check` – TypeScript check
- `npm run start` – Run production server
