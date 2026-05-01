import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Paren from "@/components/Paren";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 — Page not found";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="container-editorial pt-40 pb-32 min-h-[80vh]">
      <Paren className="mb-10 inline-block">Error — Page not found</Paren>
      <h1 className="font-display font-light leading-[0.9] tracking-tight text-[clamp(6rem,22vw,18rem)]">
        404<span className="text-accent">.</span>
      </h1>
      <p className="mt-8 max-w-lg font-display text-2xl md:text-3xl font-light text-balance">
        This page drifted into the <span className="italic">void</span>. Let&apos;s get you back.
      </p>
      <Link
        to="/"
        className="group mt-12 inline-flex items-center gap-3 text-lg border-b border-foreground pb-1"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
        Back to home
      </Link>
    </section>
  );
};

export default NotFound;
