import { useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  CreditCard,
  Globe,
  Images,
  ListChecks,
  Smartphone,
  Store,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.cam.personal_budget_manager';

// Static assets live in /public. Drop the exported images into
// public/projects/personal-budget-manager/ using the names referenced below.
const PBM_ASSETS = '/projects/personal-budget-manager';

interface Highlight {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

interface Screenshot {
  src: string;
  alt: string;
}

interface Project {
  /** Stable id, also used as React key. */
  id: string;
  name: string;
  /** Translation key for the long-form description. */
  descriptionKey: string;
  /** Short label shown in the platform badge. */
  platform: string;
  platformIcon: LucideIcon;
  tags: string[];
  /** External link (store page, repo, live demo, ...). Omit for placeholders. */
  url?: string;
  /** Translation key for the call-to-action label. */
  ctaKey: string;
  /** Marks the highlighted project (shows the "Featured" badge). */
  featured?: boolean;
  /** Renders a muted "coming soon" placeholder card. */
  comingSoon?: boolean;
  /** Optional app/product icon (path under /public). */
  icon?: string;
  /** Optional screenshots rendered in the gallery. */
  screenshots?: Screenshot[];
  /** Optional feature highlights rendered below the card. */
  highlights?: Highlight[];
}

// Each project renders as its own large card. To turn a placeholder into a real
// project: fill in name/description/tags, add `url` + `ctaKey`, optionally
// `icon`/`screenshots`/`highlights`, and remove `comingSoon`.
const projects: Project[] = [
  {
    id: 'personal-budget-manager',
    name: 'Personal Budget Manager',
    descriptionKey: 'projects.app.description',
    platform: 'Google Play',
    platformIcon: Store,
    tags: ['Android', 'Mobile app', 'Budgeting', 'Personal finance'],
    url: PLAY_STORE_URL,
    ctaKey: 'projects.playStore',
    featured: true,
    icon: `${PBM_ASSETS}/app_icon.png`,
    screenshots: [
      { src: `${PBM_ASSETS}/All your finances in one place.png`, alt: 'All your finances in one place' },
      { src: `${PBM_ASSETS}/Take control of your money.png`, alt: 'Home dashboard' },
      { src: `${PBM_ASSETS}/Understand your spending at a glance.png`, alt: 'Expense distribution' },
      { src: `${PBM_ASSETS}/Track every transaction.png`, alt: 'Transactions' },
      { src: `${PBM_ASSETS}/Keep all your accounts organized.png`, alt: 'Accounts overview' },
      { src: `${PBM_ASSETS}/Plan smarter with budgets.png`, alt: 'Budget planning' },
      { src: `${PBM_ASSETS}/Clean dark mode, premium look.png`, alt: 'Clean dark mode' },
    ],
    highlights: [
      {
        icon: CreditCard,
        titleKey: 'projects.feature.budget.title',
        descriptionKey: 'projects.feature.budget.description',
      },
      {
        icon: BarChart3,
        titleKey: 'projects.feature.insights.title',
        descriptionKey: 'projects.feature.insights.description',
      },
      {
        icon: ListChecks,
        titleKey: 'projects.feature.workflow.title',
        descriptionKey: 'projects.feature.workflow.description',
      },
    ],
  },
  {
    id: 'placeholder-two',
    name: 'Next Project',
    descriptionKey: 'projects.placeholder.description',
    platform: 'Web app',
    platformIcon: Globe,
    tags: ['React', 'TypeScript'],
    ctaKey: 'projects.viewProject',
    comingSoon: true,
  },
];

/** Lightweight CSS fallback shown if a project's screenshots fail to load. */
function BudgetMockup() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-[19rem]">
      <div className="rounded-[2rem] border border-white/10 bg-zinc-900 p-3 shadow-[0_30px_80px_-35px_rgba(255,255,255,0.35)]">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-stone-50 text-zinc-900">
          <div className="bg-zinc-900 px-5 pb-6 pt-5 text-white">
            <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-white/20" />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-white/50">
                  {t('projects.mockup.balanceLabel')}
                </p>
                <p className="mt-1 text-3xl font-bold tracking-tight">$2,480</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Smartphone size={20} />
              </span>
            </div>
          </div>

          <div className="space-y-4 p-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-stone-200 bg-white p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {t('projects.mockup.income')}
                </p>
                <p className="mt-1 text-sm font-semibold text-emerald-600">+$3,200</p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {t('projects.mockup.expenses')}
                </p>
                <p className="mt-1 text-sm font-semibold text-rose-600">-$720</p>
              </div>
            </div>

            {[
              t('projects.mockup.item.food'),
              t('projects.mockup.item.transport'),
              t('projects.mockup.item.savings'),
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <div className="h-2 flex-1 rounded-full bg-stone-200">
                  <div
                    className="h-full rounded-full bg-zinc-900"
                    style={{ width: `${76 - index * 18}%` }}
                  />
                </div>
                <span className="w-16 text-right text-xs font-medium text-zinc-500">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Horizontal, snap-scrolling gallery of real app screenshots. */
function ScreenshotGallery({ shots }: { shots: Screenshot[] }) {
  const { t } = useLanguage();
  const [failed, setFailed] = useState<string[]>([]);
  const visible = shots.filter((shot) => !failed.includes(shot.src));

  // Until the exported images are added, gracefully fall back to the mockup.
  if (visible.length === 0) {
    return <BudgetMockup />;
  }

  return (
    <div className="space-y-3">
      <div className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2">
        {visible.map((shot) => (
          <div
            key={shot.src}
            className="shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-[0_30px_80px_-35px_rgba(255,255,255,0.35)] ring-1 ring-white/5 transition duration-500 hover:ring-white/15"
          >
            <img
              src={encodeURI(shot.src)}
              alt={shot.alt}
              loading="lazy"
              onError={() => setFailed((prev) => [...prev, shot.src])}
              className="h-[26rem] w-auto select-none object-cover sm:h-[30rem]"
              draggable={false}
            />
          </div>
        ))}
      </div>
      {visible.length > 1 && (
        <p className="text-center font-mono text-[11px] uppercase tracking-wider text-zinc-600">
          {t('projects.gallery.hint')}
        </p>
      )}
    </div>
  );
}

/** Empty media area shown on placeholder cards. */
function PlaceholderMedia() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[12rem] flex-col items-center justify-center gap-3 rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.02] p-8 text-center text-zinc-500">
      <Images size={24} strokeWidth={1.5} />
      <span className="font-mono text-xs uppercase tracking-wider">
        {t('projects.comingSoon')}
      </span>
    </div>
  );
}

/** App icon with a graceful fallback to the platform glyph. */
function ProjectIcon({ project, className = '' }: { project: Project; className?: string }) {
  const [failed, setFailed] = useState(false);
  const PlatformIcon = project.platformIcon;

  if (!project.icon || failed) {
    return (
      <span
        className={`flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-zinc-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] ${className}`}
      >
        <PlatformIcon size={24} />
      </span>
    );
  }

  return (
    <img
      src={project.icon}
      alt={`${project.name} icon`}
      onError={() => setFailed(true)}
      className={`rounded-2xl object-cover shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ${className}`}
    />
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const PlatformIcon = project.platformIcon;
  const isPlaceholder = !!project.comingSoon;

  return (
    <Reveal
      className={`group card card-accent sheen relative overflow-hidden bg-zinc-950 text-white !border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_30px_80px_-40px_rgba(2,6,23,0.9)] transition-all duration-500 hover:-translate-y-1 hover:!border-white/20 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_45px_110px_-45px_rgba(37,99,235,0.5)] ${
        isPlaceholder ? '!border-dashed !border-white/15 hover:!border-white/25' : ''
      }`}
    >
      {/* Depth: dotted texture + ambient accent glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_85%_60%_at_50%_0%,black,transparent)]" />
      {!isPlaceholder && (
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-accent/20 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      )}

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            <ProjectIcon project={project} className="h-16 w-16 shrink-0" />
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-accent-soft">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px w-6 bg-gradient-to-r from-white/30 to-transparent" />
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-zinc-400">
                  <PlatformIcon size={13} />
                  {project.platform}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-accent">
                    {t('projects.featured')}
                  </span>
                )}
                {isPlaceholder && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {t('projects.comingSoon')}
                  </span>
                )}
              </div>
              <h3 className="mt-3 bg-gradient-to-br from-white to-white/65 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                {project.name}
              </h3>
            </div>
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-100"
            >
              {t(project.ctaKey)}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              />
            </a>
          )}
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {t(project.descriptionKey)}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors duration-300 hover:border-white/20 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.highlights && (
          <div className="mt-8 grid gap-x-6 gap-y-7 border-t border-white/10 pt-8 md:grid-cols-3">
            {project.highlights.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.titleKey} className="group/feat">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-accent-soft shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-colors duration-300 group-hover/feat:border-accent/40 group-hover/feat:text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h4 className="mt-4 text-sm font-semibold tracking-tight text-white">
                    {t(feature.titleKey)}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {project.screenshots ? (
          <div className="mt-8">
            <ScreenshotGallery shots={project.screenshots} />
          </div>
        ) : isPlaceholder ? (
          <div className="mt-8">
            <PlaceholderMedia />
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          description={t('projects.subtitle')}
        />

        <div className="mt-16 space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
