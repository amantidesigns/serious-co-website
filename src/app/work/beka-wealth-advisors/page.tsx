import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import Link from "next/link";
import { theme } from "@/lib/theme";
import ProjectTag, { FigmaIcon, WebflowIcon, CursorIcon } from "@/components/ProjectTag";

export const metadata: Metadata = {
  title: "Beka Wealth Advisors Case Study - Amanti Melkamu",
  description: "Financial advisory platform case study. See how we created a professional, trustworthy website for Beka Wealth Advisors to help clients manage their wealth with confidence.",
  openGraph: {
    title: "Beka Wealth Advisors Case Study - Amanti Melkamu",
    description: "Financial advisory platform case study. Professional website design for a wealth management firm.",
    images: [
      {
        url: "/beka-wealth-advisors-project.gif",
        width: 1200,
        height: 630,
        alt: "Beka Wealth Advisors Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beka Wealth Advisors Case Study - Amanti Melkamu",
    description: "Financial advisory platform case study. Professional website design for a wealth management firm.",
    images: ["/beka-wealth-advisors-project.gif"],
  },
};

export default function BekaWealthAdvisorsCaseStudy() {
  return (
    <ContentPageLayout title="Work / Beka Wealth Advisors" centerTitle={false}>
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>

        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We developed a sophisticated platform for this wealth advisory firm that needed a professional digital presence to build trust and showcase their financial expertise. 
              The polished, data-driven design emphasizes security, transparency, and personalized service, making it easy for clients to explore investment options and connect with advisors. 
              Our approach perfectly complemented their brand identity, highlighting credibility and financial acumen.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 ${theme.spacing.gap.md}`}>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Turnaround</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>6 weeks</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Client came from</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>LinkedIn outreach</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Design team</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Amanti & Partner</div>
            </div>
          </div>
          
          {/* Tech Stack - Own Row */}
          <div className={`${theme.spacing.space.md}`}>
            <div className={`space-y-3`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                <ProjectTag variant="work-type">Web Design</ProjectTag>
                <ProjectTag variant="work-type">Web Development</ProjectTag>
                <ProjectTag variant="work-type">UX Design</ProjectTag>
                <ProjectTag icon={<FigmaIcon />}>Figma</ProjectTag>
                <ProjectTag icon={<WebflowIcon />}>Webflow</ProjectTag>
                <ProjectTag icon={<CursorIcon />}>Cursor</ProjectTag>
              </div>
            </div>
          </div>
        </div>

        {/* Project Media */}
        <div className={`${theme.spacing.space.lg}`}>
          <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm">
            <img
              src="/beka-wealth-advisors-project.gif"
              alt="Beka Wealth Advisors project preview"
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
            "name": "Beka Wealth Advisors Website",
            "description": "Financial advisory platform case study. Professional website design for a wealth management firm.",
            "creator": {
              "@type": "Person",
              "name": "Amanti Melkamu",
              "url": "https://amantimelkamu.com"
            },
            "dateCreated": "2024",
            "genre": "Web Design Case Study",
            "keywords": ["financial services", "wealth management", "web design", "UX design"],
            "about": {
              "@type": "Thing",
              "name": "Financial Services Web Design"
            },
            "url": "https://amantimelkamu.com/work/beka-wealth-advisors",
            "image": "https://amantimelkamu.com/beka-wealth-advisors-project.gif",
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



