"use client";

import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  name: string;
  slug: string;
  image: string;
}

interface TechStackItem {
  label: string;
  icon?: React.ReactNode;
  isLink?: boolean;
  href?: string;
}

interface ProjectDetailsGridSectionProps {
  duration: string;
  meetVia: string;
  teamMembers: TeamMember[];
  techStackItems: TechStackItem[];
}

export default function ProjectDetailsGridSection({
  duration,
  meetVia,
  teamMembers,
  techStackItems
}: ProjectDetailsGridSectionProps) {
  // Separate principles (services) from applications (tools) for tech stack
  const principles = techStackItems.filter(item => item.isLink && item.href);
  const applications = techStackItems.filter(item => !item.isLink || !item.href);

  return (
    <div className="max-w-4xl">
      <div className="space-y-6">
        {/* Row 1: Timeline + Creative Team */}
        <div className="flex flex-wrap items-start gap-4">
          {/* Timeline Section */}
          <div className="space-y-3">
            <p className="text-xs text-white/60 font-medium">
              Timeline
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>{duration}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>{meetVia}</span>
              </span>
            </div>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px h-8 bg-white/20 flex-shrink-0 self-end"></div>

          {/* Creative Team Section */}
          <div className="space-y-3">
            <p className="text-xs text-white/60 font-medium">
              Creative Team
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {teamMembers.map((member) => (
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

        {/* Row 2: Type of Work + Tech Stack - Desktop Only */}
        <div className="hidden md:flex flex-wrap items-start gap-4">
          {/* Type of Work Section */}
          <div className="space-y-3">
            <p className="text-xs text-white/60 font-medium">
              Type of Work
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {principles.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href || '#'}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 hover:bg-white/15 hover:text-white transition-all duration-200">
                      <span>{item.label}</span>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="w-px h-8 bg-white/20 flex-shrink-0 self-end"></div>

          {/* Tech Stack Section */}
          <div className="space-y-3">
            <p className="text-xs text-white/60 font-medium">
              Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {applications.map((item, index) => (
                <div key={index}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Combined Type of Work + Tech Stack */}
        <div className="md:hidden space-y-3">
          <p className="text-xs text-white/60 font-medium">
            Type of Work
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {/* Type of Work pills */}
            {principles.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href || '#'}
                  className="hover:opacity-80 transition-opacity"
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 hover:bg-white/15 hover:text-white transition-all duration-200">
                    <span>{item.label}</span>
                  </span>
                </Link>
              </div>
            ))}
            {/* Tech Stack pills */}
            {applications.map((item, index) => (
              <div key={`tech-${index}`}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
                  {item.icon}
                  <span>{item.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}