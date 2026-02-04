export default function Awards() {
  const awardGroups = [
    {
      name: "Cannes Lions",
      details: ["1x Grand Prix", "1x Gold", "3x Silver", "2x Bronze", "12x Shortlist"],
      icon: "ph-trophy",
      featured: true,
    },
    {
      name: "Clio Awards",
      details: ["4x Silver", "3x Bronze", "1x Shortlist"],
      icon: "ph-medal",
    },
    {
      name: "One Show",
      details: ["1x Gold", "1x Silver", "1x Bronze"],
      icon: "ph-star",
    },
    {
      name: "Effie Awards",
      details: ["1x Gold", "1x Bronze"],
      icon: "ph-chart-line-up",
    },
    {
      name: "D&AD",
      details: ["1x Bronze", "1x Shortlist"],
      icon: "ph-pencil",
    },
    {
      name: "Webby Awards",
      details: ["People's Choice"],
      icon: "ph-globe",
    },
    {
      name: "Shorty Awards",
      details: ["1x Silver", "2x Finalist"],
      icon: "ph-chat-circle-text",
    },
    {
      name: "ARF Ogilvy",
      details: ["Grand Ogilvy Winner"],
      icon: "ph-crown",
    },
  ];

  return (
    <section id="awards" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[var(--accent)]/5 to-transparent opacity-50 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--accent)] font-bold tracking-widest uppercase text-xs mb-3 block">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl text-[var(--foreground)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            30+ Industry Awards
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-xl mx-auto text-lg">
            Including a Cannes Grand Prix, Golds at Effies and One Show, and recognition from the world&apos;s most prestigious creative competitions.
          </p>
        </div>

        {/* Featured Cannes Stats */}
        <div className="glass-nav border border-[var(--border)] rounded-[2rem] p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="card-hover p-4 rounded-2xl">
              <div className="text-5xl md:text-6xl font-bold text-[var(--accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>1</div>
              <div className="text-lg font-medium text-[var(--foreground)]">Grand Prix</div>
              <div className="text-sm text-[var(--foreground-subtle)]">Cannes Lions</div>
            </div>
            <div className="card-hover p-4 rounded-2xl">
              <div className="text-5xl md:text-6xl font-bold text-[var(--accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>7</div>
              <div className="text-lg font-medium text-[var(--foreground)]">Lions Won</div>
              <div className="text-sm text-[var(--foreground-subtle)]">Gold, Silver, Bronze</div>
            </div>
            <div className="card-hover p-4 rounded-2xl">
              <div className="text-5xl md:text-6xl font-bold text-[var(--accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>12</div>
              <div className="text-lg font-medium text-[var(--foreground)]">Shortlists</div>
              <div className="text-sm text-[var(--foreground-subtle)]">Cannes Lions</div>
            </div>
            <div className="card-hover p-4 rounded-2xl">
              <div className="text-5xl md:text-6xl font-bold text-[var(--accent)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>30+</div>
              <div className="text-lg font-medium text-[var(--foreground)]">Total Awards</div>
              <div className="text-sm text-[var(--foreground-subtle)]">Across all shows</div>
            </div>
          </div>
        </div>

        {/* Award Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {awardGroups.map((award, index) => (
            <div
              key={index}
              className={`bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 card-hover ${
                award.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${
                  award.featured ? "bg-[var(--accent)] text-white" : "bg-[var(--surface2)] text-[var(--foreground-muted)]"
                } flex items-center justify-center`}>
                  <i className={`ph-fill ${award.icon} text-xl`}></i>
                </div>
              </div>

              <h3 className={`font-bold text-[var(--foreground)] mb-3 ${
                award.featured ? "text-2xl" : "text-lg"
              }`} style={{ fontFamily: 'var(--font-display)' }}>
                {award.name}
              </h3>

              <div className={`space-y-1 ${award.featured ? "space-y-2" : ""}`}>
                {award.details.map((detail, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 ${
                      award.featured ? "text-base" : "text-sm"
                    } text-[var(--foreground-muted)]`}
                  >
                    <span className="text-[var(--accent)]">•</span>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
