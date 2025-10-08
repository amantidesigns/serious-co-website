import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import Link from "next/link";
import { theme } from "@/lib/theme";
import ProjectTag, { FigmaIcon, WebflowIcon, MidjourneyIcon } from "@/components/ProjectTag";

export const metadata: Metadata = {
  title: "Zachary Construction Group Case Study - Amanti Melkamu",
  description: "Construction company digital presence case study. See how we created a professional, trustworthy website for Zachary Construction Group to showcase their projects and services.",
  openGraph: {
    title: "Zachary Construction Group Case Study - Amanti Melkamu",
    description: "Construction company digital presence case study. See how we created a professional, trustworthy website for Zachary Construction Group to showcase their projects and services.",
    images: [
      {
        url: "/zachary-construction-project.png",
        width: 1200,
        height: 630,
        alt: "Zachary Construction Group Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Construction Group Case Study - Amanti Melkamu",
    description: "Construction company digital presence case study. Professional website design for a leading construction company.",
    images: ["/zachary-construction-project.png"],
  },
};

export default function ZacharyConstructionCaseStudy() {
  return (
    <ContentPageLayout title="Work / Zachary Construction Group" centerTitle={false}>
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>

        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We developed a robust digital presence for this construction company that needed a professional website to showcase their commercial and residential projects. 
              The clean, organized design emphasizes trust, expertise, and attention to detail, making it easy for potential clients to explore their portfolio and services. 
              Our approach perfectly complemented their brand identity, highlighting quality craftsmanship and industry leadership.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 ${theme.spacing.gap.md}`}>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Turnaround</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>5 weeks</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Client came from</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Direct hire</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>My Role</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Director of Marketing</div>
            </div>
          </div>
          
          {/* Tech Stack - Own Row */}
          <div className={`${theme.spacing.space.md}`}>
            <div className={`space-y-3`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                <ProjectTag variant="work-type">Web Design</ProjectTag>
                <ProjectTag variant="work-type">Web Development</ProjectTag>
                <ProjectTag variant="work-type">Brand Identity</ProjectTag>
                <ProjectTag icon={<FigmaIcon />}>Figma</ProjectTag>
                <ProjectTag icon={<WebflowIcon />}>Webflow</ProjectTag>
                <ProjectTag icon={<MidjourneyIcon />}>Midjourney</ProjectTag>
              </div>
            </div>
          </div>
        </div>

        {/* Project Media */}
        <div className={`${theme.spacing.space.lg}`}>
          <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop"
              alt="Zachary Construction Group project preview"
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
            "name": "Zachary Construction Group Website",
            "description": "Construction company digital presence case study. Professional website design for a leading construction company.",
            "creator": {
              "@type": "Person",
              "name": "Amanti Melkamu",
              "url": "https://amantimelkamu.com"
            },
            "dateCreated": "2024",
            "genre": "Web Design Case Study",
            "keywords": ["construction website", "commercial construction", "web design", "brand identity"],
            "about": {
              "@type": "Thing",
              "name": "Construction Industry Web Design"
            },
            "url": "https://amantimelkamu.com/work/zachary-construction",
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



