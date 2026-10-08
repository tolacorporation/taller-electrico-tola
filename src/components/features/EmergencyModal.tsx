'use client';

import { useState, useEffect } from 'react';
import { X, AlertTriangle, MapPin, Loader2, Navigation, MessageCircle } from 'lucide-react';
import { WORKSHOP_CONFIG } from '@/config/business';

export default function EmergencyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [locationStatus, setLocationStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [googleMapsLink, setGoogleMapsLink] = useState('');
  const [problemDescription, setProblemDescription] = useState('');

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openEmergencyModal', handleOpen);
    return () => window.removeEventListener('openEmergencyModal', handleOpen);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setLocationStatus('idle');
      setGoogleMapsLink('');
      setProblemDescription('');
    }, 300);
  };

  const getLocation = () => {
    setLocationStatus('loading');
    
    if (!navigator.geolocation) {
      setLocationStatus('error');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setGoogleMapsLink(`https://maps.google.com/?q=${lat},${lng}`);
        setLocationStatus('success');
      },
      () => {
        setLocationStatus('error');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handleSend = () => {
    const finalLocationText = googleMapsLink 
      ? `\n*UBICACIÓN GPS:*\n${googleMapsLink}`
      : '\n*UBICACIÓN:* (La enviaré en un momento)';
    
    // Seguridad contra spam
    let safeProblem = problemDescription;
    if (safeProblem.length > 200) safeProblem = safeProblem.substring(0, 200);
    safeProblem = safeProblem.replace(/[\r\n]+/g, ' ');

    const defaultMessage = WORKSHOP_CONFIG.contact.whatsappMessageTemplate
      .replace('{problem}', safeProblem || '(No especificado)')
      .replace('{location}', finalLocationText);
      
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${WORKSHOP_CONFIG.contact.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-fade-in-up">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative border-4 border-red-600">
        
        {/* Header Peligro */}
        <div className="bg-red-600 px-6 py-4 flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
          <h3 className="text-white font-black uppercase tracking-wide flex items-center gap-2 relative z-10 text-lg">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
            Auxilio Móvil
          </h3>
          <button onClick={closeModal} className="text-red-200 hover:text-white transition-colors relative z-10 bg-black/20 p-1 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-slate-600 font-medium text-sm">
            Si estás varado, podemos rastrear tu ubicación para enviarte un técnico lo más rápido posible.
          </p>

          {/* Campo: ¿Qué pasó? */}
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-2">¿Cuál es el problema? <span className="text-red-600">*</span></label>
            <input 
              type="text" 
              maxLength={200}
              required
              value={problemDescription}
              onChange={(e) => setProblemDescription(e.target.value)}
              placeholder="Ej: El auto no enciende, hace un ruido..." 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 font-bold text-slate-900"
            />
          </div>

          {/* Compartir Ubicación */}
          <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
            <label className="block text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-blue-600" /> 
              Ubicación Actual <span className="text-red-600">*</span>
            </label>
            
            {locationStatus === 'idle' && (
              <button 
                onClick={getLocation}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/30"
              >
                <MapPin className="w-5 h-5" /> Compartir mi GPS
              </button>
            )}

            {locationStatus === 'loading' && (
              <div className="w-full bg-slate-200 text-slate-500 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" /> Buscando satélite...
              </div>
            )}

            {locationStatus === 'success' && (
              <div className="w-full bg-green-100 border border-green-300 text-green-800 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" /> ¡Ubicación capturada!
              </div>
            )}

            {locationStatus === 'error' && (
              <div className="w-full bg-red-100 border border-red-300 text-red-800 font-bold py-3 px-4 rounded-lg flex flex-col items-center justify-center gap-1 text-center text-sm">
                <span className="flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> Error de GPS</span>
                <span className="font-normal text-xs">Por favor envía tu ubicación manualmente por WhatsApp.</span>
              </div>
            )}
          </div>

          {/* Enviar */}
          <button 
            onClick={handleSend}
            disabled={problemDescription.trim().length === 0 || locationStatus === 'idle' || locationStatus === 'loading'}
            className="w-full bg-red-600 text-white font-extrabold uppercase tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-500 transition-colors shadow-lg shadow-red-600/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <MessageCircle className="w-5 h-5" /> Enviar a WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
