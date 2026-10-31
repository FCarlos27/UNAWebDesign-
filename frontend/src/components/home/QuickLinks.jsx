// Accesos frecuentes; sección todavía desactivada en Inicio.
export function QuickLinks() {
  const links = [
    {
      title: 'Material Instruccional',
      description: 'Accede a los enlaces y guías de estudio para tus asignaturas.',
      icon: '📚',
      href: '#'
    },
    {
      title: 'Calendario de Evaluaciones',
      description: 'Revisa las fechas clave de exámenes y entregas del lapso.',
      icon: '📅',
      href: '#'
    },
    {
      title: 'Aranceles y Pagos',
      description: 'Consulta los costos vigentes y cuentas bancarias autorizadas.',
      icon: '💳',
      href: '#'
    },
    {
      title: 'Cierre de Expediente',
      description: 'Requisitos, planillas y pasos para futuros graduandos.',
      icon: '🎓',
      href: '#'
    }
  ];

  return (
    <section id="accesos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Accesos Frecuentes
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          Los trámites y recursos más consultados por la comunidad estudiantil.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm
              hover:shadow-md hover:border-blue-500/50 transition-all flex
              flex-col justify-between"
          >
            <div>
              <span className="text-3xl p-3 bg-slate-50 rounded-xl inline-block
                group-hover:scale-110 transition-transform">
                {link.icon}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-4
                group-hover:text-blue-700 transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {link.description}
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-blue-700">
              <span>Consultar</span>
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
