'use client';

import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { WORKSHOP_CONFIG } from '@/config/business';

export default function MapNavigationButton() {
  const [isIOS, setIsIOS] = useState(false);
  
  // Coordenadas exactas del taller
  const LAT = -17.394258;
  const LNG = -66.267660;

  useEffect(() => {
    // Detectamos si el usuario está en un dispositivo de Apple
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod|macintosh/.test(userAgent)) {
      setIsIOS(true);
    }
  }, []);

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    // Abrir ruta ("cómo llegar") fijando el taller como destino final
    if (isIOS) {
      window.open(`http://maps.apple.com/?daddr=${LAT},${LNG}&dirflg=d`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`, '_blank');
    }
  };

  return (
    <a 
      href={WORKSHOP_CONFIG.contact.googleMapsEmbedUrl} 
      onClick={handleNavigate}
      className="bg-slate-900 text-white font-bold py-4 md:py-3 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-red-600 transition-all duration-300 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:opacity-0 md:group-hover:opacity-100 md:shadow-2xl z-10 w-full md:w-auto"
    >
      <MapPin className="w-5 h-5" />
      Ir a nosotros (Ruta)
    </a>
  );
}
