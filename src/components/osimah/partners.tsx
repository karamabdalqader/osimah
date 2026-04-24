const CLIENTS = [
  "Red Sea Global",
  "NEOM",
  "Ministry of Transport",
  "REGA",
  "Invest Saudi",
  "G20",
  "KAPSARC",
  "Royal Commission for AlUla",
  "Ministry of Justice",
  "Ministry of Finance",
  "KACST",
  "Taqnia Space",
  "Visit Red Sea",
  "Jeddah Dev. Authority",
  "SIDF",
  "Hevolution",
  "MBS City",
  "STC Solutions",
];

export function Partners() {
  return (
    <section className="partners" id="about">
      <div className="shell partners__row">
        <div className="partners__label">
          Trusted by the
          <br />
          Kingdom&rsquo;s leaders
        </div>
        <div className="partners__logos">
          <div className="partners__logos-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="serif"
                style={{
                  fontSize: "22px",
                  color: "var(--ink-2)",
                  whiteSpace: "nowrap",
                  opacity: 0.75,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
