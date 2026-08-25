import { useState } from "react";
import { Gallery } from "./components/cards";
import { Hero } from "./components/hero";
import { CallButton, Navbar } from "./components/navbar";
import { CopyPhone, Footer, Section } from "./components/section";
import { BUSINESS, HIGHLIGHTS, SERVICES, whatsappLink } from "./data/site";

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
              <img src={item.image} alt={item.alt} loading="lazy" />
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
      <img src="/images/curtain/pic1.jpeg" alt="Pleated drapes with tie-backs layered over sheers in a bedroom" loading="lazy" />
      <div className="band__card">
        <span className="band__icon">
          <i className="fa-solid fa-ruler-combined" aria-hidden="true" />
        </span>
        <p>
          Bring us a window and we&rsquo;ll bring the fabric book. We measure on site, show you
          how each material falls in your own light, and quote before a single cut is made.
        </p>
      </div>
    </section>
  );
}

function ServiceRow({ service, onView }) {
  return (
    <article className="offer" id={`service-${service.id}`}>
      <figure className="offer__media">
        <img src={service.image} alt={service.alt} loading="lazy" />
      </figure>

      <div className="offer__card">
        <h3>{service.name}</h3>
        <p className="offer__lead">{service.lead}</p>
        <ul className="offer__points">
          {service.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="offer__foot">
          <span className="offer__note">{service.footnote}</span>
          <a className="btn btn--accent" href="#work" onClick={() => onView(service.id)}>
            See the work
          </a>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);

  const showService = (id) => setActiveService(id);

  const current = SERVICES.find((service) => service.id === activeService) ?? SERVICES[0];

  return (
    <>
      <Navbar onPickService={showService} />
      <CallButton />

      <main className="page">
        <Hero />
        <Highlights />
        <FeatureBand />

        <Section
          id="services"
          eyebrow="What we do"
          heading="Four trades, one team"
          lead="Everything below is measured, supplied and installed by us — including the parts most suppliers hand off."
        >
          <div className="offers">
            {SERVICES.map((service) => (
              <ServiceRow key={service.id} service={service} onView={showService} />
            ))}
          </div>
        </Section>

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

        <section className="about" id="about">
          <img src="/images/decore1.png" alt="Draped curtain beside a cane armchair" loading="lazy" />
          <div className="about__body">
            <p className="eyebrow">About us</p>
            <h2>Abu Dhabi&rsquo;s décor workshop since day one</h2>
            <p>
              We cover wall décor, table décor, curtains, carpets, flooring, wallpaper,
              blinds and shutters — along with glass tinting, painting, ceilings, lighting
              and room partitions. If it shapes how a room feels, we fit it.
            </p>
            <a className="btn btn--accent" href={whatsappLink({ service: "General enquiry" })} target="_blank" rel="noreferrer">
              Start a project
            </a>
          </div>
        </section>

        <Section id="clients" className="block--clients" eyebrow="Trusted by" heading="Our clients">
          <img className="clients__strip" src="/images/companies.png" alt="Logos of companies we have worked with" loading="lazy" />
        </Section>

        <Section id="visit" className="block--visit" eyebrow="Contact" heading="Come and see the fabrics">
          <div className="visit__grid">
            <div className="visit__card">
              <h3>Showroom</h3>
              {BUSINESS.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <a
                className="link-arrow"
                href="https://maps.google.com/?q=Hamad+Center+Electra+Street+Abu+Dhabi"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
            </div>

            <div className="visit__card">
              <h3>Call or message</h3>
              <CopyPhone />
              <p>Saturday to Thursday, 9am – 9pm.</p>
              <a className="btn btn--accent" href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
            </div>
          </div>
        </Section>

        <Footer />
      </main>
    </>
  );
}

export default App;
