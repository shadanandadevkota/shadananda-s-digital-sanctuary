import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/shadananda.jpg";
import { profile } from "@/data/portfolio";
import Paren from "@/components/Paren";

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="container-editorial">
        <div className="flex items-start justify-between gap-6 mb-10 md:mb-16">
          <Paren>01 — Index / Introducing</Paren>
          <Paren className="hidden md:inline">{profile.location}</Paren>
        </div>

        <h1 className="h-display text-balance">
          Quietly <span className="italic font-normal">premium</span><br />
          digital products,<br />
          built end-to-end<span className="text-accent">.</span>
        </h1>

        <div className="mt-12 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-5">
            <div className="overflow-hidden img-zoom rounded-sm">
              <img
                src={portrait}
                width={1024}
                height={1280}
                alt="Portrait of Shadananda Devkota"
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              ( 01 ) — Shadananda Devkota
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pb-2">
            <p className="font-display text-2xl md:text-3xl leading-snug font-light text-balance">
              I&apos;m a full-stack developer and product designer crafting
              <span className="italic"> calm, fast, premium </span>
              digital experiences for founders and studios worldwide.
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
    </section>
  );
};

export default Hero;
