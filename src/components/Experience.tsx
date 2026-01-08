import { Briefcase, GraduationCap, Trophy, Zap, Users, Target, Crown, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

interface Achievement {
  icon: typeof Trophy;
  label: string;
  description: string;
  color: string;
  tier: 'gold' | 'silver' | 'bronze';
}

export default function Experience() {
  const { t } = useLanguage();
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const experiences = [
    {
      type: 'work',
      title: t('experience.senior.title'),
      company: t('experience.senior.company'),
      period: t('experience.senior.period'),
      description: t('experience.senior.description'),
      achievements: [
        {
          icon: Crown,
          label: 'Guild Leader',
          description: 'Leading & mentoring development teams',
          color: 'from-amber-400 to-yellow-600',
          tier: 'gold' as const
        },
        {
          icon: Target,
          label: 'System Master',
          description: 'Architecting microservices infrastructure',
          color: 'from-purple-400 to-purple-600',
          tier: 'gold' as const
        },
        {
          icon: Zap,
          label: 'Performance Sage',
          description: 'Optimizing system efficiency',
          color: 'from-blue-400 to-blue-600',
          tier: 'silver' as const
        }
      ]
    },
    {
      type: 'work',
      title: t('experience.developer.title'),
      company: t('experience.developer.company'),
      period: t('experience.developer.period'),
      description: t('experience.developer.description'),
      achievements: [
        {
          icon: Zap,
          label: 'Full-Stack Warrior',
          description: 'Mastered both frontend and backend',
          color: 'from-cyan-400 to-cyan-600',
          tier: 'silver' as const
        },
        {
          icon: Award,
          label: 'Code Quality Champion',
          description: 'Maintaining high code standards',
          color: 'from-green-400 to-green-600',
          tier: 'silver' as const
        }
      ]
    },
    {
      type: 'education',
      title: t('experience.intern.title'),
      company: t('experience.intern.company'),
      period: t('experience.intern.period'),
      description: t('experience.intern.description'),
      achievements: [
        {
          icon: Trophy,
          label: 'Quest Begun',
          description: 'Started the coding journey',
          color: 'from-orange-400 to-orange-600',
          tier: 'bronze' as const
        },
        {
          icon: Users,
          label: 'Quick Learner',
          description: 'Rapidly adapted to new technologies',
          color: 'from-teal-400 to-teal-600',
          tier: 'bronze' as const
        }
      ]
    }
  ];

  const getTierStyles = (tier: 'gold' | 'silver' | 'bronze') => {
    switch (tier) {
      case 'gold':
        return 'shadow-amber-500/50 ring-2 ring-amber-400/30';
      case 'silver':
        return 'shadow-slate-400/50 ring-2 ring-slate-300/30';
      case 'bronze':
        return 'shadow-orange-600/50 ring-2 ring-orange-400/30';
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            {t('experience.title')}
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">{t('experience.subtitle')}</p>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                  {exp.type === 'work' ? (
                    <Briefcase className="text-white" size={24} />
                  ) : (
                    <GraduationCap className="text-white" size={24} />
                  )}
                </div>

                <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                      <p className="text-lg text-slate-700 font-medium mb-2">{exp.company}</p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {exp.achievements.map((achievement, achIndex) => {
                      const AchIcon = achievement.icon;
                      const badgeId = `${index}-${achIndex}`;
                      return (
                        <div
                          key={achIndex}
                          className="relative"
                          onMouseEnter={() => setHoveredBadge(badgeId)}
                          onMouseLeave={() => setHoveredBadge(null)}
                        >
                          <div
                            className={`flex items-center gap-2 px-3 py-2 bg-gradient-to-r ${achievement.color} rounded-lg shadow-lg ${getTierStyles(achievement.tier)} hover:scale-105 transition-transform duration-300 cursor-default`}
                          >
                            <AchIcon className="text-white" size={16} />
                            <span className="text-white font-bold text-xs">{achievement.label}</span>
                          </div>

                          {hoveredBadge === badgeId && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg whitespace-nowrap shadow-xl">
                              {achievement.description}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                <div className="border-4 border-transparent border-t-slate-900"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
