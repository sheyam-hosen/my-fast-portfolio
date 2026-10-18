import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Uses ONLY the user's full name, no "Dev" or other brand */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
            aria-label={`${PERSONAL_INFO.fullName} Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-violet-500/20 group-hover:shadow-violet-500/35 transition-all">
              MSH
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-slate-900 tracking-tight text-xs sm:text-base truncate max-w-[160px] sm:max-w-none group-hover:text-violet-700 transition-colors">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-violet-600 hidden sm:block">
                {PERSONAL_INFO.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'text-violet-700 bg-violet-50/80 shadow-xs'
                      : 'text-slate-600 hover:text-violet-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 lg:px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 rounded-xl shadow-sm shadow-indigo-500/25 hover:shadow-md hover:shadow-indigo-500/35 transition-all transform active:scale-98"
              title="View Resume / CV in a new tab"
            >
              <FileText className="w-4 h-4" />
              <span>Resume / CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href="/resume.pdf"
              download="Mohammad-Sheyam-Hosen-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs lg:text-sm font-semibold text-slate-700 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 border border-slate-200/80 rounded-xl transition-all"
              title="Download CV (PDF)"
              aria-label="Download CV (PDF)"
            >
              <Download className="w-4 h-4 text-indigo-600" />
              <span className="hidden xl:inline">Download CV</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1 px-3.5 py-2 text-xs lg:text-sm font-semibold text-slate-700 hover:text-violet-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl transition-all"
              title="Send direct email"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center rounded-xl text-slate-700 hover:text-violet-600 hover:bg-violet-50 focus:outline-hidden focus:ring-2 focus:ring-violet-500 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-violet-100 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1.5">
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Menu Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`min-h-[44px] flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-violet-50 text-violet-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-violet-600'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 flex flex-col gap-2">
              <div className="flex gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex-1 min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume / CV</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="/resume.pdf"
                  download="Mohammad-Sheyam-Hosen-CV.pdf"
                  onClick={handleLinkClick}
                  className="min-h-[44px] flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
                  title="Download CV"
                  aria-label="Download CV"
                >
                  <Download className="w-4 h-4 text-indigo-600" />
                  <span>Download CV</span>
                </a>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={handleLinkClick}
                className="min-h-[44px] flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-xl shadow-xs"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get in Touch (Direct Email)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
