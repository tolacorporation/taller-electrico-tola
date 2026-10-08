'use client';

import { WORKSHOP_CONFIG } from '@/config/business';
import { Phone, AlertTriangle, CalendarCheck } from 'lucide-react';

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${WORKSHOP_CONFIG.contact.whatsappNumber}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-slate-900 border-t border-slate-800 shadow-[0_-10px_20px_rgba(0,0,0,0.2)] pb-safe">
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        <button 
          onClick={() => window.dispatchEvent(new Event('openBookingModal'))}
          className="flex-1 bg-slate-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 border border-slate-700 active:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
          <CalendarCheck className="w-5 h-5 text-slate-300" />
          <span>Agendar</span>
        </button>
        <button 
          onClick={() => window.dispatchEvent(new Event('openEmergencyModal'))}
          className="flex-1 bg-red-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 active:bg-red-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600"
        >
          <AlertTriangle className="w-5 h-5 animate-pulse" />
          <span>Auxilio Móvil</span>
        </button>
      </div>
    </div>
  );
}
