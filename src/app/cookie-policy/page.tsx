import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "What cookies and similar technologies, if any, polarisenergy.in uses.",
};

const lastUpdated = "11 September 2026";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "What cookies are",
    body: (
      <p>
        Cookies are small text files a website can store on your device to
        remember information between visits, for example, keeping you signed in,
        remembering a preference, or measuring how a site is used.
      </p>
    ),
  },
  {
    heading: "What this site uses",
    body: (
      <>
        <p>
          polarisenergy.in does not set any analytics, advertising or tracking
          cookies. We don&apos;t run Google Analytics, Meta Pixel or any similar
          tool, and there are no third-party embeds, video, maps or chat
          widgets, that would set cookies on their own behalf.
        </p>
        <p className="mt-4">
          The site does load two typefaces from Google Fonts. They are fetched
          and self-hosted at build time rather than loaded from Google&apos;s
          servers in your browser, so no font-related cookie or request is set
          when you visit.
        </p>
      </>
    ),
  },
  {
    heading: "If that changes",
    body: (
      <p>
        If we add analytics or another feature that requires cookies in the
        future, we will update this page to describe what is set and why, and,
        where the law requires it, ask for your consent before anything
        non-essential is placed on your device.
      </p>
    ),
  },
  {
    heading: "Browser controls",
    body: (
      <p>
        Even though this site doesn&apos;t currently rely on cookies, your
        browser lets you block or delete cookies for any site at any time
        through its settings. Doing so has no effect on how polarisenergy.in
        functions today.
      </p>
    ),
  },
  {
    heading: "Questions",
    body: (
      <p>
        For anything relating to this policy, contact us at{" "}
        <a
          href={`mailto:${company.email}`}
          className="text-brand-strong underline underline-offset-2 hover:text-ink"
        >
          {company.email}
        </a>
        . See also our{" "}
        <a
          href="/privacy-policy"
          className="text-brand-strong underline underline-offset-2 hover:text-ink"
        >
          Privacy Policy
        </a>{" "}
        for how we handle information you submit to us directly.
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <section className="bg-[#FAFBF6]">
      <div className="container-px mx-auto max-w-3xl pb-20 pt-[calc(83px+2.5rem)] lg:pb-28 lg:pt-[calc(83px+4rem)]">
        <span className="pill">Legal</span>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[58px]">
          Cookie Policy
        </h1>
        <p className="mt-4 text-sm text-ink-faint">
          Last updated {lastUpdated}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          A short, honest note on cookies and similar technologies on
          polarisenergy.in.
        </p>

        <div className="mt-14 space-y-10 border-t border-ink/10 pt-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-4 text-[17px] leading-relaxed text-ink-soft">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
