import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicePreview } from "@/components/cards/ServicePreview";
import { Process } from "@/components/sections/Process";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Website Development & Graphic Design Services",
  description: "Website development services, landing page design, portfolio website development and graphic design services for businesses, startups, creators and professionals.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHeader eyebrow="Services" title="Website development and graphic design services">
        <p>Whether you need a business website, a focused landing page, a professional portfolio or a visual identity, NextCraft designs and builds it with clear communication from start to finish.</p>
      </PageHeader>
      <div className="container-x space-y-6 pb-20">
        {services.map((s, i) => (
          <Reveal key={s.id}>
            <section aria-labelledby={`${s.id}-h`} className="grid items-center gap-8 rounded-3xl border border-line bg-card p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
              <div className={i % 2 ? "lg:order-2" : ""}><ServicePreview kind={s.id} tall /></div>
              <div>
                <h2 id={`${s.id}-h`} className="text-2xl font-bold sm:text-3xl">{s.title}</h2>
                <p className="mt-3 text-muted">{s.description}</p>
                <ul className="mt-6 space-y-3">
                  {s.includes.map((x) => <li key={x} className="flex items-start gap-3 text-sm"><Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{x}</li>)}
                </ul>
                <Link href={s.href} className="mt-8 inline-flex items-center gap-1 font-semibold text-accent underline underline-offset-4">{s.cta}<ArrowUpRight aria-hidden className="h-4 w-4" /></Link>
              </div>
            </section>
          </Reveal>
        ))}
      </div>
      <Process />
      <CTASection />
    </>
  );
}
