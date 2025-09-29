"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/lib/theme";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

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
        "🚀 *adjusts monocle* This project is being crafted with the utmost seriousness... almost there!",
        "⚡ Our very serious team is putting the finishing touches on this masterpiece!",
        "🎯 *dramatic pause* Something extraordinary is brewing in our secret laboratory...",
        "✨ We're applying the final layers of pure excellence to this digital experience!",
        "🔥 *clears throat professionally* This project will be so good, it might break the internet!",
        "🎭 *serious business face* We're not joking - this will be absolutely spectacular!",
        "🌟 Our AI-powered design elves are working overtime on this one!",
        "🎪 *tips hat* This project is going to be so serious, it might become a case study for case studies!"
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      
      // Create a custom styled alert that matches the website aesthetic
      const alertBox = document.createElement('div');
      alertBox.style.cssText = `
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        z-index: 10000;
      `;

      const modal = document.createElement('div');
      modal.style.cssText = `
        background: linear-gradient(135deg, #1e3a8a, #3730a3);
        color: white;
        padding: 16px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.25);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(16px);
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        font-weight: 300;
        letter-spacing: 0.02em;
        text-align: center;
        max-width: 360px;
        width: 100%;
        animation: fadeInScale 0.25s ease-out;
      `;
      
      // Add CSS animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `;
      document.head.appendChild(style);
      
      const isVideo = study.image.endsWith('.mp4') || study.image.endsWith('.webm') || study.image.endsWith('.mov');
      const mediaHTML = isVideo
        ? `<video src="${study.image}" style="display:block; width:100%; height:auto; max-height:40svh; border-radius: 10px;" autoplay loop muted playsinline></video>`
        : `<img src="${study.image}" alt="${study.title} preview" style="display:block; width:100%; height:auto; max-height:40svh; border-radius: 10px;" loading="lazy" />`;

      modal.innerHTML = `
        <div style="margin-bottom: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.25); border-radius: 12px; min-height: 160px; display: flex; align-items: center; justify-content: center;">${mediaHTML}</div>
        <div style="margin-bottom: 12px; line-height: 1.4;">${randomMessage}</div>
        <button style="
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          width: 100%;
        ">Got it</button>
      `;

      const button = modal.querySelector('button') as HTMLButtonElement | null;
      if (button) {
        button.addEventListener('mouseover', () => {
          button.style.background = 'rgba(255,255,255,0.2)';
        });
        button.addEventListener('mouseout', () => {
          button.style.background = 'rgba(255,255,255,0.1)';
        });
        button.addEventListener('click', () => {
          if (alertBox.parentElement) alertBox.remove();
        });
      }

      // Dismiss when tapping the backdrop (outside modal)
      alertBox.addEventListener('click', (ev) => {
        if (ev.target === alertBox) {
          if (alertBox.parentElement) alertBox.remove();
        }
      });

      // Prevent backdrop click when tapping inside modal
      modal.addEventListener('click', (ev) => ev.stopPropagation());

      alertBox.appendChild(modal);
      document.body.appendChild(alertBox);
      // No auto-dismiss
    }
  };

  // No previews on mobile or desktop list; keep hover styles sans media

  return (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
          className="relative"
        >
          <Link
            href={study.href}
            className={`block group relative overflow-hidden ${study.href === "#" ? "cursor-pointer" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={(e) => handleClick(e, study.href)}
            ref={cardRef}
          >
            {/* Mobile nav style hover effect */}
            <div className="relative py-6 pr-8 transition-all duration-700 ease-out group-hover:translate-x-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <div className="flex-shrink-0 flex items-center">
                  <span className={`${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-white/50 group-hover:text-white/70 transition-all duration-500 -mt-1`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 relative">
                  <span className="text-3xl sm:text-2xl font-light tracking-wide text-white group-hover:text-white/95 transition-all duration-500 leading-tight">
                    {study.title}
                  </span>
                  <div className="h-px w-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:w-full transition-all duration-1000 ease-out mt-2"></div>
                  {/* Mobile-only meta row under title */}
                  {isMobile && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className={`inline-block px-2 py-1 rounded-full ${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-white/70`}
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
                  )}
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
          </Link>

          {/* Desktop-only floating preview image near cursor */}
          <AnimatePresence>
            {!isMobile && isHovered && (
              <motion.div
                className="absolute pointer-events-none z-50"
                style={{ maxWidth: 320, maxHeight: 240 }}
                initial={{ opacity: 0, scale: 0.9, x: mousePosition.x + 40, y: mousePosition.y - 120 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: mousePosition.x + 40,
                  y: mousePosition.y - 120,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="relative rounded-xl shadow-2xl border border-white/20 overflow-hidden bg-black/10 backdrop-blur-sm">
                  {study.image.endsWith('.mp4') || study.image.endsWith('.webm') || study.image.endsWith('.mov') ? (
                    <video
                      src={study.image}
                      className="block max-w-full max-h-full object-contain rounded-xl"
                      style={{ width: 'auto', height: 'auto', maxWidth: '300px', maxHeight: '200px' }}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={study.image}
                      alt={`${study.title} Preview`}
                      className="block max-w-full max-h-full object-contain rounded-xl"
                      style={{ width: 'auto', height: 'auto', maxWidth: '300px', maxHeight: '200px' }}
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
      const smallWidth = window.innerWidth <= 640;
      setIsMobile(coarse || noHover || smallWidth);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

      const caseStudies: CaseStudy[] = [
        {
          title: "Jayded AF",
          description: "Jayded AF is a premium gin martini brand that needed a sophisticated digital presence to match their craft cocktail experience. We created a sleek, modern website that captures the essence of their premium spirits and appeals to their target demographic of cocktail enthusiasts and luxury consumers.",
          href: "/our-work/jayded-af",
          category: "Luxury Consumer Brand",
          workType: "Food and Beverage",
          gradient: "from-purple-500/20 to-pink-500/20",
          accent: "text-purple-300",
          image: "/jayded-af-project-video.mp4"
        },
        {
          title: "HealThrive Recovery", 
          description: "HealThrive Recovery is an addiction treatment center requiring a compassionate and trustworthy digital presence to help families find hope and healing. We developed a warm, professional website that balances sensitivity with accessibility, making it easy for those seeking help to find the resources they need.",
          href: "/our-work/healthrive-recovery",
          category: "Healthcare Services",
          workType: "Health and Wellness",
          gradient: "from-blue-500/20 to-cyan-500/20",
          accent: "text-cyan-300",
          image: "/healthrive-recovery-project.png"
        },
        {
          title: "Zachary Construction Group",
          description: "Coming soon - A comprehensive digital presence for this construction company.",
          href: "#",
          category: "Construction Services",
          workType: "Construction",
          gradient: "from-orange-500/20 to-yellow-500/20",
          accent: "text-orange-300",
          image: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
        },
        {
          title: "Pet Love Cremation & Memorial",
          description: "Coming soon - A compassionate digital platform for pet memorial services.",
          href: "#",
          category: "Pet Services",
          workType: "Pet Services",
          gradient: "from-green-500/20 to-teal-500/20",
          accent: "text-green-300",
          image: "/pet-love-cremation-project.gif"
        },
        {
          title: "Beka Wealth Advisors",
          description: "Coming soon - A professional financial advisory platform.",
          href: "#",
          category: "Financial Services",
          workType: "Finance",
          gradient: "from-indigo-500/20 to-blue-500/20",
          accent: "text-indigo-300",
          image: "/beka-wealth-advisors-project.gif"
        },
        {
          title: "Strangers Meeting Strangers",
          description: "Coming soon - A community platform that brings people together through meaningful connections and shared experiences.",
          href: "#",
          category: "Community Platform",
          workType: "Community",
          gradient: "from-emerald-500/20 to-cyan-500/20",
          accent: "text-emerald-300",
          image: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
        },
        {
          title: "The Last Paradox",
          description: "Coming soon - A digital experience for this Warner Bros. Music Group artist's upcoming album release.",
          href: "#",
          category: "Music & Entertainment",
          workType: "Entertainment",
          gradient: "from-pink-500/20 to-purple-500/20",
          accent: "text-pink-300",
          image: "/the-last-paradox-project.gif"
        }
      ];

  return (
    <div className={`relative z-20 ${theme.sizing.maxWidth.xxl} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.xl} text-white`}>
      <div className={`${theme.spacing.space.sm}`}>
        <p>Here are some of our recent projects made real.</p>
      </div>

      <div className={`${theme.spacing.space.md} mb-24`}>
        {caseStudies.map((study, index) => (
          <div key={index}>
            <CaseStudyCard
              study={study}
              index={index}
              isMobile={isMobile}
              onOpenPreview={() => setOpenIndex(index)}
            />

            {/* Mobile bottom sheet preview */}
            {isMobile && openIndex === index && (
              <Sheet open onOpenChange={(open) => !open && setOpenIndex(null)}>
                <SheetContent side="bottom" className="bg-black/70 backdrop-blur-md border-white/10">
                  <SheetHeader>
                    <SheetTitle className="text-white/90">{study.title}</SheetTitle>
                    <SheetDescription className="text-white/70">
                      {study.category} · {study.workType}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="px-4 pb-4 flex items-center justify-center">
                    {study.image.endsWith('.mp4') || study.image.endsWith('.webm') || study.image.endsWith('.mov') ? (
                      <video
                        src={study.image}
                        className="block max-w-full max-h-[40svh] object-contain rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={study.image}
                        alt={`${study.title} Preview`}
                        className="block max-w-full max-h-[40svh] object-contain rounded-lg"
                      />
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
