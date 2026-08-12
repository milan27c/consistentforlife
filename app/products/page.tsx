import type { Metadata } from "next";
import Header from "../components/Header";
import BreadcrumbBar from "../components/BreadcrumbBar";
import CatalogBrowser from "../components/catalog/CatalogBrowser";

export const metadata: Metadata = {
  title: "All Products",
  description: "Browse electronics built to be consistent for life.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
      <main className="flex-1 bg-warm-grey">
        <div className="section-px pb-16 pt-8 sm:pt-10">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            All Products
          </h1>
          <p className="mt-3 max-w-xl font-body text-sm text-neutral-600 sm:text-base">
            A small preview of what we offer, more categories and products are on the way.
          </p>

          <div className="mt-12">
            <CatalogBrowser />
          </div>
        </div>
      </main>
    </>
  );
}
