"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });
  const size = useSpring(hovering ? 36 : 10, { stiffness: 300, damping: 22 });

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        "a, button, [role='button'], input, textarea, select, label, .filter-chip, .services__tab, .ct2__arrow, .faq__q, .leader, .project, .brand"
      );
      setHovering(interactive);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, x, y]);

  useEffect(() => {
    size.set(hovering ? 36 : 10);
  }, [hovering, size]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: sx,
        y: sy,
        width: size,
        height: size,
        marginLeft: -5,
        marginTop: -5,
        borderRadius: "50%",
        background: hovering ? "transparent" : "var(--teal)",
        border: hovering ? "1px solid var(--teal)" : "0",
        mixBlendMode: "normal",
        pointerEvents: "none",
        zIndex: 200,
      }}
    />
  );
}
