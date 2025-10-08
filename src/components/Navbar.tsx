"use client";

import { motion } from "framer-motion";
import { Asterisk, ChevronRight } from "lucide-react";
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

import { serviceGroups } from "@/lib/content/services";

type NavigationLink = {
  href: string;
  label: string;
  type?: "services";
};

const serviceAnchorLinks = serviceGroups.map((group) => ({
  id: group.id,
  title: group.title,
  eyebrow: group.eyebrow,
  intro: group.intro,
  href: `/services#${group.id}`,
}));

const serviceGroupMap = new Map(serviceGroups.map((group) => [group.id, group]));

const navigationLinks: NavigationLink[] = [
  { href: "/services", label: "Services", type: "services" },
  { href: "/work", label: "Work" },
  { href: "/why-us", label: "Why Us" },
];

const servicesCta = {
  label: "Start a project",
  href: "/services#project-intake",
};

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
              {navigationLinks.map((link) => {
                if (link.type === "services") {
                  return (
                    <NavigationMenuItem key={link.href} className="relative">
                      <NavigationMenuTrigger
                        className={`group inline-flex items-center ${theme.spacing.gap.xs} px-3 py-2 ${theme.typography.fontSize.lg} lg:${theme.typography.fontSize.xl} ${theme.typography.fontWeight.normal} ${theme.typography.letterSpacing.tight} text-white/80 transition hover:text-white`}
                      >
                        <Asterisk
                          className={`size-4 animate-fade-in animate-pulse brightness-150 ${theme.transition.all} ${theme.transition.duration.slow}`}
                          style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }}
                        />
                        <span className={`${theme.transition.all} ${theme.transition.duration.slow}`}>Services</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="mt-4 rounded-3xl border border-white/10 bg-slate-950/90 p-0 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
                        <div className="grid gap-6 p-6 sm:grid-cols-3">
                          {serviceAnchorLinks.map((group) => {
                            const fullGroup = serviceGroupMap.get(group.id);
                            const topServices = fullGroup?.services.slice(0, 3) ?? [];
                            return (
                              <a
                                key={group.id}
                                href={group.href}
                                className="group flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/[0.04] p-4 transition hover:border-white/30 hover:bg-white/[0.08]"
                              >
                                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">{group.eyebrow}</span>
                                <span className="text-lg font-light text-white">{group.title}</span>
                                <p className="text-sm text-white/60">{group.intro}</p>
                                <div className="flex flex-wrap gap-2 text-xs text-white/60">
                                  {topServices.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                      <span
                                        key={service.title}
                                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-2 py-1"
                                      >
                                        <Icon className="size-3.5 text-white/70" />
                                        {service.title}
                                      </span>
                                    );
                                  })}
                                </div>
                              </a>
                            );
                          })}
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-4 text-sm text-white/70">
                          <span>Ready to move? Jump straight into the intake.</span>
                          <Button asChild className="bg-white/10 text-white hover:bg-white/20">
                            <a href={servicesCta.href}>{servicesCta.label}</a>
                          </Button>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <a
                        href={link.href}
                        className={`inline-flex items-center ${theme.spacing.gap.xs} px-3 py-2 ${theme.typography.fontSize.lg} lg:${theme.typography.fontSize.xl} ${theme.typography.fontWeight.normal} ${theme.typography.letterSpacing.tight} whitespace-nowrap hover:bg-transparent hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group`}
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
                        <Asterisk
                          className={`size-4 animate-fade-in animate-pulse brightness-150 ${theme.transition.all} ${theme.transition.duration.slow}`}
                          style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }}
                        />
                        <span className={`${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}>
                          {link.label}
                        </span>
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
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
                <div
                  key={link.href}
                  className="group animate-link-cascade"
                  style={{
                    animationDelay: `${index * 0.08}s`,
                    animationFillMode: 'both',
                  }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block focus:outline-none focus:ring-0"
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
                          <div className="h-px w-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:w-full transition-all duration-1000 ease-out mt-3" />
                        </div>
                      </div>
                    </div>
                  </a>

                  {link.type === "services" && (
                    <div className="space-y-3 px-14 pb-8">
                      {serviceAnchorLinks.map((group) => (
                        <a
                          key={group.id}
                          href={group.href}
                          onClick={handleLinkClick}
                          className="block rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/[0.08]"
                        >
                          <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white/50">{group.eyebrow}</div>
                          <div className="text-base font-light text-white">{group.title}</div>
                        </a>
                      ))}
                      <a
                        href={servicesCta.href}
                        onClick={handleLinkClick}
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:bg-white/10"
                      >
                        {servicesCta.label}
                      </a>
                    </div>
                  )}
                </div>
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
                  <div className="flex justify-center">
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
                      hello@averyseriouscompany.com
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