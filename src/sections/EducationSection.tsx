import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-navy/15">
          <div>
            <span className="font-mono text-xs font-bold text-navy/70 tracking-widest uppercase">
              04 // ACADEMICS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy mt-1">
              Education
            </h2>
          </div>
          <p className="text-sm font-sans text-navy/70 max-w-md">
            Undergraduate theoretical coursework and computer science foundation.
          </p>
        </div>

        {/* Education Ledger Cards */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white border border-navy/20 p-6 sm:p-8 shadow-sm rounded-none"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left: Duration and Institution */}
                <div className="md:col-span-4 space-y-2">
                  <span className="inline-block px-3 py-1 bg-yellow text-navy font-mono text-xs font-bold uppercase tracking-wider border border-navy/20">
                    {edu.duration}
                  </span>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy uppercase tracking-tight mt-2">
                    {edu.institution}
                  </h3>
                  
                  <p className="font-mono text-xs text-navy/70">
                    {edu.location}
                  </p>
                </div>

                {/* Right: Degree and Coursework */}
                <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-navy/15 pt-4 md:pt-0 md:pl-8 space-y-4">
                  <div>
                    <span className="font-mono text-[10px] text-navy/60 uppercase font-bold tracking-wider block mb-1">
                      DEGREE PROGRAM:
                    </span>
                    <span className="font-display text-xl sm:text-2xl font-bold text-navy">
                      {edu.degree}
                    </span>
                    <span className="block text-sm text-navy/80 font-sans mt-0.5">
                      Field: {edu.field}
                    </span>
                  </div>

                  <div className="pt-2">
                    <span className="font-mono text-[10px] text-navy/60 uppercase font-bold tracking-wider block mb-2">
                      VERIFIED ACADEMIC COURSEWORK:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-[#FAF9F6] border border-navy/15 text-navy font-mono text-xs font-medium"
                        >
                          {course}
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
