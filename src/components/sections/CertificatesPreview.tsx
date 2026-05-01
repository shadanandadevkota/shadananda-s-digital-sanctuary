import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { certificates } from "@/data/portfolio";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";

const CertificatesPreview = () => {
  return (
    <section className="py-24 md:py-32 border-t border-foreground/15">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="md:col-span-4">
            <Paren>05 — Continuous Learning</Paren>
          </div>
          <div className="md:col-span-8">
            <h2 className="h-section text-balance">
              Studied,<br />
              <span className="italic">refined</span>.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {certificates.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05}>
              <div className="border-t border-foreground/30 pt-5">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                  ( 0{gi + 1} ) {g.group}
                </p>
                <ul className="space-y-4">
                  {g.items.map((it) => (
                    <li key={it.title} className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-3">
                      <span className="font-display text-lg">{it.title}</span>
                      <span className="text-xs font-mono text-muted-foreground">{it.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/certificates" className="group inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
            All certificates <ArrowUpRight className="size-4 arrow-shift" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificatesPreview;
