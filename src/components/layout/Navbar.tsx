"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "../ui/Button";

const mobileLinks: { label: string; href: string }[] = navLinks.flatMap<{ label: string; href: string }>((l) =>
  "children" in l ? l.children.map((c) => ({ label: c.label, href: c.href })) : [{ label: l.label, href: l.href }],
);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href === "/work/websites" ? "/work" : href));

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-line bg-bg/95" : "border-b border-transparent"}`}>
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href} className="group relative">
              <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className="relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-white aria-[current=page]:text-white">
                {l.label}
                {"children" in l && <ChevronDown aria-hidden className="h-3.5 w-3.5" />}
                {isActive(l.href) && <motion.span layoutId="nav-indicator" className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-accent" />}
              </Link>
              {"children" in l && (
                <ul className="invisible absolute left-0 top-full min-w-48 rounded-xl border border-line bg-card p-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {l.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-white">{c.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button href="/contact" className="hidden !px-5 !py-2.5 sm:inline-flex">Let&apos;s Talk</Button>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-y-auto bg-bg lg:hidden">
            <ul className="container-x flex flex-col py-6">
              {mobileLinks.map((l) => (
                <li key={l.href} className="border-b border-line">
                  <Link href={l.href} className="flex items-center justify-between py-4 font-display text-2xl font-semibold" aria-current={pathname === l.href ? "page" : undefined}>
                    {l.label}
                    {pathname === l.href && <span aria-hidden className="h-2 w-2 bg-accent" />}
                  </Link>
                </li>
              ))}
              <li className="pt-6"><Button href="/contact" className="w-full">Let&apos;s Talk</Button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
