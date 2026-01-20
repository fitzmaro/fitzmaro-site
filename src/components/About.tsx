export default function About() {
  const recognition = [
    "AdWeek 'Creative You Should Know'",
    "MediaPost 'Young Innovator'",
    "Campaign US 'Media Stars'",
    "Adweek 'Fearless Thinker'",
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[var(--accent)] font-medium tracking-widest uppercase text-xs mb-6">
              About
            </p>

            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-8 leading-tight">
              Tech mindset.<br />
              <span className="text-[var(--foreground-muted)]">Management skillset.</span>
            </h2>

            <div className="space-y-5 text-[var(--foreground-muted)] leading-relaxed">
              <p>
                Globally recognized Creative Technology leader with 12+ years of
                experience in agencies and top tech companies. Builder of innovative
                brands, teams, products, and partnerships.
              </p>

              <p>
                Currently building the most innovative, technically complex
                solutions for Amazon and our biggest partners. Overseeing a team of
                13 Design Technologists.
              </p>

              <p>
                I do my best work with folks that are smart, hard-working, and
                collaborative by nature. Passionate about Creativity and AI.
              </p>
            </div>
          </div>

          <div className="lg:mt-20">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-sm font-medium text-[var(--foreground-subtle)] uppercase tracking-widest mb-6">
                Recognition
              </h3>
              <div className="space-y-4">
                {recognition.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] group-hover:scale-150 transition-transform" />
                    <span className="text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-semibold text-[var(--accent)]">12+</div>
                <div className="text-xs text-[var(--foreground-subtle)] mt-1 uppercase tracking-wide">Years</div>
              </div>
              <div className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-semibold text-[var(--accent)]">30+</div>
                <div className="text-xs text-[var(--foreground-subtle)] mt-1 uppercase tracking-wide">Awards</div>
              </div>
              <div className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-semibold text-[var(--accent)]">13</div>
                <div className="text-xs text-[var(--foreground-subtle)] mt-1 uppercase tracking-wide">Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
