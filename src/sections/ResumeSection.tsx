import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { FileDown, ExternalLink } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const { resume } = portfolioData;

  return (
    <section id="resume" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-navy/15">
          <div>
            <span className="font-mono text-xs font-bold text-navy/70 tracking-widest uppercase">
              05 // CURRICULUM VITAE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy mt-1">
              Resume
            </h2>
          </div>
          <p className="text-sm font-sans text-navy/70 max-w-md">
            Complete formal document containing academic milestones, technical projects, and contact credentials.
          </p>
        </div>

        {/* Flat White Surface Card */}
        <div className="bg-white border-2 border-navy p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="w-2.5 h-2.5 bg-yellow border border-navy inline-block" />
                <span className="font-bold text-navy uppercase tracking-wider">
                  VERIFIED DOCUMENT: {resume.filename}
                </span>
                <span className="text-navy/50">·</span>
                <span className="px-2 py-0.5 bg-yellow/20 text-navy font-bold text-[10px] border border-navy/20">
                  ORIGINAL PDF
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-navy uppercase tracking-tight">
                Review the Full Record
              </h3>

              <p className="text-sm sm:text-base text-navy/85 font-sans leading-relaxed">
                Everything presented on this page originates directly from this curriculum vitae. Includes verified undergraduate coursework at Jagannath University, technical toolkits, analytical projects, and internship credentials.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={resume.path}
                download={resume.filename}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy text-white hover:bg-navy-dark transition-colors font-mono text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <a
                href={resume.path}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors font-mono text-xs font-bold uppercase tracking-wider"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View in Browser</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
