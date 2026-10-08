'use client';

import { WORKSHOP_CONFIG } from '@/config/business';
import { AlertTriangle } from 'lucide-react';

export default function EmergencyCTA() {
  const { whatsappNumber, whatsappMessageTemplate } = WORKSHOP_CONFIG.contact;

  const handleEmergencyClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('openEmergencyModal'));
    }
  };

  return (
    <div className="w-full relative overflow-hidden bg-red-600 text-white rounded-2xl shadow-2xl shadow-red-600/30 max-w-7xl mx-auto border-4 border-white/10 my-8">
      {/* Patrón de franjas de peligro superpuesto */}
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
      
      <div className="relative z-10 px-6 sm:px-10 py-10 flex flex-col items-center justify-center gap-6 text-center">
        {/* Icono con efecto de pulso */}
        <div className="relative">
          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm relative z-10 border border-white/30">
            <AlertTriangle className="w-10 h-10 text-white" aria-hidden="true" />
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-white drop-shadow-sm">
          ¿Necesitas Auxilio Móvil?
        </h3>
        
        <button 
          onClick={handleEmergencyClick}
          className="mt-2 bg-white text-red-600 font-extrabold uppercase tracking-widest text-sm py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-slate-50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        >
          Solicitar Auxilio Ahora
        </button>
      </div>
    </div>
  );
}
