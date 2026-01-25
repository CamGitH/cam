import { Download, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CV() {
  const { t } = useLanguage();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/cv.pdf';
    link.download = 'Camilo_Otalora_CV.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('cv.title')}
          </h2>
          <p className="text-xl text-slate-300">
            {t('cv.subtitle')}
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700 shadow-2xl">
          <div className="flex flex-col items-center gap-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
              <FileText size={48} className="text-white" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                {t('cv.download.title')}
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl">
                {t('cv.download.description')}
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              <Download size={24} className="group-hover:animate-bounce" />
              {t('cv.download.button')}
            </button>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="bg-slate-900/50 rounded-xl p-6 text-center border border-slate-700">
                <div className="text-cyan-400 text-3xl font-bold mb-2">PDF</div>
                <div className="text-slate-400 text-sm">{t('cv.format')}</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 text-center border border-slate-700">
                <div className="text-cyan-400 text-3xl font-bold mb-2">2024</div>
                <div className="text-slate-400 text-sm">{t('cv.updated')}</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 text-center border border-slate-700">
                <div className="text-cyan-400 text-3xl font-bold mb-2">EN/ES</div>
                <div className="text-slate-400 text-sm">{t('cv.languages')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            {t('cv.note')}
          </p>
        </div>
      </div>
    </section>
  );
}
