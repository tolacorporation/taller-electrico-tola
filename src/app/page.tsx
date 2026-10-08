import DynamicTitle from '@/components/ui/DynamicTitle';
import EmergencyCTA from '@/components/features/EmergencyCTA';
import FAQ from '@/components/features/FAQ';
import StatsCounter from '@/components/features/StatsCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';
import BookingButton from '@/components/ui/BookingButton';
import MapNavigationButton from '@/components/ui/MapNavigationButton';
import { SITE_CONFIG } from '@/config/site';
import { WORKSHOP_CONFIG } from '@/config/business';
import { Settings, Cpu, Activity, Zap, AlertTriangle, Wrench, ShieldAlert, Wind, BatteryCharging, CalendarCheck, Star, Phone, MapPin, Mail, Key, Network, Car, Truck, Motorbike } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ScannerIcon: <Activity className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" aria-hidden="true" />,
  CpuIcon: <Cpu className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true" />,
  SettingsIcon: <Settings className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90" aria-hidden="true" />,
  ZapIcon: <Zap className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" aria-hidden="true" />,
  ToolIcon: <Wrench className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-45" aria-hidden="true" />,
  ShieldIcon: <ShieldAlert className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />,
  WindIcon: <Wind className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1" aria-hidden="true" />,
  BatteryIcon: <BatteryCharging className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />,
  KeyIcon: <Key className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45" aria-hidden="true" />,
  NetworkIcon: <Network className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" aria-hidden="true" />,
  CarIcon: <Car className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-2" aria-hidden="true" />,
  TruckIcon: <Truck className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-2" aria-hidden="true" />,
  MotorbikeIcon: <Motorbike className="w-10 h-10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" aria-hidden="true" />
};

const CAR_BRANDS = [
  "toyota", "nissan", "volkswagen", "ford", "chevrolet", 
  "hyundai", "kia", "honda", "bmw", "audi", 
  "suzuki", "mazda", "changan", "jac", "chery", 
  "haval", "geely", "foton"
];

const TESTIMONIALS = [
  { name: "Carlos M.", vehicle: "Toyota Hilux", text: "El diagnóstico por escáner fue súper preciso. Arreglaron el problema eléctrico que otros tres talleres no pudieron encontrar. Muy recomendados." },
  { name: "Andrea V.", vehicle: "Nissan Versa", text: "Excelente servicio y mucha honestidad. Me explicaron exactamente qué fallaba en el aire acondicionado antes de empezar a trabajar." },
  { name: "Roberto L.", vehicle: "VW Amarok", text: "El auxilio móvil me salvó de noche en medio de la carretera. Llegaron rápido, revisaron la batería y el alternador, y pude volver a casa seguro." }
];

export default function Home() {
  const whatsappUrl = `https://wa.me/${WORKSHOP_CONFIG.contact.whatsappNumber}`;

  return (
    <div className="flex flex-col bg-slate-100">
      {/* Hero Section con Imagen Generada por IA */}
      <section className="relative bg-slate-900 pt-20 pb-28 md:pt-32 md:pb-40 text-center px-4 overflow-hidden">
        {/* Imagen de fondo Tech/Scanner */}
        <div 
          className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-25"
          style={{ mixBlendMode: 'luminosity' }}
        ></div>
        {/* Overlays de oscurecimiento y cuadrícula para asegurar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Efecto de luz sutil rojo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-red-900/30 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up flex flex-col items-center">
          <DynamicTitle />
          <div className="hidden md:flex justify-center mt-8 w-full max-w-sm mx-auto">
            <BookingButton 
              className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-red-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300 flex justify-center items-center gap-2"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Agendar Cita
            </BookingButton>
          </div>
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <div className="-mt-16 relative z-20 px-4 sm:px-6 lg:px-8">
        <EmergencyCTA />
      </div>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Brands Grid (Social Proof) */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="text-center mb-6">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Especialistas Multimarca</p>
        </div>
        <div className="border-y border-slate-100 bg-slate-50 py-8 px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto">
            {CAR_BRANDS.map((brand, i) => (
              <img 
                key={i} 
                src={`https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/${brand}.png`} 
                alt={`Logo ${brand}`}
                loading="lazy"
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios (Grid de Especialidades) */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase" style={{ letterSpacing: 'var(--tracking-heading)' }}>Nuestras Especialidades</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Ofrecemos una gama completa de servicios con equipos de última generación.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKSHOP_CONFIG.services.map((service, index) => (
              <ScrollReveal key={service.id} className="h-full">
                <div className="bg-white h-full p-8 rounded-xl border border-slate-200 hover:border-red-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left group">
                  <div className="bg-red-50 p-4 rounded-xl mb-6 group-hover:bg-red-100 transition-colors">
                    {iconMap[service.icon] || <Settings className="w-10 h-10 text-red-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-0 flex-1">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agendar CTA */}
      <section id="reservas" className="py-20 bg-slate-900 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-800/10 blur-[80px] rounded-full pointer-events-none"></div>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase" style={{ letterSpacing: 'var(--tracking-heading)' }}>¿Tu vehículo necesita atención?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Comunícate directamente con nuestro equipo técnico. Te asesoraremos sin compromiso y agendaremos tu visita en el mejor horario.</p>
            <BookingButton 
              className="bg-red-600 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg shadow-red-900/40 hover:bg-red-500 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
            >
              <CalendarCheck className="w-6 h-6" aria-hidden="true" />
              Contactar al Taller
            </BookingButton>
          </div>
        </ScrollReveal>
      </section>

      {/* Contacto & Ubicación (Bento Box UX) */}
      <section id="contacto" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase" style={{ letterSpacing: 'var(--tracking-heading)' }}>UBICACIÓN</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Visítanos en nuestro taller o comunícate por nuestros canales oficiales.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white p-4 sm:p-6 rounded-3xl shadow-xl border border-slate-100">
              {/* Info Panel */}
              <div className="lg:col-span-4 bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-[50px] rounded-full pointer-events-none"></div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-8">Información</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <MapPin className="w-6 h-6 text-red-600" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Dirección</p>
                        <p className="font-medium text-slate-200">{WORKSHOP_CONFIG.contact.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <Phone className="w-6 h-6 text-red-600" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Teléfono / WhatsApp</p>
                        <p className="font-medium text-slate-200">{WORKSHOP_CONFIG.contact.displayNumber}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <Mail className="w-6 h-6 text-red-600" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Redes / Otros</p>
                        <p className="font-medium text-slate-200">Pronto disponible</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/10">
                  <p className="text-sm text-slate-400 mb-2">Horario de Atención</p>
                  <p className="font-bold text-white">Lun-Sáb: 08:00 - 18:00</p>
                  <p className="font-bold text-white">Dom: 09:00 - 13:00</p>
                </div>
              </div>

              {/* Map Panel con Overlay UX Pro */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="bg-slate-200 rounded-2xl overflow-hidden relative min-h-[300px] md:min-h-[400px] group flex-1">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30458.920711511193!2d-66.26766060540788!3d-17.394258345124005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e30b0020f5ac11%3A0x647d39fdf15b1c48!2sTALLER%20ELECTRICO%20Y%20ELECTRONICO%20AUTOMOTRIZ%20%22TOLA%22!5e0!3m2!1ses!2sbo!4v1791385413118!5m2!1ses!2sbo" 
                    className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 " 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                  {/* Overlay for mobile to indicate they should use the button */}
                  
                </div>
                
                {/* Botón flotante para GPS (Visible siempre debajo en móvil, visible en hover en desktop) */}
                <MapNavigationButton />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials (Social Proof UX) */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 uppercase" style={{ letterSpacing: 'var(--tracking-heading)' }}>Lo Que Dicen Nuestros Clientes</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">La confianza se gana con resultados. Aquí algunas experiencias recientes.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />)}
                  </div>
                  <p className="text-slate-700 italic mb-6 flex-1">&quot;{t.text}&quot;</p>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500 font-medium">{t.vehicle}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
