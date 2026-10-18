import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  FileCheck,
} from 'lucide-react';
import { VERIFIED_EDUCATION, PERSONAL_INFO } from '../data/portfolioData';


export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50/60 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-100 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic &amp; Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education &amp;{' '}
            <span className="bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A verified record of academic background and structured frontend development
            specialization.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {VERIFIED_EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="violet-card rounded-2xl p-6 sm:p-7 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-violet-50 text-violet-700 border border-violet-100/60">
                    {edu.status}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-violet-700 mt-0.5">
                    {edu.institutionOrFocus}
                  </p>
                </div>

                <div className="flex flex-row sm:flex-col sm:items-end gap-2 text-xs text-slate-500 shrink-0">
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mt-3">
                {edu.description}
              </p>

              {/* Verified Topic Badges */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-medium text-slate-400 mr-1 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-violet-600" />
                  Key Modules:
                </span>
                {edu.verifiedBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Academic Transparency Note */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 text-xs text-slate-600">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Verified Credentials &amp; Verification</p>
              <p className="mt-0.5 leading-relaxed">
                Academic documentation and project references for{' '}
                <span className="font-semibold text-slate-800">{PERSONAL_INFO.fullName}</span> are
                readily verifiable upon request by interviewers, internship coordinators, and recruiters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
