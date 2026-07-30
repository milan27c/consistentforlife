"use client";

import Image from "next/image";
import { motion } from "motion/react";

const HEADING = "Full surround sound system from TV and soundbar in sync";
const BODY =
  "By synchronizing the TV and soundbar as one, the system expands depth and directionality for a fuller surround experience.";

export default function SoundStorySection() {
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
          src="/images/product 1/sound.png"
          alt="Soundbar sitting beneath a screen with sound spreading through the room"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
