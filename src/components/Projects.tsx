import { Award, Shield, Star, Sparkles, Medal, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const certificates = [
    {
      icon: Shield,
      title: t('projects.cert1.title'),
      issuer: t('projects.cert1.issuer'),
      date: t('projects.cert1.date'),
      description: t('projects.cert1.description'),
      skills: ['AWS', 'Cloud Architecture', 'DevOps'],
      rarity: 'legendary',
      gradient: 'from-amber-400 via-yellow-500 to-orange-500',
      borderColor: 'border-amber-400',
      glowColor: 'shadow-amber-500/50'
    },
    {
      icon: Award,
      title: t('projects.cert2.title'),
      issuer: t('projects.cert2.issuer'),
      date: t('projects.cert2.date'),
      description: t('projects.cert2.description'),
      skills: ['Kubernetes', 'Docker', 'Containers'],
      rarity: 'epic',
      gradient: 'from-purple-400 via-purple-500 to-purple-600',
      borderColor: 'border-purple-400',
      glowColor: 'shadow-purple-500/50'
    },
    {
      icon: Medal,
      title: t('projects.cert3.title'),
      issuer: t('projects.cert3.issuer'),
      date: t('projects.cert3.date'),
      description: t('projects.cert3.description'),
      skills: ['React', 'TypeScript', 'Frontend'],
      rarity: 'epic',
      gradient: 'from-cyan-400 via-blue-500 to-blue-600',
      borderColor: 'border-cyan-400',
      glowColor: 'shadow-cyan-500/50'
    },
    {
      icon: Trophy,
      title: t('projects.cert4.title'),
      issuer: t('projects.cert4.issuer'),
      date: t('projects.cert4.date'),
      description: t('projects.cert4.description'),
      skills: ['Python', 'Algorithms', 'Data Structures'],
      rarity: 'rare',
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      borderColor: 'border-emerald-400',
      glowColor: 'shadow-emerald-500/50'
    },
    {
      icon: Sparkles,
      title: t('projects.cert5.title'),
      issuer: t('projects.cert5.issuer'),
      date: t('projects.cert5.date'),
      description: t('projects.cert5.description'),
      skills: ['Security', 'Best Practices', 'OWASP'],
      rarity: 'rare',
      gradient: 'from-red-400 via-rose-500 to-pink-600',
      borderColor: 'border-red-400',
      glowColor: 'shadow-red-500/50'
    },
    {
      icon: Star,
      title: t('projects.cert6.title'),
      issuer: t('projects.cert6.issuer'),
      date: t('projects.cert6.date'),
      description: t('projects.cert6.description'),
      skills: ['PostgreSQL', 'MongoDB', 'Database Design'],
      rarity: 'rare',
      gradient: 'from-indigo-400 via-violet-500 to-purple-600',
      borderColor: 'border-indigo-400',
      glowColor: 'shadow-indigo-500/50'
    }
  ];

  const getRarityLabel = (rarity: string) => {
    const rarityConfig = {
      legendary: { label: 'LEGENDARY', color: 'text-amber-400' },
      epic: { label: 'EPIC', color: 'text-purple-400' },
      rare: { label: 'RARE', color: 'text-blue-400' }
    };
    return rarityConfig[rarity as keyof typeof rarityConfig] || rarityConfig.rare;
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            {t('projects.title')}
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">{t('projects.subtitle')}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              const rarityInfo = getRarityLabel(cert.rarity);
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
                        {rarityInfo.label}
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
