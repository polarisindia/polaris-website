"use client";

import Image from "next/image";
import { useState } from "react";

type Step = {
  step: string;
  title: string;
  body: string;
  image: string;
};

/**
 * "Squeeze" carousel, à la Stripe's "What's happening" band: every step
 * shares one fixed row of space — the active panel expands and the rest
 * compress to slivers. Nothing scrolls; width is just redistributed. The
 * panel opens on hover (or tap); its title and copy sit over the image on a
 * green scrim so they stay legible.
 */
export function ProcessRail({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const count = steps.length;
  const go = (dir: 1 | -1) => setActive((i) => (i + dir + count) % count);

  const arrowBtn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white";

  return (
    <div className="mt-8">
      <div className="flex items-center justify-end gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous step"
            onClick={() => go(-1)}
            className={arrowBtn}
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            aria-label="Next step"
            onClick={() => go(1)}
            className={arrowBtn}
          >
            <Arrow dir="right" />
          </button>
        </div>
      </div>

      {/* squeeze row */}
      <div className="mt-6 flex h-[440px] flex-col gap-3 sm:h-[460px] sm:flex-row sm:gap-5">
        {steps.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.step}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-label={s.title}
              aria-pressed={isActive}
              className={`group relative min-h-[64px] min-w-0 cursor-pointer overflow-hidden rounded-lg bg-mist text-left transition-[flex-grow,transform,box-shadow] duration-[1600ms,2200ms,2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive
                  ? ""
                  : "hover:z-10 hover:scale-[1.03] hover:shadow-[0_22px_48px_-20px_rgba(15,67,56,0.45)]"
              }`}
              style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0 }}
            >
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 55vw"
                className={`object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive ? "scale-100" : "scale-105 group-hover:scale-[1.06]"
                }`}
              />

              {/* soft scrim behind the caption — bottom only, not a full wash */}
              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent transition-all duration-500 ${
                  isActive
                    ? "h-3/4 from-brand-dark/95 via-brand-dark/60"
                    : "h-2/5 from-black/45 via-transparent"
                }`}
              />

              {/* greenish hover wash for collapsed panels — a separate layer
                  that only ever fades via opacity, since browsers can't
                  smoothly animate between two different gradients (swapping
                  gradient colour stops directly used to pop instead of ease) */}
              {!isActive && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/30 to-transparent opacity-0 transition-opacity duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                />
              )}

              {/* collapsed label — horizontal on the mobile stack, vertical on the desktop row */}
              <span
                className={`pointer-events-none absolute bottom-4 left-4 text-base font-semibold text-white transition-opacity duration-300 sm:hidden ${
                  isActive ? "opacity-0" : "opacity-95"
                }`}
              >
                {s.title}
              </span>
              <span
                className={`pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-base font-semibold text-white transition-opacity duration-300 [writing-mode:vertical-rl] sm:block ${
                  isActive ? "opacity-0" : "opacity-95"
                }`}
                style={{ rotate: "180deg" }}
              >
                {s.title}
              </span>

              {/* active caption — on the image */}
              <span
                className={`pointer-events-none absolute inset-x-0 bottom-0 block p-6 transition-opacity duration-500 sm:p-8 ${
                  isActive ? "opacity-100 delay-150" : "opacity-0"
                }`}
              >
                <span className="block text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                  {s.title}
                </span>
                <span className="mt-2 block max-w-xl text-sm leading-relaxed text-white/80">
                  {s.body}
                </span>
              </span>
            </button>
          );
        })}
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
