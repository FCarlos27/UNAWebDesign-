import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/home/Hero';
import { Stats } from './components/home/Stats';
import { PilaresInstitucionales, Tarjetas } from './components/home/Tarjetas';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Directory } from './pages/Directory';
import { OrganizationChart } from './pages/OrganizationChart';
import { PendingPage, NotFound } from './RoutePages';
import { navigationConfig } from './config/navigation';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Navegación compartida por todas las páginas */}
      <Navbar />

      {/* Contenido según la dirección actual */}
      <main className="flex-1">
        <Routes>
          {/* Página de inicio */}
          <Route
            path="/"
            element={
              <>
                {/* Presentación principal */}
                <Hero />
                {/* Misión, visión y objetivos */}
                <PilaresInstitucionales />
                {/* Estadísticas institucionales */}
                <Stats />
                {/* Accesos a servicios académicos */}
                <Tarjetas />
              </>
            }
          />

          {/* Módulos con contenido propio */}
          <Route path="/la-una/sobre-nosotros" element={<About />} />
          <Route path="/la-una/directorio" element={<Directory />} />
          <Route path="/la-una/organigrama" element={<OrganizationChart />} />

          {/* Opciones del menú pendientes de desarrollar */}
          {navigationConfig
            .flatMap((item) => item.children ?? [])
            .filter(
              (item) =>
                ![
                  '/',
                  '/la-una/sobre-nosotros',
                  '/la-una/directorio',
                  '/la-una/organigrama'
                ].includes(item.href)
            )
            .map((item) => (
              <Route
                key={item.href}
                path={item.href}
                element={<PendingPage title={item.title} />}
              />
            ))}

          {/* Destinos de las tarjetas pendientes de desarrollar */}
          {[
            ['/la-una/mision', 'Nuestra Misión'],
            ['/la-una/vision', 'Nuestra Visión'],
            ['/la-una/objetivos', 'Objetivos de la UNA'],
            ['/asesorias', 'Asesorías Académicas'],
            ['/material-instruccional', 'Material Instruccional'],
            ['/calendario', 'Fechas y Calendarios']
          ].map(([path, title]) => (
            <Route key={path} path={path} element={<PendingPage title={title} />} />
          ))}

          {/* Direcciones que no existen */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Pie de página institucional */}
      <footer className="bg-blue-950 text-slate-400 py-8 border-t
        border-blue-900 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-bold text-slate-300">
            UNIVERSIDAD NACIONAL ABIERTA — CENTRO LOCAL SUCRE
          </p>
          <p className="mt-1">Cumaná, Carúpano, Cariaco, Güiria — Venezuela</p>
          <p className="mt-4 text-slate-500">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
