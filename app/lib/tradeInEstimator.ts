import { SHOWCASE } from "./showcase";

export type ProductTypeKey = "tv" | "appliances" | "audio" | "ac" | "computing";

type ProductType = {
  key: ProductTypeKey;
  label: string;
  category: string; // matches a SHOWCASE tab
  avgLifespanYears: number;
  repairCostShare: [number, number]; // typical repair cost as a share of a new unit
};

export const PRODUCT_TYPES: ProductType[] = [
  { key: "tv", label: "Television", category: "TV", avgLifespanYears: 7, repairCostShare: [0.15, 0.3] },
  { key: "appliances", label: "Major appliance", category: "Appliances", avgLifespanYears: 10, repairCostShare: [0.1, 0.25] },
  { key: "audio", label: "Audio system", category: "Audio", avgLifespanYears: 6, repairCostShare: [0.15, 0.35] },
  { key: "ac", label: "Air conditioner", category: "Air Conditioning", avgLifespanYears: 8, repairCostShare: [0.12, 0.28] },
  { key: "computing", label: "Monitor", category: "Computing", avgLifespanYears: 6, repairCostShare: [0.15, 0.3] },
];

export type AgeKey = "new" | "mid" | "aging" | "old";

type AgeOption = {
  key: AgeKey;
  label: string;
  years: number;
};

export const AGE_OPTIONS: AgeOption[] = [
  { key: "new", label: "Under 2 years", years: 1 },
  { key: "mid", label: "2 to 5 years", years: 3.5 },
  { key: "aging", label: "6 to 8 years", years: 7 },
  { key: "old", label: "9 or more years", years: 11 },
];

export type Verdict = "repair" | "borderline" | "replace";

export type EstimatorResult = {
  verdict: Verdict;
  badge: string;
  headline: string;
  blurb: string;
  repairCostLow: number;
  repairCostHigh: number;
  typicalReplacementCost: number;
  showEwasteCta: boolean;
};

export const lkr = (n: number) => `LKR ${Math.round(n).toLocaleString("en-LK")}`;

function typicalCategoryPrice(category: string): number {
  const products = SHOWCASE.find((c) => c.tab === category)?.products.filter((p) => p.price > 0) ?? [];
  if (products.length === 0) return 0;
  return products.reduce((sum, p) => sum + p.price, 0) / products.length;
}

export function computeEstimate(productKey: ProductTypeKey, ageKey: AgeKey): EstimatorResult {
  const productType = PRODUCT_TYPES.find((p) => p.key === productKey)!;
  const ageOption = AGE_OPTIONS.find((a) => a.key === ageKey)!;
  const typicalReplacementCost = typicalCategoryPrice(productType.category);
  const fraction = ageOption.years / productType.avgLifespanYears;

  const [lowShare, highShare] = productType.repairCostShare;
  const repairCostLow = typicalReplacementCost * lowShare;
  const repairCostHigh = typicalReplacementCost * highShare;

  let verdict: Verdict;
  let badge: string;
  let headline: string;
  let blurb: string;

  if (fraction < 0.55) {
    verdict = "repair";
    badge = "Worth repairing";
    headline = "This one still has plenty of life left";
    blurb = `A ${productType.label.toLowerCase()} at this age is usually a straightforward, affordable fix. A repair costs a fraction of a new unit and keeps a perfectly good product out of the waste stream.`;
  } else if (fraction < 0.95) {
    verdict = "borderline";
    badge = "Worth a second opinion";
    headline = "This one is right on the line";
    blurb = `A ${productType.label.toLowerCase()} at this age can often be repaired affordably, but it is also approaching the end of its typical lifespan. Weigh the repair cost against how much longer you would like it to last.`;
  } else {
    verdict = "replace";
    badge = "Time for an upgrade";
    headline = "This one has earned its retirement";
    blurb = `A ${productType.label.toLowerCase()} at this age is well past its typical lifespan. Repairs get more frequent and less cost effective from here, so let us take it off your hands and recycle it responsibly.`;
  }

  return {
    verdict,
    badge,
    headline,
    blurb,
    repairCostLow,
    repairCostHigh,
    typicalReplacementCost,
    showEwasteCta: verdict !== "repair",
  };
}
