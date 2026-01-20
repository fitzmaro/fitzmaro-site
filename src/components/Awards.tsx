export default function Awards() {
  const awards = [
    { name: "Cannes Lions", count: "19", highlight: "Grand Prix + Gold" },
    { name: "Clios", count: "8", highlight: "4x Silver" },
    { name: "Effies", count: "2", highlight: "Gold" },
    { name: "One Show", count: "3", highlight: "Gold" },
    { name: "D&AD", count: "2", highlight: "Bronze" },
    { name: "Webby Awards", count: "1", highlight: "People's Choice" },
    { name: "ARF Ogilvy", count: "1", highlight: "Grand Ogilvy" },
    { name: "Shorty Awards", count: "3", highlight: "Silver" },
  ];

  return (
    <section id="awards" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] font-medium tracking-widest uppercase text-xs mb-4">
            Recognition
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            30+ Industry Awards
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-xl mx-auto">
            Including a Cannes Grand Prix, Golds at Effies and One Show, and recognition from the world&apos;s most prestigious creative competitions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 text-center hover:border-[var(--accent)]/30 transition-all duration-300"
            >
              <div className="text-4xl font-semibold text-[var(--accent)] mb-1 group-hover:scale-110 transition-transform">
                {award.count}
              </div>
              <div className="font-medium mb-1">{award.name}</div>
              <div className="text-xs text-[var(--foreground-subtle)]">
                {award.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-semibold text-[var(--accent)] mb-2">1</div>
              <div className="text-lg font-medium">Cannes Grand Prix</div>
              <div className="text-sm text-[var(--foreground-muted)]">Audio/Radio</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-semibold text-[var(--accent)] mb-2">4</div>
              <div className="text-lg font-medium">Cannes Lions</div>
              <div className="text-sm text-[var(--foreground-muted)]">Gold, Silver, Bronze</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-semibold text-[var(--accent)] mb-2">12</div>
              <div className="text-lg font-medium">Shortlists</div>
              <div className="text-sm text-[var(--foreground-muted)]">Cannes Lions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
