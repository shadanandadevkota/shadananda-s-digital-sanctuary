import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/shadananda.jpg";
import desk from "@/assets/desk.jpg";
import texture from "@/assets/texture.jpg";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";
import { profile, experience } from "@/data/portfolio";

const About = () => {
  useEffect(() => {
    document.title = "About — Shadananda Devkota";
  }, []);

  return (
    <article className="pt-32 md:pt-40 pb-20">
      <div className="container-editorial">
        <div className="flex items-start justify-between mb-10 md:mb-16">
          <Paren>About — Who I am</Paren>
          <Paren className="hidden md:inline">{profile.location}</Paren>
        </div>

        <h1 className="h-display text-balance">
          A maker who cares<br />
          about the <span className="italic">small details</span>.
        </h1>

        {/* Story */}
        <section className="mt-20 md:mt-32 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="img-zoom overflow-hidden rounded-sm">
              <img src={portrait} width={1024} height={1280} alt="Portrait" loading="lazy" className="w-full h-auto" />
            </div>
            <p className="mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              ( 01 ) — Shadananda Devkota
            </p>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <Paren className="mb-6 inline-block">01 — Story</Paren>
            <div className="space-y-6 font-display text-2xl md:text-[28px] leading-snug font-light text-balance">
              {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-24 md:mt-32 border-y border-foreground/15">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {profile.stats.map((s, i) => (
              <div key={s.v} className={`p-8 md:p-12 ${i !== 0 ? "border-l border-foreground/15" : ""} ${i < 2 ? "border-b md:border-b-0 border-foreground/15" : ""}`}>
                <p className="font-display text-5xl md:text-7xl font-light leading-none tracking-tight">{s.k}</p>
                <p className="mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mt-24 md:mt-32">
          <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
            <div className="md:col-span-4">
              <Paren>02 — Principles</Paren>
            </div>
            <div className="md:col-span-8">
              <h2 className="h-section text-balance">
                Things I&apos;ve come<br />
                to <span className="italic">believe</span>.
              </h2>
            </div>
          </div>

          <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
            {profile.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.04}>
                <li className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12">
                  <span className="md:col-span-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    ( 0{i + 1} )
                  </span>
                  <h3 className="md:col-span-4 font-display text-3xl md:text-4xl font-light leading-none tracking-tight">{v.title}</h3>
                  <p className="md:col-span-6 text-foreground/70 text-base self-center">{v.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Workspace photo */}
        <section className="mt-24 md:mt-32 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 img-zoom overflow-hidden rounded-sm">
            <img src={desk} width={1600} height={1280} alt="My workspace" loading="lazy" className="w-full h-auto block" />
          </div>
          <div className="md:col-span-4 img-zoom overflow-hidden rounded-sm">
            <img src={texture} width={1600} height={1280} alt="Texture" loading="lazy" className="w-full h-full object-cover block" />
          </div>
        </section>

        {/* Experience teaser */}
        <section className="mt-24 md:mt-32">
          <div className="flex items-end justify-between gap-6 mb-10">
            <Paren>03 — Recent roles</Paren>
            <Link to="/experience" className="group inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
              Full timeline <ArrowUpRight className="size-4 arrow-shift" />
            </Link>
          </div>
          <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
            {experience.slice(0, 3).map((e, i) => (
              <li key={i} className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8">
                <span className="md:col-span-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">{e.period}</span>
                <p className="md:col-span-5 font-display text-2xl md:text-3xl font-light leading-tight">{e.role}</p>
                <p className="md:col-span-5 text-foreground/70 text-base self-center">{e.company} — {e.location}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};

export default About;
