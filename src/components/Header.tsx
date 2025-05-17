
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@/providers/ThemeProvider';
import Logo from './header/Logo';
import NavigationLinks from './header/NavigationLinks';
import ActionButtons from './header/ActionButtons';
import MobileMenu from './header/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to section if on homepage, otherwise navigate to homepage with section hash
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? `${isDark ? 'bg-gray-900/95' : 'bg-black/80'} backdrop-blur-md shadow-md py-2` 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo scrolled={scrolled} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavigationLinks 
            scrolled={scrolled} 
            isDark={isDark} 
            scrollToSection={scrollToSection} 
          />
        </div>

        <ActionButtons scrolled={scrolled} isDark={isDark} />

        <MobileMenu 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          scrollToSection={scrollToSection} 
          scrolled={scrolled} 
          isDark={isDark} 
        />
      </div>
    </header>
  );
};

export default Header;
