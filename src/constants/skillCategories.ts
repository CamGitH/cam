import {
  Database,
  Cloud,
  BarChart3,
  Code2,
  Server,
  GitBranch,
  Zap
} from 'lucide-react';

export interface SkillCategory {
  icon: typeof Code2;
  title: string;
  className: string;
  level: number;
  color: string;
  borderColor: string;
  glowColor: string;
  skills: Array<{ name: string; proficiency: number }>;
}

export const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Backend & Languages',
    className: 'Code Builder',
    level: 94,
    color: 'from-violet-500 to-purple-600',
    borderColor: 'border-violet-400/50',
    glowColor: 'shadow-violet-500/20',
    skills: [
      { name: 'Python', proficiency: 5 },
      { name: 'SQL', proficiency: 5 },
      { name: 'Java', proficiency: 5 },
      { name: 'Kotlin', proficiency: 4 }
    ]
  },
  {
    icon: Database,
    title: 'Databases & Search',
    className: 'Data Engineer',
    level: 93,
    color: 'from-orange-500 to-red-600',
    borderColor: 'border-orange-400/50',
    glowColor: 'shadow-orange-500/20',
    skills: [
      { name: 'Relational Databases', proficiency: 5 },
      { name: 'NoSQL Databases', proficiency: 5 },
      { name: 'Elasticsearch', proficiency: 5 },
      { name: 'Performance Tuning', proficiency: 5 }
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics & BI',
    className: 'Insights Driver',
    level: 91,
    color: 'from-emerald-500 to-green-600',
    borderColor: 'border-emerald-400/50',
    glowColor: 'shadow-emerald-500/20',
    skills: [
      { name: 'Power BI', proficiency: 5 },
      { name: 'Advanced Excel', proficiency: 5 },
      { name: 'Data Analytics', proficiency: 5 },
      { name: 'Power Automate', proficiency: 4 }
    ]
  },
  {
    icon: Server,
    title: 'Data Engineering',
    className: 'Pipeline Architect',
    level: 90,
    color: 'from-pink-500 to-rose-600',
    borderColor: 'border-pink-400/50',
    glowColor: 'shadow-pink-500/20',
    skills: [
      { name: 'ETL / ELT Pipelines', proficiency: 5 },
      { name: 'Data Modeling', proficiency: 5 },
      { name: 'APIs & Integrations', proficiency: 5 },
      { name: 'Data Quality', proficiency: 4 }
    ]
  },
  {
    icon: GitBranch,
    title: 'DevOps & Infrastructure',
    className: 'System Operator',
    level: 88,
    color: 'from-amber-500 to-yellow-600',
    borderColor: 'border-amber-400/50',
    glowColor: 'shadow-amber-500/20',
    skills: [
      { name: 'Git', proficiency: 5 },
      { name: 'Docker', proficiency: 4 },
      { name: 'CI / CD', proficiency: 4 },
      { name: 'Monitoring & Logging', proficiency: 4 }
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    className: 'Cloud Architect',
    level: 88,
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-400/50',
    glowColor: 'shadow-cyan-500/20',
    skills: [
      { name: 'Google Cloud Platform', proficiency: 5 },
      { name: 'Azure', proficiency: 4 },
      { name: 'IAM & Security Basics', proficiency: 4 },
      { name: 'Cloud Architecture', proficiency: 4 }
    ]
  },
  {
    icon: Zap,
    title: 'Delivery & Collaboration',
    className: 'Team Enabler',
    level: 92,
    color: 'from-teal-500 to-emerald-600',
    borderColor: 'border-teal-400/50',
    glowColor: 'shadow-teal-500/20',
    skills: [
      { name: 'Agile (Scrum / Kanban)', proficiency: 5 },
      { name: 'Project Coordination', proficiency: 5 },
      { name: 'Stakeholder Communication', proficiency: 5 },
      { name: 'Documentation', proficiency: 4 }
    ]
  }
];

// Create a map for quick skill lookups
export const skillMap = new Map<string, { icon: typeof Code2; color: string }>();

skillCategories.forEach(category => {
  category.skills.forEach(skill => {
    // Add exact matches
    skillMap.set(skill.name.toLowerCase(), {
      icon: category.icon,
      color: category.color
    });

    // Add common variations
    if (skill.name === 'Google Cloud Platform') {
      skillMap.set('google cloud', { icon: category.icon, color: category.color });
      skillMap.set('gcp', { icon: category.icon, color: category.color });
    }
    if (skill.name === 'Relational Databases') {
      skillMap.set('database management', { icon: category.icon, color: category.color });
    }
    if (skill.name === 'Agile (Scrum / Kanban)') {
      skillMap.set('agile', { icon: category.icon, color: category.color });
      skillMap.set('scrum', { icon: category.icon, color: category.color });
    }
    if (skill.name === 'ETL / ELT Pipelines') {
      skillMap.set('etl', { icon: category.icon, color: category.color });
      skillMap.set('elt', { icon: category.icon, color: category.color });
    }
  });
});

export function getSkillStyle(skillName: string) {
  const normalizedName = skillName.toLowerCase();
  return skillMap.get(normalizedName) || {
    icon: Code2,
    color: 'from-slate-500 to-slate-600'
  };
}
