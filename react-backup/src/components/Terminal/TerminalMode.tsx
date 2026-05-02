import React, { useState, useEffect, useRef } from 'react';
import { PROFILE, SKILLS, PROJECTS, EXPERIENCE } from '../../data/content';

interface TerminalModeProps {
  onSwitchMode: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

const TerminalMode: React.FC<TerminalModeProps> = ({ onSwitchMode }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
    // Initial welcome message
    setHistory([
      {
        command: '',
        output: (
          <div className="text-slate-400 mb-4">
            <div>Welcome to Aasim Syed's Interactive Terminal.</div>
            <div>Type <span className="text-sky-400">help</span> to see available commands.</div>
          </div>
        )
      }
    ]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput('');

    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1">
            <div className="grid grid-cols-[100px_1fr] gap-4">
              <span className="text-sky-400">help</span><span>Show all commands</span>
              <span className="text-sky-400">about</span><span>Show intro</span>
              <span className="text-sky-400">skills</span><span>Show skills</span>
              <span className="text-sky-400">projects</span><span>Show projects</span>
              <span className="text-sky-400">experience</span><span>Show experience</span>
              <span className="text-sky-400">contact</span><span>Show contact info</span>
              <span className="text-sky-400">clear</span><span>Clear terminal</span>
              <span className="text-sky-400">gui</span><span>Switch back to GUI mode</span>
            </div>
          </div>
        );
        break;
      case 'about':
        output = (
          <div className="space-y-2">
            <div><span className="text-sky-400">Name:</span> {PROFILE.name}</div>
            <div><span className="text-sky-400">Role:</span> {PROFILE.role}</div>
            <div className="max-w-2xl mt-2 text-slate-300">{PROFILE.intro}</div>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="space-y-4">
            {SKILLS.map((group, idx) => (
              <div key={idx}>
                <div className="text-sky-400 font-bold">[{group.category}]</div>
                <div className="ml-4">{group.items.join(' • ')}</div>
              </div>
            ))}
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-6">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-sky-400 font-bold text-lg">{proj.title}</div>
                <div className="text-slate-300">{proj.description}</div>
                <div className="text-slate-400 text-sm">Tech: {proj.tags.join(', ')}</div>
                {proj.github && <div><span className="text-sky-400">Repo:</span> {proj.github}</div>}
              </div>
            ))}
          </div>
        );
        break;
      case 'experience':
        output = (
          <div className="space-y-6">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-sky-400 font-bold">{exp.role} @ {exp.company}</div>
                <div className="text-slate-500">{exp.period}</div>
                <ul className="ml-4 list-disc list-inside text-slate-300">
                  {exp.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="space-y-2">
            <div><span className="text-sky-400">Email:</span> {PROFILE.email}</div>
            <div><span className="text-sky-400">GitHub:</span> {PROFILE.github}</div>
            <div><span className="text-sky-400">LinkedIn:</span> {PROFILE.linkedin}</div>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'gui':
        onSwitchMode();
        return;
      default:
        output = <div className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</div>;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  return (
    <div 
      className="min-h-screen bg-black text-green-400 font-mono p-4 sm:p-8 cursor-text"
      onClick={focusInput}
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {history.map((entry, index) => (
          <div key={index} className="space-y-2">
            {entry.command && (
              <div className="flex items-center gap-2">
                <span className="text-blue-400">guest@aasim-portfolio:~$</span>
                <span className="text-white">{entry.command}</span>
              </div>
            )}
            <div className="pl-0">{entry.output}</div>
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center gap-2">
          <span className="text-blue-400">guest@aasim-portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 m-0"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default TerminalMode;
