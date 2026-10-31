import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ value, suffix = '', duration = 1000 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrame;

    // Inicia el contador cuando entra en pantalla.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        observer.unobserve(element);

        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);

          const currentValue = Math.floor(progress * value);
          setCount(currentValue);

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return (
    <span
      ref={elementRef}
      className="block text-5xl font-black tracking-tight text-white lg:text-7xl"
    >
      {count}
      {suffix}
    </span>
  );
}

// Datos de las estadísticas de inicio.
const stats = [
  {
    label: 'Educación Flexible',
    value: 100,
    suffix: '%',
    detail: 'Estudia a tu propio ritmo y sin horarios rígidos'
  },
  {
    label: 'Carreras de Pregrado',
    value: 12,
    suffix: '+',
    detail: 'Ingenierías, Licenciaturas y TSU'
  },
  {
    label: 'Años de Trayectoria',
    value: 45,
    suffix: '+',
    detail: 'Formando profesionales en el Estado Sucre'
  }
];

// Franja de estadísticas institucionales.
export function Stats() {
  return (
    <section className="bg-blue-950 text-white border-y border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center
          md:text-left divide-y md:divide-y-0 md:divide-x
          divide-white-800/60">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`${idx !== 0 ? 'md:pl-8 pt-6 md:pt-0' : ''}`}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-lg font-bold text-blue-200 mt-2 block uppercase
                tracking-wider">
                {stat.label}
              </span>
              <p className="text-xs text-slate-300 mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
