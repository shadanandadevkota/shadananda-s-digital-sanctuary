import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";

const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24 md:py-32 border-t border-foreground/15">
      <div className="container-editorial">
        <div className="flex items-end justify-between gap-6 mb-14 md:mb-20">
          <div>
            <Paren className="mb-6 inline-block">03 — Selected Work</Paren>
            <h2 className="h-section text-balance">
              Recent<br />
              <span className="italic">projects</span>.
            </h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 group">
            All work
            <ArrowUpRight className="size-4 arrow-shift" />
          </Link>
        </div>

        <div className="space-y-20 md:space-y-32">
          {featured.map((p, i) => {
            const reverse = i % 2 === 1;
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={p.slug}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group grid md:grid-cols-12 gap-6 md:gap-10 items-end"
                >
                  <div className={`md:col-span-7 ${reverse ? "md:order-2 md:col-start-6" : ""}`}>
                    <div className="img-zoom overflow-hidden rounded-sm bg-muted">
                      <img
                        src={p.cover}
                        loading="lazy"
                        alt={`${p.title} — cover`}
                        className="w-full h-[44vw] md:h-[36vw] max-h-[640px] object-cover"
                      />
                    </div>
                  </div>
                  <div className={`md:col-span-4 ${reverse ? "md:order-1 md:col-start-2" : ""}`}>
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                      ( {num} ) — {p.category} · {p.year}
                    </p>
                    <h3 className="font-display font-light text-4xl md:text-5xl leading-none tracking-tight mb-3">
                      {p.title}
                    </h3>
                    <p className="text-foreground/70 text-base mb-5 max-w-md">{p.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-0.5">
                      View case
                      <ArrowUpRight className="size-4 arrow-shift" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 md:hidden text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
            View all work <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
