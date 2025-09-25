import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import CSSBoxFAQ from "@/components/blocks/css-box-faq";

export const metadata: Metadata = {
  title: "FAQ - A Very Serious Company",
  description: "Frequently asked questions about our creative agency services. Get answers about our process, pricing, timeline, and how we take simple ideas seriously to deliver exceptional results.",
  openGraph: {
    title: "FAQ - A Very Serious Company",
    description: "Frequently asked questions about our creative agency services. Get answers about our process, pricing, timeline, and how we take simple ideas seriously to deliver exceptional results.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - FAQ",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - A Very Serious Company",
    description: "Frequently asked questions about our creative agency services. Get answers about our process, pricing, timeline, and how we take simple ideas seriously to deliver exceptional results.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function FAQ() {
  return (
    <div className="bg-stone-100 min-h-screen">
      <FaqSection />
      <CSSBoxFAQ />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What kind of work do you do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Websites, advertisements, and whatever specific problems you bring us. We don't limit ourselves to categories."
                }
              },
              {
                "@type": "Question", 
                "name": "How much does it cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depends on what you need. We'll give you a straight answer after we understand your project."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "As long as it takes to do it right. We don't pad timelines, but we don't rush good work either."
                }
              },
              {
                "@type": "Question",
                "name": "What makes you different?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most agencies either overcomplicate everything or oversimplify and miss the point. We take simple ideas seriously."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get started?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Email us. Tell us what you need. We'll respond within 24 hours with our honest assessment."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
