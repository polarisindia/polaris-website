import type { MetadataRoute } from "next";
import { insights, projects, offerings } from "@/lib/content";

const base = "https://www.polarisenergy.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/our-approach",
    "/projects",
    "/p-ess",
    "/insights",
    "/sustainability",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const posts = insights.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  const projectPages = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const offeringPages = offerings.map((o) => ({
    url: `${base}/solutions/${o.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...posts, ...projectPages, ...offeringPages];
}
