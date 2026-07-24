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
    <section className="bg-warm-grey py-16 sm:py-24 md:py-28">
      {/* Heading + navigation */}
      <div className="mb-10 flex flex-col items-center gap-6 px-6 md:flex-row md:items-end md:justify-between md:px-10 lg:px-16">
        <h2 className="text-center font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-left lg:text-5xl">
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

      {/* Vertical stack on mobile, horizontal scroll on desktop */}
      <div
        ref={railRef}
        className="flex flex-col gap-6 px-6 md:gap-6 md:overflow-x-auto md:pb-2 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16 md:flex-row md:snap-x md:scroll-pl-10 md:scroll-pr-10 lg:scroll-pl-16 lg:scroll-pr-16 md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
      >
        {NEW_RELEASES.map((item, i) => (
          <motion.article
            key={item.image}
            data-card
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.08 }}
            className="group relative aspect-[2/1] w-full overflow-hidden rounded-3xl bg-neutral-800 md:w-[72%] md:shrink-0 md:snap-start lg:w-[66%]"
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
