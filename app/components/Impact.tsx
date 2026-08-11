import { IMPACT_PROJECTS } from "../lib/impact";
import ImpactCard from "./ImpactCard";

export default function Impact() {
  const projects = IMPACT_PROJECTS.slice(0, 3);

  return (
    <section id="impact" className="bg-warm-grey py-20 sm:py-24 md:py-28">
      <div className="section-px">
        {/* Header. The "view more" buttons are parked while /impact is hidden. */}
        <div className="mb-12 flex flex-col gap-6 text-center sm:text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Reliability that reaches
              <br />
              <span className="text-neutral-400">beyond the home.</span>
            </h2>
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
