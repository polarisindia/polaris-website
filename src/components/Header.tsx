"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, company, regions, offerings } from "@/lib/content";
import { Logo } from "./Logo";
import { ArrowRight } from "./ui";

/* ---------- Solutions mega-menu icons (same family/palette as home.tsx's
   `illos`, same 4 icons used on the homepage's "Our solutions" cards) ---------- */
const IL = {
  pale: "#cdeec2",
  green: "#5fcf4b",
  dark: "#0f4338",
  ink: "#0e0e0e",
};
const offeringIcons: React.ReactNode[] = [
  // Commercial & Industrial — solar panel + sun
  <svg viewBox="0 0 48 48" fill="none" key="ci" aria-hidden="true">
    <rect x="2" y="7" width="29" height="29" rx="6" fill={IL.pale} />
    <path d="M7 35 L13 14 H35 L41 35 Z" fill={IL.green} />
    <path
      d="M7 35H41M16 24.5H33M22 14l-4 21M29 14l1 21"
      stroke="#fff"
      strokeWidth="1.5"
    />
    <circle cx="38" cy="12" r="7" fill={IL.ink} />
  </svg>,
  // Utility Scale — network
  <svg viewBox="0 0 48 48" fill="none" key="us" aria-hidden="true">
    <rect x="3" y="3" width="22" height="22" rx="5" fill={IL.pale} />
    <rect x="17" y="18" width="27" height="27" rx="6" fill={IL.green} />
    <path
      d="M13 13 31 31"
      stroke={IL.dark}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="13" cy="13" r="4.5" fill={IL.ink} />
    <circle cx="31" cy="31" r="5" fill="#fff" />
  </svg>,
  // Finance Solutions — coins
  <svg viewBox="0 0 48 48" fill="none" key="fs" aria-hidden="true">
    <ellipse cx="24" cy="38" rx="17" ry="6" fill={IL.pale} />
    <rect x="7" y="20" width="34" height="16" rx="8" fill={IL.green} />
    <ellipse cx="24" cy="20" rx="17" ry="6" fill={IL.dark} />
    <ellipse cx="24" cy="14" rx="12" ry="4.5" fill={IL.pale} />
    <path
      d="M24 9v10M20 12h8"
      stroke={IL.ink}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>,
  // Energy Optimisation Consultant — gauge
  <svg viewBox="0 0 48 48" fill="none" key="eoc" aria-hidden="true">
    <circle cx="24" cy="27" r="20" fill={IL.pale} />
    <path
      d="M8 32A18 18 0 0 1 40 32"
      stroke={IL.green}
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M24 27 35 15"
      stroke={IL.ink}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="27" r="4" fill={IL.dark} />
  </svg>,
];

function RegionToggle({ overlay }: { overlay: boolean }) {
  const pathname = usePathname();
  const isGlobal = pathname.startsWith("/global");
  const seg =
    "rounded-md px-2.5 py-1 text-[13px] font-semibold transition-colors";
  const active = overlay ? "bg-white text-ink" : "bg-ink text-white";
  const idle = overlay
    ? "text-white/80 hover:text-white"
    : "text-ink-soft hover:text-ink";
  return (
    <div
      className={`flex items-center gap-0.5 rounded-lg border p-0.5 ${
        overlay ? "border-white/30" : "border-ink/15"
      }`}
    >
      {regions.map((r) => {
        const on = r.label === "Global" ? isGlobal : !isGlobal;
        return (
          <Link
            key={r.label}
            href={r.href}
            className={`${seg} ${on ? active : idle}`}
          >
            {r.label}
          </Link>
        );
      })}
    </div>
  );
}

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
                          className="group/item rounded-lg bg-white p-4 transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.2)]"
                        >
                          <span className="block h-9 w-9 [&>svg]:h-full [&>svg]:w-full">
                            {offeringIcons[i]}
                          </span>
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

        <div className="hidden items-center gap-3 xl:flex">
          <RegionToggle overlay={overlay} />
          <Link
            href="/contact"
            className={`rounded-lg px-5 py-2.5 text-[14px] font-semibold transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-hover hover:text-ink ${
              overlay ? "bg-white text-ink" : "bg-ink text-white"
            }`}
          >
            Request a call back
          </Link>
        </div>

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
        <div className="border-t border-line bg-paper xl:hidden">
          <nav className="container-px mx-auto flex max-w-[1760px] flex-col py-3">
            <div className="mb-2 flex gap-0.5 self-start rounded-lg border border-ink/15 p-0.5">
              {regions.map((r) => {
                const on =
                  r.label === "Global"
                    ? pathname.startsWith("/global")
                    : !pathname.startsWith("/global");
                return (
                  <Link
                    key={r.label}
                    href={r.href}
                    className={`rounded-md px-3 py-1.5 text-sm font-semibold ${
                      on ? "bg-ink text-white" : "text-ink-soft"
                    }`}
                  >
                    {r.label}
                  </Link>
                );
              })}
            </div>
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
                    className="flex w-full cursor-pointer items-center justify-between py-3.5 text-sm font-medium text-ink"
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
                          className="py-2.5 text-sm text-ink-soft"
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
                  className="border-b border-line py-3.5 text-sm font-medium text-ink last:border-0"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className="mt-4 rounded-lg bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-hover hover:text-ink"
            >
              Request a call back
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
