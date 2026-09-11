import { 
  Wrench, 
  Code2, 
  Shield, 
  Users2, 
  Compass, 
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { journeyMilestones, personalInfo } from '../data/portfolioData';

export default function About() {
  const brandPillars = [
    {
      title: "Software Engineering",
      subtitle: "Systems & Architecture",
      icon: Code2,
      desc: "Applying algorithmic logic, modular design, and robust backend engineering with Python, Django, and modern web frameworks."
    },
    {
      title: "Kyokushin Karate",
      subtitle: "3rd Dan Black Belt",
      icon: Shield,
      desc: "Over 12 years of grueling full-contact training instilling relentless perseverance (Osu), emotional calm, and laser focus."
    },
    {
      title: "Civic Leadership",
      subtitle: "Leo District 325L Coordinator",
      icon: Users2,
      desc: "Charter president and regional coordinator leading diverse youth squads, organizing conventions, and mobilizing teams."
    },
    {
      title: "Automobile Engineering",
      subtitle: "Diagnostics & Mechanical Roots",
      icon: Wrench,
      desc: "Diploma background providing hands-on mechanical diagnostics, systems thermodynamics, and physical engineering intuition."
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t hairline-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-cyan-400/60 inline-block"></span>
            <span>01 // BACKGROUND & FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            The Intersection of Engineering, Martial Arts & Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            I am a Software Engineering student at PCPS College in Kathmandu with an unconventional, highly disciplined foundation. 
            My background fuses physical engineering rigor from Automobile Engineering with 12+ years of Kyokushin Karate and executive civic leadership through Leo Clubs.
          </p>
        </div>

        {/* Narrative & Personal Brand Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* In-depth Narrative Card */}
          <div className="lg:col-span-7 pro-card rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                How Discipline Shapes My Code
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Most students enter computer science through traditional academic channels. My journey began under the hood of automobiles, diagnosing mechanical linkages, electrical circuitry, and combustion cycles during my <strong className="text-white font-semibold">Diploma in Automobile Engineering</strong>.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Simultaneously, from childhood through adulthood, I spent over a decade barefoot on dojo tatami mats, earning my <strong className="text-cyan-300 font-semibold">3rd Dan Black Belt in Kyokushin Karate</strong>. In Kyokushin, you learn that fatigue is merely a suggestion and that precision under stress is everything. When facing complex bugs, race conditions, or architecture hurdles, I apply that exact same calm, relentless endurance.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Through my leadership roles as <strong className="text-white font-semibold">Charter President</strong> and now <strong className="text-white font-semibold">Region Coordinator for Leo District Council 325L</strong>, I learned that technology without human empathy is incomplete. Today, I combine all three pillars to build impactful, scalable software.
              </p>
            </div>

            {/* Quote Banner */}
            <div className="p-4 rounded-xl bg-black/40 border-l-2 border-cyan-400 text-xs sm:text-sm text-slate-300 italic font-mono">
              "{personalInfo.quote}"
            </div>
          </div>

          {/* Quick Pillars Bento */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {brandPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 rounded-lg bg-white/[0.03] text-cyan-400 border border-white/[0.06] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-400">{pillar.subtitle}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Visual Journey Milestones Timeline */}
        <div className="pro-card rounded-2xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b hairline-divider">
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">EVOLUTION OF A MULTI-DISCIPLINARY MAKER</span>
              <h3 className="text-2xl font-display font-bold text-white mt-1">
                My Journey So Far
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/[0.06]">
              Automobile → Kyokushin → Software Engineering
            </span>
          </div>

          {/* Timeline Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {journeyMilestones.map((item, index) => (
              <div 
                key={index}
                className="relative rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 hover:border-cyan-500/40 transition-all group flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.08]">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs text-slate-400 font-mono mt-0.5 mb-3">
                    {item.institution}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Milestone</span>
                  <span className="text-cyan-400 font-medium">✓ Completed / Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
