"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { lkr } from "../../lib/product";

const HEADER_H = 72;
const BAR_H = 64;

export type ProductTab = { id: string; label: string };

export default function ProductStickyBar({
  name,
  price,
  heroSentinelId,
  tabs,
}: {
  name: string;
  price: number;
  heroSentinelId: string;
  tabs: ProductTab[];
}) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const sentinel = document.getElementById(heroSentinelId);
      if (sentinel) {
        setVisible(sentinel.getBoundingClientRect().top < HEADER_H);
      }

      const scrollPos = window.scrollY + HEADER_H + BAR_H + 24;
      let current = tabs[0]?.id ?? "";
      for (const tab of tabs) {
        const el = document.getElementById(tab.id);
        if (el && el.offsetTop <= scrollPos) {
          current = tab.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [heroSentinelId, tabs]);

  const scrollToTab = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.offsetTop - (HEADER_H + BAR_H) + 1;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      ref={barRef}
      className={`fixed inset-x-0 z-40 border-b border-ink/10 bg-surface/95 backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ top: HEADER_H }}
      aria-hidden={!visible}
    >
      {/* Name, price, buy now */}
      <div className="flex items-center justify-between gap-4 px-6 py-3 md:px-10 lg:px-16">
        <p className="truncate font-body text-sm font-semibold text-ink sm:text-base">
          {name}
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <span className="hidden font-body text-base font-semibold text-primary sm:inline">
            {lkr(price)}
          </span>
          <button className="rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-[#8c002c]">
            Where to Buy
          </button>
        </div>
      </div>

      {/* Scroll spy tabs */}
      <nav className="flex gap-7 overflow-x-auto px-6 md:px-10 lg:px-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToTab(tab.id)}
            className={`relative shrink-0 whitespace-nowrap py-3 font-body text-sm font-medium transition-colors ${
              active === tab.id ? "text-ink" : "text-neutral-400 hover:text-neutral-600"
            }`}
          >
            {tab.label}
            {active === tab.id && (
              <motion.span
                layoutId="productTabUnderline"
                className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
