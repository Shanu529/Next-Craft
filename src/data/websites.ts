export type WebsiteProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  image: { src: string; width: number; height: number; alt: string };
  features: string[];
  tech: string[];
  /** Set a real, deployed URL to show a "View Live Demo" action. Leave undefined for case-study-only concepts. */
  demoUrl?: string;
};

const img = (slug: string, alt: string) => ({ src: `/images/websites/${slug}.webp`, width: 1600, height: 1000, alt });

export const websiteProjects: WebsiteProject[] = [
  {
    slug: "saas-launch",
    title: "Orbit – SaaS Landing Page",
    category: "Landing Page",
    summary: "A product landing page concept for a project-management startup, built around one clear promise and one primary action.",
    description:
      "A concept landing page for a fictional project-management tool. The layout leads with a single headline and call to action, then proves the product with a live-looking dashboard preview. It shows how we structure landing page design around messaging, hierarchy and conversion.",
    image: img("saas-launch", "Concept landing page for a fictional SaaS product with a dark interface and dashboard preview"),
    features: ["Single clear call to action", "Product preview above the fold", "High-contrast dark interface", "Mobile-first section stacking"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "ember-oak-restaurant",
    title: "Ember & Oak – Restaurant Website",
    category: "Business Website",
    summary: "A warm, appetite-first restaurant concept with menu highlights and a prominent reservation action.",
    description:
      "A concept website for a fictional fire-cooked restaurant. Large type, a plate-focused hero and quick access to the menu and bookings make the essentials easy to find on any device.",
    image: img("ember-oak-restaurant", "Concept restaurant website with a cream background, plate illustration and menu cards"),
    features: ["Reservation call to action", "Menu highlight cards", "Warm, readable palette", "Phone-friendly layout"],
    tech: ["Next.js", "Tailwind CSS", "next/image"],
  },
  {
    slug: "developer-portfolio",
    title: "jordan.dev – Developer Portfolio",
    category: "Portfolio Website",
    summary: "A personal portfolio concept for a developer, with a code-inspired hero and project cards.",
    description:
      "A concept portfolio website for a fictional developer. A confident headline, code-window visual and project cards make it easy for visitors to see skills and get in touch.",
    image: img("developer-portfolio", "Concept developer portfolio website with a dark theme and a code window"),
    features: ["Project case study cards", "Code-inspired hero visual", "Clear contact route", "Fast static pages"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "form-field-store",
    title: "Form & Field – E-commerce Storefront",
    category: "E-commerce",
    summary: "A clean storefront concept for a furniture brand with filters and a product grid.",
    description:
      "A concept e-commerce storefront for a fictional furniture brand. A filter sidebar, consistent product tiles and a visible cart action keep browsing simple and scannable.",
    image: img("form-field-store", "Concept e-commerce storefront with a filter sidebar and a product grid"),
    features: ["Filter sidebar", "Consistent product grid", "Persistent cart action", "Clear price hierarchy"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "studio-north-agency",
    title: "Studio North – Creative Agency",
    category: "Agency Website",
    summary: "A bold, type-led agency concept with strong colour blocks and service tiles.",
    description:
      "A concept website for a fictional creative agency. Oversized typography and flat colour blocks give it a confident, editorial feel while keeping services easy to scan.",
    image: img("studio-north-agency", "Concept creative agency website with oversized black typography and colour blocks"),
    features: ["Type-led hero", "Service tiles", "Bold colour blocking", "Lightweight, fast layout"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "harbor-pine-consulting",
    title: "Harbor & Pine – Consulting Website",
    category: "Business Website",
    summary: "A trustworthy consulting concept with a clear value proposition and service overview.",
    description:
      "A concept business website for a fictional consultancy. A calm navy palette, a direct headline and three service cards build credibility quickly and lead to a single booking action.",
    image: img("harbor-pine-consulting", "Concept consulting website with a navy hero section and three service cards"),
    features: ["Clear value proposition", "Service overview cards", "Single booking call to action", "Credibility-first layout"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const getWebsiteProject = (slug: string) => websiteProjects.find((p) => p.slug === slug);
