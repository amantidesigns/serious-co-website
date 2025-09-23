"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/lib/theme";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import ContentPageLayout from "@/components/ContentPageLayout";

interface CaseStudy {
  title: string;
  description: string;
  href: string;
  category: string;
  workType: string;
  gradient: string;
  accent: string;
  image: string;
}

// Interactive Case Study Card Component
function CaseStudyCard({
  study,
  index,
  isMobile,
  onOpenPreview,
}: {
  study: CaseStudy;
  index: number;
  isMobile: boolean;
  onOpenPreview?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setIsHovered(false);
  };
  
  const handleClick = (e: React.MouseEvent, href: string) => {
    if (href === "#") {
      e.preventDefault();
      // Fun quirky messages for coming soon projects that match the website's aesthetic
      const messages = [
        "This project is still brewing in our creative lab! 🧪",
        "We're putting the finishing touches on this masterpiece! ✨",
        "This one's cooking in our digital kitchen! 👨‍🍳",
        "We're polishing this gem to perfection! 💎",
        "This project is marinating in our creative juices! 🥤",
        "We're adding the secret sauce to this one! 🍯",
        "This project is aging like fine wine! 🍷",
        "We're adding the final sparkles to this creation! ✨"
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      alert(randomMessage);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        ref={cardRef}
        href={study.href}
        onClick={(e) => handleClick(e, study.href)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="block relative"
      >
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20">
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${study.gradient})`,
            }}
          />
          
          {/* Content */}
          <div className="relative p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ backgroundColor: study.accent }}
                  />
                  <span className={`text-xs font-mono ${theme.typography.letterSpacing.tight} text-white/60 group-hover:text-white/80 transition-colors duration-500`}>
                    {study.category}
                  </span>
                </div>
                
                <h3 className={`text-lg font-semibold ${theme.typography.letterSpacing.tight} text-white group-hover:text-white transition-colors duration-500 mb-2`}>
                  {study.title}
                </h3>
                
                <p className={`text-sm ${theme.typography.lineHeight.relaxed} text-white/70 group-hover:text-white/90 transition-colors duration-500`}>
                  {study.description}
                </p>
                
                {/* Mobile-only chips */}
                <div className="flex flex-wrap gap-2 mt-3 sm:hidden">
                  <span className={`inline-block px-2 py-1 rounded-full ${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-white/50 group-hover:text-white/70 transition-all duration-500`}
                        style={{ 
                          backgroundColor: 'transparent',
                          border: `1px solid rgba(255,255,255,0.2)`
                        }}>
                    {study.workType}
                  </span>
                  {study.href === "#" && (
                        <span className={`inline-block px-2 py-1 rounded-full ${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-yellow-300`}
                              style={{
                                backgroundColor: 'rgba(255, 255, 0, 0.1)',
                                border: `1px solid rgba(255, 255, 0, 0.3)`
                              }}>
                          Coming Soon
                        </span>
                      )}
                </div>
              </div>
              
              {/* Desktop-only right-side chips */}
              <div className="hidden sm:flex flex-shrink-0 items-center gap-2">
                <span className={`inline-block px-2 py-1 rounded-full ${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-white/50 group-hover:text-white/70 transition-all duration-500`}
                      style={{ 
                        backgroundColor: 'transparent',
                        border: `1px solid rgba(255,255,255,0.2)`
                      }}>
                  {study.workType}
                </span>
                {study.href === "#" && (
                  <span className={`inline-block px-2 py-1 rounded-full ${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-yellow-400/80 group-hover:text-yellow-300 transition-all duration-500`}
                        style={{ 
                          backgroundColor: 'rgba(255, 255, 0, 0.1)',
                          border: `1px solid rgba(255, 255, 0, 0.3)`
                        }}>
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
            {/* Subtle divider line that doesn't interfere with hover */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          </div>
        </div>
      </Link>

      {/* Desktop-only floating preview image near cursor */}
      <AnimatePresence>
        {!isMobile && isHovered && (
          <motion.div
            className="absolute pointer-events-none z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePosition.x + 20,
              y: mousePosition.y - 100
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-48 h-32 rounded-lg overflow-hidden shadow-2xl border border-white/20">
              {study.image && (
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                  style={{ maxWidth: '200px', maxHeight: '200px' }}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CaseStudiesClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => {
      if (typeof window === 'undefined') return;
      const coarse = window.matchMedia('(pointer: coarse)').matches;
      const noHover = window.matchMedia('(hover: none)').matches;
      setIsMobile(coarse || noHover);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      title: "HealThrive Recovery",
      description: "A compassionate website for an addiction treatment center that needed a trustworthy digital presence to help families find hope and healing.",
      href: "/case-studies/healthrive-recovery",
      category: "Healthcare",
      workType: "Website",
      gradient: "rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1)",
      accent: "#3b82f6",
      image: "/healthrive-recovery-project.png"
    },
    {
      title: "Jayded AF",
      description: "A sophisticated website for a premium gin martini brand that needed a digital presence matching their craft cocktail experience.",
      href: "/case-studies/jayded-af",
      category: "Luxury",
      workType: "Website + AI",
      gradient: "rgba(168, 85, 247, 0.1), rgba(196, 181, 253, 0.1)",
      accent: "#a855f7",
      image: "/jayded-af-project.png"
    },
    {
      title: "Beka Wealth Advisors",
      description: "A professional financial advisory website that needed to establish trust and credibility in the competitive wealth management space.",
      href: "#",
      category: "Finance",
      workType: "Website",
      gradient: "rgba(34, 197, 94, 0.1), rgba(134, 239, 172, 0.1)",
      accent: "#22c55e",
      image: "/beka-wealth-advisors-project.gif"
    },
    {
      title: "Pet Love Cremation",
      description: "A sensitive and respectful website for pet cremation services that needed to provide comfort during difficult times for pet owners.",
      href: "#",
      category: "Pet Services",
      workType: "Website",
      gradient: "rgba(236, 72, 153, 0.1), rgba(251, 207, 232, 0.1)",
      accent: "#ec4899",
      image: "/pet-love-cremation-project.gif"
    },
    {
      title: "The Last Paradox",
      description: "An innovative gaming website that needed to capture the essence of a unique puzzle game while engaging the gaming community.",
      href: "#",
      category: "Gaming",
      workType: "Website",
      gradient: "rgba(245, 158, 11, 0.1), rgba(253, 224, 71, 0.1)",
      accent: "#f59e0b",
      image: "/the-last-paradox-project.gif"
    }
  ];

  if (!isVisible) return null;

  return (
    <ContentPageLayout title="Case Studies">
      <div className={`relative z-20 ${theme.sizing.maxWidth.lg} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.lg} text-white`}>
        <div className={`${theme.spacing.space.md}`}>
          <div className={`${theme.spacing.space.sm}`}>
            <p className={`${theme.typography.fontSize.lg} ${theme.typography.lineHeight.relaxed} text-white/90 ${theme.sizing.maxWidth.lg}`}>
              We take simple ideas seriously. Here's how we've applied that philosophy to solve real business problems for our clients.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className={`grid gap-6 ${theme.spacing.space.lg}`}>
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.title}
              study={study}
              index={index}
              isMobile={isMobile}
              onOpenPreview={() => setOpenIndex(index)}
            />
          ))}
        </div>

        {/* Mobile Preview Sheet */}
        <Sheet open={openIndex !== null} onOpenChange={() => setOpenIndex(null)}>
          <SheetContent side="bottom" className="h-[80vh] bg-blue-900 border-blue-700">
            <SheetHeader>
              <SheetTitle className="text-white">
                {openIndex !== null && caseStudies[openIndex]?.title}
              </SheetTitle>
              <SheetDescription className="text-white/70">
                {openIndex !== null && caseStudies[openIndex]?.description}
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              {openIndex !== null && caseStudies[openIndex]?.image && (
                <img 
                  src={caseStudies[openIndex].image} 
                  alt={caseStudies[openIndex].title}
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </ContentPageLayout>
  );
}