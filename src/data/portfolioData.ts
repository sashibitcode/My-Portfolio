import { PortfolioData } from './types';

const baseUrl = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? (import.meta.env.BASE_URL || '/')
  : `${import.meta.env.BASE_URL}/`;

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Shashikant Raj',
    brand: 'SASHIBITCODE',
    title: 'Data Analyst',
    roleSubtitle: 'B.Tech Computer Science · Jagannath University, Jaipur',
    location: 'Jaipur, Rajasthan, India',
    email: 'sashibitcode@gmail.com',
    phone: '+91-6204961091',
    summary:
      'I break down raw, messy datasets into structured numbers and clear dashboards. Currently studying Computer Science at Jagannath University in Jaipur, working with Python, SQL, and Power BI.',
    storyFragments: [
      {
        keyword: '01 / INGESTION',
        highlight: 'Cleaning & Preprocessing',
        description:
          'Most datasets start inconsistent. I write Python scripts and SQL validation checks to strip nulls, fix data types, and normalize columns before running any analysis.',
      },
      {
        keyword: '02 / SQL & LOGIC',
        highlight: 'Relational Querying',
        description:
          'I query MySQL and PostgreSQL to join relational tables, calculate aggregate performance metrics, and build views ready for reporting.',
      },
      {
        keyword: '03 / EXPLORATION',
        highlight: 'Exploratory Data Analysis (EDA)',
        description:
          'Using Pandas, NumPy, Matplotlib, and Seaborn to test assumptions, calculate distributions, and spot correlation trends.',
      },
      {
        keyword: '04 / DASHBOARDS',
        highlight: 'Power BI Reporting',
        description:
          'Building uncluttered interactive dashboards that let non-technical stakeholders inspect sales margins, player stats, and operational metrics.',
      },
      {
        keyword: '05 / APPLIED ML',
        highlight: 'Models & RAG Workflows',
        description:
          'During my internship at Knowx Innovations, I worked on practical Machine Learning and Retrieval-Augmented Generation (RAG) for an agricultural crop advisory tool.',
      },
    ],
  },
  social: [
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sashikant-raj/',
      handle: 'sashikant-raj',
    },
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/sashibitcode',
      handle: 'sashibitcode',
    },
    {
      platform: 'leetcode',
      label: 'LeetCode',
      url: 'https://leetcode.com/u/sashibitcode/',
      handle: 'sashibitcode',
    },
    {
      platform: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/sashibitcode/',
      handle: 'sashibitcode',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:sashibitcode@gmail.com',
      handle: 'sashibitcode@gmail.com',
    },
  ],
  education: [
    {
      degree: 'B. Tech in Computer Science',
      field: 'Computer Science & Engineering',
      institution: 'Jagannath University',
      location: 'Jaipur, India',
      duration: 'Jul 2023 – Expected Jul 2027',
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'DBMS',
        'Computer Networks',
        'OOP',
        'AI',
        'ML',
      ],
    },
  ],
  skills: [
    {
      id: 'languages',
      name: 'Languages',
      description: 'Core programming and querying',
      skills: [
        { name: 'Python', highlight: true, relatedProjects: ['ecommerce', 'ipl-cricket', 'covid-19'] },
        { name: 'SQL', highlight: true, relatedProjects: ['ipl-cricket', 'covid-19'] },
      ],
    },
    {
      id: 'analytics',
      name: 'Data Analytics',
      description: 'Dataset preparation & interpretation',
      skills: [
        { name: 'Data Cleaning', relatedProjects: ['ecommerce', 'ipl-cricket', 'covid-19'] },
        { name: 'Data Preprocessing', relatedProjects: ['ecommerce', 'covid-19'] },
        { name: 'Exploratory Data Analysis (EDA)', highlight: true, relatedProjects: ['ecommerce', 'ipl-cricket', 'covid-19'] },
        { name: 'Statistical Analysis', highlight: true, relatedProjects: ['ecommerce'] },
        { name: 'Data Visualization', highlight: true, relatedProjects: ['ecommerce', 'ipl-cricket', 'covid-19'] },
        { name: 'Data Interpretation', relatedProjects: ['ecommerce', 'ipl-cricket'] },
      ],
    },
    {
      id: 'python-libraries',
      name: 'Python Libraries',
      description: 'Scientific computation and analysis',
      skills: [
        { name: 'Pandas', highlight: true, relatedProjects: ['ipl-cricket', 'covid-19'] },
        { name: 'NumPy', highlight: true, relatedProjects: ['ecommerce'] },
        { name: 'Matplotlib', relatedProjects: ['ecommerce'] },
        { name: 'Seaborn', relatedProjects: ['ecommerce'] },
        { name: 'Scikit-learn' },
        { name: 'TensorFlow' },
      ],
    },
    {
      id: 'databases',
      name: 'Databases',
      description: 'Relational data stores',
      skills: [
        { name: 'MySQL', highlight: true, relatedProjects: ['ipl-cricket', 'covid-19'] },
        { name: 'PostgreSQL', highlight: true },
      ],
    },
    {
      id: 'statistics',
      name: 'Statistics & Analysis',
      description: 'Analytical methods',
      skills: [
        { name: 'Descriptive Statistics', highlight: true, relatedProjects: ['ecommerce'] },
        { name: 'Correlation Analysis', relatedProjects: ['ecommerce'] },
        { name: 'Hypothesis Testing' },
        { name: 'Trend Analysis', highlight: true, relatedProjects: ['ecommerce', 'ipl-cricket', 'covid-19'] },
      ],
    },
    {
      id: 'tools',
      name: 'DevOps & Tools',
      description: 'Workflows & interfaces',
      skills: [
        { name: 'Power BI', highlight: true, relatedProjects: ['ecommerce', 'ipl-cricket', 'covid-19'] },
        { name: 'Excel', highlight: true },
        { name: 'Git' },
        { name: 'GitHub', relatedProjects: ['ecommerce', 'ipl-cricket', 'covid-19'] },
        { name: 'VS Code' },
        { name: 'MySQL Workbench' },
        { name: 'Jupyter Notebook', relatedProjects: ['ecommerce'] },
        { name: 'Google Colab' },
      ],
    },
  ],
  projects: [
    {
      id: 'ecommerce',
      title: 'Ecommerce Sales Analysis',
      tagline: 'Superstore retail sales trends, regional breakdown & profit margins',
      category: 'Retail Analytics',
      accentColor: '#FF4400',
      summary:
        'I analyzed retail transactions from the Superstore dataset to find out which categories and regions drove real profit versus volume.',
      bullets: [
        'Analyzed Superstore e-commerce data to uncover sales trends, regional performance, category insights, and profit patterns.',
        'Calculated total sales of $2.29M, overall net profit of $286K, and an aggregate profit margin of 12.47%.',
        'Built interactive Power BI dashboards highlighting category margins and underperforming regional segments.',
      ],
      technologies: ['Python', 'Jupyter Notebook', 'Power BI'],
      metrics: [
        { label: 'Total Volume', value: '$2.29M' },
        { label: 'Net Profit', value: '$286K' },
        { label: 'Profit Margin', value: '12.47%' },
      ],
      githubUrl: 'https://github.com/sashibitcode/Ecommerce-Sales-Analysis',
      sqlQuery: `SELECT category, sub_category, SUM(sales) AS total_sales, SUM(profit) AS net_profit, ROUND((SUM(profit)/SUM(sales))*100, 2) AS profit_margin_pct FROM superstore_orders GROUP BY 1, 2 ORDER BY total_sales DESC;`,
    },
    {
      id: 'ipl-cricket',
      title: 'IPL-Cricket-Analysis',
      tagline: 'Match & ball-by-ball delivery analytics using Python, SQL & Power BI',
      category: 'Sports Data',
      accentColor: '#FF5500',
      summary:
        'Analyzed IPL match and delivery datasets using Python, EDA, and SQL to examine player trends, batting run rates, and bowling economy.',
      bullets: [
        'Queried and cleaned tournament match records and ball-by-ball delivery data using Python and SQL.',
        'Extracted player clutch statistics, batting strike rates by phase, and boundary percentages.',
        'Designed an interactive Power BI dashboard with KPI summaries for team comparison.',
      ],
      technologies: ['Python', 'SQL', 'Power BI', 'Pandas', 'Data Visualization'],
      metrics: [
        { label: 'Granularity', value: 'Ball-by-Ball' },
        { label: 'Pipeline', value: 'SQL + Python' },
        { label: 'Interface', value: 'Power BI Dashboard' },
      ],
      githubUrl: 'https://github.com/sashibitcode/IPL-Cricket-Analysis',
      sqlQuery: `SELECT batsman, bowler, match_id, SUM(batsman_runs) AS runs_in_death, COUNT(CASE WHEN is_wicket=1 THEN 1 END) AS wickets_taken FROM ipl_ball_by_ball WHERE over >= 16 GROUP BY 1, 2;`,
    },
    {
      id: 'covid-19',
      title: 'Covid-19-Analysis',
      tagline: 'Global pandemic time-series data cleaning, SQL reporting & Power BI',
      category: 'Public Health',
      accentColor: '#FF4400',
      summary:
        'Built an end-to-end analytics workflow on global COVID-19 data covering cases, active infection counts, recoveries, and mortality rates.',
      bullets: [
        'Validated and cleaned multi-country time-series datasets using Python and Pandas.',
        'Wrote SQL reporting scripts to calculate regional recovery ratios and peak case growth rates.',
        'Connected cleaned datasets to Power BI dashboards to track geographic spread over time.',
      ],
      technologies: ['Python', 'SQL', 'Power BI', 'Pandas', 'Data Visualization'],
      metrics: [
        { label: 'Scope', value: 'Multi-Country Time Series' },
        { label: 'Validation', value: 'Automated Cleaning' },
        { label: 'Reporting', value: 'SQL + Power BI' },
      ],
      githubUrl: 'https://github.com/sashibitcode/covid-19-analysis',
      sqlQuery: `SELECT country, region, date, cumulative_cases, cumulative_recoveries, ROUND((cumulative_deaths/cumulative_cases)*100, 2) AS fatality_rate FROM global_covid_timeseries WHERE date = '2021-12-31';`,
    },
  ],
  experience: [
    {
      id: 'knowx-internship',
      role: 'AI & Data Science Intern',
      organization: 'Knowx Innovations Pvt. Ltd.',
      duration: 'July 2026 – August 2026',
      credentialUrl: 'https://drive.google.com/file/d/1IULMwwjTOGHRZqgoxVCJ_9Q-hg1JjBxM/view',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib', 'RAG'],
      responsibilities: [
        'Analyzed and prepared data using Python, Pandas, and NumPy to support AI/ML solutions and data-driven insights.',
        'Developed a real-time Crop Advisory solution, applying Machine Learning and RAG techniques to generate practical recommendations.',
      ],
    },
  ],
  certifications: [
    {
      id: 'pcap-python',
      title: 'PCAP: Programming Essentials in Python',
      issuer: 'Cisco Networking Academy & OpenEDG Python Institute',
      date: 'July 2024',
      credentialUrl: 'https://drive.google.com/file/d/1kZddy3YxtR_5xhyI9eO3qiV8f9T3Sk5N/view',
      description: 'Core Python syntax, data structures, OOP patterns, and algorithmic logic.',
    },
    {
      id: 'forage-data-vis',
      title: 'Data Visualisation: Empowering Business with Effective Insights',
      issuer: 'Forage',
      date: 'July 2025',
      credentialUrl: 'https://drive.google.com/file/d/1Dm0Vs2yuJGtHb-YrgBEfFAWIyfg24Iff/view',
      description: 'Translating business metrics into clean, uncluttered visual dashboards for decision-makers.',
    },
    {
      id: 'genai-studio',
      title: 'Introduction to Generative AI Studio',
      issuer: 'Generative AI Studio',
      date: 'July 2025',
      credentialUrl: 'https://drive.google.com/file/d/1sLa47xdf01y6WnzvV9p3yEL_owlbNsdv/view',
      description: 'Explored Generative AI concepts and practical AI workflows through hands-on learning.',
    },
    {
      id: 'hackerrank-sql-intermediate',
      title: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      date: 'October 2026',
      credentialUrl: 'https://www.hackerrank.com/certificates/558285241f1c',
      description: 'Demonstrated proficiency in complex queries, multi-table joins, subqueries, aggregations, window functions, and relational database analysis.',
    },
  ],
  resume: {
    filename: 'Shashikant-Raj-Resume.pdf',
    path: `${baseUrl}assets/resume/Shashikant-Raj-Resume.pdf`,
    label: 'Download Shashikant Raj Resume (PDF)',
    updatedDate: 'Verified 2026',
  },
  photos: {
    primary: {
      src: `${baseUrl}images/profile-primary.webp`,
      alt: 'Portrait of Shashikant Raj in business attire',
      width: 1145,
      height: 1374,
      variants: {
        webp480: `${baseUrl}images/profile-primary-480.webp`,
        webp768: `${baseUrl}images/profile-primary-768.webp`,
        webpFull: `${baseUrl}images/profile-primary-1145.webp`,
        avif480: `${baseUrl}images/profile-primary-480.avif`,
        avif768: `${baseUrl}images/profile-primary-768.avif`,
        avifFull: `${baseUrl}images/profile-primary-1145.avif`,
        fallbackJpg: `${baseUrl}images/profile-primary.jpg`,
      },
      focalPoint: {
        mobile: '50% 24%',
        tablet: '50% 28%',
        desktop: '50% 28%',
      },
      aspectRatio: {
        mobile: '4/5',
        tablet: '4/5',
        desktop: '5/6',
      },
    },
    secondary: {
      src: `${baseUrl}images/profile-secondary.webp`,
      alt: 'Shashikant Raj at transit station',
      width: 1086,
      height: 1448,
      variants: {
        webp480: `${baseUrl}images/profile-secondary-480.webp`,
        webp768: `${baseUrl}images/profile-secondary-768.webp`,
        webpFull: `${baseUrl}images/profile-secondary-1086.webp`,
        avif480: `${baseUrl}images/profile-secondary-480.avif`,
        avif768: `${baseUrl}images/profile-secondary-768.avif`,
        avifFull: `${baseUrl}images/profile-secondary-1086.avif`,
        fallbackJpg: `${baseUrl}images/profile-secondary.jpg`,
      },
      focalPoint: {
        mobile: '50% 22%',
        tablet: '50% 25%',
        desktop: '50% 28%',
      },
      aspectRatio: {
        mobile: '3/4',
        tablet: '3/4',
        desktop: '3/4',
      },
    },
  },
  seo: {
    title: 'Shashikant Raj | Data Analyst | sashibitcode',
    description:
      'Personal portfolio of Shashikant Raj (sashibitcode), B.Tech CSE student at Jagannath University analyzing data with Python, SQL, and Power BI.',
    canonicalUrl: 'https://sashibitcode.vercel.app/',
    ogImage: `${baseUrl}images/og-image.png`,
    keywords: [
      'Shashikant Raj',
      'sashibitcode',
      'Data Analyst',
      'Data Analytics',
      'Python',
      'SQL',
      'Power BI',
      'Jagannath University',
    ],
  },
};
