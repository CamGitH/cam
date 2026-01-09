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
    'nav.certificates': 'Certificates',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.title': 'Computer Scientist & Software Engineer',
    'hero.description': 'Crafting elegant solutions to complex problems. Passionate about algorithms, distributed systems, and building scalable applications that make a difference.',
    'hero.contact': 'Get in Touch',
    'about.title': 'About Me',
    'about.subtitle': 'Passionate about creating innovative solutions',
    'about.description': "I'm a computer scientist with a deep passion for solving complex problems through elegant code. With expertise in full-stack development, algorithm design, and distributed systems, I strive to build software that not only works efficiently but also makes a meaningful impact.",
    'about.interests': 'Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.',
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Character Build & Abilities',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database & Tools',
    'skills.other': 'Other Skills',
    'projects.title': 'Certificates & Badges',
    'projects.subtitle': 'Collected Achievements & Credentials',
    'projects.cert1.title': 'AWS Solutions Architect',
    'projects.cert1.issuer': 'Amazon Web Services',
    'projects.cert1.date': '2023',
    'projects.cert1.description': 'Professional certification in designing distributed systems on AWS',
    'projects.cert2.title': 'Kubernetes Administrator',
    'projects.cert2.issuer': 'Cloud Native Computing Foundation',
    'projects.cert2.date': '2023',
    'projects.cert2.description': 'Certified in managing and deploying containerized applications',
    'projects.cert3.title': 'React Advanced Developer',
    'projects.cert3.issuer': 'Meta',
    'projects.cert3.date': '2022',
    'projects.cert3.description': 'Expert-level certification in React and modern frontend development',
    'projects.cert4.title': 'Python Developer Expert',
    'projects.cert4.issuer': 'Python Institute',
    'projects.cert4.date': '2022',
    'projects.cert4.description': 'Advanced certification in Python programming and algorithms',
    'projects.cert5.title': 'Security Best Practices',
    'projects.cert5.issuer': 'OWASP',
    'projects.cert5.date': '2023',
    'projects.cert5.description': 'Certified in secure coding practices and vulnerability management',
    'projects.cert6.title': 'Database Design Professional',
    'projects.cert6.issuer': 'Database Institute',
    'projects.cert6.date': '2022',
    'projects.cert6.description': 'Expert certification in database architecture and optimization',
    'experience.title': 'Work Experience',
    'experience.subtitle': 'Quest Log & Achievements Unlocked',
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
    'nav.certificates': 'Certificados',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'hero.title': 'Científico de la Computación e Ingeniero de Software',
    'hero.description': 'Creando soluciones elegantes a problemas complejos. Apasionado por los algoritmos, sistemas distribuidos y la construcción de aplicaciones escalables que marcan la diferencia.',
    'hero.contact': 'Contáctame',
    'hero.work': 'Ver Trabajos',
    'about.subtitle': 'Apasionado por crear soluciones innovadoras',
    'about.description': 'Soy un científico de la computación con una profunda pasión por resolver problemas complejos a través de código elegante. Con experiencia en desarrollo full-stack, diseño de algoritmos y sistemas distribuidos, me esfuerzo por construir software que no solo funcione eficientemente sino que también tenga un impacto significativo.',
    'about.interests': 'Más allá de programar, disfruto explorando nuevas tecnologías, contribuyendo a proyectos de código abierto y compartiendo conocimiento con la comunidad de desarrolladores.',
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Construcción de Personaje y Habilidades',
    'skills.frontend': 'Desarrollo Frontend',
    'skills.backend': 'Desarrollo Backend',
    'skills.database': 'Base de Datos y Herramientas',
    'skills.other': 'Otras Habilidades',
    'projects.title': 'Certificados y Medallas',
    'projects.subtitle': 'Logros y Credenciales Coleccionados',
    'projects.cert1.title': 'Arquitecto de Soluciones AWS',
    'projects.cert1.issuer': 'Amazon Web Services',
    'projects.cert1.date': '2023',
    'projects.cert1.description': 'Certificación profesional en diseño de sistemas distribuidos en AWS',
    'projects.cert2.title': 'Administrador Kubernetes',
    'projects.cert2.issuer': 'Cloud Native Computing Foundation',
    'projects.cert2.date': '2023',
    'projects.cert2.description': 'Certificado en gestión e implementación de aplicaciones en contenedores',
    'projects.cert3.title': 'Desarrollador Avanzado React',
    'projects.cert3.issuer': 'Meta',
    'projects.cert3.date': '2022',
    'projects.cert3.description': 'Certificación de nivel experto en React y desarrollo frontend moderno',
    'projects.cert4.title': 'Experto Desarrollador Python',
    'projects.cert4.issuer': 'Python Institute',
    'projects.cert4.date': '2022',
    'projects.cert4.description': 'Certificación avanzada en programación Python y algoritmos',
    'projects.cert5.title': 'Mejores Prácticas de Seguridad',
    'projects.cert5.issuer': 'OWASP',
    'projects.cert5.date': '2023',
    'projects.cert5.description': 'Certificado en prácticas de codificación segura y gestión de vulnerabilidades',
    'projects.cert6.title': 'Profesional en Diseño de Bases de Datos',
    'projects.cert6.issuer': 'Database Institute',
    'projects.cert6.date': '2022',
    'projects.cert6.description': 'Certificación experta en arquitectura y optimización de bases de datos',
    'experience.title': 'Experiencia Laboral',
    'experience.subtitle': 'Registro de Misiones y Logros Desbloqueados',
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
