import Link from "next/link";
import { company, offerings, socials, offices } from "@/lib/content";
import { Logo } from "./Logo";
import { socialIcon } from "./SocialIcons";

const columns = [
  {
    title: "Solutions",
    links: offerings.map((o) => ({
      label: o.title,
      href: `/solutions/${o.slug}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our Approach", href: "/our-approach" },
      { label: "Projects", href: "/projects" },
      { label: "Polaris Global", href: "/global" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#FAFBF6] text-ink">
      <div className="container-px mx-auto max-w-[1760px] py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div className="max-w-xs">
            <Logo tone="dark" height={64} />
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              {company.description}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-5 space-y-3.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-ink-soft underline-offset-[5px] transition-colors hover:text-brand-strong hover:underline hover:decoration-1"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-ink">Offices</h3>
            <div className="mt-5 space-y-5 text-sm text-ink-soft">
              {offices.map((o) => (
                <div key={o.name}>
                  <p className="font-medium text-ink">{o.name}</p>
                  <p className="mt-1 leading-relaxed">{o.address}</p>
                  <a
                    href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}
                    className="mt-1 block transition-colors hover:text-brand-strong"
                  >
                    {o.phone}
                  </a>
                  <a
                    href={`mailto:${o.email}`}
                    className="mt-1 block transition-colors hover:text-brand-strong"
                  >
                    {o.email}
                  </a>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-sm font-semibold text-ink">Follow us</h3>
            <div className="mt-4 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Polaris on ${s.label}`}
                  className="text-ink transition-colors hover:text-brand-strong"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {socialIcon[s.label]}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-50 mt-16 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-ink">
              Cookie Policy
            </Link>
            <a
              href="https://www.hueness.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-ink"
            >
              Made by Hueness
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
