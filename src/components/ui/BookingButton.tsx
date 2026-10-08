'use client';

import { ReactNode } from 'react';

interface BookingButtonProps {
  children: ReactNode;
  className?: string;
}

export default function BookingButton({ children, className }: BookingButtonProps) {
  return (
    <button 
      onClick={() => {
        if (typeof window !== 'undefined') window.dispatchEvent(new Event('openBookingModal'));
      }}
      className={className}
    >
      {children}
    </button>
  );
}
