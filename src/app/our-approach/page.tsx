import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { process as deliverySteps, advantages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach — Solar Project Delivery Process",
  description:
    "How Polaris delivers energy projects: assessment and financial modelling, engineering and procurement, construction and commissioning, then monitoring and O&M under one accountable team.",
};

const advantageIcons: React.ReactNode[] = [
  // Engineering-led approach
  <svg
    viewBox="0 0 64 64"
    fill="none"
    key="eng"
    aria-hidden="true"
    stroke="#5fcf4b"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 48h32M20 48l12-33 12 33M24 37h16" />
    <circle cx="32" cy="14" r="3" />
    <path d="M15 52h34" />
  </svg>,
  // Technology agnosticism
  <svg
    viewBox="0 0 64 64"
    fill="none"
    key="tech"
    aria-hidden="true"
    stroke="#5fcf4b"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 23l9-8 9 8-9 8-9-8Zm20 18 9-8 9 8-9 8-9-8Z" />
    <path d="M31 23h9a8 8 0 0 1 8 8v2M33 41h-9a8 8 0 0 1-8-8v-2" />
    <path d="m38 21 3 2-3 2M26 39l-3 2 3 2" />
  </svg>,
  // Proven industrial track record
  <svg
    viewBox="0 0 64 64"
    fill="none"
    key="track"
    aria-hidden="true"
    stroke="#5fcf4b"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 51V26l15-9 15 9v25H17Z" />
    <path d="M17 34h30M24 27v7m8-11v11m8-7v7M24 41h5v10m6-10h5v10" />
    <path d="m24 15 8-5 8 5" />
  </svg>,
  // Financial intelligence
  <svg
    viewBox="0 0 64 64"
    fill="none"
    key="fin"
    aria-hidden="true"
    stroke="#5fcf4b"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 52h40M17 51V40h8v11m7 0V33h8v18m7 0V25h5v26" />
    <path d="m16 31 12-10 8 5 14-15" />
    <path d="M43 11h7v7" />
  </svg>,
  // Full-lifecycle ownership
  <svg
    viewBox="0 0 64 64"
    fill="none"
    key="cycle"
    aria-hidden="true"
    stroke="#5fcf4b"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21a20 20 0 0 1 32 7M47 43a20 20 0 0 1-32-7" />
    <path d="m48 20 2 9-9-2M16 44l-2-9 9 2" />
    <circle cx="32" cy="32" r="11" />
    <path d="M32 25v8l5 3" />
  </svg>,
  // Multi-geography capability
  <svg
    viewBox="0 0 64 64"
    fill="none"
    key="geo"
    aria-hidden="true"
    stroke="#5fcf4b"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="32" cy="32" r="22" />
    <path d="M10 32h44M32 10c-10 11-10 33 0 44M32 10c10 11 10 33 0 44" />
    <path d="M17 20h30M17 44h30" />
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
          <RevealText
            as="h1"
            text="From first assessment to lasting performance"
            className="block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[58px]"
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
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-mist">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <Reveal as="span" variant="mask" className="block">
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
      <div className="bg-brand-tint">
        <Section>
          <SectionHeading title="The Polaris advantage" />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal as="article" key={a.title} delay={(i % 3) * 70}>
                <span className="block h-[60px] w-[60px] [&>svg]:h-full [&>svg]:w-full">
                  {advantageIcons[i]}
                </span>
                <h3 className="mt-5 text-[18px] font-semibold tracking-tight text-ink">
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
