interface Props {
  items: string[];
  className?: string;
}

const Marquee = ({ items, className }: Props) => {
  if (!items?.length) return null;
  const loop = [...items, ...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-foreground/15 py-5 md:py-7 ${className ?? ""}`}>
      <div className="flex marquee-track whitespace-nowrap will-change-transform">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl font-light tracking-tight px-8 md:px-12 inline-flex items-center gap-8 md:gap-12"
          >
            {t}
            <span className="inline-block size-2 rounded-full bg-foreground/40" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
