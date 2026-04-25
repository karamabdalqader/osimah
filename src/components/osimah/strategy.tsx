"use client";
import { Reveal, RevealStagger, RevealItem } from "@/components/osimah/reveal";

type Pillar = {
  num: string;
  kicker: string;
  title: string;
  status: string;
  thesis: string;
  points: string[];
};

const PILLARS: Pillar[] = [
  {
    num: "01",
    kicker: "Core business",
    title: "Osimah Digital",
    status: "Today",
    thesis:
      "Scaling the Kingdom’s most trusted digital house — partner-led, ministry-grade delivery.",
    points: [
      "Deepen Sitecore, Liferay & Adobe practices",
      "Expand giga-project footprint",
      "Triple delivery capacity by 2026",
    ],
  },
  {
    num: "02",
    kicker: "New capability",
    title: "AI Innovation & Digital Transformation",
    status: "2025 — Launching",
    thesis:
      "A dedicated AI entity bringing applied agents, vision and search into government and enterprise platforms.",
    points: [
      "Vertical AI agents for citizen services",
      "Cognitive search & document intelligence",
      "MOUs with Squirro and global AI partners",
    ],
  },
  {
    num: "03",
    kicker: "New product",
    title: "Debt Management & Crowdfunding",
    status: "2026 — Regulated",
    thesis:
      "Entering Saudi fintech with a SAMA-licensed debt-based crowdfunding platform.",
    points: [
      "SAMA Regulatory Sandbox in 2025",
      "Sharia-compliant product design",
      "Targeting the SME finance gap",
    ],
  },
];

export function Strategy() {
  return (
    <section id="strategy" className="strategy">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <div className="section-head__kicker">
              <div className="section-head__num">— 04 / What&rsquo;s next</div>
              <div className="eyebrow">Strategic Roadmap</div>
            </div>
            <div>
              <h2 className="section-head__title serif">
                Three bets on the <em>Kingdom&rsquo;s</em> next chapter.
              </h2>
              <p className="section-head__lede">
                Doubling down on the core, opening a dedicated AI entity, and entering the regulated
                fintech market.
              </p>
            </div>
          </div>
        </Reveal>

        <RevealStagger className="strategy__grid" stagger={0.12}>
          {PILLARS.map((p) => (
            <RevealItem key={p.num}>
              <article className="pillar">
                <div className="pillar__top">
                  <span className="pillar__num">{p.num}</span>
                  <span className="pillar__status">{p.status}</span>
                </div>
                <div className="pillar__kicker">{p.kicker}</div>
                <h3 className="pillar__title serif">{p.title}</h3>
                <p className="pillar__thesis">{p.thesis}</p>
                <ul className="pillar__list">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="pillar__arrow" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
