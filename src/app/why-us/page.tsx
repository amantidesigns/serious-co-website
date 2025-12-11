"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Check, X, TrendingUp, Clock, Target, Zap, Shield, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarGroup, AvatarGroupTooltip } from "@/components/ui/avatar-group";
import { teamMembers } from "@/content/team";
import Link from "next/link";

export default function WhyUsPage() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  // StoryBrand: THE CUSTOMER'S PROBLEM
  const problemStats = [
    { 
      label: "Agencies overcomplicate simple projects", 
      value: 87, 
      icon: Target,
      description: "Adding unnecessary steps and stakeholders"
    },
    { 
      label: "Deliverables don&apos;t solve the actual problem", 
      value: 72,
      icon: X,
      description: "Looking good in decks but failing in reality"
    },
    { 
      label: "Timeline stretches, budget balloons", 
      value: 91,
      icon: Clock,
      description: "Process for the sake of process"
    },
  ];

  // StoryBrand: THE GUIDE (YOU) HAS EMPATHY & AUTHORITY
  const authorityMarkers = [
    {
      metric: "48hr",
      label: "Average turnaround for clear briefs",
      detail: "Not because we rush. Because we don&apos;t waste time."
    },
    {
      metric: "Zero",
      label: "Proprietary frameworks or BS processes",
      detail: "Just clear thinking, applied consistently."
    },
    {
      metric: "100%",
      label: "Projects start with understanding, not templates",
      detail: "Your idea gets the seriousness it deserves."
    },
  ];

  // StoryBrand: THE PLAN (3 SIMPLE STEPS)
  const plan = [
    {
      step: "01",
      title: "You tell us the problem",
      description: "Not what you want us to build. What you&apos;re trying to solve. We ask the right questions until we understand what actually matters.",
      outcome: "Clarity on what success looks like"
    },
    {
      step: "02",
      title: "We figure out what matters",
      description: "No frameworks. No templates. Just clear thinking about your specific situation. Then we tell you exactly what we&apos;ll build and why.",
      outcome: "A plan that actually makes sense"
    },
    {
      step: "03",
      title: "We build it right",
      description: "Fast execution. High craft. Direct communication. You work with the people actually creating. No account managers. No layers.",
      outcome: "Something that works"
    },
  ];

  // StoryBrand: THE STAKES (What you avoid)
  const stakes = [
    {
      bad: "Months of meetings",
      good: "Clear answers in days",
      impact: "Time saved"
    },
    {
      bad: "Layers of approval",
      good: "Direct access to creators",
      impact: "Better decisions"
    },
    {
      bad: "Generic templates",
      good: "Custom solutions",
      impact: "Actual differentiation"
    },
    {
      bad: "Process for process sake",
      good: "Work that matters",
      impact: "Real results"
    },
  ];

  // StoryBrand: THE SUCCESS (What winning looks like)
  const successOutcomes = [
    { icon: Zap, title: "Fast", desc: "Days, not months" },
    { icon: Target, title: "Precise", desc: "Solves your actual problem" },
    { icon: Shield, title: "Quality", desc: "Built right the first time" },
    { icon: TrendingUp, title: "Effective", desc: "Works in the real world" },
  ];

  return (
    <ContentPageLayout>
      <div className="relative z-20 text-white">
        
        {/* HERO: THE PROBLEM (StoryBrand Element 1) */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            className="max-w-5xl w-full space-y-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Headline */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-4">
                  The agency problem
                </h1>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                You have a problem.
                <br />
                <span className="text-white/40">Most agencies make it worse.</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/60 max-w-3xl font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                They add process when you need speed. Templates when you need custom. Layers when you need direct answers.
              </motion.p>
            </div>

            {/* Interactive Problem Stats */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {problemStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={idx}
                    className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                    onMouseEnter={() => setHoveredStat(idx)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                              <Icon className="w-5 h-5 text-white/60" />
                            </div>
                            <div className="flex-1">
                              <p className="text-lg font-light text-white mb-2">{stat.label}</p>
                              <p className="text-sm text-white/40">{stat.description}</p>
                            </div>
                          </div>
                          <motion.span 
                            className="text-3xl font-light text-white/80"
                            animate={{ scale: hoveredStat === idx ? 1.1 : 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {stat.value}%
                          </motion.span>
                        </div>
                        <Progress 
                          value={stat.value} 
                          className="h-2 bg-white/10 [&>div]:bg-white/60"
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronRight className="w-6 h-6 text-white/30 rotate-90" />
          </motion.div>
        </section>

        {/* THE GUIDE: EMPATHY + AUTHORITY (StoryBrand Element 2) */}
        <section className="py-32 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              {/* Empathy Statement + Team Card */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left: Empathy Statement */}
                <div className="lg:col-span-2">
                  <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-6">
                    We understand
                  </h1>
                  <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                    We&apos;ve seen this before.
                    <br />
                    <span className="text-white/40">It doesn&apos;t have to be this way.</span>
                  </h2>
                  <p className="text-xl text-white/70 leading-relaxed">
                    You don&apos;t need another agency with a proprietary process. You need someone who understands what you&apos;re trying to solve, then solves it.
                  </p>
                </div>

                {/* Right: Team Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-1"
                >
                  <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group scale-90 max-w-sm mx-auto lg:mx-0">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-white/60 border-white/20 text-xs px-2 py-1">
                          Meet the team
                        </Badge>
                        <ArrowRight className="w-3 h-3 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-light text-white">
                        Real people. Real craft.
                      </CardTitle>
                      <CardDescription className="text-white/60 text-sm">
                        No account managers. No layers. Just the people who do the work.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-0">
                      {/* Avatar Group with individual links */}
                      <div className="flex items-center justify-start">
                        <AvatarGroup variant="motion" className="h-12">
                          {teamMembers.map((member) => (
                            <Link 
                              key={member.id} 
                              href={`/team/${member.slug}`}
                              className="group/avatar"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Avatar className="size-12 border-2 border-white/20 hover:border-white/60 transition-all duration-200 cursor-pointer">
                                <AvatarImage src={member.image.color} alt={member.name} />
                                <AvatarFallback className="bg-white/10 text-white text-sm">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                                <AvatarGroupTooltip>
                                  <div className="text-center">
                                    <p className="font-medium text-sm">{member.name}</p>
                                    <p className="text-xs text-white/60">{member.title}</p>
                                  </div>
                                </AvatarGroupTooltip>
                              </Avatar>
                            </Link>
                          ))}
                        </AvatarGroup>
                      </div>
                      
                      {/* View all team link */}
                      <div className="pt-3 border-t border-white/10">
                        <p className="text-xs text-white/40">
                          Click any avatar to learn more about each team member
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Authority Markers - Interactive Tabs */}
              <Tabs defaultValue="speed" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 p-1">
                  <TabsTrigger value="speed" className="data-[state=active]:bg-white/10">
                    Speed
                  </TabsTrigger>
                  <TabsTrigger value="clarity" className="data-[state=active]:bg-white/10">
                    Clarity
                  </TabsTrigger>
                  <TabsTrigger value="craft" className="data-[state=active]:bg-white/10">
                    Craft
                  </TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                  <TabsContent value="speed" className="mt-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      {authorityMarkers.map((marker, idx) => (
                        <Card key={idx} className="bg-white/5 border-white/10">
                          <CardHeader>
                            <CardTitle className="text-5xl font-light text-white">
                              {marker.metric}
                            </CardTitle>
                            <CardDescription className="text-white/60 text-base">
                              {marker.label}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-white/40 leading-relaxed">
                              {marker.detail}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="clarity" className="mt-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                          <CardTitle className="text-3xl font-light">
                            No jargon. No frameworks. No BS.
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-white/70 leading-relaxed">
                            Most agencies hide behind process because they don&apos;t know how to think clearly about your problem. We do the opposite: understand what matters, then execute it properly.
                          </p>
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="space-y-2">
                              <p className="text-xs uppercase tracking-wider text-white/40">You won&apos;t hear</p>
                              <div className="space-y-1">
                                {["Synergy", "Leverage", "Optimize", "Disrupt"].map((word, i) => (
                                  <p key={i} className="text-sm text-white/30 line-through">{word}</p>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <p className="text-xs uppercase tracking-wider text-white/60">You will hear</p>
                              <div className="space-y-1">
                                {["What matters", "Why this works", "Here&apos;s the plan", "Let&apos;s build it"].map((phrase, i) => (
                                  <p key={i} className="text-sm text-white/80 flex items-center gap-2">
                                    <Check className="w-3 h-3" /> {phrase}
                                  </p>
            ))}
          </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="craft" className="mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                          <CardTitle className="text-3xl font-light">
                            Fast doesn&apos;t mean sloppy.
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-white/70 leading-relaxed mb-6">
                            We&apos;re fast because we don&apos;t waste time on things that don&apos;t matter. That leaves more time for things that do: typography, details, the small things that make work feel right.
                          </p>
                          <div className="space-y-3">
                            {[
                              { skill: "Design precision", level: 98 },
                              { skill: "Code quality", level: 95 },
                              { skill: "Attention to detail", level: 100 },
                            ].map((item, idx) => (
                              <div key={idx} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-white/60">{item.skill}</span>
                                  <span className="text-white/40">{item.level}%</span>
                                </div>
                                <Progress value={item.level} className="h-1.5 bg-white/10 [&>div]:bg-white/60" />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                </AnimatePresence>
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* THE PLAN (StoryBrand Element 3) */}
        <section className="py-32 px-6 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div>
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-6">
                  How it works
                </h1>
                <h2 className="text-4xl md:text-6xl font-light leading-tight">
                  Three steps.
                  <br />
                  <span className="text-white/40">That&apos;s it.</span>
                </h2>
              </div>

              {/* Interactive Accordion Plan */}
              <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
                {plan.map((item, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`item-${idx}`}
                    className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm overflow-hidden data-[state=open]:bg-white/10 transition-all"
                  >
                    <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                      <div className="flex items-center gap-6 text-left w-full">
                        <div className="text-6xl font-light text-white/20 group-data-[state=open]:text-white/40 transition-colors">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-light text-white group-data-[state=open]:text-white transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 pl-[88px]"
                      >
                        <p className="text-lg text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                          <Check className="w-5 h-5 text-white/60 flex-shrink-0" />
                          <p className="text-white/80">
                            <span className="font-medium">Outcome:</span> {item.outcome}
                      </p>
                    </div>
                  </motion.div>
                    </AccordionContent>
                  </AccordionItem>
              ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* THE STAKES: Success vs Failure (StoryBrand Element 4) */}
        <section className="py-32 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div>
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-6">
                  What&apos;s at stake
                </h1>
                <h2 className="text-4xl md:text-6xl font-light leading-tight">
                  The cost of choosing wrong.
                </h2>
          </div>

              <div className="grid grid-cols-1 gap-6">
                {stakes.map((stake, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="bg-white/5 border-white/10 overflow-hidden group hover:bg-white/10 transition-all">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                          {/* Bad Option */}
                          <div className="p-8 bg-red-500/5 group-hover:bg-red-500/10 transition-colors">
                            <div className="flex items-start gap-4">
                              <div className="p-2 rounded-lg bg-red-500/10">
                                <X className="w-5 h-5 text-red-400" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm uppercase tracking-wider text-red-400/60 mb-2">
                                  Most agencies
                                </p>
                                <p className="text-xl font-light text-white/80">
                                  {stake.bad}
            </p>
          </div>
        </div>
                          </div>

                          {/* Good Option */}
                          <div className="p-8 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors">
                            <div className="flex items-start gap-4">
                              <div className="p-2 rounded-lg bg-emerald-500/10">
                                <Check className="w-5 h-5 text-emerald-400" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm uppercase tracking-wider text-emerald-400/60 mb-2">
                                  A Very Serious Company
                                </p>
                                <p className="text-xl font-light text-white/80">
                                  {stake.good}
                                </p>
                                <p className="text-sm text-white/40 mt-3">
                                  Impact: {stake.impact}
              </p>
            </div>
                            </div>
                          </div>
                </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE SUCCESS: What winning looks like (StoryBrand Element 5) */}
        <section className="py-32 px-6 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-6">
                  What you get
                </h1>
                <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                  Work that actually works.
                </h2>
                <p className="text-xl text-white/60">
                  Not decks. Not deliverables. Not process documents. Real work that solves your real problem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {successOutcomes.map((outcome, idx) => {
                  const Icon = outcome.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-all">
                        <CardContent className="p-8 space-y-4">
                          <div className="p-3 rounded-xl bg-white/5 w-fit">
                            <Icon className="w-8 h-8 text-white/60" />
            </div>
                          <h3 className="text-2xl font-light text-white">
                            {outcome.title}
                          </h3>
                          <p className="text-white/60">
                            {outcome.desc}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
                </div>
        </section>

        {/* CALL TO ACTION (StoryBrand Element 6) */}
        <section className="py-32 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-light leading-tight">
                  Ready to work on something
                  <br />
                  <em className="text-white/60">serious?</em>
                </h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  Tell us what you&apos;re trying to solve. We&apos;ll tell you if we can help.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a 
                  href="https://calendar.app.google/KKjjEffx5VEeuZ9Z7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 rounded-full bg-white text-blue-900 font-medium text-lg tracking-tight transition-all hover:bg-white/90 active:scale-[0.98] shadow-2xl shadow-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Call
                </motion.a>
                <motion.a 
                  href="mailto:hello@averyseriouscompany.com"
                  className="px-10 py-5 rounded-full border-2 border-white/20 text-white font-medium text-lg tracking-tight transition-all hover:bg-white/10 hover:border-white/40 active:scale-[0.98]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Us
                </motion.a>
            </div>

              <p className="text-sm text-white/40">
                No long forms. No meetings about meetings. Just a conversation.
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </ContentPageLayout>
  );
}
