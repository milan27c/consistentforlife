"use client";

import Image from "next/image";
import { motion } from "motion/react";

const EYEBROW = "AI Remote";
const HEADING = "Easily navigate and point like an air mouse to enjoy AI Hub";
const BODY =
  "Control your TV easily with the AI Remote. With a motion sensor and scroll wheel, click, drag, and drop to use it like an air mouse or simply speak for voice commands.";

export default function RemoteStorySection() {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-4xl text-center"
      >
        <p className="font-body text-sm text-ink sm:text-base">{EYEBROW}</p>
        <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
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
        className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl sm:mt-12"
      >
        <Image
          src="/images/product 1/remote.png"
          alt="Remote pointing at a screen surrounded by smart feature icons"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
