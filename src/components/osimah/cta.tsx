"use client";
import { useState, type CSSProperties } from "react";

type Form = { name: string; email: string; company: string; service: string; message: string };
type FieldKey = keyof Form;

export function Cta() {
  const [form, setForm] = useState<Form>({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});

  const valid: Record<FieldKey, boolean> = {
    name: form.name.trim().length >= 2,
    email: /.+@.+\..+/.test(form.email),
    company: form.company.trim().length >= 2,
    service: form.service.length > 0,
    message: form.message.trim().length >= 10,
  };
  const allValid = Object.values(valid).every(Boolean);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, company: true, service: true, message: true });
    if (!allValid) return;
    setSubmitted(true);
  };

  const fieldStyle = (k: FieldKey): CSSProperties =>
    touched[k] && !valid[k] ? { borderBottomColor: "#E57373" } : {};

  const labelStyle: CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "#8A8E98",
  };

  return (
    <section className="cta" id="contact">
      <div className="shell cta__grid">
        <div>
          <div className="eyebrow" style={{ color: "#8A8E98" }}>
            — 06 / Let&rsquo;s build
          </div>
          <h2 className="serif mt-4">
            Do you have a <em>big idea</em> we can help with?
          </h2>
          <p className="mt-6" style={{ color: "#B5B9C2", fontSize: 17, maxWidth: "44ch", lineHeight: 1.6 }}>
            Tell us what you&rsquo;re building. Our leadership reads every brief and responds within
            two business days.
          </p>
          <div
            className="mt-8"
            style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "12px 24px", fontSize: 14, color: "#B5B9C2" }}
          >
            <div style={labelStyle}>HQ</div>
            <div>Riyadh, Kingdom of Saudi Arabia</div>
            <div style={labelStyle}>Est.</div>
            <div>2017 · Registered as a Saudi technology house</div>
            <div style={labelStyle}>Hours</div>
            <div>Sun–Thu · 9:00–18:00 AST</div>
          </div>
        </div>

        {submitted ? (
          <div className="cta__success">
            <div className="cta__success-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="serif">Brief received.</h4>
            <p>Thanks {form.name.split(" ")[0]} — we&rsquo;ll be in touch within two business days.</p>
          </div>
        ) : (
          <form className="cta__form" onSubmit={submit} noValidate>
            <div className="cta__form-title">Start a project · Confidential</div>

            <div className="cta__field">
              <label>Your name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onBlur={() => setTouched({ ...touched, name: true })}
                style={fieldStyle("name")}
                placeholder="Full name"
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="cta__field">
                <label>Work email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  style={fieldStyle("email")}
                  placeholder="you@company.sa"
                />
              </div>
              <div className="cta__field">
                <label>Organization</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  onBlur={() => setTouched({ ...touched, company: true })}
                  style={fieldStyle("company")}
                  placeholder="Ministry / Company"
                />
              </div>
            </div>

            <div className="cta__field">
              <label>What do you need?</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                onBlur={() => setTouched({ ...touched, service: true })}
                style={fieldStyle("service")}
              >
                <option value="">Select a service</option>
                <option>Digital Experience Platform</option>
                <option>Design &amp; UX</option>
                <option>Engineering</option>
                <option>Infrastructure &amp; Security</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="cta__field">
              <label>Tell us more</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onBlur={() => setTouched({ ...touched, message: true })}
                style={fieldStyle("message")}
                placeholder="Scope, timeline, audience, compliance needs..."
              />
            </div>

            <button
              type="submit"
              className="cta__submit"
              disabled={!allValid && Object.keys(touched).length > 0}
            >
              Send brief
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
