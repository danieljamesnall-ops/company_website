import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    "/about",
    "/why-us",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
