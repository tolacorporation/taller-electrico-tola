import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingSocials from "@/components/layout/FloatingSocials";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import BookingModalProvider from "@/components/providers/BookingModalProvider";

import { SITE_CONFIG } from "@/config/site";

import EmergencyModal from "@/components/features/EmergencyModal";
import PrivacyModal from "@/components/features/PrivacyModal";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Servicio Técnico Automotriz`,
  description: SITE_CONFIG.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className="font-sans h-full antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=excon@900,700,500,400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 pb-20 md:pb-0" suppressHydrationWarning>
        <Header />
        <FloatingSocials />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
        <ScrollToTop />
        <BookingModalProvider />
        <EmergencyModal />
        <PrivacyModal />
      </body>
    </html>
  );
}
