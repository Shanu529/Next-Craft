"use client";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";

const field = "w-full rounded-xl border border-line bg-surface px-4 py-3 text-white placeholder:text-muted/70 focus:border-accent";
const options = ["Website development", "Landing page design", "Portfolio website", "Graphic design", "Something else"];

/** No backend: this composes an email in the visitor's own mail app. Nothing is sent until they press send there. */
export function ContactForm() {
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = String(data.get("message") ?? "").trim();
    if (!message) return setError("Please add a short description of your project.");
    setError("");
    const name = String(data.get("name") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const body = `Hi NextCraft,\n\n${message}\n\nService: ${service}\nName: ${name || "-"}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Project enquiry: ${service}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">Your name</label>
        <input id="name" name="name" autoComplete="name" className={field} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium">What do you need?</label>
        <select id="service" name="service" className={field}>{options.map((o) => <option key={o}>{o}</option>)}</select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">Tell us about your project</label>
        <textarea id="message" name="message" rows={5} className={field} placeholder="Goals, audience, timeline…" aria-describedby={error ? "form-error" : undefined} aria-invalid={Boolean(error)} />
        {error && <p id="form-error" role="alert" className="mt-2 text-sm text-red-400">{error}</p>}
      </div>
      <button type="submit" className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-black transition-colors hover:bg-white">Open in my email app</button>
      <p className="text-xs leading-relaxed text-muted">This opens your email app with the message pre-filled to {siteConfig.email}. Nothing is sent until you press send there.</p>
    </form>
  );
}
