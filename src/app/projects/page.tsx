import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";
import { CTA } from "@/components/CTA";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects — Commercial & Industrial Solar Portfolio",
  description:
    "Selected commercial & industrial solar projects delivered by Polaris across India and Morocco, rooftop and ground-mounted.",
};

export default function ProjectsPage() {
  const commissioned = projects.filter((p) => p.status === "Commissioned");
  const ongoing = projects.filter((p) => p.status !== "Commissioned");

  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <RevealText
            as="h1"
            text="650+ projects. 125 MW+ commissioned."
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[58px]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              A representative selection of the C&I portfolio, rooftop and
              ground-mounted plants for industrial clients across India, and an
              early C&I reference in Morocco.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <ProjectsBrowser commissioned={commissioned} ongoing={ongoing} />
      </Section>

      <CTA />
    </>
  );
}
