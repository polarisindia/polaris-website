"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, company, offerings } from "@/lib/content";
import { Logo } from "./Logo";
import { ArrowRight } from "./ui";

// Shared look for a top-level nav item (plain link or dropdown trigger),
// keyed off whether it's active and whether the transparent hero overlay
// is showing.
function navItemClass(active: boolean, overlay: boolean) {
  return `relative inline-flex items-center gap-1 text-[15px] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300 after:content-[''] ${
    active ? "after:w-full" : "after:w-0 hover:after:w-full"
  } ${
    overlay
      ? active
        ? "font-semibold text-white after:bg-white"
        : "font-medium text-white/70 hover:text-white after:bg-white"
      : active
        ? "font-semibold text-brand-strong after:bg-brand-strong"
        : "font-medium text-ink hover:text-brand-strong after:bg-brand-strong"
  }`;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  const isHome = pathname === "/";
  // Transparent overlay only on the homepage hero, before scrolling. Stays
  // transparent even while a dropdown is open — switching it solid on open
  // read as more of a jarring flash than the transparency itself did.
  const overlay = isHome && !solid && !open;

  // The mobile menu is a full-screen overlay, so freeze page scroll (Lenis
  // owns scrolling site-wide) while it is open.
  useEffect(() => {
    if (!open) return;
    const lenis = (
      window as unknown as { lenis?: { stop(): void; start(): void } }
    ).lenis;
    lenis?.stop();
    return () => lenis?.start();
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMobileSubOpen(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overlay ? "bg-transparent" : "bg-paper/95 backdrop-blur"
      }`}
    >
      <div className="container-px mx-auto flex h-[83px] max-w-[1760px] items-center justify-between">
        <Link href="/" aria-label={`${company.name} home`}>
          <Logo height={66} tone={overlay ? "light" : "dark"} />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);

            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={navItemClass(active, overlay)}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.href} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className={`cursor-pointer ${navItemClass(active, overlay)}`}
                >
                  {item.label}
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="mt-px transition-transform duration-200 group-hover:rotate-180"
                  >
                    <path
                      d="M5 8l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Compact, anchored dropdown — a full-bleed mega-menu felt
                    like too big/sudden a jump on hover. Starts tucked up
                    under the trigger and eases downward into place, rather
                    than a plain opacity snap, so it reads as one smooth
                    motion instead of a jerk. */}
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 -translate-y-3 pt-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="w-[540px] rounded-lg border border-line bg-paper p-5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.18)]">
                    <div className="grid grid-cols-2 gap-2">
                      {offerings.map((o, i) => (
                        <Link
                          key={o.slug}
                          href={`/solutions/${o.slug}`}
                          className="group/item rounded-lg p-4 transition-colors hover:bg-brand-tint/60"
                        >
                          <Image
                            src={`/icons/solutions/${o.slug}.svg`}
                            alt=""
                            width={36}
                            height={36}
                            className="h-9 w-9"
                          />
                          <h3 className="mt-3 text-[14px] font-semibold tracking-tight text-ink transition-colors group-hover/item:text-brand-strong">
                            {o.title}
                          </h3>
                          <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-relaxed text-ink-faint">
                            {o.summary}
                          </p>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-line px-1 pt-4">
                      <span className="text-[13px] text-ink-faint">
                        Not sure which fits?
                      </span>
                      <Link
                        href="/contact"
                        className="group/talk inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink transition-colors hover:text-brand-strong"
                      >
                        Talk to us
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/talk:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border xl:hidden ${
            overlay ? "border-white/40 text-white" : "border-ink/15 text-ink"
          }`}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          data-lenis-prevent
          className="absolute inset-x-0 top-full flex h-[calc(100dvh-83px)] flex-col overflow-y-auto overscroll-contain border-t border-line bg-paper xl:hidden"
        >
          <nav className="container-px mx-auto flex w-full max-w-[1760px] flex-1 flex-col py-4">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="border-b border-line last:border-0"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubOpen((v) =>
                        v === item.href ? null : item.href,
                      )
                    }
                    aria-expanded={mobileSubOpen === item.href}
                    className="flex w-full cursor-pointer items-center justify-between py-4 text-lg font-medium text-ink"
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        mobileSubOpen === item.href ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {mobileSubOpen === item.href && (
                    <div className="flex flex-col pb-3 pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="py-3 text-base text-ink-soft"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-line py-4 text-lg font-medium text-ink last:border-0"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="container-px mx-auto w-full max-w-[1760px] border-t border-line py-6 text-sm text-ink-soft">
            <a
              href={`mailto:${company.email}`}
              className="block py-1 font-medium text-ink"
            >
              {company.email}
            </a>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="block py-1 font-medium text-ink"
            >
              {company.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
