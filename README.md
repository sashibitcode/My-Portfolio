# SASHIBITCODE — Data Analytics Portfolio
### Official Personal Portfolio for Shashikant Raj

A production-grade, minimal-luxury personal portfolio website for **Shashikant Raj**, brand **SASHIBITCODE**, undergraduate Computer Science student at Jagannath University, Jaipur, targeting **Data Analyst / Data Analytics** roles.

Designed with an **"Analyst's notebook meets terminal"** aesthetic: flat tactile surfaces, hairline borders, zero blur-glass or neon glows, restrained signal orange accent, authentic photography with responsive picture art direction, and 100% verified data sourced directly from the resume.

---

## 🛠️ Tech Stack & Architecture

- **React 19 + TypeScript**: Modern component architecture with strict types and zero hardcoded data in components.
- **Vite 6**: Sub-second Hot Module Replacement (HMR) and optimized Rollup production bundles.
- **Tailwind CSS 3.4**: Clean design system tokens (`paper`, `carbon`, `ink`, `bone`, `signal`) with hairline borders and flat surfaces.
- **Two Curated Fonts**: `Plus Jakarta Sans` for clean editorial headings and `JetBrains Mono` for data tables, SQL blocks, and specimen indices.
- **Framer Motion**: Subtle transitions strictly under 350ms, fully honoring `prefers-reduced-motion`.
- **Sharp (Dev-only)**: Build-time asset pipeline generating responsive AVIF and WebP derivatives (`480w`, `768w`, `1080w+`) with stripped EXIF metadata.
- **Lucide React**: Crisp, accessible SVG iconography.

---

## 📂 Project Structure

```
d:/Shashi/SHASHIKANT RAJ/
├── assets-original/
│   └── photos/
│       ├── Photo 1.png                     # Master original (Hero Portrait)
│       └── Photo 2.png                     # Master original (Editorial Visual)
├── public/
│   ├── assets/
│   │   └── resume/
│   │       └── Shashikant-Raj-Resume.pdf   # Verified PDF for download and preview
│   ├── images/
│   │   ├── profile-primary-*.avif/.webp    # Responsive Hero portrait derivatives
│   │   ├── profile-secondary-*.avif/.webp  # Responsive Editorial photo derivatives
│   │   ├── og-image.png                    # Social preview card (1200x630)
│   │   └── favicon.svg                     # Carbon & signal orange monogram
│   ├── robots.txt                          # Search engine crawlers policy
│   └── sitemap.xml                         # XML sitemap index
├── scripts/
│   └── optimize-images.mjs                 # Sharp-based image optimization pipeline
├── src/
│   ├── animations/
│   │   └── transitions.ts                  # Centralized motion tokens (<350ms)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx                  # Tactile hairline button
│   │   │   ├── Icons.tsx                   # Accessible SVG icons
│   │   │   ├── SectionHeading.tsx          # Monospace index + editorial heading
│   │   │   └── Toast.tsx                   # Ephemeral clipboard confirmation toast
│   │   ├── layout/
│   │   │   ├── Footer.tsx                  # Verified copyright & social links
│   │   │   └── Navbar.tsx                  # Fixed header with mobile drawer & theme switch
│   │   └── photos/
│   │       ├── HeroPortrait.tsx            # Photo 1 tactile specimen frame
│   │       └── EditorialPhoto.tsx          # Photo 2 editorial documentary frame
│   ├── data/
│   │   ├── portfolioData.ts                # SINGLE SOURCE OF TRUTH (All content centralized)
│   │   └── types.ts                        # Strict TypeScript interfaces
│   ├── hooks/
│   │   ├── useReducedMotion.ts             # Media query listener
│   │   ├── useScrollSpy.ts                 # Active section observer
│   │   └── useTheme.ts                     # Dark/light persistence with query param support
│   ├── pages/
│   │   ├── HomePage.tsx                    # Main 9-section semantic layout
│   │   └── NotFoundPage.tsx                # Accessible 404 fallback
│   ├── sections/
│   │   ├── HeroSection.tsx                 # Photo 1, value proposition, resume actions
│   │   ├── AboutSection.tsx                # Photo 2, field notes & academic record
│   │   ├── SkillsSection.tsx               # Tabular technical competencies index & project mapping
│   │   ├── ProjectsSection.tsx             # 3 verified analytics projects with SQL queries
│   │   ├── EducationSection.tsx            # Academic ledger (Jagannath University)
│   │   ├── CertificationsSection.tsx       # Accredited certifications with verification links
│   │   ├── ExperienceSection.tsx           # Industry work log (Knowx Innovations)
│   │   ├── ResumeSection.tsx               # Curriculum vitae specimen with direct PDF actions
│   │   └── ContactSection.tsx              # Honest mailto dispatch & copy-to-clipboard
│   ├── styles/
│   │   └── index.css                       # Hairline borders, palette variables, font tokens
│   ├── App.tsx
│   └── main.tsx
├── index.html                              # SEO metadata, Open Graph, preconnect fonts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 How to Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.
   - To preview Dark mode: `http://localhost:3000/?theme=dark`
   - To preview Light mode: `http://localhost:3000/?theme=light`

---

## 🏗️ How to Build

1. **Compile and bundle for production**:
   ```bash
   npm run build
   ```
   This executes `tsc` (strict TypeScript validation) and `vite build` (Rollup optimizer), outputting production-ready static assets to `dist/`.

2. **Preview production bundle locally**:
   ```bash
   npm run preview
   ```

3. **Re-optimize photo assets (optional)**:
   ```bash
   npm run optimize-images
   ```

---

## 📝 Where to Edit Content

**Rule: ZERO hardcoded text in components.**
All content, project details, skills, experience, education, and links live exclusively in **`src/data/portfolioData.ts`**:

- **Personal Information**: `personal` object (Name, brand, role, bio, location, email, story fragments).
- **Projects**: `projects` array (Title, subtitle, duration, metrics, bullets, technologies, representative SQL queries, and links).
- **Skills**: `skills` array (Category names, descriptions, specific tooling, highlight flags, and associated project IDs).
- **Education**: `education` array (Degree, institution, location, duration, GPA/percentage, coursework).
- **Certifications**: `certifications` array (Title, issuer, date, credential link).
- **Experience**: `experience` array (Role, company, location, duration, responsibilities, technologies, certificate link).
- **Social & Navigation Links**: `social` array and `navLinks` array.
- **Resume Specimen**: `resume` object (filename, file path, download label). To update the PDF itself, replace `public/assets/resume/Shashikant-Raj-Resume.pdf`.

---

## 📄 License & Attribution

- **Copyright**: © 2026 Shashikant Raj. All rights reserved. Brand: **SASHIBITCODE**.
- **Images**: Authentic personal photographs of Shashikant Raj. Protected; alteration, replacement, or synthetic AI modification is prohibited.
