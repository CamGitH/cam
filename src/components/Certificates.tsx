import { Award, Shield, Star, Sparkles, Medal, Trophy } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import FloatingCode from './FloatingCode';

const certificates = [
  {
    icon: Shield,
    title: 'Elastic Accredited Sales Engineer – Security',
    issuer: 'Elastic',
    date: '2024',
    description: 'Professional accreditation focused on Elastic Security solutions, positioning, and technical sales engineering.',
    skills: ['Elastic Security', 'Threat Detection', 'Sales Engineering'],
    type: 'accreditation',
    gradient: 'from-blue-400 via-cyan-500 to-blue-600',
    borderColor: 'border-blue-400',
    glowColor: 'shadow-blue-500/50'
  },
  {
    icon: Shield,
    title: 'Elastic Accredited Sales Engineer – Enterprise Search',
    issuer: 'Elastic',
    date: '2024',
    description: 'Professional accreditation in Enterprise Search solutions, architecture, and customer-facing technical enablement.',
    skills: ['Enterprise Search', 'Elastic Stack', 'Solution Design'],
    type: 'accreditation',
    gradient: 'from-blue-400 via-sky-500 to-blue-600',
    borderColor: 'border-blue-400',
    glowColor: 'shadow-blue-500/50'
  },
  {
    icon: Shield,
    title: 'Elastic Accredited Sales Engineer – Observability',
    issuer: 'Elastic',
    date: '2024',
    description: 'Professional accreditation covering Elastic Observability use cases, solution design, and sales engineering.',
    skills: ['Observability', 'Logs & Metrics', 'APM'],
    type: 'accreditation',
    gradient: 'from-cyan-400 via-blue-500 to-blue-600',
    borderColor: 'border-cyan-400',
    glowColor: 'shadow-cyan-500/50'
  },
  {
    icon: Star,
    title: 'Elastic Accredited Sales Specialist – Security',
    issuer: 'Elastic',
    date: '2024',
    description: 'Sales specialist accreditation focused on Elastic Security value propositions and customer engagement.',
    skills: ['Elastic Security', 'Customer Enablement', 'Pre-Sales'],
    type: 'accreditation',
    gradient: 'from-blue-500 via-blue-600 to-cyan-600',
    borderColor: 'border-blue-400',
    glowColor: 'shadow-blue-500/50'
  },
  {
    icon: Star,
    title: 'Elastic Accredited Sales Specialist – Observability',
    issuer: 'Elastic',
    date: '2024',
    description: 'Sales specialist accreditation focused on observability solutions, metrics, logs, and APM.',
    skills: ['Observability', 'Monitoring', 'Sales Specialist'],
    type: 'accreditation',
    gradient: 'from-sky-400 via-blue-500 to-blue-600',
    borderColor: 'border-sky-400',
    glowColor: 'shadow-sky-500/50'
  },
  {
    icon: Star,
    title: 'Elastic Accredited Sales Specialist – Enterprise Search',
    issuer: 'Elastic',
    date: '2024',
    description: 'Sales specialist accreditation for Enterprise Search solutions and business-driven search use cases.',
    skills: ['Enterprise Search', 'Business Search', 'Elastic'],
    type: 'accreditation',
    gradient: 'from-sky-400 via-blue-500 to-cyan-600',
    borderColor: 'border-sky-400',
    glowColor: 'shadow-sky-500/50'
  },
  {
    icon: Award,
    title: 'Elastic Accredited Sales Professional',
    issuer: 'Elastic',
    date: '2024',
    description: 'Professional accreditation validating core Elastic Stack knowledge and solution positioning.',
    skills: ['Elastic Stack', 'Solution Positioning', 'Sales Professional'],
    type: 'accreditation',
    gradient: 'from-blue-400 via-blue-500 to-cyan-600',
    borderColor: 'border-blue-400',
    glowColor: 'shadow-blue-500/50'
  },
  {
    icon: Trophy,
    title: 'Microsoft Certified: Power BI Data Analyst',
    issuer: 'Microsoft',
    date: '2023',
    description: 'Official Microsoft certification validating expertise in data modeling, visualization, and analytics using Power BI.',
    skills: ['Power BI', 'Data Modeling', 'Data Visualization'],
    type: 'certification',
    gradient: 'from-amber-400 via-yellow-500 to-orange-500',
    borderColor: 'border-amber-400',
    glowColor: 'shadow-amber-500/50'
  },
  {
    icon: Sparkles,
    title: 'Intro to Duet AI in Google Workspace',
    issuer: 'Google',
    date: '2024',
    description: 'Training focused on Duet AI capabilities within Google Workspace to enhance productivity and collaboration.',
    skills: ['Duet AI', 'Google Workspace', 'Productivity'],
    type: 'training',
    gradient: 'from-emerald-400 via-green-500 to-teal-600',
    borderColor: 'border-emerald-400',
    glowColor: 'shadow-emerald-500/50'
  },
  {
    icon: Sparkles,
    title: 'Intro to Large Language Models',
    issuer: 'AI Fundamentals',
    date: '2024',
    description: 'Foundational course covering large language model concepts, capabilities, and applications.',
    skills: ['LLMs', 'AI Fundamentals', 'NLP'],
    type: 'training',
    gradient: 'from-teal-400 via-emerald-500 to-green-600',
    borderColor: 'border-teal-400',
    glowColor: 'shadow-teal-500/50'
  },
  {
    icon: Shield,
    title: 'Intro to Responsible AI',
    issuer: 'AI Ethics & Governance',
    date: '2024',
    description: 'Course focused on ethical AI development, fairness, transparency, and responsible deployment.',
    skills: ['Responsible AI', 'Ethics', 'Governance'],
    type: 'training',
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    borderColor: 'border-green-400',
    glowColor: 'shadow-green-500/50'
  },
  {
    icon: Medal,
    title: 'Applying AI Principles with Google Cloud',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Training on applying responsible AI principles within Google Cloud environments.',
    skills: ['Google Cloud', 'AI Principles', 'Responsible AI'],
    type: 'training',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    borderColor: 'border-emerald-400',
    glowColor: 'shadow-emerald-500/50'
  },
  {
    icon: Sparkles,
    title: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Hands-on training in prompt engineering and generative AI workflows using Vertex AI.',
    skills: ['Prompt Engineering', 'Vertex AI', 'Generative AI'],
    type: 'training',
    gradient: 'from-teal-400 via-green-500 to-emerald-600',
    borderColor: 'border-teal-400',
    glowColor: 'shadow-teal-500/50'
  }
];

export default function Certificates() {

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
            Certificates & Badges
          </h2>
          <p className="text-center text-slate-300 mb-12 text-lg">Collected Achievements & Credentials</p>

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
