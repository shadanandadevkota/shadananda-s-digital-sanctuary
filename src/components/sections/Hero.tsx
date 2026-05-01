import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Hero3D from "../Hero3D";

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-32">
      {/* grid bg */}
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      {/* radial glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[600px]"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <Sparkles size={12} className="text-secondary" />
              Available for freelance & full-time roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="text-gradient-soft">Full-Stack Developer</span>
              <br />
              <span className="text-gradient">Crafting Modern</span>
              <br />
              <span className="text-gradient-soft">Digital Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I'm <span className="font-medium text-foreground">Shadananda Devkota</span> — a
              web & mobile app developer and UI/UX designer based in Pokhara, Nepal.
              I build elegant, scalable products that feel as good as they look.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-tri px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="glass glow-border inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
              >
                <Mail size={16} />
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex items-center gap-8 border-t border-border/50 pt-6"
            >
              {[
                { v: "3+", l: "Years" },
                { v: "20+", l: "Projects" },
                { v: "100%", l: "Client Focus" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 3D side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[420px] sm:h-[520px] lg:h-[600px]"
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
