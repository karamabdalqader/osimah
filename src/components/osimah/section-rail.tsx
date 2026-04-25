"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Top" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "leadership", label: "Leadership" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Clients" },
  { id: "strategy", label: "Roadmap" },
  { id: "brands", label: "Partners" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export function SectionRail() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!targets.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="section-rail" aria-label="Section navigation">
      <ul>
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={"section-rail__dot" + (active === s.id ? " is-active" : "")}
              aria-label={s.label}
              aria-current={active === s.id ? "true" : undefined}
            >
              <span className="section-rail__label">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
