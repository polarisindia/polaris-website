"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useScrollLock } from "@/lib/useScrollLock";

type Founder = {
  name: string;
  honorific?: string;
  role: string;
  bio: string[];
  photo?: string;
  linkedin?: string;
};

function initials(name: string) {
  return name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/**
 * Founder tile: avatar, name/role, a 3-line-clamped first paragraph of the
 * bio, and a "Read <first name>'s bio" trigger that opens the full
 * multi-paragraph bio in a modal — instead of dumping the whole bio on the
 * card, à la Uber's leadership page.
 */
export function FounderCard({ founder }: { founder: Founder }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const firstName = founder.name.split(" ")[0];
  const fullName = founder.honorific
    ? `${founder.honorific} ${founder.name}`
    : founder.name;

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <article>
      <div className="relative aspect-square w-[76%] overflow-hidden rounded-lg bg-brand-tint">
        {founder.photo ? (
          <Image
            src={founder.photo}
            alt={fullName}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-semibold tracking-tight text-brand-dark">
            {initials(founder.name)}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
        {fullName}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-strong">
        {founder.role}
      </p>
      <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-soft">
        {founder.bio[0]}
      </p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 transition-colors hover:text-brand-strong hover:underline"
      >
        Read {firstName}&apos;s bio
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              aria-hidden="true"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            />
            <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg bg-paper p-8 shadow-[0_30px_80px_-20px_rgba(11,21,37,0.45)] sm:p-9">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <CloseIcon />
              </button>

              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-brand-tint">
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={fullName}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-base font-semibold text-brand-dark">
                    {initials(founder.name)}
                  </span>
                )}
              </div>
              <h3
                id={titleId}
                className="mt-4 text-xl font-semibold tracking-tight text-ink"
              >
                {fullName}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-strong">
                {founder.role}
              </p>
              {founder.linkedin && (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A66C2] transition-opacity hover:opacity-70"
                >
                  <LinkedInIcon />
                  View on LinkedIn
                </a>
              )}
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-soft">
                {founder.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </article>
  );
}
