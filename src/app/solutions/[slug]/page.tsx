import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section, SectionHeading, ArrowLink } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { Grainient } from "@/components/Grainient";
import { CountUp } from "@/components/motion/CountUp";
import { CTA } from "@/components/CTA";
import { ProjectCard } from "@/components/ProjectCard";
import { BorderGlow } from "@/components/BorderGlow";
import { CoverageMarquee } from "@/components/CoverageMarquee";
import { offerings, solutions, projects, opportunity } from "@/lib/content";

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

/* ---------- one icon per business-case metric on the Finance Solutions
   page, same IL-palette family as solutionIcons above ---------- */
const financialIcons: React.ReactNode[] = [
  // Energy cost reduction — falling cost bar + down arrow
  <svg viewBox="0 0 48 48" fill="none" key="cost" aria-hidden="true">
    <rect x="4" y="6" width="26" height="26" rx="6" fill={IL.pale} />
    <rect x="9" y="26" width="7" height="16" rx="2" fill={IL.dark} />
    <rect x="20.5" y="18" width="7" height="24" rx="2" fill={IL.green} />
    <rect x="32" y="10" width="7" height="32" rx="2" fill={IL.pale} />
    <path
      d="M10 12 L20 20 L27 15 L39 24"
      stroke={IL.ink}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 24 L39 24 L39 17"
      stroke={IL.ink}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // IRR & payback — upward trend
  <svg viewBox="0 0 48 48" fill="none" key="irr" aria-hidden="true">
    <rect x="4" y="6" width="26" height="26" rx="6" fill={IL.pale} />
    <circle cx="26" cy="24" r="18" fill={IL.green} />
    <path
      d="M14 30 L22 22 L27 27 L36 16"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 16 H36 V24"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Cash-flow impact — balance sheet / scale
  <svg viewBox="0 0 48 48" fill="none" key="cash" aria-hidden="true">
    <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
    <path d="M24 8 V40" stroke={IL.ink} strokeWidth="3" strokeLinecap="round" />
    <path d="M8 40 H40" stroke={IL.ink} strokeWidth="3" strokeLinecap="round" />
    <path d="M24 14 L12 14 L6 26 H18Z" fill={IL.green} />
    <path d="M24 14 L36 14 L42 26 H30Z" fill={IL.dark} />
    <circle
      cx="12"
      cy="26"
      r="6"
      fill="none"
      stroke={IL.green}
      strokeWidth="2.4"
    />
    <circle
      cx="36"
      cy="26"
      r="6"
      fill="none"
      stroke={IL.dark}
      strokeWidth="2.4"
    />
  </svg>,
  // Demand & tariff — gauge / meter
  <svg viewBox="0 0 48 48" fill="none" key="demand" aria-hidden="true">
    <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
    <circle cx="24" cy="27" r="20" fill={IL.green} />
    <path
      d="M8 32A18 18 0 0 1 40 32"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M24 27 34 16"
      stroke={IL.ink}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="27" r="4" fill={IL.dark} />
  </svg>,
  // Lifecycle value — full loop
  <svg viewBox="0 0 48 48" fill="none" key="lifecycle" aria-hidden="true">
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
  </svg>,
];

/* ---------- one icon per "what this covers" group heading, keyed by the
   exact heading text used in content.ts ---------- */
const coverageIcons: Record<string, React.ReactNode> = {
  // Core capabilities — wrench / toolkit
  "Core capabilities": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="26" height="26" rx="6" fill={IL.pale} />
      <path
        d="M30 8a9 9 0 0 0-11.8 11.8L8 30l4 4 10.2-10.2A9 9 0 0 0 34 12l-6 6-5-5Z"
        fill={IL.green}
      />
      <circle cx="12" cy="34" r="3.2" fill={IL.ink} />
    </svg>
  ),
  // What we focus on — target
  "What we focus on": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="26" height="26" rx="6" fill={IL.pale} />
      <circle cx="26" cy="24" r="18" fill={IL.green} />
      <circle cx="26" cy="24" r="11" fill="#fff" />
      <circle cx="26" cy="24" r="5" fill={IL.dark} />
      <circle cx="26" cy="24" r="1.8" fill={IL.ink} />
    </svg>
  ),
  // Scope of work — blueprint / ruler
  "Scope of work": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="26" height="26" rx="6" fill={IL.pale} />
      <rect
        x="9"
        y="12"
        width="30"
        height="24"
        rx="3"
        fill={IL.green}
        transform="rotate(-8 24 24)"
      />
      <path
        d="M14 20 H32 M14 26 H28"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        transform="rotate(-8 24 24)"
      />
      <circle cx="35" cy="14" r="4" fill={IL.ink} />
    </svg>
  ),
  // Electrical infrastructure & grid evacuation — transmission tower
  "Electrical infrastructure & grid evacuation": (
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
  // What we evaluate — magnifier over a chart
  "What we evaluate": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="26" height="26" rx="6" fill={IL.pale} />
      <rect x="9" y="24" width="6" height="12" rx="1.5" fill={IL.dark} />
      <rect x="18" y="18" width="6" height="18" rx="1.5" fill={IL.green} />
      <rect x="27" y="12" width="6" height="24" rx="1.5" fill={IL.pale} />
      <circle
        cx="34"
        cy="14"
        r="8"
        fill="none"
        stroke={IL.ink}
        strokeWidth="2.6"
      />
      <path
        d="M39.5 19.5 L44 24"
        stroke={IL.ink}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  // What we review — checklist
  "What we review": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="28" height="36" rx="4" fill={IL.pale} />
      <rect x="14" y="2" width="16" height="6" rx="2" fill={IL.dark} />
      <path
        d="M15 18 L19 22 L28 13"
        stroke={IL.green}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 29 L19 33 L28 24"
        stroke={IL.green}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="34" r="8" fill={IL.ink} />
    </svg>
  ),
};

// Placeholder photography for the "What this covers" section, one per
// offering — free-licensed stock, swap for real project photography.
const coverageImages: Record<string, string> = {
  "commercial-industrial": "/img/solutions/commercial-industrial.jpg",
  "utility-scale": "/img/solutions/utility-scale.jpg",
  "finance-solutions": "/img/solutions/finance-solutions.jpg",
  "energy-optimisation-consultant":
    "/img/solutions/energy-optimisation-consultant.jpg",
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

// Rooftop-only projects — the Commercial & Industrial proof points.
const rooftopProjects = projects.filter(
  (p) => p.tech === "Industrial Rooftop Solar" && p.location === "India",
);
// Ground-mounted projects — the Utility Scale proof points.
const groundMountProjects = projects.filter(
  (p) => p.tech === "Ground-Mounted Solar",
);

export default async function OfferingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offering = offerings.find((o) => o.slug === slug);
  if (!offering) notFound();

  const related = offering.relatedSolutions
    .map((rs) => solutions.find((s) => s.slug === rs))
    .filter((s): s is (typeof solutions)[number] => Boolean(s));

  const coverageItems = [
    ...offering.points.map((text) => ({
      text,
      icon: coverageIcons[offering.pointsHeading ?? ""],
    })),
    ...(offering.extra
      ? offering.extra.items.map((text) => ({
          text,
          icon: coverageIcons[offering.extra!.heading],
        }))
      : []),
  ];

  return (
    <>
      {/* Hero — same full-bleed photo + dark overlay treatment as the
          rest of the page's background-image sections. */}
      <section className="relative isolate overflow-hidden bg-[#15371b]">
        <Image
          src={coverageImages[slug]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[#0a1f10]/75"
        />
        <div className="container-px relative mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <RevealText
            as="h1"
            text={offering.title}
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-[58px]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {offering.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What this covers — an auto-scrolling row of cards instead of a
          dense static bullet block. Plain light section: the hero above
          already carries this offering's photo. */}
      <Section>
        <SectionHeading
          title={
            offering.extra
              ? "What this covers"
              : (offering.pointsHeading ?? "What this covers")
          }
        />
        <CoverageMarquee items={coverageItems} />
      </Section>

      {/* Commercial models — exact same treatment as the homepage's "Our
          solutions" section: dark grainient background, glow cards, 2-up
          grid, one flat icon per model. */}
      {related.length > 0 && (
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
              text="Commercial models that apply"
              className="text-3xl font-semibold tracking-tight text-white sm:text-[58px]"
            />
            <div className="mt-10 grid gap-y-10 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 lg:-mx-8">
              {related.map((s, i) => (
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
                        {s.summary}
                      </p>
                    </div>
                  </BorderGlow>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Commercial & Industrial — rooftop project proof */}
      {slug === "commercial-industrial" && rooftopProjects.length > 0 && (
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-[#26502e] sm:text-[2.5rem]">
              Recent rooftop deployments
            </h2>
            <ArrowLink href="/projects">See all projects</ArrowLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooftopProjects.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Utility Scale — ground-mount project proof */}
      {slug === "utility-scale" && groundMountProjects.length > 0 && (
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-[#26502e] sm:text-[2.5rem]">
              Ground-mounted deployments
            </h2>
            <ArrowLink href="/projects">See all projects</ArrowLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groundMountProjects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Finance Solutions — the actual numbers */}
      {slug === "finance-solutions" && (
        <div className="bg-brand-tint">
          <Section>
            <h2 className="text-3xl font-semibold tracking-tight text-[#26502e] sm:text-[2.5rem]">
              How we build the business case
            </h2>
            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
              {opportunity.financials.map((f, i) => (
                <div key={f.metric}>
                  <span className="block h-12 w-12 [&>svg]:h-full [&>svg]:w-full">
                    {financialIcons[i]}
                  </span>
                  <dt className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    {f.metric}
                  </dt>
                  <dd>
                    <CountUp
                      value={f.value}
                      className="mt-2 block text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl"
                    />
                  </dd>
                  <dd className="mt-1.5 text-xs leading-snug text-ink-faint">
                    {f.note}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <ArrowLink href="/sustainability">
                See the full business case
              </ArrowLink>
            </div>
          </Section>
        </div>
      )}

      {/* Energy Optimisation Consultant — P-ESS promo */}
      {slug === "energy-optimisation-consultant" && (
        <div className="on-dark bg-[#15371b]">
          <Section>
            <div className="rounded-lg border border-white/10 bg-[rgba(7,26,20,0.4)]">
              <div className="grid items-center gap-10 p-8 lg:grid-cols-[1fr_auto] lg:p-10">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#26502e] sm:text-3xl">
                    P-ESS, the dedicated storage practice
                  </h2>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                    Battery storage and time-of-day optimisation, modelled with
                    the same financial rigour as every Polaris system. The full
                    P-ESS practice is unveiling soon.
                  </p>
                </div>
                <div className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-lg bg-deep-navy sm:w-48">
                  <Image
                    src="/img/p-ess-teaser.jpg"
                    alt="P-ESS teaser"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <ArrowLink href="/p-ess">Learn about P-ESS</ArrowLink>
            </div>
          </Section>
        </div>
      )}

      <CTA />
    </>
  );
}
