export default function Marquee() {
  const companies = [
    "AMAZON",
    "HBO",
    "PINTEREST",
    "CANON",
    "TARGET",
    "JAMESON",
    "LEAN CUISINE",
  ];

  const awards = [
    "CANNES LIONS",
    "CLIO AWARDS",
    "ONE SHOW",
    "D&AD",
    "EFFIE",
    "WEBBY",
  ];

  return (
    <div className="w-full border-y border-[var(--border)] bg-[var(--surface)]/50 py-10 overflow-hidden">
      {/* Companies Row */}
      <div className="relative flex overflow-x-hidden group mb-6">
        <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-32 items-center opacity-40 group-hover:opacity-60 transition-opacity duration-500">
          {[...companies, ...companies].map((company, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-bold text-[var(--foreground)] px-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {company}
            </span>
          ))}
        </div>
      </div>

      {/* Awards Row - Reverse Direction */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee-reverse whitespace-nowrap flex gap-16 md:gap-32 items-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          {[...awards, ...awards].map((award, i) => (
            <span
              key={i}
              className="text-xl md:text-2xl font-medium text-[var(--foreground-muted)] px-4 tracking-wide"
            >
              {award}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
