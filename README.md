# Portafolio Profesional — Frank Cañas 🚀

> **Backend Developer & Software Engineer | NestJS, Node.js, Express, TypeScript, PostgreSQL, AWS & RAG Local.**

Este proyecto es una SPA (Single Page Application) moderna, reactiva y de alto rendimiento diseñada para presentar los proyectos más destacados, stack tecnológico, trayectoria profesional y canales de contacto de **Frank Cañas**.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador:** [Vite 8](https://vite.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/) + Iconos vectoriales personalizados
- **Tipografía:** *Plus Jakarta Sans* & *JetBrains Mono*

---

## 📂 Estructura del Proyecto

```text
Portafolio/
├── index.html                   # HTML base con fuentes y metadatos SEO
├── package.json                 # Dependencias y scripts de ejecución
├── tsconfig.json                # Configuración de TypeScript
├── vite.config.ts               # Configuración de Vite con Tailwind CSS v4
├── src/
│   ├── main.tsx                 # Entrada principal de la aplicación React
│   ├── App.tsx                  # Estructura y composición de secciones
│   ├── index.css                # Estilos globales y capas de Tailwind
│   ├── data/
│   │   └── portfolioData.ts     # Datos centralizados: bio, proyectos, skills y experiencia
│   └── components/
│       ├── Navbar.tsx           # Barra de navegación flotante y responsiva
│       ├── Hero.tsx             # Sección inicial con llamadas a la acción e indicadores
│       ├── About.tsx            # Filosofía de desarrollo, Clean Code y pilares técnicos
│       ├── Skills.tsx           # Grilla interactiva de competencias por categorías
│       ├── Projects.tsx         # Portafolio de proyectos con filtros por categoría
│       ├── ProjectModal.tsx     # Modal de detalle extendido y notas de arquitectura
│       ├── Experience.tsx       # Línea de tiempo de hitos y proyectos de liderazgo
│       ├── Contact.tsx          # Formulario y canales directos (Email, GitHub, LinkedIn)
│       ├── Footer.tsx           # Pie de página con créditos y scroll suave
│       └── Icons.tsx            # Iconos vectoriales para GitHub y LinkedIn
```

---

## 🚀 Cómo Ejecutar en Local

### 1. Clonar o ingresar al directorio
```bash
cd "/home/frank-programador/Escritorio/proyectos totales/Portafolio"
```

### 2. Instalar dependencias (si es necesario)
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173`.

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados y listos para despliegue se generarán en la carpeta `dist/`.

---

## ✏️ Cómo Personalizar tus Datos

Todos los textos, proyectos, enlaces a redes sociales y habilidades están centralizados en un único archivo:
👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

Puedes editar:
- **`personalInfo`:** Nombre, correo, enlaces a GitHub, LinkedIn, bio y estadísticas.
- **`projectsData`:** Agregar o modificar proyectos, capturas de pantalla, enlaces a repositorios y demos en vivo.
- **`skillsCategories`:** Modificar o agregar nuevas tecnologías y niveles de dominio.
- **`experienceData`:** Actualizar fechas, roles y descripción de proyectos.

---

## 🌐 Opciones de Despliegue Gratuito

- **Vercel:** Conecta tu repositorio de GitHub en [vercel.com](https://vercel.com) y se desplegará automáticamente.
- **Netlify:** Arrastra la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop) o conecta el repo.
- **GitHub Pages:** Despliega la carpeta `dist` usando la acción oficial `JamesIves/github-pages-deploy-action`.
