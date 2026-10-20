import type { Metadata } from "next";
import Image from "next/image";
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
import { SolutionIcon } from "@/components/SolutionIcon";
import { StepsAccordion } from "@/components/StepsAccordion";
import { offerings, projects } from "@/lib/content";

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

function Chevron() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-brand-strong transition-transform duration-300 group-open:rotate-180"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Check() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default async function OfferingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offering = offerings.find((o) => o.slug === slug);
  if (!offering) notFound();

  const { scope, howItWorks, waysToPay, heroImage } = offering;
  const heroProject = heroImage.projectSlug
    ? projects.find((p) => p.slug === heroImage.projectSlug)
    : undefined;
  const scopeIsPlainList = scope.every((s) => !s.body && !s.checklist);
  const faqWithAnswers = offering.faq.filter((f) => f.a);

  return (
    <>
      {/* Hero: copy left, project photo right */}
      <section className="relative overflow-hidden bg-[#FAFBF6]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-brand-tint/70 blur-3xl"
        />
        <div className="container-px relative mx-auto grid max-w-[1760px] items-center gap-12 pb-16 pt-[calc(83px+2.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-[calc(83px+4rem)]">
          <div>
            <RevealText
              as="h1"
              text={offering.heroHeadline}
              className="block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[52px]"
            />
            <Reveal variant="up" delay={90}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                {offering.intro}
              </p>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <a
                href={offering.heroCta.href}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-hover hover:text-ink"
              >
                {offering.heroCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <Reveal variant="up" delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist shadow-[0_18px_50px_-24px_rgba(15,67,56,0.45)]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
              {heroProject && (
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 backdrop-blur sm:right-auto">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
                  <span className="text-sm leading-snug text-ink">
                    <span className="font-semibold">
                      {heroProject.capacity}
                    </span>
                    <span className="text-ink-soft">
                      {" · "}
                      {heroProject.name}
                    </span>
                  </span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <Section>
        <SectionHeading title="Outcomes" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {offering.outcomes.map((o, i) => (
            <Reveal
              key={o.title}
              variant="up"
              delay={i * 80}
              className="h-full"
            >
              <div className="h-full rounded-2xl border border-line/70 bg-paper p-7 transition-shadow duration-500 hover:shadow-[0_18px_40px_-26px_rgba(15,67,56,0.5)] lg:p-8">
                <span className="block h-16 w-16">
                  <SolutionIcon name={o.icon} />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                  {o.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {o.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Scope */}
      <div className="bg-brand-tint/40">
        <Section>
          <SectionHeading title="Scope" />
          {scopeIsPlainList ? (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {scope.map((s, i) => (
                <Reveal key={s.title} as="li" variant="up" delay={(i % 3) * 70}>
                  <div className="flex h-full items-center gap-4 rounded-2xl border border-line/70 bg-paper px-5 py-5">
                    <span className="block h-12 w-12 shrink-0">
                      <SolutionIcon name={s.icon} />
                    </span>
                    <span className="text-[15px] font-semibold leading-snug text-ink">
                      {s.title}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          ) : (
            <div
              className={`mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${
                scope.some((s) => s.checklist) ? "items-start" : ""
              }`}
            >
              {scope.map((s, i) => (
                <Reveal key={s.title} variant="up" delay={(i % 3) * 70}>
                  {s.checklist ? (
                    <details className="group rounded-2xl border border-line/70 bg-paper">
                      <summary className="flex cursor-pointer list-none items-start gap-4 p-6 [&::-webkit-details-marker]:hidden">
                        <span className="block h-14 w-14 shrink-0">
                          <SolutionIcon name={s.icon} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-lg font-semibold tracking-tight text-ink">
                            {s.title}
                          </span>
                          {s.body && (
                            <span className="mt-1 block text-[15px] leading-relaxed text-ink-soft">
                              {s.body}
                            </span>
                          )}
                          <span className="mt-3 block text-xs font-semibold uppercase tracking-wide text-brand-strong">
                            {s.checklist.length} items
                          </span>
                        </span>
                        <Chevron />
                      </summary>
                      <ul className="space-y-3 border-t border-line/70 px-6 py-5">
                        {s.checklist.map((c) => (
                          <li key={c.title} className="flex items-start gap-3">
                            <Check />
                            <span>
                              <span className="block text-[15px] font-medium text-ink">
                                {c.title}
                              </span>
                              <span className="block text-sm leading-relaxed text-ink-soft">
                                {c.body}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-line/70 bg-paper p-6">
                      <span className="block h-14 w-14 shrink-0">
                        <SolutionIcon name={s.icon} />
                      </span>
                      <span>
                        <h3 className="text-lg font-semibold tracking-tight text-ink">
                          {s.title}
                        </h3>
                        {s.body && (
                          <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                            {s.body}
                          </p>
                        )}
                      </span>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          )}
        </Section>
      </div>

      {/* How it works */}
      <Section>
        <SectionHeading title="How it works" />
        <StepsAccordion steps={howItWorks.steps} />
        {howItWorks.receive && (
          <Reveal variant="fade" delay={120}>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-ink">
                What you receive
              </span>
              {howItWorks.receive.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-medium text-brand-strong"
                >
                  <Check />
                  {r}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </Section>

      {/* Ways to pay: only offerings that define it (Finance Solutions) */}
      {waysToPay && (
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
              text="Ways to pay"
              className="text-3xl font-semibold tracking-tight text-white sm:text-[58px]"
            />

            {waysToPay.options && (
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {waysToPay.options.map((o, i) => (
                  <Reveal
                    key={o.label}
                    as="li"
                    variant="up"
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
                      <div className="relative flex flex-1 flex-col p-6 lg:p-7">
                        <span className="block h-[60px] w-[60px]">
                          <SolutionIcon name={o.icon} />
                        </span>
                        <span className="mt-5 text-[1.25rem] font-semibold leading-snug tracking-tight text-white">
                          {o.label}
                        </span>
                      </div>
                    </BorderGlow>
                  </Reveal>
                ))}
              </ul>
            )}

            {waysToPay.table && (
              <Reveal variant="fade" delay={90}>
                <div className="mt-10 overflow-x-auto rounded-xl border border-white/10 bg-[rgba(7,26,20,0.35)]">
                  <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        {waysToPay.table.columns.map((col) => (
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
                      {waysToPay.table.rows.map((row, ri) => (
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
            )}

            {waysToPay.scenarios && (
              <div className="mt-14">
                <Reveal variant="fade">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {waysToPay.scenarios.heading}
                  </h3>
                </Reveal>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {waysToPay.scenarios.items.map((sc, i) => (
                    <Reveal
                      key={sc.when}
                      variant="up"
                      delay={i * 80}
                      className="h-full"
                    >
                      <div className="flex h-full items-start gap-4 rounded-xl border border-white/10 bg-[rgba(7,26,20,0.4)] p-6">
                        <span className="block h-14 w-14 shrink-0">
                          <SolutionIcon name={sc.icon} />
                        </span>
                        <div>
                          <p className="text-[15px] leading-relaxed text-white/70">
                            {sc.when}
                          </p>
                          <p className="mt-3 flex items-start gap-2 text-lg font-semibold leading-snug text-white">
                            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand" />
                            {sc.then}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {(waysToPay.note || waysToPay.link) && (
              <Reveal variant="fade" delay={140}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {waysToPay.note && (
                    <span className="text-[15px] text-white/70">
                      {waysToPay.note}
                    </span>
                  )}
                  {waysToPay.link && (
                    <ArrowLink href={waysToPay.link.href} tone="light">
                      {waysToPay.link.label}
                    </ArrowLink>
                  )}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* FAQ, only shows questions that have an answer */}
      {faqWithAnswers.length > 0 && (
        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <SectionHeading title="FAQ" />
              <Reveal variant="fade" delay={100}>
                <span
                  aria-hidden="true"
                  className="mt-8 hidden h-28 w-28 items-center justify-center rounded-3xl bg-brand-tint text-6xl font-semibold text-brand-strong lg:flex"
                >
                  ?
                </span>
              </Reveal>
            </div>
            <div className="divide-y divide-line/70 border-y border-line/70">
              {faqWithAnswers.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold tracking-tight text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Chevron />
                  </summary>
                  <p className="pb-6 text-[15px] leading-relaxed text-ink-soft">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
