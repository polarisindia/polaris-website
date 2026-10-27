"use client";

import Image from "next/image";
import { useState } from "react";
import { SolutionIcon } from "./SolutionIcon";
import type { IconName } from "@/lib/content";

type Step = {
  title: string;
  body?: string;
  icon: IconName;
  image?: string;
};

/**
 * "How it works" as a row of cards: the active card opens up (photo or
 * illustration, icon, title, copy) while the others stay compact with a
 * large faded number. Opens on hover, focus or tap. Below `lg` every card
 * is simply shown open, stacked.
 */
export function StepsAccordion({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const hasBody = steps.some((s) => s.body);
  // Fixed heights per state so the open card can ease between them.
  const openHeight = hasBody ? "lg:h-[560px]" : "lg:h-[500px]";
  const rowHeight = hasBody ? "lg:h-[560px]" : "lg:h-[500px]";

  return (
    <ol
      className={`mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5 ${rowHeight}`}
    >
      {steps.map((s, i) => {
        const isActive = i === active;
        return (
          <li
            key={s.title}
            className={`min-w-0 transition-[flex-grow,height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:basis-0 ${
              isActive
                ? `lg:flex-[1.7_1_0%] ${openHeight}`
                : "lg:flex-[1_1_0%] lg:h-[380px]"
            }`}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-expanded={isActive}
              className={`relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl p-5 text-left transition-[background-color,box-shadow] duration-500 lg:p-6 ${
                isActive
                  ? "bg-white shadow-[0_24px_60px_-32px_rgba(15,67,56,0.45)] ring-1 ring-line/70"
                  : "bg-white ring-1 ring-line/70 lg:bg-[#F4F6F0] lg:shadow-none lg:ring-0 lg:hover:bg-[#EEF2E8]"
              }`}
            >
              {/* big faded number, only on collapsed cards */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute left-7 top-6 hidden text-6xl font-semibold tracking-tight text-ink/10 transition-opacity duration-500 lg:block ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* photo / illustration, collapses away on inactive cards */}
              <span
                className={`relative block h-52 w-full shrink-0 overflow-hidden rounded-2xl bg-brand-tint transition-[max-height,opacity,margin] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:h-60 ${
                  isActive
                    ? "lg:max-h-60 lg:opacity-100"
                    : "lg:mb-0 lg:max-h-0 lg:opacity-0"
                }`}
              >
                {s.image ? (
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="block h-28 w-28">
                      <SolutionIcon name={s.icon} />
                    </span>
                  </span>
                )}
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-strong shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>

              <span className="mt-6 block lg:mt-auto">
                <span className="block text-xl font-medium leading-snug tracking-tight text-ink xl:text-[1.4rem]">
                  {s.title}
                </span>
                {s.body && (
                  <span
                    className={`block overflow-hidden text-[15px] leading-relaxed text-ink-soft transition-[max-height,opacity,margin] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "mt-3 lg:max-h-40 lg:opacity-100"
                        : "mt-3 lg:mt-0 lg:max-h-0 lg:opacity-0"
                    }`}
                  >
                    {s.body}
                  </span>
                )}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
