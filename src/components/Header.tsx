"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="hidden md:flex items-center gap-1 bg-[var(--surface2)]/50 p-1.5 rounded-full border border-[var(--border)] backdrop-blur-md">
          <a
            href="#home"
            className="px-5 py-2 text-sm font-medium text-[var(--foreground)] bg-[var(--background)] rounded-full shadow-sm border border-[var(--border)]/50"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-5 py-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            About
          </a>
          <a
            href="#career"
            className="px-5 py-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Career
          </a>
          <a
            href="#awards"
            className="px-5 py-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Awards
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Status Indicator - Desktop */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-[var(--foreground-subtle)] px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Speaking
          </div>

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
            <a
              href="#home"
              className="block px-4 py-3 text-[var(--foreground)] font-medium rounded-lg hover:bg-[var(--surface)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-[var(--foreground-muted)] font-medium rounded-lg hover:bg-[var(--surface)] hover:text-[var(--foreground)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#career"
              className="block px-4 py-3 text-[var(--foreground-muted)] font-medium rounded-lg hover:bg-[var(--surface)] hover:text-[var(--foreground)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Career
            </a>
            <a
              href="#awards"
              className="block px-4 py-3 text-[var(--foreground-muted)] font-medium rounded-lg hover:bg-[var(--surface)] hover:text-[var(--foreground)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Awards
            </a>
            <div className="pt-2 border-t border-[var(--border)]">
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--foreground-subtle)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Speaking
              </div>
              <a
                href="#contact"
                className="block mt-2 px-4 py-3 bg-[var(--foreground)] text-[var(--background)] text-center font-bold rounded-lg"
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
