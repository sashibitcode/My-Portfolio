import React, { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 64;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/95 border-b border-navy/15 backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Left */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
          aria-label="SASHIBITCODE - Back to top"
        >
          <span className="w-3 h-3 bg-yellow border border-navy inline-block" />
          <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-navy uppercase group-hover:text-yellow-hover transition-colors">
            {portfolioData.personal.brand}
          </span>
        </button>

        {/* Desktop Nav Links Right */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-navy font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-yellow'
                    : 'text-navy/80 hover:text-navy hover:underline underline-offset-4'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <a
            href={portfolioData.resume.path}
            download={portfolioData.resume.filename}
            className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-navy text-navy font-bold text-xs uppercase tracking-wider hover:bg-navy hover:text-white transition-colors rounded-none"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 border border-navy text-navy bg-white hover:bg-yellow transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-navy bg-[#FAF9F6] p-6 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left font-display text-2xl font-bold text-navy hover:text-yellow uppercase tracking-wide py-1"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-navy/20">
            <a
              href={portfolioData.resume.path}
              download={portfolioData.resume.filename}
              className="flex items-center justify-center gap-2 w-full py-3 bg-navy text-white font-bold text-sm uppercase tracking-wider hover:bg-navy-dark"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
