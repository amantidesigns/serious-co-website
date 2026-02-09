export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  icon: string;
  featured: boolean;
  deliverables?: string[];
  outcomes?: string[];
  timeline?: string;
  idealFor?: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Creative Marketing",
    slug: "creative-marketing",
    description:
      "Full-funnel creative that connects and converts. We align positioning, campaign concepts, and conversion assets so your marketing systems move fast without losing craft.",
    shortDescription: "Full-funnel creative that connects and converts.",
    category: "Marketing",
    icon: "SparklesIcon",
    featured: true,
    deliverables: [
      "Offer and message positioning",
      "Campaign concept and creative direction",
      "Ad creative sets (static, motion, copy)",
      "Landing pages and conversion copy",
      "Email and lifecycle sequences",
      "Performance reporting and iteration plan",
    ],
    outcomes: [
      "Clearer positioning and message-market fit",
      "Higher conversion rates across paid and owned",
      "Faster iteration cycles with consistent quality",
    ],
    timeline: "2-4 weeks for the first campaign system",
    idealFor: [
      "New product or offer launches",
      "Paid growth with underperforming creative",
      "Teams needing consistent creative ops",
    ],
  },
  {
    id: "2",
    title: "Web Development",
    slug: "web-development",
    description:
      "High-performance marketing and product sites built for speed, clarity, and scale. We ship clean builds with analytics, CMS workflows, and the foundations you can grow on.",
    shortDescription: "High-performance sites built to scale and iterate.",
    category: "Digital",
    icon: "GlobeAltIcon",
    featured: true,
    deliverables: [
      "Requirements and technical plan",
      "Design system or UI handoff",
      "Next.js build with CMS integration",
      "Analytics and tracking setup",
      "Performance and SEO tuning",
    ],
    outcomes: [
      "Faster load times and better SEO",
      "Higher conversions from clean UX",
      "Easier content updates without dev cycles",
    ],
    timeline: "3-6 weeks for a marketing site",
    idealFor: [
      "High-growth teams",
      "Product launches",
      "Replatforms and redesigns",
    ],
  },
  {
    id: "3",
    title: "AI Concierge",
    slug: "ai-concierge",
    description:
      "Custom AI workflows, automations, and enablement. We implement AI with guardrails so your team works faster without sacrificing quality.",
    shortDescription: "Custom AI workflows your team actually uses.",
    category: "Strategy",
    icon: "CpuChipIcon",
    featured: true,
    deliverables: [
      "Workflow audit and opportunity map",
      "Prompt systems and templates",
      "Automations and internal tools",
      "Team training and playbooks",
    ],
    outcomes: [
      "Reduced production time",
      "Consistent quality across outputs",
      "Higher team adoption with clear guardrails",
    ],
    timeline: "2-3 weeks for the initial system",
    idealFor: [
      "Content-heavy teams",
      "Creative studios",
      "Ops teams automating repetitive work",
    ],
  },
  {
    id: "4",
    title: "Brand Strategy",
    slug: "brand-strategy",
    description:
      "Positioning, voice, and visual identity that make your brand instantly legible. We translate what you do into a system your team can use.",
    shortDescription: "Positioning, voice, and visual identity.",
    category: "Strategy",
    icon: "SparklesIcon",
    featured: false,
    deliverables: [
      "Positioning and narrative",
      "Messaging guide and voice",
      "Visual identity system",
      "Brand usage kit",
    ],
    outcomes: [
      "Clear differentiation in your market",
      "Consistent messaging across channels",
    ],
    timeline: "2-4 weeks",
  },
  {
    id: "5",
    title: "Web Design",
    slug: "web-design",
    description:
      "UX and UI design that reduces friction and makes the right action obvious. We design flows that convert and scale.",
    shortDescription: "UX and UI design focused on clarity and conversion.",
    category: "Digital",
    icon: "GlobeAltIcon",
    featured: false,
    deliverables: [
      "Information architecture",
      "Wireframes and user flows",
      "High-fidelity UI design",
      "Design system components",
    ],
    outcomes: [
      "Lower friction in key flows",
      "Clearer user journeys",
    ],
  },
  {
    id: "6",
    title: "Content Strategy",
    slug: "content-strategy",
    description:
      "Messaging systems and content that compound. We align editorial direction, conversion copy, and content operations around your positioning.",
    shortDescription: "Messaging systems and content that compound.",
    category: "Content",
    icon: "DocumentTextIcon",
    featured: false,
    deliverables: [
      "Messaging architecture",
      "Editorial direction and cadence",
      "Conversion copy frameworks",
      "Content ops playbook",
    ],
    outcomes: [
      "Consistent content across channels",
      "Faster content production",
    ],
  },
  {
    id: "7",
    title: "Social Media Creative",
    slug: "social-media",
    description:
      "Creative systems for social that keep your brand consistent and your output frequent without looking templated.",
    shortDescription: "Creative systems for social that scale.",
    category: "Digital",
    icon: "ChatBubbleLeftRightIcon",
    featured: false,
  },
  {
    id: "8",
    title: "Video Production",
    slug: "video-production",
    description:
      "Video content built for clarity and conversion. From product stories to short-form, we deliver videos that perform.",
    shortDescription: "Video content built for clarity and conversion.",
    category: "Content",
    icon: "FilmIcon",
    featured: false,
  },
];
