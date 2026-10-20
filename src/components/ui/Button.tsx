import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 sm:text-base";
const variants = {
  primary: "bg-accent text-black hover:bg-white",
  secondary: "border border-line text-white hover:border-white",
};

export function Button({ href, children, variant = "primary", external, className = "", ariaLabel }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const isMail = href.startsWith("mailto:");
  if (external || isMail) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
