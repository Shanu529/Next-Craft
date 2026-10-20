import type { Metadata } from "next";
import { siteConfig } from "./site";

type Args = { title: string; description: string; path: string; image?: string; absoluteTitle?: boolean };

export function buildMetadata({ title, description, path, image = siteConfig.ogImage, absoluteTitle }: Args): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: image, alt: `${siteConfig.name} – ${siteConfig.tagline}` }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}
