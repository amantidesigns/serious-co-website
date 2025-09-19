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
  MessageSquare,
  Plane,
  Settings,
  Shield,
  ShoppingCart,
  Sparkle,
  Truck,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HamburgerIcon } from "@/components/ui/hamburger-icon";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleToggleMenu = () => {
    if (isAnimating) return;
    
    // Trigger pulse animation
    setShowPulse(true);
    setTimeout(() => setShowPulse(false), 600);
    
    if (isOpen) {
      // Closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      // Opening animation
      setIsOpen(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navigationLinks = [
    { href: "/company-values", label: "Company Values" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/our-approach", label: "Our Approach" },
  ];

  return (
    <>
    <section className={`fixed inset-x-0 top-0 ${theme.zIndex.overlay}`} style={{backgroundColor: theme.colors.primary.blue}}>
      <div className={`container ${theme.sizing.maxWidth.xxl} mx-auto px-6`}>
        <NavigationMenu className="min-w-full">
          <div className={`flex w-full items-center justify-between ${theme.spacing.gap.lg} py-4`}>
              {/* Logo */}
            <a href="/" className={`flex items-center ${theme.spacing.gap.xs} whitespace-nowrap hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group`} style={{ color: theme.colors.primary.white }}>
              <Asterisk className={`animate-fade-in brightness-150 group-hover:brightness-200 ${theme.transition.all} ${theme.transition.duration.slow} size-4 sm:size-5`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />
              <span className={`text-sm sm:text-base lg:text-lg font-semibold ${theme.typography.letterSpacing.tighter} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}>
                <span className="hidden sm:inline">A Very Serious Company</span>
                <span className="sm:hidden">AVSC</span>
              </span>
            </a>
              
              {/* Desktop Navigation */}
            <NavigationMenuList className={`hidden lg:flex ${theme.spacing.gap.md}`}>
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                      <a href={link.href} className={`inline-flex items-center ${theme.spacing.gap.xs} px-3 py-2 ${theme.typography.fontSize.lg} lg:${theme.typography.fontSize.xl} ${theme.typography.fontWeight.normal} ${theme.typography.letterSpacing.tight} whitespace-nowrap hover:bg-transparent hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group/${link.href.replace('/', '')}`} style={{ color: theme.colors.primary.white }}>
                        <Asterisk className={`size-4 animate-fade-in animate-pulse brightness-150 group-hover/${link.href.replace('/', '')}:brightness-200 ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />
                        <span className={`group-hover/${link.href.replace('/', '')}:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}>{link.label}</span>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
                ))}
            </NavigationMenuList>

              {/* Mobile Hamburger Button with Clean Design */}
            <div className={`flex items-center ${theme.spacing.gap.xs} lg:hidden`}>
                <button
                  onClick={handleToggleMenu}
                  className={`relative p-2 focus:outline-none transition-all duration-300 ${
                    showPulse ? 'animate-pulse-glow' : ''
                  }`}
                  aria-label="Toggle navigation menu"
                >
                  <HamburgerIcon isOpen={isOpen} className="w-6 h-6 relative z-10" />
                </button>
              </div>
            </div>
          </NavigationMenu>
          </div>
      </section>

      {/* Modern Cascading Mobile Navigation */}
      {isOpen && (
        <div 
          className={`fixed inset-0 top-16 z-40 lg:hidden animate-cascade-down`}
          style={{ 
            backgroundColor: theme.colors.primary.blue,
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}
        >
          <div className="px-6 py-8 h-full flex flex-col">
            {/* Typography-Focused Navigation Links */}
            <nav className="flex-1 space-y-1">
              {navigationLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block group animate-link-cascade"
                  style={{ 
                    animationDelay: `${index * 0.08}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="relative py-8 px-6 hover:bg-white/5 transition-all duration-700 ease-out group-hover:translate-x-2">
                    <div className="flex items-center gap-6">
                      <Asterisk 
                        className="w-4 h-4 text-white/60 group-hover:text-white group-hover:animate-pulse transition-all duration-500" 
                        style={{ filter: `drop-shadow(0 0 4px ${theme.colors.shadow.white80})` }} 
                      />
                      <div className="flex-1">
                        <span className="text-3xl sm:text-4xl font-light tracking-wide text-white group-hover:text-white/95 transition-all duration-500 leading-tight">
                          {link.label}
                        </span>
                        <div className="h-px w-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:w-full transition-all duration-1000 ease-out mt-3"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </a>
              ))}
            </nav>
            
            {/* Clean Contact Information */}
            <div className="mt-auto pt-12 border-t border-white/20 animate-contact-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="group">
                    <a 
                      href="tel:952-215-7878" 
                      className="block text-center hover:translate-y-[-1px] transition-all duration-300 ease-out"
                    >
                      <span className="text-white text-lg font-light tracking-wide group-hover:text-white/80 transition-colors duration-300">
                        952-215-7878
                      </span>
                    </a>
                  </div>
                  <div className="group">
                    <a 
                      href="mailto:info@seriouscompany.com" 
                      className="block text-center hover:translate-y-[-1px] transition-all duration-300 ease-out"
                    >
                      <span className="text-white text-lg font-light tracking-wide group-hover:text-white/80 transition-colors duration-300">
                        info@seriouscompany.com
                      </span>
                    </a>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-white/30 font-light tracking-[0.2em] uppercase text-center">
                    A Very Serious Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Navbar };