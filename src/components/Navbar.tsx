import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Index", sub: "Home" },
  { to: "/projects", label: "Work", sub: "Projects" },
  { to: "/services", label: "Services", sub: "What I do" },
  { to: "/about", label: "About", sub: "Who I am" },
  { to: "/contact", label: "Contact", sub: "Get in touch" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top bar — wordmark + menu trigger */}
      <header className="fixed top-0 inset-x-0 z-40 pointer-events-none">
        <div className="container-editorial flex items-start justify-between pt-5 md:pt-7">
          <Link
            to="/"
            className="pointer-events-auto font-display text-lg md:text-xl tracking-tight"
            aria-label="Shadananda Devkota — home"
          >
            <span className="opacity-50">(</span>&nbsp;Shadananda&nbsp;<span className="opacity-50">)</span>
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="pointer-events-auto md:hidden inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-foreground/20 rounded-full px-4 py-2 bg-background/70 backdrop-blur"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Floating pill nav — desktop */}
      <nav
        className={cn(
          "hidden md:flex fixed left-1/2 -translate-x-1/2 z-40 top-5 transition-all duration-500",
          scrolled ? "scale-[0.96]" : "scale-100"
        )}
        aria-label="Primary"
      >
        <ul className="flex items-center gap-1 rounded-full border border-foreground/15 bg-background/70 backdrop-blur-xl px-2 py-1.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 rounded-full text-[13px] font-mono uppercase tracking-[0.14em] transition-colors",
                    isActive
                      ? "bg-foreground text-background"
                      : "text-foreground/70 hover:text-foreground hover:bg-foreground/[0.06]"
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-1 pl-2 border-l border-foreground/15">
            <Link
              to="/contact"
              className="px-3 py-2 rounded-full text-[13px] font-mono uppercase tracking-[0.14em] inline-flex items-center gap-1.5 text-foreground/70 hover:text-foreground"
            >
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </Link>
          </li>
        </ul>
      </nav>

      {/* Fullscreen menu (mobile + secondary) */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container-editorial flex items-center justify-between h-16 md:h-20">
          <Link to="/" onClick={() => setOpen(false)} className="font-display text-xl md:text-2xl">
            <span className="opacity-50">(</span>&nbsp;Shadananda&nbsp;<span className="opacity-50">)</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest"
          >
            Close <X className="size-4" />
          </button>
        </div>

        <div className="container-editorial pt-12 md:pt-20 grid md:grid-cols-12 gap-10">
          <ul className="md:col-span-8 space-y-2 md:space-y-3">
            {links.map((l, i) => (
              <li key={l.to} className="border-b border-foreground/15 pb-3 md:pb-4">
                <NavLink to={l.to} onClick={() => setOpen(false)} className="group flex items-end justify-between gap-6">
                  <span className="font-display font-light leading-none text-[clamp(2.5rem,8vw,7rem)] tracking-tight">
                    {l.label}
                  </span>
                  <span className="hidden md:inline-block text-xs font-mono uppercase tracking-widest text-muted-foreground pb-3">
                    ( 0{i + 1} ) — {l.sub}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="md:col-span-4 flex flex-col justify-end gap-6 text-sm">
            <div>
              <p className="h-eyebrow mb-2">( Reach out )</p>
              <a href="mailto:hello@shadananda.dev" className="editorial-link block py-1">hello@shadananda.dev</a>
              <a href="https://github.com/shadananda" target="_blank" rel="noreferrer" className="editorial-link block py-1">GitHub</a>
              <a href="https://linkedin.com/in/shadananda" target="_blank" rel="noreferrer" className="editorial-link block py-1">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
