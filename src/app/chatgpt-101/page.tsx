"use client";

import { motion } from "framer-motion";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, MapPin, Users, Heart, Shield, Sparkles } from "lucide-react";

export default function ChatGPT101Page() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-32 text-white">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            Hands-On AI Training
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            ChatGPT 101<br />
            <em className="text-2xl sm:text-3xl lg:text-4xl mt-2 block">Practical, human-friendly AI skills for real work.</em>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            We come to your team, community, or classroom to teach a clear, hands-on introduction to ChatGPT and modern AI tools.
          </p>
          <div className="flex justify-center pt-2">
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              Beginner Friendly
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
                <p className="text-sm font-medium text-white">Half or Full Day</p>
                <p className="text-xs text-white/60">Flexible Workshop</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">We Come To You</p>
                <p className="text-xs text-white/60">On-Site or Remote</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Hands-On Labs</p>
                <p className="text-xs text-white/60">Guided Practice</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Beginner Friendly</p>
                <p className="text-xs text-white/60">Clear & Practical</p>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Timeline */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">ChatGPT 101 Curriculum</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto text-base">
              A clear progression from fundamentals to practical workflows your group can repeat.
            </p>
          </div>
          
          {/* Timeline Container */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/40 via-purple-400/40 to-green-400/40 hidden md:block" />
              
              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-16">
                {/* Morning Session */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative"
                >
                  <div className="flex gap-6 md:gap-8">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-400/40 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-blue-400 font-bold text-lg">AM</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1 space-y-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                          Foundations: What ChatGPT Is
                        </h3>
                        <p className="text-white/80 text-base leading-relaxed mb-4">
                          We start with the basics: what AI is, what it isn&apos;t, and how to get useful outputs quickly.
                        </p>
                      </div>
                      
                      <ul className="space-y-3 text-base text-white/80">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Demystifying AI: what it can and cannot do</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Prompting basics: context, constraints, and examples</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Hands-on practice with fast, practical wins</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Mid-Day Session */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative"
                >
                  <div className="flex gap-6 md:gap-8">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-purple-500/20 border-2 border-purple-400/40 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-purple-400 font-bold text-sm">Mid</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1 space-y-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                          Practical Use Cases
                        </h3>
                        <p className="text-white/80 text-base leading-relaxed mb-4">
                          Apply ChatGPT to real work: writing, research, planning, and summarizing.
                        </p>
                      </div>
                      
                      <ul className="space-y-3 text-base text-white/80">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Drafting emails, memos, and updates</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Summarizing docs and turning notes into plans</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Brainstorming, outlining, and decision support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Afternoon Session */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative"
                >
                  <div className="flex gap-6 md:gap-8">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-400/40 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-green-400 font-bold text-lg">PM</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1 space-y-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                          Responsible Use & Next Steps
                        </h3>
                        <p className="text-white/80 text-base leading-relaxed mb-4">
                          How to use AI safely, verify outputs, and build a repeatable workflow.
                        </p>
                      </div>
                      
                      <ul className="space-y-3 text-base text-white/80">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Verification habits and fact-checking</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Privacy boundaries and what not to share</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">Creating a simple team playbook</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">Why Bring ChatGPT 101 to Your Team?</h2>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4 md:min-h-[150px]">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Adoption & Confidence
                </h3>
                <p className="text-white/80 leading-relaxed flex-1">
                  Hands-on practice builds confidence and reduces AI anxiety, so people actually use the tools.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 md:min-h-[150px]">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-400" />
                  Faster Output
                </h3>
                <p className="text-white/80 leading-relaxed flex-1">
                  Reusable prompts and workflows speed up writing, research, and planning.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4 md:min-h-[150px]">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Team Alignment
                </h3>
                <p className="text-white/80 leading-relaxed flex-1">
                  A shared vocabulary and examples keep outputs consistent across roles.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 md:min-h-[150px]">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  Responsible Use
                </h3>
                <p className="text-white/80 leading-relaxed flex-1">
                  We teach safe usage, privacy rules, and verification habits.
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
              Interested in bringing ChatGPT 101 to your team? We&apos;ll tailor the session to your goals and skill levels.
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
                  href="mailto:hello@averyseriouscompany.com?subject=ChatGPT%20101%20Inquiry"
                  className="flex items-center gap-2"
                >
                  Contact Us to Book
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-white/70 text-sm">
                We handle curriculum and materials. You provide the space or the video link.
              </p>
            </div>
          </div>
        </div>

      </div>
    </ContentPageLayout>
  );
}
