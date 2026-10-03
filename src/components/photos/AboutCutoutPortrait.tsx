import React from 'react';

const baseUrl = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? (import.meta.env.BASE_URL || '/')
  : `${import.meta.env.BASE_URL}/`;

export const AboutCutoutPortrait: React.FC = () => {
  return (
    <div className="relative inline-flex flex-col items-center select-none group w-full">
      
      {/* Freestanding Transparent Cutout Silhouette (Zero background boxes) */}
      <div className="relative flex items-end justify-center w-full">
        <picture className="relative z-10 flex items-end justify-center">
          <source type="image/webp" srcSet={`${baseUrl}shashikant-about-cutout.webp`} />
          <img
            src={`${baseUrl}shashikant-about-cutout.png`}
            alt="Shashikant Raj - Candidate Profile"
            width={1086}
            height={1448}
            loading="lazy"
            decoding="async"
            className="w-auto h-auto max-w-[85vw] sm:max-w-[340px] md:max-w-[380px] lg:max-w-none max-h-[320px] sm:max-h-[360px] md:max-h-[380px] lg:max-h-[410px] xl:max-h-[440px] object-contain drop-shadow-[0_12px_24px_rgba(11,37,69,0.16)] select-none transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </picture>
      </div>

      {/* Specimen Caption directly below with compact top margin */}
      <div className="mt-2.5 text-center font-mono text-[10px] sm:text-[11px] text-navy/70 uppercase tracking-wider font-semibold">
        FIG. 2.0 · SHASHIKANT RAJ (CANDIDATE PROFILE)
      </div>

    </div>
  );
};

export default AboutCutoutPortrait;
