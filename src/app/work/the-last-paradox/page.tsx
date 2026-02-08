import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyPageLayout from "@/components/sections/CaseStudyPageLayout";

export const metadata: Metadata = {
  title: "The Last Paradox Case Study - A Very Serious Company",
  description:
    "A digital experience for a Warner Bros. Music Group artist's album release. Immersive, cinematic design with interactive elements that feel more like an art installation than a music website.",
  openGraph: {
    title: "The Last Paradox Case Study - A Very Serious Company",
    description:
      "Warner Bros. Music Group artist digital experience—immersive and cinematic.",
    images: [
      {
        url: "/projects/the-last-paradox/the-love-paradox.png",
        width: 1200,
        height: 630,
        alt: "The Last Paradox Digital Experience Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Last Paradox Case Study - A Very Serious Company",
    description:
      "Immersive digital experience for a Warner Bros. Music Group artist.",
    images: ["/projects/the-last-paradox/the-love-paradox.png"],
  },
};

export default function TheLastParadoxCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "The Last Paradox Artist Digital Experience",
    description:
      "Warner Bros. Music Group artist digital experience design project.",
    creator: {
      "@type": "Organization",
      name: "A Very Serious Company",
      url: "https://avery-serious-company.com",
    },
    dateCreated: "2024",
    genre: "Digital Experience Case Study",
    keywords: [
      "music",
      "entertainment",
      "digital experience",
      "Warner Bros",
      "immersive design",
      "interactive",
    ],
    url: "https://avery-serious-company.com/work/the-last-paradox",
    image:
      "https://avery-serious-company.com/projects/the-last-paradox/the-love-paradox.png",
    isPartOf: {
      "@type": "CollectionPage",
      name: "Our Work",
      url: "https://avery-serious-company.com/work",
    },
  };

  return (
    <CaseStudyPageLayout
      slug="the-last-paradox"
      structuredData={structuredData}
    >
      {/* Hero Image */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <Image
          src="/projects/the-last-paradox/the-love-paradox.png"
          alt="The Last Paradox digital experience"
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
          The Last Paradox is a Warner Bros. Music Group artist who needed a
          digital experience matching the immersive, cinematic quality of their
          music. A standard music website wouldn&apos;t cut it—they needed
          something that felt like stepping into the album itself.
        </p>

        <h3 className="text-2xl font-light text-white pt-4">Our Approach</h3>
        <p className="text-lg text-white/70 leading-relaxed">
          We designed an interactive platform that feels more like an art
          installation than a traditional music website. The design uses
          dramatic full-bleed imagery with audio-reactive visuals that pulse and
          shift with the music—creating a synesthetic experience where sound
          becomes visual. The typography is bold and experimental, with glitch
          effects and dynamic spacing that mirror the artist&apos;s
          genre-bending sound.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          We intentionally minimized traditional UI chrome—no visible navigation
          bars or buttons—letting scroll-based animations guide users naturally.
          The moody, saturated palette of deep purples and electric blues feels
          otherworldly, pulling listeners deeper into the artistic vision with
          every interaction.
        </p>
      </div>
    </CaseStudyPageLayout>
  );
}
