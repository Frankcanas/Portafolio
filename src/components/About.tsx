import { Map, Layers, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  const highlights = [
    {
      icon: Map,
      title: 'GIS & Mapas Interactivos',
      desc: 'Dominio de Leaflet y capas interactivas para rutas comerciales, asegurando gestión limpia de memoria y ciclo de vida.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Layers,
      title: 'Clean Architecture & DDD',
      desc: 'Desacoplamiento estricto de UI y estado mediante Custom Hooks en frontend y arquitectura modular en backend.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Cpu,
      title: 'IA Aplicada & RAG Local',
      desc: 'Desarrollo de asistentes inteligentes con Ollama y embeddings locales que garantizan 100% de privacidad y cero costos en tokens.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: ShieldCheck,
      title: 'Calidad & Anti-Vibecoding',
      desc: 'Compromiso con pruebas, linting estricto, TypeScript sin tipos laxos y pipelines de CI/CD automatizados.',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Perfil Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sobre Mí & Filosofía de Desarrollo
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Combinando ingeniería de software rigurosa, sensibilidad de diseño UI/UX e innovación en Inteligencia Artificial.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-base leading-relaxed">
            {personalInfo.aboutText.map((paragraph, idx) => (
              <p key={idx} className="bg-slate-900/30 p-4 rounded-xl border border-slate-800/60">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>React 19 & Next.js</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>TypeScript Estricto</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NestJS & Clean Architecture</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>RAG Local & Ollama</span>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
