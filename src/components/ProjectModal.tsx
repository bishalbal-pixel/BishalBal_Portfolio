import { X, ExternalLink, Github, CheckCircle, Layers, Cpu, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
              {project.category}
            </span>
            {project.metrics && (
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                {project.metrics}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-cyan-300">
            {project.tagline}
          </p>
        </div>

        {/* Mock UI Showcase Frame */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-[#080B10] border border-slate-800/90 p-6 sm:p-8 shadow-inner">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 text-slate-400">preview://{project.id}.bishalbal.dev</span>
            </div>
            <span className="text-cyan-400 text-[11px]">PRODUCTION PREVIEW</span>
          </div>

          <div className="space-y-4 py-2">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">System Architecture & Design</h4>
                <p className="text-xs text-slate-400">Tailored full-stack solution designed for high reliability and clean data models</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono text-slate-300 space-y-1">
              <p className="text-cyan-400"># Key Architectural Pillars</p>
              <p>• Modular service layer separated from client presentation</p>
              <p>• Accessible UI with WCAG AA compliance & mobile responsiveness</p>
              <p>• Secure session handling & input sanitization</p>
            </div>
          </div>
        </div>

        {/* Detailed Overview */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">Overview & Problem Solved</h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">Core Capabilities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/70 text-xs text-slate-300"
              >
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="space-y-2.5">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-md"
              >
                <span>Live Project View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white px-3 py-2"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
