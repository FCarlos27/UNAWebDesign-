# Instrucciones para agentes

## Proyecto
Sitio del Centro Local Sucre de la Universidad Nacional Abierta. Frontend React con Vite, Tailwind CSS y React Router. Trabajar dentro de frontend/ para ejecutar comandos. La raíz contiene el repositorio Git.

## Colaboración
- Comunicarse en español claro y organizado.
- Mantener el diseño institucional actual: azul #1E407C, tonos blue-950/blue-900, tipografía Roboto, contenedores max-w-7xl y diseño adaptable.
- Implementar únicamente el alcance solicitado. No reemplazar el diseño general ni introducir un backend sin necesidad acordada.
- No inventar autoridades, fechas, aranceles, horarios, contactos, acreditaciones ni oferta académica. Solicitar o verificar fuentes oficiales para ampliar contenido.

## Estructura y navegación
- src/main.jsx contiene BrowserRouter; src/App.jsx contiene las rutas y el marco compartido de navegación y pie de página.
- src/config/navigation.js define las opciones del menú.
- src/About.jsx implementa Sobre Nosotros usando información general ya existente en el repositorio. Su contenido requiere revisión institucional antes de publicar.
- src/RoutePages.jsx contiene la vista de secciones pendientes y la página no encontrada.
- Usar Link/NavLink de React Router para navegación interna. Mantener enlaces externos como elementos a.
- Inicio y Sobre Nosotros son las páginas con contenido propio. Las demás rutas muestran Próximamente; esto no equivale a módulos implementados.
- QuickLinks permanece desactivado y conserva enlaces provisionales. No activarlo sin sustituir sus destinos.
- Al añadir un módulo, sustituir su ruta pendiente, mantener accesibilidad y comprobar navegación móvil, atrás/adelante y acceso directo.

## Ejecución y validación
- npm ci: instalar versiones fijadas en package-lock.json.
- npm run dev -- --host 127.0.0.1: iniciar servidor local.
- npm run build y npm run lint antes de entregar cambios.
- Conservar package-lock.json. No versionar node_modules, dist, credenciales ni archivos temporales.
- Para producción con BrowserRouter, configurar el alojamiento para servir index.html en rutas de la aplicación; no interceptar archivos estáticos inexistentes como páginas.
- Distinguir comprobaciones de compilación de pruebas visuales reales. No afirmar que una página se probó en navegador sin haberlo hecho.

## Git
- Revisar git status y git diff antes de modificar o registrar cambios.
- Preservar los cambios ajenos. No usar reset --hard, clean ni force push sin autorización explícita.
- Hacer commits pequeños con mensajes descriptivos cuando se solicite registrar una versión. No inventar nombre o correo del autor.
- No subir cambios, publicar ni desplegar sin autorización.
