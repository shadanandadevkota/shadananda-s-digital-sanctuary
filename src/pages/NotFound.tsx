import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="container relative flex min-h-[80vh] flex-col items-center justify-center pt-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-secondary">Error</p>
      <h1 className="mt-4 font-display text-[10rem] font-bold leading-none text-gradient sm:text-[14rem]">
        404
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        This page drifted into the void. Let's get you back on course.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-tri px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
      >
        <ArrowLeft size={16} /> Back to home
      </Link>
    </section>
  );
};

export default NotFound;
