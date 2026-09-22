import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { FounderCard } from "@/components/FounderCard";
import { MilestonesTimeline } from "@/components/MilestonesTimeline";
import {
  company,
  milestones,
  values,
  philosophy,
  founders,
  leadership,
  team,
  advantages,
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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <RevealText
            as="h1"
            text="Engineering energy solutions around how businesses actually operate."
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[3.25rem]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Polaris Renewable Solutions Private Limited was founded in{" "}
              {company.founded} and is headquartered in Nashik, Maharashtra. We
              work with commercial, industrial and utility-scale customers
              across India to design and deliver renewable energy systems that
              are technically sound, commercially sensible and built for
              long-term performance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading title="A note from the founders" />
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              When we started Polaris in 2015, we were working around a
              straightforward idea: businesses should have more control over
              what they pay for power. Industrial customers were dealing with
              rising tariffs, reliability issues and large capital decisions,
              often without one partner looking at the technical and financial
              picture together.
            </p>
            <p>
              That is the gap we set out to address. We built Polaris as an
              engineering-led company, but with an equally strong focus on
              commercial outcomes. A solar plant has to generate as designed,
              but it also has to justify the investment behind it.
            </p>
            <p>
              Today, our work covers Commercial &amp; Industrial solar,
              utility-scale projects, BESS, electrical infrastructure, project
              finance support and energy optimisation. Our expansion into
              Morocco through Polaris Global Energie SARL has also given us
              experience across a wider range of project conditions, standards
              and markets.
            </p>
            <p>
              As we grow, our priorities remain simple: sound engineering,
              practical commercial thinking, safe execution and long-term
              accountability.
            </p>
          </div>
        </div>
      </Section>

      {/* Milestones */}
      <div className="on-dark bg-[#15371b]">
        <Section>
          <SectionHeading title="How we got here" />

          {/* lg+: a rising curved road, one numbered stop per milestone */}
          <MilestonesTimeline milestones={milestones} />

          {/* below lg: the curve's hand-placed labels don't survive a much
              narrower viewport, so it falls back to a plain stacked list —
              same data, every milestone still visible at once */}
          <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:hidden">
            {milestones.map((m, i) => (
              <Reveal
                as="div"
                key={m.year}
                variant="up"
                delay={(i % 3) * 60}
                className="relative border-t border-white/15 pt-6"
              >
                <span className="absolute -top-[7px] left-0 h-3.5 w-3.5 rounded-full border-2 border-brand bg-[#15371b]" />
                <div className="text-lg font-semibold tracking-tight text-brand-strong">
                  {m.year}
                  <span className="text-ink"> · {m.title}</span>
                </div>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                  {m.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* Values */}
      <Section>
        <SectionHeading title="What we hold onto" />
        <div className="mt-14 grid gap-x-14 gap-y-12 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="article" key={v.title} delay={(i % 3) * 70}>
              <span className="block h-14 w-14 [&>svg]:h-full [&>svg]:w-full">
                {valueIcons[i]}
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {v.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Philosophy — its own dedicated section, not grouped with the values above */}
      <div className="bg-brand-tint">
        <Section className="flex flex-col items-center text-center">
          <Reveal variant="scale" delay={40}>
            <span className="mt-6 block h-16 w-16 [&>svg]:h-full [&>svg]:w-full">
              {philosophyIcon}
            </span>
          </Reveal>
          <RevealText
            as="h2"
            text={philosophy.title}
            className="mt-6 block max-w-2xl text-3xl font-semibold tracking-tight text-[#26502e] sm:text-[2.75rem]"
          />
          <Reveal variant="up" delay={80}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {philosophy.body}
            </p>
          </Reveal>
        </Section>
      </div>

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
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 70}>
                <div className="flex items-center gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-brand-tint">
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold tracking-tight text-ink">
                      {p.name}
                    </h4>
                    <p className="text-sm text-brand-strong">{p.role}</p>
                  </div>
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
              A multidisciplinary team working across India and Morocco.
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
                <div className="mt-10 space-y-10">
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
                              {/* photo placeholder: initials until real photos arrive */}
                              <div
                                aria-hidden="true"
                                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-tint text-base font-semibold text-brand-strong"
                              >
                                {m.name
                                  .split(" ")
                                  .map((w) => w[0])
                                  .slice(0, 2)
                                  .join("")}
                              </div>
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
