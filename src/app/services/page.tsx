import type { Metadata } from "next";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { 
  LightBulbIcon, 
  SparklesIcon, 
  CpuChipIcon, 
  PresentationChartLineIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  BeakerIcon,
  PaintBrushIcon,
  FilmIcon,
  DocumentTextIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Our Services - A Very Serious Company",
  description: "We build brands, websites, and creative content that actually work. Using modern AI workflows, we deliver high-craft creative at speed. Simple ideas executed properly.",
  openGraph: {
    title: "Our Services - A Very Serious Company",
    description: "We build brands, websites, and creative content that actually work. Using modern AI workflows, we deliver high-craft creative at speed. Simple ideas executed properly.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Our Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - A Very Serious Company",
    description: "We provide strategic creative services that transform simple ideas into exceptional digital experiences. From brand development to web design, we take your vision seriously.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function OurServicesPage() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-32 text-white">
        
        {/* Hero Section with Eyebrow + Descriptive Subheading */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            Our Services
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            Brands, websites, and <span className="whitespace-nowrap">creative content</span>.<br />Built fast, built <em>right</em>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            AI workflows let us move at speed<span className="hidden md:inline"> without sacrificing craft</span><span className="md:hidden"><br />without sacrificing craft</span>.<br />Premium creative work in days, not months.
          </p>
        </div>

        {/* Services Grid - Three Groups */}
        <div className="space-y-32">
          
          {/* Group 1: Brand & Strategy */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-light text-white mb-3">Brand & Strategy</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <LightBulbIcon className="w-4 h-4 text-yellow-400" />
                </div>
                <h3 className="text-lg font-medium text-white">Creative Marketing</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Full-funnel creative that aligns campaigns, landing pages, and conversion assets.
                </p>
              </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <SparklesIcon className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-lg font-medium text-white">Brand Strategy</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Positioning, voice, and visual identity that keeps your brand consistent.
                </p>
              </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <CpuChipIcon className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-lg font-medium text-white">AI Concierge</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Custom AI workflows, automations, and enablement with clear guardrails.
                </p>
                <div className="pt-2">
                <a 
                  href="/chatgpt-for-seniors" 
                  className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-normal font-mono tracking-tight text-white/70 hover:text-white/90 transition-all duration-500 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 overflow-hidden"
                >
                  <div className="h-[120px] w-10 bg-gradient-to-r from-blue-400/20 via-blue-300/50 to-cyan-400/20 absolute blur-sm -rotate-45 -left-16 animate-shimmer-continuous" />
                  <span className="relative z-10">Learn about our ChatGPT for Seniors Workshop →</span>
                </a>
                </div>
              </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <PresentationChartLineIcon className="w-4 h-4 text-pink-400" />
                </div>
                <h3 className="text-lg font-medium text-white">Presentation Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Compelling presentations that engage audiences and communicate ideas powerfully.
                </p>
              </div>
            </div>
          </div>

          {/* Group 2: Digital & Web */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-light text-white mb-3">Digital & Web</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <GlobeAltIcon className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white">Web Development</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  High-performance sites built for speed, clarity, and scale.
                </p>
              </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <ChatBubbleLeftRightIcon className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-lg font-medium text-white">Social Media Creative</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Engaging social media content that builds community and drives results.
                </p>
              </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-4 h-4 text-indigo-400" />
                </div>
                <h3 className="text-lg font-medium text-white">Email Creation</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Email campaigns that connect with your audience and drive meaningful action.
                </p>
              </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <BeakerIcon className="w-4 h-4 text-violet-400" />
                </div>
                <h3 className="text-lg font-medium text-white">AI-Powered Creative</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Leveraging AI tools to enhance creativity and streamline production processes.
                </p>
              </div>
            </div>
          </div>

          {/* Group 3: Design & Production */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-light text-white mb-3">Design & Production</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <PaintBrushIcon className="w-4 h-4 text-orange-400" />
                </div>
                <h3 className="text-lg font-medium text-white">Illustration Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Custom illustrations that bring your brand story to life with unique visual style.
                </p>
              </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <FilmIcon className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="text-lg font-medium text-white">Motion Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Dynamic motion graphics and animations that capture attention and engage viewers.
                </p>
              </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <DocumentTextIcon className="w-4 h-4 text-teal-400" />
                </div>
                <h3 className="text-lg font-medium text-white">Print Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Traditional print materials with modern design sensibilities and attention to detail.
                </p>
              </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <BookOpenIcon className="w-4 h-4 text-sky-400" />
                </div>
                <h3 className="text-lg font-medium text-white">Ebooks & Report Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Professional document design that makes complex information accessible and engaging.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center space-y-4 pt-8 border-t border-white/10">
          <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
            We don&apos;t believe in one-size-fits-all solutions. Every project is unique, and we approach each one with fresh eyes and clear thinking.
          </p>
          <p className="text-base text-white/70">
            Ready to take your idea seriously? Let&apos;s talk.
          </p>
        </div>

      </div>
    </ContentPageLayout>
  );
}
