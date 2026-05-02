import React from 'react';
import { Terminal } from 'lucide-react';

interface NavbarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  onSwitchMode: () => void;
}

const NAV_ITEMS = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];

const Navbar: React.FC<NavbarProps> = ({ currentSection, onSectionChange, onSwitchMode }) => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              AS
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => onSectionChange(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === item
                      ? 'text-sky-400 bg-slate-800/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <button
              onClick={onSwitchMode}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 hover:border-slate-600 text-sm font-medium"
            >
              <Terminal className="w-4 h-4" />
              <span className="hidden sm:inline">Terminal Mode</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile nav (simple scrollable row for simplicity without external state) */}
      <div className="md:hidden overflow-x-auto border-t border-slate-800/50">
        <div className="flex px-4 py-2 space-x-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => onSectionChange(item)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                currentSection === item
                  ? 'text-sky-400 bg-slate-800'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
