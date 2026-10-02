import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-navy/15">
          <div>
            <span className="font-mono text-xs font-bold text-navy/70 tracking-widest uppercase">
              02 // CAPABILITIES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy mt-1">
              Technical Skills
            </h2>
          </div>
          <p className="text-sm font-sans text-navy/70 max-w-md">
            Plain categorized inventory of programming languages, analytical frameworks, and data visualization tools.
          </p>
        </div>

        {/* Plain Grouped List (No bars or percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((category, idx) => (
            <div
              key={category.id}
              className="bg-white border border-navy/20 p-6 sm:p-7 shadow-sm rounded-none flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-navy/15">
                  <span className="font-mono text-xs font-bold text-navy/50">
                    GROUP 0{idx + 1}
                  </span>
                  <span className="w-2.5 h-2.5 bg-yellow border border-navy inline-block" />
                </div>

                <h3 className="font-display text-2xl font-bold text-navy uppercase tracking-tight">
                  {category.name}
                </h3>
                
                <p className="text-xs font-sans text-navy/70 mt-1 mb-5">
                  {category.description}
                </p>

                {/* Plain Tag List */}
                <ul className="space-y-2">
                  {category.skills.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between py-1.5 px-3 bg-[#FAF9F6] border border-navy/10 font-mono text-xs text-navy"
                    >
                      <span className="font-medium">{s.name}</span>
                      {s.highlight && (
                        <span className="text-[10px] font-bold text-navy bg-yellow/30 px-1.5 py-0.5 border border-navy/15 uppercase">
                          Core
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Count note */}
              <div className="mt-6 pt-3 border-t border-navy/10 text-right font-mono text-[10px] text-navy/60">
                {category.skills.length} VERIFIED ITEMS
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
