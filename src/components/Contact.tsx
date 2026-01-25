import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            {t('contact.title')}
          </h2>

          <p className="text-lg text-slate-400 text-center max-w-3xl mx-auto mb-16">
            {t('contact.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.title')}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:contact@camilotalora.it.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="font-medium">contact@camilotalora.it.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Location</div>
                    <div className="font-medium">Bogotá, Colombia</div>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-slate-400 mb-4">Find me on</p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/camilo-otalora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                    >
                      <Linkedin size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder={t('contact.name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder={t('contact.email')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                    placeholder={t('contact.message')}
                  />
                </div>

                {status === 'success' && (
                  <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  disabled={status === 'sending'}
                >
                  <span>{status === 'sending' ? t('contact.sending') : t('contact.send')}</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24 pt-12 border-t border-slate-800">
        <p className="text-center text-slate-500">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </section>
  );
}
