import { Link } from 'react-router-dom';
import { useState } from 'react';
import { navigationConfig } from '../../config/navigation';
import { NavItemDropdown } from './NavItemDropdown';
import unaLogo from '../../assets/icons/unaLogo.png';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1E407C] border-b border-slate-200 shadow-sm">
      {/* 2. BARRA PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          
          {/* Logo estilo marca universitaria */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={unaLogo}
              alt="Universidad Nacional Abierta"
              className="w-16 h-16 rounded-md object-contain bg-white p-1 shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg uppercase tracking-tight leading-tight">
                Centro Local Sucre
              </span>
              <span className="text-xs font-bold text-blue-100 uppercase tracking-widest">
                Universidad Nacional Abierta
              </span>
            </div>
          </Link>

          {/* Navegación Desktop con estilo de pestaña / borde */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationConfig.map((item, index) =>
              item.children ? (
                <NavItemDropdown key={index} item={item} />
              ) : (
                <Link
                  key={index}
                  to={item.href} onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-wider text-white hover:text-blue-200 py-2 border-b-2 border-transparent hover:border-white transition-all"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button
              aria-label="Abrir o cerrar menú" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white focus:outline-none"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Menú desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-950 text-white px-4 pt-4 pb-6 space-y-4 border-t border-blue-900">
          {navigationConfig.map((item, index) => (
            <div key={index} className="space-y-1">
              {item.children ? (
                <>
                  <p className="text-[11px] font-bold text-blue-400 uppercase tracking-widest pt-2">
                    {item.title}
                  </p>
                  {item.children.map((child, childIdx) => (
                    <Link
                      key={childIdx}
                      to={child.href} onClick={() => setMobileMenuOpen(false)}
                      className="block px-2 py-1.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-blue-900"
                    >
                      {child.title}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  to={item.href} onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-bold uppercase tracking-wider text-white border-b border-blue-900"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
