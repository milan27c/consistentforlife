"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { StoryBlock } from "../../lib/product";

export default function StorySection({ block }: { block: StoryBlock }) {
  const dark = block.tone === "dark";

  return (
    <div
      className={
        dark
          ? /* Breaks out of the page's horizontal padding so the black runs edge to edge */
            "-mx-6 flex flex-col bg-black md:-mx-10 lg:-mx-16"
          : "flex flex-col"
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-auto w-full max-w-4xl text-center ${
          dark ? "px-6 pb-12 pt-20 sm:pb-16 sm:pt-28 md:px-10" : ""
        }`}
      >
        {block.eyebrow && (
          <p
            className={`font-body text-sm sm:text-base ${dark ? "text-white/70" : "text-ink"}`}
          >
            {block.eyebrow}
          </p>
        )}
        <h2
          className={`font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
            block.eyebrow ? "mt-3" : ""
          } ${dark ? "text-white" : "text-ink"}`}
        >
          {block.heading}
        </h2>
        <p
          className={`mx-auto mt-5 max-w-3xl font-body text-sm leading-relaxed sm:text-base ${
            dark ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {block.body}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`relative aspect-[2/1] w-full ${
          dark ? "" : "mt-10 overflow-hidden rounded-3xl sm:mt-12"
        }`}
      >
        <Image
          src={block.image}
          alt={block.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
