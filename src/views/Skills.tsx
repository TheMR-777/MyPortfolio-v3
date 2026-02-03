import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Brain, Award, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function Skills() {
  const { skills, certifications, education } = portfolioData;

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
          Skills & Expertise
        </h1>
        <p className="text-sm text-text-secondary">
          Technical proficiencies developed over 20+ years of hands-on experience
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Programming Languages */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-xl bg-layer border border-stroke"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center">
              <Code2 className="w-4 h-4 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="text-base font-semibold text-text-primary">
              Languages
            </h2>
          </div>
          <div className="space-y-3">
            {skills.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between p-3 rounded-lg bg-layer-active border border-stroke"
              >
                <div>
                  <h3 className="text-sm font-medium text-text-primary">
                    {lang.name}
                  </h3>
                  <p className="text-[11px] text-text-tertiary mt-0.5">
                    {lang.note}
                  </p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <span className="text-xs font-medium text-accent">
                    {lang.level}
                  </span>
                  <p className="text-[10px] text-text-disabled">
                    {lang.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Frameworks & Tools */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-xl bg-layer border border-stroke"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center">
              <Layers className="w-4 h-4 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="text-base font-semibold text-text-primary">
              Frameworks
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks.map((fw) => (
              <div
                key={fw.name}
                className="px-3 py-2 rounded-lg bg-layer-active border border-stroke"
              >
                <span className="text-sm text-text-primary">{fw.name}</span>
                <span className="text-[10px] text-text-disabled ml-2">
                  {fw.category}
                </span>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-6 pt-5 border-t border-stroke">
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-3.5 h-3.5 text-text-tertiary" strokeWidth={1.5} />
              <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
                Tools & Platforms
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 text-xs rounded-md bg-layer border border-stroke text-text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Core Competencies */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-xl bg-layer border border-stroke"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center">
              <Brain className="w-4 h-4 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="text-base font-semibold text-text-primary">
              Core Competencies
            </h2>
          </div>
          <div className="space-y-3">
            {skills.core.map((skill) => (
              <div
                key={skill.name}
                className="p-3 rounded-lg bg-layer-active border border-stroke"
              >
                <h3 className="text-sm font-medium text-text-primary mb-1">
                  {skill.name}
                </h3>
                <p className="text-[11px] text-text-tertiary">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-xl bg-layer border border-stroke"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center">
              <Award className="w-4 h-4 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="text-base font-semibold text-text-primary">
              Certifications
            </h2>
          </div>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-3 rounded-lg bg-layer-active border border-stroke"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-medium text-text-primary">
                    {cert.name}
                  </h3>
                  {cert.score && (
                    <span className="text-xs font-medium text-accent flex-shrink-0">
                      {cert.score}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-text-tertiary mt-0.5">
                  {cert.issuer}
                  {cert.note && ` • ${cert.note}`}
                </p>
                {cert.breakdown && (
                  <p className="text-[10px] text-text-disabled mt-1">
                    {cert.breakdown}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 p-6 rounded-xl bg-layer border border-stroke"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-accent" strokeWidth={1.5} />
          </div>
          <h2 className="text-base font-semibold text-text-primary">
            Education
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-text-primary">
              {education.degree}
            </h3>
            <p className="text-sm text-accent mt-1">
              {education.institution}
            </p>
            <p className="text-xs text-text-tertiary mt-1">
              {education.period}
            </p>
          </div>
          
          <div className="flex gap-6">
            <div className="text-center">
              <div className="text-2xl font-semibold text-accent">
                {education.cgpa}
              </div>
              <div className="text-[10px] text-text-tertiary uppercase tracking-wider">
                CGPA
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-text-primary">
                {education.percentage}
              </div>
              <div className="text-[10px] text-text-tertiary uppercase tracking-wider">
                Percentage
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-5 pt-5 border-t border-stroke">
          <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
            Academic Highlights
          </span>
          <ul className="mt-3 grid md:grid-cols-2 gap-2">
            {education.achievements.map((achievement, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-2 text-xs text-text-secondary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
