import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Info,
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedInIcon } from './LinkedInIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Inquiry from ${name || 'Portfolio Visitor'}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );
    // Trigger real mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-100 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get In{' '}
            <span className="bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Open for frontend development internships, junior engineer roles, and collaborative web
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Contact Channels
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Reach out directly through email, phone, LinkedIn, or explore my GitHub repositories. I look
              forward to discussing frontend opportunities.
            </p>

            {/* Email Card with Working mailto & Copy Button */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-violet-300 transition-colors flex items-start justify-between gap-3 group">
              <div className="flex items-start gap-3.5 min-w-0 flex-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 hover:bg-violet-600 hover:text-white flex items-center justify-center shrink-0 transition-colors"
                  title="Open mail application"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-400">Direct Email</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-bold text-slate-800 hover:text-violet-700 break-all block transition-colors mt-0.5"
                    title="Click to send email"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <span className="text-[11px] text-violet-600 font-medium block mt-0.5">
                    Click to open email app
                  </span>
                </div>
              </div>
              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center rounded-xl text-slate-500 hover:text-violet-700 hover:bg-violet-50 transition-colors"
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedEmail ? (
                    <Check className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                {copiedEmail && (
                  <span className="absolute -top-8 right-0 bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in zoom-in-95">
                    Email copied!
                  </span>
                )}
              </div>
            </div>

            {/* Phone Card with Direct Call & Copy */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-violet-300 transition-colors flex items-start justify-between gap-3 group">
              <div className="flex items-start gap-3.5 min-w-0 flex-1">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 hover:bg-purple-600 hover:text-white flex items-center justify-center shrink-0 transition-colors"
                  title="Call Phone Number"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-400">Phone &amp; WhatsApp</p>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-bold text-slate-800 hover:text-violet-700 transition-colors mt-0.5 block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <span className="text-[11px] text-purple-600 font-medium">Available during business hours</span>
                </div>
              </div>
              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center rounded-xl text-slate-500 hover:text-purple-700 hover:bg-purple-50 transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedPhone ? (
                    <Check className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                {copiedPhone && (
                  <span className="absolute -top-8 right-0 bg-slate-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in zoom-in-95">
                    Phone copied!
                  </span>
                )}
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0a66c2] group-hover:bg-[#0a66c2] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-400">LinkedIn Profile</p>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-blue-700 hover:underline flex items-center gap-1 mt-0.5 break-all"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <span>linkedin.com/in/{PERSONAL_INFO.linkedinUsername}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
                <span className="text-[11px] text-slate-500">Connect professionally on LinkedIn</span>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-violet-300 transition-colors flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-400">GitHub Profile</p>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-violet-700 hover:underline flex items-center gap-1 mt-0.5 break-all"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <span>github.com/{PERSONAL_INFO.githubUsername}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
                <span className="text-[11px] text-slate-500">Explore real repositories and source code</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400">Current Location</p>
                <p className="text-sm font-bold text-slate-800 mt-0.5">{PERSONAL_INFO.location}</p>
                <span className="text-[11px] text-slate-500">Available for remote &amp; on-site positions</span>
              </div>
            </div>
          </div>

          {/* Right: Functional Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="violet-card rounded-3xl p-5 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Fill in the details below to dispatch an email directly to{' '}
                <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-violet-700 hover:underline">
                  {PERSONAL_INFO.email}
                </a>.
              </p>

              {/* Email Client Transparency Notice */}
              <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-2.5 text-xs text-slate-600">
                <Info className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                <p>
                  Submitting this form prepares your message and launches your default email client via <code className="text-violet-700 font-mono">mailto</code>. For automated in-browser delivery without an external email client, backend integration (such as EmailJS or a server API) can be configured with your approval.
                </p>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Email draft initiated!</p>
                    <p className="mt-0.5">
                      Your email client has been opened with your message. You can also write directly to{' '}
                      <span className="font-semibold">{PERSONAL_INFO.email}</span>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Recruiter or Client Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Internship / Frontend Opportunity / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Mohammad, we reviewed your Dev-Stack and ExploreWorld 360 repositories and would love to connect..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-violet-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-md shadow-violet-500/25 transition-all transform active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email to Mohammad</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
