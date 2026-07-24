import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMPACT_PROJECTS } from "../lib/impact";
import ImpactCard from "./ImpactCard";

export default function Impact() {
  const projects = IMPACT_PROJECTS.slice(0, 3);

  return (
    <section
      id="impact"
      className="bg-warm-grey px-6 py-20 sm:py-24 md:py-28 md:px-10 lg:px-16"
    >
      <div>
        {/* Header: left heading, right "view more" */}
        <div className="mb-12 flex flex-col gap-6 text-center sm:text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Reliability that reaches
              <br />
              <span className="text-neutral-400">beyond the home.</span>
            </h2>
          </div>
          <Link
            href="/impact"
            className="group hidden sm:inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-ink/25 px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white sm:self-auto"
          >
            View more
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* Three projects */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, i) => (
            <ImpactCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View more button for mobile (below 3rd card) */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/impact"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
          >
            View more
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
