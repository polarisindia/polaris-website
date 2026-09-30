import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { ArrowLeft } from "@/components/ui";
import { insights } from "@/lib/content";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <div className="bg-[#FAFBF6]">
        <section>
          <div className="container-px mx-auto max-w-3xl pb-14 pt-[calc(83px+2.5rem)] lg:pb-16 lg:pt-[calc(83px+4rem)]">
            <Link
              href="/insights"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              All insights
            </Link>

            <div className="mt-8 flex items-center gap-3 text-xs text-ink-faint">
              <span className="rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand-strong">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>

            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[#26502e] sm:text-[58px]">
              {post.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {post.excerpt}
            </p>
          </div>
        </section>

        <div className="container-px mx-auto max-w-3xl -mt-4 lg:-mt-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-mist">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <article className="container-px mx-auto max-w-3xl py-14 lg:py-20">
          <div className="space-y-8">
            {post.body.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {section.heading}
                  </h2>
                )}
                <div
                  className={`space-y-4 text-[17px] leading-relaxed text-ink-soft ${section.heading ? "mt-3" : ""}`}
                >
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <CTA />
    </>
  );
}
