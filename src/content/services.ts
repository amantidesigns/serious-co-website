export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  icon: string;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  platforms?: string[];
  outcomes?: ServiceDetail[];
  deliverables?: string[];
  process?: ServiceDetail[];
  faqs?: ServiceFaq[];
}

export interface ServiceDetail {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
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
  {
    id: "7",
    title: "AI SEO & LLM Optimization",
    slug: "ai-seo-llm-optimization",
    description:
      "We make your brand easier for search engines and AI answer systems to find, understand, and cite. That means technically sound SEO, clear entity signals, answer-ready content, and video metadata that all tell the same story.",
    shortDescription: "Be easier to find—and easier for AI to understand.",
    category: "Digital",
    icon: "MagnifyingGlassIcon",
    featured: true,
    seoTitle: "AI SEO & LLM Optimization Agency | AVSC",
    seoDescription:
      "AI SEO and LLM optimization for Google, Gemini, ChatGPT, and YouTube. AVSC improves technical SEO, structured data, answer-ready content, and measurement.",
    platforms: ["Google", "Gemini", "ChatGPT", "YouTube"],
    outcomes: [
      {
        title: "A clearer brand entity",
        description:
          "We align your name, positioning, services, proof, and public profiles so machines encounter one consistent version of your business.",
      },
      {
        title: "Better crawlability",
        description:
          "We fix canonicals, sitemaps, internal links, robots rules, page metadata, and structured data so important pages can be discovered and interpreted.",
      },
      {
        title: "Answer-ready content",
        description:
          "We turn real customer questions into direct, useful pages with clear claims, credible evidence, and enough context to quote accurately.",
      },
      {
        title: "Stronger video discovery",
        description:
          "We align YouTube titles, descriptions, chapters, captions, thumbnails, embeds, and VideoObject data with the searches the video actually answers.",
      },
    ],
    deliverables: [
      "Technical SEO and AI-crawler audit",
      "Page titles, descriptions, canonicals, and social metadata",
      "Organization, service, article, breadcrumb, and video structured data",
      "Google Search, Gemini, ChatGPT Search, and YouTube discoverability plan",
      "Question-led content briefs and internal-link architecture",
      "YouTube metadata and transcript templates",
      "Search Console, YouTube, and AI-referral measurement baseline",
      "Human-reviewed metadata generation workflow for content at scale",
    ],
    process: [
      {
        title: "01 / Audit",
        description:
          "We establish the technical baseline, map your brand entity, and test the questions customers use to find businesses like yours.",
      },
      {
        title: "02 / Build",
        description:
          "We repair the site foundation, write the useful content that is missing, and connect every claim to visible proof.",
      },
      {
        title: "03 / Publish",
        description:
          "We validate the markup, submit the right URLs, and package video content consistently across your site and YouTube.",
      },
      {
        title: "04 / Measure",
        description:
          "We track qualified impressions, clicks, video discovery, branded searches, citations, and referrals—then improve what the evidence supports.",
      },
    ],
    faqs: [
      {
        question: "Is this different from traditional SEO?",
        answer:
          "It extends good SEO rather than replacing it. Search engines and AI answer systems both need accessible pages, consistent entities, useful content, and trustworthy evidence. We add platform-specific crawler, content, and measurement work on top of that foundation.",
      },
      {
        question: "Does metadata alone make an AI cite a brand?",
        answer:
          "No. Metadata helps machines interpret a page, but it cannot substitute for useful content, third-party authority, brand consistency, and real evidence. We use AI to scale careful implementation—not to manufacture authority.",
      },
      {
        question: "Can you guarantee a top ranking or an AI citation?",
        answer:
          "No honest agency can. Google, Gemini, ChatGPT, and YouTube make their own ranking and answer decisions. We improve eligibility, clarity, relevance, and measurement, then build authority over time.",
      },
      {
        question: "What does AI-powered metadata injection mean here?",
        answer:
          "It means generating accurate, page-specific metadata and structured data from approved source content, validating it, and publishing it through your site or content system. Every output stays reviewable and tied to what users can actually see.",
      },
    ],
  },
];
