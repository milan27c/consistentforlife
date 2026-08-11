import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import ImpactCard from "../components/ImpactCard";
import { IMPACT_PROJECTS } from "../lib/impact";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "How Consistent For Life carries its promise of reliability beyond the home and into the community.",
};

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-warm-grey">
        {/* Intro */}
        <section className="section-px pb-16 pt-12 sm:pt-16">
          <div>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Consistency, felt beyond the home.
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-neutral-600 sm:text-lg">
              The same promise we build into every product reaches further than
              your living room. These are the long term commitments we keep to
              the communities that trust us, year after year.
            </p>
          </div>
        </section>

        {/* All projects */}
        <section className="section-px pb-28">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {IMPACT_PROJECTS.map((project, i) => (
              <ImpactCard key={project.title} project={project} index={i} />
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-ink transition-opacity hover:opacity-70"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              Back to home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
