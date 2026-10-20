const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteConfig = {
  name: "NextCraft",
  tagline: "DESIGN | DEVELOP | GROW",
  description:
    "NextCraft is an independent digital creative studio offering website development, landing page design, portfolio websites and graphic design services.",
  // Set NEXT_PUBLIC_SITE_URL to your production domain (no trailing slash).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")).replace(/\/$/, ""),
  email: "nextin766@gmail.com",
  // Set NEXT_PUBLIC_INSTAGRAM_URL to your real profile URL. Instagram buttons stay hidden until it is set.
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  ogImage: "/images/og.png",
  logo: "/brand/nextcraft-logo.jpg",
} as const;

export const mailtoHref = `mailto:${siteConfig.email}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  {
    label: "Our Work",
    href: "/work/websites",
    children: [
      { label: "Website Design", href: "/work/websites" },
      { label: "Graphic Design", href: "/work/graphic-design" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work/websites" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
