import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useView } from '../contexts/ViewContext';

function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const options: Array<'en' | 'es'> = ['en', 'es'];

  return (
    <div
      className={`inline-flex items-center rounded-full border border-stone-200 bg-white/70 p-0.5 dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      {options.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
            language === lang
              ? 'brand-chip'
              : 'text-ink-muted hover:text-ink'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-white/70 text-ink-muted transition-colors duration-300 hover:text-ink dark:border-white/10 dark:bg-white/5"
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { currentView, setView } = useView();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { view: 'home' as const, label: t('nav.home') },
    { view: 'projects' as const, label: t('nav.projects') },
    { view: 'skills' as const, label: t('nav.skills') },
    { view: 'certificates' as const, label: t('nav.certificates') },
  ];

  const handleContactClick = () => {
    setView('home');
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-stone-200/70 bg-stone-50/80 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            onClick={() => setView('home')}
            className="group flex items-center gap-3"
            aria-label="Go to home"
          >
            <span className="brand-chip flex h-9 w-9 items-center justify-center rounded-lg font-mono text-sm font-bold transition-transform duration-300 group-hover:-translate-y-0.5">
              CO
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
              Camilo Otálora
            </span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => setView(link.view)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    currentView === link.view
                      ? 'text-ink'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                      currentView === link.view ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="h-5 w-px bg-stone-200 dark:bg-white/10" />

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageToggle />
              <button
                onClick={handleContactClick}
                className="btn-primary rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
              >
                {t('hero.contact')}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ink"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-stone-200/70 py-5 dark:border-white/10 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => {
                    setView(link.view);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200 ${
                    currentView === link.view
                      ? 'bg-stone-100 text-ink dark:bg-white/10'
                      : 'text-ink-muted hover:bg-stone-100 hover:text-ink dark:hover:bg-white/5'
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
                className="btn-primary mt-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium"
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
