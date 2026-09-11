import { useState } from 'react';
import { 
  Code, 
  Server, 
  FileCode, 
  Palette, 
  Cpu, 
  GitBranch, 
  Smartphone, 
  Network, 
  Award, 
  MessageSquare, 
  Users, 
  BookOpen, 
  Calendar, 
  CheckSquare, 
  Mic,
  Filter,
  CheckCircle2,
  Terminal,
  Layout
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon resolver map
const iconMap: Record<string, any> = {
  FileCode,
  Server,
  Code,
  Layout,
  Palette,
  Cpu,
  GitBranch,
  Smartphone,
  Network,
  Award,
  MessageSquare,
  Users,
  BookOpen,
  Calendar,
  CheckSquare,
  Mic
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'tech' | 'professional'>('all');

  const filteredSkills = skillsData.filter(skill => {
    if (activeTab === 'all') return true;
    if (activeTab === 'tech') return skill.category === 'tech' || skill.category === 'tools';
    if (activeTab === 'professional') return skill.category === 'professional';
    return true;
  });

  return (
    <section id="skills" className="py-24 relative border-t hairline-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-cyan-400/60 inline-block"></span>
              <span>02 // COMPETENCIES & TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Skills Built for Real Execution
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal">
              A balanced blend of modern software development, robust backend engineering, and proven interpersonal leadership honed across academic sprints, dojos, and community councils.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white/[0.02] border border-white/[0.08] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills ({skillsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tech')}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'tech'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Technology & Tools
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('professional')}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'professional'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Leadership & Teaching
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Code;

            return (
              <div
                key={index}
                className="group relative rounded-2xl pro-card p-6 flex flex-col justify-between"
              >
                {/* Header of Card */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] text-cyan-400 border border-white/[0.08] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300">
                      {skill.proficiency}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </div>

                {/* Footer contextual tag */}
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="capitalize">{skill.category === 'tech' ? 'Software' : skill.category}</span>
                  <span className="flex items-center gap-1 text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    Applied in Projects
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discipline / Methodology Callout */}
        <div className="mt-12 p-6 rounded-2xl pro-card flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white/[0.03] text-cyan-400 border border-white/[0.08] shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-semibold text-white">
                Continuous Learning & Engineering Rigor
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal">
                I do not claim arbitrary percentage scores. Instead, my skills are validated through reproducible GitHub commits, deployed student and community platforms, and daily training on and off the mat.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/bishalbal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-white text-xs font-mono border border-white/[0.08] transition-all shrink-0"
          >
            <span>Explore My GitHub</span>
            <span className="text-cyan-400">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
