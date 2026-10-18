import type { Project, Skill, EducationItem } from '../types';

export const PERSONAL_INFO = {
  fullName: 'MOHAMMAD SHEYAM HOSEN',
  role: 'Beginner Frontend Developer',
  tagline: 'Turning Ideas Into Modern Web Experiences',
  shortBio:
    'Dedicated frontend developer from Bangladesh passionate about crafting fast, accessible, and visually stunning web interfaces with React, TypeScript, and Tailwind CSS. Constantly learning and building real-world projects with clean component architecture.',
  location: 'Bangladesh',
  email: 'md.siam8990100@gmail.com',
  phone: '01862267153',
  githubUrl: 'https://github.com/sheyam-hosen',
  githubUsername: 'sheyam-hosen',
  linkedinUrl: 'https://www.linkedin.com/in/sheyam-hosen/',
  linkedinUsername: 'sheyam-hosen',
  status: 'Open for Internships & Junior Roles',
  avatarUrl: '/avatar.jpg',
  coverImageUrl: '/cover-image.png',
};

export const REAL_PROJECTS: Project[] = [
  {
    id: 'dev-stack',
    title: 'Dev-Stack — Tech Stack Explorer & Builder',
    repoName: 'sheyam-hosen/Dev-Stack',
    category: 'React & TypeScript',
    description:
      'Interactive developer tech stack application where developers browse curated web technologies, filter by category and skill level, inspect difficulty ratings, and compose a custom tech stack of up to 12 technologies with instant state management.',
    confirmedLanguages: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    features: [
      'Interactive Stack Builder supporting up to 12 curated technologies',
      'Dynamic filtering, category tags, difficulty badges & user ratings',
      'Persistent state handling with add/remove and bulk clear controls',
      'Clean TypeScript interfaces for complete type safety',
    ],
    sourceUrl: 'https://github.com/sheyam-hosen/Dev-Stack',
    previewType: 'dev-stack',
    badge: 'Featured React Application',
    isOriginal: true,
  },
  {
    id: 'exploreworld-360',
    title: 'ExploreWorld 360 — Global Country Explorer',
    repoName: 'sheyam-hosen/exploreworld-360',
    category: 'React & TypeScript',
    description:
      'Modern country discovery web application powered by the REST Countries API (openapi.programming-hero.com), engineered with React Suspense for asynchronous boundary handling, modular components, and strongly typed country models.',
    confirmedLanguages: ['TypeScript', 'React', 'REST API', 'Vite'],
    features: [
      'Real-time data fetching with asynchronous promise handling',
      'React 19 Suspense fallback architecture for seamless UI states',
      'Modular Country & Countries component decomposition',
      'Strongly typed CountryType data contracts',
    ],
    sourceUrl: 'https://github.com/sheyam-hosen/exploreworld-360',
    previewType: 'exploreworld',
    badge: 'API & React Suspense',
    isOriginal: true,
  },
  {
    id: 'devconf-2026',
    title: 'DevConf 2026 — Developer Conference Platform',
    repoName: 'sheyam-hosen/My-Fast-assignment-1',
    category: 'Responsive Web',
    description:
      'High-impact landing page for an international developer conference featuring a hero presentation, keynote speaker showcase, 3-tier pass pricing breakdown (Standard, Pro, Team), event venue info, and mobile-first CSS architecture.',
    confirmedLanguages: ['HTML5', 'CSS3', 'Responsive Design', 'GitHub Pages'],
    features: [
      'Genuine Live Deployment hosted on GitHub Pages',
      'Keynote speaker roster with custom card layouts',
      'Interactive 3-tier pricing table with highlighted Pro tier',
      'Fluid mobile, tablet, and desktop responsive breakpoints',
    ],
    sourceUrl: 'https://github.com/sheyam-hosen/My-Fast-assignment-1',
    liveUrl: 'https://sheyam-hosen.github.io/My-Fast-assignment-1/',
    previewType: 'devconf',
    badge: 'Live on GitHub Pages',
    isOriginal: true,
  },
  {
    id: 'sheyam-hosen-hub',
    title: 'GitHub Developer Hub & Activity Tracker',
    repoName: 'sheyam-hosen/sheyam-hosen',
    category: 'Profile & Open Source',
    description:
      'Official public GitHub developer hub containing structured documentation on active tech stacks, TokyoNight activity graphs, dynamic streak stats, and direct developer communication channels.',
    confirmedLanguages: ['Markdown', 'GitHub Actions', 'SVG'],
    features: [
      'Dynamic GitHub streak and activity metric integrations',
      'Curated frontend and backend technical badge directories',
      'Developer identity presentation and open contact links',
    ],
    sourceUrl: 'https://github.com/sheyam-hosen/sheyam-hosen',
    previewType: 'profile-hub',
    badge: 'Public Developer Hub',
    isOriginal: true,
  },
];

export const SKILLS_LIST: Skill[] = [
  {
    name: 'React',
    category: 'Frameworks & Styling',
    level: 'Core Focus',
    proficiencyPercent: 88,
    highlight: 'Hooks, functional architecture, Suspense, state management',
  },
  {
    name: 'TypeScript',
    category: 'Frameworks & Styling',
    level: 'Advanced Student',
    proficiencyPercent: 82,
    highlight: 'Interfaces, types, generics, prop typing, robust code safety',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Core Frontend',
    level: 'Proficient',
    proficiencyPercent: 85,
    highlight: 'DOM manipulation, promises, async/await, modern array methods',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frameworks & Styling',
    level: 'Core Focus',
    proficiencyPercent: 90,
    highlight: 'Rapid utility styling, custom themes, responsive design',
  },
  {
    name: 'HTML5',
    category: 'Core Frontend',
    level: 'Proficient',
    proficiencyPercent: 92,
    highlight: 'Semantic markup, accessibility, SEO structure',
  },
  {
    name: 'CSS3',
    category: 'Core Frontend',
    level: 'Proficient',
    proficiencyPercent: 88,
    highlight: 'Flexbox, CSS Grid, transitions, responsive layouts',
  },
  {
    name: 'Git',
    category: 'Workflow & Tools',
    level: 'Proficient',
    proficiencyPercent: 80,
    highlight: 'Version control, commit hygiene, branch management',
  },
  {
    name: 'GitHub',
    category: 'Workflow & Tools',
    level: 'Proficient',
    proficiencyPercent: 84,
    highlight: 'Repositories, GitHub Pages deployment, open collaboration',
  },
  {
    name: 'Responsive Design',
    category: 'Core Frontend',
    level: 'Proficient',
    proficiencyPercent: 90,
    highlight: 'Mobile-first mindset, fluid typography, cross-device testing',
  },
];

export const VERIFIED_EDUCATION: EducationItem[] = [
  {
    degree: 'Frontend Web Development & Modern JavaScript/React Studies',
    institutionOrFocus: 'Intensive Practical Web Development Curriculum',
    location: 'Bangladesh',
    period: '2024 – Present',
    status: 'Active Learning & Project Building',
    description:
      'Deep, hands-on study of modern frontend engineering: mastering HTML5/CSS3 foundations, modern ECMAScript/JavaScript, React 19 component design, TypeScript type safety, and real-world API consumption.',
    verifiedBadges: ['React.js', 'TypeScript', 'Tailwind CSS', 'API Integration', 'Git/GitHub'],
  },
  {
    degree: 'Higher Secondary & Computing Education',
    institutionOrFocus: 'Academic Education in Bangladesh',
    location: 'Bangladesh',
    period: 'Completed',
    status: 'Verified Personal Background',
    description:
      'Solid mathematical and computing fundamentals fostering logical reasoning, problem-solving skills, and systematic computational thinking.',
    verifiedBadges: ['Analytical Thinking', 'Problem Solving', 'Computing Basics'],
  },
];
