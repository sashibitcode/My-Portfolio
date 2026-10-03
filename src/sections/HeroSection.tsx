import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { HeroCutoutPortrait } from '@/components/photos/HeroCutoutPortrait';
import { FileDown, ArrowDownRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { personal, resume } = portfolioData;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 64;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-20 sm:pt-28 pb-12 lg:pb-16 border-b border-navy/15 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: On mobile, text is first (order-1), photo below (order-2); on desktop, text left, photo right bottom-aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Text Column: Order 1 on mobile, Order 1 on desktop */}
          <div className="order-1 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left mt-2 lg:mt-0 pb-2 lg:pb-6">
            
            {/* Huge Condensed Display Heading */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tight text-navy leading-[0.95] max-w-full">
              {personal.name}
            </h1>

            {/* Navy Label Box: Solid navy rounded rectangle with white text */}
            <div className="mt-3 sm:mt-4 mb-4 sm:mb-6">
              <span className="inline-block bg-navy text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl font-display text-base sm:text-xl font-semibold tracking-widest uppercase shadow-sm">
                DATA ANALYST
              </span>
            </div>

            {/* Plain Sentence from Resume */}
            <p className="text-sm sm:text-base md:text-lg text-navy/85 max-w-xl leading-relaxed font-sans mb-6 sm:mb-8">
              B.Tech Computer Science student at Jagannath University, Jaipur, specializing in Data Analytics, extracting actionable insights with Python, SQL, and Power BI.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 bg-navy text-white hover:bg-navy-dark rounded-md font-bold text-sm uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <a
                href={resume.path}
                download={resume.filename}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 border-2 border-navy text-navy hover:bg-navy hover:text-white rounded-md font-bold text-sm uppercase tracking-wider transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Location & Status Ledger */}
            <div className="mt-8 pt-4 border-t border-navy/15 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-mono text-navy/70">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-yellow border border-navy" />
                <span>{personal.location}</span>
              </span>
              <span>·</span>
              <span className="font-semibold text-navy">Open to Data Analyst Roles</span>
            </div>

          </div>

          {/* Photo Column: Order 2 on mobile (below headline), Order 2 on desktop (on right, bottom-aligned) */}
          <div className="order-2 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end w-full self-end pt-6 lg:pt-0">
            <HeroCutoutPortrait />
          </div>

        </div>

      </div>
    </section>
  );
};
