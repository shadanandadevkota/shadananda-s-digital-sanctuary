import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useSettings } from "@/hooks/useSanity";

const Footer = () => {
  const { data: s } = useSettings();
  const email = s?.email ?? "hello@shadananda.dev";
  const year = new Date().getFullYear();
  return (
    <footer className="ink-section mt-32">
      <div className="container-editorial pt-24 pb-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-6 items-end">
          <div className="md:col-span-8">
            <p className="font-mono uppercase tracking-[0.2em] text-xs opacity-60 mb-6">( Let&apos;s build )</p>
            <h2 className="font-display font-light leading-[0.95] text-[clamp(2.75rem,8vw,7.5rem)] tracking-tight text-balance">
              Have an idea?<br />
              <span className="italic opacity-80">Let&apos;s ship it.</span>
            </h2>
            <a
              href={`mailto:${email}`}
              className="group mt-10 inline-flex items-center gap-3 text-lg md:text-xl border-b border-current pb-1"
            >
              {email}
              <ArrowUpRight className="size-5 arrow-shift" />
            </a>
          </div>
          <div className="md:col-span-4 grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-mono uppercase tracking-[0.2em] text-xs opacity-60 mb-4">( Menu )</p>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:opacity-100 opacity-80">Index</Link></li>
                <li><Link to="/projects" className="hover:opacity-100 opacity-80">Work</Link></li>
                <li><Link to="/services" className="hover:opacity-100 opacity-80">Services</Link></li>
                <li><Link to="/about" className="hover:opacity-100 opacity-80">About</Link></li>
                <li><Link to="/contact" className="hover:opacity-100 opacity-80">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono uppercase tracking-[0.2em] text-xs opacity-60 mb-4">( Social )</p>
              <ul className="space-y-2">
                <li><a href="https://github.com/shadananda" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">GitHub</a></li>
                <li><a href="https://linkedin.com/in/shadananda" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">LinkedIn</a></li>
                <li><a href="https://twitter.com/shadananda" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">Twitter</a></li>
                <li><a href="https://instagram.com/shadananda" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest opacity-70">
          <p>© {year} Shadananda Devkota — All rights reserved</p>
          <p>Crafted with care · Kathmandu → World</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:opacity-100">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
