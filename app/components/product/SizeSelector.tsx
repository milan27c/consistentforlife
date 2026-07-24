"use client";

import { useState } from "react";

export default function SizeSelector({
  options,
}: {
  options: { label: string; selected?: boolean }[];
}) {
  const defaultIndex = Math.max(
    0,
    options.findIndex((o) => o.selected)
  );
  const [active, setActive] = useState(defaultIndex);

  return (
    <div>
      <p className="font-body text-xs font-semibold uppercase tracking-wide text-neutral-500">
        Screen size
      </p>
      <div className="mt-2.5 flex flex-wrap gap-2.5">
        {options.map((option, i) => (
          <button
            key={option.label}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`rounded-xl border px-4 py-2.5 font-body text-sm transition-colors ${
              i === active
                ? "border-2 border-ink font-semibold text-ink"
                : "border-neutral-300 text-neutral-500 hover:border-neutral-400"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
