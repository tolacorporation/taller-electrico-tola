'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const FAQS = [
  {
    question: "¿Tienen servicio de Auxilio Móvil para camiones o maquinaria 24V?",
    answer: "Sí, contamos con unidades móviles equipadas con escáneres pesados y repuestos para atender emergencias de 12V y 24V directamente en ruta o en obra."
  },
  {
    question: "¿Cuánto tiempo demora un diagnóstico computarizado?",
    answer: "El escaneo inicial y la lectura de códigos toma aproximadamente 20 a 30 minutos. Dependiendo de la falla, el diagnóstico profundo con pruebas de banco puede tomar un par de horas."
  },
  {
    question: "¿Trabajan con todas las marcas de vehículos y motos?",
    answer: "Absolutamente. Disponemos de software multimarca actualizado anualmente para cubrir el 95% del parque automotor, incluyendo autos asiáticos, europeos, americanos y motocicletas de alta cilindrada."
  },
  {
    question: "¿Qué garantía tienen los trabajos electrónicos?",
    answer: "Respaldamos todos nuestros servicios. Ante cualquier eventualidad o duda con la reparación, revisaremos tu vehículo en nuestras instalaciones para ofrecerte soporte técnico."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 uppercase" style={{ letterSpacing: 'var(--tracking-heading)' }}>Preguntas Frecuentes</h2>
            <p className="text-slate-600">Resolvemos tus dudas antes de que traigas tu vehículo.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index}>
                <div 
                  className={`border ${isOpen ? 'border-red-600 bg-red-50/30' : 'border-slate-200 bg-white'} rounded-2xl overflow-hidden transition-all duration-300 shadow-sm`}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={`font-bold ${isOpen ? 'text-red-600' : 'text-slate-800'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
