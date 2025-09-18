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
import { useState } from "react";

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
  return (
    <section className={`fixed inset-x-0 top-0 ${theme.zIndex.overlay}`} style={{backgroundColor: theme.colors.primary.blue}}>
      <div className={`container ${theme.sizing.maxWidth.xxl} mx-auto px-6`}>
        <NavigationMenu className="min-w-full">
          <div className={`flex w-full items-center justify-between ${theme.spacing.gap.lg} py-4`}>
            <a href="/" className={`flex items-center ${theme.spacing.gap.xs} whitespace-nowrap hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group`} style={{ color: theme.colors.primary.white }}>
              <Asterisk className={`animate-fade-in animate-pulse brightness-150 group-hover:brightness-200 ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />
              <span className={`${theme.typography.fontSize.lg} font-semibold ${theme.typography.letterSpacing.tighter} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}>
                A Very Serious Company
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
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                className={`border-white hover:bg-transparent hover:text-white`}
                style={{ color: theme.colors.primary.white, borderColor: theme.colors.primary.white }}
                onClick={() => {
                  if (open) {
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu (Root) */}
          {open && (
            <div className={`absolute inset-0 ${theme.position.absolute.topLarge} flex h-[calc(100vh-72px)] w-full flex-col overflow-hidden border-t lg:hidden`} style={{backgroundColor: theme.colors.primary.blue, borderColor: 'rgba(255,255,255,0.2)'}}>
              <div>
                <a
                  href="/company-values"
                  type="button"
                  className={`flex w-full items-center border-b-2 border-dashed ${theme.spacing.padding.lg} ${theme.spacing.padding.xl} text-left ${theme.typography.fontSize.xl} ${theme.typography.fontWeight.normal} ${theme.typography.letterSpacing.tight} hover:bg-transparent hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group/mobile-company-values`}
                  style={{ color: theme.colors.primary.white, borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  <span className={`flex-1 group-hover/mobile-company-values:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}><Asterisk className={`mr-2 inline-block size-4 align-[-2px] animate-fade-in animate-pulse brightness-150 group-hover/mobile-company-values:brightness-200 ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />Company Values</span>
                  <span className="shrink-0"></span>
                </a>
                <a
                  href="/case-studies"
                  type="button"
                  className={`flex w-full items-center border-b-2 border-dashed ${theme.spacing.padding.lg} ${theme.spacing.padding.xl} text-left ${theme.typography.fontSize.xl} ${theme.typography.fontWeight.normal} ${theme.typography.letterSpacing.tight} hover:bg-transparent hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group/mobile-case-studies`}
                  style={{ color: theme.colors.primary.white, borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  <span className={`flex-1 group-hover/mobile-case-studies:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}><Asterisk className={`mr-2 inline-block size-4 align-[-2px] animate-fade-in animate-pulse brightness-150 group-hover/mobile-case-studies:brightness-200 ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />Case Studies</span>
                  <span className="shrink-0"></span>
                </a>
                <a
                  href="/our-approach"
                  type="button"
                  className={`flex w-full items-center border-b-2 border-dashed ${theme.spacing.padding.lg} ${theme.spacing.padding.xl} text-left ${theme.typography.fontSize.xl} ${theme.typography.fontWeight.normal} ${theme.typography.letterSpacing.tight} hover:bg-transparent hover:no-underline focus:bg-transparent focus:no-underline active:bg-transparent active:no-underline group/mobile-our-approach`}
                  style={{ color: theme.colors.primary.white, borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  <span className={`flex-1 group-hover/mobile-our-approach:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white }}><Asterisk className={`mr-2 inline-block size-4 align-[-2px] animate-fade-in animate-pulse brightness-150 group-hover/mobile-our-approach:brightness-200 ${theme.transition.all} ${theme.transition.duration.slow}`} style={{ color: theme.colors.primary.white, filter: `drop-shadow(0 0 8px ${theme.colors.shadow.white80})` }} />Our Approach</span>
                  <span className="shrink-0"></span>
                </a>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar };