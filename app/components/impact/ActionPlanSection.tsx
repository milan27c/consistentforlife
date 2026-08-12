"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ClipboardCheck, HeartHandshake, Megaphone } from "lucide-react";
import {
  daysBetween,
  describeDaysUntil,
  formatMonthDay,
  formatWeekday,
  getNextDonation,
  getPlanWithStatus,
  todayISO,
} from "../../lib/donationPlan";
import DistrictMap from "./DistrictMap";

const MECHANISM = [
  {
    step: "01",
    icon: Megaphone,
    title: "Nominate",
    body: "We invite the public to nominate maternal care clinics in need, gathering names through our community channels.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Select",
    body: "We review every nomination and choose one clinic from each of the 25 districts, the ones that need the support most.",
  },
  {
    step: "03",
    icon: HeartHandshake,
    title: "Donate",
    body: "We deliver a refrigerator to the selected clinic, so essential medicines stay stored safely and mothers get better care.",
  },
];

export default function ActionPlanSection() {
  const reduce = useReducedMotion();
  const today = todayISO();
  const plan = getPlanWithStatus(today);
  const next = getNextDonation(today);
  const completedCount = plan.filter((week) => week.status === "completed").length;
  const days = daysBetween(today, next.donationDate);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gradients/LG_Electronics_Gradient_01_RGB.jpg"
          alt=""
          fill
          priority={false}
          className="object-cover opacity-80"
        />
      </div>

      <div className="section-px grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left: how the program works */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <p className="font-body text-sm font-bold uppercase tracking-[0.14em] text-primary">
            Our mechanism
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            A simple process. A lasting impact.
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-neutral-600">
            Every refrigerator we deliver follows the same standing process,
            so the promise behind it stays consistent from the first clinic
            to the last.
          </p>

          <ul className="mt-10 space-y-6">
            {MECHANISM.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-body text-[10px] font-bold text-white">
                    {item.step.slice(1)}
                  </span>
                </span>
                <div>
                  <p className="font-body text-base font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-neutral-600">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-8">
            <div>
              <p className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
                {plan.length}
              </p>
              <p className="mt-1 font-body text-xs text-neutral-500">Districts in plan</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
                {completedCount}
              </p>
              <p className="mt-1 font-body text-xs text-neutral-500">Refrigerators delivered</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-semibold text-ink sm:text-3xl">1</p>
              <p className="mt-1 font-body text-xs text-neutral-500">Delivery every week</p>
            </div>
          </div>
        </motion.div>

        {/* Right: next donation + weekly schedule */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: reduce ? 0 : 0.1 }}
          className="lg:col-span-7"
        >
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary px-6 py-5 text-white sm:px-8 sm:py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                  Next donation
                </p>
                <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                    {next.district}
                  </h3>
                  <p className="font-body text-sm text-white/80">
                    {formatWeekday(next.donationDate)}, {formatMonthDay(next.donationDate)}
                  </p>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-white px-4 py-2 font-body text-sm font-bold text-primary">
                {describeDaysUntil(days)}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <DistrictMap plan={plan} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
