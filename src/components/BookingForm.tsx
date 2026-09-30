import React, { useState } from 'react';
import { TrackingItem } from '../types';

interface BookingFormProps {
  preselectedService?: string;
  onBookingSuccess: (item: TrackingItem) => void;
}

export default function BookingForm({ preselectedService, onBookingSuccess }: BookingFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', service: preselectedService || '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: TrackingItem = {
      trackingId: `MH${Date.now()}`,
      service: formData.service,
      location: 'Processing',
      status: 'Received',
      assignedTech: 'Pending',
      updates: []
    };
    onBookingSuccess(newItem);
    setFormData({ name: '', email: '', service: preselectedService || '' });
  };

  return (
    <section id="book" className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Book a Service</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow">
          <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full mb-4 p-2 border rounded" required />
          <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full mb-4 p-2 border rounded" required />
          <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full mb-4 p-2 border rounded" required>
            <option value="">Select Service</option>
            <option value="Logistics">Logistics</option>
            <option value="Dispatch">Dispatch</option>
            <option value="Consultation">Consultation</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold">Submit Booking</button>
        </form>
      </div>
    </section>
  );
}