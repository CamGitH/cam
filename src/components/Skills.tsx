import { Database, Globe, Server, Terminal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Terminal,
      title: t('skills.other'),
      skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'Go', 'Rust', 'SQL']
    },
    {
      icon: Globe,
      title: t('skills.frontend'),
      skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux', 'WebGL', 'Three.js']
    },
    {
      icon: Server,
      title: t('skills.backend'),
      skills: ['Node.js', 'Django', 'FastAPI', 'Express', 'GraphQL', 'REST APIs', 'Microservices']
    },
    {
      icon: Database,
      title: t('skills.database'),
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'CI/CD']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
            {t('skills.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-white rounded-lg text-slate-700 font-medium text-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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
