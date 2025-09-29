import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";

export const metadata: Metadata = {
  title: "Jayded AF Case Study - A Very Serious Company",
  description: "Premium gin martini brand website design case study. See how we created a sophisticated digital presence for Jayded AF using custom AI models and brand assets to match their craft cocktail experience.",
  openGraph: {
    title: "Jayded AF Case Study - A Very Serious Company",
    description: "Premium gin martini brand website design case study. See how we created a sophisticated digital presence for Jayded AF using custom AI models and brand assets to match their craft cocktail experience.",
    images: [
      {
        url: "/jayded-af-project-video.mp4",
        width: 1200,
        height: 630,
        alt: "Jayded AF Premium Gin Brand Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayded AF Case Study - A Very Serious Company",
    description: "Premium gin martini brand website design case study. See how we created a sophisticated digital presence for Jayded AF using custom AI models and brand assets to match their craft cocktail experience.",
    images: ["/jayded-af-project-video.mp4"],
  },
};
import Link from "next/link";
import { theme } from "@/lib/theme";
import ProjectTag, { FigmaIcon, VercelIcon, CursorIcon, LovableIcon } from "@/components/ProjectTag";

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
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 ${theme.spacing.gap.md}`}>
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
          
          {/* Tech Stack - Own Row */}
          <div className={`${theme.spacing.space.md}`}>
            <div className={`space-y-3`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                <ProjectTag variant="work-type">Web Design</ProjectTag>
                <ProjectTag variant="work-type">Web Development</ProjectTag>
                <ProjectTag icon={<FigmaIcon />}>Figma</ProjectTag>
                <ProjectTag icon={<VercelIcon />}>Vercel</ProjectTag>
                <ProjectTag icon={<CursorIcon />}>Cursor</ProjectTag>
                <ProjectTag icon={<LovableIcon />}>Lovable</ProjectTag>
              </div>
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
      
      {/* CreativeWork Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Jayded AF Premium Gin Brand Website",
            "description": "Premium gin martini brand website design case study. See how we created a sophisticated digital presence for Jayded AF using custom AI models and brand assets to match their craft cocktail experience.",
            "creator": {
              "@type": "Organization",
              "name": "A Very Serious Company",
              "url": "https://avery-serious-company.com"
            },
            "dateCreated": "2024",
            "genre": "Web Design Case Study",
            "keywords": ["premium gin", "luxury spirits", "brand website", "digital marketing", "craft cocktail", "brand development"],
            "about": {
              "@type": "Thing",
              "name": "Premium Spirits Brand Development"
            },
            "workExample": {
              "@type": "MediaObject",
              "contentUrl": "https://avery-serious-company.com/jayded-af-project-video.mp4",
              "encodingFormat": "video/mp4"
            },
            "url": "https://avery-serious-company.com/case-studies/jayded-af",
            "image": "https://avery-serious-company.com/jayded-af-project-video.mp4",
            "isPartOf": {
              "@type": "CollectionPage",
              "name": "Case Studies",
              "url": "https://avery-serious-company.com/case-studies"
            }
          })
        }}
      />
    </ContentPageLayout>
  );
}
