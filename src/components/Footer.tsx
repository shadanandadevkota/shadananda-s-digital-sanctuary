import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 mt-32 border-t border-border/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px"
        style={{ background: "var(--gradient-tri)", opacity: 0.6 }}
      />
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-gradient-tri p-[1.5px]">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background font-display text-lg font-bold text-gradient">
                  S
                </div>
              </div>
              <span className="font-display text-base font-semibold">
                Shadananda Devkota
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Full-Stack Web & Mobile App Developer crafting modern,
              performant digital experiences from Pokhara, Nepal.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:scale-110 hover:text-foreground hover:shadow-glow"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:scale-110 hover:text-foreground hover:shadow-glow-cyan"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:shadanandadevkota@gmail.com"
                aria-label="Email"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:scale-110 hover:text-foreground hover:shadow-glow-pink"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Experience", "/experience"],
                ["Services", "/services"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 shrink-0 text-secondary" />
                <a href="mailto:shadanandadevkota@gmail.com" className="hover:text-foreground">
                  shadanandadevkota@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 shrink-0 text-secondary" />
                <span>+977 9861015671</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-secondary" />
                <span>Pokhara, Gandaki, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Shadananda Devkota. All rights reserved.</p>
          <p className="font-mono">Crafted with precision · v1.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
