import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 z-10 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                {project.badge}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-6 text-sm sm:text-base text-slate-300">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Descripción del Proyecto
            </h4>
            <p className="leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/70">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="bg-gradient-to-r from-slate-950/80 to-indigo-950/30 p-4 rounded-xl border border-indigo-900/40 flex items-start gap-3">
              <Cpu className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs uppercase tracking-wider text-indigo-300 font-bold mb-1">
                  Arquitectura & Diseño Técnico
                </h5>
                <p className="text-xs sm:text-sm text-slate-300">
                  {project.architectureNotes}
                </p>
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Puntos Técnicos Destacados
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Tags */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Tecnologías Utilizadas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Ver en GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo en Vivo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
