import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-navy/15">
          <div>
            <span className="font-mono text-xs font-bold text-navy/70 tracking-widest uppercase">
              06 // ACCREDITATIONS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy mt-1">
              Certifications
            </h2>
          </div>
          <p className="text-sm font-sans text-navy/70 max-w-md">
            Verified technical credentials and professional accreditations directly sourced from resume records.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between p-6 sm:p-8 bg-white border border-navy/20 shadow-sm rounded-none hover:border-navy transition-all duration-200 group"
            >
              <div>
                {/* Top index and date */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-navy/10 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-yellow border border-navy inline-block" />
                    <span className="font-bold text-navy/60">CERT 0{idx + 1}</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-yellow/20 text-navy font-bold text-[11px] tracking-wider uppercase border border-navy/20">
                    {cert.date}
                  </span>
                </div>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-navy/70 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5 text-navy flex-shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy uppercase tracking-tight group-hover:text-navy-muted transition-colors leading-tight">
                  {cert.title}
                </h3>

                {/* Description from resume */}
                {cert.description && (
                  <p className="mt-4 text-sm text-navy/80 font-sans leading-relaxed">
                    {cert.description}
                  </p>
                )}

                {/* Verification Status Pill */}
                <div className="mt-5 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF9F6] border border-navy/15 text-[11px] font-mono text-navy">
                  <CheckCircle2 className="w-3.5 h-3.5 text-navy" />
                  <span>Verified Credential</span>
                </div>
              </div>

              {/* View Certificate CTA */}
              <div className="mt-8 pt-4 border-t border-navy/10">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-navy text-white hover:bg-navy-dark transition-colors font-mono text-xs font-bold uppercase tracking-wider shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <span>View Certificate</span>
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
