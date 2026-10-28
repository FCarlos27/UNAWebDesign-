export function Stats() {
  const stats = [
    { label: "Sedes y Unidades", value: "4", detail: "Cumaná, Carúpano, Cariaco y Güiria" },
    { label: "Carreras de Pregrado", value: "12+", detail: "Ingenierías, Licenciaturas y TSU" },
    { label: "Años de Trayectoria", value: "45+", detail: "Formando profesionales en el Estado Sucre" },
  ];

  return (
    <section className="bg-blue-950 text-white border-y border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-blue-800/60">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${idx !== 0 ? 'md:pl-8 pt-6 md:pt-0' : ''}`}>
              <span className="text-4xl lg:text-5xl font-black text-blue-400 tracking-tight block">
                {stat.value}
              </span>
              <span className="text-lg font-bold text-white mt-1 block">
                {stat.label}
              </span>
              <p className="text-xs text-slate-400 mt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}