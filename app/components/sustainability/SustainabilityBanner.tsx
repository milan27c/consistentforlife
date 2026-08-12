"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function SustainabilityBanner() {
  const reduce = useReducedMotion();

  return (
    <section className="w-full">
      <div className="relative aspect-[3/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[3/1]">
        <Image
          src="/images/sustainability/bannerm.jpg"
          alt="A low energy appliance styled beside a lake and wind turbine"
          fill
          priority
          sizes="100vw"
          className="object-cover sm:hidden"
        />
        <Image
          src="/images/sustainability/banner.jpg"
          alt="A low energy appliance styled beside a lake and wind turbine"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover sm:block"
        />

        {/* Mobile: fade to the page background so text stays legible, centered toward the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-warm-grey from-35% via-warm-grey/95 via-65% to-transparent sm:hidden" />
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-8 text-center sm:hidden"
        >
          <h1 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-ink">
            Efficiency you can live with, consistently.
          </h1>
          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-neutral-600">
            Every product we build is measured against the same standard,
            using less energy without asking you to live with less. Here is
            what that looks like in your own home.
          </p>
        </motion.div>

        {/* Desktop: fade to the page background on the left so text stays legible, left aligned and vertically centered */}
        <div className="absolute inset-y-0 left-0 hidden w-3/5 bg-gradient-to-r from-warm-grey from-40% via-warm-grey/90 to-transparent sm:block" />
        <motion.div
          initial={reduce ? undefined : { opacity: 0, x: -16 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="section-px absolute inset-y-0 left-0 hidden w-full items-center sm:flex"
        >
          <div className="max-w-[46%] text-left lg:max-w-xl">
            <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
              Efficiency you can live with, consistently.
            </h1>
            <p className="mt-5 font-body text-sm leading-relaxed text-neutral-600 lg:max-w-md lg:text-lg">
              Every product we build is measured against the same standard,
              using less energy without asking you to live with less. Here is
              what that looks like in your own home.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
