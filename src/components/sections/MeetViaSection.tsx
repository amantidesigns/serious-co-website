"use client";

interface MeetViaSectionProps {
  meetVia: string;
}

export default function MeetViaSection({ meetVia }: MeetViaSectionProps) {
  return (
    <div className="max-w-4xl">
      <div className="space-y-3">
        <p className="text-xs text-white/60">
          Meet via
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>{meetVia}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
