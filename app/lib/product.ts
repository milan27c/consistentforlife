export type StoryBlock = {
  eyebrow?: string;
  heading: string;
  body: string;
  image: string;
  alt: string;
  /** "dark" runs the block edge to edge on black; "light" is a rounded card on the page background. */
  tone: "light" | "dark";
};

export type ProductDetail = {
  slug: string;
  category: "tv" | "audio" | "appliances" | "ac" | "computing";
  badges: string[];
  name: string;
  breadcrumbLabel: string;
  sku: string;
  rating: number;
  reviewCount: number;
  recommendPercent: number;
  price: number;
  mrp: number;
  images: { src: string; alt: string }[];
  sizeOptions?: { label: string; selected?: boolean }[];
  sizeSelectorLabel?: string;
  keyFeatures: string[];
  description: string;
  featureChips: { title: string; value: string; caption: string }[];
  featureHighlights: { heading: string; body: string; image: string }[];
  /** Full width story blocks rendered under Key Features. */
  storyBlocks?: StoryBlock[];
  specs: { label: string; value: string }[];
  reviews: { name: string; rating: number; date: string; comment: string }[];
  faqs: { question: string; answer: string }[];
};

export const lkr = (n: number) => `LKR ${n.toLocaleString("en-LK")}`;

// The default product page. Every "View Product" link across the site lands
// here unless the product has a page of its own (see PRODUCTS below).
export const SAMPLE_PRODUCT_SLUG = "qned-ai-smart-tv";
export const FRIDGE_PRODUCT_SLUG = "instaview-side-by-side-fridge";

export const TV_PRODUCT: ProductDetail = {
  slug: SAMPLE_PRODUCT_SLUG,
  category: "tv",
  badges: ["Best Seller", "2026 Model"],
  name: "108cm (43) QNED AI QNED65 Mini LED 4K Smart TV 2026",
  breadcrumbLabel: "QNED AI Smart TV",
  sku: "TV-QNED65-2026",
  rating: 4.6,
  reviewCount: 58,
  recommendPercent: 89,
  price: 189000,
  mrp: 249000,
  images: [
    { src: "/images/products-home-page/TV/products/1.png", alt: "QNED AI Smart TV front view" },
    { src: "/images/products-home-page/TV/products/2.png", alt: "QNED AI Smart TV display detail" },
    { src: "/images/products-home-page/TV/products/3.png", alt: "QNED AI Smart TV screen close up" },
    { src: "/images/products-home-page/TV/products/4.png", alt: "QNED AI Smart TV alternate view" },
    { src: "/images/products-home-page/TV/products/1 all images/1C.png", alt: "QNED AI Smart TV dimensions" },
  ],
  sizeSelectorLabel: "Screen size",
  sizeOptions: [
    { label: "164cm (65)" },
    { label: "139cm (55)" },
    { label: "108cm (43)", selected: true },
  ],
  keyFeatures: [
    "QNED65 Mini LED with 4K resolution and AI upscaling",
    "α7 AI Processor Gen8 for intelligent picture enhancement",
    "Filmmaker Mode with Dolby Atmos for cinema-quality experience",
    "Smart AI features adapt to your viewing habits",
    "2026 model with latest AI technology",
  ],
  description:
    "Experience cinema-quality picture right in your living room. This 108cm QNED AI Smart TV combines cutting-edge Mini LED technology with AI intelligence that adapts to every scene, delivering breathtaking clarity and vibrant colors. Whether you're watching movies, sports, or everyday content, the α7 AI Processor ensures every frame looks its best.",
  featureChips: [
    { title: "Display", value: "QNED65", caption: "Mini LED 4K" },
    { title: "AI Processor", value: "α7 Gen8", caption: "Scene adaptation" },
    { title: "Audio", value: "Dolby Atmos", caption: "Immersive sound" },
    { title: "Resolution", value: "4K", caption: "Ultra HD" },
    { title: "Screen size", value: "43 inch", caption: "108cm" },
    { title: "Smart features", value: "AI Ready", caption: "Future-proof" },
  ],
  featureHighlights: [],
  specs: [
    { label: "Screen size", value: "108 cm (43 inches)" },
    { label: "Resolution", value: "4K UHD (3840 x 2160)" },
    { label: "Display type", value: "QNED65 Mini LED" },
    { label: "Processor", value: "α7 AI Processor Gen8" },
    { label: "Refresh rate", value: "120 Hz" },
    { label: "Audio", value: "Dolby Atmos" },
    { label: "Smart TV OS", value: "WebOS 2026" },
    { label: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.2, 4x HDMI 2.1" },
    { label: "Power consumption", value: "85W (typical)" },
    { label: "Warranty", value: "2 years full" },
  ],
  reviews: [
    {
      name: "Kavi L.",
      rating: 5,
      date: "July 2026",
      comment:
        "The picture quality is absolutely stunning. The AI upscaling makes even older content look incredible. This is a genuinely premium TV experience.",
    },
    {
      name: "Nisha D.",
      rating: 5,
      date: "June 2026",
      comment:
        "Best purchase we made this year. Dolby Atmos sound is immersive, the colors pop, and it's so easy to use. Highly recommend.",
    },
    {
      name: "Rohan P.",
      rating: 4,
      date: "May 2026",
      comment:
        "Fantastic picture quality and smart features work seamlessly. Only minor note: the remote could have a few more shortcuts, but overall excellent.",
    },
  ],
  faqs: [
    {
      question: "Is this TV suitable for gaming?",
      answer:
        "Yes, with 120Hz refresh rate and HDMI 2.1 support, it's excellent for next-gen console gaming. The AI processor also minimizes input lag for competitive play.",
    },
    {
      question: "Does it have built-in streaming apps?",
      answer:
        "Yes, WebOS 2026 includes all major streaming platforms pre-installed: Netflix, YouTube, Prime Video, Disney+, and more. Wi-Fi 6 ensures smooth streaming.",
    },
    {
      question: "What is Filmmaker Mode?",
      answer:
        "Filmmaker Mode displays content exactly as directors intended, with no motion smoothing or artificial enhancements, perfect for watching movies and series.",
    },
    {
      question: "Can I wall mount this TV?",
      answer:
        "Yes, the TV is VESA compatible and supports standard wall mounting. We recommend professional installation for safety and optimal viewing angle.",
    },
  ],
};

const FRIDGE_IMAGES = "/images/products-home-page/Appliances/products";

export const FRIDGE_PRODUCT: ProductDetail = {
  slug: FRIDGE_PRODUCT_SLUG,
  category: "appliances",
  badges: ["Best Seller", "10 Year Compressor Warranty"],
  name: "594L Side-by-Side Fridge with InstaView Door-in-Door™ in Matt Black",
  breadcrumbLabel: "InstaView Side by Side Fridge",
  sku: "RF-Q4919MT",
  rating: 4.5,
  reviewCount: 42,
  recommendPercent: 92,
  price: 385000,
  mrp: 445000,
  images: [
    { src: `${FRIDGE_IMAGES}/1.png`, alt: "Side by side fridge in matt black, front view" },
    {
      src: `${FRIDGE_IMAGES}/1 all images/1D.png`,
      alt: "Mirrored glass panel lit up to reveal drinks and jars inside the door",
    },
    {
      src: `${FRIDGE_IMAGES}/1 all images/1B.png`,
      alt: "Front compartment opened for quick access to everyday items",
    },
    {
      src: `${FRIDGE_IMAGES}/1 all images/1C.png`,
      alt: "All four doors open showing fully stocked shelves and freezer drawers",
    },
    {
      src: `${FRIDGE_IMAGES}/1 all images/1E.png`,
      alt: "Freezer drawers stocked with meat, fish and frozen treats",
    },
  ],
  keyFeatures: [
    "InstaView glass panel lights up with two quick knocks, no door opening needed",
    "594L gross capacity with room for a full week of shopping",
    "Inverter Linear Compressor backed by a 10 year parts warranty",
    "Linear Cooling with Multi Air Flow holds a steady temperature throughout",
    "Door Cooling+ and Hygiene FRESH+ keep food fresher for longer",
    "Adjust temperatures from your phone, wherever you happen to be",
  ],
  description:
    "The fridge is the one appliance in your home that never gets a day off. This 594L side by side keeps a steady, even temperature in every corner, lights up with two knocks so you can see inside without letting the cold escape, and runs on an Inverter Linear Compressor we stand behind for a full decade. Matt black inside a slim 835mm frame, it is built to sit in your kitchen and simply keep working.",
  featureChips: [
    { title: "Capacity", value: "594L", caption: "Room for the week" },
    { title: "Compressor", value: "Inverter", caption: "10 year warranty" },
    { title: "Cooling", value: "Linear", caption: "Steady temperature" },
    { title: "Door", value: "InstaView", caption: "Knock twice to see" },
    { title: "Finish", value: "Matt Black", caption: "Easy pocket handle" },
    { title: "Smart control", value: "App Ready", caption: "Wi Fi connected" },
  ],
  featureHighlights: [],
  storyBlocks: [
    {
      heading: "Knock Twice to See Inside and Access Your Favorites with Ease",
      body: "With InstaView Door in Door, simply knock twice on the glass panel to illuminate the interior without opening the door. Quickly see and access your favourite food and drinks while helping reduce unnecessary cold air loss.",
      image: "/images/product 2/1.png",
      alt: "A family gathered at the fridge as the glass panel lights up",
      tone: "light",
    },
    {
      heading: "See Inside with Two Quick Knocks",
      body: "With two quick knocks on the sleek mirrored glass panel, InstaView Door in Door lets you see your favourite snacks and beverages without opening the door. Quick and easy access helps reduce cold air loss, keeping your food fresher for longer.",
      image: "/images/product 2/2.png",
      alt: "Mirrored glass panel glowing to reveal juices and preserves inside",
      tone: "dark",
    },
    {
      heading: "Up to 19% Faster Cooling for Lasting Freshness",
      body: "Front air vents deliver cool air throughout the fridge, helping maintain a consistent temperature so your food stays fresh for longer.",
      image: "/images/product 2/3.png",
      alt: "Cool air flowing across fully stocked shelves of fruit and vegetables",
      tone: "light",
    },
    {
      heading: "Control Your Fridge from Anywhere",
      body: "With a compatible smartphone and our smart home app, you can remotely adjust your fridge's temperature settings, so it is ready to keep your groceries fresh after a big shopping trip.",
      image: "/images/product 2/4.png",
      alt: "Someone checking fridge and freezer temperatures on a phone while shopping",
      tone: "dark",
    },
    {
      heading: "Designed to Fit Seamlessly into Your Kitchen",
      body: "With a slim 835mm width, this fridge is designed to fit comfortably into most kitchen spaces. Its space saving design gives you the benefits of a French door refrigerator without requiring extra room.",
      image: "/images/product 2/5.png",
      alt: "Matt black fridge sitting flush inside a bright modern kitchen",
      tone: "light",
    },
  ],
  specs: [
    { label: "Total capacity", value: "594 L" },
    { label: "Net storage, fridge", value: "322 L" },
    { label: "Net storage, freezer", value: "142 L" },
    { label: "Dimensions (W x H x D)", value: "835 x 1787 x 734 mm" },
    { label: "Weight", value: "120 kg" },
    { label: "Compressor", value: "Inverter Linear" },
    { label: "Cooling system", value: "Linear Cooling with Multi Air Flow" },
    { label: "Ice maker", value: "Twist ice maker" },
    { label: "Shelves", value: "4 tempered glass shelves, 4 door baskets" },
    { label: "Energy consumption", value: "529 kWh per year" },
    { label: "Refrigerant", value: "R600a" },
    { label: "Lighting", value: "LED interior" },
    { label: "Smart features", value: "App control, remote temperature, Smart Diagnosis" },
    { label: "Convenience", value: "Child lock, door alarm, express freeze, fresh zone" },
    { label: "Finish", value: "Matt black with easy pocket handle" },
    { label: "Warranty", value: "2 years full, 10 years on the compressor" },
  ],
  reviews: [
    {
      name: "Dilani W.",
      rating: 5,
      date: "July 2026",
      comment:
        "The knock feature sounds like a gimmick until you live with it. The kids look before they open, the kitchen stays cooler and everything inside lasts noticeably longer.",
    },
    {
      name: "Suresh A.",
      rating: 5,
      date: "June 2026",
      comment:
        "Quiet enough that we forget it is running, and the matt black finish still looks brand new after months of daily use. Fits our kitchen alcove perfectly.",
    },
    {
      name: "Tharuka M.",
      rating: 4,
      date: "May 2026",
      comment:
        "Huge amount of space and the temperature stays even top to bottom. The app is genuinely useful after a big shop. Only wish the freezer had one more drawer.",
    },
  ],
  faqs: [
    {
      question: "How does the knock to see feature work?",
      answer:
        "Two quick knocks on the mirrored glass panel light up the compartment behind it, so you can see what is inside without opening the door. The light fades on its own after a few seconds.",
    },
    {
      question: "Will it fit through a standard doorway?",
      answer:
        "The cabinet is 835mm wide, 1787mm tall and 734mm deep, so it clears most standard doorways. We recommend measuring your entry path and leaving room at the back and sides for airflow.",
    },
    {
      question: "How loud is it?",
      answer:
        "The Inverter Linear Compressor runs at variable speed instead of switching fully on and off, so it settles into a low hum you stop noticing in an open plan kitchen.",
    },
    {
      question: "What does the 10 year warranty cover?",
      answer:
        "The Inverter Linear Compressor carries a 10 year parts warranty, on top of the standard 2 year cover on the appliance. It is the part that does the hardest work, so it is the part we back the longest.",
    },
  ],
};

export const PRODUCTS: ProductDetail[] = [TV_PRODUCT, FRIDGE_PRODUCT];

export const getProduct = (slug: string) =>
  PRODUCTS.find((product) => product.slug === slug);

// Catalog and showcase cards share product names with the detail pages, so a
// name lookup is enough to route a card to its own page where one exists.
const SLUG_BY_NAME: Record<string, string> = Object.fromEntries(
  PRODUCTS.map((product) => [product.name, product.slug])
);

export const slugForProduct = (name: string) =>
  SLUG_BY_NAME[name] ?? SAMPLE_PRODUCT_SLUG;
