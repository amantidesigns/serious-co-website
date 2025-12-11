import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, MapPin, Users, Heart, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "ChatGPT for Seniors - A Very Serious Company",
  description: "A specialized 1-day workshop designed to teach seniors how to use ChatGPT for connection, entertainment, and daily assistance. We bring the workshop to your facility.",
  openGraph: {
    title: "ChatGPT for Seniors - A Very Serious Company",
    description: "A specialized 1-day workshop designed to teach seniors how to use ChatGPT for connection, entertainment, and daily assistance.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "ChatGPT for Seniors - A Very Serious Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT for Seniors - A Very Serious Company",
    description: "A specialized 1-day workshop designed to teach seniors how to use ChatGPT for connection, entertainment, and daily assistance.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function ChatGPTForSeniorsPage() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-32 text-white">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            Empowering The Golden Generation
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            ChatGPT for Seniors<br />
            <em className="text-2xl sm:text-3xl lg:text-4xl mt-2 block">Connecting you to the future, simply and safely.</em>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            We visit care homes and senior communities to teach a fun, interactive, and easy-to-understand workshop on using Artificial Intelligence to stay connected and entertained.
          </p>
          <div className="flex justify-center pt-2">
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              No Tech Experience Required
            </Badge>
          </div>
        </div>

        {/* Key Details */}
        <div className="flex justify-center px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">1 Day</p>
                <p className="text-xs text-white/60">Complete Workshop</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">We Come To You</p>
                <p className="text-xs text-white/60">On-Site Training</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Group Learning</p>
                <p className="text-xs text-white/60">Fun & Social</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Senior Focused</p>
                <p className="text-xs text-white/60">Paced & Patient</p>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">One Day Curriculum</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              A gentle, paced day of learning designed to be enjoyable and immediately useful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">AM</span>
                  </div>
                  <span>Morning: Meeting Your New Helper</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-white/80 text-sm">
                  We start with the basics. What is this "AI" everyone talks about, and how can it be a friendly helper?
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Demystifying AI: It's just a conversation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Voice Mode: Talking to ChatGPT like a friend</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Asking questions and getting simple answers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">Mid</span>
                  </div>
                  <span>Mid-Day: Connecting & Remembering</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-white/80 text-sm">
                  Practical ways to use ChatGPT to stay in touch with family and keep track of daily life.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Drafting messages and emails to grandkids</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Finding old recipes and reminiscence</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Setting reminders for medications and events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold">PM</span>
                  </div>
                  <span>Afternoon: Fun & Safety</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-white/80 text-sm">
                  Learning to play games, explore hobbies, and most importantly, stay safe online.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Storytelling, trivia, and learning new hobbies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Identifying scams and "fake" messages</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Safe browsing habits with your AI companion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">Why Bring This to Your Facility?</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4 md:min-h-[150px]">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Cognitive Engagement
                </h3>
                <p className="text-white/80 leading-relaxed flex-1">
                  Learning new skills is excellent for brain health. Interacting with AI stimulates curiosity, creativity, and problem-solving in a low-stress environment.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 md:min-h-[150px]">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-400" />
                  Combating Loneliness
                </h3>
                <p className="text-white/80 leading-relaxed flex-1">
                  AI can be a 24/7 conversational partner, ready to discuss any topic, read stories, or play games, helping to alleviate feelings of isolation.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4 md:min-h-[150px]">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Family Connection
                </h3>
                <p className="text-white/80 leading-relaxed flex-1">
                  We teach seniors how to use these tools to better communicate with younger generations, bridging the digital divide and sparking new conversations.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 md:min-h-[150px]">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  Digital Safety
                </h3>
                <p className="text-white/80 leading-relaxed flex-1">
                  A crucial part of our curriculum is safety. We empower seniors to recognize digital threats and use technology with confidence and caution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-8 py-12 border-t border-white/10">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-light text-white">Schedule a Workshop</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Interested in bringing "ChatGPT for Seniors" to your facility? Let's discuss how we can tailor this experience for your residents.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-medium"
                asChild
              >
                <a 
                  href="mailto:hello@averyseriouscompany.com?subject=ChatGPT%20for%20Seniors%20Inquiry"
                  className="flex items-center gap-2"
                >
                  Contact Us to Book
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-white/70 text-sm">
                We handle all the equipment and setup. You just provide the space.
              </p>
            </div>
          </div>
        </div>

      </div>
    </ContentPageLayout>
  );
}
