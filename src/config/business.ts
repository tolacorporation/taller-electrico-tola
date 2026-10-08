// src/config/business.ts

export const WORKSHOP_CONFIG = {
  contact: {
    whatsappNumber: "59177436161", // Número técnico (con código)
    displayNumber: "77436161", // Número visual para el usuario
    whatsappSecondary: "59163993851", // Número secundario
    whatsappMessageTemplate: "*[!] SOLICITUD DE AUXILIO MÓVIL [!]*\n\nHola equipo de Automotriz TOLA, necesito ayuda urgente con mi vehículo.\n\n*PROBLEMA:* \n{problem}\n{location}\n\nPor favor, confírmenme si me pueden ayudar. ¡Gracias!",
    address: "Colcapirhua, Cochabamba",
    googleMapsEmbedUrl: "https://share.google/frYjq3Ar1Xos4t6X6" 
  },
  
  services: [
    {
      id: "scanner",
      title: "Scanner Profesional",
      description: "Diagnóstico multimarca profundo y lectura en tiempo real.",
      icon: "ScannerIcon" 
    },
    {
      id: "ecu",
      title: "Banqueo de ECUs y Bobinas",
      description: "Pruebas de banco, simulación de señales, clonación y testeo de módulos de encendido.",
      icon: "CpuIcon"
    },
    {
      id: "inyectores",
      title: "Laboratorio de Inyectores",
      description: "Limpieza por ultrasonido, prueba de estanqueidad y caudal.",
      icon: "SettingsIcon"
    },
    {
      id: "electrico",
      title: "Electricidad Automotriz",
      description: "Solución a cortocircuitos, alternadores y cableado.",
      icon: "ZapIcon"
    },
    {
      id: "preventivo",
      title: "Mantenimiento Preventivo",
      description: "Cambio de aceite, filtros, revisión de niveles y correas.",
      icon: "ToolIcon"
    },
    {
      id: "sistemas-24v",
      title: "Sistema de 24V (Pesado)",
      description: "Diagnóstico y reparación para camiones, buses y maquinaria pesada.",
      icon: "TruckIcon"
    },
    {
      id: "motocicletas",
      title: "Sistemas en Motocicletas",
      description: "Mantenimiento y diagnóstico de sistemas eléctricos y electrónicos de motos.",
      icon: "MotorbikeIcon"
    },
    {
      id: "sistemas-12v",
      title: "Sistemas de 12V Multimarca",
      description: "Mantenimiento y diagnóstico eléctrico multimarca para vehículos ligeros.",
      icon: "CarIcon"
    }
  ],

  bookingSteps: {
    maxAdvanceDays: 30, // Cuántos días a futuro se puede reservar
    availableHours: ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"]
  }
};
