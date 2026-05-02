import React from 'react';
import { SKILLS } from '../../../data/content';

const Skills: React.FC = () => {
  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Skills</h2>
        <p className="text-slate-400">Core technologies, frameworks, and tools.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-colors">
            <h3 className="text-lg font-semibold text-sky-400 mb-4">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
