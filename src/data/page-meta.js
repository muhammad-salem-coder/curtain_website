/**
 * Metadata for the service landing pages, in a module with no imports and no
 * `import.meta.env` use, so it can be read by three consumers at once:
 *
 *   - src/data/services.js  (merges it with the page body content)
 *   - scripts/gen-pages.mjs (writes <slug>/index.html and <slug>/main.jsx)
 *   - vite.config.js        (builds the MPA `input` map)
 *
 * Keeping <title> and the meta description here rather than in the HTML files
 * means the generator owns those files entirely and they can be regenerated
 * without losing hand edits. Edit copy here, then run `npm run pages`.
 */

export const SITE_ORIGIN = "https://alamasidreamcurtains.com";

/**
 * Locales the site is built for.
 *
 * Only English ships today. The Google Ads account targets English and Arabic
 * and has seven Arabic keywords live, so Arabic landing pages are expected —
 * this list is the switch. Adding the commented entry makes scripts/gen-pages.mjs
 * emit `/ar/<slug>/` alongside the English pages, wires reciprocal hreflang, and
 * sets `lang`/`dir` on the document. English URLs do not move, so Final URLs
 * already set in Google Ads keep working.
 *
 * What is still needed before enabling it:
 *   1. Human-written Arabic copy (see `ar` fields in src/data/services.js).
 *      Do not machine-translate — visibly MT Arabic reads as a scam signal to a
 *      UAE customer and would cost more trust than the Quality Score gains.
 *   2. An RTL pass over src/index.css: the physical `left`/`right` offsets in
 *      .nav, .float-call, .lightbox__nav and .why__pair need logical properties.
 */
export const LOCALES = [
  { code: "en", prefix: "", dir: "ltr" },
  // { code: "ar", prefix: "/ar", dir: "rtl" },
];

export const PAGE_META = [
  {
    slug: "curtains",
    nav: "Curtains",
    title: "Curtains in Abu Dhabi | Made to Measure & Fitted — Al Amasi Dream",
    description:
      "Curtain shop and fitting service on Electra Street, Abu Dhabi. Custom curtains, sheers, blackouts and motorised tracks — measured at your home, sewn in our workshop, fitted by our own team. Free measure and quote.",
    h1: "Curtains in Abu Dhabi, made to measure and fitted",
    serviceType: "Curtain supply and installation",
    ogImage: "/images/curtain/pic5.jpeg",
  },
  {
    slug: "blinds",
    nav: "Blinds",
    title: "Roller Blinds & Shutters in Abu Dhabi | Supplied & Fitted — Al Amasi Dream",
    description:
      "Roller blinds, Roman blinds, venetian, vertical and wooden shutters supplied and installed across Abu Dhabi. Blackout and sunscreen fabrics, measured on site and fitted by our own team. Free measure and quote.",
    h1: "Roller blinds and shutters in Abu Dhabi",
    serviceType: "Blind and shutter supply and installation",
    ogImage: "/images/curtain/blinds3.png",
  },
  {
    slug: "wallpaper",
    nav: "Wallpaper",
    title: "Wallpaper Installation in Abu Dhabi | Supply & Hanging — Al Amasi Dream",
    description:
      "Wallpaper supplied and installed across Abu Dhabi. Feature walls, full rooms, textured and washable finishes. Wall preparation included, samples brought to your home. Free measure and quote from Electra Street.",
    h1: "Wallpaper supply and installation in Abu Dhabi",
    serviceType: "Wallpaper supply and installation",
    ogImage: "/images/wallpaper/wallpaper3.png",
  },
  {
    slug: "painting",
    nav: "Painting",
    title: "Wall Painting in Abu Dhabi | Painting Company — Al Amasi Dream",
    description:
      "Interior and exterior wall painting across Abu Dhabi. Villas, apartments, offices and shops — preparation, filling, priming and finish coats by our own team. Free site visit and quote from Electra Street.",
    h1: "Wall painting in Abu Dhabi",
    serviceType: "Painting and decorating",
    ogImage: "/images/decore1.png",
  },
  {
    slug: "flooring",
    nav: "Flooring",
    title:
      "Wooden, Vinyl & Carpet Flooring in Abu Dhabi | Supply & Fitting — Al Amasi Dream",
    description:
      "Wooden flooring, parquet, luxury vinyl and carpet supplied and installed across Abu Dhabi. Subfloor preparation, skirting and finishing included. Measured per square metre. Free measure and quote.",
    h1: "Wooden, vinyl and carpet flooring in Abu Dhabi",
    serviceType: "Flooring supply and installation",
    ogImage: "/images/parquet/pic24.jpg",
  },
  {
    slug: "ceilings",
    nav: "Ceilings",
    title: "False Ceilings & Room Partitions in Abu Dhabi — Al Amasi Dream",
    description:
      "Gypsum false ceilings and room partitions built across Abu Dhabi. Cove and recessed lighting, glass and gypsum partitions for offices and villas. Free site visit and quote from Electra Street.",
    h1: "False ceilings and room partitions in Abu Dhabi",
    serviceType: "False ceiling and partition construction",
    ogImage: "/images/curtain/pic13.jpeg",
  },
];
