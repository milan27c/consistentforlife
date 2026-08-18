import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMPACT_PROJECTS } from "../lib/impact";
import ImpactCard from "./ImpactCard";
import NextEventStrip from "./NextEventStrip";

export default function Impact() {
  const projects = IMPACT_PROJECTS.slice(0, 3);

  return (
    <section id="impact" className="bg-warm-grey py-20 sm:py-24 md:py-28">
      <div className="section-px">
        <div className="mb-12 flex flex-col gap-6 text-center sm:text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
              Reliability that reaches
              <br />
              <span className="text-neutral-400">beyond the home.</span>
            </h2>
          </div>
          <div className="flex flex-col items-center gap-3 sm:items-end">
            <NextEventStrip />
            <Link
              href="/impact"
              className="inline-flex items-center justify-center gap-2 font-body text-sm font-semibold text-ink transition-opacity hover:opacity-70 sm:justify-start"
            >
              Learn More
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Three projects */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, i) => (
            <ImpactCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
