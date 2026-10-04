import React from 'react';

const baseUrl = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? (import.meta.env.BASE_URL || '/')
  : `${import.meta.env.BASE_URL}/`;

export const AboutCutoutPortrait: React.FC = () => {
  return (
    <div className="relative inline-flex flex-col items-center select-none group w-full">
      
      {/* Freestanding Transparent Cutout Silhouette (Zero background boxes) */}
      <div className="relative flex items-start justify-center w-full">
        <picture className="relative z-10 flex items-start justify-center">
          <source type="image/webp" srcSet={`${baseUrl}shashikant-about-cutout.webp?v=2`} />
          <img
            src={`${baseUrl}shashikant-about-cutout.png?v=2`}
            alt="Shashikant Raj - Candidate Profile"
            width={579}
            height={1161}
            loading="eager"
            decoding="sync"
            className="w-auto h-auto max-w-[90vw] sm:max-w-[420px] md:max-w-[460px] lg:max-w-none max-h-[480px] sm:max-h-[530px] lg:max-h-[560px] xl:max-h-[590px] object-contain drop-shadow-[0_12px_28px_rgba(11,37,69,0.16)] select-none transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </picture>
      </div>

      {/* Specimen Caption directly below with compact top margin */}
      <div className="mt-2 text-center font-mono text-xs text-navy/70 uppercase tracking-wider font-semibold">
        FIG. 2.0 · SHASHIKANT RAJ (CANDIDATE PROFILE)
      </div>

    </div>
  );
};

export default AboutCutoutPortrait;
