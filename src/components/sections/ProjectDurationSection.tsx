"use client";

interface ProjectDurationSectionProps {
  duration: string;
}

export default function ProjectDurationSection({ duration }: ProjectDurationSectionProps) {
  return (
    <div className="max-w-4xl">
      <div className="space-y-3">
        <p className="text-xs text-white/60">
          Project Duration
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>{duration}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
