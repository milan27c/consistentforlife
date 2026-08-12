"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Gauge, Leaf, TrendingDown } from "lucide-react";
import {
  ENERGY_PICKS,
  TYPICAL_HOUSEHOLD_USAGE,
  USAGE_DEFAULT,
  USAGE_MAX,
  USAGE_MIN,
  USAGE_STEP,
  computeForecast,
  lkr,
  type ForecastResult,
} from "../../lib/energyForecast";

type Status = "idle" | "processing" | "done";

const PROCESSING_STEPS = [
  "Reading your monthly usage",
  "Comparing against low energy models",
  "Building your forecast",
];

export default function EnergyForecastSection() {
  const reduce = useReducedMotion();
  const [usage, setUsage] = useState(USAGE_DEFAULT);
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<ForecastResult | null>(null);

  const handleForecast = () => {
    setStatus("processing");
    setResult(null);
    window.setTimeout(
      () => {
        setResult(computeForecast(usage));
        setStatus("done");
      },
      reduce ? 250 : 1900
    );
  };

  return (
    <section id="forecast" className="scroll-mt-20 py-20 sm:py-24">
      <div className="section-px">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:whitespace-nowrap">
            See what consistent efficiency actually saves you
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-neutral-600">
            Tell us your average monthly electricity usage and we will
            forecast what switching to our low energy lineup could mean for
            your bill.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-7xl overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Input side */}
            <div className="border-b border-neutral-200 p-8 sm:p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
              <p className="font-body text-sm font-bold uppercase tracking-[0.1em] text-neutral-500">
                Your household
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-ink sm:text-2xl">
                Average monthly electricity usage
              </h3>

              <div className="mt-8 flex items-baseline gap-2">
                <input
                  type="number"
                  min={USAGE_MIN}
                  max={USAGE_MAX}
                  step={USAGE_STEP}
                  value={usage}
                  onChange={(e) => {
                    const next = Number(e.target.value);
                    if (Number.isNaN(next)) return;
                    setUsage(Math.min(USAGE_MAX, Math.max(USAGE_MIN, next)));
                  }}
                  className="w-28 rounded-xl border border-neutral-200 bg-warm-grey px-3 py-2 font-heading text-2xl font-semibold text-ink outline-none focus:border-primary"
                  aria-label="Average monthly electricity usage in kilowatt hours"
                />
                <span className="font-body text-base font-semibold text-neutral-500">
                  kWh / month
                </span>
              </div>

              <input
                type="range"
                min={USAGE_MIN}
                max={USAGE_MAX}
                step={USAGE_STEP}
                value={usage}
                onChange={(e) => setUsage(Number(e.target.value))}
                className="mt-6 w-full accent-primary"
                aria-label="Adjust average monthly electricity usage"
              />
              <div className="mt-2 flex justify-between font-body text-xs text-neutral-400">
                <span>{USAGE_MIN} kWh</span>
                <span>{USAGE_MAX} kWh</span>
              </div>

              <p className="mt-6 font-body text-sm leading-relaxed text-neutral-500">
                A typical household uses about {TYPICAL_HOUSEHOLD_USAGE} kWh a
                month. Check a recent bill for your own number, or use the
                slider to estimate.
              </p>

              <button
                type="button"
                onClick={handleForecast}
                disabled={status === "processing"}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8c002c] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "processing" ? "Forecasting" : "Forecast my savings"}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            {/* Result side */}
            <div className="min-h-[420px] p-8 sm:p-10 lg:col-span-7">
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.div
                    key="idle"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-warm-grey px-8 py-12 text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-secondary">
                      <Gauge className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-neutral-500">
                      Set your usage and forecast your savings to see a
                      personalized bill comparison and matching low energy
                      upgrades.
                    </p>
                  </motion.div>
                )}

                {status === "processing" && (
                  <motion.div
                    key="processing"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-2xl bg-warm-grey px-8 py-12 text-center"
                  >
                    <motion.span
                      animate={reduce ? {} : { rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary"
                    >
                      <Gauge className="h-7 w-7" strokeWidth={1.75} />
                    </motion.span>

                    <p className="mt-6 font-body text-sm font-semibold text-ink">
                      Building your forecast
                    </p>

                    <div className="mt-5 h-1.5 w-56 overflow-hidden rounded-full bg-neutral-200">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: reduce ? 0.25 : 1.8, ease: "easeInOut" }}
                        className="h-full rounded-full bg-secondary"
                      />
                    </div>

                    <ul className="mt-6 space-y-1.5">
                      {PROCESSING_STEPS.map((step, i) => (
                        <motion.li
                          key={step}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: reduce ? 0 : 0.2 + i * 0.55, duration: 0.4 }}
                          className="font-body text-xs text-neutral-500"
                        >
                          {step}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {status === "done" && result && (
                  <motion.div
                    key="done"
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-warm-grey p-5">
                        <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-neutral-500">
                          Your bill today
                        </p>
                        <p className="mt-2 font-heading text-2xl font-semibold text-ink sm:text-3xl">
                          {lkr(result.currentBill)}
                        </p>
                        <p className="mt-1 font-body text-xs text-neutral-500">
                          At {result.usageKwh} kWh a month
                        </p>
                      </div>
                      <div className="rounded-2xl bg-primary/5 p-5">
                        <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-primary">
                          With low energy devices
                        </p>
                        <p className="mt-2 font-heading text-2xl font-semibold text-ink sm:text-3xl">
                          {lkr(result.projectedBill)}
                        </p>
                        <p className="mt-1 font-body text-xs text-neutral-500">
                          About {Math.round(result.projectedUsageKwh)} kWh a
                          month
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-white">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <TrendingDown className="h-4.5 w-4.5" strokeWidth={2} />
                      </span>
                      <p className="font-body text-sm">
                        Forecasted to save{" "}
                        <span className="font-semibold">{lkr(result.savingsLkr)}</span>{" "}
                        a month, about{" "}
                        <span className="font-semibold">
                          {Math.round(result.savingsPercent)}%
                        </span>{" "}
                        less than today.
                      </p>
                    </div>

                    <div className="mt-8">
                      <p className="flex items-center gap-2 font-body text-sm font-bold uppercase tracking-[0.08em] text-neutral-500">
                        <Leaf className="h-4 w-4 text-primary" strokeWidth={2} />
                        Low energy upgrades behind this forecast
                      </p>

                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {ENERGY_PICKS.map((pick) => (
                          <Link
                            key={pick.slug + pick.category}
                            href={`/products/${pick.slug}`}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-warm-grey transition-transform duration-300 hover:-translate-y-1"
                          >
                            <div className="relative aspect-[4/3] bg-white">
                              <Image
                                src={pick.image}
                                alt={pick.name}
                                fill
                                sizes="(max-width: 640px) 100vw, 220px"
                                className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-105"
                              />
                              <span className="absolute left-2 top-2 rounded-full bg-secondary px-2.5 py-1 font-body text-[0.65rem] font-bold text-white">
                                Uses {Math.round(pick.efficiencyGain * 100)}% less energy
                              </span>
                            </div>
                            <div className="flex flex-1 flex-col gap-1 p-4">
                              <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.06em] text-neutral-400">
                                {pick.categoryLabel}
                              </p>
                              <h4 className="font-heading text-sm font-semibold leading-snug text-ink line-clamp-2">
                                {pick.name}
                              </h4>
                              <p className="mt-auto pt-2 font-body text-sm font-bold text-ink">
                                {lkr(pick.price)}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <p className="mt-6 font-body text-xs leading-relaxed text-neutral-400">
                      Estimate based on typical household usage patterns and
                      average efficiency gains for each appliance category.
                      Your actual bill depends on your home, habits and
                      tariff.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
