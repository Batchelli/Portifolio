
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const navItems = [
  { name: 'home', href: '#home' },
  { name: 'tooling', href: '#tooling' },
  { name: 'projects', href: '#projects' },
  { name: 'experience', href: '#experience' },
  { name: 'contact', href: '#contact' },
];

const Header: React.FC = () => {
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
        <div className="bg-[#1A2332]/70 backdrop-blur-sm border border-gray-700/50 rounded-full px-2 py-1.5">
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
                &lt;{item.name}/&gt;
              </a>
            ))}
          </nav>
        </div>
       </div>
    </header>
  );
};

export default Header;
