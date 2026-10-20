"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import type { projects as allProjects } from "@/lib/content";

type Project = (typeof allProjects)[number];

// Commercial = the rooftop C&I plants; Utility = the ground-mounted plants.
const filters = [
  { key: "all", label: "All", match: () => true },
  {
    key: "commercial",
    label: "Commercial",
    match: (p: Project) => p.tech === "Industrial Rooftop Solar",
  },
  {
    key: "utility",
    label: "Utility",
    match: (p: Project) => p.tech === "Ground-Mounted Solar",
  },
] as const;

type FilterKey = (typeof filters)[number]["key"];

const heading =
  "text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong";

export function ProjectsBrowser({
  commissioned,
  ongoing,
}: {
  commissioned: Project[];
  ongoing: Project[];
}) {
  const [active, setActive] = useState<FilterKey>("all");
  const current = filters.find((f) => f.key === active) ?? filters[0];

  const shownCommissioned = commissioned.filter(current.match);
  const shownOngoing = ongoing.filter(current.match);
  const countFor = (match: (p: Project) => boolean) =>
    [...commissioned, ...ongoing].filter(match).length;

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects"
        className="flex flex-wrap gap-2.5"
      >
        {filters.map((f) => {
          const on = f.key === active;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f.key)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-semibold transition-colors duration-300 ${
                on
                  ? "border-ink bg-ink text-white"
                  : "border-ink/15 bg-paper text-ink-soft hover:border-ink/40 hover:text-ink"
              }`}
            >
              {f.label}
              <span
                className={`text-xs font-medium ${on ? "text-white/60" : "text-ink-faint"}`}
              >
                {countFor(f.match)}
              </span>
            </button>
          );
        })}
      </div>

      {shownCommissioned.length > 0 && (
        <>
          <h2 className={`mt-12 ${heading}`}>Commissioned</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shownCommissioned.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </>
      )}

      {shownOngoing.length > 0 && (
        <>
          <h2 className={`mt-20 ${heading}`}>Ongoing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shownOngoing.map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </>
      )}
    </>
  );
}
