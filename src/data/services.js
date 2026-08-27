/**
 * The six dedicated service landing pages.
 *
 * Each entry becomes one real, indexable URL (`/curtains/`, `/wallpaper/`, …)
 * built as a separate Vite MPA entry — see the `input` map in vite.config.js
 * and the matching `<slug>/index.html` + `<slug>/main.jsx` pair at the repo
 * root. Google Ads keywords are pointed at these URLs individually, which is
 * what moves "Landing page experience" off Below average: a search for
 * "wallpaper abu dhabi" must arrive on a page whose <h1>, <title> and
 * photographs are all about wallpaper in Abu Dhabi.
 *
 * `keywords` is documentation, not markup — it records which Ads keywords each
 * page is the Final URL for, so nobody has to guess later. There is no meta
 * keywords tag; Google ignores it.
 *
 * Adding a page: add an entry here, add the two root files, add the entry to
 * vite.config.js. Nothing scans the directory.
 */
import { asset } from "./site";
import { PAGE_META } from "./page-meta";

/** Reserved for the Arabic build. `/curtains/` today, `/ar/curtains/` later. */
export const LOCALE_PREFIX = "";

export const pageUrl = (slug) => `${LOCALE_PREFIX}/${slug}/`;

export const SERVICE_PAGES = [
  {
    slug: "curtains",
    lead:
      "We are a curtain shop and workshop on Electra Street. Everything is measured at your window, cut and sewn to that measurement, and hung by the same team — no middlemen, no standard drops forced onto a non-standard window.",
    hero: { src: "/images/curtain/pic5.jpeg", alt: "Ivory sheer curtains wrapping the corner windows of an Abu Dhabi living room" },
    keywords: [
      "curtains in abu dhabi",
      "curtain shop abu dhabi",
      "curtain dealers",
      "customised curtains",
      "curtain fixer",
      "hotel style curtain",
      "one day curtain",
      "curtain fast delivery",
    ],
    intro: [
      "Most curtain problems are measurement problems. A drop that stops short of the floor, a track too narrow for the fullness, a blackout lining that leaves a bright halo down the sides — all of it comes from ordering to a rough size instead of the real one. We measure on site, every time, before anything is cut.",
      "We work across Abu Dhabi in villas, apartments, offices, hotels and majlis. Bring us one bedroom window or a whole floor of a building; the process is the same and the fabric books come to you either way.",
    ],
    offer: {
      heading: "What we supply and fit",
      items: [
        {
          title: "Custom tailoring in any fabric",
          body: "Linen, velvet, jacquard, blackout and sheer voile, in any heading style — pinch pleat, double pleat, wave, eyelet or rod pocket. Lining, interlining and fullness are chosen to suit the fabric and the light in the room.",
        },
        {
          title: "Sheers and blackout layering",
          body: "The standard Abu Dhabi bedroom setup: a sheer for daytime privacy and a blackout behind it for the heat and the early sun. Layered on a double track so each moves independently.",
        },
        {
          title: "Hotel-style and majlis curtains",
          body: "Full-height pleated drapes with pelmets, tie-backs and matching cushions, made the way hotel rooms are dressed. This is the most common request we get for formal reception rooms and majlis.",
        },
        {
          title: "Tracks, rails and motorised systems",
          body: "Supply and installation of manual tracks, decorative poles, ceiling-recessed rails and motorised systems with remote or app control. We drill, plug and level the track ourselves rather than leaving it to a handyman.",
        },
        {
          title: "Take-down, cleaning and re-hanging",
          body: "We remove existing curtains, send them for cleaning, and re-hang and dress them. Useful before a handover, after a renovation, or once a year in a dusty apartment.",
        },
        {
          title: "Repairs and alterations",
          body: "Shortening, re-heading, replacing a failed track, restitching a hem. If the fabric is still good it is usually cheaper to alter than to replace, and we will tell you when that is the case.",
        },
      ],
    },
    process: {
      heading: "How a curtain order runs",
      steps: [
        { title: "Free site measure", body: "We come to you with fabric books, measure every window, and talk through what the room actually needs — light control, privacy, heat, or all three." },
        { title: "Quote before cutting", body: "You get a price per window covering fabric, lining, track and fitting. Nothing is cut until you agree to it." },
        { title: "Made in our workshop", body: "Cut, sewn, weighted and pressed to your measurements by our own tailors, not sent out to a third party." },
        { title: "Fitted and dressed", body: "We install the track, hang the curtains, and dress the pleats so they fall correctly from day one. We clear up before we leave." },
      ],
    },
    turnaround:
      "Timelines depend on the fabric and the size of the order. Straightforward residential jobs in stocked fabric are the quickest; imported fabric and large fit-outs take longer. Tell us your deadline when you call — including if you are working to a handover date — and we will tell you honestly what is achievable rather than promising a date we cannot hold.",
    gallery: [
      { src: "/images/curtain/pic7.jpeg", alt: "Floor-to-ceiling teal curtains framing a bay window" },
      { src: "/images/curtain/pic1.jpeg", alt: "Pleated drapes with tie-backs layered over sheers in a bedroom" },
      { src: "/images/curtain/pic4.jpeg", alt: "Sheer linen curtains beneath a carved mashrabiya pelmet" },
      { src: "/images/curtain/pic15.jpeg", alt: "Sheer curtains filtering daylight across a bright dining room" },
      { src: "/images/curtain/pic02.jpg", alt: "Layered sheer and blackout curtain detail" },
      { src: "/images/curtain/pic04.jpg", alt: "Pleated curtain heading and track detail" },
      { src: "/images/curtain/pic11.jpeg", alt: "Curtains being dressed and steamed after installation" },
      { src: "/images/curtain/pic5.jpeg", alt: "Ivory sheers wrapping a corner living room" },
    ],
    related: ["blinds", "wallpaper", "flooring"],
  },

  {
    slug: "blinds",
    lead:
      "Blinds do a different job to curtains: they sit tight to the glass, control glare hour by hour, and suit offices, kitchens and anywhere a full curtain would be in the way. We supply and fit every common type.",
    hero: { src: "/images/curtain/blinds3.png", alt: "Wooden venetian blinds filtering warm daylight across a window" },
    keywords: ["roller blinds abu dhabi", "shutters abu dhabi", "curtains and blinds"],
    intro: [
      "The choice usually comes down to how much light you want to keep and how much you want to see through. A sunscreen roller cuts glare but keeps the view; a blackout roller shuts the room down completely; a venetian or shutter lets you angle the light instead of choosing between on and off.",
      "We measure inside or outside the recess depending on the window, because getting that wrong is what causes the light gaps down the sides that people complain about afterwards.",
    ],
    offer: {
      heading: "Types we supply and fit",
      items: [
        {
          title: "Roller blinds",
          body: "Blackout, dim-out and sunscreen fabrics on chain or spring mechanisms. The most common request for offices, kitchens and children's rooms, and the quickest to fit.",
        },
        {
          title: "Roman blinds",
          body: "Soft folded fabric blinds that read like a curtain but stack neatly above the glass. Available in the same fabrics as our curtains so a room can be matched.",
        },
        {
          title: "Venetian and wooden blinds",
          body: "Aluminium, faux wood and real wood slats. Tilt to angle the light rather than block it — the practical answer for a west-facing window that gets hard afternoon sun.",
        },
        {
          title: "Vertical blinds",
          body: "The standard for wide office glazing and glass partitions. Slats are replaceable individually, so a damaged one does not mean a new blind.",
        },
        {
          title: "Shutters",
          body: "Fixed-frame plantation-style shutters for windows and doors, made to the opening and hinged to fold back clear of the glass.",
        },
        {
          title: "Bamboo and woven shades",
          body: "Natural woven roller shades for balconies, terraces and rooms where a softer, textured filter suits better than flat fabric.",
        },
      ],
    },
    process: {
      heading: "How a blind order runs",
      steps: [
        { title: "Free site measure", body: "We measure the recess and check what the wall or ceiling above the window can actually take a fixing into." },
        { title: "Fabric and mechanism", body: "You pick the fabric and whether you want chain, spring or motorised. We bring samples so you can see them against your own light." },
        { title: "Made to the opening", body: "Cut to the measured size, not to the nearest stock width." },
        { title: "Fitted and tested", body: "We fix the brackets, hang the blind, and check it runs cleanly through its full travel before we leave." },
      ],
    },
    turnaround:
      "Roller and vertical blinds in stocked fabric are among the fastest things we do. Shutters and wood blinds take longer because they are made to the frame. Tell us the deadline when you call and we will confirm what is realistic.",
    gallery: [
      { src: "/images/curtain/blinds3.png", alt: "Wooden venetian blinds in warm daylight" },
      { src: "/images/curtain/pic20.png", alt: "Roller blind fitted neatly to a window frame" },
      { src: "/images/curtain/pic21.png", alt: "Woven bamboo roller blind texture in close up" },
      { src: "/images/curtain/pic17.jpeg", alt: "Linen Roman blinds with patterned borders across a wide living room window" },
      { src: "/images/curtain/pic13.jpeg", alt: "Vertical blinds fitted across a glass-partitioned office" },
    ],
    related: ["curtains", "ceilings", "wallpaper"],
  },

  {
    slug: "wallpaper",
    lead:
      "Wallpaper is mostly preparation. The pattern matters, but whether it still looks right in two years comes down to how the wall underneath was treated before the first drop went up.",
    hero: { src: "/images/wallpaper/wallpaper3.png", alt: "Textured feature wallpaper in a styled Abu Dhabi interior" },
    keywords: ["wallpaper abu dhabi", "wallpaper installation abu dhabi"],
    intro: [
      "We supply imported wallpaper ranges and hang them ourselves. That matters more than it sounds: when the same team measures, orders and installs, there is no argument later about whether the roll count was wrong or the fitting was.",
      "Most of our work is a single feature wall — behind a bed, behind a majlis seating run, or in an entrance hall. We also do full rooms and commercial spaces where a washable or vinyl finish is needed.",
    ],
    offer: {
      heading: "What the job includes",
      items: [
        {
          title: "Supply from imported ranges",
          body: "We bring sample books to you rather than asking you to choose from a screen. Colour and texture read completely differently in your own light.",
        },
        {
          title: "Wall preparation and making good",
          body: "Stripping old paper, filling, sanding and priming. Skipping this is why wallpaper bubbles, peels at the seams or shows every flaw in the plaster underneath.",
        },
        {
          title: "Feature walls and full rooms",
          body: "A headboard wall, an entrance hall, a full majlis, or every room in an apartment. Pattern repeat is set out before hanging so the match lands where the eye goes.",
        },
        {
          title: "Textured, vinyl and washable finishes",
          body: "Heavier washable and vinyl grades for hallways, children's rooms, offices and anywhere that gets touched. These survive cleaning in a way that paper does not.",
        },
        {
          title: "3D panels and murals",
          body: "Large-format murals and panelled finishes, set out and trimmed on site so the joins fall sensibly against the room rather than in the middle of the wall.",
        },
        {
          title: "Coordinated with paint and ceiling work",
          body: "If only one wall is papered, the other three usually need painting to match. We do both, so the room is finished in one visit rather than two trades.",
        },
      ],
    },
    process: {
      heading: "How a wallpaper job runs",
      steps: [
        { title: "Free site measure", body: "We measure the wall, check its condition, and work out the true roll count including pattern repeat and wastage." },
        { title: "Samples at your home", body: "You see the shortlist against your own wall and your own light before committing." },
        { title: "Preparation", body: "Old covering off, surface filled, sanded and primed. This is most of the labour on a good wallpaper job." },
        { title: "Hung and trimmed", body: "Hung to a plumb line, seams rolled, edges trimmed clean at skirting, ceiling and sockets." },
      ],
    },
    turnaround:
      "A single feature wall is usually a one-day job once the paper has arrived, assuming the wall does not need major making good. Full rooms and imported orders take longer — the wait is normally the delivery, not the hanging.",
    gallery: [
      { src: "/images/wallpaper/wallpaper3.png", alt: "Textured feature wallpaper in a styled interior" },
      { src: "/images/wallpaper/pic6.png", alt: "Patterned wallpaper hung across a living room wall" },
      { src: "/images/wallpaper/pic03.jpg", alt: "Wallpaper detail showing the surface texture up close" },
      { src: "/images/wallpaper/pic05.jpg", alt: "Wallpaper feature wall behind furniture" },
    ],
    related: ["painting", "curtains", "ceilings"],
  },

  {
    slug: "painting",
    lead:
      "We are a decorating company, not a paint supplier — the work is the preparation, the masking and the cutting-in, and that is where a painted room is won or lost.",
    hero: null,
    keywords: ["wall painting abu dhabi", "painting company abu dhabi"],
    intro: [
      "Painting is the service clients most often add once we are already in the house for curtains or wallpaper, because the walls are exposed anyway and the furniture is already moved. It is also the one where the difference between a cheap job and a good one shows up fastest: roller marks, patchy coverage over filler, and wavy lines where the wall meets the ceiling.",
      "We paint villas, apartments, offices and shop interiors across Abu Dhabi, and we handle the making good before the first coat rather than painting over it.",
    ],
    offer: {
      heading: "What we do",
      items: [
        {
          title: "Interior walls and ceilings",
          body: "Full repaints and single rooms. Emulsion for walls and ceilings, with the appropriate finish for the room — matt where you want to hide unevenness, a wipeable sheen for kitchens and hallways.",
        },
        {
          title: "Preparation and making good",
          body: "Filling cracks and screw holes, sanding back, spot-priming repairs and sealing new plaster. This is most of the time on the job and the reason a finish stays flat.",
        },
        {
          title: "Woodwork and doors",
          body: "Doors, frames, skirting and built-in joinery in the appropriate paint, rubbed down between coats.",
        },
        {
          title: "Exterior and boundary walls",
          body: "Weather-resistant masonry coatings for villa exteriors, boundary walls and gates, prepared for the heat and the dust rather than treated like an interior wall.",
        },
        {
          title: "Offices, shops and handovers",
          body: "Commercial repaints scheduled around your opening hours, and end-of-tenancy repaints for handover condition.",
        },
        {
          title: "Colour matching",
          body: "Matching an existing wall, or matching paint to a wallpaper or fabric we are supplying — the common case when one wall is papered and the rest are painted.",
        },
      ],
    },
    process: {
      heading: "How a painting job runs",
      steps: [
        { title: "Free site visit", body: "We look at the actual condition of the walls, not a photo, and price the preparation honestly rather than discovering it later." },
        { title: "Protection and masking", body: "Furniture moved or covered, floors protected, edges masked. Your things should not be the cost of a cheap quote." },
        { title: "Preparation", body: "Fill, sand, prime. Repairs are spot-primed so they do not flash through the finish coat." },
        { title: "Finish coats and clean-up", body: "Coats applied and cut in by hand at the edges. We take the masking off, clean up and move the furniture back." },
      ],
    },
    turnaround:
      "A single room is normally a day or two including preparation and drying between coats. A whole apartment or villa is scheduled room by room so you can keep living in it. Timings depend heavily on how much making good the walls need, which is exactly what the site visit is for.",
    gallery: [],
    galleryNote:
      "Photographs of recent painting work are being added. Ask us on WhatsApp for job photos from a property near you.",
    related: ["wallpaper", "ceilings", "flooring"],
  },

  {
    slug: "flooring",
    lead:
      "Flooring is measured per square metre, but it is won or lost on the subfloor. A level, dry base is the difference between a floor that stays flat and one that lifts at the joints within a year.",
    hero: { src: "/images/parquet/pic24.jpg", alt: "Herringbone oak parquet flooring being laid by hand" },
    keywords: [
      "wooden flooring abu dhabi",
      "vinyl flooring abu dhabi",
      "carpet installation abu dhabi",
    ],
    intro: [
      "We supply and lay engineered wood, laminate, luxury vinyl and carpet. Which one is right is usually decided by the room rather than by taste: bathrooms and kitchens want vinyl, bedrooms often want carpet, and living areas are where engineered wood and parquet earn their cost.",
      "Every job includes checking and preparing what is underneath. We will tell you if the existing floor needs levelling before we quote the covering, because finding it on installation day helps nobody.",
    ],
    offer: {
      heading: "What we supply and lay",
      items: [
        {
          title: "Engineered wood and parquet",
          body: "Herringbone, chevron and straight plank laying in engineered oak and other timbers. Set out from the centre of the room so the cuts land at the edges where they belong.",
        },
        {
          title: "Laminate flooring",
          body: "Click-system laminate in wood and stone effects — the practical choice where you want the look of timber at a lower cost and with a harder wearing surface.",
        },
        {
          title: "Luxury vinyl and vinyl sheet",
          body: "LVT planks and sheet vinyl for kitchens, bathrooms, clinics and offices. Water resistant, quiet underfoot, and the sensible answer anywhere that gets wet.",
        },
        {
          title: "Carpet supply and installation",
          body: "Wall-to-wall carpet and carpet tiles with underlay, gripper and proper stretching, plus rugs cut and bound to size for majlis and bedrooms.",
        },
        {
          title: "Subfloor levelling and preparation",
          body: "Screed levelling, moisture checks and underlay. The part nobody sees and the part that determines whether the floor lasts.",
        },
        {
          title: "Skirting, beading and thresholds",
          body: "Skirting, scotia beading and threshold strips at doorways, so the floor is finished at every edge rather than left with a gap.",
        },
      ],
    },
    process: {
      heading: "How a flooring job runs",
      steps: [
        { title: "Free site measure", body: "We measure the actual area, check the level and condition of the subfloor, and count the doorways and thresholds that need finishing." },
        { title: "Samples and a per-square-metre price", body: "You see the material and get a rate that includes preparation, fitting and finishing rather than covering alone." },
        { title: "Preparation", body: "Old covering lifted and disposed of, subfloor levelled and checked for moisture, underlay laid." },
        { title: "Laid and finished", body: "Floor laid, cuts made at the edges, skirting and beading fitted, thresholds finished at every door." },
      ],
    },
    turnaround:
      "A single room is usually a day once the material is in. Larger areas depend on how much levelling the subfloor needs — that is assessed at the site measure so it is in the quote rather than added later.",
    gallery: [
      { src: "/images/parquet/pic24.jpg", alt: "Herringbone oak parquet being laid by hand" },
      { src: "/images/parquet/pic07.jpg", alt: "Finished wooden flooring across a completed room" },
      { src: "/images/parquet/pic23.jpeg", alt: "Parquet flooring detail showing grain and joint" },
    ],
    related: ["curtains", "painting", "ceilings"],
  },

  {
    slug: "ceilings",
    lead:
      "A false ceiling is how you hide services and get lighting where you actually want it. A partition is how you get another usable room without moving out. Both are gypsum and framing work, and both need doing before the decorating.",
    hero: null,
    keywords: ["false ceiling abu dhabi", "room partition abu dhabi"],
    intro: [
      "These are the jobs that come first in a fit-out. Ceilings and partitions dictate where the lighting goes, where the curtain track can be fixed, and where the walls that need painting or papering actually are — so it is worth having the same team see the whole sequence rather than coordinating three contractors who each blame the other.",
      "We work in villas, apartments, offices and retail units across Abu Dhabi, on single rooms as readily as on a full floor.",
    ],
    offer: {
      heading: "What we build",
      items: [
        {
          title: "Gypsum false ceilings",
          body: "Suspended gypsum ceilings on a metal frame, taped, jointed and finished ready for paint. Used to hide ducting and wiring and to bring a high ceiling down to a comfortable height.",
        },
        {
          title: "Cove and recessed lighting",
          body: "Lighting coves, recessed spot layouts and concealed LED strips designed into the ceiling rather than added to it afterwards. The layout is set out before the boards go up.",
        },
        {
          title: "Decorative and stepped ceilings",
          body: "Stepped, coffered and shaped ceiling details for majlis and reception rooms, built to the proportions of the actual room.",
        },
        {
          title: "Gypsum room partitions",
          body: "Stud and gypsum partition walls to divide a large room, create an extra bedroom or close off a work area. Insulated where sound matters.",
        },
        {
          title: "Glass and aluminium partitions",
          body: "Glazed office partitions in aluminium framing, with or without doors — the standard way to split an open office while keeping the daylight.",
        },
        {
          title: "Access panels and services",
          body: "Access hatches for AC and plumbing built in where they are needed, so a future repair does not mean cutting a hole in a finished ceiling.",
        },
      ],
    },
    process: {
      heading: "How a ceiling or partition job runs",
      steps: [
        { title: "Free site visit", body: "We look at the ceiling height, the services running above it, and where the lighting and AC need to land." },
        { title: "Layout agreed", body: "Lighting positions and partition lines marked out and agreed before any framing goes up, because moving them afterwards is expensive." },
        { title: "Framing and boarding", body: "Metal frame set out and levelled, boards fixed, joints taped and skimmed to a paint-ready finish." },
        { title: "Finishing", body: "Painted and handed over clean, with the lighting fitted and tested." },
      ],
    },
    turnaround:
      "A single-room ceiling or one partition wall is typically a few days including the skim and drying time before painting. Larger fit-outs are scheduled in stages so the rest of the property stays usable. The site visit is what makes the programme realistic.",
    gallery: [
      { src: "/images/curtain/pic13.jpeg", alt: "Glass-partitioned office bay in Abu Dhabi, fitted with vertical blinds" },
    ],
    galleryNote:
      "More false ceiling and partition photographs are being added. Ask us on WhatsApp for recent job photos.",
    related: ["painting", "blinds", "flooring"],
  },
];

/** The four claims from the company profile, reused as the "why us" block. */
export const CLAIMS = [
  { title: "Professional team", body: "Our own measuring, workshop and fitting staff — not subcontracted labour hired per job." },
  { title: "Quality materials", body: "Imported fabrics, papers and finishes chosen to survive Abu Dhabi heat, sun and dust." },
  { title: "On-time delivery", body: "A date agreed at the quote, and told to you straight if anything threatens it." },
  { title: "Customer satisfaction", body: "Residential and commercial clients across the Emirates, most of whom come back for the next room." },
];

export const findPage = (slug) => SERVICE_PAGES.find((page) => page.slug === slug);

// Fold in the shared metadata (nav label, title, description, h1) and resolve
// image paths against the deployment base, exactly as site.js does.
for (const page of SERVICE_PAGES) {
  const meta = PAGE_META.find((entry) => entry.slug === page.slug);
  if (!meta) throw new Error(`No page-meta entry for "${page.slug}"`);
  Object.assign(page, meta);

  if (page.hero) page.hero.src = asset(page.hero.src);
  for (const shot of page.gallery) shot.src = asset(shot.src);
}
