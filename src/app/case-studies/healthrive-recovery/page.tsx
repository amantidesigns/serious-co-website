import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";

export const metadata: Metadata = {
  title: "HealThrive Recovery Case Study - A Very Serious Company",
  description: "Healthcare website design case study for addiction treatment center. See how we created a compassionate, trustworthy digital presence for HealThrive Recovery to help families find hope and healing.",
  openGraph: {
    title: "HealThrive Recovery Case Study - A Very Serious Company",
    description: "Healthcare website design case study for addiction treatment center. See how we created a compassionate, trustworthy digital presence for HealThrive Recovery to help families find hope and healing.",
    images: [
      {
        url: "/healthrive-recovery-project.png",
        width: 1200,
        height: 630,
        alt: "HealThrive Recovery Healthcare Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealThrive Recovery Case Study - A Very Serious Company",
    description: "Healthcare website design case study for addiction treatment center. See how we created a compassionate, trustworthy digital presence for HealThrive Recovery to help families find hope and healing.",
    images: ["/healthrive-recovery-project.png"],
  },
};
import Link from "next/link";
import { theme } from "@/lib/theme";
import ProjectTag, { FigmaIcon, FramerIcon, MidjourneyIcon } from "@/components/ProjectTag";

export default function HealThriveRecoveryCaseStudy() {
  return (
    <ContentPageLayout title="Case Studies / HealThrive Recovery">
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>

        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We developed a compassionate website for this addiction treatment center that needed a trustworthy digital presence to help families find hope and healing. 
              The warm, professional design balances sensitivity with accessibility, making it easy for those seeking help to find the resources they need. 
              Our approach perfectly complemented their existing mission, emphasizing trust, empathy, and clear pathways to their comprehensive treatment services.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-4 ${theme.spacing.gap.md}`}>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Cost</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>$5,000</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Turnaround</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>1 month</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Client came from</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Referral from previous client</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Design team</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Amanti & Robera</div>
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
                <ProjectTag icon={<FramerIcon />}>Framer</ProjectTag>
                <ProjectTag icon={<MidjourneyIcon />}>Midjourney</ProjectTag>
              </div>
            </div>
          </div>
        </div>

        {/* Project Media */}
        <div className={`${theme.spacing.space.lg}`}>
          <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm">
            <img
              src="/healthrive-recovery-project.png"
              alt="HealThrive Recovery project preview"
              className="block w-full h-auto object-contain max-h-[60svh]"
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
            "name": "HealThrive Recovery Healthcare Website",
            "description": "Healthcare website design case study for addiction treatment center. See how we created a compassionate, trustworthy digital presence for HealThrive Recovery to help families find hope and healing.",
            "creator": {
              "@type": "Organization",
              "name": "A Very Serious Company",
              "url": "https://avery-serious-company.com"
            },
            "dateCreated": "2024",
            "genre": "Healthcare Web Design Case Study",
            "keywords": ["healthcare website", "addiction treatment", "mental health", "digital healthcare", "compassionate design", "healthcare marketing"],
            "about": {
              "@type": "Thing",
              "name": "Healthcare Digital Marketing"
            },
            "workExample": {
              "@type": "MediaObject",
              "contentUrl": "https://avery-serious-company.com/healthrive-recovery-project.png",
              "encodingFormat": "image/png"
            },
            "url": "https://avery-serious-company.com/case-studies/healthrive-recovery",
            "image": "https://avery-serious-company.com/healthrive-recovery-project.png",
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
