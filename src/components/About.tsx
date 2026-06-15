import { Brain, Code, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Brain,
      title: 'Problem Solver',
      description:
        'Analytical thinking meets creative solutions. I thrive on turning complex challenges into elegant, efficient code.',
    },
    {
      icon: Code,
      title: 'Full Stack Developer',
      description:
        'From database architecture to pixel-perfect UIs, I build end-to-end solutions with modern technologies.',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description:
        'Optimization is in my DNA. I create fast, scalable applications that handle millions of operations seamlessly.',
    },
  ];

  return (
    <section id="about" className="relative border-t border-stone-200/70 bg-white py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              index={1}
              eyebrow={t('nav.about')}
              title={t('about.title')}
              description={t('about.subtitle')}
              align="left"
            />
          </div>

          <div className="space-y-5 lg:col-span-7 lg:pt-2">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
                {t('about.description')}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="leading-relaxed text-ink-muted">{t('about.interests')}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 100}>
                <article className="card card-hover card-accent sheen group h-full p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-ink transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5 group-hover:text-accent">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs text-stone-300 transition-colors duration-300 group-hover:text-accent/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
