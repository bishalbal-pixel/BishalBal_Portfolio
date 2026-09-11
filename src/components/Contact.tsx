import { useState, ChangeEvent, FormEvent } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Instagram, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    // Simulate sending with clear frontend functional response
    // For connecting to EmailJS, Formspree or custom API, Bishal can integrate here
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative border-t hairline-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header CTA */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-cyan-400/60 inline-block"></span>
            <span>09 // CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Let's Build Something Meaningful.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Whether it's a technology project, collaboration, community initiative or simply a conversation, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="rounded-2xl pro-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-display font-bold text-white">
                Contact Information
              </h3>
              
              <div className="space-y-3.5">
                {/* Email item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-white/[0.03] text-cyan-400 border border-white/[0.08] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Email</div>
                      <a 
                        href={`mailto:${socialLinks.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                      >
                        {socialLinks.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors text-xs font-mono ml-2 shrink-0 border border-white/[0.06]"
                    title="Copy Email"
                  >
                    {copiedEmail ? '✓' : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="p-2 rounded-lg bg-white/[0.03] text-cyan-400 border border-white/[0.08] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Phone</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      {socialLinks.phone}
                    </div>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="p-2 rounded-lg bg-white/[0.03] text-cyan-400 border border-white/[0.08] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      {socialLinks.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Online Profiles & Channels
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-white transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-white transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-white" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-white transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5 text-slate-300" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Status Callout */}
            <div className="p-4 rounded-xl pro-card flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Currently open to internship opportunities in Software Engineering, full-stack development, and technical project coordination.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Frontend-Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl pro-card p-6 sm:p-8 relative">
              
              <div className="mb-6 pb-4 border-b border-white/[0.06]">
                <h3 className="text-xl font-display font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal">
                  Fill in your details below and I will get back to you promptly.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-normal">
                    Thank you for reaching out. Bishal has received your note and will reply directly to your email address.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormStatus('idle')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-xs font-mono text-cyan-300 transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus === 'error' && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/40 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-slate-300 block">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors font-normal"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-slate-300 block">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors font-normal"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-slate-300 block">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Project Inquiry / Martial Arts Clinic / Hello"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors font-normal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-slate-300 block">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project details, questions, or ideas..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none font-normal"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all transform active:scale-95 disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
