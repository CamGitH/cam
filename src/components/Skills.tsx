import { Database, Globe, Server, Terminal, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';
import FloatingCode from './FloatingCode';

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Terminal,
      title: t('skills.other'),
      className: 'Code Wizard',
      level: 92,
      color: 'from-violet-500 to-purple-600',
      borderColor: 'border-violet-400/50',
      glowColor: 'shadow-violet-500/20',
      skills: [
        { name: 'Python', proficiency: 5 },
        { name: 'TypeScript', proficiency: 5 },
        { name: 'JavaScript', proficiency: 5 },
        { name: 'Java', proficiency: 4 },
        { name: 'C++', proficiency: 4 },
        { name: 'Go', proficiency: 4 },
        { name: 'Rust', proficiency: 3 },
        { name: 'SQL', proficiency: 5 }
      ]
    },
    {
      icon: Globe,
      title: t('skills.frontend'),
      className: 'UI Sorcerer',
      level: 88,
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-400/50',
      glowColor: 'shadow-cyan-500/20',
      skills: [
        { name: 'React', proficiency: 5 },
        { name: 'Next.js', proficiency: 5 },
        { name: 'Vue.js', proficiency: 4 },
        { name: 'Tailwind CSS', proficiency: 5 },
        { name: 'Redux', proficiency: 4 },
        { name: 'WebGL', proficiency: 3 },
        { name: 'Three.js', proficiency: 3 }
      ]
    },
    {
      icon: Server,
      title: t('skills.backend'),
      className: 'System Architect',
      level: 90,
      color: 'from-emerald-500 to-green-600',
      borderColor: 'border-emerald-400/50',
      glowColor: 'shadow-emerald-500/20',
      skills: [
        { name: 'Node.js', proficiency: 5 },
        { name: 'Django', proficiency: 4 },
        { name: 'FastAPI', proficiency: 5 },
        { name: 'Express', proficiency: 5 },
        { name: 'GraphQL', proficiency: 4 },
        { name: 'REST APIs', proficiency: 5 },
        { name: 'Microservices', proficiency: 4 }
      ]
    },
    {
      icon: Database,
      title: t('skills.database'),
      className: 'Data Guardian',
      level: 85,
      color: 'from-orange-500 to-red-600',
      borderColor: 'border-orange-400/50',
      glowColor: 'shadow-orange-500/20',
      skills: [
        { name: 'PostgreSQL', proficiency: 5 },
        { name: 'MongoDB', proficiency: 4 },
        { name: 'Redis', proficiency: 4 },
        { name: 'Docker', proficiency: 5 },
        { name: 'Kubernetes', proficiency: 4 },
        { name: 'AWS', proficiency: 4 },
        { name: 'CI/CD', proficiency: 5 }
      ]
    }
  ];

  const getProficiencyDots = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`w-1.5 h-1.5 rounded-full ${
          i < level ? 'bg-amber-400' : 'bg-slate-300'
        }`}
      />
    ));
  };

  return (
    <section className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <AnimatedBackground />
        <FloatingCode />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            {t('skills.title')}
          </h2>
          <p className="text-center text-slate-300 mb-12 text-lg">{t('skills.subtitle')}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border-2 ${category.borderColor} hover:${category.glowColor} hover:shadow-2xl transition-all duration-500 overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr opacity-5 rounded-tr-full" />

                  <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-slate-300" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-slate-300" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-slate-300" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-slate-300" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="text-white" size={28} />
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                          <p className="text-sm text-slate-500 font-medium italic">{category.className}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className={`px-3 py-1 bg-gradient-to-r ${category.color} rounded-full text-white font-bold text-sm shadow-lg`}>
                          Lvl {category.level}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                        <span className="font-medium">Mastery Progress</span>
                        <span className="font-bold">{category.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out rounded-full`}
                          style={{ width: `${category.level}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="group/skill flex items-center justify-between px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300 cursor-default"
                        >
                          <div className="flex items-center gap-3">
                            <Zap className="text-amber-500 opacity-70 group-hover/skill:opacity-100 transition-opacity" size={14} />
                            <span className="text-slate-700 font-medium text-sm group-hover/skill:text-slate-900">
                              {skill.name}
                            </span>
                          </div>
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
