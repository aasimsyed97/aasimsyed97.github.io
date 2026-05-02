import React from 'react';
import { ExternalLink, Server } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../../../data/content';

const Projects: React.FC = () => {
  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
        <p className="text-slate-400">Showcasing backend architecture and system design.</p>
      </div>

      <div className="space-y-6">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
              <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="External Link">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800 mb-6 flex items-start gap-3">
              <Server className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm font-semibold text-slate-200 block mb-1">System Design Insight</span>
                <span className="text-sm text-slate-400">{project.insight}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-sky-500/10 text-sky-300 border border-sky-500/20 rounded-md text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
