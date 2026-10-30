import { Link } from 'react-router-dom';
export function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Imagen de fondo con gradiente oscuro tipo Penn State */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 filter contrast-125"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-600 text-white text-xs uppercase tracking-widest font-bold">
            Lapso Académico Activo
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Educación Abierta <br />
            <span className="text-blue-300">Sin Fronteras.</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Bienvenidos al Centro Local Sucre. Formación universitaria pública, modular y flexible adaptada a tu ritmo en Cumaná, Carúpano, Cariaco y Güiria.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/tramites/documentos"
              className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-blue-950 bg-white hover:bg-slate-100 transition-all shadow-md rounded-none border-l-4 border-blue-600"
            >
              Trámites y Servicios
            </Link>
            <Link
              to="/academico/pregrado"
              className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-blue-800/80 hover:bg-blue-800 transition-all border border-blue-500/40"
            >
              Oferta de Carreras
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
