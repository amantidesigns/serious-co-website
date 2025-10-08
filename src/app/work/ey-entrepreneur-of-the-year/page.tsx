import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import Link from "next/link";
import { theme } from "@/lib/theme";
import ProjectTag, { FigmaIcon, MidjourneyIcon } from "@/components/ProjectTag";

export const metadata: Metadata = {
  title: "EY Entrepreneur Of The Year Case Study - Amanti Melkamu",
  description: "Brand and advertising campaign case study. See how we created comprehensive advertising materials including billboards, signage, and promotional assets for the prestigious EY Entrepreneur Of The Year program.",
  openGraph: {
    title: "EY Entrepreneur Of The Year Case Study - Amanti Melkamu",
    description: "Brand and advertising campaign case study. See how we created comprehensive advertising materials including billboards, signage, and promotional assets for the prestigious EY Entrepreneur Of The Year program.",
    images: [
      {
        url: "/ey-entrepreneur-project.png",
        width: 1200,
        height: 630,
        alt: "EY Entrepreneur Of The Year Campaign Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EY Entrepreneur Of The Year Case Study - Amanti Melkamu",
    description: "Brand and advertising campaign for the prestigious EY Entrepreneur Of The Year program.",
    images: ["/ey-entrepreneur-project.png"],
  },
};

export default function EYEntrepreneurCaseStudy() {
  return (
    <ContentPageLayout title="Work / EY Entrepreneur Of The Year" centerTitle={false}>
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>

        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We created a comprehensive suite of advertising materials for the prestigious EY Entrepreneur Of The Year program, 
              a global initiative that recognizes and celebrates outstanding entrepreneurs who demonstrate vision, leadership, and success. 
              Our work included designing impactful billboards, event signage, and promotional assets that effectively showcased 
              the program's events and honorees across multiple venues, capturing the excellence and innovation of the entrepreneurial spirit.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 ${theme.spacing.gap.md}`}>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Turnaround</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>8 weeks</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Client came from</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Agency partnership</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>My Role</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Creative Director</div>
            </div>
          </div>
          
          {/* Tech Stack - Own Row */}
          <div className={`${theme.spacing.space.md}`}>
            <div className={`space-y-3`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                <ProjectTag variant="work-type">Billboard Design</ProjectTag>
                <ProjectTag variant="work-type">Event Signage</ProjectTag>
                <ProjectTag variant="work-type">Brand Identity</ProjectTag>
                <ProjectTag variant="work-type">Print Design</ProjectTag>
                <ProjectTag icon={<FigmaIcon />}>Figma</ProjectTag>
                <ProjectTag icon={<MidjourneyIcon />}>Midjourney</ProjectTag>
              </div>
            </div>
          </div>
        </div>

        {/* Project Media */}
        <div className={`${theme.spacing.space.lg}`}>
          <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop"
              alt="EY Entrepreneur Of The Year project preview"
              className="block w-full h-auto object-contain max-h-[60svh]"
            />
          </div>
        </div>

        <div className={`${theme.spacing.margin.lg}`}>
          <Link 
            href="/" 
            className={`inline-flex items-center text-white/70 hover:text-white ${theme.transition.colors}`}
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
      
      {/* CreativeWork Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "EY Entrepreneur Of The Year Campaign",
            "description": "Brand and advertising campaign for the prestigious EY Entrepreneur Of The Year program, including billboards, signage, and promotional materials.",
            "creator": {
              "@type": "Person",
              "name": "Amanti Melkamu",
              "url": "https://amantimelkamu.com"
            },
            "dateCreated": "2024",
            "genre": "Advertising Campaign Case Study",
            "keywords": ["billboard design", "event marketing", "brand identity", "advertising", "entrepreneur"],
            "about": {
              "@type": "Thing",
              "name": "Event Marketing and Advertising Design"
            },
            "url": "https://amantimelkamu.com/work/ey-entrepreneur-of-the-year",
            "isPartOf": {
              "@type": "CollectionPage",
              "name": "Portfolio",
              "url": "https://amantimelkamu.com"
            }
          })
        }}
      />
    </ContentPageLayout>
  );
}

