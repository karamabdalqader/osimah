"use client";
import { useEffect, useState } from "react";

const ITEMS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#leadership", label: "Leadership" },
  { href: "#projects", label: "Projects" },
  { href: "#strategy", label: "Roadmap" },
  { href: "#brands", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"nav " + (scrolled ? "is-scrolled" : "")}>
      <div className="shell nav__inner">
        <a href="#top" className="nav__logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.PNG" alt="Osimah Digital" />
        </a>
        <div className="nav__links">
          {ITEMS.map((i) => (
            <a key={i.href} href={i.href}>
              {i.label}
            </a>
          ))}
        </div>
        <div className="nav__cta">
          <a href="#contact" className="btn btn--ghost btn--sm">
            Start a project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
