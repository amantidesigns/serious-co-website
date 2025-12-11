"use client";

import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/content/caseStudies";

interface CaseStudyNavigationProps {
  currentSlug: string;
}

export default function CaseStudyNavigation({ currentSlug }: CaseStudyNavigationProps) {
  const currentIndex = caseStudies.findIndex((c) => c.slug === currentSlug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prevStudy =
    caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  return (
    <>
      {/* Next Case Studies Navigation */}
      <div className="border-t border-white/10 pt-16">
        {/* Header at the top */}
        <h3 className="text-sm font-medium tracking-widest uppercase text-white/60 mb-8">
          Explore More Projects
        </h3>
        
        {/* Navigation cards in the middle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href={`/work/${prevStudy.slug}`}
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
                  {prevStudy.title}
                </p>
                <p className="text-sm text-white/60">{prevStudy.category}</p>
              </div>
            </div>
          </Link>

          <Link
            href={`/work/${nextStudy.slug}`}
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
                  {nextStudy.title}
                </p>
                <p className="text-sm text-white/60">{nextStudy.category}</p>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Back navigation at the bottom */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>Back to Our Work</span>
          </Link>
        </div>
      </div>
    </>
  );
}
