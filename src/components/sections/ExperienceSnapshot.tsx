import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";
import { useExperience } from "@/hooks/useSanity";

const ExperienceSnapshot = () => {
  const { data: experience = [] } = useExperience();

  return (
    <section className="py-24 md:py-32 border-t border-foreground/15">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="md:col-span-4">
            <Paren>04 — Experience</Paren>
          </div>
          <div className="md:col-span-8">
            <h2 className="h-section text-balance">
              Five years<br />
              <span className="italic">in the field</span>.
            </h2>
          </div>
        </div>

        <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
          {experience.map((e: any, i: number) => (
            <Reveal key={e._id} delay={i * 0.04}>
              <li className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10">
                <span className="md:col-span-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  ( 0{i + 1} ) {e.period}
                </span>
                <div className="md:col-span-6">
                  <h3 className="font-display text-3xl md:text-4xl font-light leading-none tracking-tight">
                    {e.role}
                  </h3>
                  <p className="text-foreground/70 mt-2">
                    {e.company} <span className="opacity-50">— {e.location}</span>
                  </p>
                </div>
                <p className="md:col-span-4 text-foreground/70 text-base self-center">
                  {e.bullets?.[0]}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10">
          <Link to="/experience" className="group inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
            Full experience <ArrowUpRight className="size-4 arrow-shift" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSnapshot;
