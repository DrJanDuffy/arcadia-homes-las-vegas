# Arcadia Homes Las Vegas – Deployment Guide

**Primary site:** https://www.arcadiahomeslasvegas.com (www is canonical).

**Stack:** Next.js 14 (App Router), Vercel. This repo is a Next.js site (from heyberkshire.com clone, rebranded for Arcadia).

---

## Get live (minimal path)

1. **Push** to GitHub. `vercel.json` is set for Next.js (`framework: "nextjs"`, `outputDirectory: ".next"`).
2. **Vercel:** New Project → Import repo. **Framework Preset: Next.js.** Leave Build Command and Output Directory at defaults. Deploy.
3. **Domain:** Add **www.arcadiahomeslasvegas.com** as primary; redirect **arcadiahomeslasvegas.com** → www.

### Required: Root Directory must be empty

This repo is a **Next.js app at the repo root** (no `client/` subfolder). In Vercel:

- **Settings → General → Root Directory** must be **empty** (or `.`).
- If Root Directory is set to `client`, the build will fail with: *"The specified Root Directory 'client' does not exist."*
- Root Directory cannot be set in `vercel.json`; it is a project setting only.

---

## Local

```bash
npm install --legacy-peer-deps
npm run dev
npm run build && npm run start
```

---

## NAP (match GBP)

- **Agent:** Dr. Jan Duffy, License S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties  
- **Phone:** (702) 500-0337 | **Email:** DrDuffy@arcadiahomeslasvegas.com  
- **Primary URL:** https://www.arcadiahomeslasvegas.com  
