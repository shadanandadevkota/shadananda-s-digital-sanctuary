import { ArrowUpRight } from "lucide-react";
import Paren from "@/components/Paren";
import { useSettings } from "@/hooks/useSanity";

const CallToAction = () => {
  const { data: s } = useSettings();
  const email = s?.email ?? "hello@shadananda.dev";
  return (
    <section className="py-24 md:py-32 border-t border-foreground/15">
      <div className="container-editorial">
        <Paren className="mb-10 inline-block">07 — Get in touch</Paren>
        <h2 className="h-display text-balance">
          Don&apos;t be shy —<br />
          <span className="italic">say hello</span>.
        </h2>
        <a
          href={`mailto:${email}`}
          className="group mt-12 inline-flex items-center gap-3 text-xl md:text-2xl border-b border-foreground pb-1"
        >
          {email}
          <ArrowUpRight className="size-6 arrow-shift" />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
