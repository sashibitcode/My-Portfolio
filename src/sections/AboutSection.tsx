import React from 'react';
import { AboutCutoutPortrait } from '@/components/photos/AboutCutoutPortrait';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-8 sm:py-10 lg:py-12 lg:min-h-[calc(100vh-4rem)] lg:flex lg:flex-col lg:justify-center border-b border-navy/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8 pb-3 border-b border-navy/15">
          <div>
            <span className="font-mono text-xs font-bold text-navy/70 tracking-widest uppercase">
              01 // BACKGROUND
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-bold uppercase tracking-tight text-navy mt-0.5">
              About Me
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-sans text-navy/70 max-w-md">
            Candidate profile, methodology, and verified academic record from Jagannath University, Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Freestanding Transparent Cutout Photo */}
          <div className="lg:col-span-5 flex justify-center w-full self-center lg:self-end">
            <AboutCutoutPortrait />
          </div>

          {/* Right Column: Narrative & Compact Specimen Metadata */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Direct quote / methodology highlight */}
            <div className="p-3.5 sm:p-4 border-l-4 border-yellow bg-white border border-navy/15 text-navy font-sans text-xs sm:text-sm leading-relaxed shadow-sm">
              "Most business data is fragmented. My work focuses on establishing what the data actually proves through rigorous SQL validation and clear dashboards, so teams make decisions backed by verifiable evidence."
            </div>

            {/* First-person narrative paragraphs */}
            <div className="space-y-2.5 text-xs sm:text-sm text-navy/85 leading-relaxed font-sans">
              <p>
                I am a <strong>Computer Science &amp; Engineering</strong> student at <strong>Jagannath University, Jaipur</strong>, targeting Data Analyst and Business Intelligence roles with practical data manipulation in Python, SQL, and Power BI.
              </p>
              <p>
                Through retail telemetry across $2.29M in transaction volume and IPL sports datasets, I build reliable pipelines to cleanse messy data, craft aggregation queries, and design executive dashboards that make insights immediately actionable.
              </p>
            </div>

            {/* 3-Pillar Compact Specimen Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 bg-white border border-navy/20 shadow-sm font-mono text-xs">
                <span className="text-navy/50 block text-[9px] uppercase font-bold tracking-wider">[DOMAIN]</span>
                <span className="font-bold text-navy text-xs mt-0.5 block">Data Analytics &amp; BI</span>
              </div>
              <div className="p-3 bg-white border border-navy/20 shadow-sm font-mono text-xs">
                <span className="text-navy/50 block text-[9px] uppercase font-bold tracking-wider">[CORE STACK]</span>
                <span className="font-bold text-navy text-xs mt-0.5 block">SQL · Python · Power BI</span>
              </div>
              <div className="p-3 bg-white border border-navy/20 shadow-sm font-mono text-xs">
                <span className="text-navy/50 block text-[9px] uppercase font-bold tracking-wider">[STATUS]</span>
                <span className="font-bold text-yellow-hover text-xs mt-0.5 block">Open to Full-Time Roles</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
