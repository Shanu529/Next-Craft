import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WebsiteProject } from "@/data/websites";

export function ProjectCard({ project, priority = false }: { project: WebsiteProject; priority?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition duration-300 hover:-translate-y-1 hover:border-accent/60">
      <div className="overflow-hidden">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          priority={priority}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="label text-accent">{project.category} · Concept</p>
        <h3 className="mt-3 text-xl font-semibold">
          <Link href={`/work/websites/${project.slug}`} className="after:absolute after:inset-0">{project.title}</Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</li>)}
        </ul>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm font-semibold">
          <span className="inline-flex items-center gap-1 group-hover:text-accent">View Case Study<ArrowUpRight aria-hidden className="h-4 w-4" /></span>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="relative z-10 text-accent underline underline-offset-4">View Live Demo</a>
          )}
        </div>
      </div>
    </article>
  );
}
