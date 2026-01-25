import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import CV from './components/CV';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useView } from './contexts/ViewContext';

function App() {
  const { currentView } = useView();

  return (
    <div className="min-h-screen">
      <Navigation />

      {currentView === 'home' && (
        <>
          <Hero />
          <About />
          <Experience />
          <Contact />
        </>
      )}

      {currentView === 'skills' && <Skills />}

      {currentView === 'certificates' && <Certificates />}

      {currentView === 'cv' && <CV />}
    </div>
  );
}

export default App;
