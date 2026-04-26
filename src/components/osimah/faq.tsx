"use client";
import { useState } from "react";
import { Reveal } from "@/components/osimah/reveal";

const FAQS = [
  {
    q: "What makes Osimah Digital different from other agencies in the Kingdom?",
    a: "We're a Saudi technology house, not just an agency. We own the full stack — research, design, engineering, infrastructure and 24/7 operations — and we represent global platform partners under one roof. One accountable team, from first brief to production uptime.",
  },
  {
    q: "Are you DGA-approved for government engagements?",
    a: "Yes. Our delivery aligns to the Digital Government Authority's unified design system and compliance requirements. We've shipped DGA-approved platforms for the Ministry of Transport, Ministry of Justice, Ministry of Finance, the Saudi Authority for Intellectual Property and the Real Estate General Authority.",
  },
  {
    q: "Which platforms do you specialize in?",
    a: "Sitecore, Liferay (Multinational Platinum) and Squirro for cognitive search — covering the DXP, portal, intranet and AI-search needs of ministries and enterprises. We also build on modern composable and headless stacks where they fit.",
  },
  {
    q: "Where is your team based?",
    a: "Headquartered in Riyadh since 2017. We operate through our family of partners — Crafton Middle East, Webtown, STX Next, Liferay, Sitecore and Squirro — with delivery partners across EMEA for specialist capacity.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Most engagements start with a discovery sprint (2–4 weeks) to align on audience, scope and compliance. From there, we move into iterative design, engineering and integration — shipping to a staging environment every two weeks. Production launch includes hypercare, then we operate and evolve the platform long-term.",
  },
  {
    q: "Do you take on work outside Saudi Arabia?",
    a: "Our focus is the Kingdom and the wider GCC, but we've delivered programs across the Middle East through our partner brands. If the project serves a Saudi audience, we're interested.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="shell faq__grid">
        <Reveal>
          <div className="section-head__num">— 06 / FAQ</div>
          <div className="eyebrow mt-2">Frequently asked</div>
          <h2
            className="serif mt-4"
            style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)", lineHeight: 1.05, maxWidth: "16ch" }}
          >
            Answers for <em>serious</em> programs.
          </h2>
          <p className="mt-4" style={{ color: "var(--ink-2)", fontSize: 15, maxWidth: "36ch" }}>
            Still have questions?
          </p>
          <a href="#contact" className="btn btn--ghost btn--sm" style={{ marginTop: 24 }}>
            Talk to us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        </Reveal>

        <div className="faq__list">
          {FAQS.map((f, i) => (
            <div key={i} className={"faq__item " + (open === i ? "is-open" : "")}>
              <button className="faq__q serif" onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}
                <span className="faq__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div className="faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
