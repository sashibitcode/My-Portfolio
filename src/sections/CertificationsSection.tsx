import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Award, CheckCircle2, Eye, Maximize2, X, ExternalLink } from 'lucide-react';
import { CertificationItem } from '@/data/types';

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  // Close modal on Escape key and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-navy/15">
          <div>
            <span className="font-mono text-xs font-bold text-navy/70 tracking-wider">
              05 // Accreditations
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy mt-1">
              Certifications
            </h2>
          </div>
          <p className="text-sm font-sans text-navy/70 max-w-md">
            Verified technical credentials and professional accreditations directly inspectable on page.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between p-5 sm:p-6 bg-white border border-navy/20 shadow-sm rounded-none hover:border-navy transition-all duration-200 group"
            >
              <div className="flex flex-col flex-1">
                {/* Top index and date */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-navy/10 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-yellow border border-navy inline-block" />
                    <span className="font-bold text-navy/60">CERT 0{idx + 1}</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#FAF9F6] text-navy/70 font-mono text-xs font-semibold tracking-wider uppercase border border-navy/15">
                    {cert.date}
                  </span>
                </div>

                {/* Direct Certificate Preview Image */}
                {cert.imageUrl && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="mb-4 relative border-2 border-navy/15 bg-[#FAF9F6] cursor-pointer overflow-hidden group/thumb"
                    title="Click to view full certificate"
                  >
                    <img
                      src={cert.imageUrl}
                      alt={`${cert.title} Certificate`}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-contain p-2 bg-white transition-transform duration-300 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover/thumb:bg-navy/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/thumb:opacity-100 transition-opacity px-3 py-1.5 bg-navy text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-navy/70 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5 text-navy flex-shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy uppercase tracking-tight group-hover:text-navy-muted transition-colors leading-tight">
                  {cert.title}
                </h3>

                {/* Description from resume */}
                {cert.description && (
                  <p className="mt-3 text-xs sm:text-sm text-navy/80 font-sans leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Verification Status Pill - consistently positioned with mt-auto */}
              <div className="mt-5 pt-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF9F6] border border-navy/15 text-xs font-mono text-navy">
                  <CheckCircle2 className="w-3.5 h-3.5 text-navy" />
                  <span>Verified Credential</span>
                </div>
              </div>

              {/* View Certificate CTA Button - opens modal directly */}
              <div className="mt-6 pt-4 border-t border-navy/10">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 border-2 border-navy bg-navy text-white hover:bg-navy-dark transition-colors font-mono text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-navy/80 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
        >
          <div
            className="bg-white border-2 border-navy max-w-4xl w-full max-h-[95vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b-2 border-navy bg-[#FAF9F6]">
              <div className="pr-4">
                <span className="font-mono text-xs font-bold text-navy/60 uppercase tracking-wider block">
                  {selectedCert.issuer} · {selectedCert.date}
                </span>
                <h3 id="modal-cert-title" className="font-display text-xl sm:text-2xl font-bold text-navy tracking-tight mt-0.5">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
                className="p-2 border-2 border-navy bg-white hover:bg-navy hover:text-white transition-colors text-navy cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Certificate Image Display */}
            <div className="p-4 sm:p-6 overflow-auto bg-[#FAF9F6]/50 flex items-center justify-center flex-1 min-h-[300px]">
              {selectedCert.imageUrl ? (
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain border border-navy/20 shadow-md bg-white"
                />
              ) : (
                <p className="font-mono text-sm text-navy/70">Certificate preview not available.</p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t-2 border-navy bg-white flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-navy/70">
                <CheckCircle2 className="w-4 h-4 text-navy" />
                <span>Verified Accredited Credential</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors font-bold uppercase w-full sm:w-auto"
                >
                  <span>Open Verification Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="inline-flex items-center justify-center px-4 py-2 border-2 border-navy bg-navy text-white hover:bg-navy-dark transition-colors font-bold uppercase w-full sm:w-auto cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default CertificationsSection;
