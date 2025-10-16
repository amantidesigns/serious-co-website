"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  Asterisk,
  Banknote,
  BarChart,
  BookOpen,
  Brain,
  ChevronRight,
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
import { useState, useEffect, useRef } from "react";

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
  const [isClosing, setIsClosing] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement | null>(null);

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

  // Scroll detection for navbar animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only trigger if scrolled more than 100px to avoid flickering on small scrolls
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !isScrolled) {
          // Scrolling down - hide navbar
          setIsScrolled(true);
        } else if (currentScrollY < lastScrollY && isScrolled) {
          // Scrolling up - show navbar
          setIsScrolled(false);
        }
      } else if (isScrolled) {
        // Always show navbar when near top
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY, isScrolled]);

  // Fixed nav height to avoid layout shift between SSR and client

  const handleToggleMenu = () => {
    if (isAnimating) return;
    
    // Trigger pulse animation
    setShowPulse(true);
    setTimeout(() => setShowPulse(false), 600);
    
    if (isOpen) {
      // Closing animation
      setIsClosing(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
        setIsAnimating(false);
      }, 500); // Match the CSS animation duration (0.5s)
    } else {
      // Opening animation
      setIsOpen(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Match the CSS animation duration
    }
  };

  const handleLinkClick = () => {
    if (isAnimating) return;
    
    // Closing animation
    setIsClosing(true);
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setIsAnimating(false);
    }, 500); // Match the CSS animation duration (0.5s)
  };

  const navigationLinks = [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/why-us", label: "Why Us" },
  ];

  return (
    <>
    <motion.section 
      id="app-navbar" 
      className={`fixed inset-x-0 top-0 ${theme.zIndex.overlay} z-50`} 
      style={{ backgroundColor: 'transparent' }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isScrolled ? -100 : 0, 
        opacity: 1,
        backdropFilter: isScrolled ? 'blur(0px)' : 'blur(10px)',
        backgroundColor: isScrolled ? 'transparent' : 'rgba(30, 58, 138, 0.1)'
      }}
      transition={{ 
        duration: isScrolled ? 0.3 : 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: isScrolled ? 0 : 0.8
      }}
    >
      <div ref={navRef} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 h-16">
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
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <a 
                        href={link.href} 
                        className={`inline-flex items-center ${theme.spacing.gap.xs} ${index === navigationLinks.length - 1 ? 'pl-3 pr-0' : 'px-3'} py-2 ${theme.typography.fontSize.lg} lg:${theme.typography.fontSize.xl} ${theme.typography.fontWeight.normal} ${theme.typography.letterSpacing.tight} whitespace-nowrap hover:bg-transparent hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group`} 
                        style={{ color: theme.colors.primary.white }}
                        onMouseEnter={(e) => {
                          const asterisk = e.currentTarget.querySelector('svg');
                          const span = e.currentTarget.querySelector('span');
                          if (asterisk) {
                            asterisk.style.filter = `brightness(200%) drop-shadow(0 0 8px ${theme.colors.shadow.white80})`;
                          }
                          if (span) {
                            span.style.filter = 'drop-shadow(0 0 8px rgba(255,255,255,0.6))';
                          }
                        }}
                        onMouseLeave={(e) => {
                          const asterisk = e.currentTarget.querySelector('svg');
                          const span = e.currentTarget.querySelector('span');
                          if (asterisk) {
                            asterisk.style.filter = `brightness(150%) drop-shadow(0 0 8px ${theme.colors.shadow.white80})`;
                          }
                          if (span) {
                            span.style.filter = 'none';
                          }
                        }}
                      >
                        <Asterisk className={`size-4 animate-fade-in animate-pulse brightness-150 ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />
                        <span className={`${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}>{link.label}</span>
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
      </motion.section>

      {/* Modern Cascading Mobile Navigation */}
      {isOpen && (
        <div 
          className={`fixed inset-0 top-16 z-40 lg:hidden ${isClosing ? 'animate-cascade-up' : 'animate-cascade-down'}`}
          style={{ 
            backgroundColor: theme.colors.primary.blue,
            backdropFilter: 'blur(20px) saturate(1.2)',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 25px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
        >
          {/* Dark overlay for menu distinction */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          />
          {/* Galaxy background layer */}
          <div className={`absolute top-0 left-0 w-full h-full ${theme.zIndex.base}`}>
            <img src="/galaxy-ascii.png" className={`w-full h-full object-cover opacity-60 animate-fade-in animate-pulse ${theme.borderRadius.lg}`} alt="" />
          </div>

          {/* Background stars layer */}
          <div 
            className="absolute inset-0 pointer-events-none select-none z-0"
            style={{
              backgroundImage: `
                radial-gradient(1px 1px at 15px 25px, ${theme.colors.star.opacity60}, transparent),
                radial-gradient(1px 1px at 45px 85px, ${theme.colors.star.opacity40}, transparent),
                radial-gradient(1px 1px at 75px 15px, ${theme.colors.star.opacity80}, transparent),
                radial-gradient(1px 1px at 105px 65px, ${theme.colors.star.opacity50}, transparent),
                radial-gradient(1px 1px at 135px 35px, ${theme.colors.star.opacity70}, transparent),
                radial-gradient(1px 1px at 165px 95px, ${theme.colors.star.opacity30}, transparent),
                radial-gradient(1px 1px at 195px 55px, ${theme.colors.star.opacity90}, transparent),
                radial-gradient(1px 1px at 225px 25px, ${theme.colors.star.opacity40}, transparent),
                radial-gradient(1px 1px at 255px 75px, ${theme.colors.star.opacity60}, transparent),
                radial-gradient(1px 1px at 285px 45px, ${theme.colors.star.opacity80}, transparent),
                radial-gradient(1px 1px at 315px 15px, ${theme.colors.star.opacity50}, transparent),
                radial-gradient(1px 1px at 345px 85px, ${theme.colors.star.opacity70}, transparent),
                radial-gradient(1px 1px at 375px 35px, ${theme.colors.star.opacity30}, transparent),
                radial-gradient(1px 1px at 405px 65px, ${theme.colors.star.opacity90}, transparent),
                radial-gradient(1px 1px at 435px 25px, ${theme.colors.star.opacity40}, transparent),
                radial-gradient(1px 1px at 465px 75px, ${theme.colors.star.opacity60}, transparent),
                radial-gradient(1px 1px at 495px 45px, ${theme.colors.star.opacity80}, transparent),
                radial-gradient(1px 1px at 525px 15px, ${theme.colors.star.opacity50}, transparent),
                radial-gradient(1px 1px at 555px 85px, ${theme.colors.star.opacity70}, transparent),
                radial-gradient(1px 1px at 585px 35px, ${theme.colors.star.opacity30}, transparent),
                radial-gradient(1px 1px at 615px 65px, ${theme.colors.star.opacity90}, transparent),
                radial-gradient(1px 1px at 645px 25px, ${theme.colors.star.opacity40}, transparent),
                radial-gradient(1px 1px at 675px 75px, ${theme.colors.star.opacity60}, transparent),
                radial-gradient(1px 1px at 705px 45px, ${theme.colors.star.opacity80}, transparent),
                radial-gradient(1px 1px at 735px 15px, ${theme.colors.star.opacity50}, transparent),
                radial-gradient(1px 1px at 765px 85px, ${theme.colors.star.opacity70}, transparent),
                radial-gradient(1px 1px at 795px 35px, ${theme.colors.star.opacity30}, transparent),
                radial-gradient(1px 1px at 825px 65px, ${theme.colors.star.opacity90}, transparent),
                radial-gradient(1px 1px at 855px 25px, ${theme.colors.star.opacity40}, transparent),
                radial-gradient(1px 1px at 885px 75px, ${theme.colors.star.opacity60}, transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '900px 100px',
              opacity: 0.5,
              animation: 'twinkle 4s ease-in-out infinite alternate, pulse 8s ease-in-out infinite'
            }}
            aria-hidden
          />

          {/* Bright pulsing stars layer */}
          <div 
            className="absolute inset-0 pointer-events-none select-none z-5"
            style={{
              backgroundImage: `
                radial-gradient(1px 1px at 25px 35px, ${theme.colors.star.opacity90}, transparent),
                radial-gradient(1px 1px at 85px 75px, ${theme.colors.star.opacity80}, transparent),
                radial-gradient(1px 1px at 155px 25px, ${theme.colors.star.opacity90}, transparent),
                radial-gradient(1px 1px at 225px 85px, ${theme.colors.star.opacity70}, transparent),
                radial-gradient(1px 1px at 295px 45px, ${theme.colors.star.opacity90}, transparent),
                radial-gradient(1px 1px at 365px 15px, ${theme.colors.star.opacity80}, transparent),
                radial-gradient(1px 1px at 435px 65px, ${theme.colors.star.opacity90}, transparent),
                radial-gradient(1px 1px at 505px 35px, ${theme.colors.star.opacity70}, transparent),
                radial-gradient(1px 1px at 575px 85px, ${theme.colors.star.opacity90}, transparent),
                radial-gradient(1px 1px at 645px 25px, ${theme.colors.star.opacity80}, transparent),
                radial-gradient(1px 1px at 715px 55px, ${theme.colors.star.opacity90}, transparent),
                radial-gradient(1px 1px at 785px 15px, ${theme.colors.star.opacity70}, transparent)
              `,
              backgroundRepeat: 'repeat',
              backgroundSize: '800px 100px',
              opacity: 0.4,
              animation: 'twinkle 2s ease-in-out infinite alternate, pulse 2s ease-in-out infinite'
            }}
            aria-hidden
          />
          
          <div className="px-6 py-8 h-full flex flex-col relative z-10">
            {/* Typography-Focused Navigation Links */}
            <nav className="flex-1 space-y-1">
              {navigationLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block group animate-link-cascade focus:outline-none focus:ring-0"
                  style={{ 
                    animationDelay: `${index * 0.08}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="relative py-8 px-6 transition-all duration-700 ease-out group-hover:translate-x-2">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 pt-1">
                        <Asterisk 
                          className="w-8 h-8 text-white/60 group-hover:text-white group-hover:animate-pulse transition-all duration-500" 
                          style={{ filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} 
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-3xl sm:text-4xl font-light tracking-wide text-white group-hover:text-white/95 transition-all duration-500 leading-tight">
                          {link.label}
                        </span>
                        <div className="h-px w-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:w-full transition-all duration-1000 ease-out mt-3"></div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </nav>
            
            {/* FAQ CTA on mobile */}
            <div className="mt-8 flex justify-center lg:hidden">
              <a 
                href="/faq" 
                className="text-sm font-medium rounded-full border px-4 py-2 tracking-normal transition-all duration-200 whitespace-nowrap"
                style={{ 
                  color: theme.colors.primary.white, 
                  borderColor: theme.colors.primary.white,
                  backgroundColor: 'transparent'
                }}
                onClick={handleLinkClick}
              >
                Questions? We have answers.
              </a>
            </div>

            {/* Clean Contact Information */}
            <div className="mt-auto pt-12 animate-contact-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a 
                      href="https://calendar.app.google/KKjjEffx5VEeuZ9Z7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex cursor-pointer active:scale-[0.98] items-center justify-center gap-2 font-thin rounded-full border bg-white text-black px-4 py-2 tracking-tight transition-all duration-200 hover:bg-white/90"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Call
                    </a>
                    <a 
                      href="mailto:hello@averyseriouscompany.com?subject=Hello from A Very Serious Company Website&body=Hi there,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0AThanks!"
                      className="group flex cursor-pointer active:scale-[0.98] items-center justify-center gap-2 font-thin rounded-full border bg-transparent px-4 py-2 tracking-tight transition-all duration-200"
                      style={{ 
                        color: theme.colors.primary.white, 
                        borderColor: theme.colors.primary.white,
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = theme.colors.primary.lightGray;
                        e.currentTarget.style.color = theme.colors.primary.blue;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = theme.colors.primary.white;
                      }}
                    >
                      Email Us
                      <ChevronRight className="size-4 mt-1 transition-all ease-out group-hover:rotate-0" />
                    </a>
                  </div>
                </div>
                <div className="pt-6">
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