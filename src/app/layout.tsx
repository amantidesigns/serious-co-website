import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amantimelkamu.com'),
  title: "Amanti Melkamu - Product Designer Portfolio",
  description: "Product Designer specializing in AI-powered design, brand identity, and digital experiences. Based in Minneapolis, creating meaningful solutions from luxury spirits to healthcare platforms.",
  keywords: ["product designer", "graphic designer", "web design", "brand identity", "AI design", "UX design", "UI design", "portfolio", "Minneapolis designer", "Figma", "Webflow"],
  authors: [{ name: "Amanti Melkamu" }],
  creator: "Amanti Melkamu",
  publisher: "Amanti Melkamu",
  openGraph: {
    title: "Amanti Melkamu - Product Designer Portfolio",
    description: "Product Designer specializing in AI-powered design, brand identity, and digital experiences. Based in Minneapolis, creating meaningful solutions from luxury spirits to healthcare platforms.",
    url: "https://amantimelkamu.com",
    siteName: "Amanti Melkamu Portfolio",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "Amanti Melkamu - Product Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanti Melkamu - Product Designer Portfolio",
    description: "Product Designer specializing in AI-powered design, brand identity, and digital experiences. Based in Minneapolis, creating meaningful solutions.",
    images: ["/a-very-serious-company.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "var(--theme-color)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth-enhanced">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="var(--theme-color)" />
        <meta name="msapplication-navbutton-color" content="var(--theme-color)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Amanti Melkamu" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navbar />
        <main className="min-h-0">
          {children}
        </main>
        
        {/* Person Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Amanti Melkamu",
              "jobTitle": "Product Designer",
              "description": "Product Designer specializing in AI-powered design, brand identity, and digital experiences. Based in Minneapolis, creating meaningful solutions from luxury spirits to healthcare platforms.",
              "url": "https://amantimelkamu.com",
              "image": "https://amantimelkamu.com/a-very-serious-company.jpeg",
              "email": "amantimn@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Minneapolis",
                "addressRegion": "Minnesota",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://linkedin.com/in/amantidesigns"
              ],
              "knowsAbout": [
                "Product Design",
                "Web Design",
                "Brand Identity", 
                "AI-Powered Design",
                "UX/UI Design",
                "Graphic Design",
                "Figma",
                "Webflow",
                "Content Creation"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
