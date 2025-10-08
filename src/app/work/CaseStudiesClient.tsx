"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { CaseStudyDetail } from "@/lib/content/case-studies";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface CaseStudiesClientProps {
  studies: CaseStudyDetail[];
}

interface FilterState {
  industry: string;
  service: string;
}

const DEFAULT_FILTERS: FilterState = {
  industry: "all",
  service: "all",
};

function useFilters(studies: CaseStudyDetail[]) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const industries = useMemo(() => {
    const unique = new Set<string>();
    studies.forEach((study) => unique.add(study.industry));
    return Array.from(unique).sort();
  }, [studies]);

  const services = useMemo(() => {
    const unique = new Set<string>();
    studies.forEach((study) => study.services.forEach((service) => unique.add(service)));
    return Array.from(unique).sort();
  }, [studies]);

  const filteredStudies = useMemo(() => {
    return studies.filter((study) => {
      if (filters.industry !== "all" && study.industry !== filters.industry) {
        return false;
      }
      if (
        filters.service !== "all" &&
        !study.services.map((service) => service.toLowerCase()).includes(filters.service.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [studies, filters]);

  return {
    filters,
    setFilters,
    industries,
    services,
    filteredStudies,
  };
}

function FilterSelect({
  id,
  label,
  options,
  value,
  onChange,
}: {
  id: string;
  label: string;
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2 text-left" htmlFor={id}>
      <span className="text-xs uppercase tracking-[0.3em] text-white/60">{label}</span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05)] outline-none transition focus:border-white/40 focus:bg-white/10"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-slate-900 text-white">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function CaseStudyMetrics({
  metrics,
}: {
  metrics: CaseStudyDetail["metrics"];
}) {
  return (
    <dl className="grid grid-cols-2 gap-3 text-xs text-white/70 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div key={`${metric.label}-${metric.value}`} className="space-y-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
          <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-white/50">{metric.label}</dt>
          <dd className="text-sm text-white">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function CaseStudyCard({
  study,
  index,
  onPreview,
}: {
  study: CaseStudyDetail;
  index: number;
  onPreview: (study: CaseStudyDetail) => void;
}) {
  const content = (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:border-white/30 hover:bg-white/[0.08] ${study.status === "comingSoon" ? "cursor-pointer" : ""}`}
    >
      <div className={`absolute inset-0 -z-10 opacity-60 ${study.gradient}`} aria-hidden />
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-light tracking-wide text-white/80">{study.title}</span>
        <span className="rounded-full border border-white/20 px-2 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-white/60">
          {study.status === "published" ? "Live" : "In progress"}
        </span>
      </div>
      <p className="mt-3 text-sm text-white/70">{study.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {study.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-black/40 px-2 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-white/70">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <CaseStudyMetrics metrics={study.metrics} />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/70">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/50">Industry:</span>
        <span className="rounded-full border border-white/15 px-2 py-1 text-white/80">{study.industry}</span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/50">Services:</span>
        <span className="flex flex-wrap gap-1">
          {study.services.map((service) => (
            <span key={service} className="rounded-full border border-white/10 px-2 py-1 text-white/70">
              {service}
            </span>
          ))}
        </span>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        {study.status === "published" ? (
          <div className="text-sm text-white/70">Read the full case study →</div>
        ) : (
          <div className="text-sm text-white/70">Preview the build →</div>
        )}
        <div className={`h-px flex-1 bg-gradient-to-r ${study.accent} opacity-70`} />
      </div>
    </div>
  );

  if (study.status === "published") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.4 }}
      >
        <Link href={`/work/${study.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      onClick={() => onPreview(study)}
      className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
    >
      {content}
    </motion.button>
  );
}

function CaseStudyPreview({ study, onClose }: { study: CaseStudyDetail | null; onClose: () => void }) {
  return (
    <Sheet open={!!study} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="max-w-xl overflow-y-auto border-white/10 bg-slate-950/90 text-white">
        {study && (
          <div className="space-y-6">
            <SheetHeader>
              <SheetTitle className="text-2xl font-light text-white">{study.title}</SheetTitle>
              <SheetDescription className="text-sm text-white/70">
                {study.previewNote ?? study.description}
              </SheetDescription>
            </SheetHeader>

            <div className="overflow-hidden rounded-xl border border-white/10">
              {study.heroMedia.type === "video" ? (
                <video
                  src={study.heroMedia.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                />
              ) : (
                <img src={study.heroMedia.src} alt={study.heroMedia.alt} className="w-full" />
              )}
            </div>

            <CaseStudyMetrics metrics={study.metrics} />

            {study.previewNote && (
              <p className="text-sm text-white/80">{study.previewNote}</p>
            )}

            <div className="flex flex-wrap gap-2 text-xs text-white/70">
              {study.services.map((service) => (
                <span key={service} className="rounded-full border border-white/10 px-2 py-1">
                  {service}
                </span>
              ))}
            </div>

            <Button asChild className="w-full bg-white/10 text-white hover:bg-white/20">
              <Link href="/services#project-intake">Start this project</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default function CaseStudiesClient({ studies }: CaseStudiesClientProps) {
  const { filters, setFilters, industries, services, filteredStudies } = useFilters(studies);
  const [preview, setPreview] = useState<CaseStudyDetail | null>(null);

  const industryOptions = useMemo(
    () => [{ label: "All industries", value: "all" }, ...industries.map((item) => ({ label: item, value: item }))],
    [industries],
  );

  const serviceOptions = useMemo(
    () => [{ label: "All services", value: "all" }, ...services.map((item) => ({ label: item, value: item }))],
    [services],
  );

  return (
    <section className="space-y-12 text-white">
      <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Case Studies</p>
          <h2 className="text-3xl font-light sm:text-4xl">Simple ideas taken seriously.</h2>
          <p className="max-w-2xl text-sm text-white/70">
            Filter by industry or service to see the work that matches what you need. The projects marked as in progress open a quick preview.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <FilterSelect
            id="industry"
            label="Industry"
            value={filters.industry}
            onChange={(value) => setFilters((prev) => ({ ...prev, industry: value }))}
            options={industryOptions}
          />
          <FilterSelect
            id="service"
            label="Service"
            value={filters.service}
            onChange={(value) => setFilters((prev) => ({ ...prev, service: value }))}
            options={serviceOptions}
          />
        </div>
      </div>

      <AnimatePresence>
        <div className="grid gap-6 md:grid-cols-2">
          {filteredStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} onPreview={setPreview} />
          ))}
        </div>
      </AnimatePresence>

      {filteredStudies.length === 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-white/70">
          Nothing here yet. Adjust your filters and we’ll show you the projects that fit.
        </div>
      )}

      <CaseStudyPreview study={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
