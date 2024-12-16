import React from 'react';

interface GalleryItemProps {
  title: string;
  category: string;
  imageUrl: string;
}

export default function GalleryItem({ title, category, imageUrl }: GalleryItemProps) {
  return (
    <div className="group relative">
      <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy" // Add lazy loading for better performance
          onError={(e) => {
            // Fallback image if the main image fails to load
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-end justify-start p-6">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-200">{category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}