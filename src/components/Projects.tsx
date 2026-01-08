import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.distributed.title'),
      description: t('projects.distributed.description'),
      tags: ['Go', 'Redis', 'Docker', 'Kubernetes'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('projects.ml.title'),
      description: t('projects.ml.description'),
      tags: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      tags: ['Python', 'FastAPI', 'TensorFlow', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
            {t('projects.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span className="font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">Live Demo</span>
                    </a>
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
