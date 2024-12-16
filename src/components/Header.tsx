import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (!isHome) {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Medrano Builders Inc.
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <button 
              onClick={handleNavClick('services')}
              className="text-gray-700 hover:text-gray-900"
            >
              Services
            </button>
            <button 
              onClick={handleNavClick('gallery')}
              className="text-gray-700 hover:text-gray-900"
            >
              Gallery
            </button>
            <button 
              onClick={handleNavClick('contact')}
              className="text-gray-700 hover:text-gray-900"
            >
              Contact & Quote
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={handleNavClick('services')}
                className="text-left text-gray-700 hover:text-gray-900"
              >
                Services
              </button>
              <button 
                onClick={handleNavClick('gallery')}
                className="text-left text-gray-700 hover:text-gray-900"
              >
                Gallery
              </button>
              <button 
                onClick={handleNavClick('contact')}
                className="text-left text-gray-700 hover:text-gray-900"
              >
                Contact & Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}