"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ImpactProject } from "../lib/impact";

export default function ImpactCard({
  project,
  index,
}: {
  project: ImpactProject;
  index: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      className="group"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: reduce ? 0 : (index % 3) * 0.1 }}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={800}
          sizes="(max-width: 768px) 100vw, 380px"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
        {project.title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-neutral-600">
        {project.blurb}
      </p>
    </motion.article>
  );
}
