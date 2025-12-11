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
];
