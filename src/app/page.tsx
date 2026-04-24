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
        <Strategy />
        <Brands />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
