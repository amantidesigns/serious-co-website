import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, MapPin, Users, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Essentials Workshop - A Very Serious Company",
  description: "Join our comprehensive 3-day AI training workshop designed for beginners aged 45-65. Learn the fundamentals of AI, master prompting techniques, and build your first AI project. $200 per person at St. Louis Park Public Library.",
  openGraph: {
    title: "AI Essentials Workshop - A Very Serious Company",
    description: "Join our comprehensive 3-day AI training workshop designed for beginners aged 45-65. Learn the fundamentals of AI, master prompting techniques, and build your first AI project.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "AI Essentials Workshop - A Very Serious Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Essentials Workshop - A Very Serious Company",
    description: "Join our comprehensive 3-day AI training workshop designed for beginners aged 45-65. Learn the fundamentals of AI, master prompting techniques, and build your first AI project.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function AITrainingPage() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-32 text-white">
        
        {/* Hero Section with Eyebrow + Descriptive Subheading */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            AI Essentials Workshop
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            Learn AI in three days. No technical background <em>required</em>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            A hands-on workshop for professionals who want to stay relevant in an AI-driven world. We'll teach you what matters and skip the rest.
          </p>
          <div className="flex justify-center pt-2">
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              Designed for Beginners
            </Badge>
          </div>
        </div>

        {/* Key Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-white/70" />
            <div>
              <p className="text-sm font-medium text-white">3 Days</p>
              <p className="text-xs text-white/60">Intensive Learning</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <DollarSign className="w-6 h-6 text-white/70" />
            <div>
              <p className="text-sm font-medium text-white">$200</p>
              <p className="text-xs text-white/60">Per Person</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-6 text-white/70" />
            <div>
              <p className="text-sm font-medium text-white">St. Louis Park</p>
              <p className="text-xs text-white/60">Public Library</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-white/70" />
            <div>
              <p className="text-sm font-medium text-white">Small Groups</p>
              <p className="text-xs text-white/60">Personal Attention</p>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">What You'll Learn</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <span>Day 1: AI Fundamentals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-white/80 text-sm">
                  Understand what AI really is and how it's changing the world around you.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>What is AI? (Simple explanations, no jargon)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>How AI impacts your daily life and work</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Hands-on exploration of ChatGPT and other tools</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Setting up accounts and getting comfortable</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <span>Day 2: Master Prompting</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-white/80 text-sm">
                  Learn to communicate effectively with AI tools to get exactly what you need.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Writing effective prompts (the secret sauce)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Advanced prompting techniques</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Generating content for work and personal use</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Automating routine tasks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <span>Day 3: Build Your Project</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-white/80 text-sm">
                  Apply everything you've learned by creating a real AI-powered project.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Identify problems AI can solve for you</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Plan and design your AI solution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Build your first AI project with guidance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Present your project and get feedback</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why This Workshop */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">Why This Workshop?</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white">Designed for Your Generation</h3>
                <p className="text-white/80 leading-relaxed">
                  We understand that technology can feel overwhelming when you're trying to catch up. 
                  This workshop is specifically designed for professionals aged 45-65 who want to stay 
                  relevant without feeling lost in technical jargon.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white">Hands-On Learning</h3>
                <p className="text-white/80 leading-relaxed">
                  No boring lectures or theoretical concepts you'll never use. Every session includes 
                  practical exercises where you'll actually use AI tools to solve real problems.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white">Small Group Setting</h3>
                <p className="text-white/80 leading-relaxed">
                  Limited to small groups to ensure you get personalized attention. We'll move at 
                  a pace that works for everyone, and no question is too basic.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white">Stay Competitive</h3>
                <p className="text-white/80 leading-relaxed">
                  AI is already changing how we work. Don't get left behind. Learn the skills that 
                  will keep you valuable and relevant in your career.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Walk Away With */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">What You'll Walk Away With</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Confidence with AI Tools</h3>
              <p className="text-white/70 text-sm">
                You'll feel comfortable using ChatGPT, Claude, and other AI assistants for both personal and professional tasks.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Advanced Prompting Skills</h3>
              <p className="text-white/70 text-sm">
                Master the art of writing prompts that get you exactly the results you're looking for.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-medium text-white">A Working AI Project</h3>
              <p className="text-white/70 text-sm">
                Leave with a real AI project you can use immediately to improve your work or personal life.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Practical AI Strategies</h3>
              <p className="text-white/70 text-sm">
                Learn specific ways to integrate AI into your daily workflow and increase your productivity.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Ethical AI Understanding</h3>
              <p className="text-white/70 text-sm">
                Know how to use AI responsibly and understand its limitations and potential risks.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Ongoing Support</h3>
              <p className="text-white/70 text-sm">
                Access to resources and continued guidance as you implement AI in your work and life.
              </p>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="text-center space-y-8 py-12 border-t border-white/10">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light text-white">Ready to Master AI?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Don't let the future pass you by. Join us for three days that will change how you think about and use technology.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-medium"
              >
                Register Now - $200
              </Button>
              <p className="text-sm text-white/60">
                Limited spots available • Includes all materials
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-white/70 text-sm">
                Questions? Contact us at{" "}
                <a href="mailto:hello@averyeriouscompany.com" className="text-white hover:text-white/80 underline">
                  hello@averyeriouscompany.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Location Details</h3>
              <div className="space-y-3 text-white/80">
                <p className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-white/60" />
                  <span>St. Louis Park Public Library</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-white/60" />
                  <span>Three consecutive days</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-white/60" />
                  <span>Small group setting for personalized attention</span>
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">What's Included</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>All workshop materials and resources</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Hands-on access to AI tools during class</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Take-home project materials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>30 days of follow-up email support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </ContentPageLayout>
  );
}
