import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jonathan Yombo",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Relic made building MCP servers incredibly fast and easy. The complete API development platform is a game changer!",
  },
  {
    name: "Yves Kalume",
    role: "GDE - Android",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "I launched my API project in days with Relic. The tools and workflow are seamless for MCP server development.",
  },
  {
    name: "Yucel Faruksahan",
    role: "API Architect",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "Relic's platform is intuitive and powerful. Building and managing MCP servers has never been easier.",
  },
  {
    name: "Anonymous author",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "Relic helped my team deliver robust APIs quickly. The all-in-one platform is perfect for modern development.",
  },
  {
    name: "Shekinah Tshiokufila",
    role: "Senior Software Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Relic redefines API development. The MCP server tools save us hours every week.",
  },
  {
    name: "Oketa Fred",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "I love how Relic streamlines the entire API lifecycle. It's my go-to for MCP server projects.",
  },
  {
    name: "Zeki",
    role: "Founder of ChatExtend",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Relic's platform is both simple and versatile. Our team builds and deploys MCP servers with confidence.",
  },
  {
    name: "Joseph Kitheka",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "Relic accelerated our API development. The platform's flexibility and support are outstanding.",
  },
  {
    name: "Khatab Wedaa",
    role: "API Designer",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "Relic is clean, responsive, and makes starting MCP server projects fast and efficient.",
  },
  {
    name: "Rodrigo Aguilar",
    role: "API Product Manager",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "Relic's platform is well-structured and easy to use. We deliver APIs faster than ever before.",
  },
  {
    name: "Eric Ampire",
    role: "Mobile Engineer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Relic is the perfect solution for building and scaling MCP servers. Highly recommended for any API team.",
  },
  {
    name: "Roland Tubonge",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "Relic makes MCP server development accessible to everyone. The platform empowers our whole team.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function TestimonialSection() {
  return (
    <section className="min-h-screen" style={{ backgroundColor: '#0B3D91' }}>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8" style={{ color: '#FFFFFF' }}>
              A Very Serious Company
            </h1>
            
            <div className="space-y-6 text-xl leading-relaxed mb-12" style={{ color: '#FFFFFF' }}>
              <p>
                A Very Serious Company is a creative agency.
              </p>
              <p>
                We build websites, create advertisements, and solve specific business problems.
              </p>
              <p className="font-medium">
                We take simple ideas seriously.
              </p>
            </div>

            <div className="mt-16">
              <a 
                href="mailto:hello@averyseriouscompany.com"
                className="inline-block text-xl font-medium px-8 py-4 border rounded-lg transition-colors duration-200 text-white border-white/20 hover:bg-[#F2F2F2] hover:text-[#0B3D91]"
              >
                hello@averyseriouscompany.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}