import type { Metadata } from "next";
import Header from "../components/Header";
import BreadcrumbBar from "../components/BreadcrumbBar";
import SustainabilityBanner from "../components/sustainability/SustainabilityBanner";
// import EnergyForecastSection from "../components/sustainability/EnergyForecastSection";
import RecycleCycleSection from "../components/sustainability/RecycleCycleSection";
import EWastePickupBanner from "../components/sustainability/EWastePickupBanner";
import TradeInEstimatorSection from "../components/sustainability/TradeInEstimatorSection";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Forecast your electricity bill and discover the low energy lineup behind the promise of consistent efficiency.",
};

export default function SustainabilityPage() {
  return (
    <>
      <Header />
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Sustainability" }]} />
      <main className="flex-1 bg-warm-grey">
        <SustainabilityBanner />

        <TradeInEstimatorSection />

        {/* <EnergyForecastSection /> */}

        <RecycleCycleSection />

        <EWastePickupBanner />
      </main>
    </>
  );
}
