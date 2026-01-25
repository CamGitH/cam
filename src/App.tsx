import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CVUpload from './components/CVUpload';
import { useView } from './contexts/ViewContext';
import { useEffect } from 'react';

function App() {
  const { currentView, setView } = useView();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'cv-upload') {
        setView('cv-upload');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setView]);

  return (
    <div className="min-h-screen">
      {currentView !== 'cv-upload' && <Navigation />}

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

      {currentView === 'cv-upload' && <CVUpload />}
    </div>
  );
}

export default App;
