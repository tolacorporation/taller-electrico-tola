// src/types/index.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Client {
  name: string;
  phone: string;
  email?: string;
}

export interface Booking {
  id?: string;
  clientId: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
}
