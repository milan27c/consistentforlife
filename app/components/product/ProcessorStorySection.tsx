"use client";

import Image from "next/image";
import { motion } from "motion/react";

const HEADING = "Upgraded for smarter, more powerful processing";
const BODY =
  "Driven by enhanced GPU and CPU power, the alpha 7 AI Processor performs nano scale image optimization to deliver 4K clarity with improved contrast and three dimensional depth.";

export default function ProcessorStorySection() {
  return (
    /* Breaks out of the page's horizontal padding so the black runs edge to edge */
    <div className="-mx-6 flex flex-col bg-black md:-mx-10 lg:-mx-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-4xl px-6 pb-12 pt-20 text-center sm:pb-16 sm:pt-28 md:px-10"
      >
        <h2 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {HEADING}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl font-body text-sm leading-relaxed text-white/70 sm:text-base">
          {BODY}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative aspect-[2/1] w-full"
      >
        <Image
          src="/images/product 1/procesor.jpg"
          alt="Close up of a glowing processor chip on a circuit board"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
