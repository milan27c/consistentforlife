import type { Metadata } from "next";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import CatalogBrowser from "../components/catalog/CatalogBrowser";

export const metadata: Metadata = {
  title: "All Products",
  description: "Browse electronics built to be consistent for life.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-warm-grey">
        <div className="px-6 pb-16 pt-16 sm:pt-20 md:px-10 lg:px-16">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          </div>

          <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
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
