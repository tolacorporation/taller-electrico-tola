'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, PhoneCall, Clock, MapPin, Menu, X, Navigation } from 'lucide-react';
import { WORKSHOP_CONFIG } from '@/config/business';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const TOP_MESSAGES = [
    <span key="1" className="flex items-center gap-2"><MapPin className="w-4 h-4 text-white" aria-hidden="true"/> Cochabamba, Bolivia</span>,
    <span key="2" className="flex items-center gap-2"><Clock className="w-4 h-4 text-white" aria-hidden="true"/> Lun-Sáb: 08:00 - 18:00 | Dom: 09:00 - 13:00</span>,
    <span key="3" className="flex items-center gap-2"><PhoneCall className="w-4 h-4 text-white" aria-hidden="true"/> Asistencia: <span className="text-white font-black">{WORKSHOP_CONFIG.contact.displayNumber}</span></span>
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((current) => (current + 1) % TOP_MESSAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [TOP_MESSAGES.length]);

  return (
    <header className="sticky top-0 z-50 flex flex-col">
      {/* Top Bar Carrusel - ROJO */}
      <div className="bg-red-700 text-red-100 py-2 overflow-hidden h-9 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-center text-xs font-bold uppercase tracking-wider">
          <div key={msgIndex} className="animate-fade-in-up flex items-center justify-center text-center">
            {TOP_MESSAGES[msgIndex]}
          </div>
        </div>
      </div>
      
      {/* Main Navbar - OSCURO */}
      <div className="bg-slate-900 border-b border-slate-800 shadow-xl shadow-slate-900/20 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group mix-blend-screen">
              <div className="h-16 w-auto relative group-hover:scale-105 transition-transform flex items-center py-1">
                <Image src="/logotola2.webp" alt="TOLA Logo" width={250} height={64} className="object-contain h-full w-auto" priority />
              </div>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-8">
                <Link href="#servicios" className="text-slate-300 hover:text-red-600 font-bold text-sm uppercase tracking-wider transition-colors">Servicios</Link>
                <Link href="#contacto" className="flex items-center gap-1.5 text-slate-300 hover:text-red-600 font-bold text-sm uppercase tracking-wider transition-colors">
                  <Navigation className="w-4 h-4" /> Ubicación
                </Link>
                <Link href="#reservas" className="text-slate-300 hover:text-red-600 font-bold text-sm uppercase tracking-wider transition-colors">Contacto</Link>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full left-0 shadow-xl pb-4">
            <nav className="flex flex-col px-4 pt-2">
              <Link href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-slate-300 font-bold uppercase tracking-wider border-b border-slate-800">Servicios</Link>
              <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="py-4 flex items-center gap-2 text-slate-300 font-bold uppercase tracking-wider border-b border-slate-800">
                <Navigation className="w-5 h-5 text-slate-400" /> Ubicación
              </Link>
              <Link href="#reservas" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-slate-300 font-bold uppercase tracking-wider">Contacto</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
