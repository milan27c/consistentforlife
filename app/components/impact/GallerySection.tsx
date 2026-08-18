"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { formatFullDate, getPlanWithStatus, todayISO } from "../../lib/donationPlan";

const GALLERY_IMAGES = [
  "/images/csrgallery/9.png",
  "/images/csrgallery/8.png",
  "/images/csrgallery/7.png",
  "/images/csrgallery/6.png",
  "/images/csrgallery/5.png",
  "/images/csrgallery/4.png",
  "/images/csrgallery/3.png",
  "/images/csrgallery/2.png",
  "/images/csrgallery/1.png",
];

export default function GallerySection() {
  const reduce = useReducedMotion();
  const plan = getPlanWithStatus(todayISO());
  const completed = plan
    .filter((week) => week.status === "completed")
    .slice(-9)
    .reverse();

  if (completed.length === 0) return null;

  return (
    <section className="section-px pb-20 pt-14 sm:pb-24 sm:pt-16">
      <div className="mb-12 text-center">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Inside the districts we&rsquo;ve reached.
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-neutral-600">
          A look at the clinics receiving their refrigerators, one delivery at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {completed.map((week, i) => (
          <motion.div
            key={week.week}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : (i % 3) * 0.1 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100"
          >
            <Image
              src={GALLERY_IMAGES[i % GALLERY_IMAGES.length]}
              alt={`Refrigerator delivery in ${week.district}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-heading text-xl font-semibold leading-snug text-white drop-shadow-sm sm:text-2xl">
                {week.district}
              </p>
              <p className="mt-1 font-body text-sm text-white/80 drop-shadow-sm">
                Delivered {formatFullDate(week.donationDate)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
