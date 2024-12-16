import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&q=80"
          alt="Custom Staircase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Crafting Excellence in<br />Custom Woodwork & Millwork
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Specializing in custom staircases, cabinetry, doors, and fine millwork.
            Bringing your architectural visions to life with precision and artistry.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg w-fit
                     hover:bg-gray-100 transition-colors duration-200"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}