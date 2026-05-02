import React from 'react';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PROFILE } from '../../../data/content';

const Contact: React.FC = () => {
  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto text-center">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <a 
          href={`mailto:${PROFILE.email}`}
          className="flex items-center justify-center gap-2 px-6 py-4 bg-sky-500 hover:bg-sky-400 text-slate-900 rounded-lg font-semibold transition-colors"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>
      </div>

      <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 max-w-md mx-auto">
        <h3 className="text-xl font-medium text-white mb-6">Connect Online</h3>
        <div className="flex flex-col gap-4">
          <a 
            href={`mailto:${PROFILE.email}`}
            className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-sky-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3 text-slate-300 group-hover:text-white transition-colors">
              <Mail className="w-5 h-5 text-slate-400 group-hover:text-sky-400" />
              <span>Email</span>
            </div>
            <ExternalIcon />
          </a>
          
          <a 
            href={PROFILE.github}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-sky-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3 text-slate-300 group-hover:text-white transition-colors">
              <FaGithub className="w-5 h-5 text-slate-400 group-hover:text-sky-400" />
              <span>GitHub</span>
            </div>
            <ExternalIcon />
          </a>

          <a 
            href={PROFILE.linkedin}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-sky-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3 text-slate-300 group-hover:text-white transition-colors">
              <FaLinkedin className="w-5 h-5 text-slate-400 group-hover:text-sky-400" />
              <span>LinkedIn</span>
            </div>
            <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const ExternalIcon = () => (
  <Send className="w-4 h-4 text-slate-500 -rotate-45" />
);

export default Contact;
