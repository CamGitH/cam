import { Award, Shield, Star, Sparkles, Medal, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const certificates = [
  {
    icon: Shield,
    title: 'Elastic Accredited Sales Engineer – Security',
    issuer: 'Elastic',
    date: '2024',
    description: 'Professional accreditation focused on Elastic Security solutions, positioning, and technical sales engineering.',
    skills: ['Elastic Security', 'Threat Detection', 'Sales Engineering'],
    type: 'accreditation',
    gradient: 'from-blue-400 via-cyan-500 to-blue-600',
    borderColor: 'border-blue-400',
    glowColor: 'shadow-blue-500/50'
  },
  {
    icon: Shield,
    title: 'Elastic Accredited Sales Engineer – Enterprise Search',
    issuer: 'Elastic',
    date: '2024',
    description: 'Professional accreditation in Enterprise Search solutions, architecture, and customer-facing technical enablement.',
    skills: ['Enterprise Search', 'Elastic Stack', 'Solution Design'],
    type: 'accreditation',
    gradient: 'from-blue-400 via-sky-500 to-blue-600',
    borderColor: 'border-blue-400',
    glowColor: 'shadow-blue-500/50'
  },
  {
    icon: Shield,
    title: 'Elastic Accredited Sales Engineer – Observability',
    issuer: 'Elastic',
    date: '2024',
    description: 'Professional accreditation covering Elastic Observability use cases, solution design, and sales engineering.',
    skills: ['Observability', 'Logs & Metrics', 'APM'],
    type: 'accreditation',
    gradient: 'from-cyan-400 via-blue-500 to-blue-600',
    borderColor: 'border-cyan-400',
    glowColor: 'shadow-cyan-500/50'
  },
  {
    icon: Star,
    title: 'Elastic Accredited Sales Specialist – Security',
    issuer: 'Elastic',
    date: '2024',
    description: 'Sales specialist accreditation focused on Elastic Security value propositions and customer engagement.',
    skills: ['Elastic Security', 'Customer Enablement', 'Pre-Sales'],
    type: 'accreditation',
    gradient: 'from-blue-500 via-blue-600 to-cyan-600',
    borderColor: 'border-blue-400',
    glowColor: 'shadow-blue-500/50'
  },
  {
    icon: Star,
    title: 'Elastic Accredited Sales Specialist – Observability',
    issuer: 'Elastic',
    date: '2024',
    description: 'Sales specialist accreditation focused on observability solutions, metrics, logs, and APM.',
    skills: ['Observability', 'Monitoring', 'Sales Specialist'],
    type: 'accreditation',
    gradient: 'from-sky-400 via-blue-500 to-blue-600',
    borderColor: 'border-sky-400',
    glowColor: 'shadow-sky-500/50'
  },
  {
    icon: Star,
    title: 'Elastic Accredited Sales Specialist – Enterprise Search',
    issuer: 'Elastic',
    date: '2024',
    description: 'Sales specialist accreditation for Enterprise Search solutions and business-driven search use cases.',
    skills: ['Enterprise Search', 'Business Search', 'Elastic'],
    type: 'accreditation',
    gradient: 'from-sky-400 via-blue-500 to-cyan-600',
    borderColor: 'border-sky-400',
    glowColor: 'shadow-sky-500/50'
  },
  {
    icon: Award,
    title: 'Elastic Accredited Sales Professional',
    issuer: 'Elastic',
    date: '2024',
    description: 'Professional accreditation validating core Elastic Stack knowledge and solution positioning.',
    skills: ['Elastic Stack', 'Solution Positioning', 'Sales Professional'],
    type: 'accreditation',
    gradient: 'from-blue-400 via-blue-500 to-cyan-600',
    borderColor: 'border-blue-400',
    glowColor: 'shadow-blue-500/50'
  },
  {
    icon: Trophy,
    title: 'Microsoft Certified: Power BI Data Analyst',
    issuer: 'Microsoft',
    date: '2023',
    description: 'Official Microsoft certification validating expertise in data modeling, visualization, and analytics using Power BI.',
    skills: ['Power BI', 'Data Modeling', 'Data Visualization'],
    type: 'certification',
    gradient: 'from-amber-400 via-yellow-500 to-orange-500',
    borderColor: 'border-amber-400',
    glowColor: 'shadow-amber-500/50'
  },
  {
    icon: Sparkles,
    title: 'Intro to Large Language Models',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Foundational course covering large language model concepts, capabilities, and applications.',
    skills: ['LLMs', 'AI Fundamentals', 'NLP'],
    type: 'training',
    gradient: 'from-teal-400 via-emerald-500 to-green-600',
    borderColor: 'border-teal-400',
    glowColor: 'shadow-teal-500/50'
  },
  {
    icon: Medal,
    title: 'Google Cloud AI Principles',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Training on applying responsible AI principles within Google Cloud environments.',
    skills: ['Google Cloud', 'AI Principles', 'Responsible AI'],
    type: 'training',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    borderColor: 'border-emerald-400',
    glowColor: 'shadow-emerald-500/50'
  },
  {
    icon: Sparkles,
    title: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Hands-on training in prompt engineering and generative AI workflows using Vertex AI.',
    skills: ['Prompt Engineering', 'Vertex AI', 'Generative AI'],
    type: 'training',
    gradient: 'from-teal-400 via-green-500 to-emerald-600',
    borderColor: 'border-teal-400',
    glowColor: 'shadow-teal-500/50'
  }
];

export default function Certificates() {
  const { t } = useLanguage();

  const getCredentialTypeLabel = (type: string) => {
    const typeConfig = {
      certification: {
        label: t('certificates.type.certification'),
        color: 'text-amber-600 dark:text-amber-400',
        dot: 'bg-amber-500',
      },
      accreditation: {
        label: t('certificates.type.accreditation'),
        color: 'text-blue-600 dark:text-blue-400',
        dot: 'bg-blue-500',
      },
      training: {
        label: t('certificates.type.training'),
        color: 'text-emerald-600 dark:text-emerald-400',
        dot: 'bg-emerald-500',
      },
    };
    return typeConfig[type as keyof typeof typeConfig] || typeConfig.training;
  };

  const legend = (['accreditation', 'certification', 'training'] as const).map((type) => ({
    ...getCredentialTypeLabel(type),
    count: certificates.filter((c) => c.type === type).length,
  }));

  return (
    <section className="relative min-h-screen bg-stone-50 pb-24 pt-32 dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-grid mask-fade-b" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow={t('nav.certificates')}
          title={t('certificates.title')}
          description={t('certificates.subtitle')}
        />

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {legend.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-soft dark:border-white/10 dark:bg-zinc-900"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
              <span className="capitalize">{item.label.toLowerCase()}</span>
              <span className="font-mono text-ink-muted">{item.count}</span>
            </span>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            const typeInfo = getCredentialTypeLabel(cert.type);
            return (
              <Reveal key={index} delay={(index % 3) * 80}>
                <article className="card card-hover sheen group h-full overflow-hidden">
                  <div className={`h-1 w-full bg-gradient-to-r ${cert.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cert.gradient} text-white shadow-sm transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon size={22} strokeWidth={1.9} />
                      </div>
                      <span
                        className={`font-mono text-[10px] font-semibold uppercase tracking-widest ${typeInfo.color}`}
                      >
                        {typeInfo.label}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-semibold leading-snug tracking-tight text-ink">
                      {cert.title}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-2 text-xs text-ink-muted">
                      <span className="font-medium text-ink-soft">{cert.issuer}</span>
                      <span className="h-1 w-1 rounded-full bg-stone-300 dark:bg-white/20" />
                      <span className="font-mono">{cert.date}</span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                      {cert.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-stone-100 pt-4 dark:border-white/10">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-xs font-medium text-ink-soft dark:border-white/10 dark:bg-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
