import { SHOWCASE } from "./showcase";
import { slugForProduct } from "./product";

export type ApplianceCategory = "ac" | "appliances" | "tv" | "computing";

type CategoryProfile = {
  key: ApplianceCategory;
  label: string;
  /** Share of a typical household's monthly usage this category represents. */
  shareOfUsage: number;
  /** Typical reduction achievable by switching to a low energy model. */
  efficiencyGain: number;
};

export const CATEGORY_PROFILES: CategoryProfile[] = [
  { key: "ac", label: "Air conditioning", shareOfUsage: 0.36, efficiencyGain: 0.42 },
  { key: "appliances", label: "Fridge, laundry and kitchen", shareOfUsage: 0.28, efficiencyGain: 0.24 },
  { key: "tv", label: "TV and entertainment", shareOfUsage: 0.12, efficiencyGain: 0.2 },
  { key: "computing", label: "Computing", shareOfUsage: 0.09, efficiencyGain: 0.15 },
];

export const RATE_LKR_PER_KWH = 45;
export const USAGE_MIN = 100;
export const USAGE_MAX = 900;
export const USAGE_DEFAULT = 150;
export const USAGE_STEP = 10;
export const TYPICAL_HOUSEHOLD_USAGE = 150;

export const lkr = (n: number) => `LKR ${Math.round(n).toLocaleString("en-LK")}`;

export type ForecastBreakdownRow = {
  key: ApplianceCategory;
  label: string;
  beforeKwh: number;
  afterKwh: number;
};

export type ForecastResult = {
  usageKwh: number;
  currentBill: number;
  projectedUsageKwh: number;
  projectedBill: number;
  savingsLkr: number;
  savingsPercent: number;
  breakdown: ForecastBreakdownRow[];
};

export function computeForecast(usageKwh: number): ForecastResult {
  const currentBill = usageKwh * RATE_LKR_PER_KWH;

  let reducedKwh = 0;
  const breakdown: ForecastBreakdownRow[] = CATEGORY_PROFILES.map((category) => {
    const beforeKwh = usageKwh * category.shareOfUsage;
    const afterKwh = beforeKwh * (1 - category.efficiencyGain);
    reducedKwh += beforeKwh - afterKwh;
    return { key: category.key, label: category.label, beforeKwh, afterKwh };
  });

  const projectedUsageKwh = usageKwh - reducedKwh;
  const projectedBill = projectedUsageKwh * RATE_LKR_PER_KWH;
  const savingsLkr = currentBill - projectedBill;
  const savingsPercent = currentBill > 0 ? (savingsLkr / currentBill) * 100 : 0;

  return {
    usageKwh,
    currentBill,
    projectedUsageKwh,
    projectedBill,
    savingsLkr,
    savingsPercent,
    breakdown,
  };
}

export type EnergyPick = {
  name: string;
  image: string;
  price: number;
  slug: string;
  category: ApplianceCategory;
  categoryLabel: string;
  efficiencyGain: number;
};

const PICK_TABS: { tab: string; category: ApplianceCategory }[] = [
  { tab: "Air Conditioning", category: "ac" },
  { tab: "Appliances", category: "appliances" },
  { tab: "TV", category: "tv" },
];

export const ENERGY_PICKS: EnergyPick[] = PICK_TABS.map(({ tab, category }) => {
  const showcaseCategory = SHOWCASE.find((c) => c.tab === tab)!;
  const product = showcaseCategory.products.find((p) => !p.comingSoon)!;
  const profile = CATEGORY_PROFILES.find((p) => p.key === category)!;
  return {
    name: product.name,
    image: product.image,
    price: product.price,
    slug: slugForProduct(product.name),
    category,
    categoryLabel: profile.label,
    efficiencyGain: profile.efficiencyGain,
  };
});
