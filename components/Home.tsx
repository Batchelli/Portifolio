import React, { useState, useEffect } from 'react';
import { useI18n } from '../contexts/I18nContext';

const Home = (): React.ReactNode => {
  const { t } = useI18n();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  
  // 0:init, 1:typing title, 2:confirm title, 3:typing subtitle, 4:confirm subtitle, 5:done
  const [phase, setPhase] = useState(0);

  const fullTitle = t('home.title');
  const fullSubtitle = t('home.subtitle');
  
  useEffect(() => {
    const timeouts: number[] = [];
    
    switch (phase) {
      case 0:
        timeouts.push(setTimeout(() => setPhase(1), 500));
        break;
      case 1: // Typing title
        if (title.length < fullTitle.length) {
          timeouts.push(setTimeout(() => setTitle(fullTitle.slice(0, title.length + 1)), 120));
        } else {
          timeouts.push(setTimeout(() => setPhase(2), 500)); // Pause after typing
        }
        break;
      case 2: // Confirm title
        timeouts.push(setTimeout(() => setPhase(3), 300)); // Confirmation pause
        break;
      case 3: // Typing subtitle
        if (subtitle.length < fullSubtitle.length) {
          timeouts.push(setTimeout(() => setSubtitle(fullSubtitle.slice(0, subtitle.length + 1)), 60));
        } else {
          timeouts.push(setTimeout(() => setPhase(4), 500)); // Pause after typing
        }
        break;
      case 4: // Confirm subtitle
        timeouts.push(setTimeout(() => setPhase(5), 700)); // Longer pause before hiding cursor
        break;
    }
    
    return () => timeouts.forEach(clearTimeout);
  }, [phase, title, subtitle, fullTitle, fullSubtitle]);

  const Cursor = ({ isVisible, isBlinking }: { isVisible: boolean, isBlinking: boolean }) => {
    if (!isVisible) return null;
    return (
      <span
        aria-hidden="true"
        className={`inline-block w-1 md:w-2 h-[0.8em] bg-slate-200 ml-2 translate-y-[0.1em] ${isBlinking ? 'animate-blink' : ''}`}
      />
    );
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[radial-gradient(ellipse_at_center,rgba(26,35,50,0.3)_0%,transparent_80%)]">
      <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter min-h-[1.2em]">
        {title}
        <Cursor isVisible={phase >= 1 && phase <= 2} isBlinking={phase === 1} />
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 tracking-widest font-fira-code uppercase min-h-[1.5em]">
        {subtitle}
        <Cursor isVisible={phase >= 3 && phase <= 4} isBlinking={phase === 3} />
      </p>
    </section>
  );
};

export default Home;
