import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/shadananda.jpg";
import Paren from "@/components/Paren";
import Marquee from "@/components/Marquee";
import SanityImage from "@/components/SanityImage";
import { useSettings } from "@/hooks/useSanity";

const Hero = () => {
  const { data: s } = useSettings();
  const location = s?.location ?? "Kathmandu, Nepal";
  const tagline = s?.tagline ?? "Quietly premium digital products, built end-to-end.";
  const marquee = s?.marquee ?? [
    "Full-Stack", "UI/UX", "Mobile", "Design Systems", "Performance",
    "Available for select projects — 2026",
  ];

  return (
    <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
      <div className="container-editorial">
        <div className="flex items-start justify-between gap-6 mb-10 md:mb-16">
          <Paren>01 — Index / Introducing</Paren>
          <Paren className="hidden md:inline">{location}</Paren>
        </div>

        <h1 className="h-display text-balance">
          Quietly <span className="italic font-normal">premium</span><br />
          digital products,<br />
          built end-to-end<span className="text-accent">.</span>
        </h1>

        <div className="mt-12 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-5">
            <div className="overflow-hidden img-zoom rounded-sm bg-muted aspect-[4/5]">
              <SanityImage
                image={s?.portrait}
                fallback={portrait}
                alt={`Portrait of ${s?.name ?? "Shadananda Devkota"}`}
                width={1024}
                height={1280}
                className="w-full h-full object-cover block"
                loading="eager"
              />
            </div>
            <p className="mt-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              ( 01 ) — {s?.name ?? "Shadananda Devkota"}
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pb-2">
            <p className="font-display text-2xl md:text-3xl leading-snug font-light text-balance">
              {tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/projects" className="group inline-flex items-center gap-2 text-base border-b border-foreground pb-1">
                See selected work
                <ArrowUpRight className="size-4 arrow-shift" />
              </Link>
              <Link to="/contact" className="group inline-flex items-center gap-2 text-base text-foreground/70 hover:text-foreground transition-colors">
                Start a project →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <Marquee items={marquee} />
      </div>
    </section>
  );
};

export default Hero;
