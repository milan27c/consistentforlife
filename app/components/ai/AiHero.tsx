"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function AiHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <Image
        src="/images/lgai/lgai.jpg"
        alt="A family going about their everyday routines together in a connected home"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover md:block"
      />
      <Image
        src="/images/lgai/lgaimobile.jpg"
        alt="A family going about their everyday routines together in a connected home"
        fill
        priority
        sizes="100vw"
        className="object-cover md:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center sm:pb-20">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl font-heading text-[1.8rem] font-normal leading-tight text-white sm:text-[3rem] lg:text-[3.6rem]"
        >
          <span className="bg-gradient-to-r from-[#FD312E] via-[#F0328C] to-[#9747FF] bg-clip-text text-transparent">
            Affectionate Intelligence
          </span>
          <br />
          Consistent For Life
        </motion.h1>

        <motion.a
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          href="#story"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#8c002c]"
        >
          Discover LG AI
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </motion.a>
      </div>
    </section>
  );
}
