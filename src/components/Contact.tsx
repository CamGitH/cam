import { Linkedin, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';
import FloatingCode from './FloatingCode';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="min-h-screen py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <AnimatedBackground />
        <FloatingCode />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:camilo@otalora.com.co"
              className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 overflow-hidden border-2 border-blue-400 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 opacity-5" />
              <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600" />

              <div className="relative">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">Email</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Send me an email and I'll get back to you as soon as possible
                </p>

                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span className="break-all">camilo@otalora.com.co</span>
                  <ArrowRight size={20} className="flex-shrink-0" />
                </div>
              </div>

              <div className="absolute top-3 left-3 w-2 h-2 border-l-2 border-t-2 border-slate-300" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border-r-2 border-b-2 border-slate-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/camilo-otalora"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 overflow-hidden border-2 border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 opacity-5" />
              <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600" />

              <div className="relative">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">LinkedIn</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Connect with me on LinkedIn for professional networking
                </p>

                <div className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>View Profile</span>
                  <ArrowRight size={20} />
                </div>
              </div>

              <div className="absolute top-3 left-3 w-2 h-2 border-l-2 border-t-2 border-slate-300" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border-r-2 border-b-2 border-slate-300" />
            </a>
          </div>

          <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border-2 border-slate-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 opacity-5" />
            <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600" />

            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-white flex-shrink-0">
                <MapPin className="text-white" size={32} />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
                <p className="text-slate-600 text-lg">Bogotá, Colombia</p>
              </div>
            </div>

            <div className="absolute top-3 left-3 w-2 h-2 border-l-2 border-t-2 border-slate-300" />
            <div className="absolute bottom-3 right-3 w-2 h-2 border-r-2 border-b-2 border-slate-300" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24 pt-12 border-t border-slate-700 relative z-10">
        <p className="text-center text-slate-400">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </section>
  );
}
