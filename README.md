<div align="center">

# 📊 Shashikant Raj | Data Analyst Portfolio
### **Brand: SASHIBITCODE**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-sashibitcode.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sashibitcode.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

**A production-grade, minimal-luxury personal portfolio engineered for high-impact Data Analyst and Business Intelligence roles.**

[🌐 Explore Live Website](https://sashibitcode.vercel.app/) • [📄 Download Resume](https://sashibitcode.vercel.app/assets/resume/Shashikant-Raj-Resume.pdf) • [💼 Connect on LinkedIn](https://www.linkedin.com/in/sashikant-raj/) • [📫 Contact](mailto:sashibitcode@gmail.com)

</div>

---

## 🌟 Executive Summary

This portfolio represents the professional work, technical capabilities, and academic credentials of **Shashikant Raj**, an undergraduate Computer Science student at **Jagannath University, Jaipur**, specializing in **Data Analytics, Python, SQL, and Power BI**.

Designed with an **"Analyst's Notebook meets Editorial Ledger"** aesthetic:
- 🏛️ **Warm Architectural Palette:** Ivory paper (`#FAF9F6`), deep corporate navy (`#0A192F`), and energetic warning yellow accents (`#F5EE38`).
- ⚡ **Sub-Second Performance:** Vite 6 bundle optimization, WebP responsive picture art direction, and zero layout shift.
- 📐 **Rigorous Usability:** Clean typography hierarchy, strict button system (<= 3 unified variants), and 100% WCAG AA accessible contrast.
- 🔒 **Single Source of Truth:** Centralized data model (`portfolioData.ts`) with strict TypeScript contracts and zero hardcoded content in UI components.

---

## 🛠️ Technical Competencies & Tooling

| Domain | Technologies & Frameworks |
| :--- | :--- |
| **Programming & Scripting** | Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, TypeScript, JavaScript (ESNext) |
| **Databases & Querying** | PostgreSQL, MySQL, Relational Database Modeling, CTEs, Window Functions |
| **Business Intelligence** | Microsoft Power BI, DAX Measures, Interactive Dashboards, Exploratory Data Analysis (EDA) |
| **Web & Frontend Engineering** | React 19, TypeScript 5.7, Vite 6, Tailwind CSS 3.4, Lucide Icons |
| **Data Workflows & Tools** | Jupyter Notebooks, Git & GitHub, Excel (VLOOKUP, Pivot Tables), Linux/Bash |

---

## 📈 Featured Analytics Case Studies

### 1. 🛒 Retail & E-Commerce Sales Performance
- **Domain:** Retail Analytics
- **Stack:** Python, Pandas, SQL, Power BI
- **Impact:** Analyzed multi-channel customer transactions, pinpointed high-margin customer cohorts, and built dynamic Power BI dashboards enabling real-time sales revenue tracking and inventory forecasting.
- [🔗 View Project Repository](https://github.com/sashibitcode/Ecommerce-Sales-Analysis)

### 2. 🏏 IPL Cricket Data Intelligence & Trends
- **Domain:** Sports Analytics
- **Stack:** Python, NumPy, Matplotlib, Seaborn, SQL
- **Impact:** Performed exhaustive exploratory data analysis across seasons of match metrics, player strike rates, win-loss probabilities, and partnership dynamics.
- [🔗 View Project Repository](https://github.com/sashibitcode/IPL-Cricket-Analysis)

### 3. 🌍 COVID-19 Global Health Trend Analysis
- **Domain:** Public Health Informatics
- **Stack:** Python, Data Visualization, SQL
- **Impact:** Cleaned and synthesized global epidemic datasets to visualize transmission trajectories, recovery rates, and regional impact trends.
- [🔗 View Project Repository](https://github.com/sashibitcode/covid-19-analysis)

---

## 📁 Repository Structure

```tree
d:/Shashi/SHASHIKANT RAJ/
├── public/
│   ├── assets/
│   │   └── resume/
│   │       └── Shashikant-Raj-Resume.pdf   # Verified formal resume document
│   ├── images/
│   │   ├── og-image.png                    # Social preview banner (1200x630)
│   │   └── profile-*.webp / .avif          # Multi-resolution optimized portrait assets
│   ├── shashikant-cutout.webp              # Hero portrait transparent cutout
│   ├── shashikant-about-cutout.webp        # About section cropped portrait
│   ├── favicon.svg                         # Monogram vector favicon
│   ├── robots.txt                          # Crawler rules & sitemap reference
│   └── sitemap.xml                         # Production XML sitemap
├── src/
│   ├── components/
│   │   ├── common/                         # DotMatrix, Icons, Toast notification
│   │   ├── layout/                         # Header Navbar, Footer
│   │   └── photos/                         # HeroCutoutPortrait, AboutCutoutPortrait
│   ├── data/
│   │   ├── portfolioData.ts                # ⭐️ SINGLE SOURCE OF TRUTH (All content)
│   │   └── types.ts                        # TypeScript type definitions & interfaces
│   ├── pages/
│   │   ├── HomePage.tsx                    # Main single-page interactive layout
│   │   └── NotFoundPage.tsx                # Accessible 404 error page
│   ├── sections/                           # 9 Independent, modular page sections
│   │   ├── HeroSection.tsx                 # Headline, call-to-action, cutout portrait
│   │   ├── AboutSection.tsx                # Bio, academic story, cutout photo
│   │   ├── SkillsSection.tsx               # Categorized skills matrix & counts
│   │   ├── ProjectsSection.tsx             # Analytical case studies & SQL highlights
│   │   ├── EducationSection.tsx            # Jagannath University coursework ledger
│   │   ├── CertificationsSection.tsx       # Verified credentials & accreditations
│   │   ├── ExperienceSection.tsx           # Knowx Innovations internship log
│   │   ├── ResumeSection.tsx               # Compact document preview & download CTA
│   │   └── ContactSection.tsx              # Email client launcher & quick-copy form
│   ├── styles/
│   │   └── index.css                       # Design tokens, typography & hairline utilities
│   ├── App.tsx                             # SPA client routing controller
│   └── main.tsx                            # React 19 root bootstrap
├── vercel.json                             # Vercel SPA rewrite fallback configuration
├── .npmrc                                  # NPM 11/12 lifecycle script authorization
├── package.json                            # Project dependencies & scripts
├── tailwind.config.js                      # Custom palette, typography, grid tokens
├── tsconfig.json                           # Strict TypeScript configuration
└── vite.config.ts                          # Vite build pipeline & alias configuration
```

---

## ⚡ Usability & Engineering Highlights

This portfolio implements **18 Usability Heuristic principles** for a polished, frictionless user experience:
1. **Unified Button System:** Standardized box-sizing (`border-2 border-navy`) ensuring identical baseline heights across all actions.
2. **Accessible Typography:** Strictly governed type scale with clear hierarchy (Oswald display headings, DM Sans body, JetBrains Mono data blocks) and zero long all-caps fatigue.
3. **Truth in Affordances:** Informational badges use low-contrast editorial treatments; clickable actions feature distinct hover states and icon cues.
4. **Accurate Data Signaling:** Verified skill counts reflect exact inventory without visual ambiguity.
5. **Mobile-First Responsive Layout:** Flexbox and CSS grid layouts adapt seamlessly from 320px mobile screens to 4K ultra-wide monitors.
6. **SEO & Social Metadata:** Fully configured JSON-LD structured schema for `Person`, OpenGraph, Twitter Cards, and canonical tags for `sashibitcode.vercel.app`.

---

## 💻 Local Development Setup

Follow these instructions to run the project locally on your machine:

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/sashibitcode/My-Portfolio.git
cd My-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

### 4. Build for production
```bash
npm run build
```
Compiles TypeScript (`tsc`) and generates an optimized production bundle in the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

---

## 🚀 Deployment

The portfolio is continuously deployed on **Vercel** with automatic preview branches and production deployments on every push to `main`.

- **Live URL:** [https://sashibitcode.vercel.app/](https://sashibitcode.vercel.app/)
- **SPA Routing:** Configured with `vercel.json` rewrite rules to prevent 404 errors on deep links and direct refreshes.

---

## 📬 Contact & Connect

**Shashikant Raj (SASHIBITCODE)**  
*Aspiring Data Analyst | B.Tech Computer Science*  
Jaipur, Rajasthan, India

- 🌐 **Portfolio:** [sashibitcode.vercel.app](https://sashibitcode.vercel.app/)
- 💼 **LinkedIn:** [linkedin.com/in/sashikant-raj](https://www.linkedin.com/in/sashikant-raj/)
- 💻 **GitHub:** [@sashibitcode](https://github.com/sashibitcode)
- 🧠 **LeetCode:** [leetcode.com/u/sashibitcode](https://leetcode.com/u/sashibitcode/)
- 📸 **Instagram:** [@sashibitcode](https://www.instagram.com/sashibitcode/)
- ✉️ **Email:** [sashibitcode@gmail.com](mailto:sashibitcode@gmail.com)

---

<div align="center">
  <sub>© 2026 Shashikant Raj. All rights reserved. Designed and developed with precision.</sub>
</div>
