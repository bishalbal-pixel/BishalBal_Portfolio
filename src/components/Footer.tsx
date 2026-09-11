import { ArrowUp, Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import { personalInfo, navItems, socialLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t hairline-divider pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center font-display font-bold text-xs text-cyan-400">
                BB
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400 tracking-wider">
              Technology • Discipline • Leadership
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              BSc Software Engineering student, Kyokushin Karate 3rd Dan Black Belt, and Region Coordinator in Kathmandu, Nepal.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-cyan-400 hover:bg-white/[0.06] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-cyan-400 hover:bg-white/[0.06] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-cyan-400 hover:bg-white/[0.06] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-mono text-slate-300 hover:text-white transition-all"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Quick Navigation Row */}
        <div className="py-6 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <span className="text-slate-500">Kathmandu, Nepal • UTC+05:45</span>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Precision, discipline & modern code.</span>
            <span className="text-cyan-400 ml-1">Osu!</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
