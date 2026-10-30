import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/home/Hero';
import { Stats } from './components/home/Stats';
import { PilaresInstitucionales, Tarjetas } from './components/home/Tarjetas';
import { QuickLinks } from './components/home/QuickLinks';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <PilaresInstitucionales/>
        <Stats />
        <Tarjetas/>
        {/* <QuickLinks /> */}
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