export function PilaresInstitucionales() {
  const pillars = [
    {
      tag: "Identidad",
      title: "Nuestra Misión",
      description: "Institución venezolana, oficial y experimental orientada a democratizar y masificar el acceso a una educación permanente de calidad, abierta y a distancia de alcance nacional y proyección internacional...",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      href: "/la-una/mision"
    },
    {
      tag: "Futuro",
      title: "Nuestra Visión",
      description: "Ser una institución de referencia nacional e internacional en educación permanente, abierta y a distancia, con clara vocación democratizadora, flexible, desburocratizada y con uso inteligente de las tecnologías de la información y la computación.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
      href: "/la-una/vision"
    },
    {
      tag: "Propósito",
      title: "Objetivos de la UNA",
      description: "Formar los recursos humanos y profesionales que demandan las áreas prioritarias del desarrollo socioeconómico del país, implementando un sistema de enseñanza modular, flexible y de educación permanente.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      href: "/la-una/objetivos"
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-l-4 border-blue-900 pl-4 mb-10">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
            Identidad Institucional
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Conoce los principios rectores que guían nuestra labor en el Centro Local Sucre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Imagen superior estilo Penn State */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-1 inline-block mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Enlace de lectura completo */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a 
                    href={item.href} 
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-900 group-hover:text-blue-700"
                  >
                    <span>Leer completo</span>
                    <span className="ml-1 text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function Tarjetas() {
  const modules = [
    {
      title: "Asesorías Académicas",
      subtitle: "Acompañamiento Docente",
      description: "Consulta el directorio de asesores por carrera, sus áreas de atención y los horarios de consulta presencial y virtual en el Centro Local Sucre.",
      buttonText: "Ver Horarios de Asesores",
      href: "/asesorias",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      reverse: false, // Imagen a la derecha
    },
    {
      title: "Material Instruccional",
      subtitle: "Recursos de Estudio",
      description: "Accede a los textos, guías de estudio, bibliografía digitalizada y planes de curso diseñados para el aprendizaje autogestionado.",
      buttonText: "Descargar Materiales",
      href: "/material-instruccional",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
      reverse: true, // Imagen a la izquierda
    },
    {
      title: "Fechas y Calendarios",
      subtitle: "Cronograma Académico",
      description: "Mantente al día con el calendario de pruebas, lapsos de inscripción, entrega de trabajos y actividades del Centro Local Sucre.",
      buttonText: "Ver Calendario",
      href: "/calendario",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
      reverse: false, // Imagen a la derecha
    },
  ];

  return (
    <section className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {modules.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 bg-white p-6 md:p-8 border border-slate-200 shadow-sm ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Texto y Botón */}
            <div className="flex-1 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-50 px-2.5 py-1 inline-block">
                {item.subtitle}
              </span>
              
              <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2">
                <a
                  href={item.href}
                  className="inline-block border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>

            {/* Imagen */}
            <div className="w-full md:w-1/2 h-64 lg:h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}