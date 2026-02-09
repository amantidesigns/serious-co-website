import type { Metadata } from "next";
import Link from "next/link";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import {
  LightBulbIcon,
  SparklesIcon,
  CpuChipIcon,
  PresentationChartLineIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  FilmIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Our Services - A Very Serious Company",
  description:
    "We build brands, websites, and creative content that actually work. Using modern AI workflows, we deliver high-craft creative at speed. Simple ideas executed properly.",
  openGraph: {
    title: "Our Services - A Very Serious Company",
    description:
      "We build brands, websites, and creative content that actually work. Using modern AI workflows, we deliver high-craft creative at speed. Simple ideas executed properly.",
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
    description:
      "We provide strategic creative services that transform simple ideas into exceptional digital experiences. From brand development to web design, we take your vision seriously.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

const featuredServices = [
  {
    title: "Creative Marketing",
    description:
      "Full-funnel creative that aligns campaigns, landing pages, and conversion assets into a single system.",
    outcomes: [
      "Cleaner acquisition funnels",
      "Stronger performance across channels",
      "Campaigns that actually convert",
    ],
    timeline: "2-4 weeks",
    href: "/services/creative-marketing",
    accent: "from-amber-400/25 via-orange-300/10 to-transparent",
    Icon: LightBulbIcon,
  },
  {
    title: "Web Development",
    description:
      "High-performance sites built for speed, clarity, and scale. Fast to launch, easy to evolve.",
    outcomes: [
      "Faster load times",
      "Higher conversion rates",
      "Easier content updates",
    ],
    timeline: "3-6 weeks",
    href: "/services/web-development",
    accent: "from-sky-400/25 via-blue-300/10 to-transparent",
    Icon: GlobeAltIcon,
  },
];

const serviceGroups = [
  {
    title: "Strategy & Messaging",
    items: [
      {
        title: "Creative Marketing",
        description:
          "Campaigns, landing pages, and messaging that keep performance and brand aligned.",
        Icon: LightBulbIcon,
        href: "/services/creative-marketing",
      },
      {
        title: "Brand Strategy",
        description:
          "Positioning, voice, and visual identity that makes your brand legible and consistent.",
        Icon: SparklesIcon,
        href: "/services/brand-strategy",
      },
      {
        title: "Content Strategy",
        description:
          "Messaging, narratives, and editorial systems that scale across channels.",
        Icon: BookOpenIcon,
        href: "/services/content-strategy",
      },
      {
        title: "AI Concierge",
        description:
          "Custom AI workflows, automations, and enablement with clear guardrails.",
        Icon: CpuChipIcon,
        href: "/services/ai-concierge",
      },
    ],
  },
  {
    title: "Digital & Experience",
    items: [
      {
        title: "Web Development",
        description: "High-performance sites built for speed, clarity, and scale.",
        Icon: GlobeAltIcon,
        href: "/services/web-development",
      },
      {
        title: "Web Design",
        description: "UX and UI design that reduces friction and drives action.",
        Icon: PresentationChartLineIcon,
        href: "/services/web-design",
      },
      {
        title: "Social Media",
        description: "Content systems that keep your feed alive without burning the team.",
        Icon: ChatBubbleLeftRightIcon,
        href: "/services/social-media",
      },
      {
        title: "Video Production",
        description: "Video, motion, and storytelling that make ideas stick.",
        Icon: FilmIcon,
        href: "/services/video-production",
      },
    ],
  },
];

const proofPoints = [
  { label: "Avg turnaround", value: "48hr" },
  { label: "Projects start with", value: "Real clarity" },
  { label: "Revision loops", value: "Minimal" },
  { label: "Communication", value: "Direct" },
];

export default function OurServicesPage() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-24 text-white">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            Our Services
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            Brands, websites, and <span className="whitespace-nowrap">creative systems</span>.<br />
            Built fast, built <em>right</em>.
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            We move fast because we remove waste. You get high-craft work without the agency drag.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {proofPoints.map((point) => (
              <div
                key={point.label}
                className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs sm:text-sm text-white/70"
              >
                <span className="text-white/90 font-medium">{point.value}</span>
                <span className="ml-2 text-white/50">{point.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Services */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-3">Featured Services</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-white/30 hover:bg-white/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">Featured</p>
                      <h3 className="text-2xl sm:text-3xl font-light text-white mt-2">
                        {service.title}
                      </h3>
                    </div>
                    <div className="size-12 rounded-2xl border border-white/20 bg-white/10 flex items-center justify-center">
                      <service.Icon className="size-6 text-white/80" />
                    </div>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Outcomes</p>
                      <ul className="space-y-2 text-sm text-white/80">
                        {service.outcomes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-white/40 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Typical timeline</p>
                      <p className="text-sm text-white/80">{service.timeline}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                        View service →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ChatGPT 101 CTA */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-300/10 to-transparent" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">Special Workshop</p>
              <h3 className="text-2xl sm:text-3xl font-light text-white mt-2">ChatGPT 101</h3>
              <p className="text-white/80 mt-3 max-w-2xl">
                Hands-on training that teaches practical workflows, clear prompts, and responsible use.
              </p>
            </div>
            <Link
              href="/chatgpt-101"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white text-blue-900 px-6 py-3 text-sm font-medium tracking-tight transition-all hover:bg-white/90"
            >
              Learn about ChatGPT 101 →
            </Link>
          </div>
        </section>

        {/* Service Groups */}
        {serviceGroups.map((group) => (
          <section key={group.title} className="space-y-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-light text-white mb-3">{group.title}</h2>
              <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {group.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center">
                      <item.Icon className="size-5 text-white/70" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-white">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                      <span className="text-xs uppercase tracking-widest text-white/60">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </ContentPageLayout>
  );
}
