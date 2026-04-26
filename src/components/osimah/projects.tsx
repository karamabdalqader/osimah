"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/osimah/reveal";

const PROJECTS = [
  { id: "neom-rsg", name: "NEOM × Red Sea Global", tag: "Giga · Websites", category: "giga", image: "/o3.PNG" },
  { id: "mot-rega", name: "Ministry of Transport × Real Estate General Authority", tag: "Government · Websites", category: "gov", image: "/o7.PNG" },
  { id: "moj-mof", name: "Ministry of Justice × Ministry of Finance", tag: "Government · Web Platforms", category: "gov", image: "/o8.PNG" },
  { id: "saip", name: "Saudi Authority for Intellectual Property", tag: "Government · Trademarks Platform", category: "gov", image: "/o9.PNG" },
  { id: "kapsarc", name: "KAPSARC × KAPSARC College", tag: "Enterprise · Research Portals", category: "enterprise", image: "/o10.PNG" },
  { id: "sidf-hevolution", name: "SIDF × Hevolution", tag: "Enterprise · Intranets", category: "enterprise", image: "/o17.PNG" },
  { id: "hayyak", name: "Hayyak by stc", tag: "Enterprise · Mobile App", category: "enterprise", image: "/o21.PNG" },
  { id: "misk-city", name: "Misk City", tag: "Giga · Mobile App", category: "giga", image: "/o19.PNG" },
  { id: "invest-g20", name: "Invest Saudi × G20", tag: "Government · Websites", category: "gov", image: "/o5.PNG" },
  { id: "vrs-jda", name: "Visit Red Sea × Jeddah Development Authority", tag: "Giga · Websites", category: "giga", image: "/o4.PNG" },
  { id: "stc-stcpay", name: "solutions by stc × stc pay", tag: "Enterprise · Web Platforms", category: "enterprise", image: "/o6.PNG" },
  { id: "taqnia-esnad", name: "Taqnia Space × Esnad", tag: "Enterprise · Websites", category: "enterprise", image: "/o11.PNG" },
  { id: "afc-folk", name: "AFC Asian Cup 2027 × Folk Maritime", tag: "Government · Websites", category: "gov", image: "/o12.PNG" },
  { id: "mhu-sda", name: "Ministry of Housing × Sharqia Development Authority", tag: "Government · Web Platforms", category: "gov", image: "/o13.PNG" },
  { id: "kacst-alula", name: "KACST × Royal Commission for AlUla", tag: "Government · Intranets", category: "gov", image: "/o14.PNG" },
  { id: "saip-ndf", name: "SAIP × National Development Fund", tag: "Government · Intranets", category: "gov", image: "/o15.PNG" },
  { id: "thiqah-sda", name: "THIQAH × Sharqia Development Authority", tag: "Enterprise · Intranets", category: "enterprise", image: "/o16.PNG" },
  { id: "rsg-app", name: "Red Sea Global Super-App", tag: "Giga · Mobile App", category: "giga", image: "/o18.PNG" },
  { id: "sehhaty", name: "Sehhaty (Ministry of Health)", tag: "Government · Mobile App", category: "gov", image: "/o20.PNG" },
  { id: "kfca", name: "King Fahd Causeway Authority", tag: "Government · Mobile App", category: "gov", image: "/o22.PNG" },
  { id: "albilad-enjaz", name: "Bank Albilad — Enjaz", tag: "Enterprise · Mobile App", category: "enterprise", image: "/o23.PNG" },
];

const INITIAL_COUNT = 9;

const FILTERS = [
  { id: "all", label: "All projects" },
  { id: "gov", label: "Government" },
  { id: "giga", label: "Giga-projects" },
  { id: "enterprise", label: "Enterprise" },
];

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const list = useMemo(
    () => PROJECTS.filter((p) => filter === "all" || p.category === filter),
    [filter]
  );
  const visible = expanded ? list : list.slice(0, INITIAL_COUNT);
  const hidden = list.length - visible.length;
  useEffect(() => {
    setExpanded(false);
  }, [filter]);
  return (
    <section id="projects">
      <div className="shell">
        <Reveal>
          <div className="projects__head">
            <div className="eyebrow">Selected work · Portfolio</div>
            <h2 className="projects__title serif">
              Work we&rsquo;re <em>proud</em> to put our name on.
            </h2>
            <p className="projects__lede">
              Ministries, giga-projects and enterprise programs — delivered with global platforms and
              regional teams.
            </p>

            <div className="projects__filters" role="tablist">
              {FILTERS.map((f) => {
                const isActive = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={"filter-chip " + (isActive ? "is-active" : "")}
                    aria-pressed={isActive}
                    style={{
                      background: "transparent",
                      color: isActive ? "var(--paper)" : undefined,
                      borderColor: isActive ? "var(--ink)" : undefined,
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="filter-chip-bg"
                        className="filter-chip__bg"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span style={{ position: "relative" }}>{f.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.figure
                key={p.id}
                className="project"
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="project__frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} />
                </div>
                <figcaption className="project__caption">
                  <span className="project__tag">{p.tag}</span>
                  <span className="project__name">{p.name}</span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length > INITIAL_COUNT && (
          <div className="projects__more-wrap">
            <button
              type="button"
              className="projects__more"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? "Show less" : `Show ${hidden} more project${hidden === 1 ? "" : "s"}`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
