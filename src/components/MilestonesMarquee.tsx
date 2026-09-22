type Milestone = { year: string; title: string; text: string };

/**
 * Horizontal, always-moving timeline — reuses the same infinite marquee
 * technique as the client-logo strip (content duplicated once, track
 * animates exactly one copy-width so the loop is seamless). A shared line
 * with a dot per milestone runs the length of the track; hovering pauses it
 * so a visitor can read. The duplicate copy is marked `marquee-dup` and
 * hidden under reduced motion (see globals.css), so that fallback shows
 * each milestone once, not twice.
 */
export function MilestonesMarquee({ milestones }: { milestones: Milestone[] }) {
  const loop = [...milestones, ...milestones];
  return (
    <div className="marquee mt-14">
      <div
        className="marquee-track relative gap-14 py-2"
        style={{ animationDuration: "56s", alignItems: "flex-start" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-2 h-px bg-white/15"
        />
        {loop.map((m, i) => {
          const isDup = i >= milestones.length;
          return (
            <div
              key={i}
              aria-hidden={isDup || undefined}
              className={`relative w-64 shrink-0 pt-9 lg:w-72 ${isDup ? "marquee-dup" : ""}`}
            >
              <span className="absolute left-0 top-0 h-4 w-4 rounded-full border-2 border-brand bg-[#15371b]" />
              <div className="text-lg font-semibold tracking-tight text-brand-strong">
                {m.year}
                <span className="text-ink"> · {m.title}</span>
              </div>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                {m.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
