import { Link } from 'react-router-dom';

const imageUrl = '/images/organigrama-centro-local-sucre.jpg';
const sourceUrl =
  'https://unasucre.com.ve/wp-content/uploads/2024/05/IMG-20240528-WA0042.jpg';

export function OrganizationChart() {
  return (
    <article>
      {/* Encabezado y ruta de navegación */}
      <header className="bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <nav
            aria-label="Ruta de navegación"
            className="text-sm text-blue-200 mb-6"
          >
            <Link to="/" className="hover:underline">Inicio</Link>
            {' / La UNA / Organigrama'}
          </nav>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Organigrama
          </h1>
          <p className="mt-5 text-lg text-blue-100 max-w-2xl">
            Estructura organizativa del Centro Local Sucre de la
            Universidad Nacional Abierta.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {/* Imagen institucional y opciones de consulta */}
        <section aria-labelledby="chart-title">
          <h2
            id="chart-title"
            className="border-l-4 border-blue-900 pl-4 text-2xl
              font-black uppercase text-slate-900"
          >
            Estructura del centro local
          </h2>
          <p className="mt-4 text-slate-600">
            Consulta la relación entre la coordinación general,
            las unidades y sus dependencias.
          </p>
          <div className="my-6 flex flex-wrap gap-4">
            <a
              href={imageUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-900 text-white hover:bg-blue-800 px-5 py-3
                text-sm font-bold uppercase tracking-wider
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-blue-700"
            >
              Ampliar imagen
            </a>
          </div>
          <figure className="bg-white border border-slate-200 p-3 sm:p-6 shadow-sm">
            <img
              src={imageUrl}
              width="1024"
              height="768"
              alt="Organigrama del Centro Local Sucre, encabezado por la
                Coordinación General y sus cinco unidades.
                Estructura completa en texto a continuación."
              className="block w-full max-w-5xl h-auto mx-auto"
            />
            <figcaption className="mt-4 text-sm text-slate-600 leading-relaxed">
              Imagen publicada en el sitio del Centro Local Sucre.{' '}
              <a
                href={sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-900 underline underline-offset-4"
              >
                Consultar fuente original
              </a>
              . La imagen no indica fecha de vigencia.
            </figcaption>
          </figure>
        </section>

        {/* Transcripción para facilitar la lectura */}
        <section
          aria-label="Estructura en texto"
          className="bg-white border border-slate-200 p-6 sm:p-8 shadow-sm"
        >
          <p className="mt-4 font-bold text-slate-900">
            Coordinación General del Centro Local Sucre
          </p>
          <ul className="mt-5 list-disc pl-5 space-y-5 text-slate-700 leading-relaxed">
            <li>
              <strong>Unidad de Administración</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Almacén</li>
                <li>Mantenimiento</li>
              </ul>
            </li>
            <li>
              <strong>Unidad Académica</strong>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Depto. de Logista de la Investigación</li>
                <li>Depto. de Orientación</li>
                <li>
                  Oficina de Apoyo
                  <ul className="list-disc pl-5 mt-1">
                    <li>Carúpano</li>
                    <li>Cariaco</li>
                    <li>Güiria</li>
                  </ul>
                </li>
                <li>Cuerpo Docente</li>
                <li>
                  Centros de Aplicaciones de Pruebas
                  <ul className="list-disc pl-5 mt-1">
                    <li>Araya</li>
                    <li>Cumanacoa</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Unidad de Registros y Control de Estudio</strong>
            </li>
            <li>
              <strong>Unidad de Recursos Multiples</strong>
            </li>
            <li>
              <strong>Unidad de Computación</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Sala de Computación</li>
              </ul>
            </li>
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Las denominaciones se conservan tal como aparecen
            en la imagen de referencia.
          </p>
        </section>

        {/* Acceso a responsables y contactos */}
        <Link
          to="/la-una/directorio"
          className="inline-block font-bold text-blue-900 underline
            underline-offset-4 hover:text-blue-700"
        >
          Consultar Directorio y Autoridades
        </Link>
      </div>
    </article>
  );
}
