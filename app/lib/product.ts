const PEXELS = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export type ProductDetail = {
  slug: string;
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
  keyFeatures: string[];
  description: string;
  featureChips: { title: string; value: string; caption: string }[];
  featureHighlights: { heading: string; body: string; image: string }[];
  specs: { label: string; value: string }[];
  reviews: { name: string; rating: number; date: string; comment: string }[];
  faqs: { question: string; answer: string }[];
};

export const lkr = (n: number) => `LKR ${n.toLocaleString("en-LK")}`;

// Only one sample product page exists for now; every "View Product" link
// across the site points here until the full catalog is built out.
export const SAMPLE_PRODUCT_SLUG = "qned-ai-smart-tv";

export const PRODUCT: ProductDetail = {
  slug: SAMPLE_PRODUCT_SLUG,
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
    { src: "/images/products-home-page/TV/products/1 all images/1B.png", alt: "QNED AI Smart TV with people watching" },
    { src: "/images/products-home-page/TV/products/1 all images/1C.png", alt: "QNED AI Smart TV display detail" },
    { src: "/images/products-home-page/TV/products/1 all images/1D.png", alt: "QNED AI Smart TV side view" },
    { src: "/images/products-home-page/TV/products/1 all images/1E.png", alt: "QNED AI Smart TV in home setup" },
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
  featureHighlights: [
    {
      heading: "Breathtaking clarity at every angle",
      body: "QNED65 Mini LED technology delivers perfect blacks and brilliant highlights with thousands of independent dimming zones, creating lifelike contrast that draws you into every scene.",
      image: "/images/products-home-page/TV/products/1 all images/1C.png",
    },
    {
      heading: "AI that understands great picture",
      body: "The α7 AI Processor Gen8 analyzes every frame in real-time, intelligently upscaling content and optimizing colors, contrast, and motion so even standard broadcasts look stunning.",
      image: "/images/products-home-page/TV/products/1 all images/1D.png",
    },
  ],
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
