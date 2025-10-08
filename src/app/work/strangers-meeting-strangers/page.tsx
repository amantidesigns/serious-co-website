import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import Link from "next/link";
import { theme } from "@/lib/theme";
import ProjectTag, { FigmaIcon, LovableIcon, CursorIcon, VercelIcon } from "@/components/ProjectTag";

export const metadata: Metadata = {
  title: "Strangers Meeting Strangers Case Study - Amanti Melkamu",
  description: "Community platform case study. See how we created an engaging social platform that brings people together through meaningful connections and shared experiences.",
  openGraph: {
    title: "Strangers Meeting Strangers Case Study - Amanti Melkamu",
    description: "Community platform case study. Social connection platform design that brings people together.",
    images: [
      {
        url: "/strangers-meeting-strangers-project.png",
        width: 1200,
        height: 630,
        alt: "Strangers Meeting Strangers Platform Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strangers Meeting Strangers Case Study - Amanti Melkamu",
    description: "Community platform case study. Social connection platform design that brings people together.",
    images: ["/strangers-meeting-strangers-project.png"],
  },
};

export default function StrangersMeetingStrangersCaseStudy() {
  return (
    <ContentPageLayout title="Work / Strangers Meeting Strangers" centerTitle={false}>
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>

        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We built an innovative social platform that connects people through meaningful experiences and shared interests. 
              The friendly, intuitive design encourages authentic connections while maintaining safety and trust, making it easy for users to discover events, join communities, and build lasting relationships. 
              Our approach perfectly balanced social engagement with user safety, emphasizing authentic interactions and inclusive community building.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 ${theme.spacing.gap.md}`}>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Turnaround</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>8 weeks</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Client came from</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Startup partnership</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Design team</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Amanti & Dev Team</div>
            </div>
          </div>
          
          {/* Tech Stack - Own Row */}
          <div className={`${theme.spacing.space.md}`}>
            <div className={`space-y-3`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                <ProjectTag variant="work-type">Product Design</ProjectTag>
                <ProjectTag variant="work-type">UX Design</ProjectTag>
                <ProjectTag variant="work-type">Web Development</ProjectTag>
                <ProjectTag icon={<FigmaIcon />}>Figma</ProjectTag>
                <ProjectTag icon={<CursorIcon />}>Cursor</ProjectTag>
                <ProjectTag icon={<LovableIcon />}>Lovable</ProjectTag>
                <ProjectTag icon={<VercelIcon />}>Vercel</ProjectTag>
              </div>
            </div>
          </div>
        </div>

        {/* Project Media */}
        <div className={`${theme.spacing.space.lg}`}>
          <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop"
              alt="Strangers Meeting Strangers project preview"
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
            "name": "Strangers Meeting Strangers Platform",
            "description": "Community platform case study. Social connection platform design that brings people together.",
            "creator": {
              "@type": "Person",
              "name": "Amanti Melkamu",
              "url": "https://amantimelkamu.com"
            },
            "dateCreated": "2024",
            "genre": "Product Design Case Study",
            "keywords": ["social platform", "community design", "UX design", "product design"],
            "about": {
              "@type": "Thing",
              "name": "Social Platform Design"
            },
            "url": "https://amantimelkamu.com/work/strangers-meeting-strangers",
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



