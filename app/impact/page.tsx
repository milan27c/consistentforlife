import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import BreadcrumbBar from "../components/BreadcrumbBar";
import ActionPlanSection from "../components/impact/ActionPlanSection";
import ImpactCard from "../components/ImpactCard";
import { IMPACT_PROJECTS } from "../lib/impact";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "How Consistent For Life carries its promise of reliability beyond the home, one district and one weekly delivery at a time.",
};

export default function ImpactPage() {
  const initiatives = IMPACT_PROJECTS.slice(0, 3);

  return (
    <>
      <Header />
      <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Our Impact" }]} />
      <main className="flex-1 bg-warm-grey">
        {/* Intro */}
        <section className="section-px pb-4 pt-10 sm:pt-14">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Lasting impact, better tomorrow.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-neutral-600 sm:text-lg lg:max-w-none lg:whitespace-nowrap">
            Building healthier families and stronger communities, one
            refrigerator and one district at a time.
          </p>
        </section>

        <ActionPlanSection />

        {/* The program, in detail */}
        <section className="section-px pb-28">
          <div className="mb-16 border-t border-neutral-200 pt-16 text-center">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Reliability that reaches beyond the home.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-neutral-600">
              Every appliance we place carries that same promise into the
              communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((project, i) => (
              <ImpactCard key={project.title} project={project} index={i} />
            ))}
          </div>

          <div className="mt-20">
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
