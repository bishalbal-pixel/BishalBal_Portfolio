import { 
  Users2, 
  Crown, 
  HeartHandshake, 
  Sparkles, 
  CalendarCheck, 
  CheckCircle2,
  Compass,
  ArrowRight
} from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 relative border-t hairline-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-cyan-400/60 inline-block"></span>
            <span>05 // CIVIC & YOUTH LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Leading with Purpose & Community Impact
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            True leadership is service. From chartering new youth clubs to coordinating regional district initiatives across Kathmandu Valley, I focus on empowering others to take initiative and build meaningful community solutions.
          </p>
        </div>

        {/* Leadership Progression Timeline */}
        <div className="space-y-6 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-white/[0.08]" />

          {leadershipData.map((role, idx) => (
            <div 
              key={idx}
              className="relative md:pl-20 group"
            >
              {/* Timeline Indicator Node */}
              <div className="hidden md:flex absolute left-4 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#090A0F] border border-white/[0.15] group-hover:border-cyan-400 items-center justify-center font-mono text-xs text-slate-400 group-hover:text-cyan-400 transition-colors z-10">
                0{idx + 1}
              </div>

              {/* Main Card Content */}
              <div className="rounded-2xl pro-card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06] mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {role.role}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-cyan-400 mt-0.5">
                      {role.organization}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.07] self-start sm:self-auto">
                    {role.period}
                  </span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {role.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Outcomes & Contributions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {role.highlights.map((highlight, hIdx) => (
                      <div 
                        key={hIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Community Pillars Callout */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl pro-card text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-white/[0.03] text-cyan-400 border border-white/[0.08] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white">Community Drives</h4>
            <p className="text-xs text-slate-400 font-normal">
              Coordinated blood donation drives, winter relief, and environmental cleanups across local Kathmandu wards.
            </p>
          </div>

          <div className="p-6 rounded-2xl pro-card text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-white/[0.03] text-cyan-400 border border-white/[0.08] flex items-center justify-center">
              <Users2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white">Youth Engagement</h4>
            <p className="text-xs text-slate-400 font-normal">
              Mentored high-school and collegiate youth in public speaking, civic awareness, and self-defense confidence.
            </p>
          </div>

          <div className="p-6 rounded-2xl pro-card text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-white/[0.03] text-cyan-400 border border-white/[0.08] flex items-center justify-center">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-white">Event Organization</h4>
            <p className="text-xs text-slate-400 font-normal">
              Organized district leadership conventions, martial arts exhibitions, and inter-club coordination summits.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
