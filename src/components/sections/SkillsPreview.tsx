import Reveal from "../Reveal";
import { skills } from "@/data/portfolio";

const colorMap: Record<string, string> = {
  primary: "text-primary group-hover:shadow-glow",
  secondary: "text-secondary group-hover:shadow-glow-cyan",
  accent: "text-accent group-hover:shadow-glow-pink",
};

const SkillsPreview = () => {
  return (
    <section id="skills" className="container relative py-24 sm:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
            01 — Skills
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient-soft">A toolkit built for</span>{" "}
            <span className="text-gradient">shipping.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From pixel-perfect interfaces to scalable backends — the full spectrum.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.label} delay={i * 0.04}>
              <div className="glass glow-border group flex h-full flex-col items-start gap-3 rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-muted/40 transition-shadow ${colorMap[s.color]}`}
                >
                  <Icon size={20} />
                </div>
                <div className="font-display text-sm font-semibold leading-snug">
                  {s.label}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsPreview;
