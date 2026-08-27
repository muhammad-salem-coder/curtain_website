import { Icon } from "./icon";
import { Picture } from "./picture";
import { BUSINESS, HERO_IMAGE, whatsappLink } from "../data/site";

/**
 * Phone-first by design — there is no form and no email backend. Both contact
 * routes now sit side by side in the card: calling was already above the fold
 * at 390px, but WhatsApp was only reachable through the unlabelled floating
 * circle, and WhatsApp is how most enquiries in Abu Dhabi actually start.
 */
function MeasureCard() {
  return (
    <aside className="enquiry">
      <h2 className="enquiry__title">Request a free measure</h2>
      <p className="enquiry__sub">
        Tell us what you need and we&rsquo;ll come to you — no charge, no obligation.
      </p>

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
          href={whatsappLink({ service: "General enquiry" })}
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

      <p className="enquiry__alt">Saturday to Thursday, 9am – 9pm</p>
    </aside>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <Picture className="hero__bg" src={HERO_IMAGE} alt="" priority sizes="100vw" />
      <div className="hero__scrim" />

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="pill pill--ghost">
            <span className="dot" /> Electra Street, Abu Dhabi
          </p>
          <h1>Curtains, blinds &amp; interior fit-out in Abu Dhabi</h1>
          <p className="hero__lead">
            Curtains, blinds, wallpaper, painting, flooring, ceilings and partitions —
            measured, supplied and fitted by one team across Abu Dhabi.
          </p>
        </div>

        <MeasureCard />
      </div>
    </section>
  );
}
