import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
        )}
      >
        <div className="container-editorial flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-display text-xl md:text-2xl tracking-tight" aria-label="Shadananda Devkota — home">
            <span className="opacity-50">(</span>&nbsp;Shadananda&nbsp;<span className="opacity-50">)</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.slice(1).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "relative py-1 transition-colors",
                    isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                  )
                }
              >
                {({ isActive }) => (
                  <span className="inline-flex items-center gap-1.5">
                    {isActive && <span className="text-foreground/40">*</span>}
                    {l.label}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest"
            aria-label="Open menu"
          >
            <span className="opacity-50">(</span> Menu <span className="opacity-50">)</span>
          </button>
        </div>
      </header>

      {/* Fullscreen menu */}
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
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="group flex items-end justify-between gap-6"
                >
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
            <div>
              <p className="h-eyebrow mb-2">( Based in )</p>
              <p>Kathmandu, Nepal — Working worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* hidden trigger for menu icon on mobile */}
      <span className="sr-only">{open ? "menu open" : "menu closed"}</span>
      <Menu className="hidden" />
    </>
  );
};

export default Navbar;
