import { useState, useRef, useEffect } from 'react';

export function NavItemDropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cierra el menú al hacer clic fuera del componente
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-white hover:text-blue-200 transition-colors py-2 border-b-2 border-transparent hover:border-white focus:outline-none"
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          {item.children.map((child, index) => (
            <a
              key={index}
              href={child.href}
              className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-colors"
            >
              {child.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}