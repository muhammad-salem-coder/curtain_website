import { useState } from "react";
import { Gallery } from "./components/cards";
import { Hero } from "./components/hero";
import { Icon } from "./components/icon";
import { CallButton, Navbar } from "./components/navbar";
import { Picture } from "./components/picture";
import { CopyPhone, Footer, Section } from "./components/section";
import { asset, BUSINESS, HERO_IMAGE, HIGHLIGHTS, SERVICES, whatsappLink } from "./data/site";
import { CLAIMS, pageUrl } from "./data/services";
import { PAGE_META } from "./data/page-meta";

/**
 * The routing block. Every Google Ads keyword now has a dedicated landing page,
 * and this grid is how an organic visitor — and Googlebot — reaches all six
 * from the homepage.
 */
const GRID_LEADS = {
  curtains: "Made to measure, sewn in our workshop and fitted by our own team.",
  blinds: "Roller, Roman, venetian, vertical and shutters, measured to the recess.",
  wallpaper: "Supply and hanging, including the wall preparation underneath.",
  painting: "Interior and exterior, with the filling and priming done properly.",
  flooring: "Wooden, parquet, vinyl and carpet, laid over a prepared subfloor.",
  ceilings: "Gypsum ceilings, cove lighting, and gypsum or glass partitions.",
};

const GRID_IMAGES = {
  curtains: { src: "/images/curtain/pic4.jpeg", alt: "Sheer linen curtains beneath a carved pelmet" },
  blinds: { src: "/images/curtain/blinds3.png", alt: "Wooden venetian blinds in warm daylight" },
  wallpaper: { src: "/images/wallpaper/wallpaper3.png", alt: "Textured feature wallpaper in a styled interior" },
  painting: { src: null, alt: "" },
  flooring: { src: "/images/parquet/pic24.jpg", alt: "Herringbone oak parquet being laid by hand" },
  ceilings: { src: "/images/curtain/pic13.jpeg", alt: "Glass-partitioned office bay fitted with vertical blinds" },
};

function ServiceGrid() {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      heading="Six trades, one team"
      lead="Everything below is measured, supplied and installed by us — including the parts most suppliers hand off to someone else."
    >
      <div className="svc-grid">
        {PAGE_META.map((page) => {
          const image = GRID_IMAGES[page.slug];
          return (
            <a className="svc-card" key={page.slug} href={pageUrl(page.slug)}>
              <div className="svc-card__media">
                {image.src ? (
                  <Picture
                    src={asset(image.src)}
                    alt={image.alt}
                    sizes="(max-width: 700px) 92vw, 380px"
                    widths={[640]}
                  />
                ) : (
                  <span className="svc-card__placeholder" aria-hidden="true" />
                )}
              </div>
              <div className="svc-card__body">
                <h3>{page.nav}</h3>
                <p>{GRID_LEADS[page.slug]}</p>
                <span className="svc-card__go">
                  See {page.nav.toLowerCase()} <Icon name="arrow-right" />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}

function Highlights() {
  return (
    <Section
      id="why"
      className="block--why"
      eyebrow="Why Al Amasi"
      heading={<>A finished room, not just a delivered curtain</>}
      lead="We handle the measuring, the making and the fitting, so the result lines up with the space it was made for."
    >
      <div className="why__grid">
        {HIGHLIGHTS.map((item) => (
          <div className="why__pair" key={item.n}>
            <figure className="why__figure">
              <Picture
                src={item.image}
                alt={item.alt}
                sizes="(max-width: 700px) 92vw, 300px"
                widths={[640]}
              />
            </figure>
            <div className="why__note">
              <span className="why__n">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FeatureBand() {
  return (
    <section className="band">
      <Picture
        src={asset("/images/curtain/pic1.jpeg")}
        alt="Pleated drapes with tie-backs layered over sheers in a bedroom"
        sizes="100vw"
      />
      <div className="band__card">
        <span className="band__icon">
          <Icon name="ruler-combined" />
        </span>
        <p>
          Bring us a window and we&rsquo;ll bring the fabric book. We measure on site, show you
          how each material falls in your own light, and quote before a single cut is made.
        </p>
      </div>
    </section>
  );
}

function Claims() {
  return (
    <Section
      id="claims"
      className="block--why-flat"
      eyebrow="Quality · Trust · Excellence"
      heading="What you get from us"
    >
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

function App() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);
  const current = SERVICES.find((service) => service.id === activeService) ?? SERVICES[0];

  return (
    <>
      <Navbar />
      <CallButton />

      <main className="page">
        <Hero
          image={{ src: HERO_IMAGE }}
          heading={<>Curtains, blinds &amp; interior fit-out in Abu Dhabi</>}
          lead="Curtains, blinds, wallpaper, painting, flooring, ceilings and partitions — measured, supplied and fitted by one team across Abu Dhabi."
        />
        <ServiceGrid />
        <Highlights />
        <FeatureBand />

        <Section
          id="work"
          className="block--work"
          eyebrow="Our work"
          heading="Recent projects"
          lead="Photographed in customers' homes and offices around Abu Dhabi."
        >
          <div className="tabs" role="tablist">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                role="tab"
                aria-selected={service.id === activeService}
                className={`tab ${service.id === activeService ? "is-active" : ""}`}
                onClick={() => setActiveService(service.id)}
              >
                {service.name}
                <span>{service.gallery.length}</span>
              </button>
            ))}
          </div>

          <Gallery items={current.gallery} />
        </Section>

        <Claims />

        <section className="about" id="about">
          <Picture
            src={asset("/images/decore1.png")}
            alt="Draped curtain beside a cane armchair"
            sizes="(max-width: 900px) 100vw, 520px"
          />
          <div className="about__body">
            <p className="eyebrow">About us</p>
            <h2>Abu Dhabi&rsquo;s décor workshop since day one</h2>
            <p>
              We cover curtains, blinds and shutters, wallpaper, wall painting, carpets,
              wooden and vinyl flooring, false ceilings, lighting and room partitions —
              for homes and for commercial projects. If it shapes how a room feels, we fit it.
            </p>
            <a className="btn btn--accent" href={whatsappLink({ service: "General enquiry" })} target="_blank" rel="noreferrer">
              Start a project
            </a>
          </div>
        </section>

        <Section id="clients" className="block--clients" eyebrow="Trusted by" heading="Our clients">
          <Picture
            className="clients__strip"
            src={asset("/images/companies.png")}
            alt="Logos of companies we have worked with"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </Section>

        <Section id="visit" className="block--visit" eyebrow="Contact" heading="Come and see the fabrics">
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
              <h3>Call or message</h3>
              <CopyPhone />
              <p>Saturday to Thursday, 9am – 9pm.</p>
              <div className="visit__actions">
                <a className="btn btn--accent" href={BUSINESS.phoneHref}>
                  <Icon name="phone" /> {BUSINESS.phone}
                </a>
                <a
                  className="btn btn--ghost-dark"
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
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

        <Footer />
      </main>
    </>
  );
}

export default App;
