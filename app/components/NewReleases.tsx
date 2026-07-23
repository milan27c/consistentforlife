"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { NEW_RELEASES } from "../lib/newReleases";

export default function NewReleases() {
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
    <section className="bg-warm-grey py-24 sm:py-28">
      {/* Heading + navigation */}
      <div className="mb-10 flex items-end justify-between gap-4 px-6 md:px-10 lg:px-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Newly Released
        </h2>
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <button
            aria-label="Previous releases"
            onClick={() => scrollByDir(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-surface"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <button
            aria-label="Next releases"
            onClick={() => scrollByDir(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-surface"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Horizontal rail; scroll is bounded by the same gutter the heading/arrows use */}
      <div
        ref={railRef}
        className="flex gap-6 overflow-x-auto pb-2 pl-6 pr-6 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 snap-x scroll-pl-6 scroll-pr-6 md:scroll-pl-10 md:scroll-pr-10 lg:scroll-pl-16 lg:scroll-pr-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {NEW_RELEASES.map((item, i) => (
          <motion.article
            key={item.image}
            data-card
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.08 }}
            className="group relative aspect-[2/1] w-[110vw] shrink-0 snap-start overflow-hidden rounded-3xl bg-neutral-800 sm:w-[109vw] md:w-[72%] lg:w-[66%]"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 110vw, 66vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
