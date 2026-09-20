import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Card } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { CTA } from "@/components/CTA";
import { ProjectCard } from "@/components/ProjectCard";
import { global, offices, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Polaris Global",
  description:
    "Built in India, growing internationally: Polaris Global Energie SARL brings the same engineering-led, commercially clear approach to Morocco and the wider MENA region.",
};

const moroccoOffice = offices.find((o) => o.name === "Morocco Office");
const intlProject = projects.find((p) => p.location.includes("Morocco"));

/* ---------- flat illustrations, same family as the other pages ---------- */

const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

// One pin/flag icon per market, in presence order: India, Morocco, MENA & Africa.
const presenceIcons: React.ReactNode[] = [
  <svg viewBox="0 0 48 48" fill="none" key="india" aria-hidden="true">
    <circle cx="24" cy="20" r="17" fill={IL.pale} />
    <path
      d="M24 6c-8 0-13 7.5-13 14 0 9 13 22 13 22s13-13 13-22c0-6.5-5-14-13-14Z"
      fill={IL.green}
    />
    <circle cx="24" cy="20" r="6" fill="#fff" />
    <circle cx="24" cy="20" r="2.4" fill={IL.ink} />
  </svg>,
  <svg viewBox="0 0 48 48" fill="none" key="morocco" aria-hidden="true">
    <circle cx="24" cy="20" r="17" fill={IL.pale} />
    <path
      d="M24 6c-8 0-13 7.5-13 14 0 9 13 22 13 22s13-13 13-22c0-6.5-5-14-13-14Z"
      fill={IL.dark}
    />
    <circle cx="24" cy="20" r="6" fill="#fff" />
    <circle cx="24" cy="20" r="2.4" fill={IL.green} />
  </svg>,
  <svg viewBox="0 0 48 48" fill="none" key="mena" aria-hidden="true">
    <circle cx="24" cy="20" r="17" fill={IL.pale} />
    <path
      d="M24 6c-8 0-13 7.5-13 14 0 9 13 22 13 22s13-13 13-22c0-6.5-5-14-13-14Z"
      fill="none"
      stroke={IL.green}
      strokeWidth="2.4"
      strokeDasharray="4 3.5"
    />
    <circle cx="24" cy="20" r="6" fill={IL.ink} />
    <path
      d="M21.5 20l1.8 1.8L26.5 18"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

// One icon per "why global" item: standard, model, lifecycle.
const whyIcons: React.ReactNode[] = [
  <svg viewBox="0 0 48 48" fill="none" key="standard" aria-hidden="true">
    <rect x="4" y="6" width="26" height="26" rx="6" fill={IL.pale} />
    <circle cx="27" cy="27" r="17" fill={IL.green} />
    <path
      d="M20 27l5 5 9-11"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg viewBox="0 0 48 48" fill="none" key="model" aria-hidden="true">
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

export default function GlobalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <Reveal variant="fade">
            <span className="pill">{global.eyebrow}</span>
          </Reveal>
          <RevealText
            as="h1"
            text={global.title}
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.25rem]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {global.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Where we operate */}
      <Section>
        <SectionHeading eyebrow="Footprint" title="Where we operate" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {global.presence.map((m, i) => (
            <Reveal key={m.market} delay={i * 70}>
              <Card className="h-full p-7">
                <span className="block h-11 w-11 [&>svg]:h-full [&>svg]:w-full">
                  {presenceIcons[i]}
                </span>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong">
                  {m.status}
                </div>
                <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-ink">
                  {m.market}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {m.detail}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The entity */}
      <div className="bg-brand-tint">
        <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="The entity"
                title="Polaris Global Energie SARL"
              />
              <dl className="mt-8 grid max-w-md grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
                <dt className="font-semibold text-ink">Incorporated</dt>
                <dd className="text-ink-soft">{global.entity.incorporated}</dd>
                <dt className="font-semibold text-ink">Based in</dt>
                <dd className="text-ink-soft">{global.entity.base}</dd>
                <dt className="font-semibold text-ink">Leadership</dt>
                <dd className="text-ink-soft">{global.entity.directors}</dd>
                {moroccoOffice && (
                  <>
                    <dt className="font-semibold text-ink">Office</dt>
                    <dd className="text-ink-soft">{moroccoOffice.address}</dd>
                    <dt className="font-semibold text-ink">Contact</dt>
                    <dd className="text-ink-soft">
                      <a
                        href={`mailto:${moroccoOffice.email}`}
                        className="hover:underline"
                      >
                        {moroccoOffice.email}
                      </a>
                      {" · "}
                      {moroccoOffice.phones.join(" / ")}
                    </dd>
                  </>
                )}
              </dl>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-mist shadow-[0_3px_14px_rgba(0,0,0,0.08)]">
              <Image
                src="/img/projects/morocco.jpg"
                alt="Polaris international rooftop solar project in Morocco"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* International project */}
      {intlProject && (
        <Section>
          <SectionHeading
            eyebrow="Morocco reference project"
            title="Ongoing in Tangier"
          />
          <div className="mt-12 max-w-md">
            <ProjectCard project={intlProject} />
          </div>
        </Section>
      )}

      {/* Why global */}
      <div className="bg-[#FAFBF6]">
        <Section>
          <SectionHeading eyebrow="How it works" title="One approach, every market" />
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {global.why.map((w, i) => (
              <Reveal as="article" key={w.title} delay={i * 70}>
                <span className="block h-12 w-12 [&>svg]:h-full [&>svg]:w-full">
                  {whyIcons[i]}
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {w.body}
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
