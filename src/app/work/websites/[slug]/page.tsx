import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { getWebsiteProject, websiteProjects } from "@/data/websites";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, creativeWorkJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => websiteProjects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props) {
  const p = getWebsiteProject((await params).slug);
  if (!p) return {};
  return buildMetadata({ title: `${p.title} – Website Concept`, description: p.summary, path: `/work/websites/${p.slug}`, image: p.image.src });
}

export default async function ProjectPage({ params }: Props) {
  const p = getWebsiteProject((await params).slug);
  if (!p) notFound();
  const path = `/work/websites/${p.slug}`;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Our Work", path: "/work/websites" }, { name: "Website Design", path: "/work/websites" }, { name: p.title, path }])} />
      <JsonLd data={creativeWorkJsonLd({ name: p.title, description: `${p.description} (Sample concept.)`, image: p.image.src, path, genre: p.category })} />
      <article className="container-x pb-20 pt-28 md:pt-36">
        <Link href="/work/websites" className="inline-flex items-center gap-2 text-sm text-muted hover:text-white"><ArrowLeft aria-hidden className="h-4 w-4" />All website concepts</Link>
        <p className="label mt-8 text-accent">{p.category} · Concept project</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">{p.title}</h1>
        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <Image src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} priority sizes="(min-width: 1280px) 1216px, 92vw" className="h-auto w-full" />
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
            <p className="mt-4 rounded-xl border border-line bg-card p-4 text-sm text-muted">This is an original sample concept created by NextCraft to demonstrate our design approach. It is not a real client project, and the business shown is fictional.</p>
            {p.demoUrl && <div className="mt-6"><Button href={p.demoUrl} external>View Live Demo</Button></div>}
          </div>
          <div className="space-y-8">
            <section><h2 className="text-xl font-semibold">Design features</h2>
              <ul className="mt-4 space-y-3">{p.features.map((f) => <li key={f} className="flex items-start gap-3 text-sm"><Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{f}</li>)}</ul></section>
            <section><h2 className="text-xl font-semibold">Technologies</h2>
              <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{t}</li>)}</ul></section>
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
