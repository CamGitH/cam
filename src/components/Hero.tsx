import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import FloatingCode from './FloatingCode';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <AnimatedBackground />
        <FloatingCode />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                CO
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Camilo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Otalora</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-6">
            {t('hero.title')}
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                English 🇺🇸
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  language === 'es'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                Español 🇪🇸
              </button>
            </div>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="https://www.linkedin.com/in/camilo-otalora" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@camilotalora.it.com" className="text-slate-400 hover:text-white transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
