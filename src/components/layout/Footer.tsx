'use client';

import { SITE_CONFIG } from '@/config/site';
import { ShieldCheck, Wrench, Award } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t-[6px] border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-16 w-auto relative flex items-center">
              <Image src="/logotola2.webp" alt="TOLA Logo" width={200} height={64} className="object-contain h-full w-auto mix-blend-screen" />
            </div>
          </div>
          <p className="text-sm leading-relaxed pr-4 mb-6">
            Especialistas en electrónica automotriz y maquinaria pesada. Precisión en cada diagnóstico.
          </p>
          {/* Trust Badges */}
          <div className="flex gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 bg-slate-800 px-3 py-1.5 rounded-md" title="Mecánicos Certificados">
              <Award className="w-4 h-4 text-yellow-500" /> Certificados
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 bg-slate-800 px-3 py-1.5 rounded-md" title="Garantía de Servicio">
              <ShieldCheck className="w-4 h-4 text-green-500" /> 100% Garantía
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-sm">Servicios Clave</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#servicios" className="hover:text-red-600 transition-colors flex items-center gap-2"><span className="text-red-600 text-xs">▸</span> Diagnóstico Computarizado</a></li>
            <li><a href="#servicios" className="hover:text-red-600 transition-colors flex items-center gap-2"><span className="text-red-600 text-xs">▸</span> Electrónica Automotriz</a></li>
            <li><a href="#servicios" className="hover:text-red-600 transition-colors flex items-center gap-2"><span className="text-red-600 text-xs">▸</span> Mantenimiento Preventivo</a></li>
            <li><a href="#servicios" className="hover:text-red-600 transition-colors flex items-center gap-2"><span className="text-red-600 text-xs">▸</span> Inyección Electrónica</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-sm">Horarios</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-slate-800 pb-2"><span>Lun - Sáb:</span> <span className="font-bold text-white">08:00 - 18:00</span></li>
            <li className="flex justify-between text-white font-medium"><span>Domingos:</span> <span className="font-bold text-white">09:00 - 13:00</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-sm">Métodos de Pago</h4>
          <p className="text-sm text-slate-400 mb-4">Aceptamos efectivo y transferencias QR.</p>
          <div className="flex gap-2">
            <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center border border-slate-700 font-bold text-xs text-slate-300">
              QR
            </div>
            <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center border border-slate-700 font-bold text-[10px] text-slate-300">
              EFE
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
        <p>&copy; 2026 {SITE_CONFIG.name}. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <button onClick={() => { if(typeof window !== 'undefined') window.dispatchEvent(new Event('openPrivacyModal')) }} className="hover:text-white transition-colors">Políticas de Privacidad</button>
        </div>
      </div>
    </footer>
  );
}
