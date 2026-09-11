import { 
  Trophy, 
  Award, 
  ShieldCheck, 
  Medal, 
  Crown, 
  Heart, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Martial Arts':
        return { icon: ShieldCheck, color: 'text-cyan-400' };
      case 'Leadership':
        return { icon: Crown, color: 'text-cyan-400' };
      case 'Community':
        return { icon: Heart, color: 'text-cyan-400' };
      default:
        return { icon: Trophy, color: 'text-cyan-400' };
    }
  };

  return (
    <section id="achievements" className="py-24 relative border-t hairline-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-cyan-400/60 inline-block"></span>
            <span>08 // HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Milestones & Proven Track Record
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Tangible outcomes of consistent discipline across full-contact martial arts tournaments, district leadership conventions, and educational service.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => {
            const style = getCategoryIcon(item.category);
            const Icon = style.icon;

            return (
              <div
                key={item.id}
                className="group rounded-2xl pro-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>

                    {item.badge && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-300">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400 mb-3">
                    {item.organization} • {item.year}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="capitalize">{item.category}</span>
                  <span className="text-cyan-400 font-medium">★ Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
