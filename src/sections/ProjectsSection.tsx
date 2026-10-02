import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { GithubIcon } from '@/components/common/Icons';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-navy/15">
          <div>
            <span className="font-mono text-xs font-bold text-navy/70 tracking-widest uppercase">
              01 // PORTFOLIO
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy mt-1">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm font-sans text-navy/70 max-w-md">
            Verified analytics workflows covering retail metrics, sports statistics, and epidemiological time-series data.
          </p>
        </div>

        {/* Flat White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-7 bg-white border border-navy/20 shadow-sm rounded-none hover:border-navy transition-colors duration-200 group"
            >
              <div>
                {/* Top index and category */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-navy/10 font-mono text-xs">
                  <span className="font-bold text-navy/60">0{idx + 1}</span>
                  <span className="px-2 py-0.5 bg-yellow/20 text-navy font-semibold text-[10px] tracking-wider uppercase border border-navy/10">
                    {project.category}
                  </span>
                </div>

                {/* Project Name */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy uppercase tracking-tight group-hover:text-navy-muted transition-colors">
                  {project.title}
                </h3>

                {/* 2-Line Plain Description from Resume */}
                <div className="mt-3 space-y-1.5 text-sm text-navy/80 font-sans leading-relaxed">
                  <p>{project.bullets[0]}</p>
                  <p>{project.bullets[1]}</p>
                </div>

                {/* Tools */}
                <div className="mt-6 pt-4 border-t border-navy/10">
                  <span className="block font-mono text-[10px] text-navy/60 uppercase font-bold tracking-wider mb-2">
                    TECHNOLOGIES:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 bg-[#FAF9F6] border border-navy/15 text-navy font-mono text-[11px] font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* GitHub Link CTA */}
              <div className="mt-8 pt-4 border-t border-navy/10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-navy text-white hover:bg-navy-dark transition-colors font-mono text-xs font-bold uppercase tracking-wider"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
