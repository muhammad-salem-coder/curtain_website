/**
 * Renders every page to static HTML after the client build.
 *
 * Runs as part of `npm run build`: vite builds the client bundle, then this
 * builds an SSR bundle of src/entry-server.jsx, renders each route, and writes
 * the markup into the `<div id="root">` of the matching dist HTML file. The
 * client entries call hydrateRoot, so React adopts that markup rather than
 * throwing it away.
 *
 * The payoff is that the hero image and the landing page copy are in the HTML
 * response, so they paint without waiting on the bundle and are visible to a
 * crawler that does not execute JavaScript.
 *
 * If this step fails the build fails loudly rather than silently shipping empty
 * shells — an un-prerendered page still works for users but loses both benefits,
 * which is exactly the regression that would go unnoticed.
 */
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

import { PAGE_META } from "../src/data/page-meta.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SSR_OUT = join(ROOT, "node_modules", ".prerender");

const ROUTES = [
  { slug: null, html: join(ROOT, "dist", "index.html"), label: "/" },
  ...PAGE_META.map((page) => ({
    slug: page.slug,
    html: join(ROOT, "dist", page.slug, "index.html"),
    label: `/${page.slug}/`,
  })),
];

await build({
  logLevel: "warn",
  build: {
    ssr: join(ROOT, "src", "entry-server.jsx"),
    outDir: SSR_OUT,
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
  },
});

const { render } = await import(join(SSR_OUT, "entry-server.mjs"));

const PLACEHOLDER = '<div id="root"></div>';

for (const route of ROUTES) {
  const shell = readFileSync(route.html, "utf8");
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`${route.label}: no empty #root to fill — already rendered?`);
  }
  const markup = render(route.slug);
  writeFileSync(route.html, shell.replace(PLACEHOLDER, `<div id="root">${markup}</div>`));
  console.log(`  ${route.label.padEnd(12)} ${(markup.length / 1024).toFixed(1)}KB of markup`);
}

rmSync(SSR_OUT, { recursive: true, force: true });
console.log(`\n${ROUTES.length} pages prerendered`);
