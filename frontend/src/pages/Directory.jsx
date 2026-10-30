import { useState } from 'react';
import { Link } from 'react-router-dom';
import campuses from '../data/directory.json';
import { filterAdvisors } from '../utils/directory';

const sourceLinkClass = 'font-bold text-blue-900 underline underline-offset-4 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700';

export function Directory() {
  // Sede seleccionada y texto del buscador.
  const [campusId, setCampusId] = useState(campuses[0].id);
  const [query, setQuery] = useState('');

  // Filtra únicamente los asesores de la sede seleccionada.
  const campus = campuses.find(item => item.id === campusId);
  const advisors = filterAdvisors(campus.advisors, query);

  return (
    <article>
      {/* Encabezado y ruta de navegación */}
      <header className="bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <nav aria-label="Ruta de navegación" className="text-sm text-blue-200 mb-6">
            <Link to="/" className="hover:underline">Inicio</Link> / La UNA / Directorio y Autoridades
          </nav>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Directorio y Autoridades</h1>
          <p className="mt-5 text-lg text-blue-100 max-w-3xl">Contactos de coordinación y asesores académicos del Centro Local Sucre y sus unidades de apoyo.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Autoridad y contacto de coordinación */}
        <section aria-labelledby="coord-title">
          <h2 id="coord-title" className="border-l-4 border-blue-900 pl-4 text-2xl font-black uppercase text-slate-900">Coordinación del centro</h2>
          <div className="mt-6 bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-extrabold text-blue-950">Profesora Angela Maiz Bruzual</h3>
            <p className="mt-2 text-slate-600">Coordinadora del Centro Local Sucre, según la página de Coordinación.</p>
            <a className={`${sourceLinkClass} inline-block mt-4 break-all`} href="mailto:unasucre1700@gmail.com">unasucre1700@gmail.com</a>
            <p className="mt-4 text-sm text-slate-500">La fuente no indica fecha de actualización del cargo. <a className={sourceLinkClass} href="https://unasucre.com.ve/coordinacion/" target="_blank" rel="noreferrer">Consultar fuente oficial</a></p>
          </div>
        </section>

        {/* Directorio por sede */}
        <section aria-labelledby="directory-title">
          <h2 id="directory-title" className="border-l-4 border-blue-900 pl-4 text-2xl font-black uppercase text-slate-900">Directorio académico</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">Carga académica del lapso 2026-2. Selecciona la sede donde estudias para consultar los asesores asignados. Algunos docentes atienden más de una sede.</p>
          {/* Estado de los horarios */}
          <p className="mt-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 text-sm text-amber-950"><strong>Horarios pendientes de confirmación.</strong> La imagen disponible de Cumaná indica el lapso 2023-II. No se publica como horario vigente. Las otras sedes no tienen horarios confirmados.</p>
          {/* Selector de sede y buscador */}
          <div className="mt-8 grid gap-5 sm:grid-cols-[minmax(180px,1fr)_2fr]">
            <div>
              <label htmlFor="directory-campus" className="block font-bold text-slate-900 mb-2">Sede o unidad de apoyo</label>
              <select id="directory-campus" value={campusId} onChange={event => { setCampusId(event.target.value); setQuery(''); }} className="w-full border border-slate-300 bg-white p-3 text-slate-900 focus:outline-2 focus:outline-blue-700">
                {campuses.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="directory-search" className="block font-bold text-slate-900 mb-2">Buscar asesor, carrera o asignatura</label>
              <input id="directory-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Ejemplo: Sistemas, Luis Pinto o 305" className="w-full border border-slate-300 bg-white p-3 text-slate-900 focus:outline-2 focus:outline-blue-700" />
            </div>
          </div>
          {/* Total de resultados y documento original */}
          <div className="my-6 flex flex-wrap gap-3 items-center justify-between">
            <p role="status" aria-live="polite" className="text-sm text-slate-600">{campus.name}: {advisors.length} de {campus.advisors.length} registros</p>
            <a href={campus.sourceUrl} target="_blank" rel="noreferrer" className={`${sourceLinkClass} text-sm`}>Ver carga académica de {campus.name} (PDF)</a>
          </div>
          {/* Resultados o aviso sin coincidencias */}
          {advisors.length === 0 ? (
            <div className="border border-slate-200 bg-white p-8 text-center">
              <h3 className="text-xl font-bold text-blue-950">No encontramos coincidencias</h3>
              <p className="mt-3 text-slate-600">Prueba otro nombre, carrera o código en esta sede.</p>
              <button type="button" onClick={() => setQuery('')} className={`${sourceLinkClass} mt-5`}>Limpiar búsqueda</button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {advisors.map(person => (
                <section key={person.id} aria-labelledby={`${person.id}-name`} className="min-w-0 bg-white border border-slate-200 p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-800">{person.area}</p>
                  <h3 id={`${person.id}-name`} className="mt-3 text-xl font-extrabold text-slate-900">{person.name}</h3>
                  {person.referenceLocation && <p className="mt-2 text-sm text-slate-500">Referencia de sede en el documento: {person.referenceLocation}</p>}
                  {/* Contactos del asesor */}
                  <div className="mt-5 space-y-2">
                    {person.emails.map(email => <a key={email} href={`mailto:${email}`} className={`${sourceLinkClass} block break-all text-sm`}>{email}</a>)}
                    {person.phones.map(phone => <a key={phone} href={`tel:+58${phone.replace(/\D/g, '').slice(1)}`} className={`${sourceLinkClass} block text-sm`}>{phone}</a>)}
                    {person.phones.length === 0 && person.notes.length === 0 && <p className="text-sm text-slate-500">Teléfono no publicado en el PDF.</p>}
                  </div>
                  {person.notes.map(note => <p key={note} className="mt-3 text-sm text-amber-900">{note}</p>)}
                  {/* Asignaturas desplegables */}
                  <details className="mt-5 border-t border-slate-200 pt-4">
                    <summary className="cursor-pointer font-bold text-sm text-blue-900">Códigos de asignaturas ({person.subjects.length})</summary>
                    <p className="mt-3 text-sm leading-7 text-slate-600 break-words">{person.subjects.join(', ')}</p>
                  </details>
                </section>
              ))}
            </div>
          )}
        </section>

        {/* Anexo de evaluación en Nivel Central */}
        <section className="border-t border-slate-200 pt-8" aria-labelledby="central-title">
          <h2 id="central-title" className="text-2xl font-extrabold text-blue-950">Asignaturas evaluadas en Nivel Central</h2>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">La segunda página de cada PDF contiene el anexo de asignaturas y contactos de Nivel Central. El asesor local mantiene la orientación al estudiante. Consulta con tu asesor cualquier duda sobre el nivel que evalúa tu asignatura.</p>
          <a href={`${campus.sourceUrl}#page=2`} target="_blank" rel="noreferrer" className={`${sourceLinkClass} inline-block mt-5`}>Consultar anexo de {campus.name} (página 2)</a>
          <p className="mt-4 text-sm text-slate-500">Algunos contactos del anexo presentan posibles errores tipográficos. Confírmalos con tu asesor antes de utilizarlos.</p>
        </section>
      </div>
    </article>
  );
}
