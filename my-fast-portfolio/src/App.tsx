import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-violet-100 selection:text-violet-900">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
