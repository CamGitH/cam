import { ReactNode } from 'react';
import { Linkedin, Mail, ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { PROFILE_EMAIL_HREF, PROFILE_LINKS, openCV } from '../constants/profile';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-stone-50 pb-16 pt-28"
    >
      {/* Layered background */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_70%_at_60%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-lines opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[130px] animate-pulse-slow" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-sky-400/10 blur-[120px]" />

      <div className="container-page relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left — content */}
          <div>
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-xs font-medium text-ink-soft shadow-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t('hero.availability')}
            </span>

            <span className="eyebrow mt-6 block animate-fade-up [animation-delay:60ms]">
              {t('hero.title')}
            </span>

            <div className="mt-4 flex animate-fade-up items-center gap-4 [animation-delay:120ms] sm:gap-6">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent/40 to-sky-400/30 blur-md" />
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-stone-200 bg-white shadow-soft ring-1 ring-stone-900/5 sm:h-20 sm:w-20">
                  <img
                    src="/c.jpg"
                    alt="Camilo Otálora"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden h-full w-full items-center justify-center bg-ink text-xl font-bold text-white">
                    CO
                  </div>
                </div>
                <span className="absolute bottom-0.5 right-0.5 h-4 w-4 rounded-full border-2 border-stone-50 bg-emerald-500" />
              </div>

              <h1 className="text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
                <span className="text-gradient">Camilo</span>{' '}
                <span className="text-gradient-accent">Otálora</span>
              </h1>
            </div>

            <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-ink-muted [animation-delay:200ms] sm:text-lg">
              {t('hero.description')}
            </p>

            <div className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:280ms] sm:flex-row sm:items-center">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-ink hover:shadow-glow"
              >
                {t('hero.contact')}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <button
                onClick={openCV}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/60 px-6 py-3 text-sm font-semibold text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-ink"
              >
                <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                {t('experience.downloadCV')}
              </button>
            </div>

            <div className="mt-8 flex animate-fade-up items-center gap-5 [animation-delay:340ms]">
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
            </div>
          </div>

          {/* Right — code-window profile card */}
          <div className="relative animate-fade-up [animation-delay:240ms]">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-accent/15 via-transparent to-sky-400/10 blur-2xl" />
            {/* Offset frame for depth */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-stone-200/70" />

            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[0_30px_80px_-30px_rgba(24,24,27,0.6)]">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/60 px-4 py-3">
                <div className="window-dots">
                  <span className="bg-red-400/80" />
                  <span className="bg-amber-400/80" />
                  <span className="bg-emerald-400/80" />
                </div>
                <span className="font-mono text-xs text-zinc-500">camilo.ts</span>
                <span className="rounded bg-blue-500/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-blue-300">
                  TS
                </span>
              </div>

              {/* Code body */}
              <div className="overflow-x-auto px-4 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
                <pre className="text-zinc-300">
                  <Line n={1}>
                    <K>const</K> <I>engineer</I> <P>= {'{'}</P>
                  </Line>
                  <Line n={2}>
                    {'  '}
                    <Prop>name</Prop>
                    <P>:</P> <S>"Camilo Otálora Rivadeneira"</S>
                    <P>,</P>
                  </Line>
                  <Line n={3}>
                    {'  '}
                    <Prop>role</Prop>
                    <P>:</P> <S>"Data, Cloud &amp; AI Specialist"</S>
                    <P>,</P>
                  </Line>
                  <Line n={4}>
                    {'  '}
                    <Prop>stack</Prop>
                    <P>: [</P>
                    <S>"Python"</S>
                    <P>,</P> <S>"SQL"</S>
                    <P>,</P>
                  </Line>
                  <Line n={5}>
                    {'         '}
                    <S>"Elastic"</S>
                    <P>,</P> <S>"Azure"</S>
                    <P>],</P>
                  </Line>
                  <Line n={6}>
                    {'  '}
                    <Prop>focus</Prop>
                    <P>:</P> <S>"Automation &amp; Consulting"</S>
                    <P>,</P>
                  </Line>
                  <Line n={7}>
                    {'  '}
                    <Prop>available</Prop>
                    <P>:</P> <B>true</B>
                    <span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 animate-caret bg-accent-soft" />
                  </Line>
                  <Line n={8}>
                    <P>{'};'}</P>
                  </Line>
                </pre>
              </div>
            </div>

            {/* Floating motif chip */}
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-stone-200 bg-white/90 px-3 py-2 shadow-lift backdrop-blur sm:block">
              <span className="font-mono text-xs text-ink-muted">
                <span className="text-accent">//</span> {t('hero.availability').toLowerCase()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label={t('hero.scroll')}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-fade-in flex-col items-center gap-1.5 text-ink-muted [animation-delay:700ms] hover:text-ink md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{t('hero.scroll')}</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}

/* Syntax-highlight primitives for the hero code card */
function Line({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex">
      <span className="mr-4 w-4 select-none text-right text-zinc-600">{n}</span>
      <span className="whitespace-pre">{children}</span>
    </div>
  );
}
const K = ({ children }: { children: ReactNode }) => (
  <span className="text-violet-300">{children}</span>
);
const I = ({ children }: { children: ReactNode }) => (
  <span className="text-sky-300">{children}</span>
);
const Prop = ({ children }: { children: ReactNode }) => (
  <span className="text-zinc-400">{children}</span>
);
const S = ({ children }: { children: ReactNode }) => (
  <span className="text-emerald-300">{children}</span>
);
const B = ({ children }: { children: ReactNode }) => (
  <span className="text-amber-300">{children}</span>
);
const P = ({ children }: { children: ReactNode }) => (
  <span className="text-zinc-500">{children}</span>
);
