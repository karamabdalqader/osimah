type Pillar = {
  num: string;
  kicker: string;
  title: string;
  bullets?: string[];
  status?: string;
  statusItems?: string[];
  nextLabel?: string;
  nextItems?: string[];
};

const PILLARS: Pillar[] = [
  {
    num: "01",
    kicker: "Core business",
    title: "Osimah Digital",
    bullets: [
      "Liferay and Sitecore kitchens in Jordan",
      "Adding more technology partners",
      "Move to new office",
      "Enhance operation & retention — hiring senior delivery managers, refining partner payment schedules",
    ],
  },
  {
    num: "02",
    kicker: "New capability",
    title: "AI Innovation & Digital Transformation",
    bullets: [
      "Establish new entity & new CR for AI",
      "Cutting-edge AI solutions tailored to the KSA market",
      "Sign with technology partners",
      "Identify market niche — health, finance and adjacent regulated sectors",
      "Business plan and sales force / pipeline build-out",
    ],
  },
  {
    num: "03",
    kicker: "New product",
    title: "Debt Management & Crowdfunding",
    status: "Completed",
    statusItems: ["Product discovery", "Stakeholder alignment", "SAMA meeting & presentation", "BRD v1"],
    nextLabel: "Next",
    nextItems: ["Business plan", "BRD v2"],
  },
];

export function Strategy() {
  return (
    <section id="strategy" className="strategy">
      <div className="shell">
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

        <div className="strategy__grid">
          {PILLARS.map((p) => (
            <article key={p.num} className="pillar">
              <div className="pillar__head">
                <span className="pillar__num">{p.num}</span>
                <div>
                  <div className="pillar__kicker">{p.kicker}</div>
                  <h3 className="pillar__title serif">{p.title}</h3>
                </div>
              </div>

              {p.bullets && (
                <ul className="pillar__list">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {p.statusItems && (
                <div className="pillar__block">
                  <div className="pillar__tag pillar__tag--done">{p.status}</div>
                  <ul className="pillar__list pillar__list--tight">
                    {p.statusItems.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                  <div className="pillar__tag pillar__tag--next">{p.nextLabel}</div>
                  <ul className="pillar__list pillar__list--tight">
                    {p.nextItems!.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
