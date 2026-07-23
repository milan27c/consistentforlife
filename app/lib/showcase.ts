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
    banner: PEXELS(7991579),
    products: [
      { name: '65" OLED Smart Television', price: 895000, image: "/images/about/tv.png" },
      { name: '55" QLED 4K Television', price: 545000, image: PEXELS(6782581) },
      { name: '43" Smart Full HD TV', price: 189000, image: PEXELS(4009401) },
      { name: "Home Cinema Projector", price: 425000, image: PEXELS(1201996) },
    ],
  },
  {
    tab: "Audio",
    heading: "Sound that moves the whole room",
    tagline: "Rich, room filling audio for every moment.",
    banner: PEXELS(3784221),
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
    banner: PEXELS(2724749),
    products: [
      { name: "Side by Side Refrigerator", price: 545000, image: PEXELS(373548) },
      { name: "Multi Door Refrigerator", price: 625000, image: "/images/about/refrigrator.png" },
      { name: "Front Load Washing Machine", price: 189000, image: PEXELS(5816934) },
      { name: "Gas Cooker with Hood", price: 165000, image: PEXELS(2062426) },
    ],
  },
  {
    tab: "Air Conditioning",
    heading: "Comfort in every season",
    tagline: "The perfect climate, quietly maintained.",
    banner: PEXELS(1571460),
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
    banner: PEXELS(574071),
    products: [
      { name: '27" 4K Monitor', price: 165000, image: PEXELS(3316920) },
      { name: "Ultrabook Laptop", price: 285000, image: PEXELS(1181244) },
      { name: "Gaming Desktop", price: 425000, image: PEXELS(3165335) },
      { name: "Performance Workstation", price: 545000, image: PEXELS(2588757) },
    ],
  },
];
