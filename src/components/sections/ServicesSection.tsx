import { services } from "@/data/services";
import { ServiceCard } from "../cards/ServiceCard";
import { Reveal } from "../ui/Reveal";

export function ServicesSection() {
  return (
    <section className="section border-t border-line" aria-labelledby="services-heading">
      <div className="container-x">
        <Reveal>
          <h2 id="services-heading" className="max-w-2xl text-3xl font-bold sm:text-4xl">Website development, landing pages, portfolios and graphic design</h2>
          <p className="mt-4 max-w-xl text-muted">Four focused services that help businesses, startups, creators and professionals look credible and grow online.</p>
        </Reveal>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.id}><Reveal delay={i * 0.06} className="h-full"><ServiceCard service={s} /></Reveal></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
