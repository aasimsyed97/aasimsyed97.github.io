import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './sections/Home';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

interface GUIModeProps {
  onSwitchMode: () => void;
}

const GUIMode: React.FC<GUIModeProps> = ({ onSwitchMode }) => {
  const [currentSection, setCurrentSection] = useState('Home');

  const renderSection = () => {
    switch (currentSection) {
      case 'Home':
        return <Home onNavigate={setCurrentSection} />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Navbar 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
        onSwitchMode={onSwitchMode} 
      />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderSection()}
      </main>

      {/* Optional minimal footer */}
      <footer className="py-6 text-center text-slate-500 text-sm border-t border-slate-800/50 mt-auto">
        <p>&copy; {new Date().getFullYear()} Aasim Syed. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default GUIMode;
