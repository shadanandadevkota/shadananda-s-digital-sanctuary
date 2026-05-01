import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import TiltCard from "../TiltCard";
import { projects } from "@/data/portfolio";

const accentMap: Record<string, string> = {
  primary: "from-primary/30 via-primary/10",
  secondary: "from-secondary/30 via-secondary/10",
  accent: "from-accent/30 via-accent/10",
};

const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  return (
    <section className="container relative py-24 sm:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
              02 — Featured Work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient-soft">Selected</span>{" "}
              <span className="text-gradient">projects.</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <TiltCard className="h-full">
              <Link
                to={`/projects/${p.slug}`}
                className="glass glow-border group relative block h-full overflow-hidden rounded-3xl p-6 transition-shadow hover:shadow-elegant"
              >
                {/* gradient cover */}
                <div className="relative mb-6 h-48 overflow-hidden rounded-2xl border border-border/40">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accentMap[p.accent]} to-transparent`}
                  />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display text-6xl font-bold text-gradient opacity-30">
                      {p.title.split(" ")[0]}
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    {p.category}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight transition-colors group-hover:text-gradient">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-muted/30 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
