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
    <section className="fixed inset-x-0 top-0 z-20" style={{backgroundColor: '#0B3D91'}}>
      <div className="container max-w-7xl mx-auto px-4 ">
        <NavigationMenu className="min-w-full">
          <div className="flex w-full items-center justify-between gap-8 py-4">
            <a href="/" className="flex items-center gap-2 text-white whitespace-nowrap hover:text-white hover:no-underline">
              <Asterisk />
              <span className="text-xl font-semibold tracking-tighter">
                A Very Serious Company
              </span>
            </a>
            <NavigationMenuList className="hidden lg:flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/company-values" className="inline-flex items-center gap-2 px-3 py-2 text-white text-base lg:text-lg font-medium tracking-tight whitespace-nowrap hover:bg-transparent hover:text-white hover:no-underline">
                    <Asterisk className="size-4" />
                    Company Values
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/case-studies" className="inline-flex items-center gap-2 px-3 py-2 text-white text-base lg:text-lg font-medium tracking-tight whitespace-nowrap hover:bg-transparent hover:text-white hover:no-underline">
                    <Asterisk className="size-4" />
                    Case Studies
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/our-approach" className="inline-flex items-center gap-2 px-3 py-2 text-white text-base lg:text-lg font-medium tracking-tight whitespace-nowrap hover:bg-transparent hover:text-white hover:no-underline">
                    <Asterisk className="size-4" />
                    Our Approach
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <div className="flex items-center gap-4 lg:hidden">
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                className="border-white text-white hover:bg-transparent hover:text-white"
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
            <div className="absolute inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-hidden border-t border-white/20 lg:hidden" style={{backgroundColor: '#0B3D91'}}>
              <div>
                <a
                  href="/company-values"
                  type="button"
                  className="flex w-full items-center border-b-2 border-dashed border-white/20 px-8 py-4 text-left text-white text-lg font-medium tracking-tight hover:bg-transparent hover:text-white hover:no-underline"
                >
                  <span className="flex-1"><Asterisk className="mr-2 inline-block size-4 align-[-2px]" />Company Values</span>
                  <span className="shrink-0"></span>
                </a>
                <a
                  href="/case-studies"
                  type="button"
                  className="flex w-full items-center border-b-2 border-dashed border-white/20 px-8 py-4 text-left text-white text-lg font-medium tracking-tight hover:bg-transparent hover:text-white hover:no-underline"
                >
                  <span className="flex-1"><Asterisk className="mr-2 inline-block size-4 align-[-2px]" />Case Studies</span>
                  <span className="shrink-0"></span>
                </a>
                <a
                  href="/our-approach"
                  type="button"
                  className="flex w-full items-center border-b-2 border-dashed border-white/20 px-8 py-4 text-left text-white text-lg font-medium tracking-tight hover:bg-transparent hover:text-white hover:no-underline"
                >
                  <span className="flex-1"><Asterisk className="mr-2 inline-block size-4 align-[-2px]" />Our Approach</span>
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