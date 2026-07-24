"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SlidersHorizontal, X } from "lucide-react";
import {
  CATALOG_PRODUCTS,
  CATEGORIES_WITH_SUBS,
  SORT_OPTIONS,
  type SortOption,
} from "../../lib/catalog";
import { ChevronDown } from "lucide-react";
import CatalogProductCard from "./CatalogProductCard";

export default function CatalogBrowser() {
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [sort, setSort] = useState<SortOption>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (cat: string) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const hasActiveFilters = categories.length > 0 || priceRange[0] > 0 || priceRange[1] < 1000000;

  const clearFilters = () => {
    setCategories([]);
    setPriceRange([0, 1000000]);
  };

  useEffect(() => {
    document.body.style.overflow = filtersOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [filtersOpen]);

  const products = useMemo(() => {
    let list = CATALOG_PRODUCTS.filter((p) => {
      if (categories.length > 0) {
        const parentCategory = CATEGORIES_WITH_SUBS.find((cat) =>
          cat.subcategories.some((sub) => categories.includes(sub))
        );
        if (!parentCategory || parentCategory.name !== p.category) return false;
      }
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });

    list = [...list];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating-desc") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [categories, priceRange, sort]);

  const filterBody = (
    <>
      <div className="mt-6">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-neutral-500">Category</p>
          <div className="mt-4 flex flex-col gap-0">
            {CATEGORIES_WITH_SUBS.map((catGroup) => (
              <div key={catGroup.name}>
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === catGroup.name ? null : catGroup.name
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
                >
                  {catGroup.name}
                  <ChevronDown
                    className={`mr-1 h-4 w-4 shrink-0 transition-transform ${
                      expandedCategory === catGroup.name ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                {expandedCategory === catGroup.name && (
                  <div className="rounded-2xl bg-neutral-50 mx-2 mb-2 p-3 flex flex-col gap-2">
                    {catGroup.subcategories.map((sub) => (
                      <label
                        key={sub}
                        className="flex items-center gap-2.5 font-body text-sm text-neutral-600 cursor-pointer hover:text-ink"
                      >
                        <input
                          type="checkbox"
                          checked={categories.includes(sub)}
                          onChange={() => toggleCategory(sub)}
                          className="h-4 w-4 rounded border-neutral-300 text-primary accent-primary cursor-pointer"
                        />
                        <span>{sub}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-neutral-500">Price Range</p>
          <div className="mt-4 space-y-4">
            <style>{`
              .dual-range-slider {
                position: relative;
                height: 24px;
                display: flex;
                align-items: center;
                margin: 4px 0;
              }
              .dual-range-slider input[type="range"] {
                position: absolute;
                width: 100%;
                height: 8px;
                background: transparent;
                border-radius: 8px;
                appearance: none;
                -webkit-appearance: none;
                pointer-events: none;
                top: 50%;
                transform: translateY(-50%);
              }
              .dual-range-slider input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                -webkit-appearance: none;
                width: 24px;
                height: 24px;
                background: #A50034;
                border-radius: 50%;
                cursor: pointer;
                pointer-events: auto;
                border: none;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                margin: -8px 0;
              }
              .dual-range-slider input[type="range"]::-moz-range-thumb {
                width: 24px;
                height: 24px;
                background: #A50034;
                border-radius: 50%;
                cursor: pointer;
                pointer-events: auto;
                border: none;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                margin-top: -8px;
              }
              .dual-range-slider input[type="range"]::-webkit-slider-runnable-track {
                background: transparent;
                height: 8px;
                border-radius: 8px;
              }
              .dual-range-slider input[type="range"]::-moz-range-track {
                background: transparent;
              }
              .range-track {
                position: absolute;
                height: 8px;
                background: #E0DDD6;
                border-radius: 8px;
                width: 100%;
                pointer-events: none;
                top: 50%;
                transform: translateY(-50%);
              }
            `}</style>
            <div className="dual-range-slider">
              <div className="range-track" />
              <input
                type="range"
                min="0"
                max="1000000"
                value={priceRange[0]}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (val <= priceRange[1]) setPriceRange([val, priceRange[1]]);
                }}
                style={{ zIndex: priceRange[0] > 500000 ? 5 : 3 }}
              />
              <input
                type="range"
                min="0"
                max="1000000"
                value={priceRange[1]}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (val >= priceRange[0]) setPriceRange([priceRange[0], val]);
                }}
                style={{ zIndex: priceRange[1] < 500000 ? 5 : 3 }}
              />
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  if (val <= priceRange[1]) setPriceRange([val, priceRange[1]]);
                }}
                className="w-24 rounded-lg border border-neutral-200 px-2 py-1.5 font-body text-xs focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <span className="flex items-center text-neutral-400 text-xs">–</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 1000000;
                  if (val >= priceRange[0]) setPriceRange([priceRange[0], val]);
                }}
                className="w-24 rounded-lg border border-neutral-200 px-2 py-1.5 font-body text-xs focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="text-xs text-neutral-500 font-body">
              LKR {priceRange[0].toLocaleString()} – LKR {priceRange[1].toLocaleString()}
            </div>
          </div>
        </div>
      </>
    );

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
      {/* Mobile filter toggle */}
      <button
        onClick={() => setFiltersOpen(true)}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 font-body text-sm font-semibold text-ink lg:hidden"
      >
        <SlidersHorizontal className="h-4 w-4" strokeWidth={1.75} />
        Filters
        {hasActiveFilters && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[0.65rem] text-white">
            {categories.length + (priceRange[0] > 0 || priceRange[1] < 1000000 ? 1 : 0)}
          </span>
        )}
      </button>

      {/* Filter sidebar (desktop) */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-base font-semibold text-ink">Filters</h2>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 font-body text-xs font-semibold text-neutral-500 hover:text-ink"
            >
              <X className="h-3.5 w-3.5" strokeWidth={2} />
              Clear all
            </button>
          )}
        </div>
        {filterBody}
      </aside>

      {/* Filter drawer (mobile) */}
      <AnimatePresence>
        {filtersOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[70] bg-black/40 lg:hidden"
              onClick={() => setFiltersOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="fixed inset-x-0 bottom-0 z-[80] flex max-h-[85vh] flex-col rounded-t-3xl bg-white lg:hidden"
            >
              <div className="flex shrink-0 justify-center pt-3">
                <div className="h-1 w-12 rounded-full bg-neutral-300" />
              </div>

              <div className="flex shrink-0 items-center justify-between border-b border-neutral-200 px-6 py-4">
                <h2 className="font-heading text-base font-semibold text-ink">Filters</h2>
                <div className="flex items-center gap-4">
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-1 font-body text-xs font-semibold text-neutral-500 hover:text-ink"
                    >
                      <X className="h-3.5 w-3.5" strokeWidth={2} />
                      Clear all
                    </button>
                  )}
                  <button
                    aria-label="Close filters"
                    onClick={() => setFiltersOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-opacity hover:opacity-70"
                  >
                    <X className="h-4 w-4" strokeWidth={1.75} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-2">{filterBody}</div>

              <div className="shrink-0 border-t border-neutral-200 px-6 py-4">
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="w-full rounded-full bg-primary py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-[#8c002c]"
                >
                  Show {products.length} {products.length === 1 ? "result" : "results"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Results */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-4">
          <p className="font-body text-sm text-neutral-500">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
          <label className="flex items-center gap-3 font-body text-sm text-neutral-600">
            Sort by
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="rounded-xl border border-neutral-200 bg-surface pl-4 pr-10 py-2 font-body text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" strokeWidth={2} />
            </div>
          </label>
        </div>

        {products.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <CatalogProductCard key={`${product.name}-${product.category}`} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <p className="font-body text-sm text-neutral-500">
              No products match these filters.
            </p>
            <button
              onClick={clearFilters}
              className="rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-[#8c002c]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
