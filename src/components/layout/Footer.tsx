import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal, social } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#FAF9F6] border-t-2 border-navy text-navy font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-navy/15">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow border border-navy inline-block" />
              <span className="font-display text-xl font-bold text-navy uppercase tracking-tight">
                {personal.brand}
              </span>
              <span className="text-navy/50">·</span>
              <span className="text-navy/80 font-bold uppercase">{personal.name}</span>
            </div>
            <p className="mt-1 text-navy/70 text-xs font-sans">
              B.Tech Computer Science · Data Analytics · Python · SQL · Power BI
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {social.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target={s.platform !== 'email' ? '_blank' : undefined}
                rel={s.platform !== 'email' ? 'noopener noreferrer me' : undefined}
                className="group relative inline-flex items-center gap-1 py-1 text-navy/75 hover:text-navy font-mono text-xs font-semibold tracking-wider transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="relative">
                  {s.label}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-navy group-hover:w-full transition-all duration-300 ease-out" />
                </span>
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-yellow-hover shrink-0" />
              </a>
            ))}
            <span className="text-navy/30 hidden sm:inline">|</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-navy bg-white text-navy hover:bg-navy hover:text-white transition-colors font-mono font-bold text-xs uppercase tracking-wider"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-navy/70">
          <span>&copy; 2026 Shashikant Raj. All rights reserved.</span>
          <span className="font-semibold uppercase text-navy">SASHIBITCODE // DATA ANALYST PORTFOLIO</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
