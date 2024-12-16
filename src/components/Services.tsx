import React from 'react';
import { HomeIcon, ArrowUpCircle, DoorClosed, Square, Wrench } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const serviceIcons = {
  'custom-cabinets': HomeIcon,
  'staircases': ArrowUpCircle,
  'custom-doors': DoorClosed,
  'windows': Square,
  'fine-millwork': Wrench,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Exceptional craftsmanship for every project, big or small
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={serviceIcons[service.id as keyof typeof serviceIcons]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}