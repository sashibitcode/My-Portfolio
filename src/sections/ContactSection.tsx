import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Copy, Check, Send, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, LeetcodeIcon } from '@/components/common/Icons';
import { Toast } from '@/components/common/Toast';

export const ContactSection: React.FC = () => {
  const { personal, social } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setToastMessage('Copied: sashiverma7779@gmail.com');
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => setToastMessage(''), 2500);
    } catch {
      setToastMessage(`Email: ${personal.email}`);
      setTimeout(() => setToastMessage(''), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return;

    const subject = encodeURIComponent(`Data Analyst Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Shashikant,\n\n${formState.message}\n\nSender: ${formState.name}\nEmail: ${formState.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-4 border-b border-navy/15">
          <div>
            <span className="font-mono text-xs font-bold text-navy/70 tracking-widest uppercase">
              08 // CONNECT
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy mt-1">
              Contact
            </h2>
          </div>
          <p className="text-sm font-sans text-navy/70 max-w-md">
            Direct channels for inquiries, recruiter discussions, and collaborative analytics projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Links & Email Copy */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="bg-white border border-navy/20 p-6 sm:p-7 shadow-sm">
              <span className="font-mono text-xs font-bold text-navy/60 uppercase tracking-wider block mb-2">
                PRIMARY EMAIL
              </span>
              
              <p className="font-display text-2xl sm:text-3xl font-bold text-navy break-all uppercase tracking-tight">
                {personal.email}
              </p>
              
              <p className="mt-2 text-xs sm:text-sm text-navy/80 font-sans leading-relaxed">
                Feel free to email directly regarding Data Analyst opportunities, internships, or questions about my projects.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={copyEmail}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white hover:bg-navy-dark transition-colors font-mono text-xs font-bold uppercase tracking-wider shadow-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-yellow" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors font-mono text-xs font-bold uppercase tracking-wider"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Client</span>
                </a>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-white border border-navy/20 p-6 sm:p-7 shadow-sm space-y-3">
              <span className="font-mono text-xs font-bold text-navy/60 uppercase tracking-wider block pb-2 border-b border-navy/10">
                PROFILES &amp; CODE REPOSITORIES
              </span>

              {social
                .filter((s) => s.platform !== 'email')
                .map((item) => (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-navy/15 hover:border-navy hover:bg-[#FAF9F6] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      {item.platform === 'github' && <GithubIcon className="w-4 h-4 text-navy" />}
                      {item.platform === 'linkedin' && <LinkedinIcon className="w-4 h-4 text-navy" />}
                      {item.platform === 'leetcode' && <LeetcodeIcon className="w-4 h-4 text-navy" />}
                      {item.platform === 'instagram' && <InstagramIcon className="w-4 h-4 text-navy" />}
                      <span className="font-display text-lg font-bold text-navy uppercase tracking-tight group-hover:text-yellow-hover">
                        {item.label}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 font-mono text-xs text-navy/70">
                      <span>{item.handle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ))}

              <div className="pt-3 border-t border-navy/10 flex items-center gap-2 text-xs font-mono text-navy/70">
                <MapPin className="w-3.5 h-3.5 text-yellow-hover" />
                <span>Jaipur, Rajasthan, India · Open to Remote &amp; Relocation</span>
              </div>
            </div>

          </div>

          {/* Right Column: Honest Mailto Form */}
          <div className="lg:col-span-7 bg-white border border-navy/20 p-6 sm:p-8 shadow-sm">
            <div className="pb-4 border-b border-navy/15 flex items-center justify-between">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy uppercase tracking-tight">
                Send a Message
              </h3>
              <span className="font-mono text-xs text-navy/60 uppercase bg-yellow/20 px-2 py-0.5 border border-navy/15">
                MAILTO PROTOCOL
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-sans">
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  tabIndex={-1}
                  value={formState.honeypot}
                  onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-navy uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-navy/30 bg-[#FAF9F6] text-navy text-sm focus:outline-none focus:border-navy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-navy uppercase tracking-wider mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-navy/30 bg-[#FAF9F6] text-navy text-sm focus:outline-none focus:border-navy"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-navy uppercase tracking-wider mb-1">
                  Message / Role Requirements *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Detail your opportunity, data team needs, or analytics inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-navy/30 bg-[#FAF9F6] text-navy text-sm focus:outline-none focus:border-navy resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-navy/60">
                  Honest mailto dispatch: composes directly to sashiverma7779@gmail.com
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-navy text-white hover:bg-navy-dark transition-colors font-mono text-xs font-bold uppercase tracking-wider shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Email</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 border-2 border-yellow bg-yellow/15 text-navy font-mono text-xs">
                  Your email client has been triggered with your message. Thank you!
                </div>
              )}
            </form>
          </div>

        </div>

      </div>

      <Toast message={toastMessage} isVisible={!!toastMessage} />
    </section>
  );
};
