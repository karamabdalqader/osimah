"use client";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/osimah/reveal";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.47 0h4.37v1.91h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.16c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.25V22H7.69V8z" />
  </svg>
);

function TiltLeader({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="leader"
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

export function Leadership() {
  return (
    <section className="leadership" id="leadership">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <div className="section-head__kicker">
              <div className="section-head__num">— 02 / Leadership</div>
              <div className="eyebrow">The people behind the work</div>
            </div>
            <div>
              <h2 className="section-head__title serif">
                Built by operators with <em>two decades</em> in the region.
              </h2>
              <p className="section-head__lede">
                We take the house personally. Our leadership sits in every major engagement — from
                first brief to go-live.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="leadership__grid">
          <Reveal delay={0.05}>
            <TiltLeader>
              <div className="leader__photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="leader__img" src="/chairman.PNG" alt="Chairman" />
              </div>
              <div className="leader__body">
                <div className="leader__role">Chairman</div>
                <div className="leader__name serif">
                  Abdullah <em>Al-Sharqi</em>
                </div>
                <div className="leader__bio">
                  Sets the strategic direction of Osimah Digital and its family of brands across the
                  Kingdom — championing Saudi-led digital transformation aligned to Vision 2030.
                </div>
                <div className="leader__quote">
                  &ldquo;We measure ourselves in mandates kept, not headlines won.&rdquo;
                </div>
                <a className="leader__linked" href="#" onClick={(e) => e.preventDefault()}>
                  <LinkedInIcon />
                  View profile
                </a>
              </div>
            </TiltLeader>
          </Reveal>

          <Reveal delay={0.15}>
            <TiltLeader>
              <div className="leader__photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="leader__img" src="/CEO 1.png" alt="Rajai Abu Alata — CEO" />
              </div>
              <div className="leader__body">
                <div className="leader__role">Chief Executive Officer</div>
                <div className="leader__name serif">
                  Rajai <em>Abu Alata</em>
                </div>
                <div className="leader__bio">
                  24 years in IT &amp; Telecom. Leads operations, business strategy and partner brands
                  across Saudi Arabia — making sure every Osimah engagement hits the targets that
                  matter to its clients.
                </div>
                <div className="leader__quote">
                  &ldquo;Delivery is a promise. We keep it on day one and on day one thousand.&rdquo;
                </div>
                <a
                  className="leader__linked"
                  href="https://www.linkedin.com/in/rajai-abu-alata-ba168020/"
                  target="_blank"
                  rel="noopener"
                >
                  <LinkedInIcon />
                  View profile
                </a>
              </div>
            </TiltLeader>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
