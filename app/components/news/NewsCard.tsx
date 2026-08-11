"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { formatNewsDate, type NewsItem } from "../../lib/news";

export default function NewsCard({ item, index = 0 }: { item: NewsItem; index?: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: reduce ? 0 : (index % 6) * 0.08 }}
      className="h-full"
    >
      <Link href={`/newsroom/${item.slug}`} className="group flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={item.image}
            alt={item.heading}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col pt-5">
          <span className="inline-flex w-fit items-center gap-1 font-body text-sm font-semibold text-neutral-500">
            {item.category}
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>

          <h3 className="mt-2 line-clamp-2 font-heading text-xl font-semibold leading-snug text-ink">
            {item.heading}
          </h3>

          <p className="mt-3 font-body text-sm text-neutral-500">{formatNewsDate(item.date)}</p>

          <span className="mt-4 inline-flex w-fit items-center rounded-full border border-ink bg-white px-6 py-2.5 font-body text-sm font-semibold text-ink transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
            Learn More
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
