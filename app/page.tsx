import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import NewReleases from "./components/NewReleases";
import FeaturedProducts from "./components/FeaturedProducts";
import Showcase from "./components/Showcase";
import Impact from "./components/Impact";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />

        {/* About — what Consistent For Life is */}
        <About />

        {/* New releases */}
        <NewReleases />

        {/* Featured products rail */}
        <FeaturedProducts />

        {/* Category showcase with tabs */}
        <Showcase />

        {/* Our Impact — community projects */}
        <Impact />

        {/* Latest news, bento grid */}
        <Newsletter />
      </main>
    </>
  );
}
