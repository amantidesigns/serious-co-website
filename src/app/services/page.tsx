import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";

export const metadata: Metadata = {
  title: "Our Services - A Very Serious Company",
  description: "We provide strategic creative services that transform simple ideas into exceptional digital experiences. From brand development to web design, we take your vision seriously.",
  openGraph: {
    title: "Our Services - A Very Serious Company",
    description: "We provide strategic creative services that transform simple ideas into exceptional digital experiences. From brand development to web design, we take your vision seriously.",
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
    description: "We provide strategic creative services that transform simple ideas into exceptional digital experiences. From brand development to web design, we take your vision seriously.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function OurServicesPage() {
  return (
    <ContentPageLayout title="Our Services">
      <div className="relative z-20 max-w-4xl space-y-12 sm:space-y-16 text-white">
        
        {/* Services Grid - Three Groups */}
        <div className="space-y-16">
          
          {/* Group 1: Brand & Strategy */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-light text-white mb-3">Brand & Strategy</h2>
              <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">Creative</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Strategic creative solutions that communicate your message clearly and effectively.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">Branding Services</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Complete brand identity development from positioning to visual systems.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">AI Consulting</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Strategic guidance on integrating AI into your creative and business processes.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">Presentation Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Compelling presentations that engage audiences and communicate ideas powerfully.
                </p>
              </div>
            </div>
          </div>

          {/* Group 2: Digital & Web */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-light text-white mb-3">Digital & Web</h2>
              <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">Web Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Custom websites that serve your audience's needs with clarity and performance.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">Social Media Creative</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Engaging social media content that builds community and drives results.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">Email Creation</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Email campaigns that connect with your audience and drive meaningful action.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">AI-Powered Creative</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Leveraging AI tools to enhance creativity and streamline production processes.
                </p>
              </div>
            </div>
          </div>

          {/* Group 3: Design & Production */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-light text-white mb-3">Design & Production</h2>
              <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">Illustration Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Custom illustrations that bring your brand story to life with unique visual style.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">Motion Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Dynamic motion graphics and animations that capture attention and engage viewers.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">Print Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Traditional print materials with modern design sensibilities and attention to detail.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-white to-white/50"></div>
                  <h3 className="text-lg font-medium text-white">Ebooks & Report Design</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Professional document design that makes complex information accessible and engaging.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center space-y-4 pt-8 border-t border-white/10">
          <p className="text-lg sm:text-xl font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
            We don't believe in one-size-fits-all solutions. Every project is unique, and we approach each one with fresh eyes and clear thinking.
          </p>
          <p className="text-base text-white/70">
            Ready to take your idea seriously? Let's talk.
          </p>
        </div>

      </div>
    </ContentPageLayout>
  );
}
