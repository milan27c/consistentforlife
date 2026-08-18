"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Microwave,
  Refrigerator,
  Tv,
  UtensilsCrossed,
  WashingMachine,
  Wind,
  Wrench,
} from "lucide-react";
import {
  AGE_OPTIONS,
  PRODUCT_TYPES,
  computeEstimate,
  lkr,
  type AgeKey,
  type EstimatorResult,
  type ProductTypeKey,
} from "../../lib/tradeInEstimator";

type Status = "idle" | "processing" | "done";

const PRODUCT_ICONS: Record<ProductTypeKey, typeof Tv> = {
  tv: Tv,
  ac: Wind,
  refrigerator: Refrigerator,
  washer: WashingMachine,
  microwave: Microwave,
  dishwasher: UtensilsCrossed,
};

const PROCESSING_STEPS = [
  "Checking typical lifespan",
  "Comparing repair and replacement costs",
];

const VERDICT_STYLES: Record<EstimatorResult["verdict"], { badge: string; banner: string }> = {
  repair: { badge: "bg-primary/10 text-primary", banner: "bg-primary/5" },
  borderline: { badge: "bg-neutral-200 text-ink", banner: "bg-warm-grey" },
  replace: { badge: "bg-ink text-white", banner: "bg-ink text-white" },
};

export default function TradeInEstimatorSection() {
  const reduce = useReducedMotion();
  const [productKey, setProductKey] = useState<ProductTypeKey>("tv");
  const [ageKey, setAgeKey] = useState<AgeKey>("old");
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<EstimatorResult | null>(null);

  const handleEstimate = () => {
    setStatus("processing");
    setResult(null);
    window.setTimeout(
      () => {
        setResult(computeEstimate(productKey, ageKey));
        setStatus("done");
      },
      reduce ? 250 : 1400
    );
  };

  const verdictStyle = result ? VERDICT_STYLES[result.verdict] : null;

  return (
    <section id="trade-in" className="scroll-mt-20 py-16 sm:py-20">
      <div className="section-px">
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Repair It Or Replace It?
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-neutral-600">
            Tell us what you have and roughly how old it is, and we will give
            you an honest, mocked read on whether a repair still makes sense
            or it is time for something new.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-7xl overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Input side */}
            <div className="border-b border-neutral-200 p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
              <p className="font-body text-sm font-bold uppercase tracking-[0.1em] text-neutral-500">
                Your product
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-ink sm:text-2xl">
                What are you thinking about?
              </h3>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {PRODUCT_TYPES.map((type) => {
                  const Icon = PRODUCT_ICONS[type.key];
                  const active = productKey === type.key;
                  return (
                    <button
                      key={type.key}
                      type="button"
                      onClick={() => setProductKey(type.key)}
                      className={`flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-center font-body text-xs font-semibold transition-colors duration-200 ${
                        active
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-neutral-200 bg-warm-grey text-neutral-600 hover:border-neutral-300"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                      {type.label}
                    </button>
                  );
                })}
              </div>

              <p className="mt-6 font-body text-sm font-bold uppercase tracking-[0.1em] text-neutral-500">
                Its age
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-ink sm:text-2xl">
                Roughly how old is it?
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {AGE_OPTIONS.map((age) => {
                  const active = ageKey === age.key;
                  return (
                    <button
                      key={age.key}
                      type="button"
                      onClick={() => setAgeKey(age.key)}
                      className={`rounded-xl border px-3 py-2.5 text-center font-body text-xs font-semibold transition-colors duration-200 ${
                        active
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-neutral-200 bg-warm-grey text-neutral-600 hover:border-neutral-300"
                      }`}
                    >
                      {age.label}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleEstimate}
                disabled={status === "processing"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8c002c] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "processing" ? "Estimating" : "Get my estimate"}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            {/* Result side */}
            <div className="min-h-[340px] p-6 sm:p-8 lg:col-span-7">
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.div
                    key="idle"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-warm-grey px-6 py-10 text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-secondary">
                      <Wrench className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-neutral-500">
                      Choose a product type and its age, then get your
                      estimate to see whether repairing or replacing makes
                      more sense.
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
                    className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl bg-warm-grey px-6 py-10 text-center"
                  >
                    <motion.span
                      animate={reduce ? {} : { rotate: [0, 15, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary"
                    >
                      <Wrench className="h-7 w-7" strokeWidth={1.75} />
                    </motion.span>

                    <p className="mt-5 font-body text-sm font-semibold text-ink">
                      Building your estimate
                    </p>

                    <div className="mt-4 h-1.5 w-56 overflow-hidden rounded-full bg-neutral-200">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: reduce ? 0.25 : 1.3, ease: "easeInOut" }}
                        className="h-full rounded-full bg-secondary"
                      />
                    </div>

                    <ul className="mt-5 space-y-1.5">
                      {PROCESSING_STEPS.map((step, i) => (
                        <motion.li
                          key={step}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: reduce ? 0 : 0.2 + i * 0.4, duration: 0.4 }}
                          className="font-body text-xs text-neutral-500"
                        >
                          {step}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {status === "done" && result && verdictStyle && (
                  <motion.div
                    key="done"
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-body text-xs font-bold uppercase tracking-[0.06em] ${verdictStyle.badge}`}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2} />
                      {result.badge}
                    </span>

                    <h4 className="mt-4 font-heading text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                      {result.headline}
                    </h4>
                    <p className="mt-3 font-body text-sm leading-relaxed text-neutral-600">
                      {result.blurb}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-warm-grey p-4">
                        <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-neutral-500">
                          Estimated repair
                        </p>
                        <p className="mt-1.5 font-heading text-lg font-semibold text-ink sm:text-xl">
                          {lkr(result.repairCostLow)} to {lkr(result.repairCostHigh)}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-primary/5 p-4">
                        <p className="font-body text-xs font-bold uppercase tracking-[0.08em] text-primary">
                          Typical replacement
                        </p>
                        <p className="mt-1.5 font-heading text-lg font-semibold text-ink sm:text-xl">
                          {lkr(result.typicalReplacementCost)}
                        </p>
                      </div>
                    </div>

                    {result.showEwasteCta ? (
                      <a
                        href="#ewaste-pickup"
                        className={`mt-5 flex items-center justify-between gap-3 rounded-2xl px-5 py-4 transition-opacity duration-300 hover:opacity-90 ${verdictStyle.banner}`}
                      >
                        <span className="font-body text-sm font-semibold">
                          Schedule a free eWaste pickup
                        </span>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                            result.verdict === "replace" ? "bg-white/10" : "bg-white"
                          }`}
                        >
                          <ArrowRight className="h-4.5 w-4.5" strokeWidth={2} />
                        </span>
                      </a>
                    ) : (
                      <p className="mt-5 font-body text-xs leading-relaxed text-neutral-400">
                        Estimate based on typical repair costs and lifespans
                        for each product type. Your own quote depends on the
                        actual fault and model.
                      </p>
                    )}
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
