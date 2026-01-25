import { useLanguage } from '../contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';
import FloatingCode from './FloatingCode';
import { skillCategories } from '../constants/skillCategories';

export default function Skills() {
  const { t } = useLanguage();

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
