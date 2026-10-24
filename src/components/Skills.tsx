import { useState } from 'react';
import { Layout, Server, Sparkles, Terminal, Check } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  Sparkles,
  Terminal,
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number | 'all'>('all');

  const displayedCategories =
    activeCategory === 'all'
      ? skillsCategories
      : [skillsCategories[activeCategory]];

  return (
    <section id="habilidades" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/40 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Habilidades Técnicas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stack Tecnológico & Competencias
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Herramientas, frameworks y metodologías que utilizo para transformar requerimientos de negocio en software de producción.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Todas las áreas
          </button>
          {skillsCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === idx
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat.title}
          </button>
        ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Layout;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {category.title}
                      </h3>
                      <p className="text-slate-500 text-xs">
                        {category.skills.length} tecnologías clave
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-cyan-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="text-slate-200 text-xs sm:text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/50">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
