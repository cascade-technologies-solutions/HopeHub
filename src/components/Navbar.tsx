
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="font-serif font-bold text-2xl text-primary">HopeHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
              About Us
            </Link>
            <Link to="/programs" className="text-gray-700 hover:text-primary font-medium">
              Programs
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contact
            </Link>
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/programs"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={toggleMenu}
              >
                Programs
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Button asChild className="bg-secondary hover:bg-secondary/90 w-full">
                <Link to="/donate" onClick={toggleMenu}>Donate Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
