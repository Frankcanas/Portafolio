import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { projectsData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export const Projects = () => {
  const [filter, setFilter] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Todos', 'Full Stack & Frontend', 'IA & NLP', 'Backend & APIs'];

  const filteredProjects =
    filter === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-3">
              Portafolio de Trabajo
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proyectos Destacados
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg">
              Soluciones construidas con enfoque en arquitectura limpia, rendimiento y tecnologías de vanguardia.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
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
              className={`rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 relative group ${
                project.featured
                  ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/5 hover:border-cyan-400/60'
                  : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90'
              }`}
            >
              <div>
                {/* Header / Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/50">
                      {project.category}
                    </span>
                  </div>
                  {project.badge && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-800/40">
                      <Sparkles className="w-3 h-3" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlight Snippet */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                    <p className="text-[11px] font-medium text-slate-300 flex items-start gap-1.5">
                      <span className="text-cyan-400 font-bold shrink-0">▸</span>
                      <span>{project.highlights[0]}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom section: tags and actions */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/70 text-slate-400 border border-slate-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-slate-800/40 text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Ver detalles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        aria-label={`Ver código en GitHub de ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Detail View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
