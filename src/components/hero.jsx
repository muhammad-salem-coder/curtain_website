import { BUSINESS, HERO_IMAGE } from "../data/site";

/** Sits where the reference design puts its booking panel — phone-first, no form. */
function MeasureCard() {
  return (
    <aside className="enquiry">
      <h2 className="enquiry__title">Request a free measure</h2>
      <p className="enquiry__sub">
        Tell us what you need and we&rsquo;ll come to you — no charge, no obligation.
      </p>

      <a
        className="enquiry__phone"
        href={BUSINESS.phoneHref}
        aria-label={`Call us on ${BUSINESS.phone}`}
      >
        <span className="enquiry__phone-label">Call us</span>
        <span className="enquiry__phone-number">
          <i className="fa-solid fa-phone" aria-hidden="true" />
          {BUSINESS.phone}
        </span>
      </a>

      <div className="enquiry__links">
        <a className="btn btn--ghost" href="#work">See our work</a>
        <a className="btn btn--ghost" href="#services">Our services</a>
      </div>

      <p className="enquiry__alt">Saturday to Thursday, 9am – 9pm</p>
    </aside>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__bg" src={HERO_IMAGE} alt="" />
      <div className="hero__scrim" />

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="pill pill--ghost">
            <span className="dot" /> {BUSINESS.location}
          </p>
          <h1>
            Curtains &amp; décor,
            <br />
            tailored to your space
          </h1>
          <p className="hero__lead">
            Supply, installation and repair of curtains, blinds, wallpapers, upholstery
            and flooring — measured, made and fitted by one team in Abu Dhabi.
          </p>
        </div>

        <MeasureCard />
      </div>
    </section>
  );
}
