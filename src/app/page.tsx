import { Nav } from "@/components/osimah/nav";
import { Hero } from "@/components/osimah/hero";
import { Partners } from "@/components/osimah/partners";
import { Services } from "@/components/osimah/services";
import { Leadership } from "@/components/osimah/leadership";
import { Projects } from "@/components/osimah/projects";
import { Strategy } from "@/components/osimah/strategy";
import { Brands } from "@/components/osimah/brands";
import { Faq } from "@/components/osimah/faq";
import { Cta } from "@/components/osimah/cta";
import { Footer } from "@/components/osimah/footer";
import { CircularTestimonials } from "@/components/osimah/circular-testimonials";

const TESTIMONIALS = [
  {
    quote: "Osimah Digital delivered a world-class digital experience for the NEOM portal — on time, fully aligned to Vision 2030 standards, and built to scale.",
    name: "NEOM",
    designation: "Giga-project · Saudi Arabia",
    src: "/o3.PNG",
  },
  {
    quote: "Their Liferay implementation transformed how our employees interact with internal systems. The delivery team understood government compliance from day one.",
    name: "Red Sea Global",
    designation: "Giga-project · Employee Super-App",
    src: "/o9.PNG",
  },
  {
    quote: "We needed a partner who could navigate both DGA requirements and a complex stakeholder map. Osimah did exactly that — on schedule and above spec.",
    name: "Ministry of Transport",
    designation: "Government · Web Platform",
    src: "/o7.PNG",
  },
  {
    quote: "A rare combination of technical depth and regional understanding. The research portal they built for us has become essential infrastructure for our team.",
    name: "KAPSARC",
    designation: "Enterprise · Research Portal",
    src: "/o10.PNG",
  },
  {
    quote: "From discovery to go-live, the Osimah team brought the kind of professionalism and attention to detail we expect from a global partner — delivered locally.",
    name: "Invest Saudi",
    designation: "Government · Web",
    src: "/o5.PNG",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Partners />
        <Services />
        <Leadership />
        <Projects />
        <section className="testimonials" id="testimonials">
          <div className="shell">
            <div className="section-head">
              <div className="section-head__kicker">
                <div className="section-head__num">— 03 / Clients</div>
                <div className="eyebrow">What our clients say</div>
              </div>
              <div>
                <h2 className="section-head__title serif">
                  Trusted by the <em>Kingdom&rsquo;s</em> leaders.
                </h2>
                <p className="section-head__lede">
                  From ministries to giga-projects — the voices behind the work.
                </p>
              </div>
            </div>
            <CircularTestimonials testimonials={TESTIMONIALS} autoplay />
          </div>
        </section>
        <Strategy />
        <Brands />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
