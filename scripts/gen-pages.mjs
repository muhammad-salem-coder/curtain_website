/**
 * Generates the Vite multi-page entries for the service landing pages.
 *
 * For each entry in src/data/page-meta.js this writes two files at the repo
 * root: `<slug>/index.html` and `<slug>/main.jsx`. Vite derives the output path
 * from the input path, so `curtains/index.html` builds to
 * `dist/curtains/index.html` and serves at `/curtains/`.
 *
 * Both files are fully generated — do not hand-edit them, the next run will
 * overwrite. Change the copy in page-meta.js and re-run `npm run pages`.
 *
 * Why static HTML rather than a client-side router: the <title>, meta
 * description, canonical and JSON-LD have to be in the served markup. A React
 * router would put them behind JS execution, and the entire point of this
 * rebuild is that Google can see a wallpaper page when it asks for one.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { LOCALES, PAGE_META, SITE_ORIGIN } from "../src/data/page-meta.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const GTM_HEAD = `    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P575RVSB');</script>
    <!-- End Google Tag Manager -->`;

const GTM_BODY = `    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P575RVSB"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`;

const urlFor = (locale, slug) => `${locale.prefix}/${slug}/`;

/**
 * Reciprocal hreflang, emitted only once a second locale is enabled. Pointing
 * hreflang at pages that do not exist yet is worse than omitting it.
 */
function alternates(page) {
  if (LOCALES.length < 2) return "";
  return (
    "\n" +
    LOCALES.map(
      (locale) =>
        `    <link rel="alternate" hreflang="${locale.code}" href="${SITE_ORIGIN}${urlFor(locale, page.slug)}" />`,
    ).join("\n")
  );
}

const escape = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * LocalBusiness with the service as an offer. This is what lets Google connect
 * "wallpaper abu dhabi" to a real business with a real address, rather than to
 * an anonymous page that happens to contain the words.
 */
function structuredData(page) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: "Al Amasi Dream Curtain & Decor",
      url: `${SITE_ORIGIN}/${page.slug}/`,
      telephone: "+971508679752",
      email: "alamasidream@gmail.com",
      image: `${SITE_ORIGIN}${page.ogImage}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hamad Center, 2nd Floor, Shop No. 85, Electra Street",
        addressLocality: "Abu Dhabi",
        addressRegion: "Abu Dhabi",
        postOfficeBoxNumber: "13074",
        addressCountry: "AE",
      },
      areaServed: { "@type": "City", name: "Abu Dhabi" },
      openingHours: "Sa-Th 09:00-21:00",
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: page.serviceType,
          areaServed: { "@type": "City", name: "Abu Dhabi" },
        },
      },
    },
    null,
    2,
  ).replace(/\n/g, "\n    ");
}

function html(page, locale) {
  return `<!doctype html>
<html lang="${locale.code}" dir="${locale.dir}">
  <head>
${GTM_HEAD}

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="/images/logo.png" />

    <title>${escape(page.title)}</title>
    <meta name="description" content="${escape(page.description)}" />
    <link rel="canonical" href="${SITE_ORIGIN}${urlFor(locale, page.slug)}" />${alternates(page)}
    <meta name="theme-color" content="#f5f0e8" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="${SITE_ORIGIN}${urlFor(locale, page.slug)}" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:image" content="${SITE_ORIGIN}${page.ogImage}" />

    <link rel="preload" as="font" type="font/woff2" href="/fonts/inter-latin.woff2" crossorigin />
    <link rel="preload" as="font" type="font/woff2" href="/fonts/inter-tight-latin.woff2" crossorigin />

    <script type="application/ld+json">
    ${structuredData(page)}
    </script>
  </head>
  <body>
${GTM_BODY}

    <div id="root"></div>
    <script type="module" src="./main.jsx"></script>
  </body>
</html>
`;
}

function entry(page, locale) {
  return `import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { ServicePage } from "${"../".repeat(locale.prefix ? 2 : 1)}src/components/servicepage.jsx";
import "${"../".repeat(locale.prefix ? 2 : 1)}src/index.css";

// hydrateRoot, not createRoot: scripts/prerender.mjs has already written this
// page's markup into #root, and createRoot would throw it away and repaint.
hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <ServicePage slug="${page.slug}" />
  </StrictMode>,
);
`;
}

function sitemap() {
  const urls = LOCALES.flatMap((locale) => [
    `${locale.prefix}/`,
    ...PAGE_META.map((page) => urlFor(locale, page.slug)),
  ]);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${SITE_ORIGIN}${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url.endsWith("/") && url.split("/").filter(Boolean).length === 0 ? "1.0" : "0.9"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
}

let count = 0;
for (const locale of LOCALES) {
  for (const page of PAGE_META) {
    const dir = join(ROOT, ...locale.prefix.split("/").filter(Boolean), page.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html(page, locale));
    writeFileSync(join(dir, "main.jsx"), entry(page, locale));
    console.log(`  ${urlFor(locale, page.slug)}`);
    count += 1;
  }
}

writeFileSync(join(ROOT, "public", "sitemap.xml"), sitemap());
writeFileSync(
  join(ROOT, "public", "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`,
);

console.log(`\n${count} pages, sitemap.xml and robots.txt written`);
