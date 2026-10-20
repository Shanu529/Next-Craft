import type { ServiceKind } from "@/data/services";

/** Miniature, decorative design mockups used inside service cards. */
export function ServicePreview({ kind, tall = false }: { kind: ServiceKind; tall?: boolean }) {
  const box = `relative overflow-hidden rounded-xl border border-line bg-bg ${tall ? "h-56" : "h-36"}`;
  if (kind === "web")
    return (
      <div aria-hidden className={box}>
        <div className="flex h-6 items-center gap-1 border-b border-line bg-surface px-3">
          {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-line" />)}
        </div>
        <div className="grid grid-cols-[1fr_1.2fr] gap-3 p-4">
          <div className="space-y-2"><div className="h-3 w-4/5 rounded bg-white" /><div className="h-3 w-3/5 rounded bg-white" /><div className="h-2 w-full rounded bg-line" /><div className="h-5 w-16 rounded-full bg-accent" /></div>
          <div className="h-20 rounded-lg border border-line bg-card" />
        </div>
      </div>
    );
  if (kind === "landing")
    return (
      <div aria-hidden className={`${box} flex flex-col items-center justify-center gap-2 p-4`}>
        <div className="h-3 w-2/3 rounded bg-white" /><div className="h-3 w-1/2 rounded bg-white" />
        <div className="h-2 w-3/4 rounded bg-line" />
        <div className="mt-1 h-6 w-24 rounded-full bg-accent" />
        <div className="mt-2 flex w-full gap-2">{[0, 1, 2].map((i) => <div key={i} className="h-7 flex-1 rounded border border-line bg-card" />)}</div>
      </div>
    );
  if (kind === "portfolio")
    return (
      <div aria-hidden className={`${box} grid grid-cols-3 gap-2 p-3`}>
        {["bg-card", "bg-accent", "bg-white", "bg-white", "bg-card", "bg-line"].map((c, i) => <div key={i} className={`rounded-md border border-line ${c}`} />)}
      </div>
    );
  return (
    <div aria-hidden className={`${box} grid place-items-center`}>
      <div className="relative h-24 w-40">
        <span className="absolute left-2 top-2 h-16 w-16 rounded-full bg-white" />
        <span className="absolute left-16 top-4 h-16 w-16 bg-accent" />
        <span className="absolute left-28 top-0 h-14 w-14 rounded-xl border-2 border-white" />
      </div>
    </div>
  );
}
