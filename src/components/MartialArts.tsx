import { 
  Shield, 
  Award, 
  Users, 
  Medal, 
  Quote, 
  Target, 
  CheckCircle2 
} from 'lucide-react';
import { martialArtsInfo } from '../data/portfolioData';

export default function MartialArts() {
  return (
    <section 
      id="martial-arts" 
      className="py-24 relative border-t hairline-divider overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-cyan-400/60 inline-block"></span>
            <span>04 // MARTIAL ARTS DISCIPLINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {martialArtsInfo.title} — <span className="text-slate-300 font-normal">{martialArtsInfo.subtitle}</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Full-contact karate is not merely sport or self-defense; it is an uncompromising crucible of mental fortitude.
            Over a decade on the tatami mat has forged my patience, grit, and capacity to thrive under high pressure.
          </p>
        </div>

        {/* Highlight Stats Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {martialArtsInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="relative p-6 rounded-2xl pro-card group"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Philosophy & Dojo Profile Card */}
          <div className="lg:col-span-6 rounded-2xl pro-card p-8 flex flex-col justify-between space-y-8 relative overflow-hidden">
            
            {/* Kyokushin Watermark Kanji */}
            <div className="absolute -top-4 -right-4 text-8xl font-serif text-white/[0.03] select-none pointer-events-none">
              極真
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-cyan-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    The Spirit of "Osu" (押忍)
                  </h3>
                  <p className="text-xs font-mono text-slate-400">Patience, Respect & Relentless Will</p>
                </div>
              </div>

              <blockquote className="text-slate-300 text-sm sm:text-base leading-relaxed italic border-l-2 border-cyan-400 pl-4 py-1">
                "{martialArtsInfo.philosophy}"
              </blockquote>

              {/* Competition & Representation highlights */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">National & Regional Representation</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {martialArtsInfo.competitions}
                </p>
              </div>
            </div>

            {/* Dan Grade Certification Tag */}
            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Verified Rank: {martialArtsInfo.rank}</span>
              <span className="text-cyan-400 font-medium">🥋 Sandan (3rd Dan)</span>
            </div>
          </div>

          {/* Right Column: 4 Core Principles of Kyokushin in Tech & Life */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
            {martialArtsInfo.corePrinciples.map((principle, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center font-mono text-xs font-bold text-cyan-400 shrink-0">
                  0{idx + 1}
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}

            {/* School Mentorship Highlight Banner */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300">
                  Instructed students at <strong>Uniglobe School</strong> and <strong>Ace School</strong> in Kathmandu.
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-300 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.08] shrink-0">
                Instructor
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
