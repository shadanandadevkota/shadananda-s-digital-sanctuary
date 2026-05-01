import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import Reveal from "../Reveal";
import { experience } from "@/data/portfolio";

const ExperienceSnapshot = () => {
  return (
    <section className="container relative py-24 sm:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
              03 — Experience
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient-soft">A journey of</span>{" "}
              <span className="text-gradient">building.</span>
            </h2>
          </div>
          <Link
            to="/experience"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Full timeline
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <div className="relative mt-14">
        {/* timeline line */}
        <div
          aria-hidden
          className="absolute left-5 top-2 bottom-2 w-px md:left-1/2"
          style={{
            background:
              "linear-gradient(180deg, transparent, hsl(var(--primary) / 0.6), hsl(var(--secondary) / 0.6), transparent)",
          }}
        />

        <div className="space-y-8">
          {experience.map((e, i) => (
            <Reveal key={`${e.company}-${e.role}`} delay={i * 0.08}>
              <div
                className={`relative grid gap-6 md:grid-cols-2 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* dot */}
                <div className="absolute left-5 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-tri shadow-glow md:left-1/2" />

                <div className="glass glow-border ml-12 rounded-2xl p-6 md:ml-0 md:mr-8 md:[&]:has-data-side='right']:ml-8">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-secondary">
                    <Briefcase size={12} />
                    {e.period}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold">{e.role}</h3>
                  <p className="text-sm text-gradient font-medium">{e.company} · {e.location}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {e.points.slice(0, 2).map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:block" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSnapshot;
