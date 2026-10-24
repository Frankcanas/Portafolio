export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'Backend & APIs' | 'IA & NLP' | 'Full Stack & Web';
  tags: string[];
  featured: boolean;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureNotes?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; icon?: string }[];
}

export const personalInfo = {
  name: "Frank Luis Cañas Bolaño",
  shortName: "Frank Cañas",
  role: "Backend Developer & Software Engineer",
  shortBio: "Especialista en desarrollo backend de alto rendimiento con NestJS, Node.js, Express y TypeScript. Experiencia en arquitectura limpia, bases de datos relacionales (PostgreSQL, TypeORM, Sequelize), despliegue en AWS y soluciones con Inteligencia Artificial (RAG Local).",
  aboutText: [
    "Soy desarrollador enfocado en ingeniería de software y desarrollo Backend. Mi especialidad se centra en el diseño, desarrollo y escalabilidad de APIs RESTful robustas utilizando NestJS, Node.js, Express y TypeScript.",
    "Tengo experiencia sólida en el modelado relacional y persistencia de datos utilizando PostgreSQL junto a ORMs como TypeORM y Sequelize (sequelize-typescript). Aplico principios SOLID, Clean Architecture y DDD para garantizar código desacoplado, mantenible y testeable.",
    "Cuento con conocimientos en infraestructura en la nube con AWS, contenedores con Docker y Docker Compose, y documentación interactiva con Swagger/OpenAPI. Además, complemento el backend con integraciones de Inteligencia Artificial (RAG local con Ollama) y manejo nociones básicas de Frontend con React y Vite para consumo eficiente de APIs."
  ],
  status: "Disponible para roles Backend & retos de ingeniería",
  location: "Colombia",
  github: "https://github.com/Frankcanas",
  linkedin: "https://www.linkedin.com/in/frank-luis-cañas-bolaño-3a0527229",
  email: "frankcanas@ejemplo.com",
  whatsapp: "https://wa.me/",
  stats: [
    { label: "Especialidad Core", value: "Backend Nest & Node" },
    { label: "Bases de Datos", value: "PostgreSQL & ORMs" },
    { label: "Cloud & DevOps", value: "AWS & Docker" },
    { label: "IA Integrada", value: "RAG Local & Ollama" },
  ]
};

export const projectsData: Project[] = [
  {
    id: "cine-backend-nest",
    title: "Riwi Cine - Backend NestJS API",
    subtitle: "API REST Modular de Alto Rendimiento con NestJS, PostgreSQL y Swagger",
    description: "Servidor backend robusto desarrollado en NestJS con TypeScript. Incluye autenticación JWT completa con refresh tokens, integración con TMDB API, envío de correos transaccionales con Nodemailer y documentación Swagger.",
    longDescription: "API integral diseñada para la gestión de salas de cine, carteleras, membresías y reservas. Implementa arquitectura modular en NestJS, inyección de dependencias, DTOs validados con class-validator, persistencia relacional con PostgreSQL, testing con Vitest y contenedor Docker para despliegue.",
    category: "Backend & APIs",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Node.js", "JWT", "Swagger", "Nodemailer", "Docker"],
    featured: true,
    badge: "API REST NestJS",
    highlights: [
      "Autenticación segura con JWT, refresh tokens, verificación de cuentas y recuperación de contraseñas.",
      "Integración externa con la API de TMDB (The Movie Database) para cartelera y estrenos.",
      "Documentación interactiva de todos los endpoints generada automáticamente con Swagger / OpenAPI.",
      "Mailing transaccional para confirmaciones y promociones con Nodemailer y plantillas dinámicas.",
      "Configuración contenerizada con Docker y Docker Compose."
    ],
    githubUrl: "https://github.com/Frankcanas",
    architectureNotes: "Arquitectura modular en NestJS con decoradores, guards de autenticación, interceptores y DTOs."
  },
  {
    id: "cine-backend-express-sequelize",
    title: "Cine Backend Express & Sequelize",
    subtitle: "Arquitectura Backend con Node.js, Express, Sequelize y PostgreSQL",
    description: "API REST construida con Express y Sequelize ORM (TypeScript). Gestión de modelos relacionales, migraciones automáticas, endpoints documentados con Swagger UI y notificaciones por correo.",
    longDescription: "Backend enfocado en la manipulación relacional de datos mediante Sequelize y sequelize-typescript sobre PostgreSQL. Manejo centralizado de variables de entorno, middleware para validación de solicitudes, CORS seguro y documentación interactiva con Swagger UI Express.",
    category: "Backend & APIs",
    tags: ["Node.js", "Express", "Sequelize", "TypeScript", "PostgreSQL", "Swagger UI", "Nodemailer"],
    featured: true,
    badge: "Express & Sequelize",
    highlights: [
      "Modelado de entidades relacionales con Sequelize-TypeScript y PostgreSQL.",
      "Integración de Swagger-jsdoc y Swagger-UI-Express para visualización interactiva de endpoints.",
      "Arquitectura limpia por capas: controladores, servicios y repositorios desacoplados.",
      "Manejo de errores centralizado y middleware de validación estricta."
    ],
    githubUrl: "https://github.com/Frankcanas",
    architectureNotes: "Patrón MVC / Capas desacopladas en Express con tipado estricto en TypeScript."
  },
  {
    id: "comercial360",
    title: "Comercial 360 (Monorepo & Backend)",
    subtitle: "Plataforma Empresarial con Clean Architecture, DDD, Docker y NestJS",
    description: "Monorepo modular gobernado por pnpm con servicios en NestJS y React. Arquitectura Clean & DDD, migraciones con TypeORM, servicios en AWS, contenedor Docker Compose y gobernanza con CI/CD.",
    longDescription: "Sistema empresarial para la gestión logística y comercial en tiempo real. Co-diseñado con Clean Architecture y Domain-Driven Design (DDD), con APIs en NestJS para gestión de rutas, clientes y auditorías de calidad en SonarQube y CodeQL.",
    category: "Backend & APIs",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "AWS", "Docker Compose", "DDD", "CI/CD"],
    featured: true,
    badge: "Clean Architecture & DDD",
    highlights: [
      "Estructura modular con separación de casos de uso, dominio e infraestructura.",
      "Persistencia de datos y migraciones controladas con TypeORM y PostgreSQL.",
      "Infraestructura contenerizada con Docker Compose para bases de datos y microservicios.",
      "Pipelines de CI/CD con SonarQube, análisis de Clean Code y escáner de secretos."
    ],
    githubUrl: "https://github.com/Frankcanas",
    architectureNotes: "Monorepo pnpm, Clean Architecture estricta, Docker y servicios AWS."
  },
  {
    id: "adidas-chatbot",
    title: "Adidas Chatbot MVP (RAG Local)",
    subtitle: "Backend de Inferencia Conversacional y RAG con Node.js, Express y Ollama",
    description: "Servidor backend de inteligencia artificial que implementa la arquitectura RAG local conectando con Ollama (gemma:2b). Pipeline de scraping con Cheerio y búsqueda semántica sin costo de tokens externos.",
    longDescription: "Solución backend que procesa solicitudes conversacionales y consulta catálogos de productos mediante búsqueda contextual sobre embeddings locales. Garantiza 100% de privacidad de datos al no enviar información a proveedores externos.",
    category: "IA & NLP",
    tags: ["Node.js", "Express", "Ollama", "Gemma:2b", "RAG Local", "Cheerio", "Axios"],
    featured: true,
    badge: "RAG & IA Local",
    highlights: [
      "Inferencia local con Ollama y el modelo Gemma 2B sin dependencia de APIs externas pagas.",
      "Pipeline de extracción y estructuración de catálogo con Cheerio y Axios.",
      "Inyección de contexto en tiempo real para respuestas precisas sobre stock y especificaciones.",
      "Arquitectura de servicio ligero con Node.js y Express."
    ],
    githubUrl: "https://github.com/Frankcanas",
    architectureNotes: "Servicio RAG en Express con almacenamiento vectorial en memoria y SLM local."
  },
  {
    id: "jarvis-assistant",
    title: "Jarvis AI Assistant",
    subtitle: "Servicio de Automatización con Google Generative AI (Gemini SDK)",
    description: "Microservicio backend para interacción con los modelos fundacionales de Google (Gemini) empleando el SDK oficial (@google/generative-ai) para razonamiento y respuestas estructuradas.",
    longDescription: "Backend para asistencia inteligente que procesa lenguaje natural, genera código y automatiza tareas técnicas mediante ingeniería de prompts y consumo eficiente de la API de Gemini.",
    category: "IA & NLP",
    tags: ["Node.js", "JavaScript", "Google Gemini SDK", "Generative AI", "APIs"],
    featured: false,
    badge: "Gemini SDK",
    highlights: [
      "Control de parámetros de inferencia (temperature, topP, maxOutputTokens).",
      "Consumo estructurado de respuestas para automatización de flujos de trabajo.",
      "Manejo de sesiones con memoria conversacional."
    ],
    githubUrl: "https://github.com/Frankcanas"
  },
  {
    id: "frontend-complementario",
    title: "Interfaces Web & Consumo de APIs (React)",
    subtitle: "Desarrollo Frontend Complementario para Integración con Servicios Backend",
    description: "Desarrollo de interfaces de usuario funcionales con React, Vite y Tailwind CSS para probar y consumir endpoints, visualización de catálogos y gestión de flujos de cliente.",
    longDescription: "Conocimientos prácticos en frontend para complementar el perfil backend: consumo de endpoints REST con Axios/Fetch, gestión de estado con hooks y layouts adaptados para móviles.",
    category: "Full Stack & Web",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "REST Consumption"],
    featured: false,
    badge: "Frontend Práctico",
    highlights: [
      "Consumo de endpoints REST con interceptores de autenticación JWT.",
      "Renderizado reactivo de catálogos y carritos de compra.",
      "Estructuración de componentes reutilizables con Tailwind CSS."
    ],
    githubUrl: "https://github.com/Frankcanas"
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Backend & Arquitectura",
    icon: "Server",
    skills: [
      { name: "NestJS", level: "Avanzado" },
      { name: "Node.js", level: "Avanzado" },
      { name: "Express.js", level: "Avanzado" },
      { name: "TypeScript", level: "Avanzado" },
      { name: "Clean Architecture & DDD", level: "Intermedio - Avanzado" },
      { name: "APIs RESTful & DTOs", level: "Avanzado" },
      { name: "Autenticación JWT & RBAC", level: "Avanzado" },
      { name: "Swagger / OpenAPI", level: "Avanzado" }
    ]
  },
  {
    title: "Bases de Datos & ORMs",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Avanzado" },
      { name: "TypeORM", level: "Avanzado" },
      { name: "Sequelize & Sequelize-TS", level: "Avanzado" },
      { name: "Modelado Relacional & SQL", level: "Avanzado" },
      { name: "Migraciones & Seeds", level: "Avanzado" },
      { name: "MySQL", level: "Intermedio" }
    ]
  },
  {
    title: "Cloud, DevOps & Herramientas",
    icon: "Cloud",
    skills: [
      { name: "AWS (EC2, S3, RDS)", level: "Intermedio" },
      { name: "Docker & Docker Compose", level: "Intermedio - Avanzado" },
      { name: "Git & GitHub Flow", level: "Avanzado" },
      { name: "CI/CD (GitHub Actions)", level: "Intermedio" },
      { name: "Linux & Bash Scripting", level: "Intermedio - Avanzado" },
      { name: "Vitest (Testing Unitario / E2E)", level: "Intermedio" }
    ]
  },
  {
    title: "Inteligencia Artificial & Frontend Básico",
    icon: "Sparkles",
    skills: [
      { name: "Arquitectura RAG Local", level: "Intermedio - Avanzado" },
      { name: "Ollama (Gemma / Llama)", level: "Intermedio" },
      { name: "Google Gemini SDK", level: "Intermedio - Avanzado" },
      { name: "Web Scraping (Cheerio/Axios)", level: "Avanzado" },
      { name: "React (Básico / Consumo de APIs)", level: "Básico - Intermedio" },
      { name: "Vite & Tailwind CSS", level: "Básico - Intermedio" }
    ]
  }
];

export const experienceData = [
  {
    period: "2025 - Presente",
    role: "Backend & Systems Developer",
    company: "Riwi Cine & Proyectos Especializados",
    description: "Desarrollo de APIs RESTful modulares en NestJS y Express con PostgreSQL, TypeORM, Sequelize y TypeScript. Implementación de sistemas de autenticación JWT segura con refresh tokens, Swagger OpenAPI y contenedores Docker."
  },
  {
    period: "2025 - 2026",
    role: "Desarrollador Backend & Soluciones con IA",
    company: "Proyectos de Innovación Tecnológica",
    description: "Diseño e implementación de pipelines de inferencia local con Ollama (gemma:2b) bajo arquitectura RAG, integraciones con Google Generative AI SDK y servicios de web scraping para automatización de catálogos."
  },
  {
    period: "2024 - 2025",
    role: "Desarrollador de Software en Formación",
    company: "Riwi & Proyectos Colaborativos",
    description: "Entrenamiento intensivo en ingeniería de software: Clean Code, arquitectura de bases de datos relacionales con PostgreSQL, desarrollo ágil con Scrum y buenas prácticas de despliegue continuo."
  }
];
