import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-10 opacity-0 animate-fade-in">
          <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden ring-2 ring-[var(--accent)]/30 ring-offset-4 ring-offset-[var(--background)]">
            <Image
              src="https://static.wixstatic.com/media/ae6448_90308e93577547bfac02944e55ac7ad5~mv2.jpg/v1/fill/w_400,h_400,al_c/ae6448_90308e93577547bfac02944e55ac7ad5~mv2.jpg"
              alt="Fitz Maro"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-[var(--accent)] font-medium tracking-widest uppercase text-xs opacity-0 animate-fade-in stagger-1">
            Creative Technology Leader
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight opacity-0 animate-fade-in stagger-2">
            Fitz Maro
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto opacity-0 animate-fade-in stagger-3">
            Head of Design Technology at{" "}
            <span className="text-[var(--foreground)]">Amazon&apos;s Brand Innovation Lab</span>
          </p>

          <p className="text-lg text-[var(--foreground-subtle)] max-w-xl mx-auto opacity-0 animate-fade-in stagger-4">
            Building innovative teams, products, and experiences for 12+ years
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in stagger-5">
          <a
            href="#work"
            className="group px-8 py-3.5 accent-gradient text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/25"
          >
            View Work
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 glass rounded-full font-medium hover:bg-[var(--glass-border)] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-24 opacity-0 animate-fade-in stagger-5">
          <a
            href="#about"
            className="inline-flex flex-col items-center text-[var(--foreground-subtle)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
