'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando bajamos más de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed right-4 md:right-8 bottom-24 md:bottom-8 z-40 p-3 rounded-full bg-slate-900 text-white shadow-[0_0_15px_rgba(0,0,0,0.2)] border border-slate-700 hover:bg-red-600 hover:border-red-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-6 h-6" aria-hidden="true" />
    </button>
  );
}
