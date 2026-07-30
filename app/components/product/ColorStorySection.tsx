"use client";

import Image from "next/image";
import { motion } from "motion/react";

const HEADING = "How does Quantum Color bring lifelike color to every scene?";
const BODY =
  "Quantum Color is certified for 100% color volume, delivering true color and detail in every scene. Built on a next generation wide color gamut, it renders vibrant, dynamic color in motion, enhancing your TV's color reproduction so every mood, from cinema to sports, comes through exactly as it should.";

export default function ColorStorySection() {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-4xl text-center"
      >
        <h2 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {HEADING}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl font-body text-sm leading-relaxed text-neutral-600 sm:text-base">
          {BODY}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mt-10 aspect-[2/1] w-full overflow-hidden rounded-3xl sm:mt-12"
      >
        <Image
          src="/images/product 1/color.png"
          alt="Vivid splashes of color in motion filling the screen"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
