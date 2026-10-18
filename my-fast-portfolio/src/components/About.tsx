import React from 'react';
import {
  Compass,
  Cpu,
  Layers,
  Sparkles,
  User,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedInIcon } from './LinkedInIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-100 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Developer Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
              Mohammad Sheyam Hosen
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Focused on creating clean, intuitive user interfaces and turning modern web ideas into
            functional, elegant digital realities.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Bio Narrative & Core Tenets */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 border border-slate-200/90 shadow-2xs">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-600" />
                Frontend Mindset & Ambition
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                I am an aspiring frontend developer based in Bangladesh with a strong drive to build
                responsive, user-centric web applications. My work centers on clean TypeScript
                interfaces, modular React component architecture, and the utility-first agility of
                Tailwind CSS.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Rather than relying on generic boilerplate or superficial designs, I build applications
                that solve concrete problems — from interactive technology stack builders to global
                country exploration portals leveraging live REST APIs.
              </p>
            </div>

            {/* 3 Core Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-violet-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center text-violet-700 mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Modular React</h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Clean state management, component reusability, and React 19 paradigms.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-violet-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Type Safety</h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Strict TypeScript types and interfaces preventing runtime defects.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-violet-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Responsive UX</h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Mobile-first interfaces that scale seamlessly across smartphones, tablets, and desktops.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Personal Verified Info Card */}
          <div className="lg:col-span-5">
            <div className="violet-card rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="border-b border-slate-100 pb-5 mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                  Verified Profile
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {PERSONAL_INFO.fullName}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {PERSONAL_INFO.role} &bull; {PERSONAL_INFO.location}
                </p>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-400">Direct Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-slate-800 hover:text-violet-700 font-medium break-all block transition-colors"
                      title="Send email"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Phone</p>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-slate-800 hover:text-violet-700 font-medium transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Location</p>
                    <p className="text-slate-800 font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-400">GitHub Profile</p>
                    <a
                      href={PERSONAL_INFO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-700 hover:underline font-semibold inline-flex items-center gap-1 break-all"
                    >
                      <span>github.com/{PERSONAL_INFO.githubUsername}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0a66c2] flex items-center justify-center shrink-0">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-400">LinkedIn Profile</p>
                    <a
                      href={PERSONAL_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline font-semibold inline-flex items-center gap-1 break-all"
                    >
                      <span>linkedin.com/in/{PERSONAL_INFO.linkedinUsername}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full min-h-[44px] flex items-center justify-center py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-xs transition-all active:scale-98"
                >
                  Contact for Opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
