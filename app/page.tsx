import Header from "./components/Header";
import Hero from "./components/Hero";
// import NewReleases from "./components/NewReleases";
// import FeaturedProducts from "./components/FeaturedProducts";
// import Showcase from "./components/Showcase";
import Impact from "./components/Impact";
import LatestDeliveriesSection from "./components/impact/LatestDeliveriesSection";
import Newsletter from "./components/Newsletter";
import EWastePickupBanner from "./components/sustainability/EWastePickupBanner";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />

        <LatestDeliveriesSection />

        {/* Our Impact — community projects */}
        <Impact />

        {/* New releases — hidden for now */}
        {/* <NewReleases /> */}

        {/* Featured products rail — hidden for now */}
        {/* <FeaturedProducts /> */}

        {/* Category showcase with tabs — hidden for now */}
        {/* <Showcase /> */}

        {/* eWaste pickup banner */}
        <EWastePickupBanner />

        {/* Latest news, bento grid */}
        <Newsletter />
      </main>
    </>
  );
}
