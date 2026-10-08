import { WORKSHOP_CONFIG } from '@/config/business';

export default function FloatingSocials() {
  const whatsappUrl = `https://wa.me/${WORKSHOP_CONFIG.contact.whatsappNumber}`;
  
  return (
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col gap-2 z-50 p-2">
      {/* WhatsApp (Outline Style) */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-l-xl shadow-lg hover:-translate-x-2 transition-transform duration-300 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>
      {/* Facebook (Outline Style) */}
      <a 
        href="https://www.facebook.com/profile.php?id=61559562426586" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#1877F2] text-white p-3 rounded-l-xl shadow-lg hover:-translate-x-2 transition-transform duration-300 flex items-center justify-center"
        aria-label="Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>
      {/* TikTok (Outline Style) */}
      <a 
        href="https://www.tiktok.com/@tolaelectromotors" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-black text-white p-3 rounded-l-xl shadow-lg hover:-translate-x-2 transition-transform duration-300 flex items-center justify-center"
        aria-label="TikTok"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
        </svg>
      </a>
      {/* Instagram (Outline Style) */}
      <a 
        href="https://www.instagram.com/tolaelectromotors/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] text-white p-3 rounded-l-xl shadow-lg hover:-translate-x-2 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      </a>

    </div>
  );
}
