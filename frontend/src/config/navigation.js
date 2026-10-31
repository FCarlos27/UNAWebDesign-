// Opciones y destinos del menú principal.
export const navigationConfig = [
  {
    title: 'Inicio',
    href: '/'
  },
  {
    title: 'La UNA',
    children: [
      { title: 'Sobre Nosotros', href: '/la-una/sobre-nosotros' },
      { title: 'Directorio y Autoridades', href: '/la-una/directorio' },
      { title: 'Organigrama', href: '/la-una/organigrama' }
    ]
  },
  {
    title: 'Oferta Académica',
    children: [
      { title: 'Carreras de Pregrado / Pensums', href: '/academico/pregrado' },
      { title: 'Programa de Postgrado', href: '/academico/postgrado' },
      { title: 'Curso Introductorio', href: '/academico/curso-introductorio' }
    ]
  },
  {
    title: 'Trámites y Aranceles',
    children: [
      { title: 'Cierre de Expediente y Grado', href: '/tramites/grado' },
      { title: 'Aranceles Vigentes', href: '/tramites/aranceles' },
      { title: 'Cuentas Bancarias', href: '/tramites/cuentas-bancarias' },
      { title: 'Solicitud de Documentos', href: '/tramites/documentos' }
    ]
  },
  {
    title: 'Unidades y Sedes',
    children: [
      { title: 'Sede Cumaná', href: '/sedes/cumana' },
      { title: 'Unidad de Apoyo Carúpano', href: '/sedes/carupano' },
      { title: 'Unidad de Apoyo Cariaco', href: '/sedes/cariaco' },
      { title: 'Unidad de Apoyo Güiria', href: '/sedes/guiria' }
    ]
  }
];
