"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

const STATEMENT =
  "Consistent For Life is where dependable technology comes home. Modern, high quality electronics engineered to stay reliable long after the newness fades. One promise, built to last for years to come.";

export default function About() {
  return (
    <section
      id="about"
      className="bg-warm-grey px-6 py-20 sm:py-24 md:py-32 md:px-10 lg:px-16"
    >
      {/* Full-width white statement card (within the page gutter) */}
      <div className="relative w-full overflow-hidden rounded-3xl bg-surface px-8 py-16 sm:px-16 sm:py-16">
        {/* Decorative, softly-drifting product accents — kept fully inside the card */}
        <FloatingImage
          src="/images/about/tv.png"
          width={542}
          height={533}
          floatY={-12}
          duration={9}
          className="left-4 top-4 w-20 sm:left-8 sm:top-1/2 sm:w-40 sm:-translate-y-1/2"
        />
        <FloatingImage
          src="/images/about/ac.png"
          width={550}
          height={206}
          floatY={-9}
          duration={10}
          delay={0.6}
          className="right-4 top-4 w-28 sm:right-8 sm:top-8 sm:w-40"
        />
        <FloatingImage
          src="/images/about/refrigrator.png"
          width={328}
          height={639}
          floatY={-10}
          duration={11}
          delay={1.1}
          className="bottom-4 left-1/2 w-14 -translate-x-1/2 sm:left-auto sm:right-8 sm:bottom-8 sm:w-20 sm:translate-x-0"
        />

        {/* Centered statement with scroll-driven fill */}
        <div className="relative z-10 mx-auto max-w-3xl">
          <StatementText text={STATEMENT} />
        </div>
      </div>
    </section>
  );
}

/* ---- Scroll-driven text fill (light grey -> black, top-left first) ---- */

function StatementText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className="text-center font-heading text-2xl font-semibold leading-[1.35] tracking-tight sm:text-3xl sm:leading-[1.3] lg:text-[2.05rem] lg:leading-[1.3]"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
}) {
  const color = useTransform(progress, range, ["#c7c3bb", "#0a0a0a"]);
  return (
    <>
      <motion.span style={{ color }}>{children}</motion.span>{" "}
    </>
  );
}

/* ---- Softly floating decorative image ---- */

function FloatingImage({
  src,
  width,
  height,
  className,
  floatY,
  duration,
  delay = 0,
}: {
  src: string;
  width: number;
  height: number;
  className: string;
  floatY: number;
  duration: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute z-0 ${className}`}
      animate={reduce ? undefined : { y: [0, floatY, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        sizes="(max-width: 640px) 20vw, 12vw"
        className="h-auto w-full opacity-70 blur-[1.25px] drop-shadow-lg"
      />
    </motion.div>
  );
}
