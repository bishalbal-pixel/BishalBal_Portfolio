import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MartialArts from './components/MartialArts';
import Leadership from './components/Leadership';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B10] text-[#E2E8F0] selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MartialArts />
        <Leadership />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
