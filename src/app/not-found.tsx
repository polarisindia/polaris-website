import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="container-px mx-auto flex max-w-[1760px] flex-col items-start pb-32 pt-[calc(83px+6rem)]">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-strong">
        404
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#26502e] sm:text-[3.25rem]">
        This page drifted off course.
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The page you were looking for doesn&apos;t exist or has moved.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </div>
  );
}
