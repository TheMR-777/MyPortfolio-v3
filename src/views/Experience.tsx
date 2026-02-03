import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ChevronRight, Sparkles, Target } from "lucide-react";
import { portfolioData, type Experience } from "../data/portfolio";
import DetailSheet from "../components/DetailSheet";

export function Experience() {
  const { experience } = portfolioData;
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <h1 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
          Experience
        </h1>
        <p className="text-sm text-text-secondary">
          Professional journey from internship to architecture consultant
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-8 bottom-8 w-px bg-stroke" />

        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-[15px] top-6 w-2.5 h-2.5 rounded-full bg-accent border-2 border-content" />

              {/* Card */}
              <div
                onClick={() => setSelectedExp(job)}
                className="group p-5 rounded-xl bg-layer border border-stroke cursor-pointer hover:bg-layer-hover hover:border-stroke-hover transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-medium text-text-primary group-hover:text-accent transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-sm text-accent mt-0.5">{job.company}</p>
                    </div>
                  </div>
                  <ChevronRight 
                    className="w-4 h-4 text-text-disabled group-hover:text-text-tertiary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-text-tertiary mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {job.location}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {job.summary}
                </p>

                {/* Highlights preview */}
                <div className="flex flex-wrap gap-1.5">
                  {job.highlights.slice(0, 2).map((h) => (
                    <span
                      key={h}
                      className="px-2 py-1 text-[10px] rounded-md bg-layer-active border border-stroke text-text-tertiary"
                    >
                      {h.length > 40 ? h.substring(0, 40) + "..." : h}
                    </span>
                  ))}
                  {job.highlights.length > 2 && (
                    <span className="px-2 py-1 text-[10px] rounded-md text-text-disabled">
                      +{job.highlights.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Sheet */}
      <DetailSheet
        isOpen={!!selectedExp}
        onClose={() => setSelectedExp(null)}
        title={selectedExp?.role || ""}
        subtitle={selectedExp?.company}
      >
        {selectedExp && (
          <>
            {/* Period & Location */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" strokeWidth={1.5} />
                {selectedExp.period}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                {selectedExp.location}
              </span>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
                Overview
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {selectedExp.description}
              </p>
            </div>

            {/* Modules */}
            {selectedExp.modules && selectedExp.modules.length > 0 && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Core Modules Engineered
                </h4>
                <div className="space-y-3">
                  {selectedExp.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-layer border border-stroke"
                    >
                      <h5 className="text-sm font-medium text-text-primary mb-1">
                        {mod.name}
                      </h5>
                      <p className="text-xs text-text-secondary leading-relaxed mb-2">
                        {mod.description}
                      </p>
                      <span className="text-[10px] text-accent font-medium">
                        → {mod.impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact */}
            {selectedExp.impact && selectedExp.impact.length > 0 && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5" />
                  Measurable Impact
                </h4>
                <ul className="space-y-2">
                  {selectedExp.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedExp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs rounded-lg bg-accent-subtle text-accent font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </DetailSheet>
    </div>
  );
}
