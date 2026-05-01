import { useEffect, useState } from "react";

/**
 * Soft glowing cursor follower. Hidden on touch devices.
 */
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, hsl(var(--secondary) / 0.10) 30%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
};

export default CursorGlow;
