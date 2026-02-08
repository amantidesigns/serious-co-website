export interface TeamMember {
  name: string;
  slug: string;
  image: string;
}

export interface TechStackItem {
  label: string;
  icon?: string;
  isLink?: boolean;
  href?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  workType: string;
  image: string;
  featured: boolean;
  turnaround?: string;
  clientSource?: string;
  designTeam?: TeamMember[];
  techStack?: TechStackItem[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Jayded AF",
    slug: "jayded-af",
    description: "Jayded AF is a premium gin martini brand that needed a sophisticated digital presence to match their craft cocktail experience. We created a sleek, modern website that captures the essence of their premium spirits and appeals to their target demographic of cocktail enthusiasts and luxury consumers.",
    category: "Luxury Consumer Brand",
    workType: "Food and Beverage",
    image: "/jayded-af-project-video.mp4",
    featured: true,
    turnaround: "1.5 months",
    clientSource: "Cold call",
    designTeam: [
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
      {
        name: "Liban",
        slug: "liban-kano",
        image: "/team/liban-kano-color.jpg",
      },
      {
        name: "Robera",
        slug: "robera-miti",
        image: "/team/robera-miti-color.jpg",
      },
    ],
    techStack: [
      { label: "Web Design", isLink: true, href: "/services/web-design" },
      { label: "Web Development", isLink: true, href: "/services/web-development" },
      { label: "Figma", icon: "figma" },
      { label: "Vercel", icon: "vercel" },
      { label: "Cursor", icon: "cursor" },
      { label: "Lovable", icon: "lovable" },
    ],
  },
  {
    id: "2",
    title: "HealThrive Recovery",
    slug: "healthrive-recovery",
    description: "HealThrive Recovery is an addiction treatment center requiring a compassionate and trustworthy digital presence to help families find hope and healing. We developed a warm, professional website that balances sensitivity with accessibility, making it easy for those seeking help to find the resources they need.",
    category: "Healthcare Services",
    workType: "Health and Wellness",
    image: "/healthrive-recovery-project.png",
    featured: true,
    turnaround: "3 weeks",
    clientSource: "Referral from previous client",
    designTeam: [
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
      {
        name: "Robera",
        slug: "robera-miti",
        image: "/team/robera-miti-color.jpg",
      },
    ],
    techStack: [
      { label: "Web Design", isLink: true, href: "/services/web-design" },
      { label: "Web Development", isLink: true, href: "/services/web-development" },
      { label: "Figma", icon: "figma" },
      { label: "Webflow", icon: "webflow" },
      { label: "Midjourney", icon: "midjourney" },
    ],
  },
  {
    id: "3",
    title: "Zachary Construction Group",
    slug: "zachary-construction-group",
    description: "A comprehensive brand identity and digital presence for a premier general contractor, built from the ground up—website, internal systems, marketing collateral, and brand development that positions them to compete for major contracts from day one.",
    category: "Construction Services",
    workType: "Construction",
    image: "/projects/zachary-construction/zachary-construction-01.png",
    featured: true,
    turnaround: "2 months",
    clientSource: "Direct outreach",
    designTeam: [
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
    ],
    techStack: [
      { label: "Web Design", isLink: true, href: "/services/web-design" },
      { label: "Web Development", isLink: true, href: "/services/web-development" },
      { label: "Brand Identity", isLink: true, href: "/services" },
      { label: "Figma", icon: "figma" },
      { label: "Webflow", icon: "webflow" },
      { label: "Midjourney", icon: "midjourney" },
      { label: "Adobe Suite", icon: "adobe" },
    ],
  },
  {
    id: "4",
    title: "Pet Love Cremation & Memorial",
    slug: "pet-love-cremation",
    description: "A compassionate digital platform for pet memorial services, designed to help grieving families honor their beloved pets with dignity, care, and a gentle user experience that guides them through the hardest moments.",
    category: "Pet Services",
    workType: "Pet Services",
    image: "/projects/pet-love/pet-love-01.png",
    featured: true,
    turnaround: "5 weeks",
    clientSource: "Referral",
    designTeam: [
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
    ],
    techStack: [
      { label: "Web Design", isLink: true, href: "/services/web-design" },
      { label: "Web Development", isLink: true, href: "/services/web-development" },
      { label: "Figma", icon: "figma" },
      { label: "Adobe Suite", icon: "adobe" },
      { label: "Webflow", icon: "webflow" },
    ],
  },
  {
    id: "5",
    title: "Beka Wealth Advisors",
    slug: "beka-wealth-advisors",
    description: "A professional financial advisory platform designed to convey trust, credibility, and sophistication—making complex wealth management feel transparent and accessible to high-net-worth individuals.",
    category: "Financial Services",
    workType: "Finance",
    image: "/projects/beka/beka-01.png",
    featured: true,
    turnaround: "6 weeks",
    clientSource: "Referral",
    designTeam: [
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
    ],
    techStack: [
      { label: "Web Design", isLink: true, href: "/services/web-design" },
      { label: "Figma", icon: "figma" },
      { label: "Adobe Suite", icon: "adobe" },
      { label: "Webflow", icon: "webflow" },
    ],
  },
  {
    id: "6",
    title: "Pacific Life",
    slug: "pacific-life",
    description: "A comprehensive presentation design system for Pacific Life's insurance and financial services division, transforming complex insurance concepts into digestible, sophisticated visual narratives that close deals.",
    category: "Insurance & Financial Services",
    workType: "Finance",
    image: "/projects/pacific-life/pacific-life-01.png",
    featured: false,
    turnaround: "3 weeks",
    clientSource: "Enterprise engagement",
    designTeam: [
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
    ],
    techStack: [
      { label: "Presentation Design", isLink: true, href: "/services" },
      { label: "Adobe Suite", icon: "adobe" },
      { label: "Microsoft Office", icon: "microsoft" },
    ],
  },
  {
    id: "7",
    title: "EY Entrepreneur Of The Year",
    slug: "weoy",
    description: "A comprehensive branding and advertising campaign for EY's prestigious global awards program celebrating entrepreneurial excellence—spanning billboards, event signage, digital assets, and promotional materials.",
    category: "Event Branding & Advertising",
    workType: "Branding",
    image: "/projects/weoy/weoy-01.png",
    featured: false,
    turnaround: "2 months",
    clientSource: "Enterprise engagement",
    designTeam: [
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
    ],
    techStack: [
      { label: "Event Design", isLink: true, href: "/services" },
      { label: "Brand Identity", isLink: true, href: "/services" },
      { label: "Adobe Suite", icon: "adobe" },
      { label: "Microsoft Office", icon: "microsoft" },
    ],
  },
  {
    id: "8",
    title: "The Zachary Group",
    slug: "zachary-group",
    description: "Expert insurance advisors providing comprehensive risk management and business protection solutions across North America. We designed a modular digital platform that speaks to diverse industries—real estate, education, construction—while maintaining brand cohesion.",
    category: "Insurance Services",
    workType: "Insurance",
    image: "/projects/zachary-group/zachary-group-01.png",
    featured: false,
    turnaround: "6 weeks",
    clientSource: "Direct outreach",
    designTeam: [
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
    ],
    techStack: [
      { label: "Web Design", isLink: true, href: "/services/web-design" },
      { label: "Web Development", isLink: true, href: "/services/web-development" },
      { label: "Brand Identity", isLink: true, href: "/services" },
      { label: "Adobe Suite", icon: "adobe" },
      { label: "Webflow", icon: "webflow" },
    ],
  },
  {
    id: "9",
    title: "The Last Paradox",
    slug: "the-last-paradox",
    description: "A digital experience for a Warner Bros. Music Group artist's album release—immersive, cinematic, and genre-bending. Interactive elements and moody visuals that feel more like an art installation than a traditional music website.",
    category: "Music & Entertainment",
    workType: "Entertainment",
    image: "/projects/the-last-paradox/the-love-paradox.png",
    featured: false,
    turnaround: "2 months",
    clientSource: "Industry referral",
    designTeam: [
      {
        name: "Amanti",
        slug: "amanti-melkamu",
        image: "/team/amanti-melkamu-color.jpg",
      },
    ],
    techStack: [
      { label: "Brand Identity", isLink: true, href: "/services" },
      { label: "Web Design", isLink: true, href: "/services/web-design" },
      { label: "Web Development", isLink: true, href: "/services/web-development" },
      { label: "Figma", icon: "figma" },
      { label: "Adobe Suite", icon: "adobe" },
      { label: "Webflow", icon: "webflow" },
    ],
  },
];
