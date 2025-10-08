export type CaseStudyStatus = "published" | "comingSoon";

export interface CaseStudySummary {
  slug: string;
  title: string;
  description: string;
  status: CaseStudyStatus;
  industry: string;
  services: string[];
  accent: string;
  gradient: string;
  heroMedia: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
  metrics: Array<{ label: string; value: string }>;
  tags: string[];
  previewNote?: string;
}

export interface CaseStudyDetail extends CaseStudySummary {
  challenge: string;
  approach: string[];
  outcomes: string[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
}

export const caseStudies: CaseStudyDetail[] = [
  {
    slug: "jayded-af",
    title: "Jayded AF Premium Gin Website",
    description:
      "A luxury spirits brand needed a digital home that felt as considered as their martini ritual.",
    status: "published",
    industry: "Food & Beverage",
    services: ["Brand & Strategy", "Digital & Web", "Design & Production"],
    accent: "from-purple-400 via-fuchsia-400 to-pink-400",
    gradient: "bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-slate-900",
    heroMedia: {
      type: "video",
      src: "/jayded-af-project-video.mp4",
      alt: "Jayded AF premium gin website walkthrough",
    },
    metrics: [
      { label: "Turnaround", value: "6 weeks" },
      { label: "Team", value: "Amanti, Liban & Robera" },
      { label: "Platform", value: "Figma, Cursor, Vercel" },
    ],
    tags: ["Web Design", "Web Development", "AI Creative"],
    challenge:
      "Jayded AF needed a luxury e-commerce presence that matched the craft of their martini ritual without feeling like a templated DTC site.",
    approach: [
      "Built a modular design system that leans into cinematic lighting and serif typography to echo the ritual of the perfect martini.",
      "Trained a custom AI model on the brand's photography library to generate supporting visuals that feel handcrafted.",
      "Launched a headless commerce experience on Vercel to keep the experience fast even during product drops.",
    ],
    outcomes: [
      "Time-to-launch moved from a projected 12 weeks to 6 weeks without cutting fidelity.",
      "Converted 28% more visitors into email subscribers within the first month.",
      "Secured a national retail partnership after the launch thanks to the upgraded digital presence.",
    ],
    testimonial: {
      quote: "They took our world seriously. The site feels like the martini we pour—precise, bold, and impossible to forget.",
      author: "Rob Hart",
      role: "Founder, Jayded AF",
    },
  },
  {
    slug: "healthrive-recovery",
    title: "HealThrive Recovery Website",
    description:
      "A behavioral health startup needed warmth and trust to guide families through difficult decisions.",
    status: "published",
    industry: "Healthcare",
    services: ["Brand & Strategy", "Digital & Web"],
    accent: "from-blue-300 via-cyan-400 to-emerald-300",
    gradient: "bg-gradient-to-br from-sky-500/20 via-cyan-500/10 to-slate-900",
    heroMedia: {
      type: "image",
      src: "/healthrive-recovery-project.png",
      alt: "HealThrive Recovery website mockups",
    },
    metrics: [
      { label: "Turnaround", value: "3 weeks" },
      { label: "Team", value: "Amanti & Robera" },
      { label: "Platform", value: "Figma, Webflow, Midjourney" },
    ],
    tags: ["UX Design", "Web Development", "Brand Voice"],
    challenge:
      "Families looking for treatment are overwhelmed. HealThrive needed an experience that made complex care pathways feel human.",
    approach: [
      "Workshopped brand messaging with clinical leadership to translate medical language into plain speech.",
      "Built a resource library with conditional content so each audience—patients, families, clinicians—sees the right guidance.",
      "Crafted a calming visual system using natural gradients, soft micro-interactions, and warm portrait photography.",
    ],
    outcomes: [
      "Reduced time-to-contact from 72 hours to under 12 hours with clearer calls-to-action.",
      "Raised qualified consultation requests by 41% in the first quarter post-launch.",
      "Earned a feature in the state healthcare innovation report for the intake experience.",
    ],
    testimonial: {
      quote: "They designed around the emotion of the moment. Families feel seen before they ever speak with us.",
      author: "Dr. Mila Andrews",
      role: "Clinical Director, HealThrive Recovery",
    },
  },
  {
    slug: "zachary-construction-group",
    title: "Zachary Construction Group",
    description:
      "Rebuilding a commercial construction brand with a digital-first credential deck.",
    status: "comingSoon",
    industry: "Construction",
    services: ["Brand & Strategy", "Design & Production"],
    accent: "from-amber-300 via-orange-400 to-red-400",
    gradient: "bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-slate-900",
    heroMedia: {
      type: "image",
      src: "/case-studies/zachary-preview.png",
      alt: "Zachary Construction Group preview",
    },
    metrics: [
      { label: "Status", value: "In production" },
      { label: "Focus", value: "Brand Platform" },
      { label: "Launch", value: "Q2 2025" },
    ],
    tags: ["Brand Identity", "Sales Enablement"],
    previewNote:
      "We’re translating 40 years of field work into a clean, digital-first credentials stack that wins RFP rooms.",
    challenge:
      "",
    approach: [],
    outcomes: [],
  },
  {
    slug: "pet-love-memorial",
    title: "Pet Love Memorial",
    description:
      "Helping families navigate end-of-life decisions with clarity and compassion.",
    status: "comingSoon",
    industry: "Services",
    services: ["Digital & Web", "Design & Production"],
    accent: "from-rose-300 via-purple-300 to-indigo-300",
    gradient: "bg-gradient-to-br from-rose-500/20 via-purple-500/10 to-slate-900",
    heroMedia: {
      type: "image",
      src: "/case-studies/petlove-preview.png",
      alt: "Pet Love Memorial preview",
    },
    metrics: [
      { label: "Status", value: "In research" },
      { label: "Focus", value: "Service Design" },
      { label: "Launch", value: "Q3 2025" },
    ],
    tags: ["Customer Journey", "Content Strategy"],
    previewNote:
      "We’re building a guided memorial planning experience that answers tough questions before families have to ask.",
    challenge: "",
    approach: [],
    outcomes: [],
  },
  {
    slug: "beka-wealth",
    title: "Beka Wealth Advisors",
    description:
      "Positioning an independent wealth firm as the calm voice in volatile markets.",
    status: "comingSoon",
    industry: "Finance",
    services: ["Brand & Strategy", "Digital & Web"],
    accent: "from-emerald-300 via-teal-300 to-sky-300",
    gradient: "bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-slate-900",
    heroMedia: {
      type: "image",
      src: "/case-studies/beka-preview.png",
      alt: "Beka Wealth Advisors preview",
    },
    metrics: [
      { label: "Status", value: "Content build" },
      { label: "Focus", value: "Thought Leadership" },
      { label: "Launch", value: "Q3 2025" },
    ],
    tags: ["Content Marketing", "Investor Relations"],
    previewNote:
      "A crisp story for high-net-worth founders who need clarity, not market noise.",
    challenge: "",
    approach: [],
    outcomes: [],
  },
  {
    slug: "strangers-meeting-strangers",
    title: "Strangers Meeting Strangers",
    description:
      "A community platform engineering safe serendipity for live events.",
    status: "comingSoon",
    industry: "Technology",
    services: ["Digital & Web", "Design & Production"],
    accent: "from-sky-300 via-blue-300 to-indigo-300",
    gradient: "bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-slate-900",
    heroMedia: {
      type: "image",
      src: "/case-studies/sms-preview.png",
      alt: "Strangers Meeting Strangers preview",
    },
    metrics: [
      { label: "Status", value: "Beta" },
      { label: "Focus", value: "Product Design" },
      { label: "Launch", value: "Q1 2025" },
    ],
    tags: ["Product Design", "Community"],
    previewNote:
      "We’re designing a meet-up experience that feels safe, intentional, and actually fun.",
    challenge: "",
    approach: [],
    outcomes: [],
  },
  {
    slug: "the-last-paradox",
    title: "The Last Paradox",
    description:
      "An immersive artist launch for Warner Music’s most cryptic signing.",
    status: "comingSoon",
    industry: "Entertainment",
    services: ["Design & Production"],
    accent: "from-indigo-300 via-purple-400 to-violet-400",
    gradient: "bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-slate-900",
    heroMedia: {
      type: "video",
      src: "/case-studies/last-paradox-preview.mp4",
      alt: "The Last Paradox teaser",
    },
    metrics: [
      { label: "Status", value: "Experiential build" },
      { label: "Focus", value: "Launch Campaign" },
      { label: "Launch", value: "Q2 2025" },
    ],
    tags: ["Experiential", "Music"],
    previewNote:
      "A multi-sensory drop blending AR, short film, and live projection. Serious fun.",
    challenge: "",
    approach: [],
    outcomes: [],
  },
];

export function getCaseStudies() {
  return caseStudies;
}

export function findCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getPublishedCaseStudies() {
  return caseStudies.filter((study) => study.status === "published");
}
