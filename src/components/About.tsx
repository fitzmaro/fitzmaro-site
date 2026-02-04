export default function About() {
  const skills = [
    "AI Enablement",
    "Team Leadership",
    "Cross-functional",
    "Technical Training",
  ];

  const speakingCredits = [
    "Amazon Ads AI Week (Keynote)",
    "Cannes Lions Academy 2024",
    "SXSW 2020",
    "NYU, VCU Brandcenter, Miami Ad School",
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl text-[var(--foreground)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Built for Impact.
            </h2>
            <p className="text-[var(--foreground-muted)] max-w-lg text-lg">
              Operating at the intersection of design, code, and AI strategy to build resilient teams and products.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/fitzmaro/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[var(--foreground)] border-b border-[var(--border)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
          >
            View Full Profile <i className="ph-bold ph-arrow-right"></i>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {/* Quote Card - Large */}
          <div className="md:col-span-6 lg:col-span-8 bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 lg:p-12 flex flex-col justify-between card-hover relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--accent)]/10 transition-colors duration-700"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[var(--surface2)] rounded-2xl border border-[var(--border)] flex items-center justify-center mb-8 text-[var(--foreground)] shadow-inner">
                <i className="ph-duotone ph-fingerprint text-3xl"></i>
              </div>
              <h3 className="text-2xl lg:text-3xl font-medium text-[var(--foreground)] mb-6 leading-normal">
                &ldquo;I don&apos;t just manage teams—I translate. My role is bridging the gap between{" "}
                <span className="text-[var(--accent)]">creative vision</span> and{" "}
                <span className="text-[var(--accent)]">AI-powered engineering</span>, acting as translator, facilitator, and diplomat.&rdquo;
              </h3>
            </div>
            <div className="relative z-10 flex flex-wrap gap-3 mt-8">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-[var(--surface2)] border border-[var(--border)] text-sm text-[var(--foreground-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI Impact Stat Card */}
          <div className="md:col-span-3 lg:col-span-4 bg-[var(--accent)] text-white rounded-3xl p-8 flex flex-col justify-between card-hover relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex justify-between items-start">
              <i className="ph-bold ph-chart-line-up text-3xl"></i>
              <i className="ph-bold ph-arrow-up-right text-2xl opacity-50"></i>
            </div>
            <div>
              <p className="text-5xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>90%+</p>
              <p className="text-white/80 text-sm font-medium">Developer AI Adoption Rate</p>
            </div>
          </div>

          {/* Team Size Card */}
          <div className="md:col-span-3 lg:col-span-4 bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 flex flex-col justify-between card-hover">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[var(--foreground-muted)]">
                <i className="ph-fill ph-users text-xl"></i>
              </div>
              <span className="text-xs font-mono text-[var(--foreground-subtle)]">TEAM SIZE</span>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--foreground)] mb-1" style={{ fontFamily: 'var(--font-display)' }}>13+</p>
              <p className="text-[var(--foreground-muted)] text-sm">Design Technologists Managed</p>
              <p className="text-[var(--foreground-subtle)] text-xs mt-1">US, Canada, Mexico, Brazil</p>
            </div>
          </div>

          {/* Speaking Card */}
          <div className="md:col-span-3 lg:col-span-4 bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 flex flex-col card-hover">
            <p className="text-xs font-mono text-[var(--foreground-subtle)] mb-4 uppercase tracking-wider">Speaker At</p>
            <div className="space-y-3 flex-1">
              {speakingCredits.map((credit, i) => (
                <div key={i} className="flex items-start gap-2">
                  <i className="ph-fill ph-microphone-stage text-[var(--accent)] mt-0.5"></i>
                  <span className="text-[var(--foreground-muted)] text-sm">{credit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition Card */}
          <div className="md:col-span-3 lg:col-span-4 bg-gradient-to-br from-[var(--surface)] to-[var(--surface2)] border border-[var(--border)] rounded-3xl p-8 flex flex-col card-hover">
            <p className="text-xs font-mono text-[var(--foreground-subtle)] mb-4 uppercase tracking-wider">Recognized By</p>
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <i className="ph-fill ph-star text-[var(--accent)]"></i>
                <span className="text-[var(--foreground-muted)] text-sm">AdAge &ldquo;Creative You Should Know&rdquo;</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ph-fill ph-star text-[var(--accent)]"></i>
                <span className="text-[var(--foreground-muted)] text-sm">Cannes Lions &ldquo;Fearless Thinker&rdquo;</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ph-fill ph-star text-[var(--accent)]"></i>
                <span className="text-[var(--foreground-muted)] text-sm">Google/Drum &ldquo;Young Innovator&rdquo;</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ph-fill ph-star text-[var(--accent)]"></i>
                <span className="text-[var(--foreground-muted)] text-sm">MediaPost &ldquo;Young Innovator&rdquo;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
