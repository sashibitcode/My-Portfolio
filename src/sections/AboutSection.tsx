import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { AboutCutoutPortrait } from '@/components/photos/AboutCutoutPortrait';

export const AboutSection: React.FC = () => {
  const { education } = portfolioData;
  const edu = education[0];

  return (
    <section id="about" className="py-8 md:py-12 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-4 md:mb-5 pb-2.5 border-b border-navy/15">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Freestanding Transparent Cutout Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-start w-full">
            <AboutCutoutPortrait />
          </div>

          {/* Right Column: Short First-Person Text from Resume */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Direct quote / methodology highlight */}
            <div className="p-4 sm:p-4.5 border-l-4 border-yellow bg-white border border-navy/15 text-navy font-sans text-sm sm:text-base leading-relaxed shadow-sm">
              "Most business data is fragmented. My work focuses on establishing what the data actually proves through rigorous SQL validation and clear dashboards, so teams make decisions backed by verifiable evidence."
            </div>

            {/* First-person narrative paragraphs */}
            <div className="space-y-3 text-sm sm:text-base text-navy/85 leading-relaxed font-sans">
              <p>
                I am a <strong>Computer Science &amp; Engineering</strong> student at <strong>Jagannath University, Jaipur</strong>, targeting Data Analyst and Business Intelligence roles. My coursework and project practice center on practical data manipulation with Python, SQL, and Power BI.
              </p>
              <p>
                Through projects such as retail sales analysis on $2.29M in transaction volume and IPL sports telemetry, I've developed repeatable workflows for cleaning messy datasets, writing aggregation queries, and building dashboards that present insights clearly to non-technical stakeholders.
              </p>
            </div>

            {/* Quick Education Summary Card */}
            <div className="mt-3 p-4 sm:p-5 bg-white border border-navy/20 shadow-sm w-full">
              <div className="flex items-center justify-between pb-2 border-b border-navy/15 text-xs">
                <span className="font-mono font-bold text-navy tracking-wider">Academic Status</span>
                <span className="font-mono text-navy/70 font-semibold">{edu.duration}</span>
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-navy/85">
                <div>
                  <span className="text-navy/60 block text-xs uppercase font-mono font-semibold tracking-wider">Program:</span>
                  <span className="font-semibold text-navy text-sm">{edu.degree}</span>
                </div>
                <div>
                  <span className="text-navy/60 block text-xs uppercase font-mono font-semibold tracking-wider">Institution:</span>
                  <span className="text-navy">{edu.institution}, {edu.location}</span>
                </div>
                <div className="sm:col-span-2 pt-1 border-t border-navy/10">
                  <span className="text-navy/60 block text-xs uppercase font-mono font-semibold tracking-wider mb-1">Core Topics:</span>
                  <span className="text-navy">{edu.coursework.join(' · ')}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
