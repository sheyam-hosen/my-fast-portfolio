import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PERSONAL_INFO } from '../data/portfolioData';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-violet-500/20">
                MSH
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block">
                  {PERSONAL_INFO.fullName}
                </span>
                <span className="text-xs text-violet-400">
                  {PERSONAL_INFO.role}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring frontend developer from Bangladesh turning modern web ideas into high-quality,
              accessible, and responsive digital experiences with React and TypeScript.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-violet-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-violet-400 transition-colors">
                  Skills &amp; Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-violet-400 transition-colors">
                  Real GitHub Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-violet-400 transition-colors">
                  Education &amp; Growth
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-violet-400 transition-colors">
                  Contact Mohammad
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-violet-400 transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-400 transition-colors"
                >
                  github.com/{PERSONAL_INFO.githubUsername}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5">
            &copy; {currentYear}{' '}
            <span className="font-semibold text-slate-200">{PERSONAL_INFO.fullName}</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-500">
              Built with React, TypeScript &amp; Tailwind CSS
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-violet-900/40 border border-slate-700 transition-colors text-xs font-medium"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
