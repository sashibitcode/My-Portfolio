import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Shashikant Raj | Data Analyst | SASHIBITCODE',
  description = 'Official portfolio of Shashikant Raj (sashibitcode), Data Analyst specializing in Python, SQL, Power BI, Exploratory Data Analysis, and Applied ML.',
  canonical = 'https://sashibitcode.vercel.app/',
  ogType = 'website',
  ogImage = 'https://sashibitcode.vercel.app/images/og-image.png',
  jsonLd,
}) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper to update or create meta tag
    const setMetaTag = (attribute: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    if (description) {
      setMetaTag('name', 'description', description);
    }
    if (canonical) {
      setLinkTag('canonical', canonical);
    }

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('name', 'author', 'Shashikant Raj');
    setMetaTag('property', 'og:site_name', 'Shashikant Raj | Data Analyst');
    setMetaTag('property', 'og:locale', 'en_US');

    // 4. Twitter Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Dynamic JSON-LD (if passed)
    if (jsonLd) {
      const scriptId = 'dynamic-json-ld';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, ogType, ogImage, jsonLd]);

  return null;
};
