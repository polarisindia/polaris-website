import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "./ui";
import { BorderGlow } from "./BorderGlow";
import { projects } from "@/lib/content";

type Project = (typeof projects)[number];

/**
 * Listing-page project card — deliberately identical to the homepage's
 * ProjectsRail card (tech + capacity pills, text-base title, location
 * line, "See project" arrow-link). Links straight to the project's own
 * detail page instead of opening a popup — the full page gives the
 * stats/highlights the room a modal couldn't.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <BorderGlow
      className="on-light h-full"
      backgroundColor="#ffffff"
      borderRadius={8}
      glowColor="112 55% 42%"
      glowRadius={28}
      glowIntensity={0.9}
      fillOpacity={0.15}
      colors={["#5fcf4b", "#0f4338", "#a3e635"]}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-1 flex-col overflow-hidden rounded-lg"
      >
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-mist">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-7 pb-8">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand-strong">
              {project.tech}
            </span>
            <span className="inline-flex rounded-full bg-ink/[0.06] px-2.5 py-1 text-xs font-semibold text-ink">
              {project.capacity}
            </span>
          </div>

          <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm text-ink-faint">{project.location}</p>

          <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:underline">
            See project
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </BorderGlow>
  );
}
