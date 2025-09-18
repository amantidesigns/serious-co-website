"use client";

import type { LucideIcon } from "lucide-react";
import {
  Asterisk,
  Banknote,
  BarChart,
  BookOpen,
  Brain,
  Cloud,
  Code,
  CreditCard,
  Database,
  Factory,
  Fingerprint,
  Gamepad2,
  Globe,
  Home,
  Lock,
  Menu,
  MessageSquare,
  Plane,
  Settings,
  Shield,
  ShoppingCart,
  Sparkle,
  Truck,
  Users,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { theme } from "@/lib/theme";

interface Solution {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const DATA_SOLUTIONS: Solution[] = [
  {
    title: "First solution",
    description: "Vestibulum scelerisque quis nisl ut convallis.",
    href: "#",
    icon: Cloud,
  },
  {
    title: "Another solution",
    description: "Curabitur vehicula malesuada enim a cursus.",
    href: "#",
    icon: Lock,
  },
  {
    title: "And a third solution",
    description: "Proin aliquam feugiat lobortis.",
    href: "#",
    icon: Fingerprint,
  },
  {
    title: "And a fourth solution",
    description: "Donec nec sapien nec dolor.",
    href: "#",
    icon: Cloud,
  },
];

interface Platfrom {
  title: string;
  href: string;
  icon: LucideIcon;
}

const DATA_PLATFORM_CASE: Platfrom[] = [
  {
    title: "Banking",
    href: "#",
    icon: CreditCard,
  },
  {
    title: "Fintech",
    href: "#",
    icon: Banknote,
  },
  {
    title: "E-commerce",
    href: "#",
    icon: ShoppingCart,
  },
  {
    title: "Travel & Hospitality",
    href: "#",
    icon: Plane,
  },
  {
    title: "Real Estate",
    href: "#",
    icon: Home,
  },
  {
    title: "Gaming",
    href: "#",
    icon: Gamepad2,
  },
  {
    title: "Manufacturing",
    href: "#",
    icon: Factory,
  },
  {
    title: "Logistics",
    href: "#",
    icon: Truck,
  },
];

interface Resource {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const DATA_RESOURCES: Resource[] = [
  {
    title: "AI Powered",
    description: "Explore AI-powered resources",
    href: "#",
    icon: Sparkle,
  },
  {
    title: "AI Development",
    description: "Tools and frameworks for AI development",
    href: "#",
    icon: Code,
  },
  {
    title: "Machine Learning",
    description: "Resources for machine learning enthusiasts",
    href: "#",
    icon: Brain,
  },
  {
    title: "Data Management",
    description: "Best practices for data management",
    href: "#",
    icon: Database,
  },
  {
    title: "Cloud AI",
    description: "Cloud-based AI solutions",
    href: "#",
    icon: Cloud,
  },
  {
    title: "AI Security",
    description: "Secure your AI applications",
    href: "#",
    icon: Shield,
  },
  {
    title: "AI Configuration",
    description: "Configure AI systems effectively",
    href: "#",
    icon: Settings,
  },
  {
    title: "AI Analytics",
    description: "Analyze AI performance metrics",
    href: "#",
    icon: BarChart,
  },
  {
    title: "Global AI Trends",
    description: "Stay updated with global AI trends",
    href: "#",
    icon: Globe,
  },
  {
    title: "AI Community",
    description: "Join the AI community",
    href: "#",
    icon: Users,
  },
  {
    title: "AI Learning",
    description: "Learn AI from the best resources",
    href: "#",
    icon: BookOpen,
  },
  {
    title: "AI Support",
    description: "Get support for AI-related queries",
    href: "#",
    icon: MessageSquare,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const MobileMenu = () => {
    if (!mounted || !open) return null;

    const menuItems = [
      { href: "/company-values", label: "Company Values" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/our-approach", label: "Our Approach" },
    ];

    const handleMenuItemClick = (e: React.MouseEvent) => {
      // Create ripple effect
      const button = e.currentTarget;
      const ripple = document.createElement('div');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
      `;
      
      // Add ripple animation keyframes if not already present
      if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }
      
      button.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      // Close menu after a short delay to show the animation
      setTimeout(() => {
        setOpen(false);
      }, 200);
    };

    return createPortal(
      <div className="fixed inset-0 z-50">
        {/* Enhanced backdrop with staggered animation */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/70 backdrop-blur-lg transition-all duration-700 ease-out animate-in fade-in"
          style={{
            animation: 'backdropFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
          onClick={() => setOpen(false)}
        />
        
        {/* Menu with enhanced slide down animation */}
        <div 
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-900/95 via-blue-800/95 to-blue-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          style={{
            animation: 'menuSlideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            transform: 'translateY(-100%)',
            opacity: 0
          }}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="py-8 sm:py-12">
              <div className="space-y-1">
                {menuItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group block w-full py-6 px-4 text-left hover:no-underline focus:no-underline active:no-underline relative overflow-hidden rounded-lg transition-all duration-300 ease-out"
                    style={{ 
                      color: theme.colors.primary.white,
                      animation: 'menuItemSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                      animationDelay: `${index * 120}ms`,
                      transform: 'translateX(-20px)',
                      opacity: 0
                    }}
                    onClick={handleMenuItemClick}
                  >
                    {/* Enhanced background hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/12 to-white/8 scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-out origin-left rounded-lg" />
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-lg" />
                    
                    {/* Link content with enhanced animations */}
                    <div className="relative flex items-center space-x-4 z-10">
                      <div className="flex-shrink-0 relative">
                        {/* Icon background glow */}
                        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-all duration-500 ease-out blur-sm" />
                        <Asterisk 
                          className="size-6 brightness-150 group-hover:brightness-200 group-hover:scale-110 transition-all duration-500 ease-out relative z-10" 
                          style={{ 
                            color: theme.colors.primary.white, 
                            filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})`,
                            animation: 'iconPulse 2s ease-in-out infinite'
                          }} 
                        />
                      </div>
                      <span 
                        className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide group-hover:font-normal transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] relative z-10"
                        style={{ color: theme.colors.primary.white }}
                      >
                        {item.label}
                      </span>
                      
                      {/* Arrow indicator */}
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-2 h-2 border-r-2 border-t-2 border-white/60 rotate-45" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Add enhanced animation keyframes */}
        <style jsx>{`
          @keyframes backdropFadeIn {
            0% {
              opacity: 0;
              backdrop-filter: blur(0px);
            }
            100% {
              opacity: 1;
              backdrop-filter: blur(12px);
            }
          }
          
          @keyframes menuSlideDown {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes menuItemSlideIn {
            0% {
              transform: translateX(-20px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes iconPulse {
            0%, 100% {
              filter: drop-shadow(0 0 8px ${theme.colors.shadow.white80});
            }
            50% {
              filter: drop-shadow(0 0 16px ${theme.colors.shadow.white80});
            }
          }
          
          @keyframes lineGlow {
            0% {
              filter: drop-shadow(0 0 4px ${theme.colors.shadow.white80});
            }
            50% {
              filter: drop-shadow(0 0 12px ${theme.colors.shadow.white80});
            }
            100% {
              filter: drop-shadow(0 0 4px ${theme.colors.shadow.white80});
            }
          }
        `}</style>
      </div>,
      document.body
    );
  };

  return (
    <section className={`fixed inset-x-0 top-0 ${theme.zIndex.overlay}`} style={{backgroundColor: theme.colors.primary.blue}}>
      <div className={`container ${theme.sizing.maxWidth.xxl} mx-auto px-4 sm:px-6`}>
        <NavigationMenu className="min-w-full">
          <div className={`flex w-full items-center justify-between ${theme.spacing.gap.lg} py-3 sm:py-4`}>
            <a href="/" className={`flex items-center ${theme.spacing.gap.xs} whitespace-nowrap hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group`} style={{ color: theme.colors.primary.white }}>
              <Asterisk className={`animate-fade-in animate-pulse brightness-150 group-hover:brightness-200 ${theme.transition.all} ${theme.transition.duration.slow} size-4 sm:size-5`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />
              <span className={`text-sm sm:${theme.typography.fontSize.lg} font-semibold ${theme.typography.letterSpacing.tighter} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}>
                AVSC
              </span>
            </a>
            <NavigationMenuList className={`hidden lg:flex ${theme.spacing.gap.md}`}>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/company-values" className={`inline-flex items-center ${theme.spacing.gap.xs} px-3 py-2 ${theme.typography.fontSize.lg} lg:${theme.typography.fontSize.xl} ${theme.typography.fontWeight.normal} ${theme.typography.letterSpacing.tight} whitespace-nowrap hover:bg-transparent hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group/company-values`} style={{ color: theme.colors.primary.white }}>
                    <Asterisk className={`size-4 animate-fade-in animate-pulse brightness-150 group-hover/company-values:brightness-200 ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />
                    <span className={`group-hover/company-values:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}>Company Values</span>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/case-studies" className={`inline-flex items-center ${theme.spacing.gap.xs} px-3 py-2 ${theme.typography.fontSize.lg} lg:${theme.typography.fontSize.xl} ${theme.typography.fontWeight.normal} ${theme.typography.letterSpacing.tight} whitespace-nowrap hover:bg-transparent hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group/case-studies`} style={{ color: theme.colors.primary.white }}>
                    <Asterisk className={`size-4 animate-fade-in animate-pulse brightness-150 group-hover/case-studies:brightness-200 ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />
                    <span className={`group-hover/case-studies:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}>Case Studies</span>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/our-approach" className={`inline-flex items-center ${theme.spacing.gap.xs} px-3 py-2 ${theme.typography.fontSize.lg} lg:${theme.typography.fontSize.xl} ${theme.typography.fontWeight.normal} ${theme.typography.letterSpacing.tight} whitespace-nowrap hover:bg-transparent hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group/our-approach`} style={{ color: theme.colors.primary.white }}>
                    <Asterisk className={`size-4 animate-fade-in animate-pulse brightness-150 group-hover/our-approach:brightness-200 ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />
                    <span className={`group-hover/our-approach:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}>Our Approach</span>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <div className={`flex items-center ${theme.spacing.gap.xs} lg:hidden`}>
              <button
                aria-label="Main Menu"
                className="relative w-12 h-12 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 ease-out group rounded-full"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/15 transition-all duration-500 ease-out scale-0 group-hover:scale-100 blur-sm" />
                
                {/* Animated hamburger lines with enhanced micro-animations */}
                <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                  {/* Top line */}
                  <div 
                    className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ease-out origin-center ${
                      open 
                        ? 'rotate-45 translate-y-0 scale-110' 
                        : '-translate-y-1.5 scale-100'
                    }`}
                    style={{ 
                      color: theme.colors.primary.white,
                      filter: `drop-shadow(0 0 4px ${theme.colors.shadow.white80})`,
                      animation: open ? 'lineGlow 0.5s ease-out forwards' : 'none'
                    }}
                  />
                  {/* Middle line */}
                  <div 
                    className={`absolute w-5 h-0.5 bg-current transition-all duration-400 ease-out origin-center ${
                      open 
                        ? 'opacity-0 scale-0 rotate-180' 
                        : 'opacity-100 scale-100 rotate-0'
                    }`}
                    style={{ 
                      color: theme.colors.primary.white,
                      filter: `drop-shadow(0 0 4px ${theme.colors.shadow.white80})`
                    }}
                  />
                  {/* Bottom line */}
                  <div 
                    className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ease-out origin-center ${
                      open 
                        ? '-rotate-45 translate-y-0 scale-110' 
                        : 'translate-y-1.5 scale-100'
                    }`}
                    style={{ 
                      color: theme.colors.primary.white,
                      filter: `drop-shadow(0 0 4px ${theme.colors.shadow.white80})`,
                      animation: open ? 'lineGlow 0.5s ease-out 0.1s forwards' : 'none'
                    }}
                  />
                </div>
                
                {/* Ripple effect on click */}
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-150 transition-all duration-300 ease-out opacity-0 group-active:opacity-100" />
                
                {/* Subtle pulse animation when menu is open */}
                {open && (
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" style={{ animationDuration: '2s' }} />
                )}
              </button>
            </div>
          </div>

          <MobileMenu />
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar };