export default function Awards() {
  const appearances = [
    { year: "2024", item: "Cannes - Academy Selected Speaker" },
    { year: "2023", item: "Amazon Hackathon Winner" },
    { year: "2022", item: "Guest Lecturer at NYU Stern" },
    { year: "2021", item: "SXSW Speaker for Pinterest Global" },
    { year: "2021", item: "Keynote speaker at Korea's 'Next Challenge' Entrepreneurs Conference" },
    { year: "2019-2021", item: "Top 3 Submissions to Pinterest Annual Hackathon (150+ entries each year)" },
    { year: "2018+2019", item: "Pinterest Award Winner: \"Put Pinners First\" & \"The Knitter\"" },
    { year: "2017", item: "Google + The Drum's 'Young Innovator'" },
    { year: "2016", item: "AdAge Magazine Cannes Edition 'Creative You Should Know' (1 of 11 globally)" },
    { year: "2015-present", item: "Guest lecturer: Syracuse Newhouse School of Comms., VCU Brandcenter grad program, Miami Ad School, LIU Marketing" },
    { year: "2015", item: "Campaign Magazine 'Fearless Thinker' Cannes winner / guest reporter" },
    { year: "2014", item: "Yahoo! 'Media Stars' winner" },
    { year: "2014", item: "NYC StrategyHack Winner" },
  ];

  // Expanded individual awards for the numbered list with badges
  const accolades = [
    { show: "Cannes Lions", level: "Grand Prix" },
    { show: "Cannes Lions", level: "Gold" },
    { show: "Cannes Lions", level: "Silver" },
    { show: "Cannes Lions", level: "Silver" },
    { show: "Cannes Lions", level: "Silver" },
    { show: "Cannes Lions", level: "Bronze" },
    { show: "Cannes Lions", level: "Bronze" },
    { show: "Effies", level: "Gold" },
    { show: "Effies", level: "Bronze" },
    { show: "One Show", level: "Gold" },
    { show: "One Show", level: "Silver" },
    { show: "One Show", level: "Bronze" },
    { show: "Clios", level: "Silver" },
    { show: "Clios", level: "Silver" },
    { show: "Clios", level: "Silver" },
    { show: "Clios", level: "Silver" },
    { show: "Clios", level: "Bronze" },
    { show: "Clios", level: "Bronze" },
    { show: "Clios", level: "Bronze" },
    { show: "D&AD", level: "Bronze" },
    { show: "Webbys", level: "Winner" },
    { show: "Webbys", level: "Winner" },
    { show: "Webbys", level: "Winner" },
    { show: "ARF Ogilvys", level: "Grand Ogilvy" },
    { show: "AdWeek Project Isaac", level: "Gold" },
    { show: "iab.MIXX Interactive", level: "Silver" },
    { show: "Shorty Awards", level: "Silver" },
    { show: "CreativePool", level: "Gold" },
    { show: "The Internationalist", level: "Gold+" },
  ];

  const getLevelStyle = (level: string) => {
    switch (level) {
      case "Grand Prix":
      case "Grand Ogilvy":
        return "bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold";
      case "Gold":
      case "Gold+":
      case "Winner":
        return "bg-amber-400/20 text-amber-400 border border-amber-400/30";
      case "Silver":
        return "bg-slate-300/20 text-slate-300 border border-slate-300/30";
      case "Bronze":
        return "bg-orange-600/20 text-orange-400 border border-orange-600/30";
      default:
        return "bg-[var(--surface2)] text-[var(--foreground-muted)] border border-[var(--border)]";
    }
  };

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
            Appearances & Accolades
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-xl mx-auto text-lg">
            From keynote stages to award podiums.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Appearances Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[var(--border)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center">
                <i className="ph-fill ph-microphone-stage text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]" style={{ fontFamily: 'var(--font-display)' }}>
                Appearances
              </h3>
            </div>

            <div className="space-y-4">
              {appearances.map((item, idx) => (
                <div key={idx} className="flex gap-4 group py-2 px-3 rounded-xl hover:bg-[var(--surface)] transition-all duration-200">
                  <span className="text-xs font-mono text-[var(--accent)] w-24 shrink-0 pt-0.5">
                    {item.year}
                  </span>
                  <span className="text-[var(--foreground-muted)] text-sm leading-relaxed group-hover:text-[var(--foreground)] transition-colors">
                    {item.item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Accolades Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[var(--border)]">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-black flex items-center justify-center">
                <i className="ph-fill ph-trophy text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]" style={{ fontFamily: 'var(--font-display)' }}>
                Accolades
              </h3>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mb-8 pb-6 border-b border-[var(--border)]/50">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-display)' }}>1</div>
                <div className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider">Grand Prix</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400" style={{ fontFamily: 'var(--font-display)' }}>6</div>
                <div className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider">Golds</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-300" style={{ fontFamily: 'var(--font-display)' }}>8</div>
                <div className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider">Silvers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400" style={{ fontFamily: 'var(--font-display)' }}>7</div>
                <div className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider">Bronzes</div>
              </div>
            </div>

            {/* Awards List */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
              {accolades.map((award, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-[var(--surface)] transition-all duration-200"
                >
                  <span className="text-xs font-mono text-[var(--foreground-subtle)] w-6">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[var(--foreground)] text-sm flex-1">
                    {award.show}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${getLevelStyle(award.level)}`}>
                    {award.level}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)]/50">
              <p className="text-[var(--foreground-subtle)] text-xs">
                + 12 Cannes Shortlists, 1 Clio Shortlist, 1 D&AD Shortlist, 1 Webby Finalist, 2 Shorty Finalists
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
