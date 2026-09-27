import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section, ArrowLink } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { CountUp } from "@/components/motion/CountUp";
import { CTA } from "@/components/CTA";
import { ProjectCard } from "@/components/ProjectCard";
import { BorderGlow } from "@/components/BorderGlow";
import { offerings, solutions, projects, opportunity } from "@/lib/content";

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

  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <RevealText
            as="h1"
            text={offering.title}
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[58px]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {offering.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What this covers */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-strong">
              {offering.pointsHeading ?? "What this covers"}
            </h2>
            <ul className="mt-6 space-y-5">
              {offering.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            {offering.extra && (
              <>
                <h2 className="mt-12 text-sm font-semibold uppercase tracking-[0.15em] text-brand-strong">
                  {offering.extra.heading}
                </h2>
                <ul className="mt-6 space-y-5">
                  {offering.extra.items.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-strong">
                Commercial models that apply
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((s) => (
                  <BorderGlow
                    key={s.slug}
                    className="on-light h-full"
                    backgroundColor="#ffffff"
                    borderRadius={8}
                    glowColor="112 55% 42%"
                    glowRadius={28}
                    glowIntensity={0.9}
                    fillOpacity={0.15}
                    colors={["#5fcf4b", "#0f4338", "#a3e635"]}
                  >
                    <div className="p-5">
                      <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {s.summary}
                      </p>
                      <ul className="mt-3 space-y-1.5 border-t border-line/70 pt-3">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="flex gap-2 text-[13px] leading-relaxed text-ink-faint"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </BorderGlow>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Commercial & Industrial — rooftop project proof */}
      {slug === "commercial-industrial" && rooftopProjects.length > 0 && (
        <div className="on-dark bg-[#15371b]">
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
        </div>
      )}

      {/* Utility Scale — ground-mount project proof */}
      {slug === "utility-scale" && groundMountProjects.length > 0 && (
        <div className="on-dark bg-[#15371b]">
          <Section>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-2xl font-semibold tracking-tight text-[#26502e] sm:text-3xl">
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
        </div>
      )}

      {/* Finance Solutions — the actual numbers */}
      {slug === "finance-solutions" && (
        <div className="on-dark bg-[#15371b]">
          <Section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#26502e] sm:text-3xl">
              How we build the business case
            </h2>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/10 pt-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
              {opportunity.financials.map((f) => (
                <div
                  key={f.metric}
                  className="lg:border-l lg:border-ink/10 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
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
            <div className="mt-8">
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
            <BorderGlow
              backgroundColor="rgba(7, 26, 20, 0.4)"
              borderRadius={8}
              glowColor="105 70% 62%"
              glowRadius={32}
              glowIntensity={0.9}
              fillOpacity={0.2}
              colors={["#5fcf4b", "#a3e635", "#2dd4bf"]}
            >
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
            </BorderGlow>
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
