import { useEffect, useState } from "react";

/** A single gallery tile. Clicking opens the lightbox owned by <Gallery>. */
export function Cards({ image, alt, onOpen }) {
  return (
    <figure className="tile" onClick={onOpen}>
      <img src={image} alt={alt} loading="lazy" />
    </figure>
  );
}

export function Gallery({ items }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((i) => (i + 1) % items.length);
      if (event.key === "ArrowLeft") setActive((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  return (
    <>
      <div className="tiles">
        {items.map((item, index) => (
          <Cards
            key={item.src}
            image={item.src}
            alt={item.alt}
            onOpen={() => setActive(index)}
          />
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Close">
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setActive((i) => (i - 1 + items.length) % items.length);
            }}
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={items[active].src} alt={items[active].alt} />
            <figcaption>{items[active].alt}</figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setActive((i) => (i + 1) % items.length);
            }}
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
