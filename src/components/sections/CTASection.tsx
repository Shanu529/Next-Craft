import { mailtoHref, siteConfig } from "@/lib/site";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function CTASection({ showContactLink = true }: { showContactLink?: boolean }) {
  return (
    <section className="section border-t border-line" aria-labelledby="cta-heading">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-14">
          <span aria-hidden className="absolute right-0 top-0 h-10 w-10 bg-accent" />
          <h2 id="cta-heading" className="max-w-2xl text-3xl font-bold sm:text-5xl">Have an Idea? Let&apos;s Build It.</h2>
          <p className="mt-4 max-w-xl text-lg text-muted">Tell us what you&apos;re planning, and let&apos;s explore how NextCraft can help.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={mailtoHref}>Email Us</Button>
            {siteConfig.instagramUrl && <Button href={siteConfig.instagramUrl} external variant="secondary">DM Us on Instagram</Button>}
            {showContactLink && <Button href="/contact" variant="secondary">Contact page</Button>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
