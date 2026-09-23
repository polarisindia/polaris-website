import Link from "next/link";
import { Reveal } from "./Reveal";
import { BorderGlow } from "./BorderGlow";

export function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// Material Design "arrow_back" glyph (Material Icons/Symbols outline set).
export function ArrowLeft({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`container-px mx-auto max-w-[1760px] py-20 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  titleClassName = "text-[#26502e]",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  titleClassName?: string;
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow && (
        <Reveal variant="fade">
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal as="span" variant="mask" className="mt-3 block">
        <h2
          className={`text-balance text-3xl font-semibold tracking-tight sm:text-[2.5rem] ${titleClassName}`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal variant="up" delay={80}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "quiet";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-[15px] font-semibold transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]";
  const styles = {
    primary: "bg-ink text-white hover:bg-brand-hover hover:text-ink",
    ghost:
      "border border-ink/20 text-ink hover:border-brand-hover hover:bg-brand-hover hover:text-ink",
    quiet: "bg-white text-ink hover:bg-brand-hover",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline ${
        tone === "light" ? "text-white" : "text-ink"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="bg-paper">
      <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-24 lg:pt-[calc(83px+4rem)]">
        <Reveal variant="fade">
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal as="span" variant="mask" className="mt-4 block">
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-[3.25rem]">
            {title}
          </h1>
        </Reveal>
        <Reveal variant="up" delay={90}>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <BorderGlow
      className="on-light h-full"
      backgroundColor="#ffffff"
      borderRadius={8}
      glowColor="112 55% 42%"
      glowRadius={28}
      glowIntensity={0.9}
      fillOpacity={0.15}
      colors={["#5fcf4b", "#0f4338", "#a3e635"]}
    >
      <div className={`${/\bp-\d/.test(className) ? "" : "p-6 "}${className}`}>
        {children}
      </div>
    </BorderGlow>
  );
}
