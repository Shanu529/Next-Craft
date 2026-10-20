import { websiteProjects } from "@/data/websites";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Website Design Portfolio – Sample Concepts",
  description: "Browse NextCraft's website design portfolio: SaaS landing pages, restaurant, portfolio, e-commerce, agency and business website concepts.",
  path: "/work/websites",
});

export default function WebsitesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Our Work", path: "/work/websites" }, { name: "Website Design", path: "/work/websites" }])} />
      <PageHeader eyebrow="Our Work" title="Website design portfolio">
        <p>Six original website concepts across the kinds of sites we build: landing pages, business websites, portfolios and online stores. These are sample concepts created to show our approach, not completed client projects.</p>
      </PageHeader>
      <ul className="container-x grid gap-5 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {websiteProjects.map((p, i) => <li key={p.slug}><Reveal className="h-full"><ProjectCard project={p} priority={i < 3} /></Reveal></li>)}
      </ul>
      <CTASection />
    </>
  );
}
