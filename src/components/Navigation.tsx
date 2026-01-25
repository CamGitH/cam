import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useView } from '../contexts/ViewContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { currentView, setView } = useView();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { view: 'home' as const, label: t('nav.home') },
    { view: 'skills' as const, label: t('nav.skills') },
    { view: 'certificates' as const, label: t('nav.certificates') },
    { view: 'cv' as const, label: t('nav.cv') },
  ];

  const handleContactClick = () => {
    setView('home');
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 md:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => setView('home')}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              CO
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => setView(link.view)}
                className={`transition-colors duration-300 font-medium ${
                  currentView === link.view
                    ? 'text-white border-b-2 border-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleContactClick}
              className="transition-colors duration-300 font-medium text-slate-300 hover:text-white"
            >
              {t('hero.contact')}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => {
                    setView(link.view);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left transition-colors duration-300 font-medium py-2 ${
                    currentView === link.view
                      ? 'text-white border-l-2 border-cyan-400 pl-2'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left transition-colors duration-300 font-medium py-2 text-slate-300 hover:text-white"
              >
                {t('hero.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
