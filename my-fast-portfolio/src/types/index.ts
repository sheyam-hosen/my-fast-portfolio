export interface Project {
  id: string;
  title: string;
  repoName: string;
  category: 'React & TypeScript' | 'Responsive Web' | 'Profile & Open Source';
  description: string;
  confirmedLanguages: string[];
  features: string[];
  sourceUrl: string;
  liveUrl?: string;
  previewType: 'dev-stack' | 'exploreworld' | 'devconf' | 'profile-hub';
  badge: string;
  isOriginal: boolean;
}

export interface Skill {
  name: string;
  category: 'Core Frontend' | 'Frameworks & Styling' | 'Workflow & Tools';
  level: string;
  proficiencyPercent: number;
  highlight: string;
}

export interface EducationItem {
  degree: string;
  institutionOrFocus: string;
  location: string;
  period: string;
  status: string;
  description: string;
  verifiedBadges: string[];
}
