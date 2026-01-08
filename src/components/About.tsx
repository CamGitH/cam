import { Brain, Code, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const highlights = [
    {
      icon: Brain,
      title: 'Problem Solver',
      description: 'Analytical thinking meets creative solutions. I thrive on turning complex challenges into elegant, efficient code.'
    },
    {
      icon: Code,
      title: 'Full Stack Developer',
      description: 'From database architecture to pixel-perfect UIs, I build end-to-end solutions with modern technologies.'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimization is in my DNA. I create fast, scalable applications that handle millions of operations seamlessly.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
            {t('about.title')}
          </h2>

          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('about.subtitle')}
          </p>

          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('about.description')}
          </p>

          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {t('about.interests')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
