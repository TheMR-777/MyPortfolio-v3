import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Calendar, MapPin, ChevronRight, ChevronDown,
  Sparkles, Target, Layers, Shield, Zap, Globe, Radio, Cog, FileText,
  TrendingUp, Award, Users, Rocket
} from "lucide-react";
import { portfolioData, type Experience, type AceProject } from "../data/portfolio";
import DetailSheet from "../components/DetailSheet";
import { Tooltip } from "../components/Tooltip";
import type { NavigationOptions, TabId } from "../App";

// Navigation function type
type NavigateFn = (tab: TabId | NavigationOptions) => void;

interface ExperienceProps {
  onNavigate?: NavigateFn;
}

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

export function Experience({ onNavigate }: ExperienceProps) {
  const { experience } = portfolioData;
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [selectedAceProject, setSelectedAceProject] = useState<AceProject | null>(null);
  const [expandedCompany, setExpandedCompany] = useState<string | null>("ACE Money Transfer");

  // Key impact stats across all experiences
  const impactStats = [
    { 
      icon: TrendingUp, 
      value: "200%", 
      label: "Productivity Boost", 
      detail: "via Employee Monitoring Suite",
      tooltip: {
        title: "200% Productivity Increase",
        description: "The Employee Monitoring Suite — engineered solo over one year — enabled a measurable 200% productivity boost across teams.",
        action: { label: "View project", section: "flagship-projects" }
      }
    },
    { 
      icon: Award, 
      value: "Zero", 
      label: "Defects at Launch", 
      detail: "flagship monitoring system",
      tooltip: {
        title: "Zero-Defect Launch",
        description: "Deployed the Employee Monitoring Suite to production with no bugs reported — a testament to rigorous testing and disciplined engineering.",
        action: { label: "See approach", section: "flagship-projects" }
      }
    },
    { 
      icon: Users, 
      value: "6", 
      label: "Countries Reached", 
      detail: "via cybersecurity community",
      tooltip: {
        title: "Global Cybersecurity Community",
        description: "Founded and led an international community spanning Pakistan, Iran, India, Australia, Finland, and Bangladesh — mentoring aspiring security researchers.",
        action: { label: "View community", section: "about-community" }
      }
    },
    { 
      icon: Rocket, 
      value: "9+", 
      label: "Enterprise Systems", 
      detail: "engineered at ACE",
      tooltip: {
        title: "9+ Enterprise Systems",
        description: "From the Employee Monitoring Suite and ERP platform to Background Jobs, Logging, and Password Vault — a comprehensive engineering footprint.",
        action: { label: "Explore all", section: "experience-timeline" }
      }
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-12 pb-24 sm:pb-12" id="experience-timeline">
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
        <p className="text-sm text-text-secondary mb-8">
          Professional journey from internship to architecture consultant — building systems that transform enterprises
        </p>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {impactStats.map((stat, idx) => (
            <Tooltip
              key={stat.label}
              content={{
                title: stat.tooltip.title,
                description: stat.tooltip.description
              }}
              action={onNavigate ? {
                label: stat.tooltip.action.label,
                onClick: () => {
                  const section = stat.tooltip.action.section;
                  if (section === "flagship-projects") {
                    onNavigate({ tab: "projects", section: "flagship-projects" });
                  } else if (section === "about-community") {
                    onNavigate({ tab: "about", section: "about-community" });
                  } else {
                    onNavigate("experience");
                  }
                }
              } : undefined}
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 rounded-xl bg-layer border border-stroke hover:border-accent/30 transition-colors group cursor-default"
              >
                <stat.icon className="w-4 h-4 text-accent mb-2 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <div className="text-xl font-semibold text-text-primary">{stat.value}</div>
                <div className="text-xs font-medium text-text-secondary">{stat.label}</div>
                <div className="text-[10px] text-text-tertiary mt-0.5">{stat.detail}</div>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line - hidden on mobile */}
        <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-accent/40 via-stroke to-transparent hidden sm:block" />

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
                <div className="absolute left-[12px] top-6 w-4 h-4 rounded-full bg-content border-2 border-accent hidden sm:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                {/* Card */}
                <div className="rounded-xl bg-layer border border-stroke overflow-hidden hover:border-stroke-hover transition-colors">
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
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center group-hover:scale-105 transition-transform">
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

                    {/* Highlights - quick pills */}
                    {job.highlights && job.highlights.length > 0 && !isACE && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {job.highlights.slice(0, 3).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-[10px] rounded-md bg-layer-active text-text-tertiary border border-stroke/50"
                          >
                            {highlight}
                          </span>
                        ))}
                        {job.highlights.length > 3 && (
                          <span className="px-2 py-1 text-[10px] rounded-md text-text-disabled">
                            +{job.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
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
                          <div className="px-5 pb-5 pt-2 border-t border-stroke bg-layer-active/30">
                            <p className="text-[10px] uppercase tracking-wider text-text-tertiary font-medium mb-4 flex items-center gap-2">
                              <Layers className="w-3 h-3" />
                              Projects & Systems Engineered
                            </p>
                            <div className="grid gap-3">
                              {job.aceProjects.map((project, pIdx) => {
                                const Icon = projectIcons[project.name] || Layers;
                                return (
                                  <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: pIdx * 0.03, duration: 0.3 }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedAceProject(project);
                                    }}
                                    className="group/project p-4 rounded-lg bg-layer border border-stroke hover:bg-layer-hover hover:border-accent/30 cursor-pointer transition-all"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center group-hover/project:bg-accent/20 transition-colors">
                                        <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                          <div>
                                            <h4 className="text-sm font-medium text-text-primary group-hover/project:text-accent transition-colors">
                                              {project.name}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-0.5">
                                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-subtle text-accent">
                                                {project.type.split(' • ')[0]}
                                              </span>
                                              <p className="text-[10px] text-text-tertiary">
                                                {project.period}
                                              </p>
                                            </div>
                                          </div>
                                          <ChevronRight 
                                            className="w-3.5 h-3.5 text-text-disabled group-hover/project:text-accent group-hover/project:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" 
                                            strokeWidth={1.5} 
                                          />
                                        </div>
                                        <p className="text-xs text-text-secondary mt-2 line-clamp-2">
                                          {project.summary}
                                        </p>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>

                            {/* Overall Impact */}
                            <div className="mt-5 pt-4 border-t border-stroke">
                              <p className="text-[10px] uppercase tracking-wider text-text-tertiary font-medium mb-3 flex items-center gap-1.5">
                                <Target className="w-3 h-3" />
                                Cumulative Impact at ACE
                              </p>
                              <div className="grid sm:grid-cols-2 gap-2">
                                {job.impact.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-2.5 text-xs text-text-secondary p-2.5 rounded-lg bg-layer border border-stroke/50"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Link to Projects */}
                            {onNavigate && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onNavigate({ tab: "projects", section: "flagship-projects" });
                                }}
                                className="mt-4 w-full py-2.5 text-xs text-text-tertiary hover:text-accent border border-stroke hover:border-accent/30 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                              >
                                <span>View these projects in detail</span>
                                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                              </button>
                            )}
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

            {/* Highlights */}
            {selectedExp.highlights && selectedExp.highlights.length > 0 && (
              <div>
                <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Highlights
                </h4>
                <div className="space-y-2">
                  {selectedExp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            )}

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
