import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui";

export const metadata: Metadata = {
  title: "P-ESS — Battery Energy Storage Solutions",
  description:
    "Polaris Energy Storage Solutions (P-ESS), battery storage and time-of-day optimisation that firm up solar, shave demand peaks and strengthen grid independence for industrial sites. Full practice unveiling soon.",
};

export default function PessPage() {
  return (
    <section className="relative isolate overflow-hidden bg-deep-navy text-white">
      {/* ambient wash in the brand greens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-active-green/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-polaris-green/40 blur-3xl"
      />

      <div className="container-px relative mx-auto flex min-h-[82vh] max-w-[1760px] flex-col items-center justify-center py-20 text-center lg:py-28">
        <h1 className="sr-only">P-ESS, Polaris Energy Storage Solutions</h1>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-active-green">
          P-ESS · Polaris Energy Storage Solutions
        </span>

        <div className="relative mt-9 w-full max-w-[500px]">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2rem] bg-active-green/20 blur-2xl"
          />
          <Image
            src="/img/p-ess-teaser.jpg"
            alt="Teaser poster: a translucent green cloth draped over an industrial battery-storage enclosure at dawn, captioned “Unveiling Soon” and “Watch this space”."
            width={1280}
            height={1600}
            priority
            sizes="(max-width: 640px) 92vw, 500px"
            className="relative w-full rounded-lg shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
          />
        </div>

        <p className="mt-10 max-w-xl text-base leading-relaxed text-white/70">
          Storage is where solar stops being an intermittent input and becomes a
          controllable asset, peak shaving, time-of-day arbitrage, solar firming
          and round-the-clock supply, modelled with the same financial rigour as
          every Polaris system. The full P-ESS practice is unveiling soon.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-active-green px-7 py-3.5 text-[15px] font-semibold text-deep-navy transition-colors hover:bg-active-green/90"
          >
            Talk to us about storage
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-[15px] font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
