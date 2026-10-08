'use client';

import { useEffect, useRef } from 'react';

const CAR_BRANDS = [
  "toyota", "nissan", "volkswagen", "ford", "chevrolet", 
  "hyundai", "kia", "honda", "bmw", "audi", 
  "suzuki", "mazda", "changan", "jac", "chery", 
  "haval", "geely", "foton"
];

export default function BrandsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let animationId: number;
    let exactScroll = slider.scrollLeft; 
    const scrollSpeed = 0.6;

    const play = () => {
      exactScroll += scrollSpeed;
      if (slider.scrollWidth > 0 && exactScroll >= slider.scrollWidth / 2) {
        exactScroll -= (slider.scrollWidth / 2);
      }
      slider.scrollLeft = exactScroll;
      animationId = requestAnimationFrame(play);
    };

    const timer = setTimeout(() => { animationId = requestAnimationFrame(play); }, 300);
    return () => { 
      clearTimeout(timer);
      cancelAnimationFrame(animationId); 
    };
  }, []);

  // Duplicamos la lista de marcas para asegurar el loop infinito perfecto
  const duplicatedBrands = [...CAR_BRANDS, ...CAR_BRANDS];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="text-center mb-6">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Especialistas Multimarca</p>
      </div>

      <div className="relative flex w-full overflow-hidden bg-slate-50 border-y border-slate-100 py-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
        
        <div ref={scrollRef} className="flex w-full overflow-hidden gap-12 md:gap-20 px-8 md:px-16 select-none touch-none pointer-events-auto">
          {duplicatedBrands.map((brand, i) => (
            <div key={`${brand}-${i}`} className="flex items-center justify-center shrink-0 w-24 md:w-32 group">
              <img 
                src={`https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/${brand}.png`} 
                alt={`Logo ${brand}`}
                loading="lazy"
                draggable="false"
                className="h-10 md:h-14 w-auto object-contain hover:scale-110 transition-transform duration-300 drop-shadow-sm group-hover:drop-shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
