"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { TimelineProgress } from "./TimelineProgress";

type Milestone = { year: string; title: string; text: string };

/**
 * Horizontal milestone timeline with explicit prev/next controls, matching
 * the arrow-button language used on the homepage's process rail — a
 * scrollbar alone doesn't tell a visitor there's more to see. A soft mask
 * fades whichever edge still has hidden cards, and disappears once that
 * edge is reached, so the affordance never lies about what's left.
 *
 * `wrapperRef` — not the inner `<ol>` — is the actual scroll container: the
 * `<ol>` is `w-max` so it can grow past its parent (that's what makes it
 * scrollable at all), which means its own clientWidth always equals its
 * scrollWidth. The wrapper is the element whose width is really clipped by
 * the layout, so edge detection has to read scroll position from it.
 */
export function MilestonesRail({ milestones }: { milestones: Milestone[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = wrapperRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = wrapperRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [milestones.length]);

  const go = (dir: 1 | -1) => {
    const el = wrapperRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = window.innerWidth >= 1024 ? 64 : 48;
    const step = card
      ? card.getBoundingClientRect().width + gap
      : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrowBtn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink disabled:pointer-events-none disabled:opacity-30";

  const fade = 48;
  const maskImage = `linear-gradient(to right, transparent 0, black ${
    atStart ? 0 : fade
  }px, black calc(100% - ${atEnd ? 0 : fade}px), transparent 100%)`;

  return (
    <div className="mt-10">
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="Earlier milestones"
          onClick={() => go(-1)}
          disabled={atStart}
          className={arrowBtn}
        >
          <Arrow dir="left" />
        </button>
        <button
          type="button"
          aria-label="Later milestones"
          onClick={() => go(1)}
          disabled={atEnd}
          className={arrowBtn}
        >
          <Arrow dir="right" />
        </button>
      </div>

      <div
        ref={wrapperRef}
        className="no-scrollbar mt-6 overflow-x-auto pb-2"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <ol
          className="relative flex w-max snap-x gap-12 pl-1 pr-8 pt-2 lg:gap-16"
          data-timeline-track
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-2 h-px bg-ink/15"
          />
          <TimelineProgress />
          {milestones.map((m, i) => (
            <Reveal
              as="li"
              key={m.year}
              variant="up"
              delay={i * 60}
              className="relative w-56 shrink-0 snap-start lg:w-64"
            >
              <span className="absolute left-0 top-0 h-4 w-4 rounded-full border-2 border-brand bg-[#15371b]" />
              <div className="pt-9">
                <div className="text-lg font-semibold tracking-tight text-brand-strong">
                  {m.year}
                  <span className="text-ink"> · {m.title}</span>
                </div>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                  {m.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: dir === "left" ? "scaleX(-1)" : undefined }}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
