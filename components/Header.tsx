
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

const LanguageSwitcher: React.FC<{isMobile?: boolean}> = ({ isMobile }) => {
    const { language, setLanguage } = useI18n();
    const baseClasses = "flex items-center gap-1.5 ml-2 pl-2";
    const mobileClasses = "border-t border-gray-700/50 pt-4 mt-4 w-full justify-center";
    const desktopClasses = "border-l border-gray-700/50";
    
    return (
        <div className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}>
            <button 
                onClick={() => setLanguage('pt')} 
                className={`px-3 py-1 text-sm rounded-md transition-colors ${language === 'pt' ? 'bg-cyan-400 text-[#1A2332] font-bold' : 'bg-transparent text-gray-400 hover:text-white'}`}
                aria-pressed={language === 'pt'}
            >
                PT
            </button>
            <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${language === 'en' ? 'bg-cyan-400 text-[#1A2332] font-bold' : 'bg-transparent text-gray-400 hover:text-white'}`}
                aria-pressed={language === 'en'}
            >
                EN
            </button>
        </div>
    );
};


const Header: React.FC = () => {
  const { t, language } = useI18n();
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isReady, setIsReady] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  
  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.name)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const scrollOffset = 150; 

    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        setActiveSection(navItems[navItems.length - 1].name);
        return;
      }
      
      const scrollPosition = window.scrollY + scrollOffset;
      
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

    const throttledScrollHandler = () => requestAnimationFrame(handleScroll);
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, []);

  useLayoutEffect(() => {
    const updateIndicator = () => {
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
    
    // We wait a bit for fonts to load before the first calculation
    document.fonts.ready.then(updateIndicator);
    
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection, isReady, language]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(name);
    if(isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4">
        <div className="max-w-max mx-auto bg-[#1A2332]/70 backdrop-blur-sm border border-gray-700/50 rounded-full px-2 py-1.5 flex items-center">
          {/* Desktop Navigation */}
          <nav className="relative hidden sm:flex items-center justify-center font-fira-code text-sm">
            <span
              className="absolute bg-slate-700 h-full rounded-full shadow-lg shadow-cyan-400/30 top-0"
              style={{ ...indicatorStyle, transition: isReady ? 'all 500ms ease-in-out' : 'none' }}
            />
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                ref={el => { linkRefs.current[index] = el; }}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className={`relative z-10 transition-colors duration-300 px-4 py-1.5 rounded-full cursor-pointer whitespace-nowrap ${activeSection === item.name ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
          <div className="hidden sm:flex">
             <LanguageSwitcher />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="sm:hidden flex items-center px-2">
             <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 w-8 h-8 flex justify-center items-center"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMenuOpen}
             >
                <span className={`block absolute w-6 h-0.5 bg-slate-200 transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                <span className={`block absolute w-6 h-0.5 bg-slate-200 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute w-6 h-0.5 bg-slate-200 transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
              </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`sm:hidden fixed inset-0 z-40 bg-[#121923]/95 backdrop-blur-md transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-6 font-fira-code text-xl text-center">
           {navItems.map((item) => (
              <a
                key={`mobile-${item.name}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
            <LanguageSwitcher isMobile={true}/>
        </nav>
      </div>
    </>
  );
};

export default Header;