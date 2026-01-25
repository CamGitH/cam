import {
  Database,
  Cloud,
  BarChart3,
  Code2,
  Server,
  GitBranch,
  Zap
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';
import FloatingCode from './FloatingCode';

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code2,
      title: 'Backend & Languages',
      className: 'Code Builder',
      level: 94,
      color: 'from-violet-500 to-purple-600',
      borderColor: 'border-violet-400/50',
      glowColor: 'shadow-violet-500/20',
      skills: [
        { name: 'Python', proficiency: 5 },
        { name: 'SQL', proficiency: 5 },
        { name: 'Java', proficiency: 5 },
        { name: 'Kotlin', proficiency: 4 }
      ]
    },
    {
      icon: Database,
      title: 'Databases & Search',
      className: 'Data Engineer',
      level: 93,
      color: 'from-orange-500 to-red-600',
      borderColor: 'border-orange-400/50',
      glowColor: 'shadow-orange-500/20',
      skills: [
        { name: 'Relational Databases', proficiency: 5 },
        { name: 'NoSQL Databases', proficiency: 5 },
        { name: 'Elasticsearch', proficiency: 5 },
        { name: 'Performance Tuning', proficiency: 5 }
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      className: 'Insights Driver',
      level: 91,
      color: 'from-emerald-500 to-green-600',
      borderColor: 'border-emerald-400/50',
      glowColor: 'shadow-emerald-500/20',
      skills: [
        { name: 'Power BI', proficiency: 5 },
        { name: 'Advanced Excel', proficiency: 5 },
        { name: 'Data Analytics', proficiency: 5 },
        { name: 'Power Automate', proficiency: 4 }
      ]
    },
    {
      icon: Server,
      title: 'Data Engineering',
      className: 'Pipeline Architect',
      level: 90,
      color: 'from-pink-500 to-rose-600',
      borderColor: 'border-pink-400/50',
      glowColor: 'shadow-pink-500/20',
      skills: [
        { name: 'ETL / ELT Pipelines', proficiency: 5 },
        { name: 'Data Modeling', proficiency: 5 },
        { name: 'APIs & Integrations', proficiency: 5 },
        { name: 'Data Quality', proficiency: 4 }
      ]
    },
    {
      icon: GitBranch,
      title: 'DevOps & Infrastructure',
      className: 'System Operator',
      level: 88,
      color: 'from-amber-500 to-yellow-600',
      borderColor: 'border-amber-400/50',
      glowColor: 'shadow-amber-500/20',
      skills: [
        { name: 'Git', proficiency: 5 },
        { name: 'Docker', proficiency: 4 },
        { name: 'CI / CD', proficiency: 4 },
        { name: 'Monitoring & Logging', proficiency: 4 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      className: 'Cloud Architect',
      level: 88,
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-400/50',
      glowColor: 'shadow-cyan-500/20',
      skills: [
        { name: 'Google Cloud Platform', proficiency: 5 },
        { name: 'Azure', proficiency: 4 },
        { name: 'IAM & Security Basics', proficiency: 4 },
        { name: 'Cloud Architecture', proficiency: 4 }
      ]
    },
    {
      icon: Zap,
      title: 'Delivery & Collaboration',
      className: 'Team Enabler',
      level: 92,
      color: 'from-teal-500 to-emerald-600',
      borderColor: 'border-teal-400/50',
      glowColor: 'shadow-teal-500/20',
      skills: [
        { name: 'Agile (Scrum / Kanban)', proficiency: 5 },
        { name: 'Project Coordination', proficiency: 5 },
        { name: 'Stakeholder Communication', proficiency: 5 },
        { name: 'Documentation', proficiency: 4 }
      ]
    }
  ];

  const getProficiencyDots = (level: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`w-1.5 h-1.5 rounded-full ${
          i < level ? 'bg-amber-400' : 'bg-slate-300'
        }`}
      />
    ));

  return (
    <section className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        <AnimatedBackground />
        <FloatingCode />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            {t('skills.title')}
          </h2>
          <p className="text-center text-slate-300 mb-12 text-lg">
            {t('skills.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border-2 ${category.borderColor} hover:${category.glowColor} hover:shadow-2xl transition-all duration-500 overflow-hidden group`}
                >
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="text-white" size={26} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {category.title}
                        </h3>
                        <p className="text-sm text-slate-500 italic">
                          {category.className}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>Experience Level</span>
                        <span className="font-bold">{category.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color}`}
                          style={{ width: `${category.level}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between px-4 py-2 bg-white rounded-lg border border-slate-200"
                        >
                          <span className="text-sm font-medium text-slate-700">
                            {skill.name}
                          </span>
                          <div className="flex gap-1">
                            {getProficiencyDots(skill.proficiency)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
