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
  title: {
    default: "A Very Serious Company - Creative Agency",
    template: "%s | A Very Serious Company"
  },
  description: "We take simple ideas seriously. A creative agency that builds websites, creates advertisements, and solves specific business problems.",
  keywords: ["creative agency", "web design", "advertising", "business solutions", "website development", "branding", "digital marketing"],
  authors: [{ name: "A Very Serious Company" }],
  creator: "A Very Serious Company",
  publisher: "A Very Serious Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://averyseriouscompany.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://averyseriouscompany.com',
    title: 'A Very Serious Company - Creative Agency',
    description: 'We take simple ideas seriously. A creative agency that builds websites, creates advertisements, and solves specific business problems.',
    siteName: 'A Very Serious Company',
    images: [
      {
        url: '/A Very Serious Company.jpeg',
        width: 1200,
        height: 630,
        alt: 'A Very Serious Company - Creative Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Very Serious Company - Creative Agency',
    description: 'We take simple ideas seriously. A creative agency that builds websites, creates advertisements, and solves specific business problems.',
    images: ['/A Very Serious Company.jpeg'],
    creator: '@averyseriousco',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
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
        <meta name="theme-color" content="var(--theme-color)" />
        <meta name="msapplication-navbutton-color" content="var(--theme-color)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="A Very Serious Company" />
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
      </body>
    </html>
  );
}
