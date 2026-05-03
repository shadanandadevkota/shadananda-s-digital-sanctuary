import { useEffect, useMemo } from "react";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";
import { useCertificates } from "@/hooks/useSanity";

const Certificates = () => {
  const { data: certs = [] } = useCertificates();
  useEffect(() => {
    document.title = "Certificates — Shadananda Devkota";
  }, []);

  const grouped = useMemo(() => {
    const map = new Map<string, any[]>();
    for (const c of certs) {
      const k = c.group ?? "Other";
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(c);
    }
    return Array.from(map.entries());
  }, [certs]);

  return (
    <article className="pt-32 md:pt-40 pb-20">
      <div className="container-editorial">
        <div className="flex items-start justify-between mb-10 md:mb-16">
          <Paren>Certificates — Continuous learning</Paren>
          <Paren className="hidden md:inline">{certs.length} programs</Paren>
        </div>

        <h1 className="h-display text-balance">
          Always studying,<br />
          always <span className="italic">refining</span>.
        </h1>

        <div className="mt-20 md:mt-28 space-y-20">
          {grouped.map(([group, items], gi) => (
            <Reveal key={group}>
              <section className="grid md:grid-cols-12 gap-10 border-t border-foreground/30 pt-10">
                <div className="md:col-span-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    ( 0{gi + 1} ) Provider
                  </p>
                  <h2 className="mt-3 font-display text-4xl md:text-5xl font-light tracking-tight leading-none">
                    {group}
                  </h2>
                </div>
                <ul className="md:col-span-9 divide-y divide-foreground/15 border-y border-foreground/15">
                  {items.map((it: any, i: number) => (
                    <li key={it._id} className="grid md:grid-cols-12 items-center gap-4 py-5">
                      <span className="md:col-span-1 text-xs font-mono text-muted-foreground">0{i + 1}</span>
                      {it.url ? (
                        <a href={it.url} target="_blank" rel="noreferrer" className="md:col-span-9 font-display text-xl md:text-2xl font-light editorial-link">{it.title}</a>
                      ) : (
                        <h3 className="md:col-span-9 font-display text-xl md:text-2xl font-light">{it.title}</h3>
                      )}
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
