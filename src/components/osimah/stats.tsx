"use client";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; label: string; prefix?: string };

const STATS: Stat[] = [
  { value: 40, suffix: "+", label: "Entities served" },
  { value: 12, suffix: " yrs", label: "Operating in KSA" },
  { value: 200, suffix: "+", label: "Specialists across the house" },
  { value: 9, suffix: "", label: "Sectors covered" },
];

function Counter({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="stats" aria-label="Key numbers">
      <div className="shell">
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <div key={i} className="stats__cell">
              <div className="stats__num serif">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
