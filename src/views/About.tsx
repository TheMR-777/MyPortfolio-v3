import { motion } from "framer-motion";
import { 
  MapPin, Calendar, Languages, GraduationCap, 
  Phone, Mail, ExternalLink, Sparkles,
  Telescope, Atom, Brain
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function About() {
  const { personal, journey, publications, nullbyteArticles } = portfolioData;

  const interestIcons = {
    Astronomy: Telescope,
    Physics: Atom,
    Psychology: Brain
  };

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
          About Me
        </h1>
        <p className="text-sm text-text-secondary">
          A lifelong journey of innovation and engineering excellence
        </p>
      </motion.div>

      {/* Profile Section */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 p-6 rounded-xl bg-layer border border-stroke"
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-stroke group-hover:border-accent/30 transition-colors">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider">Location</p>
                <p className="text-sm text-text-primary">{personal.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                <Calendar className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider">Born</p>
                <p className="text-sm text-text-primary">{personal.dob}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                <Languages className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider">Languages</p>
                <p className="text-sm text-text-primary">English (IELTS 7.5)</p>
                <p className="text-xs text-text-tertiary">Urdu (Native)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider">Education</p>
                <p className="text-sm text-text-primary">BS Computer Science</p>
                <p className="text-xs text-text-tertiary">CGPA: 3.73/4.0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-6 pt-5 border-t border-stroke flex flex-wrap gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-layer-active border border-stroke text-sm text-text-secondary hover:text-accent hover:border-stroke-hover transition-colors"
          >
            <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
            {personal.email}
          </a>
          <a
            href={`tel:${personal.phone}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-layer-active border border-stroke text-sm text-text-secondary hover:text-accent hover:border-stroke-hover transition-colors"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
            {personal.phone}
          </a>
        </div>
      </motion.section>

      {/* About Summary */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 p-6 rounded-xl bg-layer border border-stroke"
      >
        <p className="text-sm text-text-secondary leading-relaxed">
          {personal.about}
        </p>
      </motion.section>

      {/* Journey Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <h2 className="text-lg font-semibold text-text-primary mb-5">
          The Journey
        </h2>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-stroke hidden sm:block" />

          <div className="space-y-4 sm:space-y-6">
            {Object.values(journey).map((phase) => (
              <div key={phase.title} className="relative pl-0 sm:pl-12">
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-[15px] top-2 w-2.5 h-2.5 rounded-full bg-accent border-2 border-content hidden sm:block" />

                <div className="p-5 rounded-xl bg-layer border border-stroke">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-sm font-medium text-text-primary">
                      {phase.title}
                    </h3>
                    <span className="text-[10px] text-text-tertiary whitespace-nowrap">
                      {phase.period}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Beyond Engineering */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.5} />
          <h2 className="text-lg font-semibold text-text-primary">
            Beyond Engineering
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {personal.interests.map((interest) => {
            const Icon = interestIcons[interest.name as keyof typeof interestIcons] || Sparkles;
            return (
              <div
                key={interest.name}
                className="p-5 rounded-xl bg-layer border border-stroke"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium text-text-primary mb-2">
                  {interest.name}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Publications */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <h2 className="text-lg font-semibold text-text-primary mb-5">
          Research Publications
        </h2>

        <div className="space-y-3">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="p-5 rounded-xl bg-layer border border-stroke"
            >
              <h3 className="text-sm font-medium text-text-primary mb-1">
                {pub.title}
              </h3>
              <p className="text-xs text-text-tertiary mb-2">
                {pub.authors}
              </p>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-accent">{pub.journal}</span>
                <span className="text-text-disabled">{pub.volume}</span>
                <span className="text-text-disabled">{pub.year}</span>
              </div>
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-xs text-accent hover:text-accent-light transition-colors"
                >
                  DOI: {pub.doi}
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Security Research */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-lg font-semibold text-text-primary mb-5">
          Security Research (Null Byte)
        </h2>

        <div className="p-5 rounded-xl bg-layer border border-stroke">
          <p className="text-xs text-text-secondary mb-4">
            Published security research articles as <span className="text-accent font-medium">H4ck3R_777</span> on Null Byte, 
            with the second most-read article on the platform during 2018-2020.
          </p>
          <div className="space-y-2">
            {nullbyteArticles.slice(0, 3).map((article) => (
              <a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 p-3 rounded-lg bg-layer-active border border-stroke hover:border-stroke-hover transition-colors group"
              >
                <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                  {article.title}
                </span>
                <ExternalLink className="w-3 h-3 text-text-disabled flex-shrink-0 mt-0.5" />
              </a>
            ))}
          </div>
          <a
            href={personal.social.nullbyte}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-xs text-accent hover:text-accent-light transition-colors"
          >
            View all articles on Null Byte
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </motion.section>
    </div>
  );
}
