import { Reveal } from "./Reveal";

type Milestone = { year: string; title: string; text: string };

// Six points tracing a gentle rising curve — the shape reads as growth, in
// keeping with the roadmap-style references this was asked to match.
// Coordinates are in the SVG's own 1240×460 space; every label below is
// positioned from the same numbers as a percentage, so it stays locked to
// its point at any container width.
const VB_W = 1240;
const VB_H = 460;
const POINTS = [
  { x: 60, y: 360 },
  { x: 284, y: 316 },
  { x: 508, y: 262 },
  { x: 732, y: 204 },
  { x: 956, y: 158 },
  { x: 1180, y: 110 },
];

// Smooth cubic segment between each pair of points, control points pulled
// to the horizontal midpoint — the standard trick for a flowing line
// through a set of points without it kinking at each one.
const PATH = POINTS.slice(1)
  .map((p, i) => {
    const prev = POINTS[i];
    const midX = (prev.x + p.x) / 2;
    return `C${midX},${prev.y} ${midX},${p.y} ${p.x},${p.y}`;
  })
  .join(" ");
const PATH_D = `M${POINTS[0].x},${POINTS[0].y} ${PATH}`;

/**
 * Desktop-only (lg+) curved-road timeline: a rising line with a numbered
 * marker per milestone and its year/title/text set above or below the line,
 * alternating so nothing collides with the curve. Below lg, `MilestonesGrid`
 * carries the same data as a plain stacked list — the curve's hand-tuned
 * label positions don't survive a much narrower viewport.
 */
export function MilestonesTimeline({
  milestones,
}: {
  milestones: Milestone[];
}) {
  return (
    <div
      className="relative mt-4 hidden w-full lg:block"
      style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
    >
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={PATH_D}
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.12"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d={PATH_D}
          fill="none"
          stroke="#5fcf4b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {POINTS.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r="15"
              fill="#15371b"
              stroke="#5fcf4b"
              strokeWidth="2.5"
            />
            <text
              x={p.x}
              y={p.y}
              fill="#ffffff"
              fontSize="13"
              fontWeight="600"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>

      {milestones.map((m, i) => {
        const p = POINTS[i];
        const above = i % 2 === 0;
        const leftPct = `${(p.x / VB_W) * 100}%`;
        const topPct = (p.y / VB_H) * 100;
        const edge =
          i === 0 ? "first" : i === milestones.length - 1 ? "last" : "mid";
        return (
          // Reveal manages its own inline `style` (for the fade/slide
          // animation), so the absolute positioning has to live on a plain
          // wrapper around it rather than on Reveal itself.
          <div
            key={m.year}
            className="absolute w-[210px]"
            style={{
              left: leftPct,
              top: above
                ? `calc(${topPct}% - 30px)`
                : `calc(${topPct}% + 26px)`,
              transform: `${
                edge === "first"
                  ? "translateX(0)"
                  : edge === "last"
                    ? "translateX(-100%)"
                    : "translateX(-50%)"
              } ${above ? "translateY(-100%)" : ""}`,
              textAlign:
                edge === "first" ? "left" : edge === "last" ? "right" : "left",
            }}
          >
            <Reveal variant="up" delay={i * 60}>
              <div className="text-[15px] font-semibold tracking-tight text-brand-strong">
                {m.year}
                <span className="text-ink"> · {m.title}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {m.text}
              </p>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}
