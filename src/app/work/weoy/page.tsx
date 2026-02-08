import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyPageLayout from "@/components/sections/CaseStudyPageLayout";

export const metadata: Metadata = {
  title:
    "EY Entrepreneur Of The Year Case Study - A Very Serious Company",
  description:
    "A comprehensive branding and advertising campaign for EY's prestigious global awards program. Billboards, event signage, digital assets, and promotional materials celebrating entrepreneurial excellence.",
  openGraph: {
    title:
      "EY Entrepreneur Of The Year Case Study - A Very Serious Company",
    description:
      "Event branding and advertising campaign for EY's prestigious awards program.",
    images: [
      {
        url: "/projects/weoy/weoy-01.png",
        width: 1200,
        height: 630,
        alt: "EY Entrepreneur Of The Year Campaign Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "EY Entrepreneur Of The Year Case Study - A Very Serious Company",
    description:
      "Event branding and advertising campaign celebrating entrepreneurial excellence.",
    images: ["/projects/weoy/weoy-01.png"],
  },
};

export default function WEOYCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "EY Entrepreneur Of The Year Branding Campaign",
    description:
      "Comprehensive branding and advertising campaign for EY's global awards program.",
    creator: {
      "@type": "Organization",
      name: "A Very Serious Company",
      url: "https://avery-serious-company.com",
    },
    dateCreated: "2024",
    genre: "Event Branding Case Study",
    keywords: [
      "event branding",
      "advertising",
      "EY",
      "entrepreneurship",
      "awards program",
      "campaign design",
    ],
    url: "https://avery-serious-company.com/work/weoy",
    image:
      "https://avery-serious-company.com/projects/weoy/weoy-01.png",
    isPartOf: {
      "@type": "CollectionPage",
      name: "Our Work",
      url: "https://avery-serious-company.com/work",
    },
  };

  return (
    <CaseStudyPageLayout slug="weoy" structuredData={structuredData}>
      {/* Hero Image */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <Image
          src="/projects/weoy/weoy-01.png"
          alt="EY Entrepreneur Of The Year campaign design"
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
          EY&apos;s Entrepreneur Of The Year is one of the most prestigious
          business awards programs globally—the visual identity needed to match
          that gravitas. The campaign had to span physical and digital
          touchpoints while celebrating diverse entrepreneurial achievements
          without feeling generic.
        </p>

        <h3 className="text-2xl font-light text-white pt-4">Our Approach</h3>
        <p className="text-lg text-white/70 leading-relaxed">
          We developed a comprehensive branding campaign spanning billboards,
          event signage, and promotional materials, all centered around bold,
          confident typography that commands attention. The design uses striking,
          high-contrast layouts that celebrate entrepreneurial excellence without
          feeling corporate. Deep golds and rich blacks convey prestige and
          accomplishment, drawing focus to honorees and key messaging.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          The layouts are intentionally dynamic with asymmetrical compositions
          that suggest innovation and forward momentum. Every element maintains
          a cohesive visual language that elevates the program while honoring
          diverse achievements across industries and geographies.
        </p>
      </div>

      {/* Gallery */}
      <div className="space-y-6 max-w-4xl">
        <h3 className="text-2xl font-light text-white">Project Gallery</h3>
        <div className="grid grid-cols-1 gap-6">
          {[2, 3, 4, 5, 7, 8, 9, 10, 11].map((num) => (
            <div
              key={num}
              className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm"
            >
              <Image
                src={`/projects/weoy/weoy-${num < 10 ? "0" : ""}${num}.png`}
                alt={`EY Entrepreneur Of The Year design ${num}`}
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
