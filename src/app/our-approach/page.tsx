import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { process as deliverySteps, advantages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Polaris delivers energy projects: assessment and financial modelling, engineering and procurement, construction and commissioning, then monitoring and O&M under one accountable team.",
};

const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

const advantageIcons: React.ReactNode[] = [
  // Engineering-led approach — drafting compass
  <svg viewBox="0 0 48 48" fill="none" key="eng" aria-hidden="true">
    <rect x="3" y="4" width="26" height="26" rx="6" fill={IL.pale} />
    <path d="M24 10 L36 40 H29.5 L24 25 L18.5 40 H12 Z" fill={IL.green} />
    <path
      d="M16 33 H32"
      stroke={IL.dark}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="24" cy="10" r="5.5" fill={IL.ink} />
    <circle cx="24" cy="10" r="1.8" fill="#fff" />
  </svg>,
  // Technology agnosticism — neutral overlapping marks
  <svg viewBox="0 0 48 48" fill="none" key="tech" aria-hidden="true">
    <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
    <circle cx="17" cy="24" r="12" fill={IL.green} />
    <circle cx="31" cy="24" r="12" fill={IL.dark} opacity="0.9" />
    <circle cx="24" cy="24" r="5" fill="#fff" />
  </svg>,
  // Proven industrial track record — medal
  <svg viewBox="0 0 48 48" fill="none" key="track" aria-hidden="true">
    <rect x="12" y="3" width="24" height="24" rx="6" fill={IL.pale} />
    <circle cx="24" cy="21" r="14" fill={IL.green} />
    <path d="M17 32 L13 45 L24 39 L35 45 L31 32" fill={IL.dark} />
    <path
      d="M18 21 L22 25 L31 15"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Financial intelligence — bars + trend
  <svg viewBox="0 0 48 48" fill="none" key="fin" aria-hidden="true">
    <rect x="4" y="6" width="26" height="26" rx="6" fill={IL.pale} />
    <rect x="9" y="31" width="7" height="11" rx="2" fill={IL.dark} />
    <rect x="20.5" y="23" width="7" height="19" rx="2" fill={IL.green} />
    <rect x="32" y="15" width="7" height="27" rx="2" fill={IL.green} />
    <path
      d="M10 21 L20 14 L27 18 L39 8"
      stroke={IL.ink}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="39" cy="8" r="3" fill={IL.ink} />
  </svg>,
  // Full-lifecycle ownership — loop
  <svg viewBox="0 0 48 48" fill="none" key="cycle" aria-hidden="true">
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
  // Multi-geography capability — globe
  <svg viewBox="0 0 48 48" fill="none" key="geo" aria-hidden="true">
    <rect x="4" y="4" width="24" height="24" rx="6" fill={IL.pale} />
    <circle cx="26" cy="24" r="18" fill={IL.green} />
    <path
      d="M8 24h36M26 6c6 6 6 30 0 36M26 6c-6 6-6 30 0 36"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
      opacity="0.85"
    />
    <circle cx="26" cy="24" r="4" fill={IL.ink} />
  </svg>,
];

// A fuller telling of each step than the homepage carousel's one-liner —
// this page's whole job is to explain the approach, so it gets room:
// an intro line plus the specifics that actually back the claim.
const stepDetails: { intro: string; points: string[] }[] = [
  {
    intro:
      "Every project starts with how the facility actually uses energy. We review load, tariff, site constraints, structural condition and operating priorities, then compare technical options, commercial models and expected returns before deciding the project structure.",
    points: [
      "Energy & site assessment: load, tariff, site constraints, structural condition and operating priorities",
      "Feasibility & financial modelling: technical options, commercial models and expected returns compared",
      "A clear techno-commercial comparison of the available options before capital is committed",
    ],
  },
  {
    intro:
      "Structural, electrical and energy-yield design is developed around actual site conditions, and technology is chosen for the project, not for a brand. Project decisions are supported by design reviews, simulation, structural analysis and performance modelling.",
    points: [
      "Structural, electrical and energy-yield design built around actual site conditions",
      "Tier-1 technology chosen on project fit, performance, warranty, service support and long-term value",
      "Engineering aligned with applicable Indian and internationally recognised codes and practices",
    ],
  },
  {
    intro:
      "Execution is managed with clear project controls, safety systems and QA/QC, including coordination around live operations where required. The same team then tests the protection systems, electrical systems, generation and grid interface, and closes out documentation properly.",
    points: [
      "Project controls, safety systems, QA/QC and coordination around live operations where required",
      "Protection systems, electrical systems, generation and the grid interface tested before handover",
      "Documented handover and commissioning records",
    ],
  },
  {
    intro:
      "For us, handover is not the end of the project; it is the start of the operating life of the asset. SCADA monitoring, preventive maintenance and ongoing analysis keep the plant performing, with one accountable point of responsibility for long-term support.",
    points: [
      "SCADA monitoring of generation, alarms, equipment health and operating performance",
      "Preventive maintenance, issue response and ongoing analysis",
      "Performance optimisation and long-term support after commissioning",
    ],
  },
];

export default function OurApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <Reveal variant="fade">
            <span className="pill">Our approach</span>
          </Reveal>
          <RevealText
            as="h1"
            text="One accountable team, from first assessment to long-term performance."
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[3.25rem]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Every Polaris project follows the same four-stage discipline:
              assessed and modelled before it&apos;s engineered, engineered
              before it&apos;s built, and supported after commissioning by the
              same team. One point of responsibility from feasibility to
              long-term support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The four stages — alternating image + text, each with room to
          actually explain itself instead of a compressed caption. */}
      <Section className="space-y-24 lg:space-y-32">
        {deliverySteps.map((s, i) => {
          const detail = stepDetails[i];
          const imageFirst = i % 2 === 0;
          return (
            <div
              key={s.step}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <Reveal
                variant="scale"
                className={imageFirst ? "lg:order-1" : "lg:order-2"}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-mist">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <Reveal variant="fade">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">
                    {s.step}
                  </span>
                </Reveal>
                <Reveal as="span" variant="mask" className="mt-3 block">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#26502e] sm:text-3xl">
                    {s.title}
                  </h2>
                </Reveal>
                <Reveal variant="up" delay={60}>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                    {detail.intro}
                  </p>
                </Reveal>
                <Reveal variant="up" delay={110}>
                  <ul className="mt-6 space-y-3">
                    {detail.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          );
        })}
      </Section>

      {/* Advantage */}
      <div className="on-dark bg-[#15371b]">
        <Section>
          <SectionHeading title="The Polaris advantage" />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal as="article" key={a.title} delay={(i % 3) * 70}>
                <span className="block h-12 w-12 [&>svg]:h-full [&>svg]:w-full">
                  {advantageIcons[i]}
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                  {a.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {a.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      <CTA />
    </>
  );
}
