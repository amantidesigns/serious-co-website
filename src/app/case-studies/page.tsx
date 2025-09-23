"use client";

import ContentPageLayout from "@/components/ContentPageLayout";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
}

// Interactive Case Study Card Component
function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
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

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
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
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #1e3a8a, #3730a3);
        color: white;
        padding: 2rem;
        border-radius: 1rem;
        border: 2px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(20px);
        font-family: 'Inter', sans-serif;
        font-size: 1.1rem;
        font-weight: 300;
        letter-spacing: 0.05em;
        text-align: center;
        max-width: 400px;
        z-index: 10000;
        animation: fadeInScale 0.3s ease-out;
      `;
      
      // Add CSS animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `;
      document.head.appendChild(style);
      
      alertBox.innerHTML = `
        <div style="margin-bottom: 1rem; font-size: 2rem;">✨</div>
        <div style="margin-bottom: 1rem;">${randomMessage}</div>
        <button onclick="this.parentElement.remove()" style="
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        " onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">
          Understood, Very Serious Company ✨
        </button>
      `;
      
      document.body.appendChild(alertBox);
      
      // Auto-remove after 5 seconds
      setTimeout(() => {
        if (alertBox.parentElement) {
          alertBox.remove();
        }
      }, 5000);
    }
  };

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
            <div className="relative py-6 transition-all duration-700 ease-out group-hover:translate-x-2">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 flex items-center">
                  <span className={`${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-white/50 group-hover:text-white/70 transition-all duration-500 -mt-1`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 relative">
                  <span className="text-xl sm:text-2xl font-light tracking-wide text-white group-hover:text-white/95 transition-all duration-500 leading-tight">
                    {study.title}
                  </span>
                  <div className="h-px w-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:w-full transition-all duration-1000 ease-out mt-2"></div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className={`inline-block px-2 py-1 rounded-full ${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-white/50 group-hover:text-white/70 transition-all duration-500`}
                        style={{ 
                          backgroundColor: 'transparent',
                          border: `1px solid rgba(255,255,255,0.2)`
                        }}>
                    {study.workType}
                  </span>
                  {study.href === "#" && (
                    <span className={`inline-block px-2 py-1 rounded-full ${theme.typography.fontSize.xs} ${theme.typography.fontWeight.normal} font-mono ${theme.typography.letterSpacing.tight} text-yellow-400/80 group-hover:text-yellow-300 group-hover:animate-pulse transition-all duration-500`}
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

          {/* Floating Preview Image with Flexible Container */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute pointer-events-none z-50"
                style={{
                  maxWidth: 320,
                  maxHeight: 240,
                }}
                initial={{ opacity: 0, scale: 0.9, x: mousePosition.x + 40, y: mousePosition.y - 120 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: mousePosition.x + 40,
                  y: mousePosition.y - 120
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="relative rounded-xl shadow-2xl border border-white/20 overflow-hidden bg-black/10 backdrop-blur-sm">
                  {study.image.endsWith('.mp4') || study.image.endsWith('.webm') || study.image.endsWith('.mov') ? (
                    <video
                      src={study.image}
                      className="block max-w-full max-h-full object-contain rounded-xl"
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '300px',
                        maxHeight: '200px'
                      }}
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
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '300px',
                        maxHeight: '200px'
                      }}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

      const caseStudies: CaseStudy[] = [
        {
          title: "Jayded AF",
          description: "Jayded AF is a premium gin martini brand that needed a sophisticated digital presence to match their craft cocktail experience. We created a sleek, modern website that captures the essence of their premium spirits and appeals to their target demographic of cocktail enthusiasts and luxury consumers.",
          href: "/case-studies/jayded-af",
          category: "Luxury Consumer Brand",
          workType: "Spirits & Beverages",
          gradient: "from-purple-500/20 to-pink-500/20",
          accent: "text-purple-300",
          image: "/jayded-af-project-video.mp4"
        },
        {
          title: "HealThrive Recovery", 
          description: "HealThrive Recovery is an addiction treatment center requiring a compassionate and trustworthy digital presence to help families find hope and healing. We developed a warm, professional website that balances sensitivity with accessibility, making it easy for those seeking help to find the resources they need.",
          href: "/case-studies/healthrive-recovery",
          category: "Healthcare Services",
          workType: "Healthcare & Wellness",
          gradient: "from-blue-500/20 to-cyan-500/20",
          accent: "text-cyan-300",
          image: "/healthrive-recovery-project.png"
        },
        {
          title: "Zachary Construction Group",
          description: "Coming soon - A comprehensive digital presence for this construction company.",
          href: "#",
          category: "Construction Services",
          workType: "Construction & Building",
          gradient: "from-orange-500/20 to-yellow-500/20",
          accent: "text-orange-300",
          image: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
        },
        {
          title: "Pet Love Cremation & Memorial",
          description: "Coming soon - A compassionate digital platform for pet memorial services.",
          href: "#",
          category: "Pet Services",
          workType: "Pet Care & Services",
          gradient: "from-green-500/20 to-teal-500/20",
          accent: "text-green-300",
          image: "/pet-love-cremation-project.gif"
        },
        {
          title: "Beka Wealth Advisors",
          description: "Coming soon - A professional financial advisory platform.",
          href: "#",
          category: "Financial Services",
          workType: "Financial Services",
          gradient: "from-indigo-500/20 to-blue-500/20",
          accent: "text-indigo-300",
          image: "/beka-wealth-advisors-project.gif"
        },
        {
          title: "The Last Paradox",
          description: "Coming soon - A digital experience for this Warner Bros. Music Group artist's upcoming album release.",
          href: "#",
          category: "Music & Entertainment",
          workType: "Music & Entertainment",
          gradient: "from-pink-500/20 to-purple-500/20",
          accent: "text-pink-300",
          image: "/the-last-paradox-project.gif"
        }
      ];

  return (
    <ContentPageLayout title="Case Studies">
      <div className={`relative z-20 ${theme.sizing.maxWidth.xxl} ${theme.typography.fontSize.md} ${theme.typography.lineHeight.relaxed} ${theme.spacing.space.xl} text-white`}>
        <div className={`${theme.spacing.space.sm}`}>
          <p>Here are some of our recent projects made real.</p>
        </div>

        <div className={`${theme.spacing.space.md} mb-24`}>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>
      </div>
    </ContentPageLayout>
  );
}