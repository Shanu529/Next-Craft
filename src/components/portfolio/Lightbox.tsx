"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { DesignPiece } from "@/data/designs";

type Props = { items: DesignPiece[]; index: number; onClose: () => void; onChange: (i: number) => void };

export function Lightbox({ items, index, onClose, onChange }: Props) {
  const item = items[index];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const handlers = useRef({ onClose, onChange, index, total: items.length });
  handlers.current = { onClose, onChange, index, total: items.length };

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      const h = handlers.current;
      if (e.key === "Escape") h.onClose();
      else if (e.key === "ArrowRight") h.onChange((h.index + 1) % h.total);
      else if (e.key === "ArrowLeft") h.onChange((h.index - 1 + h.total) % h.total);
      else if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]");
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, []);

  const nav = "grid h-12 w-12 place-items-center rounded-full border border-line bg-bg/80 text-white transition-colors hover:border-white";

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={`${item.title}, ${item.category}`} className="flex max-h-full w-full max-w-6xl flex-col gap-4 overflow-y-auto lg:flex-row lg:items-center">
        <div className="flex min-h-0 flex-1 items-center justify-center">
          <motion.div key={item.id} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }}>
            <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(min-width: 1024px) 65vw, 95vw" priority className="h-auto max-h-[65vh] w-auto max-w-full rounded-lg object-contain lg:max-h-[85vh]" />
          </motion.div>
        </div>
        <div className="w-full shrink-0 rounded-2xl border border-line bg-card p-6 lg:w-80">
          <p className="label text-accent">{item.category}</p>
          <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
          <p className="mt-4 text-xs text-muted">Sample concept, not client work.</p>
          <div className="mt-6 flex items-center justify-between">
            <button type="button" className={nav} aria-label="Previous design" onClick={() => onChange((index - 1 + items.length) % items.length)}><ChevronLeft aria-hidden className="h-5 w-5" /></button>
            <span className="text-sm text-muted" aria-live="polite">{index + 1} / {items.length}</span>
            <button type="button" className={nav} aria-label="Next design" onClick={() => onChange((index + 1) % items.length)}><ChevronRight aria-hidden className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
      <button ref={closeRef} type="button" aria-label="Close preview" onClick={onClose} className={`${nav} absolute right-4 top-4`}><X aria-hidden className="h-5 w-5" /></button>
    </motion.div>
  );
}
