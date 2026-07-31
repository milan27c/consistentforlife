"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SHOWCASE, lkr } from "../lib/showcase";
import { slugForProduct } from "../lib/product";

export default function Showcase() {
  const [active, setActive] = useState(0);
  const category = SHOWCASE[active];

  return (
    <section id="showcase" className="bg-warm-grey py-20 sm:py-24 md:py-28">
      {/* Tabs */}
      <div className="px-6 md:px-10 lg:px-16">
        <div className="flex flex-wrap justify-center gap-7 pb-1 sm:gap-10 md:justify-start md:flex-nowrap md:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SHOWCASE.map((c, i) => (
            <button
              key={c.tab}
              onClick={() => setActive(i)}
              className={`relative shrink-0 whitespace-nowrap pb-2 font-body text-lg font-medium transition-colors sm:text-xl ${
                i === active
                  ? "text-ink"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              {c.tab}
              {i === active && (
                <motion.span
                  layoutId="showcaseTabUnderline"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Per-tab content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Heading */}
        <div className="mt-10 px-6 text-center md:text-left md:px-10 lg:px-16">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {category.heading}
          </h2>
        </div>

        {/* Banner (within the page gutter, rounded) */}
        <div className="mt-10 px-6 md:px-10 lg:px-16">
          <div className="relative h-[55vh] overflow-hidden rounded-3xl sm:h-[65vh]">
            <Image
              src={category.banner}
              alt={category.tab}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25" />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-8 sm:p-12">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                {category.tab}
              </p>
              <p className="mt-3 max-w-xl font-heading text-2xl font-semibold text-white sm:text-4xl">
                {category.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="mt-12 px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {category.products.map((product) => {
              const mrp = Math.round(product.price * 1.3);
              const savings = mrp - product.price;

              const cardInner = (
                <>
                  <div className="px-4 pt-4 pb-0">
                    {product.comingSoon && (
                      <span className="mb-2 inline-block rounded-md bg-neutral-100 px-2.5 py-1 font-body text-[0.65rem] font-bold uppercase tracking-wide text-neutral-500">
                        Coming Soon
                      </span>
                    )}
                    <h3 className="font-heading text-sm font-semibold leading-snug text-ink line-clamp-2 min-h-[2.2rem]" title={product.name}>
                      {product.name}
                    </h3>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden bg-white px-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 280px"
                      className={`object-contain transition-transform duration-500 ease-out ${
                        product.comingSoon ? "" : "group-hover:scale-105"
                      }`}
                    />
                  </div>

                  <div className="mt-auto flex flex-col gap-3 px-4 py-3 @[220px]:flex-row @[220px]:items-center @[220px]:justify-between">
                    {product.comingSoon ? (
                      <p className="font-body text-xs font-semibold text-neutral-500">
                        Pricing announced at launch
                      </p>
                    ) : (
                      <div>
                        <p className="font-body text-[0.65rem] font-semibold text-primary">
                          Save {lkr(savings)}
                        </p>
                        <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                          <span className="font-heading text-base font-bold text-ink">
                            {lkr(product.price)}
                          </span>
                          <span className="font-body text-[0.7rem] text-neutral-400 line-through">
                            {lkr(mrp)}
                          </span>
                        </div>
                      </div>
                    )}
                    <div
                      className={`pointer-events-none self-start rounded-lg px-2.5 py-1.5 font-body text-xs font-semibold @[220px]:shrink-0 ${
                        product.comingSoon
                          ? "bg-neutral-100 text-neutral-500"
                          : "bg-primary text-white"
                      }`}
                    >
                      {product.comingSoon ? "Notify Me" : "Where to Buy"}
                    </div>
                  </div>
                </>
              );

              if (product.comingSoon) {
                return (
                  <div
                    key={product.name}
                    className="group @container flex flex-col overflow-hidden rounded-2xl bg-white"
                  >
                    {cardInner}
                  </div>
                );
              }

              return (
                <Link
                  key={product.name}
                  href={`/products/${slugForProduct(product.name)}`}
                  className="group @container flex flex-col overflow-hidden rounded-2xl bg-white"
                >
                  {cardInner}
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
