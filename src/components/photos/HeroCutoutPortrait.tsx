import React from 'react';
import { DotMatrix } from '@/components/common/DotMatrix';

const baseUrl = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? (import.meta.env.BASE_URL || '/')
  : `${import.meta.env.BASE_URL}/`;

export const HeroCutoutPortrait: React.FC = () => {
  return (
    <div className="relative inline-flex flex-col items-center select-none animate-hero-cutout">
      {/* Subtle Dot Matrix Accent at left-top (matching original design aesthetic) */}
      <div className="absolute -left-6 sm:-left-10 top-6 z-0 hidden sm:block pointer-events-none">
        <DotMatrix rows={6} cols={5} dotSize="w-1.5 h-1.5" />
      </div>

      {/* Frame wrapper holding solid yellow block and the cutout */}
      <div className="relative flex items-end justify-center">
        {/* Solid Yellow Block behind photo, slightly smaller, aligned to bottom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[84%] h-[72%] bg-yellow border-2 border-navy z-0"
          aria-hidden="true"
        />

        {/* High-Precision Transparent Cutout Image */}
        <picture className="relative z-10 flex items-end justify-center">
          <source type="image/webp" srcSet={`${baseUrl}shashikant-cutout.webp`} />
          <img
            src={`${baseUrl}shashikant-cutout.png`}
            alt="Shashikant Raj, Data Analyst"
            width={1145}
            height={1374}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="w-auto h-auto max-w-[80vw] sm:max-w-[420px] md:max-w-[460px] lg:max-w-none max-h-[420px] sm:max-h-[480px] lg:max-h-[580px] xl:max-h-[620px] object-contain drop-shadow-sm select-none"
          />
        </picture>
      </div>
    </div>
  );
};

export default HeroCutoutPortrait;
