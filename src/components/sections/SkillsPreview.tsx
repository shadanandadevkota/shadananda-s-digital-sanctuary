import { skills } from "@/data/portfolio";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";

const groups = Array.from(new Set(skills.map((s) => s.group)));

const SkillsPreview = () => {
  return (
    <section className="py-24 md:py-32 border-t border-foreground/15">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="md:col-span-4">
            <Paren>02 — Capabilities</Paren>
          </div>
          <div className="md:col-span-8">
            <h2 className="h-section text-balance">
              A practiced range,<br />
              <span className="italic">end-to-end</span>.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-x-10 gap-y-16">
          {groups.map((group, gi) => {
            const items = skills.filter((s) => s.group === group);
            return (
              <Reveal key={group} delay={gi * 0.05} className="md:col-span-6 lg:col-span-3">
                <div className="border-t border-foreground/30 pt-5">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                    ( 0{gi + 1} ) {group}
                  </p>
                  <ul className="space-y-3">
                    {items.map((s) => {
                      const Icon = s.icon;
                      return (
                        <li key={s.label} className="flex items-center gap-3 text-base font-display">
                          <Icon className="size-4 text-foreground/60 shrink-0" strokeWidth={1.5} />
                          <span>{s.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
