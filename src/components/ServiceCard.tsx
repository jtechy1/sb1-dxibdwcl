import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  id: string;
}

export default function ServiceCard({ icon: Icon, title, description, id }: ServiceCardProps) {
  return (
    <Link to={`/services/${id}`} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <Icon className="h-12 w-12 text-gray-900 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}