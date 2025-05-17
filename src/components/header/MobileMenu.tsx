
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import TireToggle from '../ui/tire-toggle';
import './headerAnimations.css';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  scrollToSection: (sectionId: string) => void;
  scrolled: boolean;
  isDark: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isMenuOpen, 
  toggleMenu, 
  scrollToSection,
  scrolled,
  isDark
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center space-x-2">
        <TireToggle />
        <button
          className="text-white focus:outline-none transition-transform hover:scale-110 p-2 rounded-md hover:bg-white/20"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md py-6 px-4 shadow-lg animate-slide-in-top`}>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-primary font-medium transition-colors px-3 py-2.5 hover:bg-accent/10 rounded-md" onClick={toggleMenu}>Home</Link>
            <Link to="/inventory" className="text-white hover:text-primary font-medium transition-colors px-3 py-2.5 hover:bg-accent/10 rounded-md" onClick={toggleMenu}>Inventory</Link>
            <Link to="/sell-your-car" className="text-white hover:text-primary font-medium transition-colors px-3 py-2.5 hover:bg-accent/10 rounded-md" onClick={toggleMenu}>Sell Your Car</Link>
            <Link 
              to={isHomePage ? "#services" : "/#services"} 
              className="text-white hover:text-primary font-medium transition-colors px-3 py-2.5 hover:bg-accent/10 rounded-md"
              onClick={() => scrollToSection('services')}
            >
              Services
            </Link>
            <Link 
              to={isHomePage ? "#testimonials" : "/#testimonials"} 
              className="text-white hover:text-primary font-medium transition-colors px-3 py-2.5 hover:bg-accent/10 rounded-md"
              onClick={() => scrollToSection('testimonials')}
            >
              Testimonials
            </Link>
            <Link 
              to={isHomePage ? "#contact" : "/#contact"} 
              className="text-white hover:text-primary font-medium transition-colors px-3 py-2.5 hover:bg-accent/10 rounded-md"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Link>
            
            <Button className="bg-primary hover:bg-primary/90 text-white w-full p-2.5 relative overflow-hidden group" onClick={toggleMenu}>
              <span className="relative z-10">Book Test Drive</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
