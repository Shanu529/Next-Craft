import { Reveal } from "../ui/Reveal";

const steps = [
  { n: "01", title: "Discover", text: "Understand the client's goals, audience, requirements, and expectations." },
  { n: "02", title: "Design", text: "Create the visual direction, layouts, and creative concepts." },
  { n: "03", title: "Develop", text: "Build a responsive, accessible, and performant website or deliver the agreed design assets." },
  { n: "04", title: "Deliver", text: "Review the result, make agreed revisions, and provide the final deliverables." },
];

export function Process() {
  return (
    <section className="section border-t border-line" aria-labelledby="process-heading">
      <div className="container-x">
        <Reveal>
          <h2 id="process-heading" className="max-w-2xl text-3xl font-bold sm:text-4xl">A simple four-step process</h2>
          <p className="mt-4 max-w-xl text-muted">Clear stages, simple communication, and no surprises from first conversation to final delivery.</p>
        </Reveal>
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.n} className="relative pl-10 md:pl-0 md:pt-12">
              {i < steps.length - 1 && (
                <span aria-hidden className="absolute bottom-[-2.5rem] left-[11px] top-3 w-px bg-line md:bottom-auto md:left-6 md:right-[-1.5rem] md:top-[11px] md:h-px md:w-auto" />
              )}
              <span aria-hidden className="absolute left-0 top-0 grid h-6 w-6 place-items-center rounded-full border border-accent bg-bg">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <p className="font-display text-sm font-semibold text-accent">{s.n}</p>
              <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
