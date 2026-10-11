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
import { offerings } from "@/lib/content";

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

  const { scope, howItWorks, waysToPay } = offering;
  const scopeIsPlainList = scope.every((s) => !s.body && !s.checklist);
  const faqWithAnswers = offering.faq.filter((f) => f.a);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <RevealText
            as="h1"
            text={offering.heroHeadline}
            className="mt-6 block max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[58px]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
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
      </section>

      {/* Outcomes */}
      <Section>
        <SectionHeading title="Outcomes" />
        <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {offering.outcomes.map((o, i) => (
            <Reveal key={o.title} variant="up" delay={i * 80}>
              <span className="block h-1 w-10 rounded-full bg-brand" />
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                {o.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {o.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Scope */}
      <div className="bg-brand-tint/40">
        <Section>
          <SectionHeading title="Scope" />
          {scopeIsPlainList ? (
            <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {scope.map((s, i) => (
                <Reveal key={s.title} as="li" variant="up" delay={i * 60}>
                  <div className="flex items-start gap-3 rounded-lg border border-line/70 bg-paper px-5 py-4">
                    <Check />
                    <span className="text-[15px] font-medium leading-snug text-ink">
                      {s.title}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          ) : (
            <div className="mt-10 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {scope.map((s, i) => (
                <Reveal key={s.title} variant="up" delay={(i % 3) * 70}>
                  {s.checklist ? (
                    <details className="group rounded-lg border border-line/70 bg-paper">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                        <span>
                          <span className="block text-lg font-semibold tracking-tight text-ink">
                            {s.title}
                          </span>
                          {s.body && (
                            <span className="mt-1.5 block text-[15px] leading-relaxed text-ink-soft">
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
                    <div className="h-full rounded-lg border border-line/70 bg-paper p-6">
                      <h3 className="text-lg font-semibold tracking-tight text-ink">
                        {s.title}
                      </h3>
                      {s.body && (
                        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                          {s.body}
                        </p>
                      )}
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
        <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.title} as="li" variant="up" delay={i * 90}>
              <span className="block text-sm font-semibold text-brand-strong">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink">
                {step.title}
              </h3>
              {step.body && (
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              )}
            </Reveal>
          ))}
        </ol>
        {howItWorks.receive && (
          <Reveal variant="fade" delay={120}>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-ink">
                What you receive
              </span>
              {howItWorks.receive.map((r) => (
                <span
                  key={r}
                  className="rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-medium text-brand-strong"
                >
                  {r}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </Section>

      {/* Ways to pay */}
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
            <Reveal variant="up" delay={80}>
              <ul className="mt-10 flex flex-wrap gap-3">
                {waysToPay.options.map((o) => (
                  <li
                    key={o}
                    className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[15px] font-medium text-white"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {waysToPay.table && (
            <Reveal variant="fade" delay={90}>
              <div className="mt-10 overflow-x-auto rounded-lg border border-white/10">
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
                  <Reveal key={sc.when} variant="up" delay={i * 80}>
                    <div className="h-full rounded-lg border border-white/10 bg-[rgba(7,26,20,0.4)] p-6">
                      <p className="text-[15px] leading-relaxed text-white/70">
                        {sc.when}
                      </p>
                      <p className="mt-4 flex items-start gap-2 text-lg font-semibold leading-snug text-white">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand" />
                        {sc.then}
                      </p>
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

      {/* FAQ — only shows questions that have an answer */}
      {faqWithAnswers.length > 0 && (
        <Section>
          <SectionHeading title="FAQ" />
          <div className="mt-10 max-w-3xl divide-y divide-line/70 border-y border-line/70">
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
        </Section>
      )}
    </>
  );
}
