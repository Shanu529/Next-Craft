import Image from "next/image";
import Link from "next/link";
import { designs } from "@/data/designs";
import { websiteProjects } from "@/data/websites";
import { ProjectCard } from "../cards/ProjectCard";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function FeaturedWork() {
  return (
    <section className="section border-t border-line" aria-labelledby="work-heading">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="work-heading" className="max-w-2xl text-3xl font-bold sm:text-4xl">Selected sample work</h2>
            <p className="mt-4 max-w-xl text-muted">Original concept projects that show how we approach website design and visual identity. None of these are client projects.</p>
          </div>
          <Button href="/work/websites" variant="secondary">All website concepts</Button>
        </Reveal>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {websiteProjects.slice(0, 3).map((p) => (
            <li key={p.slug}><Reveal className="h-full"><ProjectCard project={p} /></Reveal></li>
          ))}
        </ul>
        <div className="mt-16 flex flex-wrap items-end justify-between gap-6">
          <h3 className="text-2xl font-semibold">Graphic design</h3>
          <Link href="/work/graphic-design" className="text-sm font-semibold text-accent underline underline-offset-4">Browse the full graphic design portfolio</Link>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[designs[1], designs[7], designs[10], designs[4]].map((d) => (
            <li key={d.id} className="overflow-hidden rounded-xl border border-line">
              <Link href="/work/graphic-design" aria-label={`View graphic design portfolio: ${d.title}`}>
                <Image src={d.src} alt={d.alt} width={d.width} height={d.height} sizes="(min-width: 768px) 25vw, 46vw" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
