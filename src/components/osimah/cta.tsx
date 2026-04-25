"use client";
import { useState, type CSSProperties } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/osimah/reveal";

type Form = { name: string; email: string; company: string; service: string; message: string };
type FieldKey = keyof Form;
type Status = "idle" | "submitting" | "success" | "error";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";
const FALLBACK_EMAIL = "hello@osimah.com";

export function Cta() {
  const [form, setForm] = useState<Form>({ name: "", email: "", company: "", service: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [errMsg, setErrMsg] = useState<string>("");
  const reduce = useReducedMotion();

  const valid: Record<FieldKey, boolean> = {
    name: form.name.trim().length >= 2,
    email: /.+@.+\..+/.test(form.email),
    company: form.company.trim().length >= 2,
    service: form.service.length > 0,
    message: form.message.trim().length >= 10,
  };
  const allValid = Object.values(valid).every(Boolean);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, company: true, service: true, message: true });
    if (!allValid) return;
    setStatus("submitting");
    setErrMsg("");

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setStatus("success");
      } catch {
        setStatus("error");
        setErrMsg("Couldn't send. Please email us directly.");
      }
    } else {
      const subject = encodeURIComponent(`New brief from ${form.name} · ${form.company}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.company}\nService: ${form.service}\n\n${form.message}`
      );
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
      setTimeout(() => setStatus("success"), 350);
    }
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

  const fieldClass = (k: FieldKey) => `cta__field cta__field--float ${form[k] ? "is-filled" : ""}`;

  return (
    <section className="cta" id="contact">
      <div className="shell cta__grid">
        <Reveal>
          <div className="eyebrow" style={{ color: "#8A8E98" }}>
            — 06 / Let&rsquo;s build
          </div>
          <h2 className="serif mt-4">
            Do you have a <em>big idea</em> we can help with?
          </h2>
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
            <div style={labelStyle}>Email</div>
            <div>
              <a href={`mailto:${FALLBACK_EMAIL}`} style={{ color: "var(--teal)", textDecoration: "none" }}>
                {FALLBACK_EMAIL}
              </a>
            </div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              className="cta__success"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="cta__success-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 18 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <motion.path
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </motion.div>
              <h4 className="serif">Brief received.</h4>
              <p>Thanks {form.name.split(" ")[0]} — we&rsquo;ll be in touch within two business days.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="cta__form"
              onSubmit={submit}
              noValidate
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="cta__form-title">Start a project · Confidential</div>

              <div className={fieldClass("name")}>
                <label>Your name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onBlur={() => setTouched({ ...touched, name: true })}
                  style={fieldStyle("name")}
                />
              </div>

              <div className="cta__row">
                <div className={fieldClass("email")}>
                  <label>Work email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onBlur={() => setTouched({ ...touched, email: true })}
                    style={fieldStyle("email")}
                  />
                </div>
                <div className={fieldClass("company")}>
                  <label>Organization</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    onBlur={() => setTouched({ ...touched, company: true })}
                    style={fieldStyle("company")}
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

              <div className={fieldClass("message")}>
                <label>Tell us more</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onBlur={() => setTouched({ ...touched, message: true })}
                  style={fieldStyle("message")}
                />
              </div>

              {status === "error" && <div className="cta__error">{errMsg}</div>}

              <button
                type="submit"
                className="cta__submit"
                disabled={status === "submitting" || (!allValid && Object.keys(touched).length > 0)}
              >
                {status === "submitting" ? (
                  <>
                    <span className="spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    Start a project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
