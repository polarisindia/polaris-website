import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { ProcessRail } from "./ProcessRail";
import Orb from "./Orb";
import { CountUp } from "./motion/CountUp";
import { ArrowLink, ArrowRight } from "./ui";
import { RevealText } from "./RevealText";
import { BorderGlow } from "./BorderGlow";
import { SolarSystemLines } from "./SolarSystemLines";
import { TestimonialCarousel } from "./TestimonialCarousel";
import {
  offerings,
  projects,
  insights,
  company,
  clients,
  clientLogos,
  process as deliverySteps,
  impact,
  global as globalReach,
} from "@/lib/content";

/* ---------- flat illustrations (Uber-style, brand green) ---------- */

const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};

const illos: React.ReactNode[] = [
  // CAPEX — solar panel + sun
  <svg viewBox="0 0 48 48" fill="none" key="capex" aria-hidden="true">
    <rect x="2" y="7" width="29" height="29" rx="6" fill={IL.pale} />
    <path d="M7 35 L13 14 H35 L41 35 Z" fill={IL.green} />
    <path
      d="M7 35H41M16 24.5H33M22 14l-4 21M29 14l1 21"
      stroke="#fff"
      strokeWidth="1.5"
    />
    <circle cx="38" cy="12" r="7" fill={IL.ink} />
  </svg>,
  // OPEX / RESCO — coins
  <svg viewBox="0 0 48 48" fill="none" key="opex" aria-hidden="true">
    <ellipse cx="24" cy="38" rx="17" ry="6" fill={IL.pale} />
    <rect x="7" y="20" width="34" height="16" rx="8" fill={IL.green} />
    <ellipse cx="24" cy="20" rx="17" ry="6" fill={IL.dark} />
    <ellipse cx="24" cy="14" rx="12" ry="4.5" fill={IL.pale} />
    <path
      d="M24 9v10M20 12h8"
      stroke={IL.ink}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>,
  // Open Access & Group Captive — network
  <svg viewBox="0 0 48 48" fill="none" key="oa" aria-hidden="true">
    <rect x="3" y="3" width="22" height="22" rx="5" fill={IL.pale} />
    <rect x="17" y="18" width="27" height="27" rx="6" fill={IL.green} />
    <path
      d="M13 13 31 31"
      stroke={IL.dark}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="13" cy="13" r="4.5" fill={IL.ink} />
    <circle cx="31" cy="31" r="5" fill="#fff" />
  </svg>,
  // Lease — contract
  <svg viewBox="0 0 48 48" fill="none" key="lease" aria-hidden="true">
    <rect x="9" y="3" width="28" height="39" rx="5" fill={IL.pale} />
    <path d="M9 29h28v8a5 5 0 0 1-5 5H14a5 5 0 0 1-5-5z" fill={IL.green} />
    <path
      d="M15 12h16M15 19h16M15 26h10"
      stroke={IL.dark}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M14 37c3-4 6-4 9 0s6 4 9 0"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>,
  // GLG — gauge
  <svg viewBox="0 0 48 48" fill="none" key="glg" aria-hidden="true">
    <circle cx="24" cy="27" r="20" fill={IL.pale} />
    <path
      d="M8 32A18 18 0 0 1 40 32"
      stroke={IL.green}
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M24 27 35 15"
      stroke={IL.ink}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="27" r="4" fill={IL.dark} />
  </svg>,
  // BESS — battery + bolt
  <svg viewBox="0 0 48 48" fill="none" key="bess" aria-hidden="true">
    <rect x="3" y="12" width="35" height="27" rx="6" fill={IL.pale} />
    <rect x="8" y="17" width="25" height="17" rx="3" fill={IL.green} />
    <rect x="38" y="20" width="6" height="11" rx="2" fill={IL.dark} />
    <path d="M23 14l-8 13h7l-3 9 10-14h-7z" fill={IL.ink} />
  </svg>,
];

/* ---------- Intro statement ---------- */

const introStats = [
  { value: "650+", label: "Successful projects" },
  { value: "100 MW+", label: "Installed capacity" },
  { value: "100+", label: "Team members" },
  { value: "2", label: "Continents" },
];

export function IntroStatement() {
  return (
    <section className="bg-paper">
      <div className="container-px mx-auto grid max-w-[1760px] items-center gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:py-32">
        <div>
          <RevealText
            text="We engineer, finance and operate commercial & industrial solar."
            gradient
            className="block max-w-3xl text-3xl font-semibold tracking-tight text-brand-dark sm:text-[58px]"
          />
          <Reveal variant="up" delay={60}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              Founded in Nashik in {company.founded}, {company.shortName} works
              with commercial, industrial and utility-scale customers across
              India and Morocco. Our scope runs from rooftop and ground-mounted
              solar to captive and open-access power, utility-scale EPC, BESS,
              substations and grid evacuation, project finance support and
              ongoing energy optimisation. We begin with the client&apos;s load
              profile, site conditions and investment goals, then build the
              solution around them.
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={120} className="hidden lg:block">
          <SolarSystemLines className="ml-auto" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Client strip ---------- */

export function ClientStrip() {
  // duplicated so the CSS loop is seamless
  const loop = [...clientLogos, ...clientLogos];
  return (
    <section className="bg-paper py-12 lg:py-16">
      <Reveal variant="fade" className="container-px mx-auto max-w-[1760px]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
          Trusted on 650+ industrial projects
        </p>
      </Reveal>

      <div className="marquee mt-9">
        <div className="marquee-track" aria-hidden="true">
          {loop.map((c, i) => (
            <span key={`${c.name}-${i}`} className="marquee-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt="" loading="lazy" />
            </span>
          ))}
        </div>
        <span className="sr-only">
          Polaris clients include {clients.join(", ")}.
        </span>
      </div>
    </section>
  );
}

/* ---------- Where we work ---------- */

export function Footprint() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="container-px relative mx-auto max-w-[1760px] rounded-lg bg-[#FAFBF6] p-6 pb-8 lg:p-8 lg:pb-10">
        <Reveal variant="scale" className="overflow-hidden rounded-lg">
          <Image
            src="/img/global-reach.jpg"
            alt="Illustrated montage of world landmarks with wind turbines, solar panels, a container port, rail and power infrastructure."
            width={1800}
            height={1009}
            sizes="(max-width: 1760px) 100vw, 1760px"
            className="h-[228px] w-full object-cover sm:h-[288px] lg:h-[360px]"
          />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-24 xl:gap-32">
          <div>
            <RevealText
              text="Built in India. Growing internationally."
              gradient
              className="block max-w-xl text-3xl font-semibold tracking-tight text-brand-dark sm:text-[58px]"
            />
            <Reveal variant="up" delay={60}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
                {globalReach.intro}
              </p>
              <div className="mt-8">
                <ArrowLink href="/global">Explore Polaris Global</ArrowLink>
              </div>
            </Reveal>
          </div>

          <Reveal
            variant="up"
            delay={100}
            className="divide-y divide-ink/10 border-y border-ink/10"
          >
            {globalReach.presence
              .filter((m) => m.market !== "India")
              .map((m) => (
                <div
                  key={m.market}
                  className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-5"
                >
                  <div>
                    <p className="font-semibold text-ink">{m.market}</p>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-brand-strong">
                      {m.status}
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-ink-soft">
                    {m.detail}
                  </p>
                </div>
              ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Careers nudge ---------- */

export function CareersStrip() {
  return (
    <section className="bg-[#faf9f3]">
      <div className="container-px mx-auto max-w-[1760px] py-10 lg:py-12">
        <Reveal
          variant="fade"
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-2xl font-semibold tracking-tight text-ink">
              Polaris is growing, across India and Morocco.
            </p>
            <p className="mt-1 text-base text-ink-soft">
              Engineers, project managers and energy analysts who want to own
              outcomes, not tickets.
            </p>
          </div>
          <ArrowLink href="/careers">See how we hire</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Our solutions ---------- */

const offeringIcons = [illos[0], illos[2], illos[1], illos[4]];

export function Expertise() {
  return (
    <section className="bg-brand-tint">
      <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
        <RevealText
          text="Our solutions"
          gradient
          className="text-3xl font-semibold tracking-tight text-brand-dark sm:text-[58px]"
        />

        <div className="mt-10 grid gap-y-10 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 lg:-mx-8">
          {offerings.map((s, i) => (
            <Reveal
              as="article"
              key={s.title}
              delay={(i % 4) * 70}
              className="h-full"
            >
              <BorderGlow
                className="group h-full cursor-pointer"
                backgroundColor="#e7f7e0"
                borderRadius={12}
                glowColor="112 55% 42%"
                glowRadius={32}
                glowIntensity={0.9}
                colors={["#5fcf4b", "#0f4338", "#a3e635"]}
              >
                <div className="relative flex flex-1 flex-col p-5 sm:p-6 lg:p-8">
                  <span className="block h-14 w-14 [&>svg]:h-full [&>svg]:w-full">
                    {offeringIcons[i]}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-brand-strong">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    {s.summary}
                  </p>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="mt-auto inline-block w-fit border-b border-ink/25 pb-1 pt-6 text-base font-medium text-ink transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:inset-0 after:content-[''] hover:border-ink group-hover:border-brand-strong"
                  >
                    Learn more
                  </Link>
                </div>
              </BorderGlow>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How we deliver ---------- */

export function Process() {
  return (
    <section
      id="how-we-work"
      className="container-px mx-auto max-w-[1760px] scroll-mt-24 py-20 lg:py-28"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <RevealText
            text="From assessment to performance"
            gradient
            className="block max-w-2xl text-3xl font-semibold tracking-tight text-brand-dark sm:text-[58px]"
          />
        </div>
        <Reveal variant="fade">
          <ArrowLink href="/our-approach">See our approach</ArrowLink>
        </Reveal>
      </div>

      <Reveal variant="fade">
        <ProcessRail steps={deliverySteps} />
      </Reveal>
    </section>
  );
}

/* ---------- Environmental impact ---------- */

export function ImpactBand() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#08251c] via-brand-dark to-brand py-[56px] text-white lg:py-[82px]">
      {/* brand mark watermark — visible against the dark background, not
          just a hint of texture */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/impact-mark.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-3rem] top-1/2 h-[34rem] w-auto -translate-y-1/2 opacity-[0.06] brightness-0 invert sm:h-[42rem] lg:right-[-1rem] lg:h-[54rem]"
      />
      <div className="container-px relative z-10 mx-auto max-w-[1760px]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <RevealText
              text="Clean energy, lasting impact."
              className="block max-w-xl text-3xl font-semibold tracking-tight sm:text-[58px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10">
            {impact.items.map((it, i) => (
              <Reveal key={it.label} variant="up" delay={i * 80}>
                <CountUp
                  value={it.value}
                  className="block text-[2rem] font-semibold tracking-tight text-white sm:text-4xl"
                />
                <span className="mt-2 block text-sm text-white/60">
                  {it.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Brand promise ---------- */

export function BrandPromise() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071a14]">
      {/* full-bleed Orb backdrop on a dark ground, as in the React Bits demo */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Orb
          hue={109}
          hoverIntensity={1.85}
          rotateOnHover={false}
          forceHoverState={false}
          backgroundColor="#071a14"
          className="absolute inset-0"
        />
      </div>

      <div className="container-px pointer-events-none relative mx-auto flex max-w-5xl flex-col items-center py-36 text-center lg:py-52">
        <RevealText
          text="Engineering the bottom line."
          className="block max-w-3xl text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[3rem]"
        />
      </div>
    </section>
  );
}

/* ---------- Our projects (horizontal) ---------- */

export function ProjectsRail() {
  return (
    <section className="bg-paper">
      <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <RevealText
            text="Our projects"
            gradient
            className="text-3xl font-semibold tracking-tight text-brand-dark sm:text-[58px]"
          />
          <Reveal variant="fade">
            <ArrowLink href="/projects">Discover our projects</ArrowLink>
          </Reveal>
        </div>

        <div className="no-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto pb-1">
          {projects.map((p) => (
            <Link
              key={p.name}
              href={`/projects/${p.slug}`}
              className="u-card group w-[300px] shrink-0 snap-start overflow-hidden rounded-lg border border-line/70 bg-paper sm:w-[340px]"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-mist">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="340px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-7 pb-8">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand-strong">
                    {p.tech}
                  </span>
                  <span className="inline-flex rounded-full bg-ink/[0.06] px-2.5 py-1 text-xs font-semibold text-ink">
                    {p.capacity}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-sm text-ink-faint">{p.location}</p>
                <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:underline">
                  See project
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

export function Testimonials() {
  return <TestimonialCarousel />;
}

/* ---------- Latest insights ---------- */

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function LatestNews() {
  return (
    <section className="bg-paper">
      <div className="container-px mx-auto max-w-[1760px] py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <RevealText
            text="Latest insights"
            gradient
            className="text-3xl font-semibold tracking-tight text-brand-dark sm:text-[58px]"
          />
          <Reveal variant="fade">
            <ArrowLink href="/insights">See all insights</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {insights.slice(0, 3).map((post, i) => (
            <Reveal as="article" key={post.slug} delay={(i % 3) * 70}>
              <Link href={`/insights/${post.slug}`} className="group block">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-mist">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="mt-5 inline-block rounded bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand-strong">
                  {post.category}
                </span>
                <h3 className="mt-4 line-clamp-2 text-2xl font-semibold leading-[1.15] tracking-tight text-ink transition-colors group-hover:text-brand-strong">
                  {post.title}
                </h3>
                <time
                  dateTime={post.date}
                  className="mt-3 block text-sm text-ink-faint"
                >
                  {fmt(post.date)}
                </time>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Homepage-only stat strip, directly under the hero ---------- */

export function StatsBand() {
  return (
    <section className="bg-gradient-to-br from-[#08251c] via-brand-dark to-brand py-8 lg:py-10">
      <div className="container-px mx-auto max-w-[1760px]">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {introStats.map((it) => (
            <div key={it.label}>
              <dt>
                <CountUp
                  value={it.value}
                  className="text-3xl font-semibold tracking-tight text-white sm:text-5xl"
                />
              </dt>
              <dd className="mt-1 text-base leading-snug text-white/50">
                {it.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
