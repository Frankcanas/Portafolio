export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack & Frontend' | 'IA & NLP' | 'Backend & APIs';
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
  name: "Frank Cañas",
  role: "Frontend Lead & Full Stack Developer",
  shortBio: "Especialista en arquitecturas frontend modernas (React + TypeScript) y soluciones integradas con Inteligencia Artificial. Enfocado en Clean Code, rendimiento y experiencias visuales fluidas.",
  aboutText: [
    "Soy desarrollador apasionado por crear aplicaciones web que combinen un diseño visual impecable con una ingeniería de software sólida. He liderado áreas de Frontend implementando soluciones geoespaciales con mapas interactivos (Leaflet), dashboards de métricas en tiempo real y sistemas con Clean Architecture.",
    "Además, investigo e implemento activamente Inteligencia Artificial aplicada: desde sistemas RAG (Retrieval-Augmented Generation) con modelos locales (Ollama/Gemma) que preservan la privacidad de datos, hasta integraciones con el SDK de Google Generative AI (Gemini).",
    "Creo firmemente en el código limpio, los componentes modulares y reutilizables, y los flujos continuos de calidad con CI/CD."
  ],
  status: "Disponible para nuevos proyectos y retos técnicos",
  location: "Colombia",
  github: "https://github.com/Frankcanas",
  linkedin: "https://linkedin.com/in/frankcanas",
  email: "contacto@frankcanas.dev",
  whatsapp: "https://wa.me/",
  stats: [
    { label: "Proyectos Realizados", value: "+15" },
    { label: "Especialidad Principal", value: "Frontend Lead" },
    { label: "Enfoque Arquitectónico", value: "Clean Code & DDD" },
    { label: "Modelos & IA", value: "RAG + LLMs" },
  ]
};

export const projectsData: Project[] = [
  {
    id: "comercial360",
    title: "Comercial 360",
    subtitle: "Plataforma Empresarial de Gestión Comercial & Rutas Geoespaciales",
    description: "Monorepo modular con Clean Architecture y DDD. Liderazgo del Frontend SPA con mapas interactivos para gestión de rutas, dashboard KPI y seguimiento de visitas en campo.",
    longDescription: "Como Frontend Lead y UI/UX Specialist, diseñé y construí la interfaz completa de la plataforma Comercial 360. El sistema gestiona clientes, itinerarios comerciales con Leaflet y métricas en tiempo real. Se cuidó especialmente el ciclo de vida del mapa para evitar fugas de memoria, optimizando la renderización y respetando los Quality Gates de Clean Architecture.",
    category: "Full Stack & Frontend",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Leaflet", "Clean Architecture", "CI/CD"],
    featured: true,
    badge: "Proyecto Destacado",
    highlights: [
      "Mapa Leaflet interactivo con trazado secuencial de rutas comerciales en el Atlántico.",
      "Dashboard analítico con 6 tarjetas KPI adaptativas según el rol (Director vs Asesor).",
      "Separación estricta de responsabilidades mediante Custom Hooks (`useRutas`, `useVisitas`).",
      "Gobernanza con CI/CD, SonarQube, CodeQL y análisis de Clean Code."
    ],
    githubUrl: "https://github.com/Frankcanas",
    architectureNotes: "Monorepo con pnpm, React 19, NestJS backend, Docker y Better Auth."
  },
  {
    id: "adidas-chatbot",
    title: "Adidas Chatbot MVP (RAG Local)",
    subtitle: "Asistente Virtual de E-commerce con RAG 100% Local (Ollama + Gemma)",
    description: "Chatbot de atención al cliente para Adidas Colombia impulsado por RAG (Retrieval-Augmented Generation) ejecutado localmente, asegurando total privacidad de datos.",
    longDescription: "Solución de inteligencia artificial conversacional que combina web scraping de catálogo de calzado y vestimenta deportiva con embeddings locales. El modelo gemma:2b responde preguntas contextualizadas sobre inventario, tallas y recomendaciones sin costos de tokens de APIs externas.",
    category: "IA & NLP",
    tags: ["Node.js", "Express", "Ollama", "Gemma:2b", "RAG Local", "Vite", "Cheerio", "Axios"],
    featured: true,
    badge: "Inteligencia Artificial",
    highlights: [
      "Inferencia local con Ollama y modelo Gemma 2B sin dependencia de conexión a APIs externas.",
      "Arquitectura RAG para búsqueda semántica e inyección de contexto desde catálogo JSON.",
      "Pipeline de extracción de datos con Cheerio y peticiones Axios.",
      "Frontend rápido y responsivo implementado con Vite y JavaScript moderno."
    ],
    githubUrl: "https://github.com/Frankcanas",
    architectureNotes: "RAG local con almacenamiento de vectores en memoria y modelo SLM liviano."
  },
  {
    id: "cine-backend-nest",
    title: "Cine Backend NestJS",
    subtitle: "API REST Modular para Reserva de Entradas y Gestión de Cartelera",
    description: "Servidor backend robusto implementado en NestJS con TypeScript, aplicando principios SOLID, inyección de dependencias y validaciones estrictas con DTOs.",
    longDescription: "Sistema de gestión integral para cadenas de cine que maneja la persistencia y reglas de negocio para películas, salas, horarios, reservas y usuarios. Desarrollado con modularidad estricta para garantizar mantenibilidad y escalabilidad.",
    category: "Backend & APIs",
    tags: ["NestJS", "TypeScript", "Node.js", "TypeORM", "PostgreSQL", "REST API", "Clean Code"],
    featured: true,
    badge: "Backend Robusto",
    highlights: [
      "Estructura modular con controladores, servicios y repositorios desacoplados.",
      "Validación de datos entrantes mediante `class-validator` y `class-transformer`.",
      "Manejo global de excepciones y transformaciones de respuesta estándar.",
      "Diseño de esquema relacional para reservas concurrentes de asientos."
    ],
    githubUrl: "https://github.com/Frankcanas",
    architectureNotes: "Arquitectura hexagonal en NestJS con TypeORM y PostgreSQL."
  },
  {
    id: "jarvis-assistant",
    title: "Jarvis AI Assistant",
    subtitle: "Agente Inteligente con Google Generative AI (Gemini SDK)",
    description: "Integración de modelos fundacionales de Google para procesamiento de lenguaje natural, automatización y razonamiento de instrucciones complejas.",
    longDescription: "Herramienta de asistencia impulsada por el SDK oficial de Google Generative AI (@google/generative-ai). Permite interactuar con modelos multimodales de última generación para análisis de código, redacción técnica y procesamiento de peticiones inteligentes.",
    category: "IA & NLP",
    tags: ["JavaScript", "Google Gemini SDK", "Generative AI", "Node.js", "Automation"],
    featured: false,
    badge: "Gemini AI",
    highlights: [
      "Configuración y ajuste de temperature y tokens con la API de Google Gemini.",
      "Manejo de historial conversacional para seguimiento contextual de sesiones.",
      "Automatización de tareas repetitivas mediante prompts estructurados."
    ],
    githubUrl: "https://github.com/Frankcanas"
  },
  {
    id: "pagina-zapatos",
    title: "E-Commerce de Calzado",
    subtitle: "Catálogo Web Interactivo y Carrito de Compras Dinámico",
    description: "Plataforma de compras digital orientada a calzado con filtrado dinámico por categorías, vista previa de producto y gestión del carrito en tiempo real.",
    longDescription: "Desarrollo frontend enfocado en rendimiento y usabilidad. Los usuarios pueden explorar categorías de calzado, aplicar filtros instantáneos, revisar especificaciones de producto y gestionar pedidos mediante una interfaz intuitiva.",
    category: "Full Stack & Frontend",
    tags: ["JavaScript", "HTML5", "CSS3 Moderno", "Responsive Design", "UI/UX"],
    featured: false,
    badge: "E-Commerce",
    highlights: [
      "Renderizado dinámico de productos y categorías desde fuentes de datos estructuradas.",
      "Carrito interactivo con cálculo automático de impuestos, totales y persistencia local.",
      "Diseño mobile-first adaptado a smartphones, tablets y pantallas de escritorio."
    ],
    githubUrl: "https://github.com/Frankcanas"
  },
  {
    id: "riwi-flow",
    title: "Riwi Flow & Proyectos Ágiles",
    subtitle: "Aplicaciones Colaborativas con Metodologías Scrum y Git Flow",
    description: "Soluciones de software desarrolladas en equipo con sprints ágiles, revisiones de código, control de calidad y buenas prácticas de colaboración.",
    longDescription: "Proyectos formativos y de desarrollo colaborativo que simulan entornos de producción reales. Enfocados en la entrega de valor iterativa, pruebas de integración y estándares internacionales de ingeniería.",
    category: "Full Stack & Frontend",
    tags: ["Git Flow", "Scrum", "Trabajo en Equipo", "Code Review", "Frontend & Backend"],
    featured: false,
    badge: "Metodología Ágil",
    highlights: [
      "Trabajo con ramas de características (feature branches) y pull requests auditadas.",
      "Resolución de historias de usuario con criterios de aceptación claros.",
      "Integración de pruebas para asegurar la estabilidad del producto."
    ],
    githubUrl: "https://github.com/Frankcanas"
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Frontend & UI/UX",
    icon: "Layout",
    skills: [
      { name: "React 19 / 18", level: "Avanzado" },
      { name: "TypeScript", level: "Avanzado" },
      { name: "Tailwind CSS", level: "Avanzado" },
      { name: "Leaflet Maps (GIS)", level: "Avanzado" },
      { name: "Vite", level: "Avanzado" },
      { name: "HTML5 & CSS3 Semántico", level: "Experto" },
      { name: "Responsive & Mobile-First", level: "Avanzado" },
      { name: "Componentes Modulares & Hooks", level: "Avanzado" }
    ]
  },
  {
    title: "Backend & Arquitectura",
    icon: "Server",
    skills: [
      { name: "NestJS", level: "Intermedio - Avanzado" },
      { name: "Node.js & Express", level: "Avanzado" },
      { name: "Clean Architecture & DDD", level: "Intermedio - Avanzado" },
      { name: "TypeORM & Prisma", level: "Intermedio" },
      { name: "PostgreSQL & MySQL", level: "Intermedio" },
      { name: "APIs RESTful & DTOs", level: "Avanzado" },
      { name: "Autenticación & RBAC", level: "Intermedio" }
    ]
  },
  {
    title: "Inteligencia Artificial & Datos",
    icon: "Sparkles",
    skills: [
      { name: "Arquitectura RAG Local", level: "Intermedio - Avanzado" },
      { name: "Ollama (Gemma / Llama)", level: "Intermedio - Avanzado" },
      { name: "Google Gemini SDK", level: "Intermedio - Avanzado" },
      { name: "Web Scraping (Cheerio/Axios)", level: "Avanzado" },
      { name: "Python Básico / Intermedio", level: "Intermedio" },
      { name: "Prompt Engineering", level: "Avanzado" }
    ]
  },
  {
    title: "Herramientas & Calidad",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub Flow", level: "Avanzado" },
      { name: "Docker & Docker Compose", level: "Intermedio" },
      { name: "CI/CD (GitHub Actions)", level: "Intermedio" },
      { name: "Clean Code & Refactorización", level: "Avanzado" },
      { name: "Linux / Bash Scripting", level: "Intermedio - Avanzado" },
      { name: "Figma (Inspección y Mockups)", level: "Intermedio" }
    ]
  }
];

export const experienceData = [
  {
    period: "2025 - Presente",
    role: "Frontend Lead & UI/UX Specialist",
    company: "Proyecto Comercial 360",
    description: "Liderazgo técnico del desarrollo frontend de una plataforma comercial modular con mapas interactivos de rutas, KPIs ejecutivos y registro de visitas en campo. Garantía de Clean Code y buenas prácticas."
  },
  {
    period: "2025 - 2026",
    role: "Desarrollador de Soluciones con IA & RAG",
    company: "Proyectos de Innovación Tecnológica",
    description: "Desarrollo de asistentes de atención al cliente empleando arquitecturas RAG locales con Ollama (Gemma 2B) y automatizaciones con Google Generative AI."
  },
  {
    period: "2024 - 2025",
    role: "Desarrollador Full Stack en Formación",
    company: "Riwi & Proyectos Colaborativos",
    description: "Desarrollo intensivo de aplicaciones web con NestJS, Node.js, React, TypeScript y bases de datos relacionales bajo metodologías ágiles y control de calidad."
  }
];
