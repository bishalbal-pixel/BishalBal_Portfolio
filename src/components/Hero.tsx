import { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  MapPin, 
  Award, 
  Code2, 
  Download, 
  ExternalLink,
  GraduationCap,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Minimalist Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Software Engineering Internships</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-px bg-cyan-400/60 inline-block"></span>
                <span>KATHMANDU, NEPAL</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I'm{' '}
                <span className="text-white">
                  {personalInfo.name}
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl font-medium text-slate-300 tracking-tight flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-1">
                <span className="text-cyan-400 font-semibold">Software Engineering Student</span>
                <span className="text-slate-600 font-normal">•</span>
                <span className="text-slate-200">Martial Artist</span>
                <span className="text-slate-600 font-normal">•</span>
                <span className="text-slate-200">Leader</span>
              </h2>
            </div>

            {/* Introduction Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Editorial Metadata Tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.07]">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.07]">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                PCPS College (BSc SE)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.07]">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Kyokushin 3rd Dan Black Belt
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                id="hero-view-work-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs tracking-wide uppercase transition-all transform active:scale-95 shadow-md shadow-cyan-500/15"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-me-btn"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-slate-200 hover:text-white font-medium text-xs tracking-wide uppercase border border-white/[0.09] transition-all active:scale-95"
              >
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] text-slate-400 hover:text-slate-200 text-xs font-mono border border-white/[0.06] transition-all"
                title="Copy email to clipboard"
              >
                <span>{copiedEmail ? '✓ Copied' : 'Copy Email'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Pro Designer Architectural Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md pro-card rounded-2xl p-6 sm:p-7 space-y-6">
              
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between pb-4 border-b hairline-divider">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="text-xs font-mono text-slate-400">DEV // MARTIAL ARTS // LEADERSHIP</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded">
                  PORTFOLIO 2026
                </span>
              </div>

              {/* Graphic Portrait Frame */}
              <div className="relative group mx-auto w-full h-56 rounded-xl overflow-hidden bg-[#0D0F14] border border-white/[0.08] flex flex-col items-center justify-center text-center p-6">
                
                {/* Kanji watermarked background */}
                <div className="absolute top-2 right-3 text-5xl font-serif text-white/[0.04] select-none pointer-events-none">
                  極真
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/[0.1] flex items-center justify-center mb-3 shadow-inner">
                    <span className="font-display font-extrabold text-3xl text-white tracking-tight">BB</span>
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-wide">Bishal Bal</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Software Engineering • PCPS College</p>
                  
                  <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-mono text-slate-300 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.07]">
                    <span className="text-cyan-400">🥋 Kyokushin 3rd Dan</span>
                    <span>•</span>
                    <span>Leo District 325L</span>
                  </div>
                </div>

                {/* Subtitle bottom note */}
                <div className="absolute bottom-2 text-[9px] font-mono text-slate-500">
                  PHOTO PLACEHOLDER • EDITABLE IN DATA
                </div>
              </div>

              {/* Clean Terminal Inspection Block */}
              <div className="bg-black/40 rounded-xl p-4 border border-white/[0.05] font-mono text-xs space-y-1.5">
                <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-white/[0.04]">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>system_kernel.sh</span>
                  </span>
                  <span>STATUS: OPTIMAL</span>
                </div>
                <p className="text-slate-300 text-[11px] pt-1">
                  <span className="text-cyan-400">$</span> load --stack="Python, Django, JS, PromptEng"
                </p>
                <p className="text-slate-400 text-[11px]">
                  &gt; Discipline: 12+ years Kyokushin full-contact training
                </p>
                <p className="text-slate-400 text-[11px]">
                  &gt; Civic Leadership: Leo District Council 325L Coordinator
                </p>
              </div>

              {/* Architectural Stats Grid */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="font-display font-bold text-base text-white">3rd Dan</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">Kyokushin</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="font-display font-bold text-base text-cyan-400">12+ Yrs</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">Discipline</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="font-display font-bold text-base text-white">325L</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">Leo Region</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

