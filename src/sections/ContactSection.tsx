import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Copy, Check, Send, Mail, MapPin, ArrowUpRight, LoaderCircle, CircleAlert } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, LeetcodeIcon } from '@/components/common/Icons';
import { Toast } from '@/components/common/Toast';

export const ContactSection: React.FC = () => {
  const { personal, social } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setToastMessage(`Copied: ${personal.email}`);
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => setToastMessage(''), 2500);
    } catch {
      setToastMessage(`Email: ${personal.email}`);
      setTimeout(() => setToastMessage(''), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return;

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '42d16f4b-03e8-4fb4-b5d6-dfff2cc56dac';
    if (!accessKey) {
      setStatus('error');
      setErrorMessage(
        'Web3Forms Access Key is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env file.'
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Data Analyst Inquiry from ${formState.name}`,
          from_name: 'Shashikant Raj Portfolio',
          botcheck: formState.honeypot,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '', honeypot: '' });
        setToastMessage('Message sent successfully!');
        setTimeout(() => setToastMessage(''), 4000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Submission failed. Please check your credentials or try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        `Network error occurred. You can reach out directly via email at ${personal.email}.`
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-navy/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-navy/15">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-navy">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Links & Email Copy */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="bg-white border border-navy/20 p-6 sm:p-7 shadow-sm">
              <span className="font-mono text-xs font-bold text-navy/60 uppercase tracking-wider block mb-2">
                PRIMARY EMAIL
              </span>
              
              <p className="font-display text-2xl sm:text-3xl font-bold text-navy break-all lowercase tracking-tight">
                {personal.email}
              </p>
              
              <p className="mt-2 text-xs sm:text-sm text-navy/80 font-sans leading-relaxed">
                Feel free to email directly regarding Data Analyst opportunities, internships, or questions about my projects.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy bg-navy text-white hover:bg-navy-dark transition-colors font-mono text-xs font-bold uppercase tracking-wider shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Client</span>
                </a>

                <button
                  onClick={copyEmail}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors font-mono text-xs font-bold uppercase tracking-wider"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-yellow" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Email'}</span>
                </button>
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
                    rel="noopener noreferrer me"
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
            <div className="pb-4 border-b border-navy/15">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy uppercase tracking-tight">
                Send a Message
              </h3>
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

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-navy font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 select-none ${
                    status === 'success'
                      ? 'bg-emerald-700 text-white border-emerald-800 shadow-[3px_3px_0px_0px_#065F46]'
                      : status === 'submitting'
                      ? 'bg-navy/90 text-yellow cursor-wait shadow-[2px_2px_0px_0px_#0B2545]'
                      : 'bg-navy text-white hover:bg-navy-dark hover:border-navy shadow-[3px_3px_0px_0px_#0B2545] hover:shadow-[5px_5px_0px_0px_#F5B700] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#0B2545]'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <LoaderCircle className="w-4 h-4 animate-spin text-yellow" />
                      <span>Sending Message...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300 stroke-[3]" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {status === 'success' && (
                <div className="relative overflow-hidden p-5 border-2 border-emerald-600 bg-emerald-50/90 text-emerald-950 font-mono text-xs animate-success-pop shadow-md">
                  {/* Celebratory Particles */}
                  <div className="absolute top-4 left-6 pointer-events-none" aria-hidden="true">
                    {[
                      { x: '-24px', y: '-20px', color: '#10B981', delay: '0ms' },
                      { x: '24px', y: '-22px', color: '#F5B700', delay: '50ms' },
                      { x: '-18px', y: '16px', color: '#0B2545', delay: '100ms' },
                      { x: '22px', y: '18px', color: '#10B981', delay: '150ms' },
                      { x: '0px', y: '-28px', color: '#F5B700', delay: '80ms' },
                      { x: '-30px', y: '-4px', color: '#3B82F6', delay: '120ms' },
                      { x: '30px', y: '-6px', color: '#EC4899', delay: '140ms' },
                    ].map((p, i) => (
                      <span
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full animate-particle"
                        style={{
                          backgroundColor: p.color,
                          animationDelay: p.delay,
                          ['--tx' as any]: p.x,
                          ['--ty' as any]: p.y,
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full bg-emerald-600 text-white shrink-0 animate-checkmark-bounce">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <strong className="font-bold text-sm text-emerald-900">Message Delivered!</strong>
                        <span className="px-2 py-0.5 bg-emerald-200/80 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded">
                          Sent
                        </span>
                      </div>
                      <p className="text-emerald-800/90 text-xs leading-relaxed font-sans">
                        Thank you for reaching out! Your inquiry has been dispatched directly to{' '}
                        <strong>{personal.email}</strong>. Shashikant will respond to you shortly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 border-2 border-red-500 bg-red-50 text-red-950 font-mono text-xs flex items-start gap-3 animate-shake shadow-sm">
                  <div className="p-1 rounded-full bg-red-600 text-white shrink-0 mt-0.5">
                    <CircleAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block font-bold mb-0.5 text-red-900">Failed to Send Message</strong>
                    <span className="text-red-800/90 font-sans">
                      {errorMessage || `Unable to deliver message. You can also email directly at ${personal.email}.`}
                    </span>
                  </div>
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
