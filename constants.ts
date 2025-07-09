import { Tool, Project, ExperienceItem, ContactInfo, SocialMedia } from './types';
import { FaReact, FaAngular, FaFigma, FaPython, FaJava, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiFlutter } from 'react-icons/si';

export const TOOLS: Tool[] = [
  { name: 'React', icon: FaReact },
  { name: 'Angular', icon: FaAngular },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Figma', icon: FaFigma },
  { name: 'Python', icon: FaPython },
  { name: 'Java', icon: FaJava },
  { name: 'Flutter', icon: SiFlutter },
];

export const PROJECTS: Project[] = [
    { 
    nameKey: 'projects.dashboard.name', 
    descriptionKey: 'projects.dashboard.description', 
    imageUrl: 'https://i.imgur.com/G5OAEwF.png',
    url: '#',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Chart.js']
  },
  { 
    nameKey: 'projects.ecommerce.name', 
    descriptionKey: 'projects.ecommerce.description',
    imageUrl: 'https://i.imgur.com/bE7p1N5.png',
    url: '#',
    tags: ['Angular', 'SCSS', 'TypeScript', 'Stripe API']
  },
  { 
    nameKey: 'projects.fitnessApp.name', 
    descriptionKey: 'projects.fitnessApp.description',
    imageUrl: 'https://i.imgur.com/yv6k1nS.png',
    url: '#',
    tags: ['Flutter', 'Dart', 'Firebase', 'Provider']
  },
  { 
    nameKey: 'projects.portfolio.name',
    descriptionKey: 'projects.portfolio.description',
    imageUrl: 'https://i.imgur.com/mJ9r5T8.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite']
  },
  { 
    nameKey: 'projects.api.name', 
    descriptionKey: 'projects.api.description',
    imageUrl: 'https://i.imgur.com/6XlQ7xw.png',
    url: '#',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker']
  },
  { 
    nameKey: 'projects.uxStudy.name', 
    descriptionKey: 'projects.uxStudy.description',
    imageUrl: 'https://i.imgur.com/pZ8vKAd.png',
    url: '#',
    tags: ['Figma', 'User Research', 'Prototyping']
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    roleKey: 'experience.bosch_apprentice.role',
    company: 'Robert Bosch',
    period: '2023 - 2024',
    location: 'São Paulo, Brasil',
    companyUrl: 'https://www.bosch.com.br/',
    descriptionKey: 'experience.bosch_apprentice.description',
    companyLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bosch-logo.svg/2560px-Bosch-logo.svg.png'
  },
  {
    roleKey: 'experience.bosch_intern.role',
    company: 'Robert Bosch',
    period: '2024 - 2025',
    location: 'São Paulo, Brasil',
    companyUrl: 'https://www.bosch.com.br/',
    descriptionKey: 'experience.bosch_intern.description',
    companyLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bosch-logo.svg/2560px-Bosch-logo.svg.png'
  },
  {
    roleKey: 'experience.bosch_automation.role',
    company: 'Robert Bosch',
    period: '2025 - Present',
    location: 'São Paulo, Brasil',
    companyUrl: 'https://www.bosch.com.br/',
    descriptionKey: 'experience.bosch_automation.description',
    companyLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bosch-logo.svg/2560px-Bosch-logo.svg.png'
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'lbaccelli.2004@gmail.com',
  phone: '(19) 99141-3307'
};

export const SOCIAL_MEDIA: SocialMedia[] = [
  { name: 'Github', username: 'github.com/Batchelli', url: 'https://github.com/Batchelli', icon: FaGithub },
  { name: 'LinkedIn', username: 'linkedin.com/in/baccelli-lucas', url: 'https://www.linkedin.com/in/baccelli-lucas/', icon: FaLinkedin },
  { name: 'Instagram', username: 'instagram.com/dev.baccelli', url: 'https://www.instagram.com/dev.baccelli/', icon: FaInstagram }
];