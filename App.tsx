
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Tooling from './components/Tooling';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollAnimator from './components/ScrollAnimator';

function App(): React.ReactNode {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Efeito de brilho do mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.06), transparent 80%)`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Header />
        <main>
          <ScrollAnimator id="home">
            <Home />
          </ScrollAnimator>
          <ScrollAnimator id="tooling" className="scroll-mt-24">
            <Tooling />
          </ScrollAnimator>
          <ScrollAnimator id="projects" className="scroll-mt-24">
            <Projects />
          </ScrollAnimator>
          <ScrollAnimator id="experience" className="scroll-mt-24">
            <Experience />
          </ScrollAnimator>
          <ScrollAnimator id="contact" className="scroll-mt-24">
            <Contact />
          </ScrollAnimator>
        </main>
        <footer className="text-center py-8 text-gray-400 text-sm font-fira-code">
          <p>Projetado e construído por Lucas Baccelli.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
