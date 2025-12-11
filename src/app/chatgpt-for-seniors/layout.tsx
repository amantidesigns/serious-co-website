import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT for Seniors - A Very Serious Company",
  description: "A specialized 1-day workshop designed to teach seniors how to use ChatGPT for connection, entertainment, and daily assistance. We bring the workshop to your facility.",
  openGraph: {
    title: "ChatGPT for Seniors - A Very Serious Company",
    description: "A specialized 1-day workshop designed to teach seniors how to use ChatGPT for connection, entertainment, and daily assistance.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "ChatGPT for Seniors - A Very Serious Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT for Seniors - A Very Serious Company",
    description: "A specialized 1-day workshop designed to teach seniors how to use ChatGPT for connection, entertainment, and daily assistance.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function ChatGPTForSeniorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
