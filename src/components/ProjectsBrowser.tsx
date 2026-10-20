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

export function ProjectsBrowser({
  commissioned,
  ongoing,
}: {
  commissioned: Project[];
  ongoing: Project[];
}) {
  const [active, setActive] = useState<FilterKey>("all");
  const current = filters.find((f) => f.key === active) ?? filters[0];

  const shown = [...commissioned, ...ongoing].filter(current.match);

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
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 70}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
