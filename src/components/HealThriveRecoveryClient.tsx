"use client";

import HeroKineticMasonry from "@/components/HeroKineticMasonry";

export default function HealThriveRecoveryClient() {
  // Sample media items for the kinetic masonry
  const mediaItems = [
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
    { type: "image" as const, src: "/healthrive-recovery-project.png", alt: "HealThrive Recovery project" },
  ];

  return (
    <HeroKineticMasonry
      heading="HealThrive Recovery"
      subheading="Healthcare website design case study for addiction treatment center. See how we created a compassionate, trustworthy digital presence for HealThrive Recovery to help families find hope and healing."
      ctaLabel="View Case Study"
      onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      items={mediaItems}
      columnCount={3}
      speedsSec={[24, 28, 26]}
      gapPx={12}
    />
  );
}


