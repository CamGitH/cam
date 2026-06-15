import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useView } from './contexts/ViewContext';

function App() {
  const { currentView } = useView();

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <About />
            <Experience />
            <Contact />
          </>
        )}

        {currentView === 'projects' && <Projects />}

        {currentView === 'skills' && <Skills />}

        {currentView === 'certificates' && <Certificates />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
