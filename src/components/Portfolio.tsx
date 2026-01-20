"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  client: string;
  vimeoId: string | null;
  description: string;
  awards: string[];
  thumbnail: string | null;
  stats?: string;
}

const projects: Project[] = [
  {
    id: "westworld-maze",
    title: 'Westworld "The Maze"',
    client: "HBO",
    vimeoId: "349092003",
    description:
      'An Alexa AI-powered game that uses the show\'s entire sound library to bring the park to life in your living room.',
    awards: ["Cannes Grand Prix", "Cannes Gold Lion", "Webby Award"],
    thumbnail:
      "https://i.vimeocdn.com/video/799930263-c79ab89ba77a7567803a8d0ade2aa405bf6ee9cbc744171840116279a24c9a23-d_640",
  },
  {
    id: "canon-photo-tips",
    title: "Real Time Photo Tips",
    client: "Canon",
    vimeoId: "162856010",
    description:
      "Digital billboards at NYC's most photographed landmarks serving contextual tips based on real-time API data.",
    awards: ["Cannes Bronze Lion", "Cannes Shortlist"],
    thumbnail:
      "https://i.vimeocdn.com/video/565570508-b0ec061fa5a3d486499d786cbff5724c392d9d737dc1c47e710d0cf8a6c537f9-d_640",
  },
  {
    id: "target-treatster",
    title: "Target Treatster",
    client: "Target",
    vimeoId: "156875309",
    description:
      "The first crowd-sourced social network for trick-or-treating, including custom 3D printed jack-o-lanterns with GPS.",
    awards: ["Cannes Silver Lion", "Clios"],
    thumbnail:
      "https://i.vimeocdn.com/video/558009830-afb12ec48896056b2429d9daf4620a52dbc7e00f31cbee6f43b9e312536fe674-d_640",
  },
  {
    id: "lean-cuisine-diet-filter",
    title: "#WeighThis Diet Filter",
    client: "Lean Cuisine",
    vimeoId: "153539907",
    description:
      'A custom-built TV hack that mutes the word "diet" plus a Chrome extension. Donations made for every filtered word.',
    awards: ["Cannes Silver", "Effie Gold", "One Show Gold"],
    thumbnail:
      "https://i.vimeocdn.com/video/553852190-aa6c849b7417e292200350db79b6fa7f17ac3336024188df7965068c6bee70ea-d_640",
  },
  {
    id: "jameson-bar",
    title: "The Jameson Bar",
    client: "Jameson",
    vimeoId: null,
    description:
      "First of its kind voice experience on Google Home, giving authentic Irish toasts and cocktail recipes.",
    awards: ["Cannes Bronze"],
    thumbnail: null,
  },
  {
    id: "reeve-foundation",
    title: "Accessible Play",
    client: "Reeve Foundation",
    vimeoId: null,
    description:
      "Innovative accessible toys that help people living with paralysis play with their children.",
    awards: [],
    thumbnail: null,
  },
  {
    id: "pinterest-innovation",
    title: "Pin Extension Ad Unit",
    client: "Pinterest",
    vimeoId: null,
    description:
      "Created a new ad unit and led multi-day Advertiser Innovation Workshops resulting in award-winning campaigns.",
    awards: ["AdWeek Project Isaac Winner"],
    stats: "$500M+ revenue",
    thumbnail: null,
  },
];

function VideoModal({
  vimeoId,
  onClose,
}: {
  vimeoId: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
          aria-label="Close video"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="video-container rounded-2xl overflow-hidden glow">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Project video"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [showVideo, setShowVideo] = useState(false);
  const isLarge = index === 0;

  return (
    <>
      <article
        className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/30 bg-[var(--card-bg)] hover-lift ${
          isLarge ? "md:col-span-2 md:row-span-2" : ""
        }`}
      >
        {project.thumbnail ? (
          <div
            className={`relative bg-[var(--background-secondary)] cursor-pointer overflow-hidden ${
              isLarge ? "aspect-[16/10]" : "aspect-video"
            }`}
            onClick={() => project.vimeoId && setShowVideo(true)}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {project.vimeoId && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/30">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[var(--accent)] text-sm font-medium mb-1">
                {project.client}
              </p>
              <h3 className={`font-semibold text-white ${isLarge ? "text-2xl" : "text-lg"}`}>
                {project.title}
              </h3>
            </div>
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-[var(--background-elevated)] to-[var(--background-secondary)] p-6 flex flex-col justify-end">
            <p className="text-[var(--accent)] text-sm font-medium mb-1">
              {project.client}
            </p>
            <h3 className="font-semibold text-lg mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] line-clamp-2">
              {project.description}
            </p>
            {project.stats && (
              <p className="text-sm font-medium text-[var(--accent)] mt-2">
                {project.stats}
              </p>
            )}
          </div>
        )}

        {project.awards.length > 0 && (
          <div className="absolute top-4 right-4 flex gap-2">
            {project.awards.slice(0, 1).map((award, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm text-white rounded-full"
              >
                {award}
              </span>
            ))}
          </div>
        )}
      </article>

      {showVideo && project.vimeoId && (
        <VideoModal vimeoId={project.vimeoId} onClose={() => setShowVideo(false)} />
      )}
    </>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-32 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[var(--accent)] font-medium tracking-widest uppercase text-xs mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-[var(--foreground-muted)] max-w-md">
            Award-winning campaigns and innovative products across the world&apos;s most prestigious creative competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
