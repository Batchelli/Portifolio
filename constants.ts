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
    name: 'Dashboard de Análise', 
    description: 'Uma aplicação web interativa para visualização de dados com gráficos dinâmicos e filtros customizáveis.', 
    imageUrl: 'https://i.imgur.com/G5OAEwF.png',
    url: '#',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Chart.js']
  },
  { 
    name: 'Loja Virtual de Roupas', 
    description: 'Plataforma de e-commerce completa, com carrinho de compras, checkout e gerenciamento de produtos.', 
    imageUrl: 'https://i.imgur.com/bE7p1N5.png',
    url: '#',
    tags: ['Angular', 'SCSS', 'TypeScript', 'Stripe API']
  },
  { 
    name: 'App de Fitness', 
    description: 'Aplicativo móvel multiplataforma para acompanhamento de treinos e progresso físico, com integração social.', 
    imageUrl: 'https://i.imgur.com/yv6k1nS.png',
    url: '#',
    tags: ['Flutter', 'Dart', 'Firebase', 'Provider']
  },
  { 
    name: 'Website Portfólio', 
    description: 'O site que você está vendo agora, construído para ser rápido, responsivo e visualmente agradável.', 
    imageUrl: 'https://i.imgur.com/mJ9r5T8.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite']
  },
  { 
    name: 'API de Gerenciamento', 
    description: 'API RESTful para um sistema de gerenciamento de tarefas, com autenticação JWT e documentação Swagger.', 
    imageUrl: 'https://i.imgur.com/6XlQ7xw.png',
    url: '#',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker']
  },
  { 
    name: 'Estudo de UX para App', 
    description: 'Pesquisa de usuário, design de interface e prototipagem para um novo aplicativo de viagens, focado na usabilidade.', 
    imageUrl: 'https://i.imgur.com/pZ8vKAd.png',
    url: '#',
    tags: ['Figma', 'User Research', 'Prototyping']
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Jovem Aprendiz de Soluções Digitais',
    company: 'Robert Bosch',
    period: '2023 - 2024',
    location: 'São Paulo, Brasil',
    companyUrl: 'https://www.bosch.com.br/',
    description: 'Atuei como Jovem Aprendiz em Soluções Digitais na Robert Bosch por um ano e meio. Durante este período, trabalhei em tempo integral, dedicando metade do tempo a projetos internos na empresa e a outra metade à formação técnica em Desenvolvimento de Sistemas na Escola Técnica SENAI.',
    companyLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bosch-logo.svg/2560px-Bosch-logo.svg.png'
  },
  {
    role: 'Estagiário de Soluções Digitais',
    company: 'Robert Bosch',
    period: '2024 - 2025',
    location: 'São Paulo, Brasil',
    companyUrl: 'https://www.bosch.com.br/',
    description: 'Como estagiário, expandi minhas responsabilidades no desenvolvimento de soluções digitais, colaborando em projetos de maior escala e aprofundando meus conhecimentos em tecnologias web modernas e metodologias ágeis.',
    companyLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bosch-logo.svg/2560px-Bosch-logo.svg.png'
  },
  {
    role: 'Automação HRS',
    company: 'Robert Bosch',
    period: '2025 - Presente',
    location: 'São Paulo, Brasil',
    companyUrl: 'https://www.bosch.com.br/',
    description: 'Focado na automação de processos para a área de Recursos Humanos (HRS), desenvolvendo e implementando soluções para otimizar fluxos de trabalho, melhorar a eficiência e garantir a integridade dos dados.',
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
