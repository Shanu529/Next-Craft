import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/sections/PageHeader";
import { Process } from "@/components/sections/Process";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "About NextCraft – Digital Creative Studio",
  description: "NextCraft is a digital creative studio combining thoughtful design, modern web development and clear communication to help businesses build a stronger online presence.",
  path: "/about",
});

const principles = [
  ["Design with purpose", "Every layout, colour and word has a job to do."],
  ["Build for real users", "Sites that are easy to read, use and navigate on any device."],
  ["Prioritize performance and usability", "Fast, accessible pages that people and search engines can rely on."],
  ["Keep communication simple", "Plain language, clear steps and no surprises."],
  ["Help clients grow their digital presence", "Work that supports your goals long after launch day."],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHeader eyebrow="About" title="Good Design Gets Attention. Great Digital Experiences Build Trust.">
        <p>NextCraft is a digital creative studio focused on helping businesses and individuals build a stronger presence online. We combine thoughtful design, modern web development, and clear communication to create digital experiences that look professional and work beautifully.</p>
      </PageHeader>
      <section className="container-x pb-20" aria-labelledby="principles-h">
        <h2 id="principles-h" className="text-2xl font-bold sm:text-3xl">How we work</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(([t, d], i) => (
            <li key={t}><Reveal delay={i * 0.05} className="h-full"><div className="h-full rounded-2xl border border-line bg-card p-6"><h3 className="text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{d}</p></div></Reveal></li>
          ))}
        </ul>
      </section>
      <Process />
      <CTASection />
    </>
  );
}
