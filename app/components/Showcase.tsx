"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SHOWCASE, lkr } from "../lib/showcase";
import { SAMPLE_PRODUCT_SLUG } from "../lib/product";

export default function Showcase() {
  const [active, setActive] = useState(0);
  const category = SHOWCASE[active];

  return (
    <section id="showcase" className="bg-warm-grey py-24 sm:py-28">
      {/* Tabs */}
      <div className="px-6 md:px-10 lg:px-16">
        <div className="flex gap-7 overflow-x-auto pb-1 sm:gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
        <div className="mt-10 px-6 md:px-10 lg:px-16">
          <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
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
              return (
                <article key={product.name} className="group flex flex-col overflow-hidden rounded-2xl bg-white">
                  <div className="px-5 pt-5 pb-0">
                    <h3 className="font-heading text-sm font-semibold leading-snug text-ink line-clamp-2 min-h-[2.2rem]" title={product.name}>
                      {product.name}
                    </h3>
                  </div>

                  <div className="relative aspect-square overflow-hidden bg-white px-6 py-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 280px"
                      className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 p-5 pt-3">
                    <div>
                      <p className="font-body text-[0.7rem] font-semibold text-primary">
                        Save {lkr(savings)}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading text-lg font-bold text-ink">
                          {lkr(product.price)}
                        </span>
                        <span className="font-body text-xs text-neutral-400 line-through">
                          {lkr(mrp)}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/products/${SAMPLE_PRODUCT_SLUG}`}
                      className="shrink-0 rounded-xl bg-primary px-4 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-[#8c002c]"
                    >
                      Buy Now
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
