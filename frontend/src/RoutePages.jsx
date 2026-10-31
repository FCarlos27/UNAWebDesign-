import { Link } from 'react-router-dom';

// Vista para módulos pendientes.
export function PendingPage({ title }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <p className="text-blue-700 font-bold uppercase text-sm">Próximamente</p>
      <h1 className="mt-4 text-4xl font-black text-blue-950">{title}</h1>
      <p className="mt-6 text-slate-600">Esta sección estará disponible próximamente.</p>
      <Link className="inline-block mt-8 font-bold text-blue-900 underline" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}

// Vista para direcciones desconocidas.
export function NotFound() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-blue-950">Página no encontrada</h1>
      <p className="mt-6 text-slate-600">
        Comprueba la dirección o regresa a la página principal.
      </p>
      <Link className="inline-block mt-8 font-bold text-blue-900 underline" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}
