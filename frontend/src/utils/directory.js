export function normalizeSearch(value) {
  // Ignora tildes, mayúsculas y espacios en los extremos.
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function filterAdvisors(advisors, query) {
  // Divide la búsqueda en palabras y elimina términos vacíos.
  const terms = normalizeSearch(query).split(/\s+/).filter(Boolean);

  return advisors.filter((person) => {
    // Reúne los campos del asesor donde se permite buscar.
    const text = normalizeSearch(
      [
        person.name,
        person.area,
        person.referenceLocation,
        ...person.subjects,
        ...person.emails
      ].join(' ')
    );

    // Exige todos los términos; una búsqueda vacía muestra todos.
    return terms.every((term) => text.includes(term));
  });
}
