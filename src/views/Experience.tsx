import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Calendar, MapPin, ChevronRight, ChevronDown,
  Sparkles, Target, Layers, Shield, Zap, Globe, Radio, Cog, FileText
} from "lucide-react";
import { portfolioData, type Experience, type AceProject } from "../data/portfolio";
import DetailSheet from "../components/DetailSheet";

const projectIcons: Record<string, typeof Layers> = {
  "Employee Monitoring Suite": Sparkles,
  "Evolver — Auto-Update Engine": Zap,
  "ERP Platform Core": Layers,
  "ERP Business Modules": Zap,
  "ACE Password Vault": Shield,
  "External Partner Integrations": Globe,
  "Real-time Infrastructure": Radio,
  "Background Jobs Framework": Cog,
  "Logging Framework": FileText
};

export function Experience() {
  const { experience } = portfolioData;
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [selectedAceProject, setSelectedAceProject] = useState<AceProject | null>(null);
  const [expandedCompany, setExpandedCompany] = useState<string | null>("ACE Money Transfer");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-12 pb-24 sm:pb-12">
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
        {/* Timeline line - hidden on mobile */}
        <div className="absolute left-[19px] top-8 bottom-8 w-px bg-stroke hidden sm:block" />

        <div className="space-y-4 sm:space-y-6">
          {experience.map((job, index) => {
            const isACE = job.company === "ACE Money Transfer";
            const isExpanded = expandedCompany === job.company;

            return (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-0 sm:pl-12"
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-[15px] top-6 w-2.5 h-2.5 rounded-full bg-accent border-2 border-content hidden sm:block" />

                {/* Card */}
                <div className="rounded-xl bg-layer border border-stroke overflow-hidden">
                  {/* Header - Always visible */}
                  <div
                    onClick={() => {
                      if (isACE) {
                        setExpandedCompany(isExpanded ? null : job.company);
                      } else {
                        setSelectedExp(job);
                      }
                    }}
                    className="group p-5 cursor-pointer hover:bg-layer-hover transition-colors"
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
                      {isACE ? (
                        <ChevronDown 
                          className={`w-4 h-4 text-text-disabled group-hover:text-text-tertiary transition-all flex-shrink-0 mt-1 ${isExpanded ? 'rotate-180' : ''}`}
                          strokeWidth={1.5} 
                        />
                      ) : (
                        <ChevronRight 
                          className="w-4 h-4 text-text-disabled group-hover:text-text-tertiary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" 
                          strokeWidth={1.5} 
                        />
                      )}
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
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {job.summary}
                    </p>
                  </div>

                  {/* ACE Projects Expandable Section */}
                  {isACE && (
                    <AnimatePresence>
                      {isExpanded && job.aceProjects && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-2 border-t border-stroke">
                            <p className="text-[10px] uppercase tracking-wider text-text-tertiary font-medium mb-4">
                              Projects & Systems Engineered
                            </p>
                            <div className="grid gap-3">
                              {job.aceProjects.map((project) => {
                                const Icon = projectIcons[project.name] || Layers;
                                return (
                                  <div
                                    key={project.name}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedAceProject(project);
                                    }}
                                    className="group/project p-4 rounded-lg bg-layer-active border border-stroke hover:bg-layer-hover hover:border-stroke-hover cursor-pointer transition-colors"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center">
                                        <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                          <div>
                                            <h4 className="text-sm font-medium text-text-primary group-hover/project:text-accent transition-colors">
                                              {project.name}
                                            </h4>
                                            <p className="text-[10px] text-text-tertiary mt-0.5">
                                              {project.type} • {project.period}
                                            </p>
                                          </div>
                                          <ChevronRight 
                                            className="w-3.5 h-3.5 text-text-disabled group-hover/project:text-text-tertiary group-hover/project:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" 
                                            strokeWidth={1.5} 
                                          />
                                        </div>
                                        <p className="text-xs text-text-secondary mt-2 line-clamp-2">
                                          {project.summary}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Overall Impact */}
                            <div className="mt-4 pt-4 border-t border-stroke">
                              <p className="text-[10px] uppercase tracking-wider text-text-tertiary font-medium mb-3 flex items-center gap-1.5">
                                <Target className="w-3 h-3" />
                                Cumulative Impact
                              </p>
                              <ul className="space-y-2">
                                {job.impact.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2.5 text-xs text-text-secondary"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Sheet for non-ACE experiences */}
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
                <ul className="space-y-2 pl-5">
                  {selectedExp.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
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

      {/* Detail Sheet for ACE Projects */}
      <DetailSheet
        isOpen={!!selectedAceProject}
        onClose={() => setSelectedAceProject(null)}
        title={selectedAceProject?.name || ""}
        subtitle={selectedAceProject?.type}
      >
        {selectedAceProject && (
          <>
            {/* Period */}
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Calendar className="w-4 h-4" strokeWidth={1.5} />
              {selectedAceProject.period}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
                Overview
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {selectedAceProject.description}
              </p>
            </div>

            {/* Architectural Philosophy - if exists */}
            {selectedAceProject.architecturalPhilosophy && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
                  Architectural Philosophy
                </h4>
                <div className="p-4 rounded-lg bg-accent-subtle border border-accent/20">
                  <p className="text-sm text-text-primary leading-relaxed italic">
                    {selectedAceProject.architecturalPhilosophy}
                  </p>
                </div>
                {selectedAceProject.architecturalOutcomes && (
                  <div className="mt-3 space-y-1.5">
                    {selectedAceProject.architecturalOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Approach - if exists */}
            {selectedAceProject.approach && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
                  The Approach
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed p-4 rounded-lg bg-layer border border-stroke">
                  {selectedAceProject.approach}
                </p>
              </div>
            )}

            {/* Architectural Highlights - if exists (for infrastructure projects) */}
            {'architecturalHighlights' in selectedAceProject && selectedAceProject.architecturalHighlights && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Cog className="w-3.5 h-3.5" />
                  Architectural Highlights
                </h4>
                <div className="p-4 rounded-lg bg-layer border border-stroke space-y-2">
                  {(selectedAceProject.architecturalHighlights as string[]).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modules - if exists */}
            {selectedAceProject.modules && selectedAceProject.modules.length > 0 && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Core Modules
                </h4>
                <div className="space-y-3">
                  {selectedAceProject.modules.map((mod, idx) => (
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

            {/* Partners - if exists */}
            {selectedAceProject.partners && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3">
                  Partners Integrated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedAceProject.partners.map((partner) => (
                    <span
                      key={partner}
                      className="px-3 py-1.5 text-xs rounded-lg bg-layer border border-stroke text-text-primary"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Impact */}
            {selectedAceProject.impact && selectedAceProject.impact.length > 0 && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5" />
                  Measurable Impact
                </h4>
                <ul className="space-y-2 pl-5">
                  {selectedAceProject.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
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
                {selectedAceProject.tech.map((t) => (
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
