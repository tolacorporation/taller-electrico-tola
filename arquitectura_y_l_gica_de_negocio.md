# 🚗 Arquitectura y Lógica de Negocio: Taller Eléctrico y Electrónico Automotriz

Este documento define la estructura de carpetas, las reglas de desarrollo (buenas prácticas) y la lógica de negocio modificable para la landing page del taller. Servirá como guía base para Antigravity CLI y futuros desarrollos.

## 1. Arquitectura de Carpetas Recomendada (Next.js App Router)

Se utilizará la estructura dentro de `src/` para mantener el código ordenado y separado de los archivos de configuración de la raíz.

```text
/
├── public/                 # Imágenes estáticas, íconos (favicon, logos del taller).
├── src/
│   ├── app/                # Rutas y páginas de Next.js (App Router).
│   │   ├── layout.tsx      # Estructura global (Header, Footer, Meta tags).
│   │   ├── page.tsx        # Landing Page principal (Hero, Servicios, Mapa).
│   │   └── api/            # (Opcional) Endpoints para webhooks o integraciones externas.
│   │
│   ├── components/         # Componentes de React (Aislados y reutilizables).
│   │   ├── ui/             # Componentes base (Botones, Inputs, Modales - ej. shadcn/ui).
│   │   ├── layout/         # Componentes estructurales (Navbar, Footer).
│   │   └── features/       # Componentes complejos de la lógica de negocio.
│   │       ├── BookingWizard/    # Formulario de reserva paso a paso.
│   │       ├── ServicesGrid.tsx  # Grid de servicios (Scanner, ECUs).
│   │       └── EmergencyCTA.tsx  # Botón/Sección de Auxilio Móvil a WhatsApp.
│   │
│   ├── config/             # ¡IMPORTANTE! Archivos de configuración centralizados.
│   │   ├── business.ts     # Lógica de negocio (Teléfonos, servicios, URLs).
│   │   └── site.ts         # Metadatos del sitio (SEO, títulos).
│   │
│   ├── lib/                # Utilidades, configuración de base de datos y clientes.
│   │   ├── supabase.ts     # Cliente de inicialización de Supabase.
│   │   └── utils.ts        # Funciones de ayuda (ej. formateo de clases Tailwind, fechas).
│   │
│   ├── types/              # Definiciones de TypeScript (Interfaces de modelos).
│   │   └── index.ts        # Tipos para `Cliente`, `Reserva`, `Servicio`.
│   │
│   └── actions/            # Server Actions de Next.js (Lógica de servidor).
│       └── booking.ts      # Función para guardar la reserva en Supabase de forma segura.
```

## 2. Buenas Prácticas de Código (Reglas Estrictas)

Para evitar romper la aplicación a medida que escale, se deben seguir estas normativas:

1.  **Separación de Responsabilidades (UI vs. Lógica):** Los componentes de UI en `src/components/` solo deben encargarse de "mostrar" datos. La lógica pesada de servidor o llamadas a base de datos debe vivir en `src/actions/` o `src/lib/`.
2.  **Centralización de Datos Mágicos:** NINGÚN número de teléfono, precio o nombre de servicio debe estar "hardcodeado" (escrito directamente) en los componentes HTML. Todo debe consumirse desde `src/config/business.ts`.
3.  **Tipado Estricto (TypeScript):** Todo dato que entre (formularios) o salga (base de datos) debe tener su interfaz definida en `src/types/`. No usar `any`.
4.  **Componentes Pequeños (Composición):** El `BookingWizard` no debe ser un archivo de 1000 líneas. Debe dividirse en `StepVehicle`, `StepService`, `StepDate`, `StepClient`.
5.  **Gestión del Estado:** Usar `useState` de React solo para estados locales de la UI (ej. qué paso del formulario se está viendo). Para datos que se envían, agruparlos en un único objeto de estado o usar herramientas como `react-hook-form`.

## 3. Lógica de Negocio Modificable (Configuración Base)

Esta es la estructura de datos que debe vivir en `src/config/business.ts`. Al centralizar esto, cualquier persona sin conocimientos profundos de código puede modificar los servicios o el número de WhatsApp.

```typescript
// Archivo de ejemplo para la configuración: src/config/business.ts

export const WORKSHOP_CONFIG = {
  contact: {
    whatsappNumber: "591XXXXXXXX", // Número para el auxilio móvil (Bolivia)
    whatsappMessageTemplate: "¡Hola! Necesito auxilio móvil. Mi problema es: {problem}. Estoy en: {location}",
    address: "Av. Blanco Galindo Km X, Colcapirhua, Cochabamba",
    googleMapsEmbedUrl: "https://maps.google.com/... (URL del iFrame)"
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
      title: "Banqueo y Reparación de ECUs",
      description: "Inmo Off, clonación y reparación de hardware de computadoras.",
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
    }
  ],

  bookingSteps: {
    maxAdvanceDays: 30, // Cuántos días a futuro se puede reservar
    availableHours: ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"]
  }
};
```

## 4. Instrucciones para la Inicialización

1.  Crear el proyecto con Antigravity CLI asegurando el uso de **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**.
2.  Crear la carpeta `src/config/` e implementar la lógica de negocio del bloque anterior.
3.  Desarrollar el `WhatsAppEmergency` utilizando el `whatsappNumber` y el `whatsappMessageTemplate` de la configuración.
4.  Implementar el formulario por pasos `BookingWizard` validando los datos antes de enviarlos a la base de datos (se integrará Supabase posteriormente).