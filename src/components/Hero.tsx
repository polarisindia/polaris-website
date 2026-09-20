"use client";

import { useEffect, useRef, useState } from "react";

import { CountUp } from "./motion/CountUp";

const heroStats = [
  { value: "650+", label: "Successful projects" },
  { value: "100 MW+", label: "Installed capacity" },
  { value: "100+", label: "Team members" },
  { value: "2", label: "Continents" },
];

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
      className="relative flex h-screen min-h-[620px] items-center justify-center overflow-hidden bg-brand-dark pb-32 sm:pb-40"
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

      <div
        className="container-px relative z-10 mx-auto flex max-w-[1200px] flex-col items-center text-center"
        style={{
          transform: `translateY(${prog * -60}px)`,
          opacity: 1 - prog * 0.9,
        }}
      >
        <h1
          aria-label="Energy as an asset."
          className="whitespace-nowrap text-[8.2vw] font-semibold leading-[0.95] tracking-tight text-white sm:text-[5.46rem] lg:text-[6.72rem]"
        >
          Energy as <span className="text-brand">an asset</span>
        </h1>

        <p className="mt-8 max-w-xl text-base text-white/80 sm:text-2xl">
          Energy engineering for Commercial &amp; Industrial and Utility-Scale
          projects globally.
        </p>
      </div>

      {/* stats folded into the video: fully transparent at the top edge,
          easing into solid green at the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-b from-[#15371b]/0 via-[#15371b]/80 to-[#15371b] pb-8 pt-24 lg:pb-10 lg:pt-32">
        <div className="container-px mx-auto max-w-[1760px]">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {heroStats.map((it) => (
              <div key={it.label} className="text-center">
                <dt>
                  <CountUp
                    value={it.value}
                    className="text-3xl font-semibold tracking-tight text-white sm:text-5xl"
                  />
                </dt>
                <dd className="mt-1 text-base leading-snug text-white/60">
                  {it.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
