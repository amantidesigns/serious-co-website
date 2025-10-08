import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import Link from "next/link";
import { theme } from "@/lib/theme";
import ProjectTag, { FigmaIcon, WebflowIcon, MidjourneyIcon } from "@/components/ProjectTag";

export const metadata: Metadata = {
  title: "The Zachary Group Case Study - Amanti Melkamu",
  description: "Insurance company digital presence case study. See how we created a professional, trustworthy website for The Zachary Group to showcase their expertise in protecting businesses across North America.",
  openGraph: {
    title: "The Zachary Group Case Study - Amanti Melkamu",
    description: "Insurance company digital presence case study. See how we created a professional, trustworthy website for The Zachary Group to showcase their expertise in protecting businesses across North America.",
    images: [
      {
        url: "/the-zachary-group-project.png",
        width: 1200,
        height: 630,
        alt: "The Zachary Group Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Zachary Group Case Study - Amanti Melkamu",
    description: "Insurance company digital presence case study. Professional website design for a leading insurance provider.",
    images: ["/the-zachary-group-project.png"],
  },
};

export default function TheZacharyGroupCaseStudy() {
  return (
    <ContentPageLayout title="Work / The Zachary Group" centerTitle={false}>
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>

        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We developed a comprehensive digital presence for The Zachary Group, a leading insurance company protecting businesses across North America. 
              The website showcases their expertise in risk management across multiple industries including real estate, construction, education, and public entities. 
              Our design emphasizes trust, professionalism, and clarity, helping clients move confidently with the professional coverage they deserve.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 ${theme.spacing.gap.md}`}>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Turnaround</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>6 weeks</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Client came from</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Direct hire</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>My Role</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Lead Designer</div>
            </div>
          </div>
          
          {/* Tech Stack - Own Row */}
          <div className={`${theme.spacing.space.md}`}>
            <div className={`space-y-3`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                <ProjectTag variant="work-type">Web Design</ProjectTag>
                <ProjectTag variant="work-type">Web Development</ProjectTag>
                <ProjectTag variant="work-type">UX Strategy</ProjectTag>
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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop"
              alt="The Zachary Group project preview"
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
            "name": "The Zachary Group Website",
            "description": "Insurance company digital presence case study. Professional website design for a leading insurance provider serving businesses across North America.",
            "creator": {
              "@type": "Person",
              "name": "Amanti Melkamu",
              "url": "https://amantimelkamu.com"
            },
            "dateCreated": "2024",
            "genre": "Web Design Case Study",
            "keywords": ["insurance website", "risk management", "web design", "corporate website"],
            "about": {
              "@type": "Thing",
              "name": "Insurance Industry Web Design"
            },
            "url": "https://amantimelkamu.com/work/the-zachary-group",
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

