"use client";

import { motion, useReducedMotion } from "motion/react";
import { DISTRICT_SHAPES, DISTRICT_MAP_VIEWBOX } from "../../lib/sriLankaDistricts";
import type { DonationWeekWithStatus } from "../../lib/donationPlan";

export default function DistrictMap({
  plan,
  className = "",
}: {
  plan: DonationWeekWithStatus[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const statusByDistrict = new Map(plan.map((week) => [week.district, week.status]));
  const completedCount = plan.filter((week) => week.status === "completed").length;
  const next = plan.find((week) => week.status === "next");
  const nextShape = next
    ? DISTRICT_SHAPES.find((shape) => shape.name === next.district)
    : undefined;

  return (
    <div className={`rounded-3xl bg-surface p-6 sm:p-8 ${className}`}>
      <svg
        viewBox={DISTRICT_MAP_VIEWBOX}
        className="mx-auto block h-auto w-full max-w-[240px]"
        role="img"
        aria-label={`Map of Sri Lanka. ${completedCount} of ${plan.length} districts completed.`}
      >
        {DISTRICT_SHAPES.map((shape) => {
          const status = statusByDistrict.get(shape.name);
          const fill =
            status === "completed"
              ? "#1C7A3D"
              : status === "next"
                ? "var(--color-secondary)"
                : "var(--color-neutral-200)";
          return (
            <path
              key={shape.name}
              d={shape.d}
              fill={fill}
              stroke="var(--color-surface)"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
          );
        })}
        {nextShape && (
          <motion.circle
            cx={nextShape.cx}
            cy={nextShape.cy}
            r={9}
            fill="var(--color-surface)"
            stroke="var(--color-secondary)"
            strokeWidth={2}
            animate={reduce ? undefined : { opacity: [1, 0.35, 1], scale: [1, 1.5, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: `${nextShape.cx}px ${nextShape.cy}px` }}
          />
        )}
      </svg>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <span className="flex items-center gap-2 font-body text-xs text-neutral-600">
          <span className="h-2.5 w-2.5 rounded-full bg-[#1C7A3D]" />
          Completed
        </span>
        <span className="flex items-center gap-2 font-body text-xs text-neutral-600">
          <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
          Next donation
        </span>
        <span className="flex items-center gap-2 font-body text-xs text-neutral-600">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          Remaining
        </span>
      </div>

      <p className="mt-4 text-center font-body text-sm text-neutral-500">
        {completedCount} of {plan.length} districts reached so far.
      </p>
    </div>
  );
}
