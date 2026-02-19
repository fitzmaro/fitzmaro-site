import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex flex-col justify-center pt-20">
      <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Content - Left Side */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div>
            {/* Tag */}
            <span className="inline-block py-1 px-3 rounded border border-[var(--accent)]/20 bg-[var(--accent)]/5 text-[var(--accent)] text-xs font-mono mb-6 tracking-wider opacity-0 animate-fade-in">
              // AI &amp; CREATIVE TECHNOLOGY LEADER
            </span>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.9] tracking-tight mb-6 opacity-0 animate-fade-in stagger-1" style={{ fontFamily: 'var(--font-display)' }}>
              Leading the<br />
              <span className="text-gradient-accent">AI Revolution</span><br />
              in Creative Tech.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[var(--foreground-muted)] max-w-xl leading-relaxed font-light opacity-0 animate-fade-in stagger-2">
              I build high-performance teams at the intersection of design, engineering, and AI strategy. Currently driving AI transformation at{" "}
              <strong className="text-[var(--foreground)] font-medium">Amazon</strong>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-fade-in stagger-3">
            <a
              href="#about"
              className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-lg hover:bg-[var(--foreground-muted)] transition-colors flex items-center gap-2"
            >
              View My Work
              <i className="ph-bold ph-arrow-down"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/fitzmaro/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-lg hover:bg-[var(--surface)] transition-colors flex items-center gap-2 group"
            >
              <i className="ph-fill ph-linkedin-logo text-xl text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors"></i>
              LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div className="pt-8 flex flex-wrap items-center gap-8 border-t border-[var(--border)]/50 mt-4 opacity-0 animate-fade-in stagger-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[var(--foreground)]" style={{ fontFamily: 'var(--font-display)' }}>13+</span>
              <span className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider">Years Exp.</span>
            </div>
            <div className="w-px h-10 bg-[var(--border)]/50 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[var(--foreground)]" style={{ fontFamily: 'var(--font-display)' }}>$550M+</span>
              <span className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider">Revenue Impact</span>
            </div>
            <div className="w-px h-10 bg-[var(--border)]/50 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[var(--foreground)]" style={{ fontFamily: 'var(--font-display)' }}>50+</span>
              <span className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider">Creatives Trained</span>
            </div>
          </div>
        </div>

        {/* Photo - Right Side */}
        <div className="lg:col-span-5 relative hidden lg:block h-[600px] opacity-0 animate-fade-in stagger-3">
          {/* Glow behind photo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/30 to-amber-600/20 rounded-[40px] rotate-3 blur-3xl opacity-40"></div>

          {/* Photo container */}
          <div className="absolute inset-0 bg-[var(--surface)] rounded-[32px] border border-[var(--border)] overflow-hidden group shadow-2xl">
            <Image
              src="/headshot.jpg"
              alt="Fitz Maro"
              fill
              className="object-cover scale-105 group-hover:scale-110 transition-all duration-700"
              priority
            />

            {/* Role overlay card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-[var(--background)]/80 backdrop-blur-md rounded-2xl border border-[var(--border)] flex items-center justify-between shadow-lg">
              <div>
                <p className="text-[10px] text-[var(--accent)] font-bold uppercase tracking-widest mb-1">
                  Current Role
                </p>
                <p className="text-[var(--foreground)] font-bold text-lg leading-tight">
                  Head of Design Tech
                </p>
                <p className="text-[var(--foreground-muted)] text-xs mt-0.5">
                  Amazon Brand Innovation Lab
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center">
                <i className="ph-fill ph-package text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Photo */}
        <div className="lg:hidden relative w-full max-w-sm mx-auto aspect-square opacity-0 animate-fade-in stagger-3">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/30 to-amber-600/20 rounded-3xl rotate-3 blur-2xl opacity-40"></div>
          <div className="relative w-full h-full bg-[var(--surface)] rounded-3xl border border-[var(--border)] overflow-hidden">
            <Image
              src="/headshot.jpg"
              alt="Fitz Maro"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
