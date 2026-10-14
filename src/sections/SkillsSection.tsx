import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 pb-4 border-b border-navy/15">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy">
            Technical Skills
          </h2>
        </div>

        {/* Natural Height Grid (No dead whitespace) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {skills.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-navy/20 p-6 sm:p-7 shadow-sm rounded-none flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-navy tracking-tight">
                  {category.name}
                </h3>
                
                <p className="text-xs font-sans text-navy/70 mt-1 mb-5">
                  {category.description}
                </p>

                {/* Plain Tag List without deceptive interactive affordances */}
                <ul className="space-y-2">
                  {category.skills.map((s) => (
                    <li
                      key={s.name}
                      className={`flex items-center justify-between py-2 px-3 border border-navy/10 font-mono text-xs transition-colors ${
                        s.highlight
                          ? 'bg-white font-semibold text-navy border-l-2 border-l-navy'
                          : 'bg-[#FAF9F6] font-normal text-navy/80'
                      }`}
                    >
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accurate count note reflecting all skills in the category */}
              <div className="mt-6 pt-3 border-t border-navy/10 text-right font-mono text-xs text-navy/60">
                {category.skills.length} SKILLS TOTAL
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
