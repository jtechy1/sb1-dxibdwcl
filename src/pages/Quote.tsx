import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Quote() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Request a Quote</h1>
          <p className="text-lg text-gray-600">
            Tell us about your project and we'll get back to you with a detailed quote
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}