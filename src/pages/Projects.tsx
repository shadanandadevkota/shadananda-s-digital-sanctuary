import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";
import SanityImage from "@/components/SanityImage";
import { useProjects } from "@/hooks/useSanity";

const FALLBACKS = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600&q=80",
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1600&q=80",
];

const Projects = () => {
  const { data: projects = [] } = useProjects();
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
          {projects.map((p: any, i: number) => (
            <Reveal key={p._id} delay={(i % 2) * 0.05}>
              <Link to={`/projects/${p.slug}`} className="group block">
                <div className="img-zoom overflow-hidden rounded-sm bg-muted">
                  <SanityImage
                    image={p.cover}
                    fallback={FALLBACKS[i % FALLBACKS.length]}
                    alt={p.title}
                    width={1600}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                      ( {String(i + 1).padStart(2, "0")} ) {p.role ?? "Project"} · {p.year}
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
