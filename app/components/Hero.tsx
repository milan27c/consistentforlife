"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

/* Unsplash cloudscapes — grayscaled + screen-blended over the scenes so the
   bright cloud shapes composite in and the dark sky drops out, giving real
   drifting clouds rather than a flat white wash. */
const CLOUD_1 =
  "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1920&auto=format&fit=crop";
const CLOUD_2 =
  "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1920&auto=format&fit=crop";
const CLOUD_3 =
  "https://images.unsplash.com/photo-1499956827185-0d63ee78a910?q=80&w=1920&auto=format&fit=crop";
const CLOUD_4 =
  "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?q=80&w=1920&auto=format&fit=crop";

type CloudConfig = {
  src: string;
  enter: number;
  peak: number;
  out: number;
  xFrom: string;
  xTo: string;
  yFrom: string;
  yTo: string;
  scaleFrom: number;
  scaleTo: number;
  opacity: number;
  blur: number;
};

/* Five layers at different depths: far/slow/sharp -> near/fast/soft. */
const CLOUD_LAYERS: CloudConfig[] = [
  { src: CLOUD_3, enter: 0.16, peak: 0.5, out: 0.86, xFrom: "6%", xTo: "-6%", yFrom: "-2%", yTo: "3%", scaleFrom: 1.05, scaleTo: 1.25, opacity: 0.9, blur: 0 },
  { src: CLOUD_1, enter: 0.2, peak: 0.5, out: 0.84, xFrom: "-14%", xTo: "10%", yFrom: "4%", yTo: "-4%", scaleFrom: 1.1, scaleTo: 1.4, opacity: 0.95, blur: 1 },
  { src: CLOUD_2, enter: 0.24, peak: 0.52, out: 0.82, xFrom: "16%", xTo: "-16%", yFrom: "-4%", yTo: "6%", scaleFrom: 1.15, scaleTo: 1.5, opacity: 0.9, blur: 2 },
  { src: CLOUD_4, enter: 0.28, peak: 0.52, out: 0.8, xFrom: "-22%", xTo: "18%", yFrom: "6%", yTo: "-8%", scaleFrom: 1.2, scaleTo: 1.7, opacity: 0.85, blur: 4 },
  { src: CLOUD_1, enter: 0.32, peak: 0.54, out: 0.78, xFrom: "24%", xTo: "-24%", yFrom: "-8%", yTo: "10%", scaleFrom: 1.3, scaleTo: 1.9, opacity: 0.75, blur: 7 },
];

function scrollToNext() {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: window.innerHeight * 1.7, behavior: "smooth" });
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return <HeroMobile />;
  if (reduce) return <HeroStatic />;
  return <HeroMotion />;
}

/* ------------------------------------------------------------------ */
/* Mobile hero — same animation as desktop, but with mobile images    */
/* ------------------------------------------------------------------ */

function HeroMobile() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0% 0%", "100% 100%"],
  });

  const p = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  /* --- Scene 1: mobilehero1; zooms toward the scene early in the scroll --- */
  const scene1Scale = useTransform(p, [0, 0.54, 1], [1.05, 1.55, 1.55]);
  const scene1Y = useTransform(p, [0, 0.6], ["0%", "-8%"]);
  const scene1Opacity = useTransform(p, [0.36, 0.54], [1, 0.15]);
  const vignetteOpacity = useTransform(p, [0.3, 0.5], [1, 0.2]);

  /* --- Scene 2: mobilehero2 ------ */
  const scene2Opacity = useTransform(p, [0.52, 0.78], [0, 1]);
  const scene2Scale = useTransform(p, [0.52, 1], [1.16, 1]);
  const scrimOpacity = useTransform(p, [0.64, 0.84], [0, 1]);

  /* --- Legibility haze */
  const hazeOpacity = useTransform(p, [0.3, 0.5, 0.62, 0.82], [0, 0.55, 0.5, 0]);

  /* --- Title "Consistent For Life" */
  const titleOpacity = useTransform(p, [0.4, 0.53], [0, 1]);
  const titleBlur = useTransform(p, [0.4, 0.56], [16, 0]);
  const titleFilter = useTransform(titleBlur, (b) => `blur(${b}px)`);
  const titleScale = useTransform(p, [0.4, 0.58, 0.82], [1.55, 1.4, 1]);
  const titleColor = useTransform(p, [0.6, 0.78], ["#262521", "#ffffff"]);
  const titleY = useTransform(p, [0.58, 0.9], ["0svh", "26svh"]);

  /* --- Sub-heading + CTA */
  const metaOpacity = useTransform(p, [0.82, 0.95], [0, 1]);
  const metaY = useTransform(p, [0.82, 0.95], [26, 0]);

  /* --- "Scroll to begin" hint */
  const hintOpacity = useTransform(p, [0, 0.1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-ink">
        {/* Scene 1 — mobilehero1 */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/mobilehero1.png')",
            scale: scene1Scale,
            y: scene1Y,
            opacity: scene1Opacity,
            transformOrigin: "50% 40%",
          }}
        />
        {/* Vignette on scene 1 */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: vignetteOpacity,
            background:
              "radial-gradient(120% 90% at 50% 40%, transparent 35%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Scene 2 — mobilehero2 */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/mobilehero2.png')",
            scale: scene2Scale,
            opacity: scene2Opacity,
          }}
        />
        {/* Legibility scrim for the settled headline */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: scrimOpacity,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 52%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Drifting cloud layers */}
        {CLOUD_LAYERS.map((c, i) => (
          <CloudLayer key={i} p={p} {...c} />
        ))}

        {/* Soft white haze */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: hazeOpacity,
            background:
              "radial-gradient(115% 115% at 50% 46%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.55) 45%, rgba(240,236,228,0.2) 80%, transparent 100%)",
          }}
        />

        {/* Headline group */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ y: titleY }}
        >
          <motion.h1
            className="font-heading font-semibold leading-[0.95] tracking-tight"
            style={{
              opacity: titleOpacity,
              filter: titleFilter,
              scale: titleScale,
              color: titleColor,
              fontSize: "clamp(1.5rem, 5.2vw, 3rem)",
              textShadow: "0 2px 40px rgba(0,0,0,0.35)",
            }}
          >
            Consistent For Life
          </motion.h1>

          <motion.p
            className="mt-4 max-w-sm font-body text-sm leading-relaxed text-white/85"
            style={{ opacity: metaOpacity, y: metaY }}
          >
            The same trust, carried from one generation to the next, in homes
            built around technology that simply keeps working.
          </motion.p>

          <motion.a
            href="#products"
            className="pointer-events-auto mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-xs font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.03] hover:bg-[#8c002c]"
            style={{ opacity: metaOpacity, y: metaY }}
          >
            Explore Products
            <ArrowRight />
          </motion.a>
        </motion.div>

        {/* Scroll-to-begin hint */}
        <motion.div
          className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3"
          style={{ opacity: hintOpacity }}
        >
          <button
            onClick={scrollToNext}
            aria-label="Scroll to begin"
            className="group flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <MouseIcon />
            </motion.div>
            <span className="font-body text-xs uppercase tracking-wider text-white/80">
              Scroll down
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll-driven cinematic hero                                        */
/* ------------------------------------------------------------------ */

function HeroMotion() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0% 0%", "100% 100%"],
  });

  // Smooth the raw progress for buttery parallax.
  const p = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  /* --- Scene 1: the old home; zooms toward the TV early in the scroll, before it fades --- */
  const scene1Scale = useTransform(p, [0, 0.54, 1], [1.05, 1.55, 1.55]);
  const scene1Y = useTransform(p, [0, 0.6], ["0%", "-8%"]);
  const scene1Opacity = useTransform(p, [0.36, 0.54], [1, 0.15]);
  const vignetteOpacity = useTransform(p, [0.3, 0.5], [1, 0.2]);

  /* --- Scene 2: the new home ------------------------------------- */
  const scene2Opacity = useTransform(p, [0.52, 0.78], [0, 1]);
  const scene2Scale = useTransform(p, [0.52, 1], [1.16, 1]);
  const scrimOpacity = useTransform(p, [0.64, 0.84], [0, 1]);

  /* --- Legibility haze (sits ABOVE clouds, low peak so clouds show) */
  const hazeOpacity = useTransform(p, [0.3, 0.5, 0.62, 0.82], [0, 0.55, 0.5, 0]);

  /* --- Title "Consistent For Life" ------------------------------- */
  const titleOpacity = useTransform(p, [0.4, 0.53], [0, 1]);
  const titleBlur = useTransform(p, [0.4, 0.56], [16, 0]);
  const titleFilter = useTransform(titleBlur, (b) => `blur(${b}px)`);
  const titleScale = useTransform(p, [0.4, 0.58, 0.82], [1.55, 1.4, 1]);
  const titleColor = useTransform(p, [0.6, 0.78], ["#262521", "#ffffff"]);
  // Descends from centre so the settled headline group sits near the bottom.
  const titleY = useTransform(p, [0.58, 0.9], ["0svh", "26svh"]);

  /* --- Sub-heading + CTA (settle just below the headline) -------- */
  const metaOpacity = useTransform(p, [0.82, 0.95], [0, 1]);
  const metaY = useTransform(p, [0.82, 0.95], [26, 0]);

  /* --- "Scroll to begin" hint ------------------------------------ */
  const hintOpacity = useTransform(p, [0, 0.1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-ink">
        {/* Scene 1 — old home; zooms in toward the TV as the user starts scrolling */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/pathum1.png')",
            scale: scene1Scale,
            y: scene1Y,
            opacity: scene1Opacity,
            transformOrigin: "37% 39%",
          }}
        />
        {/* Vignette on scene 1 (also darkens base so screen-blended clouds pop) */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: vignetteOpacity,
            background:
              "radial-gradient(120% 90% at 50% 40%, transparent 35%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Scene 2 — new home */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/pathum3.png')",
            scale: scene2Scale,
            opacity: scene2Opacity,
          }}
        />
        {/* Legibility scrim for the settled headline */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: scrimOpacity,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 52%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Drifting cloud layers */}
        {CLOUD_LAYERS.map((c, i) => (
          <CloudLayer key={i} p={p} {...c} />
        ))}

        {/* Soft white haze above the clouds — unifies + keeps text readable */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: hazeOpacity,
            background:
              "radial-gradient(115% 115% at 50% 46%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.55) 45%, rgba(240,236,228,0.2) 80%, transparent 100%)",
          }}
        />

        {/* Headline group — forms big in the clouds, then settles with sub-heading + CTA */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ y: titleY }}
        >
          <motion.h1
            className="font-heading font-semibold leading-[0.95] tracking-tight"
            style={{
              opacity: titleOpacity,
              filter: titleFilter,
              scale: titleScale,
              color: titleColor,
              fontSize: "clamp(2rem, 5.2vw, 4rem)",
              textShadow: "0 2px 40px rgba(0,0,0,0.35)",
            }}
          >
            Consistent
            <br className="sm:hidden" /> For Life
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/85 sm:text-lg"
            style={{ opacity: metaOpacity, y: metaY }}
          >
            The same trust, carried from one generation to the next, in homes
            built around technology that simply keeps working.
          </motion.p>

          <motion.a
            href="#products"
            className="pointer-events-auto mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.03] hover:bg-[#8c002c]"
            style={{ opacity: metaOpacity, y: metaY }}
          >
            Explore Products
            <ArrowRight />
          </motion.a>
        </motion.div>

        {/* Scroll-to-begin hint */}
        <motion.div
          className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3"
          style={{ opacity: hintOpacity }}
        >
          <button
            onClick={scrollToNext}
            aria-label="Scroll to begin"
            className="group flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <MouseIcon />
            </motion.div>
            <span className="font-body text-xs uppercase tracking-wider text-white/80">
              Scroll down
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* One parallax cloud layer driven by scroll progress. */
function CloudLayer({
  src,
  p,
  enter,
  peak,
  out,
  xFrom,
  xTo,
  yFrom,
  yTo,
  scaleFrom,
  scaleTo,
  opacity,
  blur,
}: CloudConfig & { p: MotionValue<number> }) {
  const o = useTransform(p, [enter, peak, (peak + out) / 2, out], [0, opacity, opacity, 0]);
  const x = useTransform(p, [0, 1], [xFrom, xTo]);
  const y = useTransform(p, [0, 1], [yFrom, yTo]);
  const scale = useTransform(p, [enter, out], [scaleFrom, scaleTo]);
  return (
    <motion.div
      className="absolute inset-[-25%] bg-cover bg-center"
      style={{
        backgroundImage: `url('${src}')`,
        opacity: o,
        x,
        y,
        scale,
        filter: `grayscale(1) brightness(1.15) contrast(1.45)${blur ? ` blur(${blur}px)` : ""}`,
        mixBlendMode: "screen",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Reduced-motion fallback — static final composition                  */
/* ------------------------------------------------------------------ */

function HeroStatic() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/pathum3.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1
          className="font-heading font-semibold leading-[0.95] tracking-tight text-white"
          style={{ fontSize: "clamp(2rem, 5.2vw, 4rem)" }}
        >
          Consistent For Life
        </h1>
        <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/85 sm:text-lg">
          The same trust, carried from one generation to the next, in homes
          built around technology that simply keeps working.
        </p>
        <a
          href="#products"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#8c002c]"
        >
          Explore Products
          <ArrowRight />
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function MouseIcon() {
  return (
    <svg width="24" height="36" viewBox="0 0 24 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <path d="M12 2C7.03 2 3 6.03 3 11v10c0 4.97 4.03 9 9 9s9-4.03 9-9V11c0-4.97-4.03-9-9-9z" />
      <path d="M12 6v6" />
    </svg>
  );
}
