type Partner = {
  name: string;
  kind: "image" | "crafton" | "webtown";
  src?: string;
  alt?: string;
  desc: string;
  tag: string;
};

const PARTNERS: Partner[] = [
  { name: "Crafton", kind: "crafton", desc: "UX-driven digital agency — user research, UI/UX, design and digital strategy for regional leaders.", tag: "Agency · KSA" },
  { name: "Webtown", kind: "webtown", desc: "Liferay Multinational Platinum Partner — portals, intranets and employee platforms since 2021.", tag: "Liferay Platinum" },
  { name: "STX Next", kind: "image", src: "/P(4).png", alt: "STX Next", desc: "EMEA engineering partner — Python, AI/ML and specialist capacity for complex platforms.", tag: "Engineering Partner" },
  { name: "Liferay", kind: "image", src: "/p.png", alt: "Liferay", desc: "Digital experience and portal platform — the backbone of our intranet and employee apps.", tag: "Platform Partner" },
  { name: "Sitecore", kind: "image", src: "/P (2).png", alt: "Sitecore", desc: "Composable DXP platform — powering content, personalization and commerce at enterprise scale.", tag: "Platinum Partner" },
  { name: "Squirro", kind: "image", src: "/P(3).png", alt: "Squirro", desc: "Cognitive search and AI insights — augmenting the platforms we deliver with intelligent retrieval.", tag: "AI Partner" },
];

function Logo({ b }: { b: Partner }) {
  if (b.kind === "image") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={b.src} alt={b.alt} className="brand__logo-img" />;
  }
  if (b.kind === "crafton") {
    return (
      <div className="brand__wordmark brand__wordmark--crafton">
        <span className="brand__wordmark-mark">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#E67E3B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12 L12 4 L20 12 L12 20 Z" />
            <circle cx="12" cy="12" r="3" fill="#E67E3B" stroke="none" />
          </svg>
        </span>
        <span>crafton</span>
      </div>
    );
  }
  return (
    <div className="brand__wordmark brand__wordmark--webtown">
      <span className="brand__wordmark-mark" aria-hidden>
        <svg viewBox="0 0 32 24" width="30" height="22" fill="none" stroke="#2FB36B" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <path d="M3 4 L9 20 L16 8 L23 20 L29 4" />
        </svg>
      </span>
      <span>Webtown</span>
    </div>
  );
}

export function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="shell">
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

        <div className="brands__grid">
          {PARTNERS.map((b) => (
            <div key={b.name} className="brand">
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
          ))}
        </div>
      </div>
    </section>
  );
}
