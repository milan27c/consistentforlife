export type ShowcaseProduct = {
  name: string;
  price: number; // LKR
  image: string;
};

export type ShowcaseCategory = {
  tab: string;
  heading: string;
  tagline: string;
  banner: string;
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
    banner: "/images/products-home-page/TV/banner.png",
    products: [
      { name: "108cm (43) QNED AI QNED65 Mini LED 4K Smart TV 2026", price: 189000, image: "/images/products-home-page/TV/products/1.png" },
      { name: "108 cm (43) NANO 4K UHD AI TV NU870 2026", price: 159000, image: "/images/products-home-page/TV/products/2.png" },
      { name: "108cm (43) QNED 8AA Smart TV with α7 AI Processor 4K Gen8, Filmmaker Mode with Dolby Atmos", price: 225000, image: "/images/products-home-page/TV/products/3.png" },
      { name: "108 cm (43) 4K UHD AI UA8200 Smart TV with α7 AI Processor Gen8, Filmmaker Mode with Dolby Atmos", price: 195000, image: "/images/products-home-page/TV/products/4.png" },
    ],
  },
  {
    tab: "Audio",
    heading: "Sound that moves the whole room",
    tagline: "Rich, room filling audio for every moment.",
    banner: "/images/products-home-page/Audio/banner.png",
    products: [
      { name: "Wireless Soundbar", price: 145000, image: PEXELS(356056) },
      { name: "Over Ear Headphones", price: 65000, image: PEXELS(577769) },
      { name: "Studio Monitor Headphones", price: 89000, image: PEXELS(1649771) },
      { name: "Smart Home Speaker", price: 45000, image: PEXELS(4790268) },
    ],
  },
  {
    tab: "Appliances",
    heading: "Built for the heart of the home",
    tagline: "Dependable helpers for every single day.",
    banner: "/images/products-home-page/Appliances/banner.png",
    products: [
      { name: "594L Side-by-Side Fridge with InstaView Door-in-Door™ in Matt Black", price: 385000, image: "/images/products-home-page/Appliances/products/1.png" },
      { name: "NeoChef Charcoal Healthy Oven", price: 65000, image: "/images/products-home-page/Appliances/products/2.png" },
      { name: "Dishwasher with QuadWash™ and TrueSteam®", price: 175000, image: "/images/products-home-page/Appliances/products/3.png" },
      { name: "11kg AI Direct Drive Front Load Washing Machine", price: 145000, image: "/images/products-home-page/Appliances/products/4.png" },
    ],
  },
  {
    tab: "Air Conditioning",
    heading: "Comfort in every season",
    tagline: "The perfect climate, quietly maintained.",
    banner: "/images/products-home-page/AC/ac.png",
    products: [
      { name: "Dual Inverter Split AC", price: 235000, image: "/images/about/ac.png" },
      { name: "Wall Mounted Inverter AC", price: 195000, image: PEXELS(3964704) },
      { name: "Multi Zone Climate System", price: 385000, image: PEXELS(1918291) },
      { name: "Smart Air Purifier", price: 95000, image: PEXELS(5825576) },
    ],
  },
  {
    tab: "Computing",
    heading: "Power for work and play",
    tagline: "Tools that keep pace with your ideas.",
    banner: "/images/products-home-page/Computing/banner.png",
    products: [
      { name: '27" 4K Monitor', price: 165000, image: PEXELS(3316920) },
      { name: "Ultrabook Laptop", price: 285000, image: PEXELS(1181244) },
      { name: "Gaming Desktop", price: 425000, image: PEXELS(3165335) },
      { name: "Performance Workstation", price: 545000, image: PEXELS(2588757) },
    ],
  },
];
