import React from 'react';
import ContactForm from './ContactForm';

export default function Quote() {
  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Quote</h2>
          <p className="text-lg text-gray-600">
            Tell us about your project and we'll get back to you with a detailed quote
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}