import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";

const Projects = () => {
  useEffect(() => {
    document.title = "Work — Shadananda Devkota";
  }, []);

  return (
    <article className="pt-32 md:pt-40 pb-20">
      <div className="container-editorial">
        <div className="flex items-start justify-between mb-10 md:mb-16">
          <Paren>Work — Selected projects</Paren>
          <Paren className="hidden md:inline">{projects.length} entries</Paren>
        </div>

        <h1 className="h-display text-balance">
          A small archive,<br />
          built with <span className="italic">care</span>.
        </h1>

        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-10 md:gap-16">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.05}>
              <Link to={`/projects/${p.slug}`} className="group block">
                <div className="img-zoom overflow-hidden rounded-sm bg-muted">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                      ( {String(i + 1).padStart(2, "0")} ) {p.category} · {p.year}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-light leading-none tracking-tight">{p.title}</h2>
                    <p className="mt-2 text-foreground/70">{p.tagline}</p>
                  </div>
                  <ArrowUpRight className="size-5 mt-1 arrow-shift" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Projects;
