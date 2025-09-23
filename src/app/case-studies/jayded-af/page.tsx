import ContentPageLayout from "@/components/ContentPageLayout";
import Link from "next/link";
import { theme } from "@/lib/theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jayded AF Case Study",
  description: "We created a sophisticated website for this premium gin martini brand that needed a digital presence matching their craft cocktail experience.",
  keywords: ["premium gin", "martini brand", "craft cocktail", "luxury branding", "web design", "case study", "AI-generated content"],
  openGraph: {
    title: "Jayded AF Case Study - A Very Serious Company",
    description: "We created a sophisticated website for this premium gin martini brand that needed a digital presence matching their craft cocktail experience.",
    type: "article",
    url: "https://averyseriouscompany.com/case-studies/jayded-af",
    images: [
      {
        url: "/jayded-af-project.png",
        width: 1200,
        height: 630,
        alt: "Jayded AF project preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayded AF Case Study - A Very Serious Company",
    description: "We created a sophisticated website for this premium gin martini brand that needed a digital presence matching their craft cocktail experience.",
    images: ["/jayded-af-project.png"],
  },
  alternates: {
    canonical: "/case-studies/jayded-af",
  },
};

export default function JaydedAFCaseStudy() {
  return (
    <ContentPageLayout title="Case Studies / Jayded AF">
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>

        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We created a sophisticated website for this premium gin martini brand that needed a digital presence matching their craft cocktail experience. 
              We trained custom AI models using their photography, schematics, and videos to generate unique brand assets from scratch. 
              Our approach perfectly complemented their brand identity, emphasizing quality craftsmanship through both design and custom AI-generated content.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-4 ${theme.spacing.gap.md}`}>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Cost</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>$5,000</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Turnaround</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>1.5 months</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Client came from</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Cold call</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Design team</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Amanti, Liban & Robera</div>
            </div>
          </div>
        </div>

        {/* Project Media */}
        <div className={`${theme.spacing.space.lg}`}>
          <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm">
            <video
              src="/jayded-af-project-video.mp4"
              className="block w-full h-auto object-contain max-h-[60svh]"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        <div className={`${theme.spacing.margin.lg}`}>
          <Link 
            href="/case-studies" 
            className={`inline-flex items-center text-white/70 hover:text-white ${theme.transition.colors}`}
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    </ContentPageLayout>
  );
}
