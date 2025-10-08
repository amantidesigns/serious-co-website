import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import Link from "next/link";
import { theme } from "@/lib/theme";
import ProjectTag, { FigmaIcon, WebflowIcon, MidjourneyIcon, CursorIcon } from "@/components/ProjectTag";

export const metadata: Metadata = {
  title: "The Last Paradox Case Study - Amanti Melkamu",
  description: "Warner Bros. Music Group artist digital experience case study. See how we created an immersive, engaging website for The Last Paradox's album release.",
  openGraph: {
    title: "The Last Paradox Case Study - Amanti Melkamu",
    description: "Warner Bros. Music Group artist digital experience case study. Immersive website design for an artist's album release.",
    images: [
      {
        url: "/the-last-paradox-project.gif",
        width: 1200,
        height: 630,
        alt: "The Last Paradox Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Last Paradox Case Study - Amanti Melkamu",
    description: "Warner Bros. Music Group artist digital experience case study. Immersive website design for an artist's album release.",
    images: ["/the-last-paradox-project.gif"],
  },
};

export default function TheLastParadoxCaseStudy() {
  return (
    <ContentPageLayout title="Work / The Last Paradox" centerTitle={false}>
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>

        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We created an immersive digital experience for this Warner Bros. Music Group artist's album release that needed a captivating online presence to engage fans and drive album sales. 
              The bold, creative design captures the artist's unique sound and aesthetic, featuring interactive elements, music previews, and exclusive content. 
              Our approach perfectly complemented the album's themes, emphasizing artistic expression and fan engagement through innovative web design.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 ${theme.spacing.gap.md}`}>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Turnaround</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>2 months</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Client came from</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Music label referral</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Design team</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Amanti & Creative Team</div>
            </div>
          </div>
          
          {/* Tech Stack - Own Row */}
          <div className={`${theme.spacing.space.md}`}>
            <div className={`space-y-3`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                <ProjectTag variant="work-type">Web Design</ProjectTag>
                <ProjectTag variant="work-type">Interactive Design</ProjectTag>
                <ProjectTag variant="work-type">Brand Identity</ProjectTag>
                <ProjectTag icon={<FigmaIcon />}>Figma</ProjectTag>
                <ProjectTag icon={<WebflowIcon />}>Webflow</ProjectTag>
                <ProjectTag icon={<MidjourneyIcon />}>Midjourney</ProjectTag>
                <ProjectTag icon={<CursorIcon />}>Cursor</ProjectTag>
              </div>
            </div>
          </div>
        </div>

        {/* Project Media */}
        <div className={`${theme.spacing.space.lg}`}>
          <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm">
            <img
              src="/the-last-paradox-project.gif"
              alt="The Last Paradox project preview"
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
            "name": "The Last Paradox Artist Website",
            "description": "Warner Bros. Music Group artist digital experience case study. Immersive website design for an artist's album release.",
            "creator": {
              "@type": "Person",
              "name": "Amanti Melkamu",
              "url": "https://amantimelkamu.com"
            },
            "dateCreated": "2024",
            "genre": "Web Design Case Study",
            "keywords": ["music website", "artist website", "interactive design", "brand identity", "Warner Bros"],
            "about": {
              "@type": "Thing",
              "name": "Music Industry Web Design"
            },
            "url": "https://amantimelkamu.com/work/the-last-paradox",
            "image": "https://amantimelkamu.com/the-last-paradox-project.gif",
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



