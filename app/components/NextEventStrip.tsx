"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { formatFullDate, formatWeekday, getNextDonation, todayISO } from "../lib/donationPlan";

export default function NextEventStrip() {
  const reduce = useReducedMotion();
  const next = getNextDonation(todayISO());

  return (
    <div className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-2">
      <Image
        src="/gradients/LG_Electronics_Gradient_02_RGB.jpg"
        alt=""
        fill
        priority={false}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/15" />

      <span className="relative flex h-2 w-2 shrink-0">
        <motion.span
          className="absolute inset-0 rounded-full bg-white"
          animate={reduce ? undefined : { opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>

      <p className="relative whitespace-nowrap font-body text-xs font-semibold text-white">
        Next event: {formatWeekday(next.donationDate)}, {formatFullDate(next.donationDate)} in{" "}
        {next.district}
      </p>
    </div>
  );
}
