import React from 'react';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const services = ['Logistics', 'Dispatch', 'Consultation', 'Support'];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service) => (
            <div key={service} className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold mb-4">{service}</h3>
              <button onClick={() => onBookService(service)} className="text-blue-600 hover:underline">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}