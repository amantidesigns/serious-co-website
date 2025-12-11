"use client";

import Link from "next/link";
import { services } from "@/content/services";

interface ServiceNavigationProps {
  currentSlug: string;
}

export default function ServiceNavigation({ currentSlug }: ServiceNavigationProps) {
  const currentIndex = services.findIndex((s) => s.slug === currentSlug);
  const nextService = services[(currentIndex + 1) % services.length];
  const prevService =
    services[(currentIndex - 1 + services.length) % services.length];

  return (
    <>
      {/* Back to Our Services link */}
      <div className="border-t border-white/10 pt-8 pb-16">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span>←</span>
          <span>Back to Our Services</span>
        </Link>
      </div>

      {/* Next Services Navigation */}
      <div className="border-t border-white/10 pt-16">
        <h3 className="text-sm font-medium tracking-widest uppercase text-white/60 mb-8">
          Other Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href={`/services/${prevService.slug}`}
            className="group p-6 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                  <span className="text-white/40 text-2xl font-light">←</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wide mb-1">
                  Previous
                </p>
                <p className="text-lg font-light text-white">
                  {prevService.title}
                </p>
                <p className="text-sm text-white/60">{prevService.category}</p>
              </div>
            </div>
          </Link>

          <Link
            href={`/services/${nextService.slug}`}
            className="group p-6 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 md:text-right"
          >
            <div className="flex items-center gap-4 md:flex-row-reverse">
              <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                  <span className="text-white/40 text-2xl font-light">→</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wide mb-1">
                  Next
                </p>
                <p className="text-lg font-light text-white">
                  {nextService.title}
                </p>
                <p className="text-sm text-white/60">{nextService.category}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
