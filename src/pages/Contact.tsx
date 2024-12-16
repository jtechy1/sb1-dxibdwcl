import React from 'react';
import ContactInfo from '../components/ContactInfo';
import SimpleContactForm from '../components/SimpleContactForm';

export default function Contact() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with us for any questions or inquiries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            <SimpleContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}