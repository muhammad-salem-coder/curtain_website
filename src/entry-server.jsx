import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { ServicePage } from "./components/servicepage.jsx";

/**
 * Build-time rendering entry, used by scripts/prerender.mjs.
 *
 * Without this the served HTML is an empty <div id="root">, so nothing paints —
 * not the hero image, not the H1, not a word of the service copy — until a
 * 233KB React bundle has downloaded and executed. Lighthouse put 55% of the
 * homepage LCP in "element render delay" for exactly that reason.
 *
 * It also means Googlebot gets the landing page copy in the initial response
 * instead of having to render JavaScript to find it, which is the whole point
 * of building per-service pages.
 *
 * `slug` is null for the homepage, otherwise the service page to render.
 */
export function render(slug) {
  return renderToString(
    <StrictMode>{slug ? <ServicePage slug={slug} /> : <App />}</StrictMode>,
  );
}
