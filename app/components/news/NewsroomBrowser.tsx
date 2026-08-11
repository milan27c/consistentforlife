"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { NEWS, type NewsCategory } from "../../lib/news";
import NewsCard from "./NewsCard";
import NewsFeaturedCarousel from "./NewsFeaturedCarousel";

const CATEGORIES: NewsCategory[] = ["Company News", "Product Launch", "Innovation", "Our Story"];

export default function NewsroomBrowser() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const initialCategory = CATEGORIES.includes(categoryParam as NewsCategory)
    ? (categoryParam as NewsCategory)
    : "All";

  const [active, setActive] = useState<NewsCategory | "All">(initialCategory);
  const [query, setQuery] = useState("");

  const featuredItems = useMemo(() => NEWS.filter((item) => item.featured), []);

  const otherItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return NEWS.filter((item) => !item.featured)
      .filter((item) => active === "All" || item.category === active)
      .filter(
        (item) =>
          !q || item.heading.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q)
      )
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [active, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {(["All", ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-primary text-white"
                  : "bg-white text-neutral-600 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:ml-auto sm:w-72">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
            strokeWidth={1.75}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search newsroom"
            className="w-full rounded-full bg-white py-2.5 pl-11 pr-4 font-body text-sm text-ink placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      <div className="mt-8">
        <NewsFeaturedCarousel items={featuredItems} />
      </div>

      {otherItems.length > 0 ? (
        <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {otherItems.map((item, i) => (
            <NewsCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      ) : (
        <p className="mt-12 font-body text-sm text-neutral-500">
          No stories match your search.
        </p>
      )}
    </div>
  );
}
