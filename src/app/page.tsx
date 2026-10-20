import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Process } from "@/components/sections/Process";
import { CTASection } from "@/components/sections/CTASection";

import { Pricing } from "@/components/sections/Pricing";

export const metadata = buildMetadata({
  title: `${siteConfig.name} | Website Design Agency & Graphic Design Services`,
  description: "NextCraft is a website design agency and creative studio offering website development, landing page design, portfolio websites and graphic design services.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FeaturedWork />
      <Process />
      <Pricing />
      <CTASection />
    </>
  );
}
