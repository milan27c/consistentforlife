import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download, Share2 } from "lucide-react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import NewsCard from "../../components/news/NewsCard";
import { NEWS, formatNewsDate, getNewsItem } from "../../lib/news";

export function generateStaticParams() {
  return NEWS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return {};
  return {
    title: item.heading,
    description: item.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();

  const related = NEWS.filter((n) => n.slug !== item.slug)
    .sort((a, b) => (a.category === item.category ? -1 : 0) - (b.category === item.category ? -1 : 0))
    .slice(0, 3);

  const currentIndex = NEWS.findIndex((n) => n.slug === item.slug);
  const prevItem = NEWS[(currentIndex - 1 + NEWS.length) % NEWS.length];
  const nextItem = NEWS[(currentIndex + 1) % NEWS.length];

  return (
    <>
      <Header />
      <main className="flex-1 bg-warm-grey">
        <article className="section-px pb-16 pt-16 sm:pt-20">
          <div className="mt-4 md:mt-0">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Newsroom", href: "/newsroom" },
                { label: item.category },
              ]}
            />
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl sm:bg-white sm:p-10 lg:p-14">
            <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {item.heading}
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href={`/newsroom?category=${encodeURIComponent(item.category)}`}
                  className="font-body text-sm font-bold text-ink transition-opacity hover:opacity-70"
                >
                  {item.category}
                </Link>
                <span className="font-body text-sm text-neutral-500">
                  {formatNewsDate(item.date)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  aria-label="Download"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-grey text-ink transition-opacity hover:opacity-70"
                >
                  <Download className="h-4 w-4" strokeWidth={1.75} />
                </button>
                <button
                  aria-label="Share"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-grey text-ink transition-opacity hover:opacity-70"
                >
                  <Share2 className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-200" />

            <p className="mt-8 font-body text-lg font-bold leading-relaxed text-ink sm:text-xl">
              {item.excerpt}
            </p>

            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-800">
              <Image
                src={item.image}
                alt={item.heading}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-10">
              <div className="space-y-10">
                {item.body.map((section, i) => (
                  <div key={i} className="space-y-4">
                    {section.heading && (
                      <h2 className="font-heading text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((paragraph, j) => (
                      <p key={j} className="font-body text-base leading-relaxed text-neutral-700 sm:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-between gap-6 border-t border-neutral-200 pt-8">
                <Link
                  href={`/newsroom/${prevItem.slug}`}
                  className="group flex items-center gap-2 font-body text-sm font-semibold text-ink transition-opacity hover:opacity-70"
                >
                  <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2} />
                  Previous
                </Link>

                <Link
                  href={`/newsroom/${nextItem.slug}`}
                  className="group flex max-w-[65%] items-center gap-3 text-right font-body text-sm font-semibold text-ink transition-opacity hover:opacity-70"
                >
                  <span className="line-clamp-1 sm:hidden">Next</span>
                  <span className="hidden line-clamp-1 sm:inline">{nextItem.heading}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="section-px pb-24">
            <h2 className="mb-8 font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              More from the newsroom
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedItem, i) => (
                <NewsCard key={relatedItem.slug} item={relatedItem} index={i} />
              ))}
            </div>

            <div className="mt-16">
              <Link
                href="/newsroom"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-ink transition-opacity hover:opacity-70"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                Back to newsroom
              </Link>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
