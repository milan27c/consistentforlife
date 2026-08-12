"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { AI_PILLARS } from "../../lib/ai";
import { lkr } from "../../lib/showcase";
import { slugForProduct } from "../../lib/product";

export default function AiPillars() {
  const [active, setActive] = useState(0);
  const pillar = AI_PILLARS[active];

  return (
    <section id="pillars" className="scroll-mt-20 bg-warm-grey pb-20 pt-4 sm:pb-24 sm:pt-6 md:pb-28">
      {/* Tabs */}
      <div className="section-px">
        <div className="flex flex-wrap justify-center gap-7 pb-1 sm:gap-10 md:justify-start md:flex-nowrap md:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {AI_PILLARS.map((p, i) => (
            <button
              key={p.tab}
              onClick={() => setActive(i)}
              className={`relative shrink-0 whitespace-nowrap pb-2 font-body text-lg font-medium transition-colors sm:text-xl ${
                i === active ? "text-ink" : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              {p.tab}
              {i === active && (
                <motion.span
                  layoutId="aiPillarTabUnderline"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-secondary"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Per tab content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="section-px mt-10 text-center md:text-left">
          <h3 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {pillar.heading}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl font-body text-sm leading-relaxed text-neutral-600 sm:text-base md:mx-0">
            {pillar.body}
          </p>
        </div>

        {/* Banner */}
        <div className="section-px mt-8">
          <div className="relative h-[45vh] overflow-hidden rounded-3xl sm:h-[55vh]">
            <Image
              src={pillar.banner}
              alt={pillar.tab}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25" />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-8 sm:p-12">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                {pillar.tab}
              </p>
              <p className="mt-3 max-w-xl font-heading text-2xl font-semibold text-white sm:text-4xl">
                {pillar.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="section-px mt-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {pillar.products.slice(0, 4).map((product) => {
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
                    <h4
                      className="font-heading text-sm font-semibold leading-snug text-ink line-clamp-2 min-h-[2.2rem]"
                      title={product.name}
                    >
                      {product.name}
                    </h4>
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
