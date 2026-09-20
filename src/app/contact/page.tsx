import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { ContactForm } from "@/components/ContactForm";
import { BorderGlow } from "@/components/BorderGlow";
import { socialIcon } from "@/components/SocialIcons";
import { offices, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Polaris Renewable Solutions, our Nashik, India headquarters and our Casablanca, Morocco office.",
};

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9.5"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.6 3.5h3l1.4 4.2-2.1 1.6a12.2 12.2 0 0 0 5.8 5.8l1.6-2.1 4.2 1.4v3a1.5 1.5 0 0 1-1.6 1.5C10.9 18.4 5.6 13.1 5.1 5.1A1.5 1.5 0 0 1 6.6 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.5 7 12 13l7.5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <Reveal variant="fade">
            <span className="pill">Contact</span>
          </Reveal>
          <RevealText
            as="h1"
            text="Tell us what you're trying to build"
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[3.25rem]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Procurement, land, partnerships, or press, send a note and the
              right person will get back to you.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal variant="up">
            <ContactForm />
          </Reveal>

          <Reveal variant="up" delay={80}>
            <aside className="space-y-6">
              {offices.map((o) => (
                <BorderGlow
                  key={o.name}
                  backgroundColor="#ffffff"
                  borderRadius={8}
                  glowColor="112 55% 42%"
                  glowRadius={28}
                  glowIntensity={0.9}
                  fillOpacity={0.15}
                  colors={["#5fcf4b", "#0f4338", "#a3e635"]}
                >
                  <div className="p-6">
                    <h2 className="text-lg font-semibold tracking-tight text-ink">
                      {o.name}
                    </h2>
                    <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                      <li className="flex gap-3">
                        <span className="mt-0.5 shrink-0 text-ink-faint">
                          <PinIcon />
                        </span>
                        <span className="leading-relaxed">{o.address}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-0.5 shrink-0 text-ink-faint">
                          <PhoneIcon />
                        </span>
                        <a
                          href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}
                          className="transition-colors hover:text-brand-strong"
                        >
                          {o.phone}
                        </a>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-0.5 shrink-0 text-ink-faint">
                          <MailIcon />
                        </span>
                        <a
                          href={`mailto:${o.email}`}
                          className="transition-colors hover:text-brand-strong"
                        >
                          {o.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                </BorderGlow>
              ))}

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                  Follow us
                </h2>
                <div className="mt-4 flex flex-wrap gap-4">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Polaris on ${s.label}`}
                      className="text-ink transition-colors hover:text-brand-strong"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        {socialIcon[s.label]}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
