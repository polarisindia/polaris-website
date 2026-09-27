type CoverageItem = { icon: React.ReactNode; text: string };

/**
 * Turns a long capability/coverage list into an auto-scrolling row of
 * cards instead of a dense static bullet block — same infinite-marquee
 * technique as the client-logo strip and the About page's milestones
 * (content duplicated once, track animates exactly one copy-width).
 */
export function CoverageMarquee({ items }: { items: CoverageItem[] }) {
  const loop = [...items, ...items];
  const duration = Math.max(items.length * 4.5, 24);
  return (
    <div className="marquee mt-10">
      <div
        className="marquee-track gap-5"
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((it, i) => {
          const isDup = i >= items.length;
          return (
            <div
              key={i}
              aria-hidden={isDup || undefined}
              className={`flex h-56 w-72 shrink-0 flex-col rounded-lg border border-line/70 bg-paper p-6 ${isDup ? "marquee-dup" : ""}`}
            >
              <span className="block h-14 w-14 shrink-0 [&>svg]:h-full [&>svg]:w-full">
                {it.icon}
              </span>
              <p className="mt-4 line-clamp-4 text-[15px] leading-relaxed text-ink-soft">
                {it.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
