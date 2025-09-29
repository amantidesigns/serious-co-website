import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { theme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Why Us - A Very Serious Company",
  description: "We take simple ideas seriously. Learn about our philosophy of understanding simple ideas deeply, executing them properly, and respecting their power in business and design.",
  openGraph: {
    title: "Why Us - A Very Serious Company",
    description: "We take simple ideas seriously. Learn about our philosophy of understanding simple ideas deeply, executing them properly, and respecting their power in business and design.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Why Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Us - A Very Serious Company",
    description: "We take simple ideas seriously. Learn about our philosophy of understanding simple ideas deeply, executing them properly, and respecting their power in business and design.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function WhyUsPage() {
  return (
    <ContentPageLayout title="Why Us">
      <div className="relative z-20 max-w-4xl space-y-16 sm:space-y-20 text-white">
        
        {/* The Problem */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-white mb-4">
              Simple ideas don't get the attention they deserve.
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-white/50 to-transparent"></div>
          </div>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl">
            Most companies rush past the fundamentals to chase complexity. They miss the power that comes from truly understanding and properly executing simple ideas.
          </p>
        </div>

        {/* Philosophy, Approach, Practice - Case Studies Style */}
        <div className="space-y-0">
          
          {/* Philosophy Section */}
          <div className="relative py-6 pr-8">
            <div className="flex items-start gap-3 sm:gap-6">
              <div className="flex-shrink-0 flex items-center self-start" style={{ paddingTop: '0.375rem' }}>
                <span className={`${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-white/50`}>
                  01
                </span>
              </div>
              <div className="flex-1 relative">
                <span className="text-3xl sm:text-2xl font-light tracking-wide text-white leading-tight">
                  Our Philosophy
                </span>
                <div className="h-px w-0 bg-gradient-to-r from-white via-white/80 to-transparent mt-2"></div>
                <div className="mt-4 max-w-2xl">
                  <p className="text-base leading-relaxed text-white/80">
                    We take simple ideas seriously. We understand them deeply, execute them properly, and respect their power.
                  </p>
                </div>
              </div>
            </div>
            {/* Subtle divider line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          </div>

          {/* Approach Section */}
          <div className="relative py-6 pr-8">
            <div className="flex items-start gap-3 sm:gap-6">
              <div className="flex-shrink-0 flex items-center self-start" style={{ paddingTop: '0.375rem' }}>
                <span className={`${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-white/50`}>
                  02
                </span>
              </div>
              <div className="flex-1 relative">
                <span className="text-3xl sm:text-2xl font-light tracking-wide text-white leading-tight">
                  Our Approach
                </span>
                <div className="h-px w-0 bg-gradient-to-r from-white via-white/80 to-transparent mt-2"></div>
                <div className="mt-4 max-w-2xl space-y-3">
                  <p className="text-base leading-relaxed text-white/80">
                    Most teams present elaborate processes and proprietary frameworks. We believe the best process is no process at all—just clear thinking applied consistently.
                  </p>
                </div>
              </div>
            </div>
            {/* Subtle divider line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          </div>

          {/* Practice Section */}
          <div className="relative py-6 pr-8">
            <div className="flex items-start gap-3 sm:gap-6">
              <div className="flex-shrink-0 flex items-center self-start" style={{ paddingTop: '0.375rem' }}>
                <span className={`${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-white/50`}>
                  03
                </span>
              </div>
              <div className="flex-1 relative">
                <span className="text-3xl sm:text-2xl font-light tracking-wide text-white leading-tight">
                  In Practice
                </span>
                <div className="h-px w-0 bg-gradient-to-r from-white via-white/80 to-transparent mt-2"></div>
                <div className="mt-4 max-w-2xl">
                  <p className="text-base leading-relaxed text-white/80 italic">
                    "Take this website: we identified what visitors need to know, then said exactly that. Nothing more, nothing less."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Philosophy Statement */}
        <div className="pt-12 border-t border-white/10">
          <div className="max-w-3xl">
            <div className="space-y-8">
              
              {/* Philosophy Statement */}
              <div className="space-y-6">
                <p className="text-xl sm:text-2xl font-light leading-relaxed text-white">
                  This is what we mean by taking simple ideas seriously: understand what matters, then execute it properly.
                </p>
                
                <div className="pl-6 border-l border-white/20">
                  <p className="text-lg leading-relaxed text-white/80 italic mb-4">
                    "There is an old two-part rule that often works wonders in business, science, and elsewhere: take a simple, basic idea and take it very seriously."
                  </p>
                  <p className="text-sm text-white/50 font-light tracking-wide uppercase">
                    Charlie Munger
                  </p>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="pt-4">
                <div className="space-y-3">
                  <p className="text-sm text-white/60 font-medium tracking-wide uppercase">
                    Our Promise
                  </p>
                  <p className="text-2xl sm:text-3xl font-light text-white leading-tight">
                    Clear thinking applied consistently.
                  </p>
                  <p className="text-base text-white/70 pt-2">
                    Every project starts the same way. That's why we exist.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </ContentPageLayout>
  );
}