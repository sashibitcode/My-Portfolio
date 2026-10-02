import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { DotMatrix } from '@/components/common/DotMatrix';

export const HeroArchPortrait: React.FC = () => {
  const photo = portfolioData.photos.primary;

  return (
    <div className="relative inline-block mx-auto select-none px-4 py-2">
      {/* Subtle Dot Matrix Accent adjacent to the arch (inspired by reference mood) */}
      <div className="absolute -left-6 sm:-left-10 top-12 z-0 hidden sm:block">
        <DotMatrix rows={6} cols={5} dotSize="w-1.5 h-1.5" />
      </div>

      {/* Yellow Arch Shape slightly offset behind */}
      <div
        className="absolute top-5 right-1 sm:top-6 sm:right-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[320px] sm:h-[380px] md:h-[430px] lg:h-[470px] bg-yellow arch-frame border-2 border-navy z-0"
        aria-hidden="true"
      />

      {/* Main Arch-Masked Photo Container (Rounded top, flat bottom) */}
      <div className="relative z-10 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[320px] sm:h-[380px] md:h-[430px] lg:h-[470px] arch-frame overflow-hidden border-2 border-navy bg-white shadow-sm">
        <picture>
          <source
            type="image/avif"
            srcSet={`
              ${photo.variants.avif480} 480w,
              ${photo.variants.avif768} 768w,
              ${photo.variants.avifFull} 1145w
            `}
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
          />
          <source
            type="image/webp"
            srcSet={`
              ${photo.variants.webp480} 480w,
              ${photo.variants.webp768} 768w,
              ${photo.variants.webpFull} 1145w
            `}
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
          />
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover"
            style={{
              objectPosition: '50% 16%',
            }}
          />
        </picture>
      </div>

      {/* Clean specimen indicator */}
      <div className="mt-3 text-center font-mono text-[11px] text-navy/70 uppercase tracking-wider">
        Fig. 1.0 · Shashikant Raj
      </div>
    </div>
  );
};
