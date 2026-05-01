import { Link } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
}

/** Lightweight placeholder for subpages built in the next phase. */
const PlaceholderPage = ({ eyebrow, title, description }: PlaceholderPageProps) => {
  return (
    <section className="container relative min-h-[80vh] pt-40 pb-24">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[400px]" style={{ background: "var(--gradient-radial)" }} />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">{eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl">
          <span className="text-gradient">{title}</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">{description}</p>

        <div className="glass glow-border mx-auto mt-12 inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-sm text-muted-foreground">
          <Construction size={16} className="text-accent" />
          Detailed page coming in the next build phase.
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlaceholderPage;
