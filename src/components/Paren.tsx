import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParenProps {
  children: ReactNode;
  className?: string;
}

/** Editorial parenthesis label e.g. ( 01 ) */
export const Paren = ({ children, className }: ParenProps) => (
  <span className={cn("font-mono uppercase tracking-[0.2em] text-xs text-muted-foreground", className)}>
    <span className="opacity-50">(</span> {children} <span className="opacity-50">)</span>
  </span>
);

export default Paren;
