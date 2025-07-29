// Core data models for the portfolio

export interface PersonalData {
  basicInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    profileImage: string;
  };
  professional: {
    summary: string;
    yearsOfExperience: number;
    specializations: string[];
    currentRole: string;
    availability: string;
  };
  social: {
    linkedin: string;
    github: string;
    kaggle: string;
    leetcode: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  metrics: Metric[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa: string;
  coursework: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics: ProjectMetric[];
  featured: boolean;
}

export interface Skill {
  name: string;
  proficiency: number;
  yearsOfExperience: number;
  projects: string[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  icon: string;
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'certification' | 'recognition';
  icon: string;
  color: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  improvement?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
  resumeUrl: string;
}

export interface ContactReason {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  color: string;
  name: string;
}

export interface Statistic {
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface ExpertiseArea {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}