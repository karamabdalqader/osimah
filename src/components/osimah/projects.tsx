"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/osimah/reveal";

const PROJECTS = [
  { id: "neom", name: "NEOM", tag: "Giga · Website", category: "giga", image: "/o3.PNG" },
  { id: "mot", name: "Ministry of Transport", tag: "Government · Web", category: "gov", image: "/o7.PNG" },
  { id: "moj", name: "Saudi Authority for Intellectual Property", tag: "Government · Web & Mobile", category: "gov", image: "/o8.PNG" },
  { id: "rsg", name: "Red Sea Global", tag: "Giga · Employee Super-App", category: "giga", image: "/o9.PNG" },
  { id: "kapsarc", name: "KAPSARC", tag: "Enterprise · Research Portal", category: "enterprise", image: "/o10.PNG" },
  { id: "sidf", name: "Saudi Industrial Development Fund", tag: "Enterprise · Intranet", category: "enterprise", image: "/o21.PNG" },
  { id: "alula", name: "Royal Commission for AlUla", tag: "Government · Intranet", category: "gov", image: "/o17.PNG" },
  { id: "mbs", name: "Misk Foundation", tag: "Giga · Mobile App", category: "giga", image: "/o19.PNG" },
  { id: "invest", name: "Invest Saudi", tag: "Government · Web", category: "gov", image: "/o5.PNG" },
];

const FILTERS = [
  { id: "all", label: "All projects" },
  { id: "gov", label: "Government" },
  { id: "giga", label: "Giga-projects" },
  { id: "enterprise", label: "Enterprise" },
];

export function Projects() {
  const [filter, setFilter] = useState("all");
  const list = useMemo(
    () => PROJECTS.filter((p) => filter === "all" || p.category === filter),
    [filter]
  );
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
            {list.map((p, i) => (
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
      </div>
    </section>
  );
}
