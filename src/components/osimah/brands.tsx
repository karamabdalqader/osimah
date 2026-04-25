"use client";
import { Reveal, RevealStagger, RevealItem } from "@/components/osimah/reveal";

type Partner = {
  name: string;
  src: string;
  alt: string;
  desc: string;
  tag: string;
};

const PARTNERS: Partner[] = [
  { name: "Crafton", src: "/Crafton.png", alt: "Crafton", desc: "UX-driven digital agency — user research, UI/UX, design and digital strategy for regional leaders.", tag: "Agency · KSA" },
  { name: "Webtown", src: "/Webtown.png", alt: "Webtown", desc: "Liferay Multinational Platinum Partner — portals, intranets and employee platforms since 2021.", tag: "Liferay Platinum" },
  { name: "STX Next", src: "/P(4).png", alt: "STX Next", desc: "EMEA engineering partner — Python, AI/ML and specialist capacity for complex platforms.", tag: "Engineering Partner" },
  { name: "Liferay", src: "/p.png", alt: "Liferay", desc: "Digital experience and portal platform — the backbone of our intranet and employee apps.", tag: "Platform Partner" },
  { name: "Sitecore", src: "/P (2).png", alt: "Sitecore", desc: "Composable DXP platform — powering content, personalization and commerce at enterprise scale.", tag: "Platinum Partner" },
  { name: "Squirro", src: "/P(3).png", alt: "Squirro", desc: "Cognitive search and AI insights — augmenting the platforms we deliver with intelligent retrieval.", tag: "AI Partner" },
];

function Logo({ b }: { b: Partner }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={b.src} alt={b.alt} className="brand__logo-img" />;
}

export function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <div className="section-head__kicker">
              <div className="section-head__num">— 05 / Partners</div>
              <div className="eyebrow">One house, many hands</div>
            </div>
            <div>
              <h2 className="section-head__title serif">
                A <em>family of partners</em> serving the Kingdom.
              </h2>
              <p className="section-head__lede">
                Osimah Digital represents and operates alongside global brands in the Middle East — so
                our clients get the best of the world, delivered locally.
              </p>
            </div>
          </div>
        </Reveal>

        <RevealStagger className="brands__grid" stagger={0.06}>
          {PARTNERS.map((b) => (
            <RevealItem key={b.name}>
              <div className="brand">
                <div>
                  <div className="brand__logo-wrap">
                    <Logo b={b} />
                  </div>
                  <div className="brand__desc">{b.desc}</div>
                </div>
                <div className="brand__foot">
                  <span>{b.tag}</span>
                  <span className="brand__dot" />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
