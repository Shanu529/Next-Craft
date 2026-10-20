export type ServiceKind = "web" | "landing" | "portfolio" | "graphic";

export type Service = {
  id: ServiceKind;
  title: string;
  description: string;
  icon: "globe" | "layout" | "briefcase" | "pen";
  includes: string[];
  href: string;
  cta: string;
};

export const services: Service[] = [
  {
    id: "web",
    title: "Website Development",
    description:
      "Custom, responsive, modern websites designed to help businesses establish credibility and grow online.",
    icon: "globe",
    includes: ["Business website development", "Responsive layouts for every screen", "On-page SEO foundations", "Fast, accessible builds"],
    href: "/work/websites",
    cta: "View Projects",
  },
  {
    id: "landing",
    title: "Landing Page Design",
    description:
      "Focused landing pages designed around clear messaging, strong visual hierarchy, and conversion goals.",
    icon: "layout",
    includes: ["Message and layout planning", "Clear calls to action", "Mobile-first design", "Built to load quickly"],
    href: "/work/websites/saas-launch",
    cta: "View Projects",
  },
  {
    id: "portfolio",
    title: "Portfolio Website Development",
    description:
      "Professional portfolio websites for developers, designers, freelancers, creators, and professionals.",
    icon: "briefcase",
    includes: ["Project showcase layouts", "Case study pages", "Contact and enquiry links", "Easy-to-update content"],
    href: "/work/websites/developer-portfolio",
    cta: "View Projects",
  },
  {
    id: "graphic",
    title: "Graphic Design",
    description:
      "Branding, social media creatives, promotional banners, marketing materials, and other visual assets.",
    icon: "pen",
    includes: ["Logo and brand concepts", "Social media creatives", "Posters and promotional banners", "Marketing materials"],
    href: "/work/graphic-design",
    cta: "View Projects",
  },
];
