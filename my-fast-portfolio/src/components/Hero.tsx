import React from 'react';
import {
  ArrowDown,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  FileCode2,
  FileText,
  Download,
  Smartphone,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedInIcon } from './LinkedInIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-ambient-gradient bg-dot-pattern"
    >
      {/* Decorative ambient blurred glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Bio, Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Availability & Location Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {PERSONAL_INFO.status}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/80">
                <MapPin className="w-3.5 h-3.5 text-violet-600" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Greeting & Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {PERSONAL_INFO.fullName}
              </span>
            </h1>

            {/* Professional Role & Subtitle */}
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-800">
              {PERSONAL_INFO.role}
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Key Tech Badges in Hero */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-700">
              <span className="px-2.5 py-1 rounded-md bg-white border border-violet-100 shadow-2xs text-violet-700 font-semibold flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5" /> React 19
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-violet-100 shadow-2xs text-violet-700 font-semibold flex items-center gap-1">
                <FileCode2 className="w-3.5 h-3.5" /> TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-slate-700">
                Tailwind CSS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-slate-700">
                Responsive UI
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-slate-700">
                Git / GitHub
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              {/* Working View Resume / CV Button (opens PDF in new tab) */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:scale-105 hover:shadow-indigo-500/35 active:scale-98"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume / CV</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Working Download CV Button */}
              <a
                href="/resume.pdf"
                download="Mohammad-Sheyam-Hosen-CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-xs transition hover:border-violet-300 hover:bg-slate-50 hover:text-violet-700 hover:scale-105 active:scale-98"
              >
                <Download className="w-4 h-4 text-violet-600" />
                <span>Download CV</span>
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-violet-300 rounded-xl shadow-xs transition-all active:scale-98"
              >
                <span>View Real Projects</span>
                <ArrowDown className="w-4 h-4 text-violet-600" />
              </a>

              {/* Email Me */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-3 text-sm font-semibold text-slate-700 hover:text-violet-700 bg-white hover:bg-violet-50/60 border border-slate-200/90 rounded-xl transition-all active:scale-98"
              >
                <Mail className="w-4 h-4 text-violet-600" />
                <span>Email Me</span>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 text-sm font-semibold text-slate-700 hover:text-violet-700 bg-white hover:bg-violet-50/60 border border-slate-200/90 rounded-xl transition-all shadow-2xs"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 text-sm font-semibold text-slate-700 hover:text-blue-700 bg-white hover:bg-blue-50/60 border border-slate-200/90 rounded-xl transition-all shadow-2xs"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Circular Profile Photo with Blue-to-Purple Gradient & Floating Card */}
          <div className="lg:col-span-5 flex justify-center w-full max-w-full overflow-visible px-2 sm:px-0">
            <div className="relative flex items-center justify-center">
              {/* Soft purple glow & subtle ambient shadow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/30 to-purple-600/35 blur-3xl transform scale-110 pointer-events-none" />

              {/* Large circular frame with blue-to-purple gradient border */}
              <div className="relative p-1.5 sm:p-2.5 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 shadow-2xl shadow-purple-500/30">
                {/* Clean white inner border trim ring */}
                <div className="p-1 sm:p-1.5 rounded-full bg-white">
                  {/* Responsive circular photo container */}
                  <div className="w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt={PERSONAL_INFO.fullName}
                      className="w-full h-full object-cover object-center scale-[1.10] hover:scale-115 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback if local file fails
                        (e.target as HTMLImageElement).src =
                          'https://avatars.githubusercontent.com/u/281794586?v=4';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Small floating "100% Responsive" information card */}
              <div className="absolute -bottom-2 sm:bottom-4 left-0 sm:-left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xl border border-violet-100 flex items-center gap-2.5 z-20 transition-transform hover:-translate-y-0.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-xs shrink-0">
                  <Smartphone className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-900 tracking-tight leading-tight">
                    100% Responsive
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-semibold text-violet-600 mt-0.5">
                    Mobile, Tablet &amp; Desktop
                  </p>
                </div>
              </div>

              {/* Verified Status Pill on top right */}
              <div className="absolute top-1 sm:top-4 right-0 sm:-right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-lg border border-violet-100 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-800 z-20 transition-transform hover:-translate-y-0.5">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-violet-900 font-bold">Frontend Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fact Strip: Real Data Highlights */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-violet-700">100%</p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Real Verified Projects</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-violet-700">React 19</p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Modern Component Arch</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-violet-700">TypeScript</p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Type-Safe Interfaces</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-violet-700">Bangladesh</p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Remote &amp; Local Ready</p>
          </div>
        </div>
      </div>
    </section>
  );
};
