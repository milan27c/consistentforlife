"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { NEWS } from "../lib/news";

export default function Newsletter() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-warm-grey px-6 py-20 sm:py-24 md:py-28 md:px-10 lg:px-16">
      <h2 className="mb-10 text-center md:text-left font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        Latest News
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:h-[560px] lg:grid-cols-4 lg:grid-rows-2">
        {NEWS.map((item, i) => (
          <motion.article
            key={item.heading}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.08 }}
            className={`group relative overflow-hidden rounded-3xl bg-neutral-800 ${
              item.large
                ? "aspect-[4/3] sm:col-span-2 sm:aspect-[16/9] lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:h-full"
                : "aspect-[4/3] lg:aspect-auto lg:h-full"
            }`}
          >
            <Image
              src={item.image}
              alt={item.heading}
              fill
              sizes={item.large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3
                className={`font-heading font-semibold leading-snug text-white ${
                  item.large ? "text-xl sm:text-2xl lg:text-3xl" : "text-base sm:text-lg"
                }`}
              >
                {item.heading}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
