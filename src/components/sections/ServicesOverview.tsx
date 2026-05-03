import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Paren from "@/components/Paren";
import Reveal from "@/components/Reveal";
import { useServices } from "@/hooks/useSanity";

const ServicesOverview = () => {
  const { data: services = [] } = useServices();

  return (
    <section className="py-24 md:py-32 border-t border-foreground/15">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="md:col-span-4">
            <Paren>06 — Services</Paren>
          </div>
          <div className="md:col-span-8">
            <h2 className="h-section text-balance">
              How we&apos;ll<br />
              <span className="italic">work together</span>.
            </h2>
          </div>
        </div>

        <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
          {services.map((s: any, i: number) => (
            <Reveal key={s._id} delay={i * 0.04}>
              <li className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 transition-colors hover:bg-foreground/[0.02]">
                <span className="md:col-span-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  ( 0{i + 1} )
                </span>
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl md:text-4xl font-light leading-none tracking-tight">{s.title}</h3>
                  {s.startingAt && (
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">From {s.startingAt}</p>
                  )}
                </div>
                <p className="md:col-span-5 text-foreground/70 text-base self-center">{s.summary}</p>
                <div className="md:col-span-2 flex md:justify-end items-center">
                  <Link to="/services" className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-0.5">
                    Detail <ArrowUpRight className="size-4 arrow-shift" />
                  </Link>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesOverview;
