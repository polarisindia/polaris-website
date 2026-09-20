"use client";

import { Fragment, useEffect, useLayoutEffect, useRef } from "react";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Heading whose words rise into view, one after another, when it scrolls
 * into the viewport.
 *
 * It renders fully visible by default. Only once the client script has run
 * does it "arm" the clip animation (before paint, so there's no flash) and
 * then reveal on scroll via IntersectionObserver. A rescue poll only ever
 * fires when the heading is genuinely on screen — a heading below the fold
 * always waits for the scroll, no matter how long the page has been open.
 * Pure CSS transitions; no GSAP.
 */
export function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  gradient = false,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Paint the heading with one dark-to-light brand-green gradient that
   *  runs across the whole heading, not restarting on every word. */
  gradient?: boolean;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || !gradient) return;

    // Each word is its own clipped box, so a plain background-clip on the
    // heading can't span them. Give every word the full-width gradient and
    // shift it by that word's offset so they read as one continuous fill.
    const paint = () => {
      const words = Array.from(
        el.querySelectorAll<HTMLElement>(".reveal-text__word"),
      );
      const box = el.getBoundingClientRect();
      const rects = words.map((w) => w.getBoundingClientRect());
      const width = Math.max(1, ...rects.map((r) => r.right - box.left));
      words.forEach((w, i) => {
        const inner = w.firstElementChild as HTMLElement | null;
        if (!inner) return;
        inner.style.backgroundSize = `${width}px 100%`;
        inner.style.backgroundPosition = `${-(rects[i].left - box.left)}px 0`;
      });
      el.dataset.g = "true";
    };

    paint();
    const ro = new ResizeObserver(paint);
    ro.observe(el);
    document.fonts?.ready.then(paint).catch(() => {});
    return () => ro.disconnect();
  }, [text, gradient]);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // stays un-armed → fully visible, no animation
    }

    // Arm the clip before the browser paints so there's no flash of
    // un-clipped text.
    el.dataset.armed = "true";

    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      el.dataset.in = "true";
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);

    // Rescue: only if the heading is actually on screen but the observer
    // somehow didn't fire. Never triggers for content below the fold, so a
    // long dwell on the hero can't "use up" the reveal.
    const rescue = window.setInterval(() => {
      if (played) {
        window.clearInterval(rescue);
        return;
      }
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88 && r.bottom > 0) {
        play();
        io.disconnect();
        window.clearInterval(rescue);
      }
    }, 400);
    const stopRescue = window.setTimeout(
      () => window.clearInterval(rescue),
      20000,
    );

    return () => {
      io.disconnect();
      window.clearInterval(rescue);
      window.clearTimeout(stopRescue);
    };
  }, [text]);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`reveal-text ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="reveal-text__word" aria-hidden="true">
            <span style={{ transitionDelay: `${i * 42}ms` }}>{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
