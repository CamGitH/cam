import { Briefcase, GraduationCap, Download, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useView } from '../contexts/ViewContext';
import { getSkillStyle, getCertificateStyle } from '../constants/skillCategories';
import { openCV } from '../constants/profile';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Experience() {
  const { t } = useLanguage();
  const { setView } = useView();

  const experiences = [
    {
      type: 'education',
      title: t('experience.education.ai.degree'),
      company: t('experience.education.ai.school'),
      period: t('experience.education.ai.period'),
      description: t('experience.education.ai.description'),
      logo: {
        name: 'Sheridan OT',
        initials: 'SH',
        color: 'from-red-500 to-rose-600',
        src: '/logos/Sheridan.jpg',
      },
      tags: [
        { label: 'NLP / AI Integration', type: 'skill' as const },
        { label: 'Google Cloud', type: 'skill' as const },
        { label: 'Vertex AI', type: 'skill' as const },
        { label: 'LLMs', type: 'skill' as const },
      ],
    },
    {
      type: 'work',
      title: t('experience.senior.title'),
      company: t('experience.senior.company'),
      period: t('experience.senior.period'),
      description: t('experience.senior.description'),
      logo: {
        name: 'Mentum Group',
        initials: 'MG',
        color: 'from-sky-500 to-blue-700',
        src: '/logos/mentum.png',
      },
      tags: [
        { label: 'Power BI', type: 'certificate' as const },
        { label: 'Python', type: 'skill' as const },
        { label: 'SQL', type: 'skill' as const },
        { label: 'Power BI', type: 'skill' as const },
        { label: 'Power Automate', type: 'skill' as const },
        { label: 'Database Management', type: 'skill' as const },
        { label: 'Cloud Services', type: 'skill' as const },
        { label: 'Scrum', type: 'skill' as const },
      ],
    },
    {
      type: 'work',
      title: t('experience.intern.title'),
      company: t('experience.intern.company'),
      period: t('experience.intern.period'),
      description: t('experience.intern.description'),
      logo: {
        name: 'Avature',
        initials: 'AV',
        color: 'from-indigo-500 to-violet-700',
        src: '/logos/Avature.png',
      },
      tags: [
        { label: 'Intro to LLM', type: 'certificate' as const },
        { label: 'Python', type: 'skill' as const },
        { label: 'Java', type: 'skill' as const },
        { label: 'NLP / AI Integration', type: 'skill' as const },
        { label: 'Elasticsearch / ELK', type: 'skill' as const },
        { label: 'APIs & Integrations', type: 'skill' as const },
        { label: 'Git', type: 'skill' as const },
      ],
    },
    {
      type: 'work',
      title: t('experience.developer.title'),
      company: t('experience.developer.company'),
      period: t('experience.developer.period'),
      description: t('experience.developer.description'),
      logo: {
        name: 'NowBit',
        initials: 'NB',
        color: 'from-emerald-500 to-teal-700',
        src: '/logos/nowbit.png',
      },
      tags: [
        { label: 'Elastic Sales Engineer', type: 'certificate' as const },
        { label: 'Elastic Sales Specialist', type: 'certificate' as const },
        { label: 'Python', type: 'skill' as const },
        { label: 'Elasticsearch / ELK', type: 'skill' as const },
        { label: 'Data Analytics', type: 'skill' as const },
        { label: 'Jira', type: 'skill' as const },
        { label: 'Scrum', type: 'skill' as const },
        { label: 'Client Delivery', type: 'skill' as const },
      ],
    },
    {
      type: 'work',
      title: t('experience.pacific.title'),
      company: t('experience.pacific.company'),
      period: t('experience.pacific.period'),
      description: t('experience.pacific.description'),
      logo: {
        name: 'Procter & Gamble',
        initials: 'P&G',
        color: 'from-blue-600 to-cyan-700',
        src: '/logos/pg.jpg',
      },
      tags: [
        { label: 'Power Automate', type: 'skill' as const },
        { label: 'Power BI', type: 'skill' as const },
        { label: 'Data Analytics', type: 'skill' as const },
        { label: 'Advanced Excel', type: 'skill' as const },
        { label: 'Data Quality', type: 'skill' as const },
      ],
    },
    {
      type: 'work',
      title: t('experience.cofounder.title'),
      company: t('experience.cofounder.company'),
      period: t('experience.cofounder.period'),
      description: t('experience.cofounder.description'),
      logo: {
        name: 'AWKI',
        initials: 'AW',
        color: 'from-amber-500 to-orange-700',
      },
      tags: [
        { label: 'Kotlin', type: 'skill' as const },
        { label: 'Android Studio', type: 'skill' as const },
        { label: 'Firebase', type: 'skill' as const },
        { label: 'APIs & Integrations', type: 'skill' as const },
        { label: 'Payment APIs', type: 'skill' as const },
      ],
    },
    {
      type: 'education',
      title: t('experience.education.degree'),
      company: t('experience.education.school'),
      period: t('experience.education.period'),
      description: t('experience.education.description'),
      logo: {
        name: 'Universidad de los Andes',
        initials: 'UA',
        color: 'from-yellow-500 to-orange-600',
        src: '/logos/uniandes.png',
      },
      tags: [
        { label: 'Python', type: 'skill' as const },
        { label: 'Java', type: 'skill' as const },
        { label: 'SQL', type: 'skill' as const },
        { label: 'Data Analytics', type: 'skill' as const },
        { label: 'Algorithms', type: 'skill' as const },
      ],
    },
  ];

  return (
    <section id="experience" className="bg-stone-50 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index={2}
          eyebrow={t('nav.experience')}
          title={t('experience.title')}
          description={t('experience.subtitle')}
        />

        <Reveal className="mt-10 flex justify-center">
          <button
            onClick={openCV}
            className="group inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink"
          >
            <Download size={16} />
            {t('experience.downloadCV')}
          </button>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <span
            aria-hidden
            className="absolute left-0 top-2 bottom-6 w-px bg-gradient-to-b from-accent via-stone-300 to-stone-200/30 lg:left-1/2 lg:-translate-x-1/2"
          />
          <span
            aria-hidden
            className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_3px_rgba(37,99,235,0.12)] lg:left-1/2"
          />
          <ol>
          {experiences.map((exp, index) => {
            const NodeIcon = exp.type === 'work' ? Briefcase : GraduationCap;
            const isCurrent = exp.period.includes('Present') || exp.period.includes('Presente');
            const isLeft = index % 2 === 0;
            return (
              <Reveal
                as="li"
                key={index}
                delay={index * 60}
                className="group/row relative pb-10 pl-8 last:pb-0 sm:pl-10 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pb-14 lg:pl-0"
              >
                <span
                  className={`absolute -left-[15px] top-0 z-10 flex h-7 w-7 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-300 group-hover/row:scale-110 lg:left-1/2 lg:top-8 lg:-translate-x-1/2 ${
                    isCurrent
                      ? 'border-accent/40 text-accent shadow-[0_0_0_4px_rgba(37,99,235,0.08)]'
                      : 'border-stone-200 text-ink group-hover/row:border-accent/40 group-hover/row:text-accent'
                  }`}
                >
                  {isCurrent && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full border border-accent/40" />
                  )}
                  <NodeIcon size={13} strokeWidth={1.9} />
                </span>

                <span
                  aria-hidden
                  className="absolute top-[2.875rem] right-1/2 mr-[14px] hidden h-px w-6 -translate-y-1/2 bg-stone-300 transition-all duration-300 group-hover/row:w-8 group-hover/row:bg-accent/50 lg:block"
                />
                <span
                  aria-hidden
                  className="absolute top-[2.875rem] left-1/2 ml-[14px] hidden h-px w-6 -translate-y-1/2 bg-stone-300 transition-all duration-300 group-hover/row:w-8 group-hover/row:bg-accent/50 lg:block"
                />

                <div
                  className={`hidden items-start pt-1 lg:flex ${
                    isLeft ? 'justify-start lg:col-start-2' : 'justify-end lg:col-start-1'
                  } lg:row-start-1`}
                >
                  <OrganizationLogo logo={exp.logo} size="large" />
                </div>

                <article
                  className={`card card-hover card-accent sheen group p-6 lg:row-start-1 ${
                    isLeft ? 'lg:col-start-1' : 'lg:col-start-2'
                  }`}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-1 items-start gap-3">
                      <div className="mt-0.5 shrink-0 lg:hidden">
                        <OrganizationLogo logo={exp.logo} size="small" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-snug tracking-tight text-ink sm:text-lg">
                          {exp.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-ink-soft">
                          {renderEmojiText(exp.company)}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-mono text-xs font-medium transition-colors duration-300 ${
                        isCurrent
                          ? 'border border-accent/25 bg-accent/10 text-accent'
                          : 'bg-stone-100 text-ink-soft'
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {exp.description.trim() && (
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                      {exp.description}
                    </p>
                  )}

                  {exp.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-stone-100 pt-5">
                      {exp.tags.map((tag, tagIndex) => {
                        const Icon =
                          tag.type === 'certificate'
                            ? getCertificateStyle(tag.label).icon
                            : getSkillStyle(tag.label).icon;
                        return (
                          <button
                            key={tagIndex}
                            onClick={() =>
                              setView(tag.type === 'certificate' ? 'certificates' : 'skills')
                            }
                            title={tag.type === 'certificate' ? 'View certificate' : 'View skill'}
                            className="group inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-2.5 py-1 text-xs font-medium text-ink-soft transition-all duration-200 hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
                          >
                            <Icon size={13} strokeWidth={1.9} />
                            {tag.label}
                            <ArrowUpRight
                              size={11}
                              className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                            />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function OrganizationLogo({
  logo,
  size,
}: {
  logo: { name: string; initials: string; src?: string; color: string };
  size: 'small' | 'large';
}) {
  const boxSize = size === 'large' ? 'h-24 w-24 text-xl' : 'h-11 w-11 text-xs';

  return (
    <div
      className={`${boxSize} flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-stone-200 bg-white p-2 shadow-soft ring-4 ring-white/70 transition-transform duration-300 group-hover/row:scale-105`}
      title={logo.name}
      aria-label={logo.name}
    >
      {logo.src ? (
        <img src={logo.src} alt={logo.name} className="h-full w-full object-contain" />
      ) : (
        <span
          className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${logo.color} font-mono font-bold text-white`}
        >
          {logo.initials}
        </span>
      )}
    </div>
  );
}

function renderEmojiText(text: string) {
  const parts = text.split(/(🇨🇦|🇨🇴)/g);

  return parts.map((part, index) =>
    part === '🇨🇦' || part === '🇨🇴' ? (
      <span key={`${part}-${index}`} className="emoji-flag" aria-hidden="true">
        {part}
      </span>
    ) : (
      part
    )
  );
}
