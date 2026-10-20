import { designs } from "@/data/designs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, galleryJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/sections/PageHeader";
import { DesignGallery } from "@/components/portfolio/DesignGallery";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = buildMetadata({
  title: "Graphic Design Portfolio – Sample Concepts",
  description: "Browse NextCraft's graphic design portfolio: social media posts, logo concepts, posters, product ads and marketing banners. Filter by category and view each design full size.",
  path: "/work/graphic-design",
});

export default function GraphicDesignPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Our Work", path: "/work/websites" }, { name: "Graphic Design", path: "/work/graphic-design" }])} />
      <JsonLd data={galleryJsonLd(designs)} />
      <PageHeader eyebrow="Our Work" title="Graphic design portfolio">
        <p>Social media creatives, brand identity concepts, posters, advertisements and marketing banners. Every piece here is an original sample concept made to show our range, not client work. Select any design to view it full size.</p>
      </PageHeader>
      <section aria-label="Design gallery" className="container-x pb-20">
        <DesignGallery items={designs} />
      </section>
      <CTASection />
    </>
  );
}
