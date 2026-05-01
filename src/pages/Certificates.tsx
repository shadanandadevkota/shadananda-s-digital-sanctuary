import { useEffect } from "react";
import { certificates } from "@/data/portfolio";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";

const Certificates = () => {
  useEffect(() => {
    document.title = "Certificates — Shadananda Devkota";
  }, []);

  const total = certificates.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <article className="pt-32 md:pt-40 pb-20">
      <div className="container-editorial">
        <div className="flex items-start justify-between mb-10 md:mb-16">
          <Paren>Certificates — Continuous learning</Paren>
          <Paren className="hidden md:inline">{total} programs</Paren>
        </div>

        <h1 className="h-display text-balance">
          Always studying,<br />
          always <span className="italic">refining</span>.
        </h1>

        <div className="mt-20 md:mt-28 space-y-20">
          {certificates.map((g, gi) => (
            <Reveal key={g.group}>
              <section className="grid md:grid-cols-12 gap-10 border-t border-foreground/30 pt-10">
                <div className="md:col-span-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    ( 0{gi + 1} ) Provider
                  </p>
                  <h2 className="mt-3 font-display text-4xl md:text-5xl font-light tracking-tight leading-none">
                    {g.group}
                  </h2>
                </div>
                <ul className="md:col-span-9 divide-y divide-foreground/15 border-y border-foreground/15">
                  {g.items.map((it, i) => (
                    <li key={it.title} className="grid md:grid-cols-12 items-center gap-4 py-5">
                      <span className="md:col-span-1 text-xs font-mono text-muted-foreground">0{i + 1}</span>
                      <h3 className="md:col-span-9 font-display text-xl md:text-2xl font-light">{it.title}</h3>
                      <span className="md:col-span-2 md:text-right text-xs font-mono text-muted-foreground">{it.year}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Certificates;
