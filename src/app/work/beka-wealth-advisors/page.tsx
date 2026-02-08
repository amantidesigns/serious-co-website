import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyPageLayout from "@/components/sections/CaseStudyPageLayout";

export const metadata: Metadata = {
  title: "Beka Wealth Advisors Case Study - A Very Serious Company",
  description:
    "A professional financial advisory platform designed to convey trust and credibility. See how we made complex wealth management feel transparent and accessible.",
  openGraph: {
    title: "Beka Wealth Advisors Case Study - A Very Serious Company",
    description:
      "Professional financial advisory platform design—trust, credibility, and sophistication.",
    images: [
      {
        url: "/projects/beka/beka-01.png",
        width: 1200,
        height: 630,
        alt: "Beka Wealth Advisors Platform Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beka Wealth Advisors Case Study - A Very Serious Company",
    description:
      "Professional financial advisory platform design case study.",
    images: ["/projects/beka/beka-01.png"],
  },
};

export default function BekaWealthAdvisorsCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Beka Wealth Advisors Financial Platform",
    description:
      "Professional financial advisory platform design case study.",
    creator: {
      "@type": "Organization",
      name: "A Very Serious Company",
      url: "https://avery-serious-company.com",
    },
    dateCreated: "2024",
    genre: "Web Design Case Study",
    keywords: [
      "financial services",
      "wealth management",
      "web design",
      "trust",
      "credibility",
    ],
    url: "https://avery-serious-company.com/work/beka-wealth-advisors",
    image:
      "https://avery-serious-company.com/projects/beka/beka-01.png",
    isPartOf: {
      "@type": "CollectionPage",
      name: "Our Work",
      url: "https://avery-serious-company.com/work",
    },
  };

  return (
    <CaseStudyPageLayout
      slug="beka-wealth-advisors"
      structuredData={structuredData}
    >
      {/* Hero Image */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <Image
          src="/projects/beka/beka-01.png"
          alt="Beka Wealth Advisors platform design"
          width={1200}
          height={800}
          className="block w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Story Section */}
      <div className="max-w-3xl space-y-6">
        <h3 className="text-2xl font-light text-white">The Challenge</h3>
        <p className="text-lg text-white/70 leading-relaxed">
          Beka Wealth Advisors needed a platform that would convey trust while
          making complex financial information accessible to high-net-worth
          individuals. In an industry crowded with generic corporate templates,
          they needed to feel both established and approachable.
        </p>

        <h3 className="text-2xl font-light text-white pt-4">Our Approach</h3>
        <p className="text-lg text-white/70 leading-relaxed">
          We chose a serif typeface to establish that immediate sense of
          tradition and credibility—the timeless elegance expected from a
          trusted financial advisor. The deep blues and neutral tones create
          stability without feeling cold or corporate. Generous white space
          reduces cognitive load, giving clarity for important financial
          decisions.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          The interface features intuitive navigation, clear data visualization,
          and a secure client portal—all working to make wealth management feel
          transparent. Every design decision builds confidence while removing
          barriers to engagement.
        </p>
      </div>

      {/* Gallery */}
      <div className="space-y-6 max-w-4xl">
        <h3 className="text-2xl font-light text-white">Project Gallery</h3>
        <div className="grid grid-cols-1 gap-6">
          {[2, 3, 4, 5, 6, 7].map((num) => (
            <div
              key={num}
              className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm"
            >
              <Image
                src={`/projects/beka/beka-0${num}.png`}
                alt={`Beka Wealth Advisors design ${num}`}
                width={1200}
                height={800}
                className="block w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </CaseStudyPageLayout>
  );
}
