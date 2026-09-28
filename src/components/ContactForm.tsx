"use client";

import { useState } from "react";

const topics = [
  "Power purchase agreement",
  "Land lease / site referral",
  "Partnership or supplier",
  "Press / media",
  "Something else",
];

const fieldClass =
  "w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-brand";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (sent) {
    return (
      <div className="rounded-lg border border-brand/30 bg-brand-tint/50 p-8">
        <h2 className="text-lg font-medium text-ink">
          Thanks, message received.
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          We&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 cursor-pointer text-sm font-medium text-brand-strong transition-colors hover:text-ink"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        setSending(true);
        const data = Object.fromEntries(new FormData(e.currentTarget));
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (!res.ok) throw new Error();
          setSent(true);
        } catch {
          setError("Something went wrong. Please try again.");
        } finally {
          setSending(false);
        }
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-ink-soft">Name</span>
          <input
            required
            name="name"
            className={`mt-1.5 ${fieldClass}`}
            placeholder="Rohan Mehta"
          />
        </label>
        <label className="block">
          <span className="text-sm text-ink-soft">Email</span>
          <input
            required
            type="email"
            name="email"
            className={`mt-1.5 ${fieldClass}`}
            placeholder="rohan@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-ink-soft">Organization</span>
        <input
          name="org"
          className={`mt-1.5 ${fieldClass}`}
          placeholder="Company or utility"
        />
      </label>

      <label className="block">
        <span className="text-sm text-ink-soft">What&apos;s this about?</span>
        <div className="relative mt-1.5">
          <select
            name="topic"
            className={`${fieldClass} cursor-pointer appearance-none pr-10`}
            defaultValue={topics[0]}
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-faint"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </label>

      <label className="block">
        <span className="text-sm text-ink-soft">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className={`mt-1.5 resize-y ${fieldClass}`}
          placeholder="A few lines on what you're looking to do."
        />
      </label>

      {error && <p className="text-sm text-amber">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="cursor-pointer rounded-lg bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-hover hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
