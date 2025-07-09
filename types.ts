import type { IconType } from 'react-icons';

export interface Tool {
  name: string;
  icon: IconType;
}

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  url?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  companyUrl: string;
  description: string;
  companyLogoUrl: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface SocialMedia {
  name: string;
  username: string;
  url: string;
  icon: IconType;
}