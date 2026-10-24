import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-cyan-500 selection:text-white">
      {/* Background subtle grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Main navigation */}
      <Navbar />

      {/* Main page content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
