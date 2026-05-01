import { Link } from "react-router-dom";
import { Award, ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { certificates } from "@/data/portfolio";

const CertificatesPreview = () => {
  const preview = certificates.flatMap((g) =>
    g.items.slice(0, 2).map((it) => ({ ...it, group: g.group }))
  );

  return (
    <section className="container relative py-24 sm:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
              04 — Certifications
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient-soft">Always</span>{" "}
              <span className="text-gradient">learning.</span>
            </h2>
          </div>
          <Link
            to="/certificates"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {preview.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="glass glow-border group h-full rounded-2xl p-5 transition-transform hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-tri/20 text-secondary">
                <Award size={20} />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {c.group} · {c.year}
              </p>
              <h3 className="mt-1 font-display text-base font-semibold leading-snug">
                {c.title}
              </h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default CertificatesPreview;
