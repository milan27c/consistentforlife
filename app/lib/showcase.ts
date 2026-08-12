export type ShowcaseProduct = {
  name: string;
  price: number; // LKR
  image: string;
  comingSoon?: boolean;
};

export type ShowcaseCategory = {
  tab: string;
  heading: string;
  tagline: string;
  banner: string;
  bannerMobile: string;
  products: ShowcaseProduct[];
};

const PEXELS = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const lkr = (n: number) => `LKR ${n.toLocaleString("en-LK")}`;

export const SHOWCASE: ShowcaseCategory[] = [
  {
    tab: "TV",
    heading: "Every story, in breathtaking clarity",
    tagline: "Cinematic picture, right in your living room.",
    banner: "/images/products-home-page/TV/banner.jpg",
    bannerMobile: "/images/products-home-page/TV/banner-mobile.jpg",
    products: [
      { name: "108cm (43) QNED AI QNED65 Mini LED 4K Smart TV 2026", price: 189000, image: "/images/products-home-page/TV/products/1.png" },
      { name: "108 cm (43) NANO 4K UHD AI TV NU870 2026", price: 159000, image: "/images/products-home-page/TV/products/2.png" },
      { name: "108cm (43) QNED 8AA Smart TV with α7 AI Processor 4K Gen8, Filmmaker Mode with Dolby Atmos", price: 225000, image: "/images/products-home-page/TV/products/3.png" },
      { name: "108 cm (43) 4K UHD AI UA8200 Smart TV with α7 AI Processor Gen8, Filmmaker Mode with Dolby Atmos", price: 195000, image: "/images/products-home-page/TV/products/4.png" },
    ],
  },
  {
    tab: "Appliances",
    heading: "Built for the heart of the home",
    tagline: "Dependable helpers for every single day.",
    banner: "/images/products-home-page/Appliances/banner.jpg",
    bannerMobile: "/images/products-home-page/Appliances/banner-mobile.jpg",
    products: [
      { name: "594L Side-by-Side Fridge with InstaView Door-in-Door™ in Matt Black", price: 385000, image: "/images/products-home-page/Appliances/products/1.png" },
      { name: "NeoChef Charcoal Healthy Oven", price: 65000, image: "/images/products-home-page/Appliances/products/2.png" },
      { name: "Dishwasher with QuadWash™ and TrueSteam®", price: 175000, image: "/images/products-home-page/Appliances/products/3.png" },
      { name: "11kg AI Direct Drive Front Load Washing Machine", price: 145000, image: "/images/products-home-page/Appliances/products/4.png" },
    ],
  },
  {
    tab: "Audio",
    heading: "Sound that moves the whole room",
    tagline: "Rich, room filling audio for every moment.",
    banner: "/images/products-home-page/Audio/banner.jpg",
    bannerMobile: "/images/products-home-page/Audio/banner-mobile.jpg",
    products: [
      { name: "XBOOM Entertainment System with Karaoke & DJ Effects", price: 0, image: "/images/products-home-page/Audio/products/1.png", comingSoon: true },
      { name: "OK75 1000W RMS Karaoke System with DJ Wheel, DJ Pad & Multi-color Party Lighting", price: 165000, image: "/images/products-home-page/Audio/products/2.png" },
      { name: "XBOOM Boom Blast", price: 55000, image: "/images/products-home-page/Audio/products/3.png" },
      { name: "XBOOM Go PK7 Portable Speaker", price: 35000, image: "/images/products-home-page/Audio/products/4.png" },
    ],
  },
  {
    tab: "Air Conditioning",
    heading: "Comfort in every season",
    tagline: "The perfect climate, quietly maintained.",
    banner: "/images/products-home-page/AC/banner.jpg",
    bannerMobile: "/images/products-home-page/AC/banner-mobile.jpg",
    products: [
      { name: "24,000 BTU Dual Inverter Split AC with ThinQ (Wi-Fi), 4 Way Swing & Ocean Black Fin", price: 285000, image: "/images/products-home-page/AC/products/1.png" },
      { name: "12,000 BTU Dual Inverter Smart Super Convertible 5-in-1 Split AC with ThinQ (Wi-Fi)", price: 195000, image: "/images/products-home-page/AC/products/2.png" },
      { name: "18,000 BTU Dual Inverter Air Conditioner", price: 235000, image: "/images/products-home-page/AC/products/3.png" },
      { name: "12,000 BTU Dual Inverter Ultra Super Convertible 5-in-1 Split with UV Nano", price: 215000, image: "/images/products-home-page/AC/products/4.png" },
    ],
  },
  {
    tab: "Computing",
    heading: "Power for work and play",
    tagline: "Tools that keep pace with your ideas.",
    banner: "/images/products-home-page/Computing/banner.jpg",
    bannerMobile: "/images/products-home-page/Computing/banner-mobile.jpg",
    products: [
      { name: "34\" Curved UltraWide™ IPS Display Monitor 21:9", price: 195000, image: "/images/products-home-page/Computing/products/1.png" },
      { name: "27\" Full HD IPS Monitor with Radeon FreeSync™", price: 45000, image: "/images/products-home-page/Computing/products/2.png" },
      { name: "24\" Class IPS Gaming Monitor (23.8\" Diagonal)", price: 55000, image: "/images/products-home-page/Computing/products/3.png" },
      { name: "UltraGear™ 27\" FHD IPS Gaming Monitor with AMD FreeSync™ Premium", price: 85000, image: "/images/products-home-page/Computing/products/4.png" },
    ],
  },
];
