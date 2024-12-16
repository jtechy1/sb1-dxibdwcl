import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <MapPin className="h-6 w-6 text-gray-900 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
          <p className="text-gray-600">
            10253 3/4 Glenoaks Blvd<br />
            Pacoima, CA 91331
          </p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <Phone className="h-6 w-6 text-gray-900 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
          <a href="tel:818-974-4813" className="text-gray-600 hover:text-gray-900">
            818-974-4813
          </a>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <Instagram className="h-6 w-6 text-gray-900 mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
          <a 
            href="https://instagram.com/medranobuildersinc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            @medranobuildersinc
          </a>
        </div>
      </div>
    </div>
  );
}