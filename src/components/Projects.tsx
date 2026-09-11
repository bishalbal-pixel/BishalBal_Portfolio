import { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  ArrowUpRight, 
  Terminal, 
  Sparkles,
  Info
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

type CategoryFilter = 'All' | 'Web Development' | 'Software Projects' | 'AI / Prompt Engineering' | 'Personal Projects';

const categories: CategoryFilter[] = [
  'All',
  'Web Development',
  'Software Projects',
  'AI / Prompt Engineering',
  'Personal Projects'
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative border-t hairline-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-cyan-400/60 inline-block"></span>
              <span>03 // SELECTED WORK & SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Crafted with Discipline & Code
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal">
              Explore software applications, full-stack systems, and prompt engineering utilities developed to solve practical domain problems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-white/[0.02] border border-white/[0.08] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl pro-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail / UI Frame */}
                <div className="relative h-44 w-full bg-[#0B0D12] border-b border-white/[0.06] p-4 flex flex-col justify-between overflow-hidden">
                  
                  {/* Window Dot controls & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white/20"></span>
                      <span className="w-2 h-2 rounded-full bg-white/20"></span>
                      <span className="w-2 h-2 rounded-full bg-white/20"></span>
                      <span className="text-[10px] font-mono text-slate-500 ml-2">{project.id}</span>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.07] text-cyan-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Thumbnail center graphic placeholder */}
                  <div className="my-auto text-center space-y-1">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                      <Terminal className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Metrics Badge */}
                  {project.metrics && (
                    <div className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/[0.05] self-start">
                      {project.metrics}
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-cyan-300 border border-white/[0.08] text-xs font-medium transition-all"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-white hover:border-white/[0.12] transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                      title="View Live Application"
                      aria-label={`${project.title} Live URL`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Customization Guidance Note */}
        <div className="mt-12 p-4 rounded-xl pro-card text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            All projects are centrally configured in <code>src/data/portfolioData.ts</code> for instant editing.
          </span>
          <a
            href="https://github.com/bishalbal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>Browse more repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Interactive Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
