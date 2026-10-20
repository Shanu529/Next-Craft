import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <header className="container-x pb-12 pt-32 md:pt-40">
      {eyebrow && <p className="label mb-5">{eyebrow}</p>}
      <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{children}</div>}
    </header>
  );
}
