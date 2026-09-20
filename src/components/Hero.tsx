"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "./ui";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [p, setP] = useState(0);

  // Force muted autoplay to work in Safari (React doesn't set the muted
  // attribute, so Safari's autoplay gate can block it).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const tryPlay = () => {
      v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("canplay", tryPlay);
    const onVis = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const h = el.offsetHeight || 1;
      const scrolled = -el.getBoundingClientRect().top;
      const next = scrolled / h;
      setP(Number.isFinite(next) ? Math.min(Math.max(next, 0), 1) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const prog = Number.isFinite(p) ? Math.min(Math.max(p, 0), 1) : 0;

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[620px] items-center justify-center overflow-hidden bg-brand-dark"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover [filter:saturate(1.12)_contrast(1.04)]"
        style={{ transform: `scale(${1 + prog * 0.12})` }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/img/hero-poster.jpg"
        src="/hero.mp4"
      />

      {/* scrims */}
      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/40" />
      {/* melt into the airy section below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[rgba(125,204,94,0.16)] to-transparent" />

      <div
        className="container-px relative z-10 mx-auto flex max-w-[1200px] flex-col items-center text-center"
        style={{
          transform: `translateY(${prog * -60}px)`,
          opacity: 1 - prog * 0.9,
        }}
      >
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/85 sm:text-sm">
          Engineering the Bottom Line
        </p>

        <h1
          aria-label="Energy as an asset, an advantage, a return."
          className="text-[10.92vw] font-semibold tracking-tight leading-[0.95] text-white sm:text-[5.46rem] lg:text-[6.72rem]"
        >
          <span aria-hidden="true">
            Energy as
            <br />
            <span className="word-rotator">
              <span>an asset</span>
              <span>an advantage</span>
              <span>a return</span>
            </span>
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base text-white/80 sm:text-2xl">
          Energy engineering for Commercial &amp; Industrial and Utility-Scale
          projects, across India and Morocco.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-ink transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-hover"
          >
            Get a proposal
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/25"
          >
            See our projects
          </Link>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-7 flex justify-center"
        style={{ opacity: 1 - prog * 2 }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white/80">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 1v10M2 7l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </section>
  );
}
