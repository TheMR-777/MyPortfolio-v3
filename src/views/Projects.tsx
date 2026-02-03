import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight, AlertCircle, Lightbulb, Target } from "lucide-react";
import { portfolioData, type Project } from "../data/portfolio";
import DetailSheet from "../components/DetailSheet";

export function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          Projects
        </h1>
        <p className="text-sm text-text-secondary">
          Engineering solutions that create real-world impact
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              onClick={() => setSelectedProject(project)}
              className="group h-full p-5 rounded-xl bg-layer border border-stroke cursor-pointer hover:bg-layer-hover hover:border-stroke-hover transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-[15px] font-medium text-text-primary mt-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-text-tertiary hover:text-accent transition-colors rounded-md hover:bg-layer-hover"
                    >
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </a>
                  )}
                  <ChevronRight 
                    className="w-4 h-4 text-text-disabled group-hover:text-text-tertiary group-hover:translate-x-0.5 transition-all" 
                    strokeWidth={1.5} 
                  />
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3">
                {project.summary}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] rounded-md bg-layer-active border border-stroke text-text-tertiary"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-0.5 text-[10px] text-text-disabled">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Sheet */}
      <DetailSheet
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        subtitle={selectedProject?.category}
      >
        {selectedProject && (
          <>
            {/* Description */}
            <p className="text-sm text-text-secondary leading-relaxed">
              {selectedProject.description}
            </p>

            {/* The Challenge */}
            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5" />
                The Challenge
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed p-4 rounded-lg bg-layer border border-stroke">
                {selectedProject.challenge}
              </p>
            </div>

            {/* The Approach */}
            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5" />
                The Approach
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed p-4 rounded-lg bg-layer border border-stroke">
                {selectedProject.approach}
              </p>
            </div>

            {/* Impact */}
            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Target className="w-3.5 h-3.5" />
                Measurable Impact
              </h4>
              <ul className="space-y-2">
                {selectedProject.impact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs rounded-lg bg-accent-subtle text-accent font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* External Link */}
            {selectedProject.link && selectedProject.link !== "#" && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            )}
          </>
        )}
      </DetailSheet>
    </div>
  );
}
