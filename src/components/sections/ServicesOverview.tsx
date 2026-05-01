import { Link } from "react-router-dom";
import { Code2, Smartphone, Palette, Zap, ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { services } from "@/data/portfolio";

const iconMap = { Code2, Smartphone, Palette, Zap } as const;

const ServicesOverview = () => {
  return (
    <section className="container relative py-24 sm:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
            05 — Services
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient-soft">What I can</span>{" "}
            <span className="text-gradient">build for you.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From idea to launch — design, code, and everything in between.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Code2;
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="glass glow-border group relative h-full overflow-hidden rounded-3xl p-7 transition-shadow hover:shadow-elegant">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-tri/20 text-secondary">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-5 grid grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-gradient-tri" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore all services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default ServicesOverview;
