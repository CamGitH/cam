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
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Character Build & Abilities',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database & Tools',
    'skills.other': 'Other Skills',
    'projects.title': 'Certificates & Badges',
    'projects.subtitle': 'Collected Achievements & Credentials',
    'projects.cert1.title': 'Elastic Accredited Sales Engineer',
    'projects.cert1.issuer': 'Elastic',
    'projects.cert1.date': '2024',
    'projects.cert1.description': 'Security, Enterprise Search, and Observability professional certification',
    'projects.cert2.title': 'Elastic Accredited Sales Specialist',
    'projects.cert2.issuer': 'Elastic',
    'projects.cert2.date': '2024',
    'projects.cert2.description': 'Specialized in Security, Observability, and Enterprise Search solutions',
    'projects.cert3.title': 'Microsoft Certified: Power BI Data Analyst',
    'projects.cert3.issuer': 'Microsoft',
    'projects.cert3.date': '2023',
    'projects.cert3.description': 'Expert certification in business intelligence and data visualization with Power BI',
    'projects.cert4.title': 'Intro to Large Language Models',
    'projects.cert4.issuer': 'Google Cloud',
    'projects.cert4.date': '2024',
    'projects.cert4.description': 'Foundational knowledge in LLM architecture and applications',
    'projects.cert5.title': 'Intro to Responsible AI',
    'projects.cert5.issuer': 'Google Cloud',
    'projects.cert5.date': '2024',
    'projects.cert5.description': 'Understanding ethical AI development and responsible AI practices',
    'projects.cert6.title': 'Elastic Accredited Sales Professional',
    'projects.cert6.issuer': 'Elastic',
    'projects.cert6.date': '2024',
    'projects.cert6.description': 'Professional accreditation in Elastic Stack solutions and sales engineering',
    'experience.title': 'Work Experience',
    'experience.subtitle': 'Quest Log & Achievements Unlocked',
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
    'hero.title': 'Ingeniero de Sistemas y Computación',
    'hero.description': 'Entusiasta en resolver problemas obteniendo los mejores resultados, motivado por nuevos desafíos, aprendizaje y adaptación rápida, excelentes habilidades de trabajo en equipo con múltiples stakeholders. Brindando experiencia de soporte personalizada y útil, convirtiéndome en un asesor de confianza.',
    'hero.contact': 'Contáctame',
    'about.subtitle': 'Ingeniero de sistemas y computación, profesional bilingüe',
    'about.description': 'Ingeniero de sistemas y computación con amplia experiencia en gestión de bases de datos, análisis de datos y desarrollo full-stack. Especializado en Python, Java, Elastic y tecnologías cloud (Google Cloud, Azure). Sólida experiencia en gestión de proyectos, optimización de procesos y entrega de soluciones basadas en datos a escala.',
    'about.interests': 'Apasionado por aprovechar la tecnología para resolver problemas complejos, optimizar flujos de trabajo y mentorear equipos. La experiencia abarca desde soluciones NLP e implementaciones Elastic hasta migraciones cloud y sistemas de reportes automatizados.',
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Construcción de Personaje y Habilidades',
    'skills.frontend': 'Desarrollo Frontend',
    'skills.backend': 'Desarrollo Backend',
    'skills.database': 'Base de Datos y Herramientas',
    'skills.other': 'Otras Habilidades',
    'projects.title': 'Certificados y Medallas',
    'projects.subtitle': 'Logros y Credenciales Coleccionados',
    'projects.cert1.title': 'Ingeniero de Ventas Acreditado Elastic',
    'projects.cert1.issuer': 'Elastic',
    'projects.cert1.date': '2024',
    'projects.cert1.description': 'Certificación profesional en Seguridad, Enterprise Search y Observabilidad',
    'projects.cert2.title': 'Especialista de Ventas Acreditado Elastic',
    'projects.cert2.issuer': 'Elastic',
    'projects.cert2.date': '2024',
    'projects.cert2.description': 'Especializado en soluciones de Seguridad, Observabilidad y Enterprise Search',
    'projects.cert3.title': 'Certificado Microsoft: Analista de Datos Power BI',
    'projects.cert3.issuer': 'Microsoft',
    'projects.cert3.date': '2023',
    'projects.cert3.description': 'Certificación experta en inteligencia empresarial y visualización de datos con Power BI',
    'projects.cert4.title': 'Introducción a Modelos de Lenguaje Grande',
    'projects.cert4.issuer': 'Google Cloud',
    'projects.cert4.date': '2024',
    'projects.cert4.description': 'Conocimiento fundamental en arquitectura y aplicaciones de LLM',
    'projects.cert5.title': 'Introducción a IA Responsable',
    'projects.cert5.issuer': 'Google Cloud',
    'projects.cert5.date': '2024',
    'projects.cert5.description': 'Comprensión del desarrollo ético de IA y prácticas de IA responsable',
    'projects.cert6.title': 'Profesional de Ventas Acreditado Elastic',
    'projects.cert6.issuer': 'Elastic',
    'projects.cert6.date': '2024',
    'projects.cert6.description': 'Acreditación profesional en soluciones Elastic Stack e ingeniería de ventas',
    'experience.title': 'Experiencia Laboral',
    'experience.subtitle': 'Registro de Misiones y Logros Desbloqueados',
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
