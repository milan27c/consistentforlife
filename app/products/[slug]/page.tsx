import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import ProductGallery from "../../components/product/ProductGallery";
import ProductStickyBar, { type ProductTab } from "../../components/product/ProductStickyBar";
import { StarRow } from "../../components/product/StarRow";
import SizeSelector from "../../components/product/SizeSelector";
import FeaturesSection from "../../components/product/FeaturesSection";
import TVStorySection from "../../components/product/TVStorySection";
import ColorStorySection from "../../components/product/ColorStorySection";
import ProcessorStorySection from "../../components/product/ProcessorStorySection";
import RemoteStorySection from "../../components/product/RemoteStorySection";
import GamingStorySection from "../../components/product/GamingStorySection";
import SoundStorySection from "../../components/product/SoundStorySection";
import StorySection from "../../components/product/StorySection";
import SpecsSection from "../../components/product/SpecsSection";
import ReviewsSection from "../../components/product/ReviewsSection";
import FaqSection from "../../components/product/FaqSection";
import SupportSection from "../../components/product/SupportSection";
import { PRODUCTS, getProduct, lkr } from "../../lib/product";

const TABS: ProductTab[] = [
  { id: "features", label: "Features" },
  { id: "specs", label: "Specs" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "support", label: "Support" },
];

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const savings = product.mrp - product.price;

  return (
    <>
      <Header />
      <ProductStickyBar
        name={product.name}
        price={product.price}
        heroSentinelId="hero-sentinel"
        tabs={TABS}
      />

      <main className="flex-1 bg-warm-grey">
        {/* Hero: gallery + info */}
        <section className="px-6 pb-16 pt-16 sm:pt-20 md:px-10 lg:px-16">
          <div className="mt-4 md:mt-0">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: product.breadcrumbLabel },
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <ProductGallery images={product.images} />

            <div>
              <div className="flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-primary/40 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-primary"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="mt-4 font-heading text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
                {product.name}
              </h1>

              <p className="mt-2 font-body text-sm text-neutral-500">SKU {product.sku}</p>

              <a href="#reviews" className="mt-3 flex items-center gap-2">
                <StarRow rating={product.rating} />
                <span className="font-body text-sm text-neutral-500">
                  {product.rating.toFixed(1)} &middot; {product.reviewCount} reviews
                </span>
              </a>

              <div className="mt-6 flex items-baseline gap-3 border-y border-neutral-200 py-5">
                <span className="font-heading text-3xl font-bold text-ink">
                  {lkr(product.price)}
                </span>
                <span className="font-body text-base text-neutral-400 line-through">
                  {lkr(product.mrp)}
                </span>
                <span className="font-body text-sm font-semibold text-primary">
                  Save {lkr(savings)}
                </span>
              </div>

              {product.sizeOptions && (
                <div className="mt-6">
                  <SizeSelector
                    options={product.sizeOptions}
                    label={product.sizeSelectorLabel}
                  />
                </div>
              )}

              <button className="mt-6 w-full rounded-2xl bg-primary py-4 font-body text-sm font-semibold text-white transition-colors hover:bg-[#8c002c] sm:w-auto sm:px-10">
                Where to Buy
              </button>

              <p className="mt-6 font-body text-sm leading-relaxed text-neutral-600">
                {product.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {product.keyFeatures.map((feature) => (
                  <li key={feature} className="flex gap-2.5 font-body text-sm text-neutral-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Marks where the sticky bar begins revealing itself */}
        <div id="hero-sentinel" />

        {/* Tabbed content */}
        <div className="flex flex-col gap-20 px-6 py-16 md:px-10 lg:px-16">
          <section id="features" className="scroll-mt-36">
            <FeaturesSection chips={product.featureChips} highlights={product.featureHighlights} />
            {product.category === "tv" && (
              <>
                <div className="mt-20">
                  <ColorStorySection />
                </div>
                <div className="mt-20">
                  <ProcessorStorySection />
                </div>
                <div className="mt-20">
                  <RemoteStorySection />
                </div>
                <div className="mt-20">
                  <GamingStorySection />
                </div>
                <div className="mt-20">
                  <SoundStorySection />
                </div>
                <div className="mt-20">
                  <TVStorySection />
                </div>
              </>
            )}
            {product.storyBlocks?.map((block) => (
              <div key={block.heading} className="mt-20">
                <StorySection block={block} />
              </div>
            ))}
          </section>

          <section id="specs" className="scroll-mt-36">
            <SpecsSection specs={product.specs} />
          </section>

          <section id="reviews" className="scroll-mt-36">
            <ReviewsSection
              rating={product.rating}
              reviewCount={product.reviewCount}
              recommendPercent={product.recommendPercent}
              reviews={product.reviews}
            />
          </section>

          <section id="faq" className="scroll-mt-36">
            <FaqSection faqs={product.faqs} />
          </section>

          <section id="support" className="scroll-mt-36">
            <SupportSection />
          </section>
        </div>
      </main>
    </>
  );
}
