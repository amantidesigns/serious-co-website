"use client";

import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  name: string;
  slug: string;
  image: string;
}

interface CreativeTeamSectionProps {
  teamMembers: TeamMember[];
}

export default function CreativeTeamSection({ teamMembers }: CreativeTeamSectionProps) {
  return (
    <div className="max-w-4xl">
      <div className="space-y-3">
        <p className="text-xs text-white/60">
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
  );
}
