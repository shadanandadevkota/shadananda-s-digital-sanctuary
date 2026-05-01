import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "../Reveal";

const CallToAction = () => {
  return (
    <section className="container relative py-24 sm:py-32">
      <Reveal>
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-16">
          {/* decorative glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{ background: "hsl(var(--primary) / 0.5)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "hsl(var(--secondary) / 0.5)" }}
          />
          <div aria-hidden className="absolute inset-0 grid-bg opacity-20" />

          <div className="relative">
            <div className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles size={12} className="text-accent" />
              Open for new projects
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              <span className="text-gradient-soft">Let's build something</span>{" "}
              <span className="text-gradient">amazing.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Got a product idea, redesign, or feature you want shipped?
              Let's talk — I respond within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-tri px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
              >
                Start a project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:shadanandadevkota@gmail.com"
                className="glass glow-border inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-105"
              >
                shadanandadevkota@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CallToAction;
