import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Paren from "@/components/Paren";
import SanityImage from "@/components/SanityImage";
import { useProject, useProjects } from "@/hooks/useSanity";

const FALLBACK_COVER = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80";

const ProjectDetail = () => {
  const { slug } = useParams();
  const { data: project, isLoading } = useProject(slug);
  const { data: projects = [] } = useProjects();

  const next = useMemo(() => {
    if (!projects.length) return undefined;
    const idx = projects.findIndex((p: any) => p.slug === slug);
    return projects[(idx + 1) % projects.length];
  }, [projects, slug]);

  useEffect(() => {
    if (project?.title) document.title = `${project.title} — Shadananda Devkota`;
  }, [project]);

  if (!isLoading && !project) {
    return (
      <div className="pt-40 pb-20 container-editorial">
        <Paren className="mb-8 inline-block">404</Paren>
        <h1 className="h-section">Project not found.</h1>
        <Link to="/projects" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1">
          <ArrowLeft className="size-4" /> Back to work
        </Link>
      </div>
    );
  }

  if (!project) {
    return <div className="pt-40 pb-20 container-editorial text-foreground/50">Loading…</div>;
  }

  return (
    <article className="pt-32 md:pt-40 pb-20">
      <div className="container-editorial">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors mb-10">
          <ArrowLeft className="size-4" /> All work
        </Link>

        <div className="flex items-start justify-between gap-6 mb-10">
          <Paren>{project.role ?? "Project"} · {project.year}</Paren>
          {project.client && <Paren className="hidden md:inline">{project.client}</Paren>}
        </div>

        <h1 className="h-display text-balance">{project.title}<span className="text-accent">.</span></h1>
        {project.tagline && (
          <p className="mt-8 font-display text-2xl md:text-3xl font-light text-balance max-w-3xl">
            {project.tagline}
          </p>
        )}

        <div className="mt-16 md:mt-20 img-zoom overflow-hidden rounded-sm bg-muted">
          <SanityImage image={project.cover} fallback={FALLBACK_COVER} alt={project.title} width={1920} className="w-full h-auto block" loading="eager" />
        </div>

        <section className="mt-20 grid md:grid-cols-12 gap-10 border-y border-foreground/15 py-10 md:py-14">
          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">( Role )</p>
            <p className="font-display text-xl">{project.role ?? "—"}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">( Client )</p>
            <p className="font-display text-xl">{project.client ?? "—"}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">( Year )</p>
            <p className="font-display text-xl">{project.year ?? "—"}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">( Stack )</p>
            <p className="text-base">{(project.tech ?? []).join(" · ")}</p>
          </div>
        </section>

        <section className="mt-20 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7 prose-editorial">
            <Paren className="mb-6 inline-block">01 — Overview</Paren>
            {project.body?.length ? (
              <div className="font-display text-2xl md:text-3xl font-light leading-snug text-balance space-y-6">
                <PortableText value={project.body} />
              </div>
            ) : (
              <p className="font-display text-2xl md:text-3xl font-light leading-snug text-balance">{project.tagline}</p>
            )}
          </div>
          {project.highlights?.length ? (
            <div className="md:col-span-5">
              <Paren className="mb-6 inline-block">02 — Highlights</Paren>
              <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
                {project.highlights.map((h: string, i: number) => (
                  <li key={i} className="py-4 flex gap-4">
                    <span className="text-xs font-mono text-muted-foreground pt-1.5">0{i + 1}</span>
                    <span className="text-base">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>

        {project.gallery?.length ? (
          <section className="mt-24 space-y-6">
            {project.gallery.map((src: any, i: number) => (
              <div key={i} className="img-zoom overflow-hidden rounded-sm bg-muted">
                <SanityImage image={src} alt={`${project.title} — view ${i + 1}`} width={1920} className="w-full h-auto block" />
              </div>
            ))}
          </section>
        ) : null}

        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-16 inline-flex items-center gap-2 text-base border-b border-foreground pb-1">
            Visit live site <ExternalLink className="size-4" />
          </a>
        )}

        {next && (
          <section className="mt-32 border-t border-foreground/15 pt-10">
            <Paren className="mb-4 inline-block">Next project</Paren>
            <Link to={`/projects/${next.slug}`} className="group flex items-end justify-between gap-6">
              <h3 className="font-display font-light text-5xl md:text-7xl tracking-tight leading-none">
                {next.title}
              </h3>
              <ArrowUpRight className="size-8 arrow-shift" />
            </Link>
          </section>
        )}
      </div>
    </article>
  );
};

export default ProjectDetail;
