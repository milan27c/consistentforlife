import { SHOWCASE } from "./showcase";
import { slugForProduct } from "./product";

export type CatalogProduct = {
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  slug: string;
  comingSoon?: boolean;
};

// Star ratings for the sort/filter demo. Keyed by product name since the
// underlying SHOWCASE data doesn't carry a rating.
const RATINGS: Record<string, number> = {
  '65" OLED Smart Television': 4.7,
  '55" QLED 4K Television': 4.5,
  '43" Smart Full HD TV': 4.2,
  "Home Cinema Projector": 4.4,
  "Wireless Soundbar": 4.3,
  "Over Ear Headphones": 4.1,
  "Studio Monitor Headphones": 4.6,
  "Smart Home Speaker": 4.0,
  "Side by Side Refrigerator": 4.4,
  "Multi Door Refrigerator": 4.6,
  "Front Load Washing Machine": 4.2,
  "Gas Cooker with Hood": 4.0,
  "Dual Inverter Split AC": 4.3,
  "Wall Mounted Inverter AC": 4.1,
  "Multi Zone Climate System": 4.5,
  "Smart Air Purifier": 4.2,
  '27" 4K Monitor': 4.4,
  "Ultrabook Laptop": 4.6,
  "Gaming Desktop": 4.7,
  "Performance Workstation": 4.5,
};

// Products with a detail page of their own link straight to it; the rest fall
// back to the sample page until the full per product catalog is built out.
export const CATALOG_PRODUCTS: CatalogProduct[] = SHOWCASE.flatMap((category) =>
  category.products.map((product) => ({
    name: product.name,
    category: category.tab,
    price: product.price,
    rating: RATINGS[product.name] ?? 4.0,
    image: product.image,
    slug: slugForProduct(product.name),
    comingSoon: product.comingSoon,
  }))
);

export const CATEGORIES = SHOWCASE.map((category) => category.tab);

export type CategoryWithSubs = {
  name: string;
  subcategories: string[];
};

export const CATEGORIES_WITH_SUBS: CategoryWithSubs[] = [
  {
    name: "TV",
    subcategories: [
      "OLED TVs",
      "QNED MiniLED TVs",
      "NanoCell TVs",
      "UHD 4K TVs",
      "Full HD TVs",
      "Smart TVs",
      "LED TVs",
    ],
  },
  {
    name: "Audio",
    subcategories: ["Soundbars", "Headphones", "Speakers", "Wireless Audio"],
  },
  {
    name: "Appliances",
    subcategories: [
      "Refrigerators",
      "Washing Machines",
      "Microwave Ovens",
      "Dishwashers",
    ],
  },
  {
    name: "Air Conditioning",
    subcategories: ["Split AC Units", "Window AC Units", "Air Purifiers"],
  },
  {
    name: "Computing",
    subcategories: ["Monitors", "Laptops", "Desktop Computers", "Workstations"],
  },
];

export type PriceBand = { label: string; min: number; max: number };

export const PRICE_BANDS: PriceBand[] = [
  { label: "Under LKR 100,000", min: 0, max: 100000 },
  { label: "LKR 100,000 to 300,000", min: 100000, max: 300000 },
  { label: "LKR 300,000 to 500,000", min: 300000, max: 500000 },
  { label: "Above LKR 500,000", min: 500000, max: Infinity },
];

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating-desc";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
  { value: "rating-desc", label: "Top rated" },
];
