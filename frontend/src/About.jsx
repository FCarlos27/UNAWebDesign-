import { Link } from 'react-router-dom';

export function About() {
  return (
    <article>
      <header className="bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <nav aria-label="Ruta de navegación" className="text-sm text-blue-200 mb-6"><Link to="/" className="hover:underline">Inicio</Link> / La UNA / Sobre Nosotros</nav>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">Sobre Nosotros</h1>
          <p className="mt-5 text-lg text-blue-100 max-w-2xl">Universidad Nacional Abierta, Centro Local Sucre</p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <section className="max-w-3xl">
          <h2 className="border-l-4 border-blue-900 pl-4 text-2xl font-black uppercase text-slate-900">Educación abierta y a distancia</h2>
          <p className="mt-6 text-slate-600 leading-relaxed">El Centro Local Sucre forma parte de la Universidad Nacional Abierta. Este espacio reúne información institucional y académica para la comunidad estudiantil de Cumaná, Carúpano, Cariaco y Güiria.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">La educación abierta y a distancia promueve el aprendizaje autónomo y una formación flexible. El sitio facilita la consulta de información sobre la universidad, su oferta académica y los servicios del centro local.</p>
        </section>
        <section className="bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-blue-950">Nuestra presencia en Sucre</h2>
          <p className="mt-4 text-slate-600">Sede Cumaná y unidades de apoyo de Carúpano, Cariaco y Güiria.</p>
        </section>
        <Link to="/" className="inline-block border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-5 py-3 text-sm font-bold uppercase tracking-wider">Volver al inicio</Link>
      </div>
    </article>
  );
}
