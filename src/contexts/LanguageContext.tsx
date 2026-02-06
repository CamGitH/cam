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
    'hero.title': 'Systems & Computing Engineer',
    'hero.description': 'Enthusiastic about solving problems obtaining the best results, motivated by new challenges, learning and fast adapting, excellent teamwork skills with multiple stakeholders. Providing customized and helpful support experience, becoming a trusted advisor.',
    'hero.contact': 'Get in Touch',
    'about.title': 'About Me',
    'about.subtitle': 'Systems & computing engineer',
    'about.description': "Systems & computing engineer with deep expertise in database management, data analytics, and full-stack development. Specialized in Python, Java, Elastic, and cloud technologies (Google Cloud, Azure). Strong background in project management, process optimization, and delivering data-driven solutions at scale.",
    'about.interests': 'Passionate about leveraging technology to solve complex problems, optimizing workflows, and mentoring teams. Experience spans from NLP solutions and Elastic implementations to cloud migrations and automated reporting systems.',
    'experience.title': 'Work & Experience',
    'experience.subtitle': 'Professional Journey and Academic Background',
    'experience.downloadCV': 'Download CV',
    'experience.senior.title': 'Technical Engineer of Special Projects | Developer & Database Manager',
    'experience.senior.company': 'Enterprise Solutions',
    'experience.senior.period': 'Recent',
    'experience.senior.description': 'Lead development projects, managed diverse SQL and NO-SQL databases, automated data reports (Power BI, Advanced Excel). Optimized report generation from 3-5 hours to 5-10 minutes. Led Python QA automation solutions and implemented Power Automate workflows.',
    'experience.developer.title': 'Data & Analytics Elastic Consultant Engineer',
    'experience.developer.company': 'Elastic Consulting',
    'experience.developer.period': '2023',
    'experience.developer.description': 'Led project planning under Scrum methodology. Developed Python integrations for Elastic with 95%+ analytics metrics. Implemented complex search queries and KNN solutions. Conducted Elastic conferences for 50+ participants. Maintained 90%+ client satisfaction.',
    'experience.intern.title': 'Natural Language Process Consultant Engineer',
    'experience.intern.company': 'NLP Solutions',
    'experience.intern.period': '2022-2023',
    'experience.intern.description': 'Developed NLP-driven software using Python and Java. Implemented Elasticsearch integrations with advanced search features including KNN and cross-reference searches. Full lifecycle development with Jira project management.',
    'experience.pacific.title': 'IT PACIFIC INTERN | Data Quality Manager',
    'experience.pacific.company': 'IT Pacific',
    'experience.pacific.period': '2021-2022',
    'experience.pacific.description': 'Regional data quality management across Colombia, Peru, and Chile. Coached Windows tools courses with 50+ assistants per country. Optimized processes from 5 hours per day to 10 minutes per month using Power Automate. Upgraded overall data quality score to 90% average.',
    'experience.cofounder.title': 'Co-founder | Head Developer',
    'experience.cofounder.company': 'Mobile App Startup',
    'experience.cofounder.period': '2020-2021',
    'experience.cofounder.description': 'Planned and developed mobile apps with Android Studio (Kotlin). Organized and integrated Firebase-Cloud Firestore DB. Implemented APIs optimizing security and payments collection. Created solutions to unfamiliar problems fulfilling all project expectations.',
    'experience.education.degree': 'Systems & Computing Engineering (Computer Science)',
    'experience.education.school': 'Universidad de los Andes',
    'experience.education.period': '2017–2024',
    'experience.education.description':
    ' ',
    'contact.title': "Let's Connect",
    'contact.subtitle': 'Feel free to reach out for collaborations or just a friendly chat',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.emailCard': "Send me an email and I'll get back to you as soon as possible",
    'contact.linkedinCard': 'Connect with me on LinkedIn for professional networking',
    'contact.cvCard': 'Download my CV to learn more about my experience and skills',
    'contact.viewProfile': 'View Profile',
    'contact.downloadCV': 'Download CV',
    'contact.location': 'Location',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.certificates': 'Certificados',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'hero.title': 'Ingeniero de Sistemas y Computación',
    'hero.description': 'Entusiasta en resolver problemas obteniendo los mejores resultados, motivado por nuevos desafíos, aprendizaje y adaptación rápida, excelentes habilidades de trabajo en equipo con múltiples stakeholders. Brindando experiencia de soporte personalizada y útil, convirtiéndome en un asesor de confianza.',
    'hero.contact': 'Contáctame',
    'about.title': 'Sobre Mi',
    'about.subtitle': 'Ingeniero de sistemas y computación',
    'about.description': 'Ingeniero de sistemas y computación con amplia experiencia en gestión de bases de datos, análisis de datos y desarrollo full-stack. Especializado en Python, Java, Elastic y tecnologías cloud (Google Cloud, Azure). Sólida experiencia en gestión de proyectos, optimización de procesos y entrega de soluciones basadas en datos a escala.',
    'about.interests': 'Apasionado por aprovechar la tecnología para resolver problemas complejos, optimizar flujos de trabajo y mentorear equipos. La experiencia abarca desde soluciones NLP e implementaciones Elastic hasta migraciones cloud y sistemas de reportes automatizados.',
    'experience.title': 'Trabajo y Experiencia',
    'experience.subtitle': 'Trayectoria Profesional y Formación Académica',
    'experience.downloadCV': 'Descargar CV',
    'experience.senior.title': 'Ingeniero Técnico de Proyectos Especiales | Desarrollador & Gestor de Bases de Datos',
    'experience.senior.company': 'Enterprise Solutions',
    'experience.senior.period': 'Reciente',
    'experience.senior.description': 'Lideré proyectos de desarrollo, gestioné diversas bases de datos SQL y NO-SQL, automaticé reportes de datos (Power BI, Excel Avanzado). Optimicé generación de reportes de 3-5 horas a 5-10 minutos. Lideré soluciones de automatización QA en Python e implementé flujos de Power Automate.',
    'experience.developer.title': 'Ingeniero Consultor de Datos y Analytics Elastic',
    'experience.developer.company': 'Elastic Consulting',
    'experience.developer.period': '2023',
    'experience.developer.description': 'Lideré planificación de proyectos bajo metodología Scrum. Desarrollé integraciones Python para Elastic con métricas de analytics del 95%+. Implementé búsquedas complejas y soluciones KNN. Realicé conferencias Elastic para 50+ participantes. Mantuve satisfacción del cliente del 90%+.',
    'experience.intern.title': 'Ingeniero Consultor de Procesamiento de Lenguaje Natural',
    'experience.intern.company': 'NLP Solutions',
    'experience.intern.period': '2022-2023',
    'experience.intern.description': 'Desarrollé software basado en NLP usando Python y Java. Implementé integraciones con Elasticsearch con funciones de búsqueda avanzadas incluyendo KNN y búsquedas de referencia cruzada. Desarrollo de ciclo completo con gestión de proyectos en Jira.',
    'experience.pacific.title': 'PASANTE IT PACIFIC | Gestor de Calidad de Datos',
    'experience.pacific.company': 'IT Pacific',
    'experience.pacific.period': '2021-2022',
    'experience.pacific.description': 'Gestión de calidad de datos a nivel regional en Colombia, Perú y Chile. Impartí cursos de herramientas Windows con 50+ asistentes por país. Optimicé procesos de 5 horas por día a 10 minutos por mes usando Power Automate. Mejoré la puntuación de calidad de datos a un promedio del 90%.',
    'experience.cofounder.title': 'Co-fundador | Desarrollador Principal',
    'experience.cofounder.company': 'Startup de Aplicaciones Móviles',
    'experience.cofounder.period': '2020-2021',
    'experience.cofounder.description': 'Planeé y desarrollé aplicaciones móviles con Android Studio (Kotlin). Organicé e integré Firebase-Cloud Firestore DB. Implementé APIs optimizando seguridad y recolección de pagos. Creé soluciones a problemas no familiares cumpliendo todas las expectativas del proyecto.',
    'experience.education.degree': 'Ingeniería de Sistemas y Computación',
    'experience.education.school': 'Universidad de los Andes',
    'experience.education.period': '2017–2024',
    'experience.education.description':
    ' ',
    'contact.title': 'Conectemos',
    'contact.subtitle': 'No dudes en contactarme para colaboraciones o simplemente una charla amistosa',
    'contact.name': 'Tu Nombre',
    'contact.email': 'Tu Correo',
    'contact.message': 'Tu Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.emailCard': 'Envíame un correo y te responderé lo antes posible',
    'contact.linkedinCard': 'Conéctate conmigo en LinkedIn para networking profesional',
    'contact.cvCard': 'Descarga mi CV para conocer más sobre mi experiencia y habilidades',
    'contact.viewProfile': 'Ver Perfil',
    'contact.downloadCV': 'Descargar CV',
    'contact.location': 'Ubicación',
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
