"use client";

import Link from "next/link";
import { theme } from "@/lib/theme";
import { motion } from "framer-motion";

interface RelatedServiceItem {
  name: string;
  slug?: string;
}

interface CaseStudyRelatedServicesProps {
  servicesUsed?: RelatedServiceItem[];
  teamMembers?: RelatedServiceItem[];
}

// Default services mapping
const servicesList: { [key: string]: string } = {
  "Web Design": "/services/web-design",
  "Web Development": "/services/web-development",
  "Brand Strategy": "/services/brand-strategy",
  "AI Training": "/services/ai-training",
  "UX Design": "/services/ux-design",
  "Content Strategy": "/services/content-strategy",
};

export default function CaseStudyRelatedServices({ 
  servicesUsed = [],
  teamMembers = []
}: CaseStudyRelatedServicesProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-24"
    >
      <div className="relative z-20">
        {/* Divider */}
        <div className="border-t border-white/10 mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Services Used */}
          {servicesUsed.length > 0 && (
            <div className="space-y-6">
              <div>
                <p className={`${theme.typography.fontSize.xs} text-white/60 font-medium tracking-widest uppercase mb-4`}>
                  Services Used
                </p>
                <h3 className={`${theme.typography.fontSize.lg} text-white font-light`}>
                  Our Expertise Applied
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {servicesUsed.map((service) => (
                  <Link
                    key={service.name}
                    href={service.slug || servicesList[service.name] || "#"}
                    className="px-4 py-2 rounded-full border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm font-light transition-all duration-300 hover:bg-white/5"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Team Members Involved */}
          {teamMembers.length > 0 && (
            <div className="space-y-6">
              <div>
                <p className={`${theme.typography.fontSize.xs} text-white/60 font-medium tracking-widest uppercase mb-4`}>
                  Team Members
                </p>
                <h3 className={`${theme.typography.fontSize.lg} text-white font-light`}>
                  Who Made It Happen
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {teamMembers.map((member) => (
                  <Link
                    key={member.name}
                    href={member.slug || `/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-4 py-2 rounded-full border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-sm font-light transition-all duration-300 hover:bg-white/5"
                  >
                    {member.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
