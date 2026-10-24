import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-sm backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {personalInfo.location}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Hola, soy <span className="text-gradient">{personalInfo.shortName}</span>
            <br />
            <span className="text-slate-200 text-3xl sm:text-5xl lg:text-6xl font-bold">
              Backend Developer
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
            Especialista en arquitecturas backend escalables con <span className="text-slate-200 font-medium">NestJS, Node.js, Express y TypeScript</span>, bases de datos relacionales con <span className="text-slate-200 font-medium">PostgreSQL, TypeORM y Sequelize</span>, y soluciones en la nube con <span className="text-cyan-400 font-medium">AWS y RAG Local</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Ver APIs & Proyectos</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:bg-slate-800 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contactar</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Highlight Cards / Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-left hover:border-slate-700/80 transition-colors"
              >
                <div className="text-base sm:text-lg font-bold text-white mb-1 flex items-center gap-1.5">
                  <span className="text-cyan-400">▹</span>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
