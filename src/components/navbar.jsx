import { useEffect, useState } from "react";
import { Icon } from "./icon";
import { asset, BUSINESS, whatsappLink } from "../data/site";
import { PAGE_META } from "../data/page-meta";
import { pageUrl } from "../data/services";

/**
 * `active` is the slug of the service page currently being viewed, or undefined
 * on the homepage. Links are rooted at "/" so the same nav works from a service
 * page as from the homepage — on the homepage "/#work" is still treated as a
 * same-document fragment jump, so smooth scrolling is unaffected.
 */
export function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="nav__brand" href="/">
        <img
          src={asset("/images/logo.png")}
          alt={`${BUSINESS.name} ${BUSINESS.tagline}`}
          width="118"
          height="60"
        />
      </a>

      <nav className={`nav__links ${open ? "is-open" : ""}`}>
        {PAGE_META.map((page) => (
          <a
            key={page.slug}
            href={pageUrl(page.slug)}
            className={page.slug === active ? "is-current" : ""}
            aria-current={page.slug === active ? "page" : undefined}
            onClick={close}
          >
            {page.nav}
          </a>
        ))}
        <a href="/#visit" onClick={close}>Visit us</a>
      </nav>

      <div className="nav__actions">
        <a
          className="btn btn--accent nav__cta"
          href={BUSINESS.phoneHref}
          aria-label={`Call us on ${BUSINESS.phone}`}
        >
          <Icon name="phone" /> <span className="nav__cta-label">Contact</span>
        </a>

        <button
          className="nav__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <Icon name={open ? "xmark" : "bars"} />
        </button>
      </div>
    </header>
  );
}

/** Floating WhatsApp button. `service` pre-fills the message on service pages. */
export function CallButton({ service }) {
  return (
    <a
      className="float-call"
      href={service ? whatsappLink({ service }) : `https://wa.me/${BUSINESS.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Message us on WhatsApp"
    >
      <Icon name="whatsapp" />
    </a>
  );
}
