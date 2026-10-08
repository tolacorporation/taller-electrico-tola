'use client';

import { useState, useEffect } from 'react';

const WORDS = ["Especializado", "Multimarca", "Computarizado", "24 Horas", "Garantizado"];

export default function DynamicTitle() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setIndex((current) => (current + 1) % WORDS.length);
        setIsAnimating(false);
      }, 500); // Wait for fade-out before changing word
      
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Badge de Especialidad */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 font-black text-xs md:text-sm uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(220,38,38,0.15)]">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        TALLER ELECTRICO Y ELECTRÓNICO
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-2 drop-shadow-lg uppercase" style={{ letterSpacing: 'var(--tracking-heading)' }}>
        Servicio Técnico <br className="hidden md:block"/> Automotriz <br className="md:hidden"/>
        <span className="inline-block relative min-w-[280px] md:min-w-[480px]">
          <span 
            className={`inline-block text-red-600 transition-all duration-500 transform ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {WORDS[index]}
          </span>
        </span>
      </h1>
    </div>
  );
}
