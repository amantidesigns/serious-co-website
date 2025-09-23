import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore our portfolio of successful projects. From healthcare websites to luxury brands, see how we take simple ideas seriously.",
  keywords: ["case studies", "portfolio", "web design", "creative agency", "project examples", "client work"],
  openGraph: {
    title: "Case Studies - A Very Serious Company",
    description: "Explore our portfolio of successful projects. From healthcare websites to luxury brands, see how we take simple ideas seriously.",
    type: "website",
    url: "https://averyseriouscompany.com/case-studies",
    images: [
      {
        url: "/A Very Serious Company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - A Very Serious Company",
    description: "Explore our portfolio of successful projects. From healthcare websites to luxury brands, see how we take simple ideas seriously.",
    images: ["/A Very Serious Company.jpeg"],
  },
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}