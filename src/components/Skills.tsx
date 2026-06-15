import { skillCategories } from '../constants/skillCategories';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Skills() {
  const { t } = useLanguage();

  const totalSkills = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);
  const avgLevel = Math.round(
    skillCategories.reduce((sum, c) => sum + c.level, 0) / skillCategories.length
  );

  const proficiencyDots = (level: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
          i < level ? 'bg-ink group-hover/row:bg-accent' : 'bg-stone-200'
        }`}
      />
    ));

  const stats = [
    { value: skillCategories.length, label: 'Focus areas' },
    { value: totalSkills, label: 'Skills' },
    { value: `${avgLevel}%`, label: 'Avg. level' },
  ];

  return (
    <section className="relative min-h-screen bg-stone-50 pb-24 pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-grid mask-fade-b" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow={t('nav.skills')}
          title={t('skills.title')}
          description={t('skills.subtitle')}
        />

        <Reveal className="mx-auto mt-10 flex max-w-md items-stretch justify-center divide-x divide-stone-200 rounded-2xl border border-stone-200 bg-white shadow-soft">
          {stats.map((s) => (
            <div key={s.label} className="flex-1 px-5 py-4 text-center">
              <div className="text-2xl font-bold tracking-tight text-ink">{s.value}</div>
              <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={(index % 3) * 80}>
                <article className="card card-hover sheen group h-full overflow-hidden p-7">
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color} opacity-80`}
                  />
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white shadow-sm transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon size={22} strokeWidth={1.9} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-ink">
                        {category.title}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                        {category.className}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mb-1.5 flex items-center justify-between text-xs text-ink-muted">
                      <span className="font-medium">Experience Level</span>
                      <span className="font-mono font-semibold text-ink">{category.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-stone-100">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-[width] duration-700 ease-out`}
                        style={{ width: `${category.level}%` }}
                      />
                    </div>
                  </div>

                  <ul className="mt-6 space-y-1">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="group/row -mx-2 flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-stone-50"
                      >
                        <span className="text-sm text-ink-soft transition-colors duration-200 group-hover/row:text-ink">
                          {skill.name}
                        </span>
                        <span className="flex shrink-0 gap-1">
                          {proficiencyDots(skill.proficiency)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
