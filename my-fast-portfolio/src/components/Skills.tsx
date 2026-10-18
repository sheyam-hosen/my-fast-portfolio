import React, { useState } from 'react';
import {
  Code,
  FileCode,
  Layers,
  Palette,
  GitBranch,
  Smartphone,
  Cpu,
  Sparkles,
  Check,
} from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frameworks & Styling', 'Core Frontend', 'Workflow & Tools'];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_LIST
      : SKILLS_LIST.filter((skill) => skill.category === selectedCategory);

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'React':
        return <Layers className="w-5 h-5 text-cyan-600" />;
      case 'TypeScript':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'JavaScript (ES6+)':
        return <FileCode className="w-5 h-5 text-amber-500" />;
      case 'Tailwind CSS':
        return <Palette className="w-5 h-5 text-sky-500" />;
      case 'HTML5':
        return <Code className="w-5 h-5 text-orange-600" />;
      case 'CSS3':
        return <Palette className="w-5 h-5 text-blue-500" />;
      case 'Git':
      case 'GitHub':
        return <GitBranch className="w-5 h-5 text-slate-800" />;
      case 'Responsive Design':
        return <Smartphone className="w-5 h-5 text-violet-600" />;
      default:
        return <Code className="w-5 h-5 text-violet-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/60 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-100 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
              Proficiencies
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real skills applied in my GitHub repositories — HTML5, CSS3, JavaScript, React,
            TypeScript, Tailwind CSS, Git, GitHub, and responsive design.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-violet-600 text-white shadow-sm shadow-violet-500/30'
                  : 'bg-white text-slate-600 hover:text-violet-700 hover:bg-violet-50/50 border border-slate-200/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="violet-card p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-violet-50 group-hover:border-violet-100 transition-colors">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-violet-50 text-violet-700 border border-violet-100/60">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-violet-800 transition-colors">
                  {skill.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  {skill.highlight}
                </p>
              </div>

              {/* Proficiency Level Bar */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-400 font-medium">Competency</span>
                  <span className="font-bold text-violet-700">{skill.proficiencyPercent}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-purple-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.proficiencyPercent}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Focus Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-violet-50 via-purple-50/50 to-white border border-violet-100/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-violet-500/20">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Continuous Learning &amp; Expansion
              </p>
              <p className="text-xs text-slate-600">
                Currently exploring Node.js and Express to complement my React &amp; TypeScript frontend expertise.
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-semibold px-3 py-1.5 bg-white text-violet-700 rounded-lg border border-violet-200/60 shadow-2xs">
            Full-Stack Progression
          </span>
        </div>
      </div>
    </section>
  );
};
