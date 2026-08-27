#!/usr/bin/env python3
"""
Generates responsive WebP derivatives for everything in public/images.

Photos ship as 1280x960 JPEG/PNG originals, which is roughly four times the
pixels a 390px phone can use and the main reason mobile LCP sat at 4.7s. For
each source image this writes `<name>-640.webp` and `<name>-1280.webp` beside
it; `<Picture>` (src/components/picture.jsx) emits them as a srcset with the
original left in place as the <img> fallback.

Re-run after adding photos:  python3 scripts/build-images.py
Generated files are committed, so the deploy build stays a plain `vite build`.
"""

import json
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "public" / "images"
# 1024 matters: a 390px phone at DPR 2.6 needs ~1024px for a full-bleed hero,
# and without this candidate it was pulling the 1280 and paying for 60% more
# pixels than it could show.
WIDTHS = (640, 1024, 1280)
QUALITY = 72

# Thumbnail-sized sources that are too small to be worth a derivative, plus the
# logo, which stays PNG because it is drawn over a white pill at 90px.
SKIP = {"logo.png", "images.jpg", "images (1).jpg"}


def derivatives(src: Path):
    for width in WIDTHS:
        yield width, src.with_name(f"{src.stem}-{width}.webp")


def main() -> int:
    sources = sorted(
        p
        for p in IMAGES.rglob("*")
        if p.suffix.lower() in {".jpg", ".jpeg", ".png"}
        and "-640.webp" not in p.name
        and p.name not in SKIP
    )
    if not sources:
        print("no source images found", file=sys.stderr)
        return 1

    written = skipped = 0
    saved_before = saved_after = 0
    sizes = {}

    for src in sources:
        with Image.open(src) as im:
            im = im.convert("RGB")
            sizes["/" + str(src.relative_to(ROOT / "public"))] = [im.width, im.height]
            for width, out in derivatives(src):
                # Never upscale: a 640px-wide source keeps its own width.
                target = min(width, im.width)
                if out.exists() and out.stat().st_mtime >= src.stat().st_mtime:
                    skipped += 1
                    saved_before += src.stat().st_size
                    saved_after += out.stat().st_size
                    continue
                resized = im.resize(
                    (target, round(im.height * target / im.width)),
                    Image.LANCZOS,
                )
                resized.save(out, "WEBP", quality=QUALITY, method=6)
                written += 1
                print(f"  {out.relative_to(IMAGES)}  {out.stat().st_size // 1024}K")

    # Intrinsic dimensions for <Picture>. Declaring the real ratio per image is
    # what keeps CLS at zero and stops Lighthouse flagging distorted aspect
    # ratios, since these photos are not all 4:3.
    out = ROOT / "src" / "data" / "image-sizes.json"
    out.write_text(json.dumps(dict(sorted(sizes.items())), indent=2) + "\n")

    print(f"\n{written} written, {skipped} up to date, {len(sizes)} sizes recorded")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
