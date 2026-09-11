export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLinks {
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  instagram: string;
  location: string;
}

export interface SkillItem {
  name: string;
  description: string;
  category: 'tech' | 'tools' | 'professional';
  proficiency: 'Advanced' | 'Intermediate' | 'Core Competency';
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Software Projects' | 'AI / Prompt Engineering' | 'Personal Projects';
  tagline: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  accentGradient: string;
  metrics?: string;
}

export interface MartialArtsInfo {
  title: string;
  subtitle: string;
  rank: string;
  experienceYears: string;
  role: string;
  competitions: string;
  philosophy: string;
  corePrinciples: {
    title: string;
    description: string;
  }[];
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export interface LeadershipRole {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'Martial Arts Teaching' | 'Leadership' | 'Software / Tech';
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: 'In Progress' | 'Completed';
  location: string;
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Martial Arts' | 'Leadership' | 'Community' | 'Academic';
  year: string;
  organization: string;
  description: string;
  badge?: string;
}
