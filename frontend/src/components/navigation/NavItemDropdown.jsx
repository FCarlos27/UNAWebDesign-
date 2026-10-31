import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

export function NavItemDropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    // Cancela el cierre pendiente.
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Cierra el menú al salir con el cursor.
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-bold uppercase
          tracking-wider text-white hover:text-blue-200 transition-colors
          py-2 border-b-2 border-transparent hover:border-white
          focus:outline-none"
      >
        <span>{item.title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-blue-200' : 'text-white'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Opciones del submenú */}
      {isOpen && (
        <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl
          border-t-4 border-blue-900 border-x border-b
          border-slate-200 py-2 z-50">
          {item.children.map((child, index) => (
            <Link
              key={index}
              to={child.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider
                text-slate-700 hover:bg-slate-100 hover:text-blue-950
                transition-colors border-b border-slate-100 last:border-none"
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
