import React, { useState, useEffect } from 'react';
import { ChevronRight, Code } from 'lucide-react';
import { PROFILE } from '../../../data/content';

interface HomeProps {
  onNavigate: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = "> building scalable APIs...";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-8rem)] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-6 max-w-3xl">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            {PROFILE.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-sky-400">
            {PROFILE.role}
          </h2>
        </div>
        
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
          {PROFILE.intro}
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          {['Microservices', 'Performance Optimization', 'Distributed Systems'].map((highlight) => (
            <span key={highlight} className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300">
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-8">
          <button
            onClick={() => onNavigate('Projects')}
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Code className="w-5 h-5" />
            View Projects
          </button>
          <button
            onClick={() => onNavigate('Skills')}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-slate-700 hover:border-slate-600"
          >
            View Skills
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="pt-12">
          <div className="inline-block font-mono text-sm text-slate-500 bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
            {terminalText}
            <span className="animate-blink">_</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
