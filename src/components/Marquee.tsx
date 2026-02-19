export default function Marquee() {
  const awards = [
    "CANNES LIONS",
    "CLIO AWARDS",
    "ONE SHOW",
    "D&AD",
    "EFFIE",
    "WEBBY",
  ];

  return (
    <div className="w-full border-y border-[var(--border)] bg-[var(--surface)]/50 py-8 overflow-hidden">
      {/* Awards Row */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-32 items-center opacity-40 group-hover:opacity-60 transition-opacity duration-500">
          {[...awards, ...awards].map((award, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-bold text-[var(--foreground)] px-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {award}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
