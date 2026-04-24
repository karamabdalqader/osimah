"use client";
import { useMemo, useState } from "react";

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
        <div className="projects__head">
          <div className="eyebrow">Selected work · Portfolio</div>
          <h2 className="projects__title serif">
            Work we&rsquo;re <em>proud</em> to put our name on.
          </h2>
          <p className="projects__lede">
            Ministries, giga-projects and enterprise programs — delivered with global platforms and
            regional teams.
          </p>

          <div className="projects__filters">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={"filter-chip " + (filter === f.id ? "is-active" : "")}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {list.map((p) => (
            <figure key={p.id} className="project">
              <div className="project__frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} />
              </div>
              <figcaption className="project__caption">
                <span className="project__tag">{p.tag}</span>
                <span className="project__name">{p.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
