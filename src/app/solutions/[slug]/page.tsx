import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Section,
  SectionHeading,
  ArrowLink,
  ArrowRight,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { Grainient } from "@/components/Grainient";
import { BorderGlow } from "@/components/BorderGlow";
import { CoverageMarquee } from "@/components/CoverageMarquee";
import { offerings } from "@/lib/content";

/* ---------- flat illustrations, same family/palette as the homepage
   "Our solutions" icons, one per commercial-model slug ---------- */
const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

const solutionIcons: Record<string, React.ReactNode> = {
  // CAPEX / asset ownership — a deed/coin stack
  capex: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="26" height="26" rx="6" fill={IL.pale} />
      <ellipse cx="26" cy="34" rx="14" ry="5" fill={IL.dark} />
      <ellipse cx="26" cy="28" rx="14" ry="5" fill={IL.green} />
      <ellipse cx="26" cy="22" rx="14" ry="5" fill={IL.pale} />
      <path
        d="M26 14v8M22 18h8"
        stroke={IL.ink}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  // OPEX / RESCO — recurring payment cycle
  opex: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="18" y="3" width="24" height="24" rx="7" fill={IL.pale} />
      <circle
        cx="22"
        cy="26"
        r="17"
        fill="none"
        stroke={IL.green}
        strokeWidth="7"
        strokeDasharray="82 20"
        strokeLinecap="round"
        transform="rotate(20 22 26)"
      />
      <path d="M22 9 L30 13 L22 17Z" fill={IL.dark} />
      <circle cx="22" cy="26" r="3.5" fill={IL.ink} />
    </svg>
  ),
  // Open Access / Captive — grid / transmission tower
  "open-access": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
      <path
        d="M24 6 L36 42 M24 6 L12 42 M17 24 H31 M14 34 H34"
        stroke={IL.green}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="6" r="4" fill={IL.ink} />
    </svg>
  ),
  // Group Captive — partnership, two linked marks
  "group-captive": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="24" height="24" rx="6" fill={IL.pale} />
      <circle cx="18" cy="24" r="12" fill={IL.green} />
      <circle cx="32" cy="24" r="12" fill={IL.dark} opacity="0.9" />
      <circle cx="25" cy="24" r="5" fill="#fff" />
    </svg>
  ),
  // Lease-based models — calendar / instalments
  lease: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="36" height="32" rx="6" fill={IL.pale} />
      <rect x="6" y="16" width="36" height="9" fill={IL.green} />
      <circle cx="15" cy="33" r="3" fill={IL.dark} />
      <circle cx="24" cy="33" r="3" fill={IL.dark} />
      <circle cx="33" cy="33" r="3" fill={IL.dark} />
      <path
        d="M14 5v8M34 5v8"
        stroke={IL.ink}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  // BESS & energy optimisation — battery
  bess: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="32" height="24" rx="5" fill={IL.pale} />
      <rect x="40" y="20" width="4" height="8" rx="1.5" fill={IL.dark} />
      <rect x="10" y="16" width="24" height="16" rx="2.5" fill={IL.green} />
      <path d="M24 18 L18 26 H23 L21 30 L28 22 H23Z" fill={IL.ink} />
    </svg>
  ),
  // End-to-end EPC — full lifecycle loop
  epc: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="22" height="22" rx="7" fill={IL.pale} />
      <circle
        cx="27"
        cy="27"
        r="17"
        fill="none"
        stroke={IL.green}
        strokeWidth="7"
        strokeDasharray="80 20"
        strokeLinecap="round"
        transform="rotate(-45 27 27)"
      />
      <path d="M27 27 L36 20 L38 29Z" fill={IL.dark} />
      <circle cx="27" cy="27" r="4" fill={IL.ink} />
    </svg>
  ),
  // Project finance facilitation — advisory / handshake
  advisory: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="26" height="26" rx="6" fill={IL.pale} />
      <circle cx="26" cy="24" r="18" fill={IL.green} />
      <path
        d="M15 26 L21 20 L25 24 L33 16"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="33" cy="16" r="3.2" fill={IL.ink} />
    </svg>
  ),
};

/* ---------- one icon per "what this covers" group heading, keyed by the
   exact heading text used in content.ts ---------- */
// Outline line-icon style, matching "The Polaris advantage" icon set on
// the Our Approach page (stroke-only, no fill, brand green).
const coverageLineIconProps = {
  viewBox: "0 0 64 64",
  fill: "none",
  "aria-hidden": true,
  stroke: "#5fcf4b",
  strokeWidth: 2.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const coverageIcons: Record<string, React.ReactNode> = {
  // Commercial & Industrial "what we deliver" — wrench
  "One partner for the whole energy system": (
    <svg {...coverageLineIconProps}>
      <path d="M46 18a10 10 0 0 1-13 13L18 46l-4-4 15-15a10 10 0 0 1 13-13l-6 6 4 4 6-6Z" />
    </svg>
  ),
  // Commercial & Industrial "engineering standards" — target
  "Engineered for 25 years, not for the handover": (
    <svg {...coverageLineIconProps}>
      <circle cx="32" cy="32" r="18" />
      <circle cx="32" cy="32" r="10" />
      <circle cx="32" cy="32" r="2" />
    </svg>
  ),
  // Utility Scale "what we deliver" — ruler
  "Full EPC scope, one point of responsibility": (
    <svg {...coverageLineIconProps}>
      <rect
        x="8"
        y="26"
        width="48"
        height="12"
        rx="2"
        transform="rotate(-15 32 32)"
      />
      <path
        d="M14 24l2 4M22 22l2 4M30 20l2 4M38 18l2 4M46 16l2 4"
        transform="rotate(-15 32 32)"
      />
    </svg>
  ),
  // Utility Scale "engineering standards" — transmission tower
  "Engineering standards": (
    <svg {...coverageLineIconProps}>
      <path d="M32 8 44 56M32 8 20 56M22 30h20M17 44h30" />
      <circle cx="32" cy="8" r="3" />
    </svg>
  ),
  // Finance Solutions "what we deliver" — magnifier over a bar chart
  "A business case your CFO can sign off": (
    <svg {...coverageLineIconProps}>
      <path d="M12 52V38h6v14M24 52V28h6v24M36 52V18h6v34" />
      <circle cx="46" cy="16" r="8" />
      <path d="m52 22 5 5" />
    </svg>
  ),
  // Energy Optimisation "what we review" — checklist
  "A full picture of your energy use": (
    <svg {...coverageLineIconProps}>
      <rect x="14" y="10" width="36" height="44" rx="4" />
      <path d="M22 24l4 4 8-9M22 38l4 4 8-9" />
      <path d="M38 24h6M38 38h6" />
    </svg>
  ),
  // Finance Solutions "why Polaris" — shield with checkmark
  "Why Polaris": (
    <svg {...coverageLineIconProps}>
      <path d="M32 8 54 16v16c0 16-10 26-22 32-12-6-22-16-22-32V16Z" />
      <path d="M22 32l7 7 15-15" />
    </svg>
  ),
  // Energy Optimisation "engagement models" — branching paths
  "Start with advice, go as far as you need": (
    <svg {...coverageLineIconProps}>
      <circle cx="14" cy="32" r="6" />
      <path d="M20 32h8M28 32c0-8 8-14 16-14M28 32c0 8 8 14 16 14" />
      <circle cx="48" cy="18" r="6" />
      <circle cx="48" cy="46" r="6" />
    </svg>
  ),
};

export function generateStaticParams() {
  return offerings.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const offering = offerings.find((o) => o.slug === slug);
  if (!offering) return {};
  return { title: offering.title, description: offering.summary };
}

export default async function OfferingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offering = offerings.find((o) => o.slug === slug);
  if (!offering) notFound();

  const deliverItems = offering.points.map((p) => ({
    ...p,
    icon: coverageIcons[offering.pointsHeading ?? ""],
  }));
  const standardsItems = offering.extra
    ? offering.extra.items.map((p) => ({
        ...p,
        icon: coverageIcons[offering.extra!.heading],
      }))
    : [];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <RevealText
            as="h1"
            text={offering.heroHeadline}
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[58px]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {offering.intro}
            </p>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={offering.heroCtas[0].href}
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-hover hover:text-ink"
              >
                {offering.heroCtas[0].label}
              </a>
              <ArrowLink href={offering.heroCtas[1].href}>
                {offering.heroCtas[1].label}
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The challenge */}
      <Section>
        <SectionHeading title={offering.challenge.heading} />
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {offering.challenge.items.map((item, i) => (
            <Reveal key={item.title} variant="up" delay={i * 80}>
              <div className="flex gap-4">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What we deliver — the offering's own heading, an auto-scrolling
          row of cards instead of a dense static bullet block. */}
      <Section>
        <SectionHeading title={offering.pointsHeading ?? "What we deliver"} />
        <CoverageMarquee items={deliverItems} />
      </Section>

      {/* Commercial models — dark grainient background, either a glow-card
          grid (items) or a comparison table (table), per the brief. Only
          rendered when the offering defines one (not every offering has
          this section in the brief). */}
      {offering.commercialModels && (
        <section className="relative isolate overflow-hidden bg-[#15371b]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <Grainient
              color1="#0e3b16"
              color2="#065d40"
              color3="#053726"
              timeSpeed={1.8}
              colorBalance={0.0}
              warpStrength={1.0}
              warpFrequency={5.0}
              warpSpeed={2.0}
              warpAmplitude={50.0}
              blendAngle={0.0}
              blendSoftness={0.05}
              rotationAmount={500.0}
              noiseScale={2.0}
              grainAmount={0.1}
              grainScale={2.0}
              grainAnimated={false}
              contrast={1.5}
              gamma={1.0}
              saturation={1.0}
              centerX={0.0}
              centerY={0.0}
              zoom={0.9}
            />
          </div>
          <div className="container-px relative mx-auto max-w-[1760px] py-20 lg:py-28">
            <RevealText
              text={offering.commercialModels.heading}
              className="text-3xl font-semibold tracking-tight text-white sm:text-[58px]"
            />

            {offering.commercialModels?.table ? (
              <Reveal variant="fade" delay={90}>
                <div className="mt-10 overflow-x-auto rounded-lg border border-white/10">
                  <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        {offering.commercialModels.table.columns.map((col) => (
                          <th
                            key={col}
                            className="whitespace-nowrap px-5 py-4 font-semibold text-white/60"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {offering.commercialModels.table.rows.map((row, ri) => (
                        <tr
                          key={row[0]}
                          className={
                            ri > 0 ? "border-t border-white/10" : undefined
                          }
                        >
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className={`px-5 py-4 align-top ${
                                ci === 0
                                  ? "font-semibold text-white"
                                  : "text-white/70"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            ) : (
              <div className="mt-10 grid gap-y-10 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 lg:-mx-8">
                {offering.commercialModels.items!.map((s, i) => (
                  <Reveal
                    as="article"
                    key={s.slug}
                    delay={(i % 4) * 70}
                    className="h-full"
                  >
                    <BorderGlow
                      className="h-full"
                      backgroundColor="rgba(7, 26, 20, 0.4)"
                      borderRadius={12}
                      glowColor="105 70% 62%"
                      glowRadius={32}
                      glowIntensity={0.9}
                      fillOpacity={0.2}
                      colors={["#5fcf4b", "#a3e635", "#2dd4bf"]}
                    >
                      <div className="relative flex flex-1 flex-col p-5 sm:p-6 lg:p-8">
                        <span className="block h-[70px] w-[70px] [&>svg]:h-full [&>svg]:w-full">
                          {solutionIcons[s.slug]}
                        </span>
                        <h3 className="mt-6 text-[1.4rem] font-semibold tracking-tight text-white">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-[1.12rem] leading-relaxed text-white/70">
                          {s.body}
                        </p>
                      </div>
                    </BorderGlow>
                  </Reveal>
                ))}
              </div>
            )}

            {offering.commercialModels?.link && (
              <Reveal variant="fade" delay={280}>
                <div className="mt-10">
                  <ArrowLink
                    href={offering.commercialModels.link.href}
                    tone="light"
                  >
                    {offering.commercialModels.link.label}
                  </ArrowLink>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* How we deliver — the per-offering process */}
      <div className="bg-brand-tint/40">
        <Section>
          <SectionHeading title={offering.howWeDeliver.heading} />
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {offering.howWeDeliver.steps.map((step, i) => (
              <Reveal key={step.title} variant="up" delay={i * 90}>
                <span className="block text-sm font-semibold text-brand-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* Engineering standards / why Polaris / engagement models — the
          offering's own "extra" heading, its own separate marquee. */}
      {offering.extra && (
        <Section>
          <SectionHeading title={offering.extra.heading} />
          <CoverageMarquee items={standardsItems} />
        </Section>
      )}

      {/* A second standalone bullet section, when the offering has one
          (e.g. Energy Optimisation's separate "Why Polaris" block). */}
      {offering.extra2 && (
        <Section>
          <SectionHeading title={offering.extra2.heading} />
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {offering.extra2.items.map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 80}>
                <h3 className="text-base font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Outcomes — placeholder figures until real project data lands */}
      {offering.outcomes && (
        <div className="bg-brand-tint">
          <Section>
            <SectionHeading title={offering.outcomes.heading} />
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
              {offering.outcomes.stats.map((stat, i) => (
                <Reveal key={stat.label} variant="up" delay={i * 80}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-[#26502e] sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-2 text-sm leading-snug text-ink-soft">
                    {stat.label}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </Section>
        </div>
      )}

      {/* Offering-specific CTA, same visual treatment as the sitewide CTA */}
      <section className="relative overflow-hidden bg-[#15371b]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <Grainient
            color1="#0e3b16"
            color2="#065d40"
            color3="#053726"
            timeSpeed={1.8}
            colorBalance={0.0}
            warpStrength={1.0}
            warpFrequency={5.0}
            warpSpeed={2.0}
            warpAmplitude={50.0}
            blendAngle={0.0}
            blendSoftness={0.05}
            rotationAmount={500.0}
            noiseScale={2.0}
            grainAmount={0.1}
            grainScale={2.0}
            grainAnimated={false}
            contrast={1.5}
            gamma={1.0}
            saturation={1.0}
            centerX={0.0}
            centerY={0.0}
            zoom={0.9}
          />
        </div>
        <div className="container-px relative mx-auto max-w-[1760px] py-14 lg:py-20">
          <div className="flex flex-col items-center gap-8 text-center">
            <Reveal as="span" variant="mask" className="block">
              <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-[3.25rem]">
                {offering.ctaBlock.heading}
              </h2>
            </Reveal>
            <Reveal variant="fade" delay={60}>
              <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-white/70">
                {offering.ctaBlock.body}
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <a
                href={offering.ctaBlock.cta.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-hover"
              >
                {offering.ctaBlock.cta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
            <Reveal variant="fade" delay={140}>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/50">
                <span>Related:</span>
                {offering.relatedOfferingLinks.map((link, i) => (
                  <span key={link.href} className="flex items-center gap-3">
                    {i > 0 && <span aria-hidden="true">·</span>}
                    <a
                      href={link.href}
                      className="text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
