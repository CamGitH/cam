import { Linkedin, Mail, ArrowUpRight, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { PROFILE_EMAIL_HREF, PROFILE_LINKS, openCV } from '../constants/profile';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-t border-stone-200/70 bg-white py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index={3}
          eyebrow={t('nav.contact')}
          title={t('contact.title')}
          description={t('contact.subtitle')}
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-5 sm:grid-cols-2">
          {/* Featured email card */}
          <Reveal className="sm:col-span-2">
            <a
              href={PROFILE_EMAIL_HREF}
              className="card card-hover card-accent sheen group flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-ink transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5 group-hover:text-accent">
                  <Mail size={22} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-ink">Email</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {t('contact.emailCard')}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-accent transition-colors duration-300 group-hover:border-accent/40 sm:self-auto">
                <span className="break-all">{PROFILE_LINKS.email}</span>
                <ArrowUpRight
                  size={15}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </Reveal>

          <Reveal>
            <a
              href={PROFILE_LINKS.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover card-accent sheen group flex h-full flex-col p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-ink transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5 group-hover:text-accent">
                <Linkedin size={20} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">LinkedIn</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-muted">
                {t('contact.linkedinCard')}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {t('contact.viewProfile')}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <button
              onClick={openCV}
              className="card card-hover card-accent sheen group flex h-full w-full flex-col p-6 text-left"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-ink transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5 group-hover:text-accent">
                <Download size={20} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">CV</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-muted">
                {t('contact.cvCard')}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {t('contact.downloadCV')}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
