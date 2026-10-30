# UNA Web Design — Centro Local Sucre

Sitio web del **Centro Local Sucre** de la **Universidad Nacional Abierta (UNA)**, orientado a la difusión de información institucional y a los servicios académicos para los estudiantes de las sedes de **Cumaná, Carúpano, Cariaco y Güiria** (estado Sucre, Venezuela).

## Descripción

Aplicación web de una sola página (SPA) con fines informativos y de gestión académica. Incluye:

- Barra de navegación principal con menús desplegables (La UNA, Sobre Nosotros, Directorio y Autoridades, Organigrama, Oferta Académica, Trámites y Aranceles, etc.).
- Sección principal (Hero) con la identidad institucional.
- Pilares institucionales y estadísticas destacadas.
- Tarjetas de acceso a carreras de pregrado, postgrado y cursos.
- Diseño responsivo (versión de escritorio y menú móvil).

## Estructura del repositorio

```
unaSucreWebsite/
├── frontend/            # Aplicación React + Vite (implementada)
│   ├── src/
│   │   ├── assets/
│   │   │   └── icons/       # Logotipos institucionales
│   │   ├── components/
│   │   │   ├── home/        # Hero, Stats, Tarjetas, QuickLinks
│   │   │   └── navigation/  # Navbar y menús desplegables
│   │   ├── config/
│   │   │   └── navigation.js  # Estructura de menús y rutas
│   │   ├── App.jsx          # Composición de la página
│   │   ├── index.css        # Tailwind + tipografía
│   │   └── main.jsx         # Punto de entrada de React
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

> `backend/` se agregará en el futuro. Estará fuera de `frontend/`, en la raíz del repositorio.

## Tecnologías utilizadas

### Frontend

| Tecnología | Uso |
| --- | --- |
| [React 19](https://react.dev/) | Biblioteca de interfaz de usuario (componentes con JSX) |
| [Vite 8](https://vite.dev/) | Servidor de desarrollo y empaquetado |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos utilitarios (`@tailwindcss/vite`) |
| [React Compiler](https://react.dev/learn/react-compiler) | Optimización automática de componentes (`babel-plugin-react-compiler`) |
| [Roboto](https://fonts.google.com/specimen/Roboto) | Tipografía del sitio (Google Fonts) |
| [ESLint 10](https://eslint.org/) | Análisis estático del código |

### Backend

_Pendiente de definir._

## Puesta en marcha

Todos los comandos del frontend se ejecutan dentro de `frontend/`:

```bash
cd frontend
npm install
npm run dev      # servidor de desarrollo
npm run build    # compilación para producción
npm run preview  # previsualizar el build
npm run lint     # revisar el código con ESLint
```

## Identidad visual

- Azul institucional principal: `#1E407C`
- Azul secundario (barra de utilidad): `rgba(0, 95, 169, 0.8)`
- Tipografía: Roboto, en blanco y negrita sobre las barras de navegación.

## Estado

Proyecto en desarrollo. La sección `QuickLinks` está implementada pero aún no habilitada en la página principal.
