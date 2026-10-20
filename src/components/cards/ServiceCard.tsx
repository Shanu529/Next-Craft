import Link from "next/link";
import { ArrowUpRight, Briefcase, Globe, LayoutTemplate, PenTool } from "lucide-react";
import type { Service } from "@/data/services";
import { ServicePreview } from "./ServicePreview";

const icons = { globe: Globe, layout: LayoutTemplate, briefcase: Briefcase, pen: PenTool };

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60">
      <ServicePreview kind={service.id} />
      <Icon aria-hidden className="mt-6 h-6 w-6 text-accent" />
      <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
      <Link href={service.href} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white after:absolute after:inset-0 group-hover:text-accent">
        {service.cta}<span className="sr-only"> for {service.title}</span>
        <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
