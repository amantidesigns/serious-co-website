import React from "react";
import { theme } from "@/lib/theme";

interface CompanyDescriptionProps {
  className?: string;
}

export default function CompanyDescription({ className = "" }: CompanyDescriptionProps) {
  return (
    <div className={`absolute bottom-40 ${theme.zIndex.base} lg:${theme.sizing.maxWidth.sm} ${theme.sizing.width.container} ${className}`}>
      <p className={`relative ${theme.zIndex.overlay} ${theme.spacing.margin.lg} ${theme.sizing.maxWidth.sm} ${theme.typography.fontWeight.normal} ${theme.typography.lineHeight.normal}`} style={{ color: '#000000' }}>
        <span className="pr-2" style={{ color: '#000000' }}>
          A <em>Very</em> Serious Company is a creative agency.
        </span>{" "}
        <br />
        We build websites, create advertisements, and solve <br />
        specific business problems.
      </p>
    </div>
  );
}
