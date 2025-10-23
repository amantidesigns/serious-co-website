"use client";

import Link from "next/link";
import Image from "next/image";
import { theme } from "@/lib/theme";

interface TeamMember {
  name: string;
  slug: string;
  image: string;
}

interface ProjectDetailsSectionProps {
  turnaround: string;
  clientSource: string;
  designTeam: TeamMember[];
  techStack?: any[];
}

export default function ProjectDetailsSection({
  turnaround,
  clientSource,
  designTeam,
}: ProjectDetailsSectionProps) {
  return (
    <div className="max-w-4xl">
      <div className="flex flex-wrap items-center gap-2">
        {/* Project Metrics Group */}
        <div className="flex flex-wrap gap-2">
          {/* Turnaround Time Pill */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 hover:bg-white/15 hover:text-white transition-all duration-200">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>{turnaround}</span>
          </span>

          {/* Client Source Pill */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 hover:bg-white/15 hover:text-white transition-all duration-200">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>{clientSource}</span>
          </span>
        </div>

        {/* Separator */}
        <div className="w-px h-4 bg-white/20 mx-1"></div>

        {/* Design Team Pills */}
        <div className="flex flex-wrap gap-2">
          {designTeam.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 hover:bg-white/15 hover:text-white transition-all duration-200"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={16}
                height={16}
                className="rounded-full object-cover flex-shrink-0"
              />
              <span>{member.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
