import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t hairline-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-cyan-400/60 inline-block"></span>
            <span>07 // ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Education & Technical Grounding
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Bridging mechanical engineering precision with computer science theory, algorithms, and modern software development practices.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-2xl pro-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono ${
                    edu.status === 'In Progress'
                      ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium'
                      : 'bg-white/[0.03] border border-white/[0.08] text-slate-300'
                  }`}>
                    {edu.status === 'In Progress' ? '● Enrolled' : '✓ Completed 2023'}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                  {edu.degree}
                </h3>

                <div className="text-sm font-semibold text-cyan-400 mb-2">
                  {edu.institution}
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-slate-400 mb-4">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>{edu.location}</span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Curriculum & Core Areas
                  </h4>
                  {edu.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 font-normal"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Domain Focus</span>
                <span className="text-cyan-300">
                  {edu.degree.includes('Software') ? 'Software Engineering & AI' : 'Mechanical Diagnostics'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
