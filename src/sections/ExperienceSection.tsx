import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-navy/15">
          <div>
            <span className="font-mono text-xs font-bold text-navy/70 tracking-widest uppercase">
              05 // INDUSTRY EXPERIENCE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy mt-1">
              Experience
            </h2>
          </div>
          <p className="text-sm font-sans text-navy/70 max-w-md">
            Applied industry experience developing AI solutions, data preparation pipelines, and predictive workflows.
          </p>
        </div>

        {/* Experience Ledger Cards */}
        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-navy/20 p-6 sm:p-8 shadow-sm rounded-none"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left: Duration and Company */}
                <div className="md:col-span-4 space-y-2">
                  <span className="inline-block px-3 py-1 bg-yellow text-navy font-mono text-xs font-bold uppercase tracking-wider border border-navy/20">
                    {exp.duration}
                  </span>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy uppercase tracking-tight mt-2">
                    {exp.organization}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 font-mono text-xs text-navy/80">
                    <Briefcase className="w-3.5 h-3.5 text-navy" />
                    <span className="font-bold">{exp.role}</span>
                  </div>

                  {exp.credentialUrl && (
                    <div className="pt-3">
                      <a
                        href={exp.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy text-white hover:bg-navy-dark transition-colors font-mono text-xs font-bold uppercase tracking-wider"
                      >
                        <span>View Certificate</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right: Responsibilities and Technologies */}
                <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-navy/15 pt-4 md:pt-0 md:pl-8 space-y-5">
                  <div>
                    <span className="font-mono text-[10px] text-navy/60 uppercase font-bold tracking-wider block mb-2">
                      KEY DELIVERABLES & IMPACT:
                    </span>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-navy/85 font-sans leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <span className="font-mono text-[10px] text-navy/60 uppercase font-bold tracking-wider block mb-2">
                      TECHNOLOGIES APPLIED:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#FAF9F6] border border-navy/15 text-navy font-mono text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
