import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { BUSINESS } from "../data/site";

export function Section({ id, className = "", eyebrow, heading, lead, children }) {
  return (
    <section className={`block ${className}`} id={id}>
      {(eyebrow || heading || lead) && (
        <header className="block__head">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {heading && <h2>{heading}</h2>}
          </div>
          {lead && <p className="block__lead">{lead}</p>}
        </header>
      )}
      {children}
    </section>
  );
}

/** Replaces the old global CopyToClipboard script, which 404'd in a production build. */
export function CopyPhone({ className = "" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = BUSINESS.phoneHref;
    }
  };

  return (
    <button className={`copy ${className}`} onClick={copy}>
      {BUSINESS.phone}
      <span className="copy__hint">{copied ? "Copied" : "Click to copy"}</span>
    </button>
  );
}

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__grid">
        <div className="footer__brand">
          <img src="/images/logo.png" alt="" />
          <p>
            {BUSINESS.name} {BUSINESS.tagline} — curtains, blinds, wallpapers,
            upholstery and flooring across Abu Dhabi and the Emirates.
          </p>
          <div className="footer__socials">
            {BUSINESS.socials.map((social) => (
              <SocialIcon
                key={social.url}
                url={social.url}
                network={social.network}
                target="_blank"
                rel="noreferrer"
                bgColor="#2a2721"
                fgColor="#e9e0d0"
                style={{ height: 38, width: 38 }}
              />
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <a href="#top">Home</a>
          <a href="#why">Why us</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#about">About</a>
        </div>

        <div className="footer__col">
          <h4>Visit us</h4>
          {BUSINESS.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="footer__col">
          <h4>Talk to us</h4>
          <CopyPhone />
          <a href={BUSINESS.phoneHref}>Call the showroom</a>
          <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noreferrer">
            Message on WhatsApp
          </a>
        </div>
      </div>

      <div className="footer__base">
        <p>© {new Date().getFullYear()} {BUSINESS.name} {BUSINESS.tagline}</p>
        <p>{BUSINESS.location}</p>
      </div>
    </footer>
  );
}
