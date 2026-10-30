import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/home/Hero';
import { Stats } from './components/home/Stats';
import { PilaresInstitucionales, Tarjetas } from './components/home/Tarjetas';
import { Routes, Route } from 'react-router-dom';
import { About } from './About';
import { PendingPage, NotFound } from './RoutePages';
import { navigationConfig } from './config/navigation';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <Routes><Route path="/" element={<><Hero />
        <PilaresInstitucionales/>
        <Stats />
        <Tarjetas/>
        </>} />
<Route path="/la-una/sobre-nosotros" element={<About />} />
{navigationConfig.flatMap(item => item.children ?? []).filter(item => item.href !== "/la-una/sobre-nosotros").map(item => <Route key={item.href} path={item.href} element={<PendingPage title={item.title} />} />)}
{[["/la-una/mision", "Nuestra Misión"], ["/la-una/vision", "Nuestra Visión"], ["/la-una/objetivos", "Objetivos de la UNA"], ["/asesorias", "Asesorías Académicas"], ["/material-instruccional", "Material Instruccional"], ["/calendario", "Fechas y Calendarios"]].map(([path, title]) => <Route key={path} path={path} element={<PendingPage title={title} />} />)}
<Route path="*" element={<NotFound />} /></Routes>
      </main>

      <footer className="bg-blue-950 text-slate-400 py-8 border-t border-blue-900 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-bold text-slate-300">UNIVERSIDAD NACIONAL ABIERTA — CENTRO LOCAL SUCRE</p>
          <p className="mt-1">Cumaná, Carúpano, Cariaco, Güiria — Venezuela</p>
          <p className="mt-4 text-slate-500">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
