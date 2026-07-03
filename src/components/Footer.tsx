import { Linkedin, Mail, ArrowUpRight, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useView } from '../contexts/ViewContext';
import { PROFILE_EMAIL_HREF, PROFILE_LINKS, openCV } from '../constants/profile';

export default function Footer() {
  const { t } = useLanguage();
  const { setView } = useView();

  const goToContact = () => {
    setView('home');
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="relative overflow-hidden border-t border-stone-200 bg-stone-50 dark:border-white/10 dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,black,transparent)]" />

      <div className="container-page relative z-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">{t('nav.contact')}</span>
            <p className="mt-4 text-balance text-2xl font-bold tracking-tight text-gradient sm:text-3xl">
              {t('contact.bottomCta')}
            </p>
            <button
              onClick={goToContact}
              className="btn-primary group mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              {t('hero.contact')}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          <div className="flex items-center gap-5 md:pb-1">
            <a
              href={PROFILE_LINKS.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted transition-colors duration-300 hover:text-accent"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={PROFILE_EMAIL_HREF}
              aria-label="Email"
              className="text-ink-muted transition-colors duration-300 hover:text-accent"
            >
              <Mail size={20} />
            </a>
            <button
              onClick={openCV}
              className="text-sm font-medium text-ink-muted transition-colors duration-300 hover:text-accent"
            >
              {t('contact.downloadCV')}
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:text-ink dark:border-white/15 dark:bg-white/5 dark:hover:border-white/50"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-stone-200 pt-6 text-xs text-ink-muted dark:border-white/10 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="brand-chip flex h-6 w-6 items-center justify-center rounded font-mono text-[10px] font-bold">
              CO
            </span>
            <span>Camilo Otálora</span>
          </div>
          <span className="font-mono">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
