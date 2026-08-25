import { useEffect, useState } from "react";
import { asset, BUSINESS, SERVICES } from "../data/site";

export function Navbar({ onPickService }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Native anchor navigation does the scrolling (honouring scroll-padding-top);
  // the click handler only selects which gallery the #work section shows.
  const go = (id) => () => {
    setOpen(false);
    onPickService?.(id);
  };

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="nav__brand" href="#top">
        <img src={asset("/images/logo.png")} alt={`${BUSINESS.name} ${BUSINESS.tagline}`} />
      </a>

      <nav className={`nav__links ${open ? "is-open" : ""}`}>
        <a href="#work" onClick={() => setOpen(false)}>Our Work</a>
        {SERVICES.map((service) => (
          <a key={service.id} href="#work" onClick={go(service.id)}>
            {service.name}
          </a>
        ))}
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#visit" onClick={() => setOpen(false)}>Visit us</a>
      </nav>

      <div className="nav__actions">
        <a
          className="btn btn--accent nav__cta"
          href={BUSINESS.phoneHref}
          aria-label={`Call us on ${BUSINESS.phone}`}
        >
          <i className="fa-solid fa-phone" aria-hidden="true" /> Contact
        </a>

        <button
          className="nav__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export function CallButton() {
  return (
    <a
      className="float-call"
      href={`https://wa.me/${BUSINESS.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Message us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true" />
    </a>
  );
}
