"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function AiStory() {
  const reduce = useReducedMotion();

  return (
    <section id="story" className="scroll-mt-20 relative overflow-hidden bg-warm-grey pt-24 pb-8 sm:pt-32 sm:pb-10">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-px relative mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <Image
          src="/images/lgai/lgai.svg"
          alt="LG AI"
          width={144}
          height={36}
          className="h-14 w-auto sm:h-16"
        />

        <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          <span className="bg-gradient-to-r from-[#FD312E] via-[#F0328C] to-[#9747FF] bg-clip-text text-transparent">
            Affectionate Intelligence
          </span>{" "}
          <span className="text-ink">for YOU</span>
        </h2>

        <div className="mt-10 space-y-6 font-body text-base font-medium leading-relaxed text-neutral-700 sm:text-lg">
          <p>
            We&apos;ve been asking ourselves: what should AI exist for? After much
            reflection, we found our answer.
          </p>
          <p>
            For us, AI goes beyond Artificial Intelligence. It is Affectionate
            Intelligence, built on a human centered philosophy to learn who you
            are, adapt to your lifestyle, and care for you in everyday life,
            in homes across Sri Lanka and beyond.
          </p>
          <p className="pt-4">
            As AI becomes a part of our daily lives, it should help create the
            better life we all deserve.
          </p>
          <p>
            That&apos;s why LG AI starts with YOU, affectionately. Through sensing,
            understanding, and caring for every moment of your life.
          </p>
        </div>

        <p className="mt-12 font-body text-lg text-neutral-500">
          Discover how Life&apos;s Good with LG AI
        </p>

        <button
          onClick={() =>
            document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Scroll to explore"
          className="group mt-8 flex h-11 w-7 items-center justify-center rounded-full border border-ink/30 transition-colors hover:border-ink/60"
        >
          <motion.span
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-ink/60"
          />
        </button>
      </motion.div>
    </section>
  );
}
