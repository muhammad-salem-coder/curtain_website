# Al Amasi Dream Curtain & Décor — website

Static marketing site for a curtain, blinds, wallpaper, painting, flooring and
ceilings business in Abu Dhabi. React + Vite, **multi-page**, no router, no
backend. Pages are prerendered to static HTML at build time.

## Build / run

```bash
npm run dev      # localhost:5173
npm run build    # vite build + prerender -> dist/
npm run preview  # serves dist/ (uses the production base)
npm run lint     # must exit clean

npm run pages    # regenerate <slug>/index.html + main.jsx from page-meta.js
npm run images   # regenerate WebP derivatives after adding photos
```

`pages` and `images` are not part of `build` on purpose: both write files that
are committed, so the deploy build stays a plain, fast `vite build`. Run them
when you change page metadata or add a photograph, and commit the result.

## Tracking — do not break these link formats

Google Tag Manager (`GTM-P575RVSB`) fires the Google Ads conversions from
**Click URL contains** triggers. Two exact substrings are load-bearing:

```
WhatsApp links must contain:   wa.me/971508679752
Phone links must contain:      tel:+971508679752
```

Both come from `BUSINESS` in `src/data/site.js`. Reverting to the old local
format (`wa.me/0508679752`, `tel:0508679752`) or dropping the `+` silently kills
conversion tracking — it has happened once already. Adding *more* links in those
formats is free; the triggers match on "contains".

The GTM container snippet must stay in the `<head>` of every page. For the
generated pages it lives in the `GTM_HEAD`/`GTM_BODY` constants in
`scripts/gen-pages.mjs`, not in the HTML files themselves.

## Hosting — read before deploying

| Layer | Provider |
|---|---|
| Registrar | Porkbun |
| DNS | DigitalOcean (`ns1–3.digitalocean.com`) |
| CDN | Cloudflare |
| Origin | **DigitalOcean App Platform** (Spaces, `sfo3`) |
| Email | Zoho Mail |

**Production is <https://alamasidreamcurtains.com>, and it auto-deploys from the
`main` branch.** Pushing to `main` publishes to the live site — there is no
separate deploy step and no staging. Treat every push to `main` as a release.

### The `gh-pages` deploy trap — removed

The `deploy` / `predeploy` scripts used to publish `dist/` to the `gh-pages`
branch, which is **not** production: it serves a stale secondary copy at
`muhammad-salem-coder.github.io/curtain_website/`. Running it never updated the
live site, and the two targets need *different* base paths, so building for one
broke the other. **Both scripts and the `gh-pages` dependency have been removed.**
Do not add them back; the `gh-pages` branch is left broken deliberately.

## Base path — the bug that took the site down once

`vite.config.js` sets `PROD_BASE = '/'` because the live domain serves from the
**domain root**. Setting it to `/curtain_website/` (correct only for the GitHub
Pages project-page URL) makes every asset 404 on production and renders a blank
white page. If a subpath deploy is ever needed again, it must not go through
`main`.

Second, non-obvious half of the same bug: **Vite rewrites asset paths in HTML and
CSS, but not paths written as strings in JavaScript.** A literal
`src="/images/foo.png"` in a component is emitted untouched and breaks under any
non-root base. So every `public/` reference goes through `asset()`:

```js
import { asset } from "./data/site";
<img src={asset("/images/decore1.png")} />
```

`asset()` resolves against `import.meta.env.BASE_URL` — a no-op at `/`, correct
if the base ever changes. Image paths inside `src/data/site.js` are already
resolved at module load, so components consuming that data need no wrapping.

`<meta content="...">` is also not rewritten by Vite; `og:image` and `og:url` in
`index.html` are therefore absolute URLs pointing at the live domain.

## Pages — one URL per service

Google Ads points keywords at these individually; that is what fixes "Landing
page experience". Do not change a slug without updating the Final URL on the
matching keywords in the Ads account.

```
/            homepage
/curtains/   /blinds/   /wallpaper/   /painting/   /flooring/   /ceilings/
```

Each is a real Vite MPA entry: a generated `<slug>/index.html` + `<slug>/main.jsx`
at the repo root, listed in `rollupOptions.input` in `vite.config.js`. Vite maps
the input path to the output path, so `curtains/index.html` builds to
`dist/curtains/index.html` and serves at `/curtains/`.

**Those two files per page are generated — never hand-edit them.** Edit
`src/data/page-meta.js` (title, description, h1, og image) or
`src/data/services.js` (body copy, galleries) and run `npm run pages`.

## Prerendering

`npm run build` runs `scripts/prerender.mjs` after the client build. It builds an
SSR bundle of `src/entry-server.jsx`, renders each route, and writes the markup
into `<div id="root">`. The client entries call **`hydrateRoot`, not
`createRoot`** — swapping that back would throw the markup away and repaint.

This exists for two reasons: the hero image and the landing copy paint without
waiting on a 233KB bundle (55% of the old LCP was "element render delay"), and a
crawler sees the service copy in the initial response instead of having to
execute JavaScript.

## Layout

```
index.html            homepage shell: GTM, SEO + OG tags, font preloads
<slug>/               GENERATED per-page shells (index.html + main.jsx)
scripts/
  gen-pages.mjs       writes <slug>/ shells, sitemap.xml, robots.txt
  prerender.mjs       renders every route to static HTML after the build
  build-images.py     WebP derivatives + src/data/image-sizes.json
  subset-fonts.sh     trims the self-hosted Inter families
src/
  main.jsx            homepage entry (hydrateRoot)
  entry-server.jsx    build-time render entry
  App.jsx             homepage composition + section order
  index.css           ALL styles; @font-face + design tokens at the top
  data/
    site.js           business details, image lists, asset(), whatsappLink()
    page-meta.js      per-page SEO metadata + LOCALES (no imports - read by
                      vite.config.js and the generator scripts too)
    services.js       service page body copy, galleries, CLAIMS
    image-sizes.json  GENERATED intrinsic dimensions
  components/
    navbar.jsx        floating pill nav + mobile menu
    hero.jsx          homepage hero + "Request a free measure" card
    servicepage.jsx   shared shell for all six service pages
    picture.jsx       <picture> with WebP srcset + intrinsic sizing
    icon.jsx          inline SVG icon set
    cards.jsx         gallery grid + lightbox
    section.jsx       Section wrapper, CopyPhone, Footer
    map.jsx           UNUSED dead code (nothing imports it)
public/
  images/             curtain/ wallpaper/ sofachairs/ parquet/ + generated .webp
  fonts/              self-hosted Inter + Inter Tight (latin, subset)
```

### Editing content

Three data files, each with a distinct job:

- `src/data/site.js` — `BUSINESS` (phone, address, socials), `HERO_IMAGE`,
  `HIGHLIGHTS`, and `SERVICES` (the homepage work-gallery tabs, which still
  include upholstery — it has no landing page because no ad keywords target it).
- `src/data/page-meta.js` — per-page `<title>`, meta description, `h1`, og image,
  and `LOCALES`. Read by `vite.config.js` and both generator scripts, so it must
  stay import-free.
- `src/data/services.js` — the service page bodies: lead, intro, `offer` items,
  `process` steps, `turnaround`, gallery, `related`, and the Ads `keywords` each
  page is the Final URL for.

**Adding a photo:** drop it in `public/images/<category>/`, add an entry with a
real `alt`, then run `npm run images` and commit the generated `.webp` files.
Nothing scans the directory. If you skip `npm run images`, `<Picture>` notices
the missing size entry and serves the original rather than a broken tile — but
the page then ships a full-size JPEG, so do not rely on it.

## Contact — there is no form or email backend

The hero card is phone-first by design: a `tel:` link plus two buttons that jump
to lower sections. The nav pill is also a `tel:` link labelled just "Contact"
(the number lives in its `aria-label`). WhatsApp remains via the floating button
and the About section's "Start a project", built by `whatsappLink()`.

Wiring up email would need either a form service (Formspree / Web3Forms — works
on static hosting) or a serverless function. **Resend cannot be called from the
browser** — the API key would ship in the bundle, and it rejects browser origins.

## Images, fonts and icons

- **Every photo goes through `<Picture>`** (`src/components/picture.jsx`), which
  emits a WebP `srcset` from the derivatives `scripts/build-images.py` writes
  (`-640`, `-1024`, `-1280`) with the original as the `<img>` fallback.
- **`<picture>` does not fall back when a chosen `<source>` 404s.** That is why
  `<Picture>` omits the `<source>` entirely for images with no entry in
  `image-sizes.json`.
- **`priority` images offer only the smallest and largest candidate.** The
  preload scanner can pick a candidate before the viewport meta applies and
  layout then picks a different one — measured as the hero downloading twice,
  1280 + 1024, 102KB for one image.
- **Small cards cap `widths` at 640.** A 360px card on a DPR 2.6 phone would
  otherwise claim the 1024 file; five of those competed with the hero for LCP.
- **Fonts are self-hosted and subset** in `public/fonts/`, declared as
  `@font-face` at the top of `index.css` and preloaded from each `<head>`.
  Google Fonts cost an extra origin, a stylesheet round trip and 92KB;
  `scripts/subset-fonts.sh` trims the same two families to 69KB.
- **There is no Font Awesome.** The kit script pulled ~155KB of webfont plus four
  stylesheets to draw seven glyphs; they are inline SVG in
  `src/components/icon.jsx`. Do not reintroduce an icon font.

## CSS gotchas

- **`picture { display: contents }`** keeps the `<img>` participating in the
  parent grid/flex. Selectors that used a child combinator on an image need
  `> picture > img` — `.band` and `.about` already do.
- **Contrast on the CTA buttons.** White on `--accent` is only 3.2:1, so the call
  button uses `--accent-cta` (#8d6c2c, 4.9:1). The WhatsApp button keeps the
  brand green and uses dark ink text instead (8.7:1). Do not "tidy" these back to
  the base accent or to white-on-green.

- **`aspect-ratio` + `min-height` on the same box** makes height drive width,
  which overflows narrow grid columns. `.offer__media` uses `aspect-ratio` alone.
- **The nav must sit *inside* the hero card.** `.nav` is `position: fixed` with
  `top: calc(var(--frame) + 10px)` while the hero's inset is `var(--frame)`. If
  the nav floats above the hero it lands on the cream page background and its
  white text becomes invisible.
- **Nav links are centred** via a `1fr auto 1fr` grid, which only works while the
  side columns can stay equal. Below ~1200px the links get wide enough to squeeze
  them, so the menu button takes over at that breakpoint — not a phone-only
  breakpoint, and lowering it reintroduces off-centre links.
- `--frame` is the uniform hero inset (all four sides). `.page` uses it as
  padding; the hero has no margin of its own.

## ESLint

Flat config: **global `ignores` must be its own config entry.** Inside a block
with `files`, it only scopes that block, which previously let `dist/` get linted.
`react/prop-types` is off — plain-JS project with no prop-types dependency.

## Arabic

Not built yet, deliberately. `LOCALES` in `src/data/page-meta.js` is the switch —
uncommenting the `ar` entry makes the generator emit `/ar/<slug>/`, wire
reciprocal `hreflang`, and set `lang`/`dir`. English URLs do not move, so Final
URLs already set in Google Ads keep working.

Two things are needed first: human-written Arabic copy (**do not
machine-translate** — visibly MT Arabic reads as a scam signal to a UAE customer),
and an RTL pass over the physical `left`/`right` offsets in `.nav`,
`.float-call`, `.lightbox__nav` and `.why__pair`.

## Known issues

- **No photographs of painting, ceilings or partitions exist in the repo.** Those
  two landing pages render a plain dark lander and carry a "photos being added"
  note. Real job photos are the single biggest remaining improvement to them.
- Flooring has only three photos, all parquet, while the ad keywords also cover
  vinyl and carpet.
- `public/images/wallpaper/images.jpg` (225×225) and `images (1).jpg` (277×182)
  are thumbnail-sized, have no WebP derivatives, and are no longer referenced.
  The files are still on disk.
- The turnaround copy on each service page is deliberately non-committal about
  timings. **The owner should confirm real lead times** before it is tightened.
- GitHub reports ~30 Dependabot vulnerabilities on `main`; not audited for
  runtime vs build-time impact.
- `src/components/map.jsx` is dead code and pulls `google-map-react` /
  `leaflet` / `react-leaflet` into `package.json` for nothing.
