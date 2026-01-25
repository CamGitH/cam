import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
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
    </div>
  );
}

export default App;
