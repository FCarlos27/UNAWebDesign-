import test from 'node:test';
import assert from 'node:assert/strict';
import campuses from '../src/data/directory.json' with { type: 'json' };
import { filterAdvisors } from '../src/utils/directory.js';

const cumana = campuses.find(item => item.name === 'Cumaná');

test('cada sede conserva el número de filas verificado en su PDF', () => {
  assert.deepEqual(campuses.map(item => item.advisors.length), [18, 17, 15, 16]);
  assert.equal(new Set(campuses.flatMap(item => item.advisors.map(person => person.id))).size, 66);
});
test('la búsqueda tolera tildes y combina nombre y asignatura', () => {
  assert.equal(filterAdvisors(cumana.advisors, '  luis 305 ')[0].name, 'Luis Pinto');
  assert.equal(filterAdvisors(cumana.advisors, 'NUNEZ')[0].name, 'Mirla Núñez');
  assert.equal(filterAdvisors(cumana.advisors, 'no existe').length, 0);
});
test('preserva códigos con ceros iniciales y asignaciones diferentes por sede', () => {
  assert.equal(filterAdvisors(cumana.advisors, '000')[0].name, 'Johann Perez');
  assert.equal(filterAdvisors(cumana.advisors, '050')[0].name, 'Rosa Gonzalez');
  const guiria = campuses.find(item => item.name === 'Güiria');
  assert.equal(filterAdvisors(guiria.advisors, 'Gregorio 339').length, 0);
  assert.equal(filterAdvisors(campuses[1].advisors, 'Gregorio 339').length, 1);
});
test('las celdas combinadas de Cumaná no mezclan contactos entre asesores', () => {
  const frank = cumana.advisors.find(item => item.name === 'Frank Flores');
  const orlando = cumana.advisors.find(item => item.name === 'Orlando Betancourt');
  assert.deepEqual(frank.emails, ['Frankflores.2510@gmail.com']);
  assert.deepEqual(frank.phones, []);
  assert.deepEqual(orlando.emails, ['orlandobetancourt.pnfa@gmail.com']);
  assert.deepEqual(orlando.phones, ['0412-6990887']);
});
test('no convierte el teléfono dudoso de Maria en un enlace telefónico', () => {
  const maria = campuses[1].advisors.find(item => item.name.startsWith('Maria T.'));
  assert.equal(maria.phones.length, 0);
  assert.ok(maria.notes.some(note => note.includes('04248-773019')));
});
