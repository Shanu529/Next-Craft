import { siteConfig } from "./site";

const abs = (p: string) => `${siteConfig.url}${p}`;
const orgId = `${siteConfig.url}/#organization`;

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: abs(siteConfig.logo),
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  email: siteConfig.email,
  contactPoint: { "@type": "ContactPoint", email: siteConfig.email, contactType: "customer inquiries" },
  ...(siteConfig.instagramUrl ? { sameAs: [siteConfig.instagramUrl] } : {}),
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: { "@id": orgId },
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});

export const creativeWorkJsonLd = (w: { name: string; description: string; image: string; path: string; genre: string }) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: w.name,
  description: w.description,
  image: abs(w.image),
  url: abs(w.path),
  genre: w.genre,
  creator: { "@id": orgId },
});

export const galleryJsonLd = (items: { title: string; description: string; src: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "NextCraft graphic design portfolio (sample concepts)",
  url: abs("/work/graphic-design"),
  creator: { "@id": orgId },
  image: items.map((i) => ({ "@type": "ImageObject", name: i.title, description: i.description, contentUrl: abs(i.src) })),
});
