# Al Amasi Dream Curtain & Décor — website

Static marketing site for a curtain, blinds, wallpaper, upholstery and flooring
business in Abu Dhabi. React + Vite, single page, no router, no backend.

## Build / run

```bash
npm run dev      # localhost:5173
npm run build    # -> dist/
npm run preview  # serves dist/ (uses the production base)
npm run lint     # must exit clean
```

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

### `npm run deploy` is a trap — do not run it

The `deploy` / `predeploy` scripts publish `dist/` to the `gh-pages` branch.
That branch is **not** production; it serves a stale secondary copy at
`muhammad-salem-coder.github.io/curtain_website/`. Running it does not update the
live site and, worse, the two targets need *different* base paths (see below), so
building for one breaks the other. The GitHub Pages copy is currently broken and
left that way deliberately. Prefer removing these scripts.

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

## Layout

```
index.html            GTM, favicon, SEO + OG tags
src/
  main.jsx            entry
  App.jsx             page composition + section order
  index.css           ALL styles; design tokens in :root at the top
  data/site.js        all copy, image lists, asset(), whatsappLink()
  components/
    navbar.jsx        floating pill nav + mobile menu
    hero.jsx          hero + "Request a free measure" card
    cards.jsx         gallery grid + lightbox
    section.jsx       Section wrapper, CopyPhone, Footer
    map.jsx           UNUSED dead code (nothing imports it)
public/images/        curtain/ wallpaper/ sofachairs/ parquet/ + logo, companies
```

### Editing content

`src/data/site.js` is the single source of truth for copy and imagery:
`BUSINESS` (phone, address, socials), `HERO_IMAGE`, `HIGHLIGHTS` (the four
numbered points), and `SERVICES` (the four service rows and their galleries).
Adding a photo means dropping it in `public/images/<category>/` and adding an
entry with a real `alt` — nothing scans the directory.

## Contact — there is no form or email backend

The hero card is phone-first by design: a `tel:` link plus two buttons that jump
to lower sections. The nav pill is also a `tel:` link labelled just "Contact"
(the number lives in its `aria-label`). WhatsApp remains via the floating button
and the About section's "Start a project", built by `whatsappLink()`.

Wiring up email would need either a form service (Formspree / Web3Forms — works
on static hosting) or a serverless function. **Resend cannot be called from the
browser** — the API key would ship in the bundle, and it rejects browser origins.

## CSS gotchas

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

## Known issues

- `public/images/wallpaper/images.jpg` (225×225) and `images (1).jpg` (277×182)
  are thumbnail-sized and look soft next to the 1280×960 photos.
- GitHub reports ~30 Dependabot vulnerabilities on `main`; not audited for
  runtime vs build-time impact.
- `src/components/map.jsx` is dead code and pulls `google-map-react` /
  `leaflet` / `react-leaflet` into `package.json` for nothing.
