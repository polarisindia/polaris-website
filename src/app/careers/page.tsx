import type { Metadata } from "next";
import { Section, SectionHeading, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { CTA } from "@/components/CTA";
import { careers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Polaris is a small, engineering-led solar team across India and Morocco. We hire engineers, project managers and energy analysts who want to own outcomes end to end.",
};

/* ---------- flat illustrations, same family as the homepage icons ---------- */

const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

// One icon per culture point, in order: Engineering owns the call,
// One team whole lifecycle, Cross-border by default, Financially literate.
const cultureIcons: React.ReactNode[] = [
  // Engineering owns the call — drafting compass
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
  // One team, whole lifecycle — loop
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
  // Cross-border by default — globe
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
  // Financially literate — bars + trend
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
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <Reveal variant="fade">
            <span className="pill">Careers</span>
          </Reveal>
          <RevealText
            as="h1"
            text="Own outcomes, not tickets."
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[58px]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {careers.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="How it works here"
          title="A team built around ownership"
          intro="Four things that tend to define whether someone thrives at Polaris."
        />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {careers.culture.map((c, i) => (
            <Reveal as="article" key={c.title} delay={(i % 2) * 70}>
              <span className="block h-12 w-12 [&>svg]:h-full [&>svg]:w-full">
                {cultureIcons[i]}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                {c.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="on-dark bg-[#15371b]">
        <Section>
          <SectionHeading eyebrow="Who we hire" title="Open applications" />
          <Reveal variant="up" delay={80}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {careers.roles} We don&rsquo;t always have a role posted, but we
              always read a good application. Send a CV and a short note on a
              project you owned to{" "}
              <a
                href={`mailto:${careers.email}`}
                className="font-semibold text-brand-strong hover:underline"
              >
                {careers.email}
              </a>
              .
            </p>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <div className="mt-8">
              <Button href={`mailto:${careers.email}`}>
                Send an application
              </Button>
            </div>
          </Reveal>
        </Section>
      </div>

      <CTA />
    </>
  );
}
