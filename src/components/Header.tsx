"use client";

import { useState, useEffect, useRef } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "awards", label: "Awards" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Update pill position when active section changes
  useEffect(() => {
    const activeEl = itemRefs.current.get(activeSection);
    const navEl = navRef.current;
    if (activeEl && navEl) {
      const navRect = navEl.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      setPillStyle({
        left: activeRect.left - navRect.left,
        width: activeRect.width,
      });
    }
  }, [activeSection]);

  // Intersection Observer to track visible section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Recalculate pill on resize
  useEffect(() => {
    const handleResize = () => {
      const activeEl = itemRefs.current.get(activeSection);
      const navEl = navRef.current;
      if (activeEl && navEl) {
        const navRect = navEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        setPillStyle({
          left: activeRect.left - navRect.left,
          width: activeRect.width,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    // Initial calculation after mount
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection]);

  return (
    <nav className="fixed top-0 w-full z-40 glass-nav transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center font-bold rounded-lg text-lg group-hover:rotate-12 transition-transform duration-300" style={{ fontFamily: 'var(--font-display)' }}>
            F
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-lg leading-none tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              FITZ MARO
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--foreground-subtle)] leading-none mt-1 group-hover:text-[var(--accent)] transition-colors">
              Design Tech
            </span>
          </div>
        </a>

        {/* Navigation Pills - Desktop */}
        <div
          ref={navRef}
          className="hidden md:flex items-center gap-1 bg-[var(--surface2)]/50 p-1.5 rounded-full border border-[var(--border)] backdrop-blur-md relative"
        >
          {/* Sliding pill indicator */}
          <div
            className="absolute top-1.5 bottom-1.5 bg-[var(--background)] rounded-full shadow-sm border border-[var(--border)]/50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              transform: "translateZ(0)",
            }}
          />
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              ref={(el) => {
                if (el) itemRefs.current.set(id, el);
              }}
              href={`#${id}`}
              className={`relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === id
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] text-sm font-bold rounded-full hover:bg-[var(--accent)] hover:text-white transition-all duration-300 group"
          >
            Let&apos;s Talk
            <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-[var(--foreground)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`ph ${mobileMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--border)]">
          <div className="px-6 py-4 space-y-2">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`block px-4 py-3 font-medium rounded-lg transition-colors ${
                  activeSection === id
                    ? "text-[var(--foreground)] bg-[var(--surface)]"
                    : "text-[var(--foreground-muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--border)]">
              <a
                href="#contact"
                className="block px-4 py-3 bg-[var(--foreground)] text-[var(--background)] text-center font-bold rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
