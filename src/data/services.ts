import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'logistics',
    name: 'Logistics & Dispatch',
    description: 'Fast and reliable logistics solutions for your business needs',
    icon: 'Truck',
    features: ['Real-time tracking', 'Door-to-door delivery', 'Professional team'],
  },
  {
    id: 'consultation',
    name: 'Technical Consultation',
    description: 'Expert guidance for your technical challenges',
    icon: 'Lightbulb',
    features: ['Expert analysis', 'Custom solutions', 'Best practices'],
  },
  {
    id: 'maintenance',
    name: 'Maintenance & Support',
    description: 'Keep your systems running smoothly with our support',
    icon: 'Wrench',
    features: ['24/7 support', 'Preventive care', 'Emergency response'],
  },
];
