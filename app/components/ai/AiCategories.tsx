"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Cpu, Snowflake, Tv, Volume2, Wand2 } from "lucide-react";
import { AI_CATEGORIES, type AiCategoryIcon } from "../../lib/ai";

const ICONS: Record<AiCategoryIcon, typeof Tv> = {
  tv: Tv,
  audio: Volume2,
  appliances: Wand2,
  ac: Snowflake,
  computing: Cpu,
};

export default function AiCategories() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-warm-grey py-20 sm:py-24 md:py-28">
      <div className="section-px">
        <div className="text-center md:text-left">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Where the intelligence shows up
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-sm text-neutral-600 sm:text-base md:mx-0">
            The same thinking, built into every category we make.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-20 sm:gap-24">
          {AI_CATEGORIES.map((category, i) => {
            const Icon = ICONS[category.icon];
            const reverse = i % 2 === 1;

            return (
              <motion.div
                key={category.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                  reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:w-1/2">
                  <Image
                    src={category.image}
                    alt={category.heading}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="lg:w-1/2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-wide text-secondary">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                    {category.eyebrow}
                  </span>

                  <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                    {category.heading}
                  </h3>

                  <p className="mt-4 font-body text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {category.body}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {category.features.map((feature) => (
                      <div key={feature.label} className="rounded-2xl bg-neutral-50 p-4">
                        <p className="font-body text-xs font-semibold uppercase tracking-wide text-secondary">
                          {feature.label}
                        </p>
                        <p className="mt-1.5 font-body text-xs leading-relaxed text-neutral-600">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={category.ctaHref}
                    className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-ink transition-opacity hover:opacity-70"
                  >
                    {category.cta}
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
