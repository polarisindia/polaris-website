import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { CountUp } from "@/components/motion/CountUp";
import { process as deliverySteps, glance } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Polaris delivers energy projects: assessment and financial modelling, engineering and procurement, construction and commissioning, then monitoring and O&M under one accountable team.",
};

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

      {/* By the numbers */}
      <div className="on-dark bg-[#15371b]">
        <Section>
          <Reveal variant="fade">
            <span className="pill">The results</span>
          </Reveal>
          <RevealText
            text="This is what the approach has delivered."
            className="mt-5 block max-w-2xl text-3xl font-semibold tracking-tight text-[#26502e] sm:text-[2.5rem]"
          />
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {glance.map((it) => (
              <div key={it.label}>
                <dt>
                  <CountUp
                    value={it.value}
                    className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
                  />
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-ink-faint">
                  {it.label}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>

      <CTA />
    </>
  );
}
