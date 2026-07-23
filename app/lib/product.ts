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
export const SAMPLE_PRODUCT_SLUG = "dual-inverter-split-ac";

export const PRODUCT: ProductDetail = {
  slug: SAMPLE_PRODUCT_SLUG,
  badges: ["Best Seller", "2026 Model"],
  name: "Dual Inverter Split Air Conditioner, AI Convertible 6 in 1 Cooling, 2026 Model",
  breadcrumbLabel: "Dual Inverter Split AC",
  sku: "CFL-AC18-2026",
  rating: 4.3,
  reviewCount: 41,
  recommendPercent: 82,
  price: 235000,
  mrp: 325000,
  images: [
    { src: PEXELS(1918291), alt: "Living room cooled by a wall mounted air conditioner" },
    { src: PEXELS(3964704), alt: "Air conditioner units mounted on a building exterior" },
    { src: PEXELS(1571460), alt: "Modern home interior kept comfortable year round" },
  ],
  keyFeatures: [
    "AI Convertible 6 in 1 cooling that adapts to the room",
    "Dual Inverter compressor for quiet, efficient performance",
    "Gold Fin coating for long lasting corrosion resistance",
    "10 year compressor warranty, 5 year parts warranty",
  ],
  description:
    "Built for comfort that lasts, this split air conditioner learns how you cool your home and adjusts capacity, temperature, and fan speed automatically, so every room stays comfortable with less effort and less energy.",
  featureChips: [
    { title: "AI Convertible", value: "6 in 1", caption: "Cooling" },
    { title: "More convenience", value: "Diet Mode", caption: "Energy efficiency" },
    { title: "Anti corrosion coating", value: "Gold Fin+", caption: "Long lasting durability" },
    { title: "Faster cooling", value: "Rapid", caption: "High capacity" },
    { title: "Inverter compressor", value: "10 Year", caption: "Warranty" },
    { title: "PCB and motor", value: "5 Year", caption: "Warranty" },
  ],
  featureHighlights: [
    {
      heading: "Cooling that adapts to you",
      body: "Effortlessly reaches perfect cooling by automatically adjusting capacity, temperature, and fan speed for optimal comfort in any room, any season.",
      image: PEXELS(1918291),
    },
    {
      heading: "Quiet by design, efficient by nature",
      body: "A Dual Inverter compressor ramps power up and down smoothly instead of switching on and off, so it runs quieter and uses less energy over its lifetime.",
      image: PEXELS(3964704),
    },
  ],
  specs: [
    { label: "Capacity", value: "1.5 Ton" },
    { label: "Energy rating", value: "5 Star" },
    { label: "Cooling capacity", value: "4.4 kW" },
    { label: "Power consumption", value: "1,320 W" },
    { label: "Compressor type", value: "Dual Inverter" },
    { label: "Noise level, indoor", value: "19 dB" },
    { label: "Refrigerant", value: "R32" },
    { label: "Dimensions, indoor unit", value: "899 x 285 x 210 mm" },
    { label: "Warranty, compressor", value: "10 years" },
    { label: "Warranty, parts", value: "5 years" },
  ],
  reviews: [
    {
      name: "Amaya P.",
      rating: 5,
      date: "March 2026",
      comment:
        "Runs so much quieter than the unit it replaced, and the room cools down in minutes. Diet Mode has noticeably helped with the electricity bill.",
    },
    {
      name: "Ruwan S.",
      rating: 4,
      date: "February 2026",
      comment:
        "Installation was straightforward and the AI cooling mode genuinely adjusts itself well. Wish the remote felt a bit more premium.",
    },
    {
      name: "Dilini F.",
      rating: 4,
      date: "January 2026",
      comment:
        "Solid, dependable performance through the hottest months. Exactly the kind of appliance you stop thinking about because it just works.",
    },
  ],
  faqs: [
    {
      question: "What size room is this unit suited for?",
      answer:
        "This 1.5 ton model comfortably cools rooms up to roughly 150 to 180 square feet, depending on ceiling height, insulation, and sun exposure.",
    },
    {
      question: "Does it need a stabilizer?",
      answer:
        "An external stabilizer is not required under normal voltage conditions. The unit includes built in voltage protection for typical fluctuations.",
    },
    {
      question: "How often should the filters be cleaned?",
      answer:
        "We recommend cleaning the washable filters every two weeks during heavy use, and scheduling a professional service check once a year.",
    },
    {
      question: "What does the warranty cover?",
      answer:
        "The compressor is covered for 10 years and all other parts for 5 years from the date of purchase, provided the unit is serviced as recommended.",
    },
  ],
};
