import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export const AboutSection: React.FC = () => {
  const { education } = portfolioData;
  const photo = portfolioData.photos.secondary;
  const edu = education[0];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-navy/15">
          <div>
            <span className="font-mono text-xs font-bold text-navy/70 tracking-widest uppercase">
              03 // BACKGROUND
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy mt-1">
              About Me
            </h2>
          </div>
          <p className="text-sm font-sans text-navy/70 max-w-md">
            Candidate profile, methodology, and verified academic record from Jagannath University, Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Photo 2 framed in a rectangle with a thin navy offset border */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative inline-block select-none">
              
              {/* Thin Navy Offset Border (with light yellow fill) behind the rectangle */}
              <div
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-full h-full bg-yellow/20 border-2 border-navy z-0"
                aria-hidden="true"
              />

              {/* Main Photo 2 Rectangular Frame with Thin Navy Border */}
              <div className="relative z-10 w-[260px] sm:w-[300px] md:w-[330px] lg:w-[360px] aspect-[3/4] overflow-hidden border-2 border-navy bg-white p-2">
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`
                      ${photo.variants.avif480} 480w,
                      ${photo.variants.avif768} 768w,
                      ${photo.variants.avifFull} 1086w
                    `}
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 330px, 360px"
                  />
                  <source
                    type="image/webp"
                    srcSet={`
                      ${photo.variants.webp480} 480w,
                      ${photo.variants.webp768} 768w,
                      ${photo.variants.webpFull} 1086w
                    `}
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 330px, 360px"
                  />
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="eager"
                    decoding="sync"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: '50% 25%',
                    }}
                  />
                </picture>
              </div>

              {/* Specimen Caption */}
              <div className="mt-3 text-center font-mono text-[11px] text-navy/70 uppercase tracking-wider">
                Fig. 2.0 · Shashikant Raj (Transit Concourse)
              </div>
            </div>
          </div>

          {/* Right Column: Short First-Person Text from Resume */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct quote / methodology highlight */}
            <div className="p-5 border-l-4 border-yellow bg-white border border-navy/15 text-navy font-sans text-base leading-relaxed shadow-sm">
              "Most business data is fragmented. My work focuses on establishing what the data actually proves through rigorous SQL validation and clear dashboards, so teams make decisions backed by verifiable evidence."
            </div>

            {/* First-person narrative paragraphs */}
            <div className="space-y-4 text-base text-navy/85 leading-relaxed font-sans">
              <p>
                I am a <strong>Computer Science &amp; Engineering</strong> student at <strong>Jagannath University, Jaipur</strong>, targeting Data Analyst and Business Intelligence roles. My coursework and project practice center on practical data manipulation with Python, SQL, and Power BI.
              </p>
              <p>
                Through projects such as retail sales analysis on $2.29M in transaction volume and IPL sports telemetry, I've developed repeatable workflows for cleaning messy datasets, writing aggregation queries, and building dashboards that present insights clearly to non-technical stakeholders.
              </p>
            </div>

            {/* Quick Education Summary Card */}
            <div className="mt-6 p-5 bg-white border border-navy/20 shadow-sm font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-navy/15 text-navy font-bold">
                <span>[ACADEMIC STATUS]</span>
                <span className="text-yellow-hover font-bold">{edu.duration}</span>
              </div>
              <div className="mt-3 space-y-2 text-navy/80 text-[11px]">
                <div>
                  <span className="text-navy/50 block text-[10px] uppercase font-bold">PROGRAM:</span>
                  <span className="font-semibold text-navy text-xs">{edu.degree}</span>
                </div>
                <div>
                  <span className="text-navy/50 block text-[10px] uppercase font-bold">INSTITUTION:</span>
                  <span className="text-navy">{edu.institution}, {edu.location}</span>
                </div>
                <div>
                  <span className="text-navy/50 block text-[10px] uppercase font-bold">CORE TOPICS:</span>
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
