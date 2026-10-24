import { Calendar } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experiencia" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Trayectoria
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiencia & Hitos Técnicos
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Proyectos reales donde he asumido liderazgo frontend, arquitectura y entrega de valor.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-400/50" />

              {/* Content card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-cyan-800/40">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {item.company}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.role}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
