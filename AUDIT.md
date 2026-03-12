# Audit: Production blank page / “Loading…” (app not mounting)

**Date:** March 2026  
**Issue:** Live site shows “Loading…” or “This page is taking longer than usual” and never renders the React app. A small red “i” icon may appear in the bottom-right.

---

## 1. Architecture summary

| Layer | Location | Purpose |
|-------|----------|---------|
| **Client (SPA)** | `client/` | Vite + React; entry `client/index.html` → `/src/main.tsx` |
| **Build (client)** | `vite build` | Output: `public/` at repo root (index.html + `assets/*.js`, `assets/*.css`) |
| **Server (Node)** | `server/` | Express; dev uses Vite middleware, prod uses `serveStatic(app)` → repo-root `public` |
| **Build (server)** | `esbuild server/index.ts` | Output: `dist/index.js` |
| **Deploy** | Vercel | Either (A) static from `public` or (B) Node from `dist/index.js` |

**Critical:** The HTML the browser receives must be the **built** `public/index.html`, which references `/assets/index-<hash>.js`. The **source** `client/index.html` has `<script src="/src/main.tsx">`, which only works in dev (Vite serves it). In production that path must not be used.

---

## 2. Root cause (why the app doesn’t mount)

The app fails to mount when:

1. **Wrong HTML is served**  
   If the deployed document is **source** `client/index.html` (or any HTML that still has `src="/src/main.tsx"`), the browser requests `/src/main.tsx`. That file does not exist in a production build (only built assets under `/assets/` exist). Result: script 404 → no React → “Loading…” stays.

2. **Built assets not in the deployment**  
   If Output Directory is not `public`, then `index.html` and `assets/*` may be in a different path or not deployed. Requests to `/assets/index-xxx.js` get 404 (or are rewritten to index.html). Result: script fails to load or is HTML → app doesn’t run.

3. **Runtime error before first paint**  
   Less likely given the 6s fallback: if the main bundle loads but throws during initial execution (e.g. top-level import or `createRoot`), the root is never replaced. ErrorBoundary would only catch errors inside the React tree.

---

## 3. Vercel configuration

**Current `vercel.json`:**

- Rewrites: `(.*) → /index.html` (SPA fallback).
- Headers: Cache-Control for `/assets/(.*)`, `/`, `/index.html`.

Vercel serves **static files from the build output first**; rewrites apply when no file matches. So:

- `/assets/index-abc123.js` → must be served as a **file** from the build output.
- `/`, `/about`, etc. → no matching file → rewrite → serve `index.html`.

So rewrites are correct **provided** the build output is the one that contains both `index.html` and `assets/`.

**Required:**

- **Output Directory:** `public`  
  So that the deployed root is exactly what Vite writes: `index.html` and `assets/` with hashed JS/CSS.
- **Build command:** `npm run build` (or `vite build && esbuild ...` as in package.json).
- **Root Directory:** leave blank so the build runs from repo root and `vite.config.ts` and `server/` resolve correctly.

If Output Directory is wrong (e.g. `dist` or empty), the deployed “index.html” may be wrong or assets may not be at `/assets/`, leading to 404s and the app never mounting.

---

## 4. Server vs static on Vercel

- **Static (recommended for this SPA):**  
  - Output Directory = `public`.  
  - No Node server in the deployment.  
  - All routes (including `/api/*` if any) must be handled by Vercel serverless/API routes if you add them later.

- **Node server:**  
  - Build produces `dist/index.js` and repo-root `public/`.  
  - You’d need a Vercel Node runtime or serverless that runs `node dist/index.js` and serves from `public`.  
  - `serveStatic(app)` in `server/vite.ts` serves from `path.resolve(import.meta.dirname, "..", "public")` (repo-root `public` when run from `dist/index.js`). So the same `public` must be available to the server at runtime.

For “blank page” debugging, the simplest path is: **deploy as static with Output Directory = public** and confirm the app loads. Add or switch to Node later if needed.

---

## 5. Checks performed in codebase

| Check | Result |
|-------|--------|
| `client/index.html` script in source | `src="/src/main.tsx"` (dev only). Built output must replace with `/assets/...` (Vite does this). |
| `vite.config.ts` `root` | `client` – correct. |
| `vite.config.ts` `build.outDir` | `public` (repo root) – correct. |
| `server/vite.ts` `serveStatic` | Serves repo-root `public` when run from `dist/` – correct. |
| Replit error overlay in prod | Disabled in vite.config when `!isDev && !isReplit` – correct. |
| Root ErrorBoundary | main.tsx wraps App in ErrorBoundary – correct. |
| Lazy widgets (chat, Calendly) | Deferred after first paint via DeferredWidgets – reduces risk of chunk failure blocking paint. |
| 6s fallback | index.html script replaces “Loading…” with message + Refresh – confirms HTML is served and app didn’t mount. |

No top-level client code found that would obviously throw before React mounts (e.g. no unsafe `process.env` or missing globals in entry path).

---

## 6. Red “i” icon

- Replit runtime error overlay is disabled in production build.  
- So the red “i” is likely: browser extension, password manager, or another third-party script, not from this repo.  
- If the app loads correctly, the icon may still appear; it’s not proof the app is broken.

---

## 7. Action items

### 7.1 Vercel (do first)

1. Open project → **Settings** → **General**.
2. Set **Output Directory** to **`public`** (no trailing slash).
3. **Root Directory:** leave blank.
4. **Build Command:** `npm run build` (or keep existing).
5. **Redeploy** (e.g. latest commit from `main`).
6. After deploy, open the live URL → DevTools → **Network** → reload:
   - Document (first request): should be 200, and the response body should contain a script tag like `<script type="module" ... src="/assets/index-....js">` (not `/src/main.tsx`).
   - Request to `/assets/index-....js`: must be **200** (not 404). If it’s 404, the build output is still not being used correctly.

### 7.2 If the app still doesn’t load

1. **Console:** Note any red errors (e.g. “Failed to load module”, “ChunkLoadError”, syntax errors).
2. **Network:** Confirm the main script and its dependency chunks (e.g. `react-*.js`, `vendor-*.js`) return 200.
3. **View Page Source:** Ensure the served HTML references `/assets/...` scripts, not `/src/main.tsx`.
4. Try a hard refresh (Ctrl+Shift+R / Cmd+Shift+R) or another browser/incognito to rule out cache or extensions.

### 7.3 Optional: verify build locally

From repo root (with dependencies installed):

```bash
npm run build
```

Then:

- Confirm `public/index.html` exists and contains script tags like `src="/assets/index-....js"`.
- Confirm `public/assets/` contains `index-*.js` (and CSS if any).

If this is correct locally but the live site still serves different HTML or 404s for `/assets/*`, the deployment configuration (Output Directory / build step) is still wrong on Vercel.

---

## 8. References

- DEPLOYMENT_GUIDE.md – “Blank page or small red ‘i’ icon”, “If you see ‘Loading…’ for more than a few seconds”.
- Vercel: [Rewrites](https://vercel.com/docs/edge-network/rewrites), [Build Output](https://vercel.com/docs/build-output-api/v3/primitives).
- This repo: `vite.config.ts` (outDir, root), `server/vite.ts` (serveStatic), `client/index.html` (script + 6s fallback).
