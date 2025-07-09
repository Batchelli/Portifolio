import type { IconType } from 'react-icons';

export interface Tool {
  name: string;
  icon: IconType;
}

export interface Project {
  nameKey: string;
  descriptionKey: string;
  imageUrl: string;
  tags: string[];
  url?: string;
}

export interface ExperienceItem {
  roleKey: string;
  company: string;
  period: string;
  location: string;
  companyUrl: string;
  descriptionKey: string;
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
