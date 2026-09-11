import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  GraduationCap,
  Shield,
  Code2
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Martial Arts Teaching':
        return {
          label: 'Martial Arts Pedagogy',
          classes: 'bg-red-950/70 border-red-800/60 text-red-400',
          icon: Shield
        };
      case 'Leadership':
        return {
          label: 'District Leadership',
          classes: 'bg-amber-950/70 border-amber-800/60 text-amber-400',
          icon: Building2
        };
      case 'Software / Tech':
        return {
          label: 'Software & Projects',
          classes: 'bg-cyan-950/70 border-cyan-800/60 text-cyan-400',
          icon: Code2
        };
      default:
        return {
          label: type,
          classes: 'bg-slate-900 border-slate-800 text-slate-300',
          icon: Briefcase
        };
    }
  };

  return (
    <section id="experience" className="py-24 relative border-t hairline-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-cyan-400/60 inline-block"></span>
            <span>06 // CAREER & RESPONSIBILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Professional Experience & Teaching
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Real-world track record instructing students at prestigious academic institutions, coordinating district operations, and building practical software platforms.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-6">
          {experienceData.map((exp) => {
            const badge = getTypeBadge(exp.type);
            const BadgeIcon = badge.icon;

            return (
              <div
                key={exp.id}
                className="group rounded-2xl pro-card p-6 sm:p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/[0.06] mb-6">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300">
                        <BadgeIcon className="w-3 h-3 text-cyan-400" />
                        <span>{badge.label}</span>
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                      <span>{exp.organization}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs font-mono text-slate-400 font-normal flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300 self-start lg:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Responsibilities & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 font-normal"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills gained pill tags */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Core Skills Applied:</span>
                  {exp.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
