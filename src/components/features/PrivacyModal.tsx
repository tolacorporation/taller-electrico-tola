'use client';

import { useState, useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function PrivacyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openPrivacyModal', handleOpen);
    return () => window.removeEventListener('openPrivacyModal', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-fade-in-up">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 flex justify-between items-center border-b border-slate-800">
          <h3 className="text-white font-bold uppercase tracking-wide flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-red-600" />
            Políticas de Privacidad
          </h3>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm">
          <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <h4 className="font-bold text-slate-900 text-base mt-4">1. Recopilación de Información</h4>
          <p>
            En <strong>{SITE_CONFIG.name}</strong>, recopilamos información personal básica únicamente cuando usted decide 
            utilizar nuestros formularios de contacto (Agendar Cita o Auxilio Móvil). Esta información puede incluir: marca de vehículo, 
            año, descripción del problema y ubicación GPS (solo con su consentimiento explícito para el auxilio móvil).
          </p>

          <h4 className="font-bold text-slate-900 text-base mt-4">2. Uso de la Información</h4>
          <p>
            Los datos proporcionados se utilizan exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Agendar su cita en nuestro taller mecánico.</li>
            <li>Proporcionar asistencia técnica móvil exacta a su ubicación.</li>
            <li>Contactarlo vía WhatsApp para confirmar detalles de su solicitud.</li>
          </ul>

          <h4 className="font-bold text-slate-900 text-base mt-4">3. WhatsApp como Medio de Contacto</h4>
          <p>
            Nuestros formularios redirigen la información directamente a nuestra línea oficial de WhatsApp. Al hacer clic en 
            "Enviar a WhatsApp", usted acepta que los datos introducidos se envíen a través de la aplicación WhatsApp 
            (sujeta a las políticas de Meta). Nosotros no almacenamos esta información en bases de datos públicas de la página web.
          </p>

          <h4 className="font-bold text-slate-900 text-base mt-4">4. Protección de Datos</h4>
          <p>
            Nos comprometemos a no vender, alquilar ni compartir su información personal con terceros bajo ninguna circunstancia, 
            salvo cuando sea requerido por autoridades legales competentes.
          </p>

          <h4 className="font-bold text-slate-900 text-base mt-4">5. Contacto</h4>
          <p>
            Si tiene dudas sobre el manejo de sus datos, puede comunicarse directamente a nuestra línea de asistencia.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-end">
          <button 
            onClick={() => setIsOpen(false)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
