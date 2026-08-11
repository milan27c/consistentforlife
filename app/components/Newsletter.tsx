"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NEWS } from "../lib/news";
import NewsCard from "./news/NewsCard";

export default function Newsletter() {
  const items = NEWS.filter((item) => item.homeFeature).slice(0, 3);

  return (
    <section id="newsroom" className="scroll-mt-20 bg-warm-grey py-20 sm:py-24 md:py-28">
      <div className="section-px">
        <div className="mb-10 flex flex-col items-center gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-center font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-left lg:text-5xl">
            Latest News
          </h2>
          <Link
            href="/newsroom"
            className="flex items-center gap-2 font-body text-sm font-semibold text-ink transition-opacity hover:opacity-70"
          >
            View all news
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <NewsCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
