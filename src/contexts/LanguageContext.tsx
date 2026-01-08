import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.title': 'Computer Scientist & Software Engineer',
    'hero.description': 'Crafting elegant solutions to complex problems. Passionate about algorithms, distributed systems, and building scalable applications that make a difference.',
    'hero.contact': 'Get in Touch',
    'hero.work': 'View Work',
    'about.title': 'About Me',
    'about.subtitle': 'Passionate about creating innovative solutions',
    'about.description': "I'm a computer scientist with a deep passion for solving complex problems through elegant code. With expertise in full-stack development, algorithm design, and distributed systems, I strive to build software that not only works efficiently but also makes a meaningful impact.",
    'about.interests': 'Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.',
    'skills.title': 'Technical Skills',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database & Tools',
    'skills.other': 'Other Skills',
    'projects.title': 'Featured Projects',
    'projects.distributed.title': 'Distributed Task Scheduler',
    'projects.distributed.description': 'Built a distributed task scheduling system using microservices architecture',
    'projects.ml.title': 'ML-Powered Analytics',
    'projects.ml.description': 'Developed a machine learning platform for real-time data analytics',
    'projects.ecommerce.title': 'E-Commerce Platform',
    'projects.ecommerce.description': 'Full-stack e-commerce solution with integrated payment processing',
    'experience.title': 'Work Experience',
    'experience.senior.title': 'Senior Software Engineer',
    'experience.senior.company': 'Tech Corp',
    'experience.senior.period': '2021 - Present',
    'experience.senior.description': 'Leading development of microservices architecture and mentoring junior developers',
    'experience.developer.title': 'Software Developer',
    'experience.developer.company': 'StartupXYZ',
    'experience.developer.period': '2019 - 2021',
    'experience.developer.description': 'Developed and maintained web applications using React and Node.js',
    'experience.intern.title': 'Software Engineering Intern',
    'experience.intern.company': 'Innovation Labs',
    'experience.intern.period': '2018 - 2019',
    'experience.intern.description': 'Contributed to various projects and learned modern development practices',
    'contact.title': "Let's Connect",
    'contact.subtitle': 'Feel free to reach out for collaborations or just a friendly chat',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'hero.title': 'Científico de la Computación e Ingeniero de Software',
    'hero.description': 'Creando soluciones elegantes a problemas complejos. Apasionado por los algoritmos, sistemas distribuidos y la construcción de aplicaciones escalables que marcan la diferencia.',
    'hero.contact': 'Contáctame',
    'hero.work': 'Ver Trabajos',
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Apasionado por crear soluciones innovadoras',
    'about.description': 'Soy un científico de la computación con una profunda pasión por resolver problemas complejos a través de código elegante. Con experiencia en desarrollo full-stack, diseño de algoritmos y sistemas distribuidos, me esfuerzo por construir software que no solo funcione eficientemente sino que también tenga un impacto significativo.',
    'about.interests': 'Más allá de programar, disfruto explorando nuevas tecnologías, contribuyendo a proyectos de código abierto y compartiendo conocimiento con la comunidad de desarrolladores.',
    'skills.title': 'Habilidades Técnicas',
    'skills.frontend': 'Desarrollo Frontend',
    'skills.backend': 'Desarrollo Backend',
    'skills.database': 'Base de Datos y Herramientas',
    'skills.other': 'Otras Habilidades',
    'projects.title': 'Proyectos Destacados',
    'projects.distributed.title': 'Programador de Tareas Distribuidas',
    'projects.distributed.description': 'Construí un sistema de programación de tareas distribuidas usando arquitectura de microservicios',
    'projects.ml.title': 'Análisis Potenciado por ML',
    'projects.ml.description': 'Desarrollé una plataforma de aprendizaje automático para análisis de datos en tiempo real',
    'projects.ecommerce.title': 'Plataforma de Comercio Electrónico',
    'projects.ecommerce.description': 'Solución de comercio electrónico full-stack con procesamiento de pagos integrado',
    'experience.title': 'Experiencia Laboral',
    'experience.senior.title': 'Ingeniero de Software Senior',
    'experience.senior.company': 'Tech Corp',
    'experience.senior.period': '2021 - Presente',
    'experience.senior.description': 'Liderando el desarrollo de arquitectura de microservicios y mentoreando desarrolladores junior',
    'experience.developer.title': 'Desarrollador de Software',
    'experience.developer.company': 'StartupXYZ',
    'experience.developer.period': '2019 - 2021',
    'experience.developer.description': 'Desarrollé y mantuve aplicaciones web usando React y Node.js',
    'experience.intern.title': 'Pasante de Ingeniería de Software',
    'experience.intern.company': 'Innovation Labs',
    'experience.intern.period': '2018 - 2019',
    'experience.intern.description': 'Contribuí a varios proyectos y aprendí prácticas modernas de desarrollo',
    'contact.title': 'Conectemos',
    'contact.subtitle': 'No dudes en contactarme para colaboraciones o simplemente una charla amistosa',
    'contact.name': 'Tu Nombre',
    'contact.email': 'Tu Correo',
    'contact.message': 'Tu Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
