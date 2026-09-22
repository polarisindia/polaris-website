"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/motion";

// How long the outgoing quote takes to fade out before the incoming one
// swaps in and fades back — keep in sync with the duration-[Nms] classes below.
const FADE_MS = 400;

function initials(name: string) {
  return name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * One testimonial at a time, centred on a faint off-white — no card, no
 * border, no shadow. Auto-advances (paused on hover / focus / reduced
 * motion); dots below jump between quotes.
 */
export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;
  const transitioning = useRef(false);

  // Smooth crossfade: fade the current quote out, swap the content once
  // it's invisible, then fade the new one in — instead of a hard cut.
  const go = useCallback(
    (i: number) => {
      if (transitioning.current || prefersReducedMotion()) {
        setIndex(((i % count) + count) % count);
        return;
      }
      transitioning.current = true;
      setVisible(false);
      window.setTimeout(() => {
        setIndex(((i % count) + count) % count);
        setVisible(true);
        window.setTimeout(() => {
          transitioning.current = false;
        }, FADE_MS);
      }, FADE_MS);
    },
    [count],
  );

  useEffect(() => {
    if (count < 2 || paused || prefersReducedMotion()) return;
    const id = window.setInterval(() => go(index + 1), 4200);
    return () => window.clearInterval(id);
  }, [count, paused, index, go]);

  const t = testimonials[index];

  return (
    <section
      className="relative overflow-hidden bg-[#faf9f3]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container-px relative z-10 mx-auto max-w-3xl py-14 text-center lg:py-16">
        <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-faint">
          What clients say
        </h2>

        <span
          aria-hidden="true"
          className="mt-5 block select-none font-serif text-[4rem] leading-[0.6] text-brand/25"
        >
          &ldquo;
        </span>

        <div
          className={`flex min-h-[21rem] flex-col justify-start transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:min-h-[18rem] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <blockquote className="mx-auto mt-5 max-w-3xl text-2xl font-medium leading-relaxed text-ink-soft sm:text-[1.9rem] sm:leading-[1.4]">
            {t.quote}
          </blockquote>

          <figcaption className="mt-8 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-tint text-sm font-semibold text-brand-dark">
              {initials(t.name)}
            </span>
            <span className="text-left text-sm">
              <span className="block font-semibold text-ink">{t.name}</span>
              <span className="block text-ink-faint">
                {t.role}, {t.org}
              </span>
            </span>
          </figcaption>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3.5">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "dot-active scale-110 bg-brand"
                  : "bg-ink/15 hover:bg-ink/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
