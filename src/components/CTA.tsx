import Link from "next/link";
import { ArrowRight } from "./ui";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#15371b]">
      {/* brand mark watermark — visible against the dark background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/impact-mark.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2rem] top-1/2 h-[24rem] w-auto -translate-y-1/2 opacity-[0.06] brightness-0 invert sm:h-[30rem] lg:h-[36rem]"
      />

      <div className="container-px relative mx-auto max-w-[1760px] py-10 lg:py-[72px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal as="span" variant="mask" className="block">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-[3.25rem]">
              Begin your{" "}
              <span className="text-active-green">energy transition</span>
            </h2>
          </Reveal>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-hover"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
