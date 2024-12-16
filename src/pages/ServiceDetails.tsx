import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Service not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return to home</Link>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h1>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">{service.description}</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
            <ul className="list-disc pl-6 mb-8">
              {service.features.map((feature, index) => (
                <li key={index} className="text-gray-600 mb-2">{feature}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/quote"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold
                         hover:bg-gray-800 transition-colors duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}