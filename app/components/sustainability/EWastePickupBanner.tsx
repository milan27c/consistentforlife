"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function EWastePickupBanner() {
  const reduce = useReducedMotion();

  return (
    <section className="section-px mb-16 w-full sm:mb-24">
      <div className="relative aspect-[3/5] overflow-hidden rounded-3xl sm:aspect-[4/3] lg:aspect-[3/1]">
        <Image
          src="/images/sustainability/wastemobile.png"
          alt="Old devices collected in a recycling bin, ready for pickup"
          fill
          sizes="100vw"
          className="object-cover sm:hidden"
        />
        <Image
          src="/images/sustainability/waste.png"
          alt="Old devices collected in a recycling bin, ready for pickup"
          fill
          sizes="100vw"
          className="hidden object-cover sm:block"
        />

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-8 text-center sm:hidden"
        >
          <h2 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-ink">
            Schedule eWaste Pickup
          </h2>
          <a
            href="#"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8c002c]"
          >
            Schedule Pickup
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, x: -16 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 hidden w-full items-center px-8 sm:flex lg:px-16"
        >
          <div className="max-w-[46%] text-left lg:max-w-xl">
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
              Schedule eWaste Pickup
            </h2>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8c002c]"
            >
              Schedule Pickup
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
