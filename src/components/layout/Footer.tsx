import Link from "next/link";
import { footerLinks, mailtoHref, siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-5">
          <Logo size="lg" />
          <p className="text-xs font-medium tracking-[0.25em] text-white">{siteConfig.tagline}</p>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            NextCraft is an independent digital creative studio for website development, landing page design, portfolio websites and graphic design.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-4 text-sm font-semibold text-white">Explore</h2>
          <ul className="space-y-3 text-sm text-muted">
            {footerLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">Have an idea? Let&apos;s build it.</h2>
          <ul className="space-y-3 text-sm text-muted">
            <li><a href={mailtoHref} className="text-white underline decoration-accent underline-offset-4 hover:text-accent">{siteConfig.email}</a></li>
            {siteConfig.instagramUrl && (
              <li><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-x py-6 text-xs text-muted">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Portfolio pieces shown are sample concepts, not client work.</p>
      </div>
    </footer>
  );
}
