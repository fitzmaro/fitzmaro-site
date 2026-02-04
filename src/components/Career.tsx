export default function Career() {
  const experience = [
    {
      period: "2022 — 2025",
      role: "Head of North America, Design Technology",
      company: "Amazon Brand Innovation Lab",
      location: "NYC, Hybrid",
      icon: "ph-package",
      highlights: [
        "Managing 13 Design Technologists across US, Canada, Mexico, Brazil",
        "Spearheading Amazon Ads' largest AI initiatives since 2022",
        "Led AI enablement: trained 50+ creatives, 25+ developers globally",
        "Delivered executive briefings on AI strategy; set 30%+ productivity goals",
        "Developed Figma AI plugin bringing AI into creative workflows",
        "Led client workshops for Fortune 500 brands across CPG, entertainment, tech",
      ],
    },
    {
      period: "2019 — 2022",
      role: "Global Creative Technology Lead",
      company: "Pinterest",
      location: "NYC → Remote",
      icon: "ph-push-pin",
      highlights: [
        "Led first-ever AR, VR, 360°, and WebGL campaign innovations",
        "Created Pinterest's Pin Extension ad format: $5M first year, $550M+ to date",
        "Led Global Sales Solutions Team, aligning Product Engineering with Marketing",
      ],
    },
    {
      period: "2013 — 2018",
      role: "Senior Innovation Lead",
      company: "360i",
      location: "NYC",
      icon: "ph-lightbulb",
      highlights: [
        "Co-founder of 360i Innovation Lab",
        "Named AdAge \"Creative You Should Know\" (Cannes edition)",
        "Built expertise translating technical concepts for non-technical audiences",
        "Earned dozens of industry awards",
      ],
      previousRoles: "Previous: Associate Brand Strategist → Innovation Strategist → Senior Innovation Strategist",
    },
    {
      period: "2012",
      role: "Strategy Intern",
      company: "Goodby, Silverstein & Partners",
      location: "San Francisco",
      icon: "ph-brain",
      highlights: [
        "Strategy Intern under Gareth Kay",
      ],
    },
  ];

  const education = [
    {
      period: "2011 — 2013",
      school: "VCU Brandcenter",
      degree: "Masters in Communications, Creative Technology",
      location: "Richmond, VA",
      honors: ["Summa Cum Laude; graduated 2nd overall", "Board of Directors Scholarship Recipient"],
    },
    {
      period: "2007 — 2011",
      school: "University of Mary Washington",
      degree: "BS Business, Marketing & Management",
      location: "Fredericksburg, VA",
      honors: ["2023 Alumni of Distinction (1 of 35 total)"],
    },
  ];

  return (
    <section id="career" className="py-24 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="text-[var(--accent)] font-bold tracking-widest uppercase text-xs mb-3 block">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl text-[var(--foreground)]" style={{ fontFamily: 'var(--font-display)' }}>
            Experience &{" "}
            <span className="text-[var(--foreground-subtle)]">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] transform md:-translate-x-1/2"></div>

          {/* Experience entries */}
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[var(--accent)] rounded-full transform -translate-x-1/2 border-4 border-[var(--surface)]"></div>

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="bg-[var(--background)] border border-[var(--border)] rounded-2xl p-6 card-hover">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--foreground-muted)]">
                        <i className={`ph-fill ${job.icon} text-xl`}></i>
                      </div>
                      <span className="text-sm font-mono text-[var(--foreground-subtle)]">{job.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      {job.role}
                    </h3>
                    <p className="text-[var(--accent)] font-medium mb-1">{job.company}</p>
                    <p className="text-[var(--foreground-subtle)] text-sm mb-4">{job.location}</p>

                    <ul className={`space-y-2 text-sm text-[var(--foreground-muted)] ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <span className="text-[var(--accent)] mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {job.previousRoles && (
                      <p className="mt-4 text-xs text-[var(--foreground-subtle)] italic">
                        {job.previousRoles}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education section */}
          <div className="mt-20 pt-12 border-t border-[var(--border)]">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Education
            </h3>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-[var(--background)] border border-[var(--border)] rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--foreground-muted)]">
                      <i className="ph-fill ph-graduation-cap text-xl"></i>
                    </div>
                    <span className="text-sm font-mono text-[var(--foreground-subtle)]">{edu.period}</span>
                  </div>

                  <h4 className="text-lg font-bold text-[var(--foreground)] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {edu.school}
                  </h4>
                  <p className="text-[var(--foreground-muted)] text-sm mb-1">{edu.degree}</p>
                  <p className="text-[var(--foreground-subtle)] text-xs mb-3">{edu.location}</p>

                  <div className="space-y-1">
                    {edu.honors.map((honor, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <i className="ph-fill ph-medal text-[var(--accent)]"></i>
                        <span className="text-[var(--foreground-muted)]">{honor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
