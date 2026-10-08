'use client';

import { useEffect, useState, useRef } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  
  const [stats, setStats] = useState([
    { label: "Años de Experiencia", value: 0, target: 25, suffix: "+" },
    { label: "Autos Diagnosticados", value: 0, target: 10000, suffix: "+" },
    { label: "Escáneres Avanzados", value: 0, target: 4, suffix: "" },
    { label: "Clientes Satisfechos", value: 0, target: 100, suffix: "%" }
  ]);

  function animateCounters() {
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setStats(currentStats => 
        currentStats.map(stat => {
          const currentVal = Math.round(stat.target * progress);
          return { ...stat, value: currentVal > stat.target ? stat.target : currentVal };
        })
      );

      if (frame === totalFrames) {
        clearInterval(counterInterval);
      }
    }, frameDuration);
  };

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounters();
      }
    }, { threshold: 0.5 });

    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, [hasAnimated]);



  return (
    <section className="bg-slate-900 border-t border-slate-800 py-16" ref={domRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
                {stat.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
