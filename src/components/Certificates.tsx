import { Award, Shield, Star, Sparkles, Medal, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';
import FloatingCode from './FloatingCode';

export default function Certificates() {
  const { t } = useLanguage();

  const certificates = [
    {
      icon: Shield,
      title: t('projects.cert1.title'),
      issuer: t('projects.cert1.issuer'),
      date: t('projects.cert1.date'),
      description: t('projects.cert1.description'),
      skills: ['Elastic', 'Security', 'Sales Engineering'],
      type: 'accreditation',
      gradient: 'from-blue-400 via-cyan-500 to-blue-600',
      borderColor: 'border-blue-400',
      glowColor: 'shadow-blue-500/50'
    },
    {
      icon: Shield,
      title: t('projects.cert2.title'),
      issuer: t('projects.cert2.issuer'),
      date: t('projects.cert2.date'),
      description: t('projects.cert2.description'),
      skills: ['Elastic', 'Enterprise Search', 'Sales Engineering'],
      type: 'accreditation',
      gradient: 'from-blue-400 via-sky-500 to-blue-600',
      borderColor: 'border-blue-400',
      glowColor: 'shadow-blue-500/50'
    },
    {
      icon: Shield,
      title: t('projects.cert3.title'),
      issuer: t('projects.cert3.issuer'),
      date: t('projects.cert3.date'),
      description: t('projects.cert3.description'),
      skills: ['Elastic', 'Observability', 'Sales Engineering'],
      type: 'accreditation',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600',
      borderColor: 'border-cyan-400',
      glowColor: 'shadow-cyan-500/50'
    },
    {
      icon: Star,
      title: t('projects.cert4.title'),
      issuer: t('projects.cert4.issuer'),
      date: t('projects.cert4.date'),
      description: t('projects.cert4.description'),
      skills: ['Elastic', 'Security', 'Sales Specialist'],
      type: 'accreditation',
      gradient: 'from-blue-500 via-blue-600 to-cyan-600',
      borderColor: 'border-blue-400',
      glowColor: 'shadow-blue-500/50'
    },
    {
      icon: Star,
      title: t('projects.cert5.title'),
      issuer: t('projects.cert5.issuer'),
      date: t('projects.cert5.date'),
      description: t('projects.cert5.description'),
      skills: ['Elastic', 'Observability', 'Sales Specialist'],
      type: 'accreditation',
      gradient: 'from-sky-400 via-blue-500 to-blue-600',
      borderColor: 'border-sky-400',
      glowColor: 'shadow-sky-500/50'
    },
    {
      icon: Star,
      title: t('projects.cert6.title'),
      issuer: t('projects.cert6.issuer'),
      date: t('projects.cert6.date'),
      description: t('projects.cert6.description'),
      skills: ['Elastic', 'Enterprise Search', 'Sales Specialist'],
      type: 'accreditation',
      gradient: 'from-sky-400 via-blue-500 to-cyan-600',
      borderColor: 'border-sky-400',
      glowColor: 'shadow-sky-500/50'
    },
    {
      icon: Award,
      title: t('projects.cert7.title'),
      issuer: t('projects.cert7.issuer'),
      date: t('projects.cert7.date'),
      description: t('projects.cert7.description'),
      skills: ['Elastic', 'Sales Professional', 'Solutions'],
      type: 'accreditation',
      gradient: 'from-blue-400 via-blue-500 to-cyan-600',
      borderColor: 'border-blue-400',
      glowColor: 'shadow-blue-500/50'
    },
    {
      icon: Trophy,
      title: t('projects.cert8.title'),
      issuer: t('projects.cert8.issuer'),
      date: t('projects.cert8.date'),
      description: t('projects.cert8.description'),
      skills: ['Power BI', 'Data Analytics', 'Microsoft'],
      type: 'certification',
      gradient: 'from-amber-400 via-yellow-500 to-orange-500',
      borderColor: 'border-amber-400',
      glowColor: 'shadow-amber-500/50'
    },
    {
      icon: Sparkles,
      title: t('projects.cert9.title'),
      issuer: t('projects.cert9.issuer'),
      date: t('projects.cert9.date'),
      description: t('projects.cert9.description'),
      skills: ['Duet AI', 'Google Workspace', 'AI Tools'],
      type: 'training',
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      borderColor: 'border-emerald-400',
      glowColor: 'shadow-emerald-500/50'
    },
    {
      icon: Sparkles,
      title: t('projects.cert10.title'),
      issuer: t('projects.cert10.issuer'),
      date: t('projects.cert10.date'),
      description: t('projects.cert10.description'),
      skills: ['LLMs', 'AI Fundamentals', 'Machine Learning'],
      type: 'training',
      gradient: 'from-teal-400 via-emerald-500 to-green-600',
      borderColor: 'border-teal-400',
      glowColor: 'shadow-teal-500/50'
    },
    {
      icon: Shield,
      title: t('projects.cert11.title'),
      issuer: t('projects.cert11.issuer'),
      date: t('projects.cert11.date'),
      description: t('projects.cert11.description'),
      skills: ['Responsible AI', 'AI Ethics', 'Governance'],
      type: 'training',
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      borderColor: 'border-green-400',
      glowColor: 'shadow-green-500/50'
    },
    {
      icon: Medal,
      title: t('projects.cert12.title'),
      issuer: t('projects.cert12.issuer'),
      date: t('projects.cert12.date'),
      description: t('projects.cert12.description'),
      skills: ['AI Principles', 'Google Cloud', 'Ethics'],
      type: 'training',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      borderColor: 'border-emerald-400',
      glowColor: 'shadow-emerald-500/50'
    },
    {
      icon: Sparkles,
      title: t('projects.cert13.title'),
      issuer: t('projects.cert13.issuer'),
      date: t('projects.cert13.date'),
      description: t('projects.cert13.description'),
      skills: ['Prompt Design', 'Vertex AI', 'Generative AI'],
      type: 'training',
      gradient: 'from-teal-400 via-green-500 to-emerald-600',
      borderColor: 'border-teal-400',
      glowColor: 'shadow-teal-500/50'
    }
  ];

  const getCredentialTypeLabel = (type: string) => {
    const typeConfig = {
      certification: { label: 'CERTIFICATION', color: 'text-amber-400' },
      accreditation: { label: 'ACCREDITATION', color: 'text-blue-400' },
      training: { label: 'COURSE / TRAINING', color: 'text-emerald-400' }
    };
    return typeConfig[type as keyof typeof typeConfig] || typeConfig.training;
  };

  return (
    <section className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute w-96 h-96 top-1/3 right-1/4 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <AnimatedBackground />
        <FloatingCode />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            {t('projects.title')}
          </h2>
          <p className="text-center text-slate-300 mb-12 text-lg">{t('projects.subtitle')}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              const typeInfo = getCredentialTypeLabel(cert.type);
              return (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-white to-slate-50 rounded-2xl overflow-hidden border-2 ${cert.borderColor} hover:${cert.glowColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-5`} />

                  <div className={`h-1.5 bg-gradient-to-r ${cert.gradient}`} />

                  <div className="absolute top-3 right-3">
                    <div className={`flex items-center gap-1 px-2 py-1 bg-gradient-to-r ${cert.gradient} rounded-full`}>
                      <Star className="text-white" size={12} />
                      <span className={`text-white font-bold text-xs tracking-wider`}>
                        {typeInfo.label}
                      </span>
                    </div>
                  </div>

                  <div className="relative p-6">
                    <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                      {cert.title}
                    </h3>

                    <div className="mb-3">
                      <p className="text-sm font-semibold text-slate-700">{cert.issuer}</p>
                      <p className="text-xs text-slate-500 font-medium">{cert.date}</p>
                    </div>

                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-2 py-1 bg-gradient-to-r ${cert.gradient} bg-opacity-10 rounded-md text-xs font-bold text-slate-700 border border-slate-200`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 w-2 h-2 border-l-2 border-t-2 border-slate-300" />
                  <div className="absolute bottom-3 right-3 w-2 h-2 border-r-2 border-b-2 border-slate-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
