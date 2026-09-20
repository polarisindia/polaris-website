import Link from "next/link";
import { ArrowRight } from "./ui";
import { Reveal } from "./Reveal";
import { Grainient } from "./Grainient";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#15371b]">
      {/* grainy warped green gradient, same as the impact section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
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

      <div className="container-px relative mx-auto max-w-[1760px] py-14 lg:py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <Reveal as="span" variant="mask" className="block">
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-[3.25rem]">
              Begin your
              <br />
              energy transition
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
