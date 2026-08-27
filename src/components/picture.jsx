/**
 * Serves the WebP derivatives produced by `scripts/build-images.py`.
 *
 * `src` is the ordinary path already resolved through asset() (e.g.
 * "/images/curtain/pic5.jpeg"); the -640/-1280 WebP siblings are derived from
 * it. The original stays as the <img> fallback, so a missing derivative
 * degrades to exactly what the site served before rather than to a broken tile.
 *
 * width/height default to the real intrinsic dimensions of the source, looked
 * up from the map scripts/build-images.py writes. Declaring them is what keeps
 * CLS at zero while the image loads; declaring a *wrong* ratio (these photos
 * are not all 4:3) is what made Lighthouse flag distorted aspect ratios.
 *
 * `widths` caps which derivatives are offered. A 360px-wide card on a DPR 2.6
 * phone would otherwise claim the 1024 file, and five of those on the homepage
 * cost ~200KB of bandwidth competing with the hero image for LCP. Capping a
 * small card at 640 is a deliberate density trade, not a wrong `sizes`.
 */
import IMAGE_SIZES from "../data/image-sizes.json";

function webp(src, width) {
  return src.replace(/\.(jpe?g|png)$/i, `-${width}.webp`);
}

/** Intrinsic dimensions, recorded per file by scripts/build-images.py. */
function intrinsic(src) {
  const key = src.replace(import.meta.env.BASE_URL.replace(/\/$/, ""), "");
  return IMAGE_SIZES[key];
}

export function Picture({
  src,
  alt,
  className = "",
  sizes = "(max-width: 700px) 100vw, 640px",
  widths = [640, 1024, 1280],
  loading = "lazy",
  priority = false,
  width,
  height,
}) {
  const size = intrinsic(src);
  const [naturalWidth, naturalHeight] = size ?? [1280, 960];

  // For the LCP image the preload scanner can pick a candidate before the
  // viewport meta is applied and then layout picks a different one, fetching
  // the hero twice (measured: 1280 + 1024, 102KB for one image). Offering only
  // the smallest and largest makes both passes land on the same file.
  const candidates =
    priority && widths.length > 2 ? [widths[0], widths[widths.length - 1]] : widths;

  return (
    <picture>
      {size && (
        <source
          type="image/webp"
          srcSet={candidates.map((w) => `${webp(src, w)} ${w}w`).join(", ")}
          sizes={sizes}
        />
      )}
      <img
        className={className}
        src={src}
        alt={alt}
        width={width ?? naturalWidth}
        height={height ?? naturalHeight}
        loading={priority ? "eager" : loading}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
