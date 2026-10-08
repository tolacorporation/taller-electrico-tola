'use client';

import { useEffect, useState } from 'react';
import BookingModal from '@/components/features/BookingModal';

export const openBookingModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('openBookingModal'));
  }
};

export default function BookingModalProvider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openBookingModal', handleOpen);
    
    return () => window.removeEventListener('openBookingModal', handleOpen);
  }, []);

  return <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
