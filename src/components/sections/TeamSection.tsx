"use client";

import React from "react";
import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/lib/content/team";

export default function TeamSection() {
  return (
    <div className="space-y-16">
      {/* Section Introduction */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
          Meet the Team
        </h2>
        <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
          Four people who take simple ideas seriously. Each brings their own clarity to the work.
        </p>
      </div>

      {/* Team Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <TeamCard
              name={member.name}
              title={member.title}
              description={member.description}
              imageColor={member.image.color}
              imageBW={member.image.bw}
              slug={member.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
