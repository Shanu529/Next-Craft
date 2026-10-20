import Link from "next/link";

/** Text-based NextCraft wordmark with the blue stepped-square accent from the brand logo. */
export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const text = size === "lg" ? "text-4xl" : "text-2xl";
  return (
    <Link href="/" aria-label="NextCraft – home" className="inline-flex items-start">
      <span className={`font-display font-bold tracking-tight text-white ${text}`}>NextCraft</span>
      <svg aria-hidden="true" viewBox="0 0 12 12" className={size === "lg" ? "-ml-1 -mt-2 h-4 w-4" : "-ml-0.5 -mt-1.5 h-3 w-3"}>
        <rect x="6" y="0" width="6" height="6" fill="#008CFF" />
        <rect x="0" y="6" width="6" height="6" fill="#008CFF" />
      </svg>
    </Link>
  );
}
