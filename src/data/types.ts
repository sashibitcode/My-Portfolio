export interface PersonalInfo {
  name: string;
  brand: string;
  title: string;
  roleSubtitle: string;
  location: string;
  email: string;
  phone?: string;
  summary: string;
  storyFragments: {
    keyword: string; // e.g. "DATA", "CODE", "ANALYTICS", "BUILD", "LEARN"
    highlight: string;
    description: string;
  }[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'leetcode' | 'email' | 'instagram';
  label: string;
  url: string;
  handle?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  expectedDate?: string;
  coursework: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    description?: string;
    highlight?: boolean;
    relatedProjects?: string[]; // Project IDs
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  accentColor?: string;
  sqlQuery?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  description?: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  credentialUrl?: string;
  technologies: string[];
  responsibilities: string[];
}

export interface ResponsivePhotoVariants {
  webp480: string;
  webp768: string;
  webpFull: string;
  avif480: string;
  avif768: string;
  avifFull: string;
  fallbackJpg: string;
}

export interface PhotoConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  variants: ResponsivePhotoVariants;
  focalPoint: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  aspectRatio: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLink[];
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  resume: {
    filename: string;
    path: string;
    label: string;
    updatedDate: string;
  };
  photos: {
    primary: PhotoConfig;
    secondary: PhotoConfig;
  };
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    ogImage: string;
    keywords: string[];
  };
}
