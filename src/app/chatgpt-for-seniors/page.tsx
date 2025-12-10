import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  MapPin,
  Users,
  Heart,
  Shield,
  Smartphone,
  HandHeart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ChatGPT for Seniors - A Very Serious Company",
  description:
    "A gentle, one-day on-site workshop that helps seniors learn to use ChatGPT for connection, creativity, and everyday tasks.",
  openGraph: {
    title: "ChatGPT for Seniors - A Very Serious Company",
    description:
      "A gentle, one-day on-site workshop that helps seniors learn to use ChatGPT for connection, creativity, and everyday tasks.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "ChatGPT for Seniors by A Very Serious Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT for Seniors - A Very Serious Company",
    description:
      "A gentle, one-day on-site workshop that helps seniors learn to use ChatGPT for connection, creativity, and everyday tasks.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

const schedule = [
  {
    title: "Arrive & Get Comfortable",
    time: "30 minutes",
    description: "Warm welcome, light refreshments, and hands-on device setup (we bring tablets if needed).",
  },
  {
    title: "ChatGPT Basics",
    time: "60 minutes",
    description: "What ChatGPT is, how to open it, and how to safely ask for help in plain language.",
  },
  {
    title: "Guided Practice",
    time: "90 minutes",
    description: "Friendly prompts for everyday needs: letters to family, recipes, hobbies, and memory-sharing.",
  },
  {
    title: "Break & Stretch",
    time: "15 minutes",
    description: "A paced pause with movement and time for questions.",
  },
  {
    title: "Staying Safe Online",
    time: "45 minutes",
    description: "Spotting scams, privacy tips, and when to ask a caregiver for backup.",
  },
  {
    title: "Personal Help Desk",
    time: "30 minutes",
    description: "One-on-one support to save favorite prompts and make sure every attendee leaves confident.",
  },
];

type CurriculumColor = "blue" | "emerald" | "amber";

const curriculum: {
  step: string;
  title: string;
  color: CurriculumColor;
  description: string;
  bullets: string[];
}[] = [
  {
    step: "1",
    title: "Gentle Introduction",
    color: "blue",
    description: "Plain-language explanations with large screens, slow pacing, and repeatable steps.",
    bullets: [
      "What ChatGPT can and cannot do",
      "Getting signed in and comfortable on any device",
      "Voice and large-text options for accessibility",
    ],
  },
  {
    step: "2",
    title: "Everyday Wins",
    color: "emerald",
    description: "Practical prompts seniors care about, modeled live with clear take-home examples.",
    bullets: [
      "Letters, gratitude notes, and memory books",
      "Meal ideas, hobby tips, and conversation starters",
      "Reminders, checklists, and friendly encouragement",
    ],
  },
  {
    step: "3",
    title: "Safety & Support",
    color: "amber",
    description: "Safety-first guidance for seniors and caregivers with simple red flags to remember.",
    bullets: [
      "Spotting scams and suspicious requests",
      "Privacy basics: what to share and what to skip",
      "When to get help from family or staff",
    ],
  },
];

const colorStyles: Record<CurriculumColor, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-500/20", text: "text-blue-400" },
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400" },
  amber: { bg: "bg-amber-500/20", text: "text-amber-400" },
};

export default function ChatGPTForSeniorsPage() {
  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-24 text-white">
        {/* Hero */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            New Service
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            <span className="block">ChatGPT for Seniors</span>
            <em className="text-white/80"> Gentle, patient, and done in one day.</em>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            We visit senior living communities and caregiving facilities to teach residents how to use ChatGPT for
            connection, creativity, and everyday help—at their pace, with support staff included.
          </p>
          <div className="flex justify-center pt-2 gap-3 flex-wrap">
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              On-site, one-day format
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 px-4 py-2">
              Caregiver-friendly
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
                <p className="text-xs text-white/60">Paced for seniors</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">We Come to You</p>
                <p className="text-xs text-white/60">At your facility</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">8–20 Attendees</p>
                <p className="text-xs text-white/60">Residents & caregivers</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">All Materials</p>
                <p className="text-xs text-white/60">Handouts & sample prompts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">One-Day Curriculum</h3>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {curriculum.map((item) => (
              <Card key={item.title} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <div
                      className={`w-8 h-8 rounded-full ${colorStyles[item.color].bg} flex items-center justify-center`}
                    >
                      <span className={`${colorStyles[item.color].text} font-bold`}>{item.step}</span>
                    </div>
                    <span>{item.title}</span>
                  </CardTitle>
                  <CardDescription className="text-white/70 text-sm pt-2">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2 text-sm text-white/75">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">The Day at a Glance</h3>
            <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {schedule.map((block) => (
              <Card key={block.title} className="bg-white/5 border-white/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center justify-between">
                    <span>{block.title}</span>
                    <Badge variant="outline" className="text-white border-white/20">
                      {block.time}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-sm leading-relaxed">
                    {block.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support & Accessibility */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Shield className="w-5 h-5 text-emerald-300" />
                <span>Safety & Comfort First</span>
              </CardTitle>
              <CardDescription className="text-white/70 text-sm">
                Built for seniors, caregivers, and activity directors who need a trusted, repeatable program.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-white/75">
              <div className="flex items-start space-x-2">
                <HandHeart className="w-4 h-4 text-rose-300 mt-0.5" />
                <p>Patient instructors who repeat steps, move slowly, and stay after class for extra help.</p>
              </div>
              <div className="flex items-start space-x-2">
                <Smartphone className="w-4 h-4 text-sky-300 mt-0.5" />
                <p>We bring tablets if needed and provide large-type handouts caregivers can reference later.</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                <p>Option to involve family members, chaplains, or life-enrichment staff for continuity.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-300" />
                <span>What You Receive</span>
              </CardTitle>
              <CardDescription className="text-white/70 text-sm">
                Everything you need to repeat the exercises and keep residents engaged.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-white/75">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                <p>Printable prompt cards, caregiver cheat-sheets, and large-print reminder posters.</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                <p>Template scripts for activity directors to run future sessions in under 45 minutes.</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                <p>Follow-up office hours for staff who want deeper prompting help.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-light text-white">Ready to host ChatGPT for Seniors?</h3>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            We coordinate with your activity director to handle setup, pacing, and accessibility. Schedule a call and we will
            share a sample agenda, pricing, and printed materials.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <a href="mailto:hello@averyserious.co?subject=ChatGPT%20for%20Seniors%20Workshop">
                Schedule a call
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
              <a href="/ai-training">See our AI Essentials Workshop</a>
            </Button>
          </div>
        </div>
      </div>
    </ContentPageLayout>
  );
}
