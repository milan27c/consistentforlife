"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { formatFullDate, getPlanWithStatus, todayISO } from "../../lib/donationPlan";

const LATEST_IMAGES = [
  "/images/csrgallery/9.png",
  "/images/csrgallery/8.png",
  "/images/csrgallery/7.png",
];

export default function LatestDeliveriesSection() {
  const reduce = useReducedMotion();
  const plan = getPlanWithStatus(todayISO());
  const latest = plan
    .filter((week) => week.status === "completed")
    .slice(-3)
    .reverse();

  if (latest.length === 0) return null;

  return (
    <section id="deliveries" className="section-px py-16 sm:py-20">
      <div className="mb-10 text-center">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
          Delivered, right on schedule.
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-neutral-600">
          The three most recent refrigerators to reach a clinic, each one part
          of the same standing promise.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {latest.map((week, i) => (
          <motion.div
            key={week.week}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.1 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100"
          >
            <Image
              src={LATEST_IMAGES[i % LATEST_IMAGES.length]}
              alt={`Refrigerator delivery in ${week.district}`}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
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
