"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  imageColor: string;
  imageBW: string;
  slug: string;
}

export default function TeamCard({
  name,
  title,
  description,
  imageColor,
  imageBW,
  slug,
}: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/team/${slug}`}>
      <motion.div
        className="group relative cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container with B&W to Color Transition */}
        <div className="relative mb-6 overflow-hidden rounded-lg aspect-square bg-white/5">
          {/* Black & White Image (always present, fades out on hover) */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={imageBW}
              alt={`${name} - Black and White`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Color Image (fades in on hover) */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={imageColor}
              alt={`${name} - Color`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Overlay gradient on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-light text-white">{name}</h3>
          <p className="text-sm font-medium text-white/60 uppercase tracking-wide">
            {title}
          </p>
          <p className="text-base text-white/70 leading-relaxed mt-3">
            {description}
          </p>
        </div>

        {/* Hover underline indicator */}
        <motion.div
          className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-white/60 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "2rem" : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
}
