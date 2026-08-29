import { Icon } from "./icon";
import { Picture } from "./picture";
import { BUSINESS, whatsappLink } from "../data/site";

/**
 * Phone-first by design — there is no form and no email backend. Both contact
 * routes sit side by side in the card: calling was already above the fold at
 * 390px, but WhatsApp was only reachable through the unlabelled floating
 * circle, and WhatsApp is how most enquiries in Abu Dhabi actually start.
 *
 * `service` pre-fills the WhatsApp message so an enquiry arrives already saying
 * which trade it is about.
 */
function MeasureCard({ service }) {
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
          href={whatsappLink({ service })}
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

/**
 * One hero for the homepage and all six service pages, so a visitor arriving on
 * /wallpaper/ from an ad gets the same layout, the same enquiry card and the
 * same contact affordances as one who lands on the homepage.
 *
 * `image` is null on the pages with no photograph of their own (painting,
 * ceilings), which fall back to the dark gradient rather than borrowing an
 * unrelated one — a curtain photo on the painting page is exactly the relevance
 * mismatch this rebuild exists to fix.
 *
 * The nav is `position: fixed` inside this box, so the hero must stay the first
 * child of `.page`; if it floats above, the nav's white text lands on the cream
 * background and disappears.
 */
export function Hero({ image, heading, lead, service = "General enquiry" }) {
  return (
    <section className={`hero ${image ? "" : "hero--plain"}`} id="top">
      {image && (
        <>
          <Picture className="hero__bg" src={image.src} alt="" priority sizes="100vw" />
          <div className="hero__scrim" />
        </>
      )}

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="pill pill--ghost">
            <span className="dot" /> Electra Street, Abu Dhabi
          </p>
          <h1>{heading}</h1>
          <p className="hero__lead">{lead}</p>
        </div>

        <MeasureCard service={service} />
      </div>
    </section>
  );
}
