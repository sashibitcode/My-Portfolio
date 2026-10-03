import React from 'react';

const baseUrl = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? (import.meta.env.BASE_URL || '/')
  : `${import.meta.env.BASE_URL}/`;

export const AboutCutoutPortrait: React.FC = () => {
  return (
    <div className="relative inline-flex flex-col items-center select-none group">
      
      {/* Wrapper holding the layered geometric blocks and the cutout silhouette */}
      <div className="relative flex items-end justify-center px-4 pt-4">
        
        {/* Layer 1: Solid Yellow Accent Block offset behind to the right */}
        <div
          className="absolute bottom-0 right-1 sm:right-2 w-[85%] h-[74%] bg-yellow border-2 border-navy z-0 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 shadow-sm"
          aria-hidden="true"
        />

        {/* Layer 2: Tactile notebook canvas block with technical specimen markers */}
        <div
          className="absolute bottom-0 left-1 sm:left-2 w-[88%] h-[78%] bg-white border-2 border-navy z-[1] transition-transform duration-300"
          aria-hidden="true"
        >
          {/* Top metadata stamp */}
          <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between font-mono text-[9px] font-bold text-navy/60 uppercase tracking-widest border-b border-navy/10 pb-1">
            <span>[ SPECIMEN: 02 ]</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow border border-navy" />
              <span>ACTIVE</span>
            </span>
          </div>

          {/* Bottom ledger stamp */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between font-mono text-[9px] text-navy/60 uppercase tracking-wider border-t border-navy/10 pt-1">
            <span>JU JAIPUR</span>
            <span>DATA ANALYST</span>
          </div>
        </div>

        {/* Layer 3: High-Resolution Transparent Cutout Silhouette */}
        <picture className="relative z-10 flex items-end justify-center">
          <source type="image/webp" srcSet={`${baseUrl}shashikant-about-cutout.webp`} />
          <img
            src={`${baseUrl}shashikant-about-cutout.png`}
            alt="Shashikant Raj - Candidate Profile"
            width={1086}
            height={1448}
            loading="lazy"
            decoding="async"
            className="w-auto h-auto max-w-[75vw] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px] max-h-[440px] sm:max-h-[480px] lg:max-h-[520px] object-contain drop-shadow-[0_12px_24px_rgba(11,37,69,0.16)] select-none transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </picture>

      </div>

      {/* Specimen Caption directly below with 16px margin */}
      <div className="mt-4 text-center font-mono text-[11px] text-navy/70 uppercase tracking-wider font-semibold">
        FIG. 2.0 · SHASHIKANT RAJ (CANDIDATE SPECIMEN)
      </div>

    </div>
  );
};

export default AboutCutoutPortrait;
