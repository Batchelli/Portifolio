import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useI18n } from '../contexts/I18nContext';

// navItems IDs should not be translated as they are used for scrolling.
const navItems = [
  { name: 'home', href: '#home', key: 'nav.home' },
  { name: 'tooling', href: '#tooling', key: 'nav.tooling' },
  { name: 'projects', href: '#projects', key: 'nav.projects' },
  { name: 'experience', href: '#experience', key: 'nav.experience' },
  { name: 'contact', href: '#contact', key: 'nav.contact' },
];

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useI18n();
    
    return (
        <div className="flex items-center gap-1.5 ml-2 border-l border-gray-700/50 pl-2">
            <button 
                onClick={() => setLanguage('pt')} 
                className={`px-2 py-0.5 text-xs rounded-md transition-colors ${language === 'pt' ? 'bg-cyan-400 text-[#1A2332] font-bold' : 'bg-transparent text-gray-400 hover:text-white'}`}
                aria-pressed={language === 'pt'}
            >
                PT
            </button>
            <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 text-xs rounded-md transition-colors ${language === 'en' ? 'bg-cyan-400 text-[#1A2332] font-bold' : 'bg-transparent text-gray-400 hover:text-white'}`}
                aria-pressed={language === 'en'}
            >
                EN
            </button>
        </div>
    );
};


const Header: React.FC = () => {
  const { t } = useI18n();
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isReady, setIsReady] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.name)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const scrollOffset = 150; 

    const handleScroll = () => {
      // Verifica se o usuário chegou ao final da página
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        // Se estiver no final, ativa a última seção ('contact')
        setActiveSection(navItems[navItems.length - 1].name);
        return;
      }
      
      const scrollPosition = window.scrollY + scrollOffset;
      
      // Condição especial para o topo da página
      if (window.scrollY < sections[0].offsetHeight / 2) {
        setActiveSection('home');
        return;
      }

      let currentSectionId = sections[0].id;
      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSectionId = section.id;
        } else {
          break;
        }
      }
      setActiveSection(currentSectionId);
    };

    const throttledScrollHandler = () => {
        requestAnimationFrame(handleScroll);
    };
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, []);

  useLayoutEffect(() => {
    const updateIndicator = async () => {
      await document.fonts.ready;
      const activeLinkIndex = navItems.findIndex(item => item.name === activeSection);
      const activeLink = linkRefs.current[activeLinkIndex];

      if (activeLink) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          opacity: 1,
        });
        if (!isReady) {
          setIsReady(true);
        }
      }
    };
    
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection, isReady]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(name);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4">
       <div className="max-w-max mx-auto">
        <div className="bg-[#1A2332]/70 backdrop-blur-sm border border-gray-700/50 rounded-full px-2 py-1.5 flex items-center">
          <nav className="relative flex items-center font-fira-code text-sm sm:text-base">
            <span
              className={`absolute top-0 h-full bg-slate-700 rounded-full shadow-lg shadow-cyan-400/30 ${isReady ? 'transition-all duration-500 ease-in-out' : ''}`}
              style={indicatorStyle}
            />
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                ref={el => { linkRefs.current[index] = el; }}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className={`relative z-10 transition-colors duration-300 px-4 py-1.5 rounded-full cursor-pointer ${activeSection === item.name ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
       </div>
    </header>
  );
};

export default Header;