export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  icon: string;
  featured: boolean;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Branding & Creative Strategy",
    slug: "branding-strategy",
    description: "We develop clear, bold, lasting brand identities that resonate with your audience. From positioning to visual identity, we ensure your brand stands out and stays consistent.",
    shortDescription: "Clear, bold, lasting brand identities.",
    category: "Strategy",
    icon: "SparklesIcon",
    featured: true,
  },
  {
    id: "2",
    title: "Web Design & Development",
    slug: "web-design",
    description: "Custom websites that serve your audience's needs with clarity and performance. We build sites that convert, load fast, and look beautiful across all devices.",
    shortDescription: "Custom sites built to perform.",
    category: "Digital",
    icon: "GlobeAltIcon",
    featured: true,
  },
  {
    id: "3",
    title: "Video Production",
    slug: "video-production",
    description: "Compelling video content that tells your story. From product demos to brand films, we create videos that engage and convert.",
    shortDescription: "Videos that tell your story.",
    category: "Content",
    icon: "FilmIcon",
    featured: false,
  },
  {
    id: "4",
    title: "Content Creation & Copywriting",
    slug: "content-creation",
    description: "Clear, compelling copy and content that resonates. We write the way people think—directly, clearly, without fluff.",
    shortDescription: "Copy that actually works.",
    category: "Content",
    icon: "DocumentTextIcon",
    featured: false,
  },
  {
    id: "5",
    title: "Social Media Creative",
    slug: "social-media",
    description: "Engaging social media content that builds community and drives results. We create content people actually want to share.",
    shortDescription: "Content people actually share.",
    category: "Digital",
    icon: "ChatBubbleLeftRightIcon",
    featured: false,
  },
  {
    id: "6",
    title: "AI Consulting & Integration",
    slug: "ai-consulting",
    description: "Strategic AI implementation for creative workflows. We help you leverage AI to work faster without sacrificing quality.",
    shortDescription: "AI that augments your creativity.",
    category: "Strategy",
    icon: "CpuChipIcon",
    featured: false,
  },
];
