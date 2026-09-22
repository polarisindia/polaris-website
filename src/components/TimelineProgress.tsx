"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * A green line that draws in left-to-right over the horizontal timeline
 * track as it scrolls into view — scrubbed to the page's vertical scroll
 * position (not the rail's own horizontal scroll). Sits absolutely inside
 * the nearest ancestor marked data-timeline-track, which is used as the
 * (stable, untransformed) ScrollTrigger trigger so the animated element's
 * own shrinking width never feeds back into the trigger's start/end maths.
 */
export function TimelineProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const trigger = el.closest("[data-timeline-track]");
    if (!trigger) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top 78%",
            end: "bottom 62%",
            scrub: 0.6,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-2 h-px origin-left bg-brand"
    />
  );
}
