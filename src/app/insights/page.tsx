import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { CTA } from "@/components/CTA";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Analysis from the Polaris Renewable Energy team on clean energy markets, policy, and project engineering.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAFBF6]">
        <div className="container-px mx-auto max-w-[1760px] pb-16 pt-[calc(83px+2.5rem)] lg:pb-20 lg:pt-[calc(83px+4rem)]">
          <RevealText
            as="h1"
            text="Notes from the people building the projects"
            className="mt-6 block max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#26502e] sm:text-[58px]"
          />
          <Reveal variant="up" delay={90}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Markets, policy and engineering, written by the Polaris
              development, finance and operations teams.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal as="article" key={post.slug} delay={(i % 3) * 70}>
              <Link href={`/insights/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-mist">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <span className="inline-flex rounded-md bg-brand-tint px-3 py-1 text-sm font-medium text-brand-strong">
                    {post.category}
                  </span>
                </div>
                <h2 className="mt-3 line-clamp-2 text-xl font-semibold leading-tight tracking-tight text-ink transition-colors group-hover:text-brand-strong">
                  {post.title}
                </h2>
                <time
                  dateTime={post.date}
                  className="mt-3 block text-sm text-ink-faint"
                >
                  {formatDate(post.date)}
                </time>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
