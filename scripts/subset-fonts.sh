#!/bin/sh
# Subsets the self-hosted Inter families to the characters this site actually
# uses, plus the Latin-1 range so future copy edits do not silently lose glyphs.
#
# Google served ~92KB of variable font across the two families; that competed
# for bandwidth with the LCP hero image on every page. Subsetting keeps the
# identical typefaces at a fraction of the weight.
#
# Sources (re-download before re-subsetting if the families are updated):
#   https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap
set -e
cd "$(dirname "$0")/.."

UNICODES='U+0020-007E,U+00A0-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2022,U+2026,U+2018-201A,U+201C-201E,U+2013-2014,U+00B7,U+00D7'

# Pristine downloads live outside public/, which Vite copies wholesale - keeping
# them there shipped 93KB of unused font to the CDN.
mkdir -p scripts/.fonts-src

for family in inter inter-tight; do
  src="public/fonts/$family-latin.woff2"
  orig="scripts/.fonts-src/$family-latin.woff2"
  [ -f "$orig" ] || cp "$src" "$orig"
  pyftsubset "$orig" \
    --output-file="$src" \
    --flavor=woff2 \
    --layout-features='kern,liga,calt,tnum' \
    --unicodes="$UNICODES" \
    --no-hinting \
    --desubroutinize
  printf '  %-22s %sB -> %sB\n' "$family" \
    "$(wc -c < "$orig" | tr -d ' ')" "$(wc -c < "$src" | tr -d ' ')"
done
