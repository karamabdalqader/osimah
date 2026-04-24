"use client";
import { useState } from "react";

const TABS = [
  {
    id: "digital",
    label: "Digital Experience",
    title: "Digital experience platforms, built to last.",
    desc: "We design, develop and operate DXP solutions on Sitecore, Adobe, Liferay, Umbraco and SharePoint — shaped around the audiences of Saudi Arabia's ministries and giga-projects.",
    desc2:
      "From information architecture through production deployment, we own the full stack so you don't have to stitch agencies together.",
    items: [
      { n: "01", name: "Sitecore & Adobe DXP", d: "Platinum partners delivering composable experience stacks." },
      { n: "02", name: "Liferay portals", d: "Multinational Platinum — intranets for ministries & enterprises." },
      { n: "03", name: "Umbraco & SharePoint", d: "Content platforms with editorial workflows that scale." },
      { n: "04", name: "Headless & composable", d: "API-first stacks for omnichannel delivery." },
    ],
    stats: [
      { n: "Vision 2030", l: "Aligned delivery" },
      { n: "7", l: "Platform partnerships" },
      { n: "50+", l: "Ministries & enterprises" },
    ],
  },
  {
    id: "design",
    label: "Design & UX",
    title: "User research and design with Saudi audiences at the center.",
    desc: "A UX-driven practice through our agency brand Crafton Middle East — taking industry leaders forward through research, UI/UX design, branding and digital strategy.",
    desc2:
      "We don't ship surface. Every interface is traced back to a behavioral insight and a business metric.",
    items: [
      { n: "01", name: "User research", d: "Qualitative, quantitative, field — KSA-specific." },
      { n: "02", name: "UI/UX design", d: "Design systems, product UX, editorial web." },
      { n: "03", name: "Brand & identity", d: "Logos, wordmarks, multilingual brand kits." },
      { n: "04", name: "Digital strategy", d: "Roadmaps, KPIs and channel orchestration." },
    ],
    stats: [
      { n: "RTL", l: "Arabic-first UX" },
      { n: "100%", l: "In-house design" },
      { n: "2017", l: "Practicing since" },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    title: "Front-end, back-end, integrations — one delivery team.",
    desc: "Engineering teams across KSA and EMEA, partnering with STX Next and Squirro for specialist capacity in Python, AI/ML and cognitive search.",
    desc2: "We run DGA-approved delivery — every ministry engagement ships to compliance on day one.",
    items: [
      { n: "01", name: "Front-end", d: "React, Next.js, Vue — accessible, multilingual." },
      { n: "02", name: "Back-end", d: ".NET, Node, Python, Java." },
      { n: "03", name: "Integrations", d: "ERP, CRM, national identity services." },
      { n: "04", name: "AI & search", d: "Cognitive search, RAG, document intelligence." },
    ],
    stats: [
      { n: "DGA", l: "Approved delivery" },
      { n: "2", l: "EMEA delivery partners" },
      { n: "24/7", l: "Support SLAs" },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure & Security",
    title: "Server configuration, security, and deployment — owned end to end.",
    desc: "From cloud architecture to hardening, we run the infrastructure behind the experiences we build. Saudi-resident where it must be, global where it can be.",
    desc2: "Continuous delivery and observability are table stakes. Sovereign data residency is not negotiable.",
    items: [
      { n: "01", name: "Cloud architecture", d: "Azure, AWS, private cloud — KSA data residency." },
      { n: "02", name: "Security & compliance", d: "NCA, SAMA, DGA aligned from kickoff." },
      { n: "03", name: "DevOps", d: "CI/CD, IaC, monitoring, runbooks." },
      { n: "04", name: "Managed ops", d: "24/7 NOC and L1–L3 support." },
    ],
    stats: [
      { n: "NCA", l: "Compliant" },
      { n: "99.9%", l: "Target uptime" },
      { n: "KSA", l: "Data residency" },
    ],
  },
];

export function Services() {
  const [active, setActive] = useState("digital");
  const tab = TABS.find((t) => t.id === active)!;
  return (
    <section id="services">
      <div className="shell">
        <div className="section-head">
          <div className="section-head__kicker">
            <div className="section-head__num">— 01 / Services</div>
            <div className="eyebrow">What we do</div>
          </div>
          <div>
            <h2 className="section-head__title serif">
              A full-stack <em>digital house</em> for the Kingdom.
            </h2>
            <p className="section-head__lede">
              Four disciplines, one delivery team. From research and design to integrations,
              security and round-the-clock operations.
            </p>
          </div>
        </div>

        <div className="services__tabs" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              className={"services__tab " + (active === t.id ? "is-active" : "")}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="services__panel">
          <div className="services__left">
            <h3 className="serif">{tab.title}</h3>
            <p>{tab.desc}</p>
            <p>{tab.desc2}</p>
            <div className="services__stats">
              {tab.stats.map((s, i) => (
                <div key={i}>
                  <div className="services__stat-n serif">{s.n}</div>
                  <div className="services__stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="services__list">
            {tab.items.map((it) => (
              <div key={it.n} className="services__item">
                <div className="services__item-num">{it.n}</div>
                <div>
                  <div className="services__item-name serif">{it.name}</div>
                  <div className="services__item-desc">{it.d}</div>
                </div>
                <div className="services__item-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
