import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Brain, Award, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolio";

function CgpaRing({ value, total, label }: { value: number; total: number; label: string }) {
  const percentage = (value / total) * 100;
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        {/* SVG Ring */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="var(--stroke-card)"
            strokeWidth="4"
          />
          {/* Progress arc */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-baseline gap-0.5">
            <span className="text-2xl font-semibold text-accent tabular-nums">{value}</span>
          </div>
          <span className="text-[10px] text-text-tertiary mt-0.5">/ {total}</span>
        </div>
      </div>
      <span className="text-[10px] text-text-tertiary uppercase tracking-wider mt-2">{label}</span>
    </div>
  );
}

export function Skills() {
  const { skills, certifications, education } = portfolioData;

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

        <div className="flex flex-col md:flex-row md:items-center gap-8">
          {/* Info */}
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
          
          {/* CGPA & Percentage Visual */}
          <div className="flex items-center justify-center md:justify-start gap-8 flex-wrap">
            <CgpaRing value={3.73} total={4.0} label="CGPA" />
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* Subtle ring for percentage */}
                <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="var(--stroke-card)" strokeWidth="4" />
                  <motion.circle
                    cx="50" cy="50" r="44" fill="none"
                    stroke="var(--text-tertiary)"
                    strokeWidth="4" strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 44}
                    initial={{ strokeDashoffset: 2 * Math.PI * 44 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 44 - (2 * Math.PI * 44 * 84) / 100 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-semibold text-text-primary tabular-nums">84<span className="text-base text-text-tertiary">%</span></span>
                </div>
              </div>
              <span className="text-[10px] text-text-tertiary uppercase tracking-wider mt-2">Percentage</span>
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
