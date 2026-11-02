import { Link } from 'react-router-dom';

export function About() {
  return (
    <article>
      {/* Encabezado y ruta de navegación */}
      <header className="bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <nav aria-label="Ruta de navegación" className="text-sm text-blue-200 mb-6">
            <Link to="/" className="hover:underline">
              Inicio
            </Link>{' '}
            / La UNA / Sobre Nosotros
          </nav>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Sobre Nosotros
          </h1>
          <p className="mt-5 text-lg text-blue-100 max-w-2xl">
            Universidad Nacional Abierta, Centro Local Sucre
          </p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Presentación del centro local */}
        <section className="max-w-3xl">
          <h2 className="border-l-4 border-blue-900 pl-4 text-2xl font-black
            uppercase text-slate-900">
            Educación abierta y a distancia
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            El Centro Local Sucre forma parte de la Universidad Nacional Abierta. Este
            espacio reúne información institucional y académica para la comunidad
            estudiantil de Cumaná, Carúpano, Cariaco y Güiria.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            La educación abierta y a distancia promueve el aprendizaje autónomo y una
            formación flexible. El sitio facilita la consulta de información sobre la
            universidad, su oferta académica y los servicios del centro local.
          </p>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            La misión, visión y objetivos siguientes pertenecen a la UNA
            como institución nacional y orientan la labor del Centro Local Sucre.
          </p>
        </section>
        {/* Misión y visión de la universidad */}
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <section
            aria-labelledby="mision-una"
            className="bg-white border border-slate-200 p-6 sm:p-8 shadow-sm"
          >
            <h2 id="mision-una" className="text-2xl font-extrabold text-blue-950">
              Misión de la UNA
            </h2>
            <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Como universidad pública y experimental venezolana, la UNA
                ofrece formación abierta y a distancia en el país, con
                proyección internacional. Busca ampliar el acceso a una
                educación continua de calidad que contribuya al desarrollo
                nacional.
              </p>
              <p>
                Atiende tanto a quienes han encontrado obstáculos para iniciar
                o continuar estudios superiores como a los sectores sociales
                que necesitan formación.
              </p>
              <p>
                Para cumplir esta misión, combina estrategias de educación
                a distancia, investigación institucional y colaboración
                con otras organizaciones.
              </p>
            </div>
          </section>
          <section
            aria-labelledby="vision-una"
            className="bg-white border border-slate-200 p-6 sm:p-8 shadow-sm"
          >
            <h2 id="vision-una" className="text-2xl font-extrabold text-blue-950">
              Visión de la UNA
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Ser un referente dentro y fuera de Venezuela en formación
              permanente y a distancia, con una educación accesible,
              flexible y de calidad.
            </p>
            <details className="mt-5 group">
              <summary
                className="cursor-pointer font-semibold text-blue-900
                  focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <span className="group-open:hidden">Leer más sobre la visión</span>
                <span className="hidden group-open:inline">Leer menos</span>
              </summary>
              <ul
                className="mt-4 list-disc pl-5 space-y-3 text-slate-600
                  leading-relaxed"
              >
                <li>Ampliar las oportunidades de acceso a la educación.</li>
                <li>Superar barreras de ubicación y disponibilidad de tiempo.</li>
                <li>
                  Formar ciudadanos actualizados, críticos, emprendedores
                  y comprometidos con la participación ciudadana.
                </li>
                <li>Liderar la educación a distancia venezolana.</li>
                <li>Mantener una organización ágil y flexible.</li>
                <li>Ofrecer calidad en todos sus servicios educativos.</li>
                <li>Incluir a poblaciones históricamente excluidas.</li>
                <li>Capacitar al personal de organismos públicos nacionales.</li>
                <li>Extender su actividad más allá de las fronteras.</li>
                <li>Aprovechar distintos medios y tecnologías digitales.</li>
                <li>
                  Responder al entorno y cooperar con instituciones
                  que compartan sus propósitos.
                </li>
              </ul>
            </details>
          </section>
        </div>
        {/* Objetivos institucionales */}
        <section aria-labelledby="objetivos-una">
          <h2
            id="objetivos-una"
            className="border-l-4 border-blue-900 pl-4 text-2xl
              font-black uppercase text-slate-900"
          >
            Objetivos de la UNA
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed max-w-3xl">
            Estos doce objetivos del Reglamento UNA se presentan de forma
            resumida para facilitar su lectura.
          </p>
          <ol
            className="mt-6 list-decimal pl-6 space-y-4 max-w-3xl
              text-slate-600 leading-relaxed marker:font-bold marker:text-blue-900"
          >
            <li>
              Preparar personal para las necesidades prioritarias del país
              a corto, mediano y largo plazo.
            </li>
            <li>Formar profesionales capaces de impulsar cambios sociales.</li>
            <li>
              Desarrollar una modalidad universitaria que incorpore sectores
              públicos y privados en sus programas.
            </li>
            <li>
              Orientar el financiamiento estatal a la formación nacional
              y al aumento de la productividad.
            </li>
            <li>
              Investigar soluciones para áreas prioritarias del desarrollo,
              especialmente la educación.
            </li>
            <li>
              Fortalecer el vínculo con los valores culturales venezolanos,
              latinoamericanos y universales.
            </li>
            <li>
              Aplicar nuevas estrategias educativas para mejorar el rendimiento
              y aprovechar los recursos.
            </li>
            <li>
              Investigar y evaluar la educación abierta y a distancia;
              coordinar con organismos educativos la formación no formal
              en otros niveles.
            </li>
            <li>
              Ofrecer un aprendizaje modular y flexible que permita avanzar
              progresivamente en la profesionalización.
            </li>
            <li>Fomentar que cada estudiante asuma responsabilidad por su aprendizaje.</li>
            <li>Organizar oportunidades de formación continua a lo largo de la vida.</li>
            <li>
              Mejorar la inversión educativa y reducir costos mediante
              economías de escala.
            </li>
          </ol>
        </section>
        {/* Historia institucional */}
        <section aria-labelledby="historia-una" className="max-w-3xl">
          <h2
            id="historia-una"
            className="border-l-4 border-blue-900 pl-4 text-2xl
              font-black uppercase text-slate-900"
          >
            Historia de la UNA
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            La Universidad Nacional Abierta nació para ampliar el acceso a
            la educación superior mediante una modalidad abierta y a distancia.
            Su historia y sus principios institucionales corresponden a la
            universidad en todo el país, de la que forma parte el Centro
            Local Sucre.
          </p>
          <details className="mt-6 group">
            <summary
              className="cursor-pointer font-semibold text-blue-900
                focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <span className="group-open:hidden">
                Leer más sobre la historia
              </span>
              <span className="hidden group-open:inline">Leer menos</span>
            </summary>
            <ol className="mt-6 space-y-4 border-l-2 border-blue-200 pl-6">
              <li>
                <h3 className="font-bold text-blue-950">1975: primeros pasos</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  El Ministerio de Educación creó la primera comisión
                  organizadora el 15 de julio de 1975, mediante la Resolución
                  N.º 200, firmada por Luis Manuel Peñalver. El proyecto
                  buscaba preparar profesionales para sectores prioritarios
                  del desarrollo nacional mediante educación a distancia,
                  teleeducación y otras formas de enseñanza no tradicionales.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-950">
                  1976: nueva comisión organizadora
                </h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  El 9 de marzo, la Resolución N.º 1 del Ministerio de
                  Educación sustituyó la Resolución N.º 200 y constituyó
                  una nueva comisión organizadora de la UNA.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-950">
                  1977: preparación del proyecto
                </h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  El 12 de abril, Carlos Rafael Silva firmó la Resolución
                  N.º 126, que reorganizó la comisión. Ya se habían definido
                  la justificación y las características de la universidad;
                  faltaban estudios técnicos especializados para presentar
                  el proyecto al Consejo Nacional de Universidades y al
                  Ejecutivo Nacional para su evaluación y puesta en marcha.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-950">
                  1977: primer Consejo Superior
                </h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  La Resolución N.º 225, del 11 de agosto, designó a Luis
                  Manuel Peñalver como presidente, Miguel Casas Armengol
                  como vicepresidente académico y José Félix Rivas como
                  secretario del Consejo Superior.
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  También fueron designados Mario Espitaleri, Luis
                  Manzanilla, Ivan Olaizola, Miguel Escotet, Sergio Falcchi,
                  John de Abate, Estrella Benaim, César Peña, Juan Torres,
                  Tirso Méndez, Beatriz Dávila y José Bargraser.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-950">1977: creación de la UNA</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Durante la presidencia de Carlos Andrés Pérez, el proyecto
                  recibió aprobación el 16 de septiembre. La creación de la
                  UNA se formalizó el 27 de septiembre mediante el Decreto
                  Presidencial N.º 2398, publicado en la Gaceta Oficial
                  N.º 31328.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-950">1978: inicio de actividades</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Se pusieron en funcionamiento 21 centros locales y las
                  unidades de apoyo, y comenzó la elaboración de materiales
                  impresos y audiovisuales para el aprendizaje.
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  El Ministerio de Educación dictó el Reglamento de la UNA
                  mediante la Resolución N.º 28. Las resoluciones N.º 44 y
                  N.º 75 designaron, respectivamente, al primer Consejo
                  Directivo y a los integrantes del Consejo Superior.
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Los centros locales recibieron las primeras inscripciones
                  para Matemática, Ingeniería de Sistemas, Ingeniería
                  Industrial, Educación, Administración y Contaduría.
                </p>
              </li>
            </ol>
            {/* Trayectoria del fundador */}
            <div className="mt-8 space-y-4 text-slate-600 leading-relaxed">
              <h3 className="text-lg font-bold text-blue-950">
                El aporte de Luis Manuel Peñalver
              </h3>
              <p>
                Además de ministro de Educación y presidente fundador de la
                UNA, Peñalver fue rector fundador de la Universidad de
                Oriente y presidente fundador de la Universidad Metropolitana.
                Impulsó la creación de la Universidad Simón Bolívar y ejerció
                como legislador, profesor de patología tropical y vicerrector
                de la Universidad Central de Venezuela.
              </p>
            </div>
            {/* Naturaleza y principios */}
            <div className="mt-8 space-y-4 text-slate-600 leading-relaxed">
              <h3 className="text-lg font-bold text-blue-950">
                Naturaleza de la institución y libertad académica
              </h3>
              <p>
                La UNA se concibió para preparar profesionales en áreas
                prioritarias del desarrollo social mediante educación abierta
                y a distancia, apoyada en medios de comunicación. Su sede
                central está en Caracas y su actividad se extiende por
                Venezuela mediante centros locales y oficinas de apoyo.
              </p>
              <p>
                Sus estatutos la definen como una entidad de derecho público
                con personalidad jurídica y patrimonio propios. Funciona
                bajo un régimen experimental, conforme a la Constitución y
                las leyes, y presta el servicio público de educación superior.
              </p>
              <p>
                La libertad académica fundamenta la docencia, la investigación
                y la extensión. Estas actividades permiten expresar y difundir
                ideas, así como desarrollar la creación artística, humanística,
                científica y técnica.
              </p>
            </div>
            {/* Desarrollo de la red nacional */}
            <div className="mt-8 space-y-4 text-slate-600 leading-relaxed">
              <h3 className="text-lg font-bold text-blue-950">
                Crecimiento y organización territorial
              </h3>
              <p>
                La reseña histórica describe el crecimiento de la UNA hasta
                una estructura con un nivel central en Caracas y 22 centros
                locales en capitales de estado. Esta cifra corresponde a la
                organización descrita en esa reseña histórica.
              </p>
              <p>
                Los centros locales constituyen las unidades operativas de
                la universidad: acompañan al estudiantado en los procesos
                académicos y administrativos, de investigación y de extensión
                que sostienen la enseñanza y el aprendizaje.
              </p>
              <p>
                A esta red se suman las oficinas de apoyo y los centros de
                información y aplicación de pruebas. Su función es ampliar
                el alcance territorial de la educación superior a distancia
                y acercarla a las comunidades de los estados del país.
              </p>
            </div>
          </details>
        </section>
        {/* Sede y unidades de apoyo */}
        <section className="bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-blue-950">
            Nuestra presencia en Sucre
          </h2>
          <p className="mt-4 text-slate-600">
            Sede Cumaná y unidades de apoyo de Carúpano, Cariaco y Güiria.
          </p>
        </section>
        <Link
          to="/"
          className="inline-block border-2 border-blue-900 text-blue-900
            hover:bg-blue-900 hover:text-white px-5 py-3 text-sm font-bold
            uppercase tracking-wider"
        >
          Volver al inicio
        </Link>
      </div>
    </article>
  );
}
