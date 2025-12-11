export interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  image: {
    bw: string; // Black and white image
    color: string; // Color image
  };
  slug: string;
  bio: string;
  expertise: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Amanti Melkamu",
    title: "Designer",
    description: "Crafts thoughtful, elegant visual experiences",
    slug: "amanti-melkamu",
    image: {
      bw: "/team/amanti-melkamu-bw.jpg",
      color: "/team/amanti-melkamu-color.jpg"
    },
    bio: "Amanti brings clarity to visual communication. With a background in design systems and brand identity, he believes the best design disappears—allowing the idea to shine through.",
    expertise: ["Visual Design", "Brand Identity", "Design Systems", "UI/UX"]
  },
  {
    id: "2",
    name: "Liban Kano",
    title: "Copywriter",
    description: "Distills complex ideas into clear, compelling words",
    slug: "liban-kano",
    image: {
      bw: "/team/liban-kano-bw.jpg",
      color: "/team/liban-kano-color.jpg"
    },
    bio: "Liban writes the way we think: directly, clearly, without fluff. He knows that great copy doesn't announce itself—it just says exactly what needs to be said.",
    expertise: ["Brand Voice", "Web Copy", "Storytelling", "Headlines"]
  },
  {
    id: "3",
    name: "Robera Miti",
    title: "Developer",
    description: "Builds reliable, thoughtful digital experiences",
    slug: "robera-miti",
    image: {
      bw: "/team/robera-miti-bw.jpg",
      color: "/team/robera-miti-color.jpg"
    },
    bio: "Robera writes code that works and scales. He believes in building things properly—no shortcuts, no technical debt. Every line serves a purpose.",
    expertise: ["Full Stack Development", "React", "Performance", "Infrastructure"]
  },
  {
    id: "4",
    name: "Serious AI Agent",
    title: "Creative Strategist",
    description: "Synthesizes ideas and identifies the path forward",
    slug: "serious-ai-agent",
    image: {
      bw: "/team/serious-ai-agent-bw.jpg",
      color: "/team/serious-ai-agent-color.jpg"
    },
    bio: "Our AI agent brings tireless clarity to every project. It synthesizes complex information, identifies patterns, and ensures our work stays grounded in reality. Never sleeps, always serious.",
    expertise: ["Strategic Thinking", "Analysis", "Ideation", "Execution"]
  }
];
