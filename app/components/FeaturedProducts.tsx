"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { SAMPLE_PRODUCT_SLUG } from "../lib/product";

type Tag = { label: string; solid?: boolean };

type Product = {
  name: string;
  image: string;
  price: number; // LKR
  mrp: number; // LKR
  tags: Tag[];
};

const PRODUCTS: Product[] = [
  {
    name: "5 Star (~1.5) Split AC, AI Convertible 6-in-1, AI Dual Inverter, Diet Mode+, Viraat Mode, 100% Copper Tubes, 5.1 kW, 2026 Model",
    image: "/images/featured-products/1.png",
    price: 235000,
    mrp: 285000,
    tags: [{ label: "2026 Model" }, { label: "Best Seller" }],
  },
  {
    name: "8Kg Top Load Washing Machine, Hard Water Wash, Middle Black, 5 Star",
    image: "/images/featured-products/2.png",
    price: 139000,
    mrp: 165000,
    tags: [{ label: "Cashback", solid: true }, { label: "Recommend" }],
  },
  {
    name: "108 cm (43) 4K UHD AI UA8200 Smart TV with α7 AI Processor Gen8, Filmmaker Mode with Dolby Atmos",
    image: "/images/featured-products/3.png",
    price: 189000,
    mrp: 225000,
    tags: [{ label: "2026 Model" }, { label: "Best Seller" }],
  },
  {
    name: "655L Side-by-Side Refrigerator, Smart Inverter Compressor, Multi Air Flow, Smart Diagnosis™, Dazzle Steel, 3 Star",
    image: "/images/featured-products/4.png",
    price: 595000,
    mrp: 695000,
    tags: [{ label: "Cashback", solid: true }, { label: "Best Seller" }],
  },
  {
    name: "108 cm (43) NANO 4K UHD AI TV NU870 2026",
    image: "/images/featured-products/5.png",
    price: 159000,
    mrp: 195000,
    tags: [{ label: "2026 Model" }, { label: "Best Seller" }],
  },
  {
    name: "650L Side-By-Side Refrigerator, Objet Collection, Wi-Fi Convertible, DoorCooling+™, Emerald Tango, 3 Star",
    image: "/images/featured-products/6.png",
    price: 625000,
    mrp: 725000,
    tags: [{ label: "Cashback", solid: true }, { label: "Recommend" }],
  },
];

const lkr = (n: number) => `LKR ${n.toLocaleString("en-LK")}`;

export default function FeaturedProducts() {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-card]");
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : rail.clientWidth * 0.8;
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="products" className="bg-warm-grey py-24 sm:py-28">
      {/* Heading + navigation (respects the page gutter on both sides) */}
      <div className="mb-10 flex items-end justify-between gap-4 px-6 md:px-10 lg:px-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Featured Products
        </h2>
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <button
            aria-label="Previous products"
            onClick={() => scrollByDir(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-surface"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <button
            aria-label="Next products"
            onClick={() => scrollByDir(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-surface"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Product rail: vertical (mobile) -> horizontal scroll (desktop), right edge aligned with the arrow buttons above */}
      <div
        ref={railRef}
        className="flex flex-col gap-6 pl-6 pr-6 md:flex-row md:items-start md:gap-6 md:overflow-x-auto md:pb-6 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 md:snap-x md:scroll-pl-10 lg:scroll-pl-16 md:scroll-pr-10 lg:scroll-pr-16 md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
      >
        {PRODUCTS.map((product, i) => {
          const hiddenOnMobile = i >= 3 && !expanded;
          const savings = product.mrp - product.price;
          return (
            <motion.article
              key={product.name}
              data-card
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : (i % 3) * 0.08 }}
              className={`${
                hiddenOnMobile ? "hidden md:flex" : "flex"
              } group w-full flex-col overflow-hidden rounded-2xl bg-white md:w-[calc((100%-4.5rem)/3.5)] md:flex-[0_0_auto] md:snap-start`}
            >
              <div className="flex flex-col gap-3 p-5 pb-0">
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={
                        tag.solid
                          ? "rounded-md bg-secondary px-2.5 py-1 font-body text-[0.65rem] font-bold uppercase tracking-wide text-white"
                          : "rounded-md border border-primary/50 px-2.5 py-1 font-body text-[0.65rem] font-bold uppercase tracking-wide text-primary"
                      }
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <h3
                  className="min-h-[2.6rem] font-heading text-base font-semibold leading-snug text-ink line-clamp-2"
                  title={product.name}
                >
                  {product.name}
                </h3>
              </div>

              <div className="relative aspect-square overflow-hidden bg-white px-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 p-5 pt-0">
                <div>
                  <p className="font-body text-xs font-semibold text-primary">
                    Save {lkr(savings)}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-xl font-bold text-ink">
                      {lkr(product.price)}
                    </span>
                    <span className="font-body text-sm text-neutral-400 line-through">
                      {lkr(product.mrp)}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/products/${SAMPLE_PRODUCT_SLUG}`}
                  className="shrink-0 rounded-xl bg-primary px-5 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-[#8c002c]"
                >
                  Buy Now
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Mobile-only "show more" toggle */}
      {!expanded && (
        <div className="mt-8 flex justify-center px-6 md:hidden">
          <button
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-surface px-7 py-3.5 font-body text-sm font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-neutral-50"
          >
            Show more
            <ChevronDown className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      )}
    </section>
  );
}
