/**
 * Inline SVG replacements for the seven Font Awesome glyphs the site used.
 *
 * The FA kit script pulled ~155KB of `free-fa-solid-900.woff2`, a second brands
 * font and four stylesheets to draw those seven icons, and was the single
 * heaviest thing on the page. These render from the bundle with no extra
 * request. `currentColor` keeps them inheriting colour exactly as the font did.
 */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const PATHS = {
  phone: (
    <path
      {...STROKE}
      d="M6.6 3.5h-2A1.6 1.6 0 0 0 3 5.2C3 13.4 10.6 21 18.8 21a1.6 1.6 0 0 0 1.7-1.6v-2a1 1 0 0 0-.8-1l-3.1-.6a1 1 0 0 0-1 .4l-.9 1.2a13.4 13.4 0 0 1-6.1-6.1l1.2-.9a1 1 0 0 0 .4-1l-.6-3.1a1 1 0 0 0-1-.8Z"
    />
  ),
  bars: <path {...STROKE} d="M4 7h16M4 12h16M4 17h16" />,
  xmark: <path {...STROKE} d="M6 6l12 12M18 6L6 18" />,
  "chevron-left": <path {...STROKE} d="M15 5l-7 7 7 7" />,
  "chevron-right": <path {...STROKE} d="M9 5l7 7-7 7" />,
  check: <path {...STROKE} d="M4.5 12.5l5 5 10-11" />,
  "map-pin": (
    <>
      <path {...STROKE} d="M19 10.4c0 5.1-7 11.1-7 11.1s-7-6-7-11.1a7 7 0 1 1 14 0Z" />
      <circle {...STROKE} cx="12" cy="10.2" r="2.6" />
    </>
  ),
  "arrow-right": <path {...STROKE} d="M4 12h15m-6-6.5L19.5 12 13 18.5" />,
  "ruler-combined": (
    <>
      <path {...STROKE} d="M3 3h6v12h12v6H3V3Z" />
      <path {...STROKE} d="M9 7.5h2.5M9 11.5h2.5M13 15v2.5M17 15v2.5" />
    </>
  ),
  // Brand mark, so this one is a filled path rather than the stroke set.
  whatsapp: (
    <path
      fill="currentColor"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.49-.4-.42-.55-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.21 3.72.59.25 1.05.4 1.4.52.59.18 1.13.16 1.55.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z"
    />
  ),
};

export function Icon({ name, className = "", size = "1em" }) {
  const path = PATHS[name];
  if (!path) return null;

  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
}
