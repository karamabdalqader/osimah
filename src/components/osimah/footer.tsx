export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.PNG" alt="Osimah Digital" style={{ height: 36, marginBottom: 24 }} />
            <h3 className="serif">
              Enabling the <em>Kingdom&rsquo;s</em> digital future.
            </h3>
            <p>
              A Saudi technology house representing global brands in the Middle East — headquartered
              in Riyadh since 2017.
            </p>
          </div>

          <div className="footer__col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Digital Experience</a></li>
              <li><a href="#services">Design &amp; UX</a></li>
              <li><a href="#services">Engineering</a></li>
              <li><a href="#services">Infrastructure</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#brands">Partners</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>Contact</h5>
            <ul>
              <li><a href="#contact">Start a project</a></li>
              <li><a href="mailto:hello@osimah.sa">hello@osimah.sa</a></li>
              <li><a href="https://osimah.sa" target="_blank" rel="noopener">osimah.sa</a></li>
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
