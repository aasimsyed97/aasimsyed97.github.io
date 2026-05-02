import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../../../data/content';

const Experience: React.FC = () => {
  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
        <p className="text-slate-400">Professional journey and impact.</p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-sky-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
              <Briefcase className="w-4 h-4" />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/30 border border-slate-700/50 p-6 rounded-xl hover:border-slate-600 transition-colors">
              <div className="flex flex-col mb-4">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sky-400 font-medium">{exp.company}</span>
                <span className="text-sm text-slate-500 mt-1 font-mono">{exp.period}</span>
              </div>
              
              <ul className="space-y-2 text-slate-300">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="text-sky-500 mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
