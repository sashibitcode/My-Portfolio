import React from 'react';
import { SEO } from '@/components/common/SEO';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { AboutSection } from '@/sections/AboutSection';
import { EducationSection } from '@/sections/EducationSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { CertificationsSection } from '@/sections/CertificationsSection';
import { ResumeSection } from '@/sections/ResumeSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export const HomePage: React.FC = () => {
  const sectionIds = [
    'home',
    'about',
    'skills',
    'projects',
    'experience',
    'certifications',
    'education',
    'resume',
    'contact',
  ];

  const activeSection = useScrollSpy(sectionIds, 80);

  return (
    <div className="relative min-h-screen bg-notebook-grid text-navy font-sans selection:bg-navy selection:text-white">
      <SEO
        title="Shashikant Raj | Data Analyst | SASHIBITCODE"
        description="Official portfolio of Shashikant Raj (sashibitcode), Data Analyst specializing in Python, SQL, Power BI, Exploratory Data Analysis, and Applied ML."
        canonical="https://sashibitcode.vercel.app/"
      />
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 px-4 py-2 border-2 border-navy bg-yellow text-navy font-bold font-mono text-xs shadow-md"
      >
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Semantic Region with exact requested section order */}
      <main id="main-content" role="main" aria-label="Portfolio Main Content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
