import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  index?: number;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = tone === 'dark';

  return (
    <Reveal
      className={`flex flex-col gap-5 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <span className={`eyebrow ${isDark ? 'text-stone-400' : ''}`}>
        {typeof index === 'number' && (
          <span className="font-semibold text-accent">
            {String(index).padStart(2, '0')}
          </span>
        )}
        {eyebrow}
      </span>

      <h2
        className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.05] ${
          isDark ? 'text-white' : 'text-gradient'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`max-w-2xl text-balance text-base leading-relaxed sm:text-lg ${
            isDark ? 'text-stone-400' : 'text-ink-muted'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
