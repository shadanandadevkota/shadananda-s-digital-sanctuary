import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/portfolio";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";

const process = [
  { title: "Discover", body: "We start with a short, focused conversation. I want to understand your audience, your constraints, and what 'done' looks like for you." },
  { title: "Design", body: "Wireframes and a tight Figma prototype before a single line of production code. We agree on the system, then build inside it." },
  { title: "Build", body: "Iterative shipping in week-long slices. You see real, deployed progress every Friday — not screenshots in a deck." },
  { title: "Polish & Ship", body: "Performance pass, accessibility audit, SEO and analytics. We launch quietly, measure, and refine." },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services — Shadananda Devkota";
  }, []);

  return (
    <article className="pt-32 md:pt-40 pb-20">
      <div className="container-editorial">
        <div className="flex items-start justify-between mb-10 md:mb-16">
          <Paren>Services — What I do</Paren>
          <Paren className="hidden md:inline">Available — Q3 2026</Paren>
        </div>

        <h1 className="h-display text-balance">
          Build with<br />
          <span className="italic">one craftsman</span><br />
          across the stack.
        </h1>

        <p className="mt-10 font-display text-2xl md:text-3xl font-light max-w-3xl text-balance">
          I work as a one-person studio — covering design, front-end, back-end and the
          quiet glue that holds a product together.
        </p>

        {/* Services list */}
        <ul className="mt-24 divide-y divide-foreground/15 border-y border-foreground/15">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.04}>
                <li className="grid md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-14">
                  <span className="md:col-span-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    ( 0{i + 1} )
                  </span>
                  <div className="md:col-span-4 flex items-start gap-4">
                    <Icon className="size-5 mt-3 text-foreground/60" strokeWidth={1.5} />
                    <h2 className="font-display text-4xl md:text-5xl font-light leading-none tracking-tight">{s.title}</h2>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-foreground/80 text-lg max-w-xl">{s.description}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="text-sm text-foreground/70 flex items-center gap-2">
                          <span className="text-foreground/30">—</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>

        {/* Process */}
        <section className="mt-32">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-4">
              <Paren>Process — How we work</Paren>
            </div>
            <div className="md:col-span-8">
              <h2 className="h-section text-balance">
                A simple,<br />
                <span className="italic">honest</span> rhythm.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="border-t border-foreground/30 pt-5">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">( 0{i + 1} )</p>
                  <h3 className="mt-3 font-display text-3xl font-light leading-none tracking-tight">{p.title}</h3>
                  <p className="mt-4 text-foreground/70 text-sm">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 border-t border-foreground/15 pt-12">
          <h2 className="h-section text-balance">
            Have something<br />
            in mind?
          </h2>
          <Link to="/contact" className="group mt-8 inline-flex items-center gap-3 text-xl border-b border-foreground pb-1">
            Start a project <ArrowUpRight className="size-5 arrow-shift" />
          </Link>
        </section>
      </div>
    </article>
  );
};

export default Services;
