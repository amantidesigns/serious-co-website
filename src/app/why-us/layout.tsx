import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Us - A Very Serious Company",
  description: "Most agencies either overcomplicate everything or miss the point. We take simple ideas seriously. That means understanding them deeply, executing them properly, and respecting their power.",
  openGraph: {
    title: "Why Us - A Very Serious Company",
    description: "Most agencies either overcomplicate everything or miss the point. We take simple ideas seriously. That means understanding them deeply, executing them properly, and respecting their power.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Why Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Us - A Very Serious Company",
    description: "Most agencies either overcomplicate everything or miss the point. We take simple ideas seriously. That means understanding them deeply, executing them properly, and respecting their power.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function WhyUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
