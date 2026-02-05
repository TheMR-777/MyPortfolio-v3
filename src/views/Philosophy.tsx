import { motion } from 'framer-motion';
import { Lightbulb, Compass, Target, Layers, Sparkles, Infinity, BookOpen } from 'lucide-react';

const Philosophy = () => {
  const principles = [
    {
      icon: Compass,
      title: 'Question the Status Quo',
      description: 'I don\'t accept "because that\'s how it\'s done." I question existing implementations and seek deeper understanding.',
    },
    {
      icon: Layers,
      title: 'Simplicity as Sophistication',
      description: 'True mastery shows in making complex things simple. I eliminate unnecessary complexity and find elegant paths.',
    },
    {
      icon: Target,
      title: 'Optimization Instinct',
      description: 'I naturally spot inefficiencies—where small changes yield disproportionate gains.',
    },
    {
      icon: Lightbulb,
      title: 'Domain-Specific Solutions',
      description: 'Each problem deserves a solution tailored to its unique constraints, not forced generic templates.',
    },
    {
      icon: Sparkles,
      title: 'Continuous Betterment',
      description: 'Making things genuinely better, not just different. Seeking meaningful improvements that create lasting value.',
    },
    {
      icon: BookOpen,
      title: 'Philosophical Depth',
      description: 'I think deeply about the "why" behind decisions. Understanding systems holistically, building intuition over recipes.',
    },
  ];

  const journeySteps = [
    {
      title: 'The Journey Over the Goal',
      content: 'Whether architecting a comprehensive system or spending hours refining a Fibonacci sequence, the experience is the same: an insatiable curiosity that drives me to discover one more micro-optimization, one more elegant simplification.',
      highlight: 'The destination is just a waypoint—the real reward is the infinite richness of the journey itself.',
    },
    {
      title: 'The Beauty in Fundamentals',
      content: 'I vividly remember iterating on fundamental algorithms for far longer than anyone would consider "reasonable"—not because I had to, but because each iteration revealed something new. A zero-branch Fibonacci by seeding with −1 and 1. A sieve optimization that shaved microseconds.',
      highlight: 'These aren\'t just technical wins; they\'re discoveries.',
    },
    {
      title: 'Succeeding Within the Failures',
      content: 'Sometimes the original goal remains out of reach—but along the way, I stumble upon something profound. A technique. An insight. A connection I hadn\'t anticipated.',
      highlight: 'Failure isn\'t an endpoint—it\'s a checkpoint where unexpected treasures reveal themselves.',
    },
  ];

  return (
    <div className="philosophy-hero min-h-full">
      <div className="max-w-4xl mx-auto px-8 lg:px-12 pt-16 pb-24 relative">
        {/* Continuous Vertical Anchor Line */}
        <div className="absolute left-8 lg:left-12 top-0 bottom-0 w-px bg-stroke/50 hidden md:block" />

        {/* Hero Section */}
        <section className="relative pb-16 pl-0 md:pl-12">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-pulse-subtle pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-accent hidden md:block" />
              <span className="text-accent text-sm font-medium tracking-wide uppercase">
                Philosophy
              </span>
            </div>

            {/* Main Quote */}
            <h1 className="philosophy-quote text-4xl lg:text-5xl text-text-primary mb-8 font-light tracking-tight">
              The Joy of{' '}
              <span className="font-normal text-text-primary relative inline-block">
                Discovery
                <span className="absolute bottom-0.5 left-0 right-0 h-2.5 bg-accent/10 -z-10 transform -rotate-1" />
              </span>
            </h1>

            {/* Emotional Opening Statement - Refined sizing */}
            <div className="relative">
              {/* Subtle Accent Line */}
              <div className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full bg-gradient-to-b from-accent/70 via-accent/40 to-transparent" />
              
              <p className="pl-5 text-lg lg:text-xl text-text-secondary font-light leading-relaxed">
                The scale of the goal has{' '}
                <span className="text-text-primary">never</span>{' '}
                mattered to me—what matters is the{' '}
                <em className="not-italic font-medium text-accent">journey</em>{' '}
                of getting there.
              </p>
            </div>
          </motion.div>
        </section>

        {/* The Driving Force - Enhanced Card */}
        <section className="py-10 pl-0 md:pl-12 border-l-0 md:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative p-6 lg:p-8 rounded-xl bg-layer border border-stroke">
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              
              <div className="flex gap-5">
                {/* Left accent element */}
                <div className="hidden sm:flex flex-col items-center pt-1">
                  <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex-1 w-px bg-gradient-to-b from-accent/20 to-transparent mt-3" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                    Whether I'm architecting a comprehensive system like the{' '}
                    <span className="text-text-primary font-medium">Employee Monitoring Suite</span>, or spending 
                    hours refining something as "simple" as a prime number generation algorithm, the 
                    experience is the same: an{' '}
                    <span className="text-accent font-medium">insatiable curiosity</span>{' '}
                    that drives me to discover one more micro-optimization, one more elegant 
                    simplification, one more insight I hadn't seen before.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Journey Steps */}
        <section className="py-12 pl-0 md:pl-12 border-l-0 md:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10 -ml-[19px] md:-ml-[25px]">
               <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden md:block" />
               <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wide">
                The Driving Force
              </h2>
            </div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="space-y-4">
                    {/* Step Number & Title */}
                    <div className="flex items-center gap-4">
                      <span className="text-accent/60 text-sm font-mono">0{index + 1}</span>
                      <h3 className="text-lg font-semibold text-text-primary">
                         {step.title}
                      </h3>
                    </div>
                    
                    {/* Content */}
                    <p className="text-text-secondary leading-relaxed pl-10">
                      {step.content}
                    </p>
                    
                    {/* Highlighted Quote */}
                    <div className="ml-10 mt-4 pl-4 border-l-2 border-accent/30 py-1">
                      <p className="text-accent text-sm italic font-medium leading-relaxed">
                        "{step.highlight}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Guiding Principles */}
        <section className="py-12 pl-0 md:pl-12 border-l-0 md:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="flex items-center gap-4 mb-10 -ml-[19px] md:-ml-[25px]">
               <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden md:block" />
               <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wide">
                Guiding Principles
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="principle-card group p-6 rounded-xl bg-layer border border-stroke hover:border-accent/30 hover:bg-layer-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <principle.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="space-y-2 min-w-0">
                      <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Architectural Philosophy */}
        <section className="py-12 pl-0 md:pl-12 border-l-0 md:border-l border-stroke/50">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10 -ml-[19px] md:-ml-[25px]">
               <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-content hidden md:block" />
               <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wide">
                Architectural Philosophy
              </h2>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-layer to-layer/50 border border-stroke">
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                I don't just <em className="text-text-primary not-italic">memorize</em> patterns—I 
                understand them at their core: <span className="text-accent">what problem</span> each 
                pattern solves, <span className="text-accent">how</span> it solves it, and <span className="text-accent">where it falls short</span>.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { label: 'Minimal', desc: 'Every component earns its place' },
                  { label: 'Efficient', desc: 'Performance as first-class citizen' },
                  { label: 'Extendable', desc: 'New features integrate seamlessly' },
                  { label: 'Maintainable', desc: 'Clear separation of concerns' },
                  { label: 'Consistent', desc: 'Deterministic, no surprises' },
                  { label: 'Elegant', desc: 'Thoughtful in every detail' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 py-2 border-b border-stroke/50 last:border-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <div>
                      <span className="text-sm font-medium text-text-primary">{item.label}</span>
                      <span className="text-sm text-text-tertiary"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Closing Quote */}
        <section className="py-20 pl-0 md:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="inline-block p-4 rounded-full bg-layer mb-6">
               <Infinity className="w-6 h-6 text-accent" />
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-text-primary mb-6 font-light">
              "Creating what hasn't been built before,
              <br />
              <em className="text-accent font-normal">one innovation at a time.</em>"
            </blockquote>
            
            <div className="w-12 h-1 bg-accent mx-auto rounded-full opacity-50" />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Philosophy;
