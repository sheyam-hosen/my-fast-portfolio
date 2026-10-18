import React, { useState } from 'react';
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Globe,
  Radio,
  X,
  Calendar,
  Info,
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { REAL_PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';


export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = ['All', 'React & TypeScript', 'Responsive Web', 'Profile & Open Source'];

  const filteredProjects =
    selectedFilter === 'All'
      ? REAL_PROJECTS
      : REAL_PROJECTS.filter((p) => p.category === selectedFilter);

  // Tasteful CSS-based visual preview renderer
  const renderVisualPreview = (project: Project) => {
    switch (project.previewType) {
      case 'dev-stack':
        return (
          <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 p-4 rounded-xl flex flex-col justify-between text-white relative overflow-hidden font-sans border border-slate-700/50 shadow-inner">
            <div className="absolute top-0 right-0 w-36 h-36 bg-pink-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-mono text-slate-400 ml-1">Dev-Stack UI</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                Live Stack: 3/12
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/80">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-sky-300">React</span>
                  <span className="text-pink-400 text-[9px] font-semibold">Core</span>
                </div>
                <div className="mt-1 text-[9px] text-slate-400">UI Architecture</div>
                <span className="mt-1.5 inline-block text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                  ✓ Added
                </span>
              </div>

              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/80">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-blue-300">TypeScript</span>
                  <span className="text-pink-400 text-[9px] font-semibold">Types</span>
                </div>
                <div className="mt-1 text-[9px] text-slate-400">Strict Safety</div>
                <span className="mt-1.5 inline-block text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                  ✓ Added
                </span>
              </div>

              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/80">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-cyan-300">Tailwind</span>
                  <span className="text-pink-400 text-[9px] font-semibold">Style</span>
                </div>
                <div className="mt-1 text-[9px] text-slate-400">Utility First</div>
                <span className="mt-1.5 inline-block text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                  ✓ Added
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-700/60">
              <span className="font-mono">React + TS + Tailwind</span>
              <span className="text-violet-300 font-semibold">Interactive Stack Builder</span>
            </div>
          </div>
        );

      case 'exploreworld':
        return (
          <div className="w-full h-52 bg-gradient-to-br from-violet-950 via-indigo-900 to-slate-900 p-4 rounded-xl flex flex-col justify-between text-white relative overflow-hidden font-sans border border-indigo-800/50 shadow-inner">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-600/20 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-indigo-700/60 pb-2.5">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-violet-300" />
                <span className="text-[11px] font-bold text-violet-100">ExploreWorld 360</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                React Suspense
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 my-auto">
              <div className="bg-indigo-950/70 p-2.5 rounded-lg border border-indigo-700/60 flex items-center gap-2.5">
                <span className="text-2xl">🇧🇩</span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-white truncate">Bangladesh</p>
                  <p className="text-[9px] text-indigo-300">Asia &bull; Dhaka</p>
                </div>
              </div>

              <div className="bg-indigo-950/70 p-2.5 rounded-lg border border-indigo-700/60 flex items-center gap-2.5">
                <span className="text-2xl">🇯🇵</span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-white truncate">Japan</p>
                  <p className="text-[9px] text-indigo-300">Asia &bull; Tokyo</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-indigo-200 pt-2 border-t border-indigo-700/60">
              <span>REST Countries API</span>
              <span className="font-mono text-violet-300">CountryType Contracts</span>
            </div>
          </div>
        );

      case 'devconf':
        return (
          <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-4 rounded-xl flex flex-col justify-between text-white relative overflow-hidden font-sans border border-purple-800/50 shadow-inner">
            <div className="flex items-center justify-between border-b border-purple-800/60 pb-2.5">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] font-bold tracking-tight text-white">DevConf 2026</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Radio className="w-2.5 h-2.5 animate-pulse text-emerald-400" />
                GitHub Pages Live
              </span>
            </div>

            <div className="p-3 bg-purple-900/40 rounded-lg border border-purple-700/50 my-auto flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-semibold text-purple-300">Keynote Speakers</p>
                <p className="text-xs font-bold text-white mt-0.5">Andrej Karpathy &bull; Demis Hassabis</p>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-purple-300 block">Pro Pass</span>
                <span className="text-sm font-extrabold text-amber-300">$749</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-purple-200 pt-2 border-t border-purple-800/60">
              <span className="font-mono">HTML5 + CSS3 Grid</span>
              <span className="text-emerald-300 font-semibold">Active Public Deployment</span>
            </div>
          </div>
        );

      case 'profile-hub':
      default:
        return (
          <div className="w-full h-52 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-4 rounded-xl flex flex-col justify-between text-white relative overflow-hidden font-sans border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <span className="text-[11px] font-mono text-slate-300">sheyam-hosen / sheyam-hosen</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-violet-600/30 text-violet-300">
                Official Profile
              </span>
            </div>

            <div className="my-auto space-y-2">
              <p className="text-xs font-semibold text-slate-200">
                "Turning Ideas Into Modern Web Experiences"
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[9px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-sky-300">
                  React
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-blue-300">
                  TypeScript
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-300">
                  Node.js
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-purple-300">
                  Tailwind
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
              <span>Developer Hub &amp; Readme</span>
              <span className="font-mono text-violet-400">Activity &amp; Streak Metrics</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-100 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Public GitHub Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Projects &amp;{' '}
            <span className="bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
              Source Code
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Every project below corresponds directly to my real public GitHub repositories.
            No invented statistics, no placeholder links.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedFilter === filter
                  ? 'bg-violet-600 text-white shadow-sm shadow-violet-500/25'
                  : 'bg-white text-slate-600 hover:text-violet-700 hover:bg-violet-50/50 border border-slate-200/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="violet-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview Header */}
                <div className="mb-5 overflow-hidden rounded-xl">
                  {renderVisualPreview(project)}
                </div>

                {/* Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-violet-50 text-violet-700 border border-violet-100">
                    {project.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1 font-mono">
                    <GithubIcon className="w-3.5 h-3.5" />
                    {project.repoName}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-violet-800 transition-colors">
                  {project.title}
                </h3>

                {/* Confirmed Languages / Tech Badges */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.confirmedLanguages.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Real Features */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  {project.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-violet-300 rounded-xl shadow-2xs transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-900" />
                    <span>Source Code</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl shadow-xs shadow-violet-500/20 transition-all"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 text-white/80" />
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700 hover:text-violet-900 py-1.5 px-2 rounded-lg hover:bg-violet-50 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for In-Depth Project Details */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-violet-100 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-violet-50 text-violet-700">
                    {activeModalProject.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">
                    Repository: {activeModalProject.repoName}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Overview &amp; Purpose
                  </h4>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Confirmed Technologies
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeModalProject.confirmedLanguages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-violet-50 text-violet-800 border border-violet-100"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Key Implemented Features
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {activeModalProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                  <p className="font-semibold text-slate-800">Authenticity Guarantee:</p>
                  <p className="mt-0.5">
                    This project is genuinely hosted on Mohammad Sheyam Hosen's GitHub account (
                    <span className="font-mono text-violet-700">{activeModalProject.repoName}</span>).
                    {activeModalProject.liveUrl
                      ? ' A live public deployment is verified on GitHub Pages.'
                      : ' The full source code is publicly inspectable and can be cloned and built locally.'}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-end gap-3">
                <a
                  href={activeModalProject.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
