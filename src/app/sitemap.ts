import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { websiteProjects } from "@/data/websites";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work/websites", "/work/graphic-design", "/about", "/contact", ...websiteProjects.map((p) => `/work/websites/${p.slug}`)];
  return routes.map((r) => ({ url: `${siteConfig.url}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : r.split("/").length > 3 ? 0.6 : 0.8 }));
}
