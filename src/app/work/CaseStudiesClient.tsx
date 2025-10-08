"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";

interface CaseStudy {
  title: string;
  description: string;
  href: string;
  category: string;
  workType: string;
  gradient: string;
  accent: string;
  image: string;
  size?: "small" | "medium" | "large";
}

// Bento Grid Card Component
function BentoCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  // Define grid spans based on size
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-2 row-span-1",
    large: "col-span-1 md:col-span-2 row-span-2",
  };

  const gridClass = sizeClasses[study.size || "medium"];

  return (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`${gridClass} group relative`}
    >
      <Link
        href={study.href}
        className="block h-full w-full relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:bg-white/10"
      >
        {/* Image/Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          {study.image.endsWith('.mp4') || study.image.endsWith('.webm') || study.image.endsWith('.mov') ? (
            <video
              src={study.image}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
          <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
            {/* Category Badge */}
            <span 
              className={`inline-block px-3 py-1 rounded-full ${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-white/90 mb-3 backdrop-blur-sm transition-all duration-500`}
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: `1px solid rgba(255,255,255,0.3)`
              }}
            >
              {study.workType}
            </span>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white mb-2 leading-tight">
              {study.title}
            </h3>

            {/* Description - shown on larger cards */}
            {study.size === "large" && (
              <p className="text-sm text-white/70 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {study.description}
              </p>
            )}

            {/* Animated underline */}
            <div className="h-px w-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:w-full transition-all duration-700 ease-out mt-3"></div>
          </div>
        </div>

        {/* Hover shine effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
          }}
        ></div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudiesClient() {
  // Portfolio case studies with bento grid layout
  const caseStudies: CaseStudy[] = [
    {
      title: "Jayded AF",
      description: "A premium gin martini brand that needed a sophisticated digital presence to match their craft cocktail experience. We created a sleek, modern website that captures the essence of their premium spirits and appeals to their target demographic of cocktail enthusiasts and luxury consumers.",
      href: "/work/jayded-af",
      category: "Luxury Consumer Brand",
      workType: "Food and Beverage",
      gradient: "from-purple-500/20 to-pink-500/20",
      accent: "text-purple-300",
      image: "/jayded-af-project-video.mp4",
      size: "large"
    },
    {
      title: "HealThrive Recovery", 
      description: "An addiction treatment center requiring a compassionate and trustworthy digital presence to help families find hope and healing. We developed a warm, professional website that balances sensitivity with accessibility, making it easy for those seeking help to find the resources they need.",
      href: "/work/healthrive-recovery",
      category: "Healthcare Services",
      workType: "Health and Wellness",
      gradient: "from-blue-500/20 to-cyan-500/20",
      accent: "text-cyan-300",
      image: "/healthrive-recovery-project.png",
      size: "medium"
    },
    {
      title: "The Last Paradox",
      description: "A digital experience for this Warner Bros. Music Group artist's album release featuring interactive elements.",
      href: "/work/the-last-paradox",
      category: "Music & Entertainment",
      workType: "Entertainment",
      gradient: "from-pink-500/20 to-purple-500/20",
      accent: "text-pink-300",
      image: "/the-last-paradox-project.gif",
      size: "medium"
    },
    {
      title: "Beka Wealth Advisors",
      description: "A professional financial advisory platform helping clients manage their wealth with confidence.",
      href: "/work/beka-wealth-advisors",
      category: "Financial Services",
      workType: "Finance",
      gradient: "from-indigo-500/20 to-blue-500/20",
      accent: "text-indigo-300",
      image: "/beka-wealth-advisors-project.gif",
      size: "large"
    },
    {
      title: "Pet Love Cremation & Memorial",
      description: "A compassionate digital platform for pet memorial services helping families honor their beloved pets.",
      href: "/work/pet-love-cremation",
      category: "Pet Services",
      workType: "Pet Services",
      gradient: "from-green-500/20 to-teal-500/20",
      accent: "text-green-300",
      image: "/pet-love-cremation-project.gif",
      size: "medium"
    },
    {
      title: "Zachary Construction Group",
      description: "A comprehensive digital presence for this construction company showcasing their commercial and residential projects.",
      href: "/work/zachary-construction",
      category: "Construction Services",
      workType: "Construction",
      gradient: "from-orange-500/20 to-yellow-500/20",
      accent: "text-orange-300",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop",
      size: "medium"
    },
    {
      title: "Strangers Meeting Strangers",
      description: "A community platform that brings people together through meaningful connections and shared experiences.",
      href: "/work/strangers-meeting-strangers",
      category: "Community Platform",
      workType: "Community",
      gradient: "from-emerald-500/20 to-cyan-500/20",
      accent: "text-emerald-300",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop",
      size: "medium"
    },
    {
      title: "The Zachary Group",
      description: "A leading insurance company protecting businesses across North America. We designed a comprehensive digital presence that showcases their expertise in risk management across real estate, construction, education, and public entities, helping clients move confidently with professional coverage they deserve.",
      href: "/work/the-zachary-group",
      category: "Insurance Services",
      workType: "Insurance",
      gradient: "from-slate-500/20 to-blue-500/20",
      accent: "text-slate-300",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
      size: "medium"
    },
    {
      title: "EY Entrepreneur Of The Year",
      description: "A prestigious global program recognizing outstanding entrepreneurs who demonstrate vision, leadership, and success. We created a comprehensive suite of advertising materials including billboards, signage, and promotional assets to showcase and promote the program's events and honorees across multiple venues.",
      href: "/work/ey-entrepreneur-of-the-year",
      category: "Brand & Advertising",
      workType: "Event Marketing",
      gradient: "from-yellow-500/20 to-amber-500/20",
      accent: "text-yellow-300",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      size: "large"
    }
  ];

  return (
    <div className="relative z-20 text-base leading-relaxed text-white">
      {/* Projects Title */}
      <div className="mb-12">
        <h2 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60 mb-4">
          Selected Work
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent"></div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4">
        {caseStudies.map((study, index) => (
          <BentoCard
            key={index}
            study={study}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
