'use client';

import { useState } from 'react';
import { X, Calendar, Car, Wrench, ArrowRight, MessageCircle } from 'lucide-react';
import { WORKSHOP_CONFIG } from '@/config/business';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    marca: '',
    ano: '',
    servicio: '',
    fecha: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let value = e.target.value;
    // Seguridad: Limitar a 100 caracteres máximos por campo y eliminar saltos de línea
    if (value.length > 100) value = value.substring(0, 100);
    value = value.replace(/[\r\n]+/g, ' ');
    setFormData({ ...formData, [e.target.name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Lógica para crear el mensaje de WhatsApp pre-formateado
    const message = `*SOLICITUD DE CITA - AUTOMOTRIZ TOLA*\n\nHola equipo de Automotriz TOLA, deseo solicitar una revisión para mi vehículo.\n\n*DETALLES DEL VEHÍCULO:*\n- Marca/Modelo: ${formData.marca}\n- Año: ${formData.ano}\n\n*SERVICIO REQUERIDO:*\n- ${formData.servicio}\n\n*DISPONIBILIDAD:*\n- ${formData.fecha}\n\nPor favor, confírmenme si este horario está disponible. ¡Muchas gracias!`;
    
    const whatsappUrl = `https://wa.me/${WORKSHOP_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
    onClose();
    // Reiniciar form
    setTimeout(() => {
      setStep(1);
      setFormData({ marca: '', ano: '', servicio: '', fecha: '' });
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
          <h3 className="text-white font-extrabold uppercase tracking-wide flex items-center gap-2">
            <Calendar className="w-5 h-5 text-red-600" />
            Agendar Cita
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Formulario/Wizard */}
        <div className="p-6">
          {/* Progress Bar */}
          <div className="flex gap-2 mb-8">
            <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-red-600' : 'bg-slate-200'}`}></div>
            <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-red-600' : 'bg-slate-200'}`}></div>
            <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-red-600' : 'bg-slate-200'}`}></div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="animate-fade-in-up">
                <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5 text-red-600" /> Paso 1: Tu Vehículo
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Marca y Modelo</label>
                    <input 
                      type="text" 
                      name="marca"
                      value={formData.marca}
                      onChange={handleChange}
                      placeholder="Ej. Toyota Hilux" 
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">Año</label>
                    <input 
                      type="number" 
                      name="ano"
                      value={formData.ano}
                      onChange={handleChange}
                      placeholder="Ej. 2020" 
                      required
                      min={1950}
                      max={2030}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-medium"
                    />
                  </div>
                  <button type="button" onClick={nextStep} disabled={!formData.marca || !formData.ano} className="w-full mt-4 bg-slate-900 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                    Siguiente <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in-up">
                <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-red-600" /> Paso 2: El Servicio
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">¿Qué necesitas?</label>
                    <select 
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent font-bold text-slate-900"
                    >
                      <option value="">Selecciona un servicio...</option>
                      <option value="Diagnóstico con Scanner">Diagnóstico con Scanner</option>
                      <option value="Reparación de ECU">Reparación de ECU</option>
                      <option value="Falla Eléctrica General">Falla Eléctrica General</option>
                      <option value="Laboratorio de Inyectores">Laboratorio de Inyectores</option>
                      <option value="Mantenimiento Preventivo">Mantenimiento Preventivo</option>
                      <option value="Otro">Otro (Especificaré por WhatsApp)</option>
                    </select>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button type="button" onClick={prevStep} className="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition-colors">
                      Volver
                    </button>
                    <button type="button" onClick={nextStep} disabled={!formData.servicio} className="flex-1 bg-slate-900 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                      Siguiente <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in-up">
                <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-600" /> Paso 3: Disponibilidad
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-1">¿Cuándo te gustaría venir?</label>
                    <input 
                      type="text" 
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      placeholder="Ej. Mañana por la mañana" 
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-medium"
                    />
                    <p className="text-xs text-slate-500 mt-2">Te confirmaremos el horario exacto por WhatsApp.</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button type="button" onClick={prevStep} className="px-4 py-3 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition-colors">
                      Volver
                    </button>
                    <button type="submit" disabled={!formData.fecha} className="flex-1 bg-red-600 text-white font-extrabold uppercase tracking-wide py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-red-600/30">
                      <MessageCircle className="w-5 h-5" /> Enviar a WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
