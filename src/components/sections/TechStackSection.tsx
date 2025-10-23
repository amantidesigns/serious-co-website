"use client";

import Link from "next/link";
import ProjectTag from "@/components/blocks/ProjectTag";
import { theme } from "@/lib/theme";

interface TechStackItem {
  label: string;
  icon?: React.ReactNode;
  isLink?: boolean;
  href?: string;
}

interface TechStackSectionProps {
  items: TechStackItem[];
}

export default function TechStackSection({ items }: TechStackSectionProps) {
  // Separate principles (services) from applications (tools)
  const principles = items.filter(item => item.isLink && item.href);
  const applications = items.filter(item => !item.isLink || !item.href);

  return (
    <div className="max-w-4xl">
      <div className={`space-y-3`}>
        <p className={`${theme.typography.fontSize.xs} text-white/60`}>
          Tech Stack
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {/* Principles Group */}
          <div className="flex flex-wrap gap-2">
            {principles.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href || '#'}
                  className="hover:opacity-80 transition-opacity"
                >
                  <ProjectTag icon={item.icon}>
                    {item.label}
                  </ProjectTag>
                </Link>
              </div>
            ))}
          </div>

          {/* Separator - only show if both groups have items */}
          {principles.length > 0 && applications.length > 0 && (
            <div className="w-px h-4 bg-white/20 mx-1"></div>
          )}

          {/* Applications Group */}
          <div className="flex flex-wrap gap-2">
            {applications.map((item, index) => (
              <div key={index}>
                <ProjectTag icon={item.icon}>
                  {item.label}
                </ProjectTag>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
