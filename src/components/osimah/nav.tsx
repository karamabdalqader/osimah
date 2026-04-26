"use client";
import { useEffect, useState } from "react";

const ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#leadership", label: "Leadership" },
  { href: "#projects", label: "Projects" },
  { href: "#strategy", label: "Roadmap" },
  { href: "#brands", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <nav className={"nav " + (scrolled ? "is-scrolled" : "") + (open ? " is-open" : "")}>
      <div className="shell nav__inner">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
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
          <a href="#contact" className="btn btn--ghost btn--sm nav__cta-btn">
            Start a project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

    </nav>
    <a
      href="#contact"
      className={"nav__sticky-cta" + (scrolled && !open ? " is-visible" : "")}
      aria-hidden={!scrolled || open}
      tabIndex={!scrolled || open ? -1 : 0}
    >
      Start a project
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7M17 7H8M17 7V16" />
      </svg>
    </a>
    <div className={"nav__drawer" + (open ? " is-open" : "")} aria-hidden={!open}>
      <div className="nav__drawer-inner">
        {ITEMS.map((i) => (
          <a key={i.href} href={i.href} onClick={() => setOpen(false)}>
            {i.label}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn--primary nav__drawer-cta"
          onClick={() => setOpen(false)}
        >
          Start a project
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H8M17 7V16" />
          </svg>
        </a>
      </div>
    </div>
    </>
  );
}
