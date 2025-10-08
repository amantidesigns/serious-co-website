import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import Link from "next/link";
import { theme } from "@/lib/theme";
import ProjectTag, { FigmaIcon, WebflowIcon, MidjourneyIcon } from "@/components/ProjectTag";

export const metadata: Metadata = {
  title: "Pet Love Cremation & Memorial Case Study - Amanti Melkamu",
  description: "Pet memorial services digital platform case study. See how we created a compassionate, caring website for Pet Love Cremation & Memorial to help families honor their beloved pets.",
  openGraph: {
    title: "Pet Love Cremation & Memorial Case Study - Amanti Melkamu",
    description: "Pet memorial services digital platform case study. Compassionate website design for pet memorial services.",
    images: [
      {
        url: "/pet-love-cremation-project.gif",
        width: 1200,
        height: 630,
        alt: "Pet Love Cremation & Memorial Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Love Cremation & Memorial Case Study - Amanti Melkamu",
    description: "Pet memorial services digital platform case study. Compassionate website design for pet memorial services.",
    images: ["/pet-love-cremation-project.gif"],
  },
};

export default function PetLoveCremationCaseStudy() {
  return (
    <ContentPageLayout title="Work / Pet Love Cremation & Memorial" centerTitle={false}>
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>

        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We created a compassionate digital platform for this pet memorial service that needed a sensitive, caring website to help families honor their beloved companions. 
              The warm, empathetic design balances professionalism with heartfelt emotion, making it easy for grieving pet owners to find memorial options and support. 
              Our approach perfectly complemented their mission, emphasizing dignity, care, and lasting memories.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 ${theme.spacing.gap.md}`}>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Turnaround</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>4 weeks</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Client came from</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Referral</div>
            </div>
            <div className={`space-y-1`}>
              <div className={`${theme.typography.fontSize.xs} text-white/70`}>Design team</div>
              <div className={`${theme.typography.fontSize.sm} ${theme.typography.fontWeight.normal} text-white`}>Amanti & Team</div>
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
              src="/pet-love-cremation-project.gif"
              alt="Pet Love Cremation & Memorial project preview"
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
            "name": "Pet Love Cremation & Memorial Website",
            "description": "Pet memorial services digital platform case study. Compassionate website design for pet memorial services.",
            "creator": {
              "@type": "Person",
              "name": "Amanti Melkamu",
              "url": "https://amantimelkamu.com"
            },
            "dateCreated": "2024",
            "genre": "Web Design Case Study",
            "keywords": ["pet memorial", "pet cremation", "compassionate design", "web design"],
            "about": {
              "@type": "Thing",
              "name": "Pet Services Web Design"
            },
            "url": "https://amantimelkamu.com/work/pet-love-cremation",
            "image": "https://amantimelkamu.com/pet-love-cremation-project.gif",
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



