import React from 'react';
import { Truck, Lightbulb, Wrench, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { SERVICES } from '../../data/services';

const iconMap = {
  Truck: Truck,
  Lightbulb: Lightbulb,
  Wrench: Wrench,
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive solutions tailored to your business needs</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                  {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full justify-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
