import { Briefcase, GraduationCap, Award, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

interface Tag {
  label: string;
  type: 'certificate' | 'skill';
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
      tags: [
        { label: 'Power BI', type: 'certificate' as const },
        { label: 'Python', type: 'skill' as const },
        { label: 'SQL', type: 'skill' as const },
        { label: 'Power Automate', type: 'skill' as const },
        { label: 'Database Management', type: 'skill' as const }
      ]
    },
    {
      type: 'work',
      title: t('experience.developer.title'),
      company: t('experience.developer.company'),
      period: t('experience.developer.period'),
      description: t('experience.developer.description'),
      tags: [
        { label: 'Elastic Sales Engineer', type: 'certificate' as const },
        { label: 'Elastic Sales Specialist', type: 'certificate' as const },
        { label: 'Scrum', type: 'certificate' as const },
        { label: 'Python', type: 'skill' as const },
        { label: 'Elastic', type: 'skill' as const },
        { label: 'Data Analytics', type: 'skill' as const }
      ]
    },
    {
      type: 'work',
      title: t('experience.intern.title'),
      company: t('experience.intern.company'),
      period: t('experience.intern.period'),
      description: t('experience.intern.description'),
      tags: [
        { label: 'Intro to LLM', type: 'certificate' as const },
        { label: 'Transformer & BERT', type: 'certificate' as const },
        { label: 'Python', type: 'skill' as const },
        { label: 'Java', type: 'skill' as const },
        { label: 'Elastic', type: 'skill' as const }
      ]
    },
    {
      type: 'work',
      title: t('experience.pacific.title'),
      company: t('experience.pacific.company'),
      period: t('experience.pacific.period'),
      description: t('experience.pacific.description'),
      tags: [
        { label: 'Azure Fundamentals', type: 'certificate' as const },
        { label: 'Power Automate', type: 'skill' as const },
        { label: 'Data Analytics', type: 'skill' as const }
      ]
    },
    {
      type: 'work',
      title: t('experience.cofounder.title'),
      company: t('experience.cofounder.company'),
      period: t('experience.cofounder.period'),
      description: t('experience.cofounder.description'),
      tags: [
        { label: 'Google Project Management', type: 'certificate' as const },
        { label: 'Kotlin', type: 'skill' as const },
        { label: 'Google Cloud', type: 'skill' as const }
      ]
    }
  ];

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
                    {exp.tags.map((tag, tagIndex) => {
                      const Icon = tag.type === 'certificate' ? Award : Zap;
                      const tagId = `${index}-${tagIndex}`;
                      const bgColor = tag.type === 'certificate'
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/30'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-600 shadow-blue-500/30';

                      return (
                        <div
                          key={tagIndex}
                          className="relative"
                          onMouseEnter={() => setHoveredBadge(tagId)}
                          onMouseLeave={() => setHoveredBadge(null)}
                        >
                          <div
                            className={`flex items-center gap-1.5 px-3 py-1.5 ${bgColor} rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-default`}
                          >
                            <Icon className="text-white" size={14} />
                            <span className="text-white font-semibold text-xs">{tag.label}</span>
                          </div>

                          {hoveredBadge === tagId && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg whitespace-nowrap shadow-xl">
                              {tag.type === 'certificate' ? 'Certificate' : 'Skill'}
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
