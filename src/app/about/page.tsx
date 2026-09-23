import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { FounderCard } from "@/components/FounderCard";
import { MilestonesMarquee } from "@/components/MilestonesMarquee";
import { Grainient } from "@/components/Grainient";
import { BorderGlow } from "@/components/BorderGlow";
import {
  company,
  milestones,
  values,
  philosophy,
  founders,
  leadership,
  team,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Polaris Renewable Solutions was founded in 2015 and is headquartered in Nashik, Maharashtra, delivering renewable energy projects for commercial, industrial and utility-scale customers across India and Morocco.",
};

/* ---------- flat illustrations, same family as the homepage icons ---------- */

const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

const valueIcons: React.ReactNode[] = [
  // Our purpose — target
  <svg viewBox="0 0 48 48" fill="none" key="purpose" aria-hidden="true">
    <rect x="3" y="4" width="26" height="26" rx="6" fill={IL.pale} />
    <circle cx="26" cy="24" r="18" fill={IL.green} />
    <circle cx="26" cy="24" r="11" fill="#fff" />
    <circle cx="26" cy="24" r="5" fill={IL.dark} />
    <circle cx="26" cy="24" r="1.8" fill={IL.ink} />
  </svg>,
  // Our mission — forward arrow
  <svg viewBox="0 0 48 48" fill="none" key="mission" aria-hidden="true">
    <rect x="4" y="8" width="26" height="26" rx="6" fill={IL.pale} />
    <path d="M8 40 L40 8 L30 40 L24 28 L8 40Z" fill={IL.green} />
    <path
      d="M24 28 L40 8"
      stroke={IL.dark}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="40" cy="8" r="4" fill={IL.ink} />
  </svg>,
  // Our vision — eye
  <svg viewBox="0 0 48 48" fill="none" key="vision" aria-hidden="true">
    <rect x="11" y="3" width="26" height="26" rx="6" fill={IL.pale} />
    <path
      d="M4 24C4 24 13 10 24 10C35 10 44 24 44 24C44 24 35 38 24 38C13 38 4 24 4 24Z"
      fill={IL.green}
    />
    <circle cx="24" cy="24" r="9" fill={IL.dark} />
    <circle cx="24" cy="24" r="4" fill={IL.ink} />
    <circle cx="21" cy="21" r="2" fill="#fff" />
  </svg>,
];

// Our philosophy — bulb + leaf, echoing the Polaris mark. Its own dedicated
// section further down, not part of the valueIcons/values grid above.
const philosophyIcon = (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="12" y="3" width="26" height="26" rx="6" fill={IL.pale} />
    <circle cx="24" cy="20" r="16" fill={IL.green} />
    <path d="M24 12 C16 16 16 26 24 32 C32 26 32 16 24 12Z" fill="#fff" />
    <path d="M24 12 V32" stroke={IL.green} strokeWidth="2" />
    <path
      d="M17 38 h14 M19 42 h10 M21 46 h6"
      stroke={IL.dark}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default function AboutPage() {
  return (
    <>
      {/* Hero — headline and the founders' note run side by side rather
          than stacked as one long vertical block, so the copy doesn't read
          as a dense wall of text. */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
            <RevealText
              as="h1"
              text="Engineering solutions around how you operate."
              className="block text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[3.25rem]"
            />
            <Reveal variant="up" delay={90}>
              <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  When we started Polaris in {company.founded}, we were working
                  around a straightforward idea: businesses should have more
                  control over what they pay for power. Industrial customers
                  were dealing with rising tariffs, reliability issues and large
                  capital decisions, often without one partner looking at the
                  technical and financial picture together.
                </p>
                <p>
                  That is the gap we set out to address. We built Polaris as an
                  engineering-led company, but with an equally strong focus on
                  commercial outcomes. A solar plant has to generate as
                  designed, but it also has to justify the investment behind it.
                </p>
                <p>
                  Today, our work covers Commercial &amp; Industrial solar,
                  utility-scale projects, BESS, electrical infrastructure,
                  project finance support and energy optimisation. Our expansion
                  into Morocco has also given us experience across a wider range
                  of project conditions, standards and markets.
                </p>
                <p>
                  As we grow, our priorities remain simple: sound engineering,
                  practical commercial thinking, safe execution and long-term
                  accountability.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Milestones — a horizontal timeline, auto-scrolling (the
          client-logo marquee technique) instead of needing a manual swipe
          or arrows, so every milestone passes by on its own. Background is
          the same drifting Grainient gradient as the homepage's "Clean
          energy, lasting impact." section, not a static pattern. */}
      <div className="on-dark relative overflow-hidden bg-[#15371b]">
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

        <Section className="relative">
          <SectionHeading title="Our journey" />
          <MilestonesMarquee milestones={milestones} />
        </Section>
      </div>

      {/* Values */}
      <Section>
        <SectionHeading title="What we hold onto" />
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal
              as="article"
              key={v.title}
              delay={(i % 3) * 70}
              className="h-full"
            >
              <BorderGlow
                className="on-light card-no-shadow h-full"
                backgroundColor="#ffffff"
                borderRadius={8}
                glowColor="112 55% 42%"
                glowRadius={28}
                glowIntensity={0.9}
                fillOpacity={0.15}
                colors={["#5fcf4b", "#0f4338", "#a3e635"]}
              >
                <div className="p-6">
                  <span className="block h-14 w-14 [&>svg]:h-full [&>svg]:w-full">
                    {valueIcons[i]}
                  </span>
                  <h3 className="mt-6 text-[1.3rem] font-semibold tracking-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[1.09rem] leading-relaxed text-ink-soft">
                    {v.body}
                  </p>
                </div>
              </BorderGlow>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Philosophy — its own dedicated section, not grouped with the
          values above. Backed by a photo of a rooftop solar installation,
          with a dark overlay so the white text stays legible over it. */}
      <div className="relative isolate overflow-hidden bg-[#15371b]">
        <Image
          src="/img/energy-asset-bg.jpg"
          alt="Aerial view of an industrial facility with a rooftop solar array."
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[#0a1f10]/75"
        />
        <Section className="relative flex flex-col items-center text-center">
          <Reveal variant="fade">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Philosophy
            </p>
          </Reveal>
          <Reveal variant="scale" delay={40}>
            <span className="mt-6 block h-16 w-16 [&>svg]:h-full [&>svg]:w-full">
              {philosophyIcon}
            </span>
          </Reveal>
          <RevealText
            as="h2"
            text={philosophy.title}
            className="mt-6 block max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-[2.75rem]"
          />
          <Reveal variant="up" delay={80}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {philosophy.body}
            </p>
          </Reveal>
        </Section>
      </div>

      {/* Leadership */}
      <Section>
        <SectionHeading title="Founders" />
        <div className="mt-14 grid gap-x-14 gap-y-14 md:grid-cols-3">
          {founders.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 70}>
              <FounderCard founder={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-ink/10 pt-16">
          <Reveal as="span" variant="mask" className="block">
            <h3 className="text-2xl font-semibold tracking-tight text-[#26502e] sm:text-[2rem]">
              Leadership Team
            </h3>
          </Reveal>
          <div className="mt-8 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 70}>
                <div className="relative h-[98px] w-[98px] overflow-hidden rounded-full bg-brand-tint">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="98px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-base font-semibold tracking-tight text-ink">
                    {p.name}
                  </h4>
                  <p className="mt-1 text-sm text-brand-strong">{p.role}</p>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {p.bio}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-ink/10 pt-16">
          <Reveal as="span" variant="mask" className="block">
            <h3 className="text-2xl font-semibold tracking-tight text-[#26502e] sm:text-[2rem]">
              Our Team
            </h3>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              A multidisciplinary team working across India.
            </p>
          </Reveal>
          <div className="mt-12 space-y-16">
            {team.map((part) => (
              <div key={part.title}>
                <Reveal variant="fade">
                  <h4 className="border-b border-ink/10 pb-4 text-xl font-semibold tracking-tight text-[#26502e] sm:text-2xl">
                    {part.title}
                  </h4>
                </Reveal>
                <div className="mt-10 space-y-16">
                  {part.departments.map((g) => (
                    <div key={g.department}>
                      <Reveal variant="fade">
                        <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong">
                          {g.department}
                        </h5>
                      </Reveal>
                      <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                        {g.members.map((m, i) => (
                          <Reveal as="li" key={m.name} delay={(i % 4) * 50}>
                            <div className="flex items-center gap-3">
                              {m.photo ? (
                                <div className="relative h-[69px] w-[69px] shrink-0 overflow-hidden rounded-full bg-brand-tint">
                                  <Image
                                    src={m.photo}
                                    alt={m.name}
                                    fill
                                    sizes="69px"
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <div
                                  aria-hidden="true"
                                  className="flex h-[69px] w-[69px] shrink-0 items-center justify-center rounded-full bg-brand-tint text-base font-semibold text-brand-strong"
                                >
                                  {m.name
                                    .split(" ")
                                    .map((w) => w[0])
                                    .slice(0, 2)
                                    .join("")}
                                </div>
                              )}
                              <h6 className="text-[15px] font-semibold tracking-tight text-ink">
                                {m.name}
                              </h6>
                            </div>
                          </Reveal>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
