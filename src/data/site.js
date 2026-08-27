/**
 * Files in public/ are not rewritten by Vite when referenced from JS strings,
 * so paths must carry the deployment base themselves ('/' in dev,
 * '/curtain_website/' in the GitHub Pages build).
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
export const asset = (path) => `${BASE}${path}`;

export const BUSINESS = {
  name: "Al Amasi Dream",
  tagline: "Curtain & Décor",
  phone: "+971 50 867 9752",
  phoneHref: "tel:+971508679752",
  whatsapp: "971508679752",
  location: "Abu Dhabi, United Arab Emirates",
  address: [
    "Hamad Center, 2nd Floor — Shop No. 85",
    "Electra Street, near NMC Hospital",
    "Al Danah — Zone 1, Abu Dhabi, UAE",
  ],
  // `network` is set explicitly because react-social-icons does not map wa.me URLs.
  socials: [
    { network: "facebook", url: "https://www.facebook.com/p/Alamasi-Curtains-and-Decor-100063547153505/" },
    { network: "instagram", url: "https://www.instagram.com/alamasidecor/" },
    { network: "whatsapp", url: "https://wa.me/971508679752/" },
  ],
};

/** Builds a pre-filled WhatsApp link so the enquiry card actually sends something. */
export function whatsappLink({ service, scope }) {
  const lines = [
    `Hello ${BUSINESS.name}, I'd like a quote.`,
    service ? `Service: ${service}` : null,
    scope ? `Scope: ${scope}` : null,
  ].filter(Boolean);
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const HERO_IMAGE = asset("/images/curtain/pic5.jpeg");

/** The four numbered points in the editorial grid. */
export const HIGHLIGHTS = [
  {
    n: "1",
    title: "Made to measure, in our own workshop",
    body: "Every curtain, blind and shade is cut and sewn to your exact window — no off-the-shelf sizing, no compromises on drop or fullness.",
    image: "/images/curtain/pic7.jpeg",
    alt: "Floor-to-ceiling teal curtains framing a bay window over the Abu Dhabi skyline",
  },
  {
    n: "2",
    title: "Supply, installation and repair",
    body: "One team handles fabric selection, tracks and rails, fitting and after-care, so you are never left coordinating between suppliers.",
    image: "/images/curtain/pic17.jpeg",
    alt: "Linen Roman blinds with patterned borders fitted across a wide living room window",
  },
  {
    n: "3",
    title: "Homes, offices and hospitality",
    body: "From a single bedroom to a full villa or office fit-out, we work at whatever scale the space asks for across the Emirates.",
    image: "/images/curtain/pic13.jpeg",
    alt: "Vertical blinds fitted across a glass-partitioned office",
  },
  {
    n: "4",
    title: "Free site visit and measurement",
    body: "We come to you, measure up, talk through fabrics and finishes, and quote before you commit to anything.",
    image: "/images/curtain/pic15.jpeg",
    alt: "Sheer curtains filtering daylight across a bright dining room",
  },
];

export const SERVICES = [
  {
    id: "curtains",
    name: "Curtains & Blinds",
    lead: "Sheers, blackouts, Roman blinds, rollers, shutters and motorised tracks.",
    points: [
      "Custom tailoring in any fabric, lining and heading style",
      "Roman, roller, vertical, wooden and bamboo blinds",
      "Blackout and sheer layering for bedrooms and majlis",
      "Track, rail and motorised system installation",
      "Take-down, cleaning and re-hanging service",
    ],
    footnote: "Free measure & quote",
    image: "/images/curtain/pic4.jpeg",
    alt: "Sheer linen curtains beneath a carved mashrabiya pelmet",
    gallery: [
      { src: "/images/curtain/blinds3.png", alt: "Wooden venetian blinds in warm daylight" },
      { src: "/images/curtain/pic1.jpeg", alt: "Pleated drapes with tie-backs layered over sheers in a bedroom" },
      { src: "/images/curtain/pic02.jpg", alt: "Layered sheer and blackout curtain detail" },
      { src: "/images/curtain/pic4.jpeg", alt: "Sheer linen curtains beneath a carved mashrabiya pelmet" },
      { src: "/images/curtain/pic04.jpg", alt: "Pleated curtain heading and track detail" },
      { src: "/images/curtain/pic5.jpeg", alt: "Ivory sheers wrapping a corner living room" },
      { src: "/images/curtain/pic7.jpeg", alt: "Teal curtains across a bay window" },
      { src: "/images/curtain/pic11.jpeg", alt: "Curtains dressed and steamed after installation" },
      { src: "/images/curtain/pic13.jpeg", alt: "Vertical blinds fitted across a glass-partitioned office" },
      { src: "/images/curtain/pic15.jpeg", alt: "Sheer curtains filtering daylight across a bright dining room" },
      { src: "/images/curtain/pic17.jpeg", alt: "Roman blinds with patterned borders" },
      { src: "/images/curtain/pic20.png", alt: "Roller blind fitted to a window frame" },
      { src: "/images/curtain/pic21.png", alt: "Woven bamboo roller blind texture close up" },
    ],
  },
  {
    id: "wallpapers",
    name: "Wallpapers",
    lead: "Feature walls, full rooms, textured and washable finishes.",
    points: [
      "Supply and hanging of imported wallpaper ranges",
      "Feature walls, headboard walls and full-room schemes",
      "Textured, vinyl and washable finishes for high-traffic rooms",
      "Wall preparation, stripping and making good",
      "Matching with paint, gypsum and ceiling work",
    ],
    footnote: "Samples brought to you",
    image: "/images/wallpaper/wallpaper3.png",
    alt: "Textured feature wallpaper in a styled interior",
    gallery: [
      { src: "/images/wallpaper/wallpaper3.png", alt: "Textured feature wallpaper in a styled interior" },
      { src: "/images/wallpaper/pic6.png", alt: "Patterned wallpaper across a living room wall" },
      { src: "/images/wallpaper/pic03.jpg", alt: "Wallpaper detail showing surface texture" },
      { src: "/images/wallpaper/pic05.jpg", alt: "Wallpaper feature wall behind furniture" },
    ],
  },
  {
    id: "sofachair",
    name: "Sofa & Chair Works",
    lead: "Reupholstery, re-foaming, custom majlis seating and headboards.",
    points: [
      "Full reupholstery in fabric, velvet or leatherette",
      "Foam replacement and cushion refilling",
      "Custom majlis and bench seating built to your room",
      "Upholstered headboards and ottomans",
      "Frame repair and structural re-webbing",
    ],
    footnote: "Collection & delivery available",
    image: "/images/sofachairs/sofa123.png",
    alt: "Reupholstered sofa in a warm neutral fabric",
    gallery: [
      { src: "/images/sofachairs/sofa123.png", alt: "Reupholstered sofa in a warm neutral fabric" },
      { src: "/images/sofachairs/pic2.jpeg", alt: "Custom majlis seating along a wall" },
      { src: "/images/sofachairs/pic6.jpeg", alt: "Armchair finished in fresh upholstery" },
      { src: "/images/sofachairs/pic8.jpeg", alt: "Seating group in a completed interior" },
      { src: "/images/sofachairs/pic12.jpeg", alt: "Sofa after foam replacement and re-covering" },
      { src: "/images/sofachairs/pic14.jpeg", alt: "Upholstered bench seating detail" },
      { src: "/images/sofachairs/pic16.jpeg", alt: "Chair reupholstered in patterned fabric" },
      { src: "/images/sofachairs/pic21.jpeg", alt: "Cushions and covers finished to match" },
      { src: "/images/sofachairs/pic22.jpeg", alt: "Upholstered headboard fitted in a bedroom" },
    ],
  },
  {
    id: "parquet",
    name: "Parquet & Flooring",
    lead: "Engineered wood, herringbone parquet, laminate and vinyl.",
    points: [
      "Herringbone, chevron and plank parquet laying",
      "Engineered wood, laminate and luxury vinyl supply",
      "Subfloor levelling and moisture preparation",
      "Skirting, beading and threshold finishing",
      "Sanding, repair and refinishing of existing floors",
    ],
    footnote: "Measured per square metre",
    image: "/images/parquet/pic24.jpg",
    alt: "Herringbone oak parquet being laid by hand",
    gallery: [
      { src: "/images/parquet/pic24.jpg", alt: "Herringbone oak parquet being laid by hand" },
      { src: "/images/parquet/pic07.jpg", alt: "Finished wooden flooring in a room" },
      { src: "/images/parquet/pic23.jpeg", alt: "Parquet flooring detail and grain" },
    ],
  },
];

// Resolve every image path in the data above against the deployment base.
for (const item of HIGHLIGHTS) item.image = asset(item.image);
for (const service of SERVICES) {
  service.image = asset(service.image);
  for (const shot of service.gallery) shot.src = asset(shot.src);
}
