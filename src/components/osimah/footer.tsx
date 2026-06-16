import { OptimizedImage } from "@/components/osimah/optimized-image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <OptimizedImage
              src="/logo.PNG"
              alt="Osimah Digital"
              sizes="(max-width: 600px) 140px, 156px"
              className="footer__logo"
              loading="lazy"
              decoding="async"
            />
            <h3 className="serif">
              Enabling the <em>Kingdom&rsquo;s</em> digital future.
            </h3>
            <p>
              A Saudi technology house representing global brands in the Middle East — headquartered
              in Riyadh since 2017.
            </p>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Digital Experience</a></li>
              <li><a href="#services">Design &amp; UX</a></li>
              <li><a href="#services">Engineering</a></li>
              <li><a href="#services">Infrastructure</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#brands">Partners</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#contact">Start a project</a></li>
              <li><a href="mailto:Karam@crafton-me.com">Karam@crafton-me.com</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 OSIMAH DIGITAL · ALL RIGHTS RESERVED</span>
          <span>RIYADH · KSA</span>
        </div>
      </div>
    </footer>
  );
}
