"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { formatNewsDate, type NewsItem } from "../../lib/news";

const AUTOPLAY_MS = 6000;

export default function NewsFeaturedCarousel({ items }: { items: NewsItem[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = items[index];

  useEffect(() => {
    if (paused || reduce || items.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduce, items.length]);

  if (!current) return null;

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col lg:h-[460px] lg:flex-row"
        >
          <Link
            href={`/newsroom/${current.slug}`}
            className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden bg-neutral-800 lg:aspect-auto lg:h-full lg:w-[58%]"
          >
            <Image
              src={current.image}
              alt={current.heading}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              priority
            />
          </Link>

          <div className="flex flex-1 flex-col justify-center gap-4 px-6 py-8 sm:px-10 sm:py-10 lg:w-[42%] lg:px-12">
            <span className="flex w-fit items-center gap-1 font-body text-sm font-semibold text-neutral-500">
              {current.category}
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
            </span>

            <Link href={`/newsroom/${current.slug}`}>
              <h3 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-ink transition-opacity hover:opacity-70 sm:text-3xl lg:text-[2rem]">
                {current.heading}
              </h3>
            </Link>

            <p className="font-body text-sm text-neutral-500">{formatNewsDate(current.date)}</p>

            <Link
              href={`/newsroom/${current.slug}`}
              className="mt-2 inline-flex w-fit items-center rounded-full border border-ink bg-white px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {items.length > 1 && (
        <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-ink/70 p-1 backdrop-blur sm:bottom-6 sm:right-6">
          <button
            aria-label="Previous story"
            onClick={prev}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            aria-label={paused ? "Play" : "Pause"}
            onClick={() => setPaused((p) => !p)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20"
          >
            {paused ? (
              <Play className="h-4 w-4" strokeWidth={2} />
            ) : (
              <Pause className="h-4 w-4" strokeWidth={2} />
            )}
          </button>
          <button
            aria-label="Next story"
            onClick={next}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}
