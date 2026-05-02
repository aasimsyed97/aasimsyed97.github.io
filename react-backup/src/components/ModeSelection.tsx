import React, { useEffect, useState } from 'react';
import { Terminal, Monitor } from 'lucide-react';
import { PROFILE } from '../data/content';

interface ModeSelectionProps {
  onSelectMode: (mode: 'gui' | 'terminal') => void;
}

const ModeSelection: React.FC<ModeSelectionProps> = ({ onSelectMode }) => {
  const [timeLeft, setTimeLeft] = useState(4);

  useEffect(() => {
    if (timeLeft === 0) {
      onSelectMode('gui');
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onSelectMode]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-200 animate-in fade-in duration-1000">
      <div className="text-center space-y-8 max-w-lg p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm shadow-2xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Welcome to {PROFILE.name}'s Portfolio</h1>
          <p className="text-slate-400">Choose your experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onSelectMode('gui')}
            className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 transition-all duration-300"
          >
            <Monitor className="w-10 h-10 text-sky-400 group-hover:scale-110 transition-transform" />
            <div className="space-y-1">
              <span className="block font-semibold text-sky-300">GUI Mode</span>
              <span className="text-xs text-slate-400">Standard Experience</span>
            </div>
          </button>

          <button
            onClick={() => onSelectMode('terminal')}
            className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800 hover:bg-slate-700 transition-all duration-300"
          >
            <Terminal className="w-10 h-10 text-slate-400 group-hover:text-slate-300 group-hover:scale-110 transition-all" />
            <div className="space-y-1">
              <span className="block font-semibold text-slate-300">Terminal Mode</span>
              <span className="text-xs text-slate-500">Developer Experience</span>
            </div>
          </button>
        </div>

        <div className="text-sm text-slate-500 pt-4">
          Auto-selecting GUI Mode in <span className="font-mono text-sky-400">{timeLeft}s</span>...
        </div>
      </div>
    </div>
  );
};

export default ModeSelection;
