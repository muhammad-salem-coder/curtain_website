import { Gallery } from "./cards";
import { Icon } from "./icon";
import { Navbar, CallButton } from "./navbar";
import { Picture } from "./picture";
import { Footer, Section } from "./section";
import { BUSINESS, whatsappLink } from "../data/site";
import { CLAIMS, findPage, pageUrl } from "../data/services";

/**
 * The lander. Everything a Google Ads visitor needs to act is inside this one
 * block: what the service is, that it is in Abu Dhabi, and two thumb-sized
 * contact buttons — all above the fold at 390px, which is the viewport nearly
 * every local curtain and fit-out search arrives on.
 *
 * Pages with no photograph of their own (painting, ceilings) fall back to the
 * dark gradient rather than borrowing an unrelated image: a curtain photo on
 * the painting page is exactly the relevance mismatch this rebuild exists to
 * fix.
 */
function Lander({ page }) {
  return (
    <section className={`lander ${page.hero ? "" : "lander--plain"}`} id="top">
      {page.hero && (
        <>
          <Picture
            className="lander__bg"
            src={page.hero.src}
            alt=""
            priority
            sizes="100vw"
          />
          <div className="lander__scrim" />
        </>
      )}

      <div className="lander__inner">
        <p className="pill pill--ghost">
          <span className="dot" /> Electra Street, Abu Dhabi
        </p>

        <h1>{page.h1}</h1>
        <p className="lander__lead">{page.lead}</p>

        <div className="cta">
          <a className="cta__btn cta__btn--call" href={BUSINESS.phoneHref}>
            <Icon name="phone" />
            <span>
              <small>Call now</small>
              {BUSINESS.phone}
            </span>
          </a>

          <a
            className="cta__btn cta__btn--wa"
            href={whatsappLink({ service: page.nav })}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" />
            <span>
              <small>Message us</small>
              WhatsApp
            </span>
          </a>
        </div>

        <p className="lander__note">
          Free site measure and quote · Saturday to Thursday, 9am – 9pm
        </p>
      </div>
    </section>
  );
}

function Offer({ offer }) {
  return (
    <Section id="what" eyebrow="What we do" heading={offer.heading}>
      <div className="offer-grid">
        {offer.items.map((item) => (
          <article className="offer-card" key={item.title}>
            <span className="offer-card__tick">
              <Icon name="check" />
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Process({ process, turnaround }) {
  return (
    <Section id="how" eyebrow="How it works" heading={process.heading}>
      <ol className="steps">
        {process.steps.map((step, index) => (
          <li className="steps__item" key={step.title}>
            <span className="steps__n">{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="turnaround">
        <h3>How long it takes</h3>
        <p>{turnaround}</p>
      </div>
    </Section>
  );
}

function Claims() {
  return (
    <Section id="why" className="block--why-flat" eyebrow="Why Al Amasi" heading="Quality, trust and excellence">
      <div className="claims">
        {CLAIMS.map((claim) => (
          <div className="claims__item" key={claim.title}>
            <h3>{claim.title}</h3>
            <p>{claim.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Visit({ page }) {
  return (
    <Section id="visit" className="block--visit" eyebrow="Find us" heading="Come and see the samples">
      <div className="visit__grid">
        <div className="visit__card">
          <h3>
            <Icon name="map-pin" /> Showroom
          </h3>
          {BUSINESS.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>P.O. Box 13074, Abu Dhabi</p>
          <a
            className="link-arrow"
            href="https://maps.google.com/?q=Hamad+Center+Electra+Street+Abu+Dhabi"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>

        <div className="visit__card">
          <h3>Talk to us about {page.nav.toLowerCase()}</h3>
          <p>
            Tell us the rooms and we will come and measure. No charge for the
            visit and no obligation to order.
          </p>
          <div className="visit__actions">
            <a className="btn btn--accent" href={BUSINESS.phoneHref}>
              <Icon name="phone" /> {BUSINESS.phone}
            </a>
            <a
              className="btn btn--ghost-dark"
              href={whatsappLink({ service: page.nav })}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" /> WhatsApp
            </a>
          </div>
          <p className="visit__mail">
            <a href="mailto:alamasidream@gmail.com">alamasidream@gmail.com</a>
          </p>
        </div>
      </div>
    </Section>
  );
}

function Related({ slugs }) {
  const pages = slugs.map(findPage).filter(Boolean);
  if (!pages.length) return null;

  return (
    <Section id="related" eyebrow="Also from us" heading="Other work we do">
      <div className="related">
        {pages.map((related) => (
          <a className="related__card" key={related.slug} href={pageUrl(related.slug)}>
            <h3>{related.h1.replace(/ in Abu Dhabi.*/, "")}</h3>
            <Icon name="arrow-right" />
          </a>
        ))}
      </div>
    </Section>
  );
}

export function ServicePage({ slug }) {
  const page = findPage(slug);
  if (!page) throw new Error(`Unknown service page "${slug}"`);

  return (
    <>
      <Navbar active={slug} />
      <CallButton service={page.nav} />

      <main className="page">
        <Lander page={page} />

        <Section id="about-service" className="block--prose">
          <div className="prose">
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Offer offer={page.offer} />
        <Process process={page.process} turnaround={page.turnaround} />

        {page.gallery.length > 0 && (
          <Section
            id="work"
            className="block--work"
            eyebrow="Our work"
            heading={`Recent ${page.nav.toLowerCase()} projects`}
            lead="Photographed in customers' homes and offices around Abu Dhabi."
          >
            <Gallery items={page.gallery} />
            {page.galleryNote && <p className="gallery-note">{page.galleryNote}</p>}
          </Section>
        )}

        {page.gallery.length === 0 && page.galleryNote && (
          <Section id="work" eyebrow="Our work" heading="Photographs">
            <p className="gallery-note gallery-note--solo">{page.galleryNote}</p>
          </Section>
        )}

        <Claims />
        <Visit page={page} />
        <Related slugs={page.related} />

        <Footer />
      </main>
    </>
  );
}
