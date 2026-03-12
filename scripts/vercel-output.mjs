/**
 * Emit Vercel Build Output API v3 so the deployment is static-only and SPA routes work.
 * Run after: npm run build (so public/ exists).
 * Vercel will use .vercel/output and ignore outputDirectory when this exists.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const outDir = path.join(root, ".vercel", "output");
const staticDir = path.join(outDir, "static");

if (!fs.existsSync(publicDir)) {
  console.error("vercel-output: public/ not found. Run npm run build first.");
  process.exit(1);
}

// .vercel/output/static <- copy public/*
fs.mkdirSync(staticDir, { recursive: true });
copyRecursive(publicDir, staticDir);

// .vercel/output/config.json
const config = {
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/index.html" },
  ],
};
fs.writeFileSync(
  path.join(outDir, "config.json"),
  JSON.stringify(config, null, 2)
);

console.log("vercel-output: .vercel/output written (static + SPA route).");

function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const e of entries) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      copyRecursive(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}
