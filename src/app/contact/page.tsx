import { Mail } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { mailtoHref, siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = buildMetadata({
  title: "Contact – Start Your Website or Design Project",
  description: "Contact NextCraft about website development, landing page design, portfolio websites or graphic design. Email nextin766@gmail.com to start your project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <div className="container-x grid gap-14 pb-24 pt-32 md:pt-40 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Have an Idea? Let&apos;s Build It.</h1>
          <p className="mt-6 max-w-lg text-lg text-muted">Tell us what you&apos;re planning, and let&apos;s explore how NextCraft can help.</p>
          <a href={mailtoHref} className="mt-10 inline-flex items-center gap-3 break-all font-display text-2xl font-semibold underline decoration-accent decoration-2 underline-offset-8 hover:text-accent sm:text-3xl">
            <Mail aria-hidden className="h-7 w-7 shrink-0 text-accent" />{siteConfig.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={mailtoHref}>Email Us</Button>
            {siteConfig.instagramUrl && <Button href={siteConfig.instagramUrl} external variant="secondary">DM Us on Instagram</Button>}
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
