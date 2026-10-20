"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { designCategories, type DesignPiece } from "@/data/designs";
import { Lightbox } from "./Lightbox";

export function DesignGallery({ items }: { items: DesignPiece[] }) {
  const [active, setActive] = useState<(typeof designCategories)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const filtered = useMemo(() => (active === "All" ? items : items.filter((i) => i.category === active)), [active, items]);

  return (
    <div>
      <div role="group" aria-label="Filter designs by category" className="flex flex-wrap gap-2">
        {designCategories.map((c) => (
          <button key={c} type="button" aria-pressed={active === c} onClick={() => setActive(c)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${active === c ? "border-accent bg-accent text-black" : "border-line text-muted hover:border-white hover:text-white"}`}>
            {c}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted" aria-live="polite">Showing {filtered.length} sample {filtered.length === 1 ? "design" : "designs"}{active !== "All" ? ` in ${active}` : ""}.</p>

      <ul className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5 [&>li]:break-inside-avoid">
        {filtered.map((d, i) => (
          <motion.li key={d.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
            <button type="button" onClick={() => setOpenIndex(i)} aria-label={`View ${d.title}, ${d.category}`} className="group relative block w-full overflow-hidden rounded-xl border border-line bg-card text-left">
              <Image src={d.src} alt={d.alt} width={d.width} height={d.height} loading={i < 3 ? "eager" : "lazy"} sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw" className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-bg/90 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="block text-xs text-accent">{d.category}</span>
                <span className="block text-sm font-semibold">{d.title}</span>
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {openIndex !== null && filtered[openIndex] && (
          <Lightbox key="lightbox" items={filtered} index={openIndex} onClose={() => setOpenIndex(null)} onChange={setOpenIndex} />
        )}
      </AnimatePresence>
    </div>
  );
}
