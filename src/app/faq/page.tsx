import FaqSection from "@/components/FaqSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about A Very Serious Company. Get answers about our services, process, and approach.",
  keywords: ["FAQ", "frequently asked questions", "help", "support", "questions", "answers"],
  openGraph: {
    title: "FAQ - A Very Serious Company",
    description: "Frequently asked questions about A Very Serious Company. Get answers about our services, process, and approach.",
    type: "article",
    url: "https://averyseriouscompany.com/faq",
    images: [
      {
        url: "/A Very Serious Company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - A Very Serious Company",
    description: "Frequently asked questions about A Very Serious Company. Get answers about our services, process, and approach.",
    images: ["/A Very Serious Company.jpeg"],
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQ() {
  return (
    <div className="bg-stone-100 min-h-screen">
      <FaqSection />
    </div>
  );
}
