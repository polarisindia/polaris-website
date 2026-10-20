import Link from "next/link";
import { Grainient } from "./Grainient";
import { BorderGlow } from "./BorderGlow";
import { Reveal } from "./Reveal";
import { RevealText } from "./RevealText";
import { SolutionIcon } from "./SolutionIcon";
import { offerings } from "@/lib/content";
import type { IconName } from "@/lib/content";

const iconFor: Record<string, IconName> = {
  "commercial-industrial": "roof",
  "utility-scale": "land",
  "finance-solutions": "coins",
  "energy-optimisation-consultant": "gauge",
};

/**
 * Bottom-of-page band on every solution page: the other solutions as the
 * same glow cards the homepage's "Our solutions" uses.
 */
export function OtherSolutions({ currentSlug }: { currentSlug: string }) {
  const others = offerings.filter((o) => o.slug !== currentSlug);

  return (
    <section className="relative isolate overflow-hidden bg-[#15371b]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
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
      <div className="container-px relative mx-auto max-w-[1760px] py-20 lg:py-28">
        <RevealText
          text="Other solutions"
          className="text-3xl font-semibold tracking-tight text-white sm:text-[58px]"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {others.map((o, i) => (
            <Reveal
              as="article"
              key={o.slug}
              delay={(i % 3) * 70}
              className="h-full"
            >
              <BorderGlow
                className="group h-full cursor-pointer"
                backgroundColor="rgba(7, 26, 20, 0.4)"
                borderRadius={12}
                glowColor="105 70% 62%"
                glowRadius={32}
                glowIntensity={0.9}
                fillOpacity={0.2}
                colors={["#5fcf4b", "#a3e635", "#2dd4bf"]}
              >
                <div className="relative flex flex-1 flex-col p-5 sm:p-6 lg:p-8">
                  <span className="block h-[70px] w-[70px]">
                    <SolutionIcon name={iconFor[o.slug] ?? "coins"} />
                  </span>
                  <h3 className="mt-6 text-[1.4rem] font-semibold tracking-tight text-white transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-active-green">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-[1.05rem] leading-relaxed text-white/70">
                    {o.summary}
                  </p>
                  <Link
                    href={`/solutions/${o.slug}`}
                    className="mt-auto inline-block w-fit border-b border-white/30 pb-1 pt-6 text-[1.05rem] font-medium text-white transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:inset-0 after:content-[''] group-hover:border-active-green"
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
