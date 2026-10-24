import { ArrowUp, Code2 } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                Frank Cañas
              </p>
              <p className="text-slate-500 text-xs">
                Frontend Lead & Full Stack Developer
              </p>
            </div>
          </div>

          {/* Center text */}
          <div className="flex items-center gap-1.5 text-slate-400 text-xs text-center">
            <span>Construido con React 19, TypeScript & Tailwind CSS</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors text-xs"
            aria-label="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </footer>
  );
};
