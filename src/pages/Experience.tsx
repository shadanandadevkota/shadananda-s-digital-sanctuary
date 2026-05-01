import { useEffect } from "react";
import { experience } from "@/data/portfolio";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";

const Experience = () => {
  useEffect(() => {
    document.title = "Experience — Shadananda Devkota";
  }, []);

  return (
    <article className="pt-32 md:pt-40 pb-20">
      <div className="container-editorial">
        <div className="flex items-start justify-between mb-10 md:mb-16">
          <Paren>Experience — Roles & Impact</Paren>
          <Paren className="hidden md:inline">2022 → Present</Paren>
        </div>

        <h1 className="h-display text-balance">
          Five years,<br />
          a thousand <span className="italic">small problems solved</span>.
        </h1>

        <div className="mt-20 md:mt-28 space-y-20 md:space-y-28">
          {experience.map((e, i) => (
            <Reveal key={i}>
              <article className="grid md:grid-cols-12 gap-10 border-t border-foreground/30 pt-10">
                <div className="md:col-span-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    ( 0{i + 1} ) {e.period}
                  </p>
                  <p className="mt-3 text-foreground/70 text-sm">{e.location}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight leading-none">
                    {e.role}
                  </h2>
                  <p className="mt-3 text-foreground/70">{e.company}</p>

                  <p className="mt-8 font-display text-xl md:text-2xl font-light text-balance max-w-3xl">
                    {e.summary}
                  </p>

                  <ul className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-3">
                    {e.points.map((p, j) => (
                      <li key={j} className="flex gap-3 border-b border-foreground/10 py-3">
                        <span className="text-xs font-mono text-muted-foreground pt-1.5">0{j + 1}</span>
                        <span className="text-base">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Experience;
