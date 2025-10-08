import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  PenTool,
  Brain,
  MessageSquare,
  Globe,
  Megaphone,
  MailCheck,
  Bot,
  Palette,
  Clapperboard,
  PenLine,
  Presentation,
} from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: string;
}

export interface ServiceGroup {
  id: string;
  title: string;
  eyebrow: string;
  intro: string;
  services: ServiceItem[];
  cta: {
    label: string;
    href: string;
  };
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: "brand-strategy",
    title: "Brand & Strategy",
    eyebrow: "Define the story",
    intro:
      "We shape the narrative, visuals, and decision frameworks that make your brand undeniable.",
    cta: {
      label: "Book a brand workshop",
      href: "#project-intake",
    },
    services: [
      {
        title: "Creative Direction",
        description:
          "Translate your idea into a clear creative platform with visuals, tone, and references.",
        icon: Sparkles,
      },
      {
        title: "Brand Identity Systems",
        description:
          "Logos, color, typography, and usage rules that stay consistent across every touchpoint.",
        icon: PenTool,
      },
      {
        title: "AI Training & Enablement",
        description:
          "Hands-on training that builds internal playbooks for using AI across your team without losing craft.",
        icon: Brain,
        highlight: "Popular",
      },
      {
        title: "Investor & Sales Narratives",
        description:
          "Story-first decks and one-pagers that align leadership, investors, and partners fast.",
        icon: Presentation,
      },
    ],
  },
  {
    id: "digital-web",
    title: "Digital & Web",
    eyebrow: "Make it work online",
    intro:
      "Websites, funnels, and campaigns that are opinionated, fast, and grounded in user need.",
    cta: {
      label: "Schedule a build sprint",
      href: "#project-intake",
    },
    services: [
      {
        title: "Website & Product Design",
        description:
          "High-conversion experiences built in weeks, not quarters—without sacrificing craft.",
        icon: Globe,
      },
      {
        title: "Paid & Lifecycle Creative",
        description:
          "Cohesive campaigns across paid, social, and CRM with a single creative brain running the show.",
        icon: Megaphone,
      },
      {
        title: "Email & Content Systems",
        description:
          "Reusable content architectures and automation that keeps publishing consistent.",
        icon: MailCheck,
      },
      {
        title: "AI-Assisted Production",
        description:
          "Pair humans with AI to concept, version, and ship content faster than traditional teams.",
        icon: Bot,
      },
    ],
  },
  {
    id: "design-production",
    title: "Design & Production",
    eyebrow: "Bring it to life",
    intro:
      "From illustration to film, we produce the artifacts that make people feel something.",
    cta: {
      label: "Plan a production sprint",
      href: "#project-intake",
    },
    services: [
      {
        title: "Illustration & 3D",
        description:
          "Custom artwork, 3D worlds, and motion that stay true to your brand language.",
        icon: Palette,
      },
      {
        title: "Content & Social Toolkits",
        description:
          "Editable templates and content drops that keep your team stocked for months.",
        icon: MessageSquare,
      },
      {
        title: "Video & Film",
        description:
          "Campaign films, sizzle reels, and episodic stories shot with a nimble crew.",
        icon: Clapperboard,
      },
      {
        title: "Copywriting & Editorial",
        description:
          "Voice, messaging architecture, and scripts that make complex ideas simple.",
        icon: PenLine,
      },
    ],
  },
];

export const serviceQuickLinks = serviceGroups.map((group) => ({
  id: group.id,
  title: group.title,
  href: `/services#${group.id}`,
}));
