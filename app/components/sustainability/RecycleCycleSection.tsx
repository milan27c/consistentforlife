"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Layers, PackageCheck, Recycle } from "lucide-react";

const STEP_GAP = 0.6;
const CYCLE_DURATION = STEP_GAP * 6;

// Triangle vertices on a 0-100 viewBox: top (Collect), bottom-right (Recover),
// bottom-left (Recycle) — read clockwise.
const STEPS = [
  {
    number: "01",
    title: "Collect",
    description: "We collect eligible electronic devices.",
    icon: PackageCheck,
    offset: 0 * STEP_GAP,
    x: 50,
    y: 16,
  },
  {
    number: "02",
    title: "Recover",
    description: "Useful materials are separated and recovered.",
    icon: Layers,
    offset: 2 * STEP_GAP,
    x: 79.4,
    y: 67,
  },
  {
    number: "03",
    title: "Recycle",
    description: "Materials are returned to the circular economy.",
    icon: Recycle,
    offset: 4 * STEP_GAP,
    x: 20.6,
    y: 67,
  },
] as const;

// Curved arrows following the same clockwise triangle: Collect -> Recover -> Recycle -> Collect.
const ARROWS = [
  { d: "M63,21 Q84,30 74,50", offset: 1 * STEP_GAP },
  { d: "M67,60 Q50,68 33,60", offset: 3 * STEP_GAP },
  { d: "M26,50 Q16,30 37,21", offset: 5 * STEP_GAP },
];

function pulseTransition(offset: number) {
  return {
    duration: STEP_GAP,
    delay: offset,
    repeat: Infinity,
    repeatDelay: CYCLE_DURATION - STEP_GAP,
    ease: "easeOut" as const,
  };
}

function CycleNode({
  step,
  reduce,
}: {
  step: (typeof STEPS)[number];
  reduce: boolean | null;
}) {
  const Icon = step.icon;
  return (
    <div
      className="absolute flex w-28 -translate-x-1/2 -mt-8 flex-col items-center text-center sm:-mt-9 sm:w-32"
      style={{ top: `${step.y}%`, left: `${step.x}%` }}
    >
      <div className="relative">
        {!reduce && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-primary"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.18, 0], scale: [1, 1.45, 1.45] }}
            transition={pulseTransition(step.offset)}
          />
        )}
        <motion.div
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-neutral-200 sm:h-[4.5rem] sm:w-[4.5rem]"
          animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
          transition={reduce ? undefined : pulseTransition(step.offset)}
        >
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ink font-body text-[0.6rem] font-bold text-white">
            {step.number}
          </span>
        </motion.div>
      </div>
      <h3 className="mt-3 font-heading text-sm font-semibold text-ink sm:text-base">
        {step.title}
      </h3>
      <p className="mt-1 font-body text-xs leading-relaxed text-neutral-500">
        {step.description}
      </p>
    </div>
  );
}

function CycleArrows({ reduce }: { reduce: boolean | null }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full overflow-visible text-neutral-300"
      aria-hidden
    >
      <defs>
        <marker
          id="cycleArrowHead"
          viewBox="0 0 10 10"
          refX="7.5"
          refY="5"
          markerWidth="4.5"
          markerHeight="4.5"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="currentColor" />
        </marker>
      </defs>
      {ARROWS.map((arrow) => (
        <motion.path
          key={arrow.d}
          d={arrow.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          markerEnd="url(#cycleArrowHead)"
          initial={{ opacity: 0.35 }}
          animate={reduce ? undefined : { opacity: [0.35, 1, 0.35] }}
          transition={reduce ? undefined : pulseTransition(arrow.offset)}
        />
      ))}
    </svg>
  );
}

export default function RecycleCycleSection() {
  const reduce = useReducedMotion();

  return (
    <section className="section-px py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: heading, description, image */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Give Your Old Electronics a New Purpose
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-base leading-relaxed text-neutral-600 lg:mx-0">
              Every device we collect gets a second life. We separate and
              recover the materials still worth having, then put them back
              into the circular economy so nothing usable ends up as waste.
            </p>

            <div className="relative mx-auto mt-8 aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl lg:mx-0">
              <Image
                src="/images/sustainability/ewastecycle1.png"
                alt="The lifecycle of an electronic device, from collection through material recovery to recycling"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: animated cycle */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative aspect-square w-full max-w-sm sm:max-w-md">
              <CycleArrows reduce={reduce} />
              {STEPS.map((step) => (
                <CycleNode key={step.title} step={step} reduce={reduce} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
