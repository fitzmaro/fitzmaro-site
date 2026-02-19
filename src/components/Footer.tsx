export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--surface)] pt-24 pb-12 border-t border-[var(--border)] relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Left Column */}
          <div>
            <h2 className="text-5xl md:text-7xl text-[var(--foreground)] mb-8 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Let&apos;s talk<br />
              about what<br />
              you&apos;re building.
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-md mb-12 leading-relaxed">
              I&apos;m always up for a conversation about AI, product, or how to get engineers and non-engineers in the same room agreeing on things.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:fitzmaro@gmail.com"
                className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors border-b-2 border-[var(--border)] hover:border-[var(--accent)] pb-2"
              >
                fitzmaro@gmail.com
                <i className="ph-bold ph-arrow-up-right"></i>
              </a>
              <p className="text-[var(--foreground-muted)] text-lg">
                856.524.5336
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-end lg:items-end">
            <div className="grid grid-cols-2 gap-12 lg:gap-24">
              {/* Connect */}
              <div>
                <h4 className="text-[var(--foreground)] font-bold mb-6 text-sm uppercase tracking-wider">
                  Connect
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/fitzmaro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-2 group"
                    >
                      LinkedIn
                      <i className="ph-bold ph-arrow-right -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="text-[var(--foreground)] font-bold mb-6 text-sm uppercase tracking-wider">
                  Navigation
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#home" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#career" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="#awards" className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
                      Awards
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--foreground-subtle)]">
          <p>&copy; {new Date().getFullYear()} Fitz Maro. All rights reserved.</p>
          <p>NYC &amp; Philadelphia</p>
        </div>
      </div>
    </footer>
  );
}
