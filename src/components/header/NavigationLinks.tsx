
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

interface NavigationLinksProps {
  scrolled: boolean;
  isDark: boolean;
  scrollToSection: (sectionId: string) => void;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ 
  scrolled, 
  isDark,
  scrollToSection 
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <NavigationMenu className="z-20">
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <Link to="/" className={`
            text-white px-2 py-2 rounded-md hover:bg-white/10 transition-all duration-200 text-sm font-medium flex items-center whitespace-nowrap
          `}>
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/inventory" className={`
            text-white px-2 py-2 rounded-md hover:bg-white/10 transition-all duration-200 text-sm font-medium flex items-center whitespace-nowrap
          `}>
            Inventory
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/sell-your-car" className={`
            text-white px-2 py-2 rounded-md hover:bg-white/10 transition-all duration-200 text-sm font-medium flex items-center whitespace-nowrap
          `}>
            Sell Your Car
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link 
            to={isHomePage ? "#services" : "/#services"} 
            onClick={() => isHomePage && scrollToSection('services')}
            className={`
              text-white px-2 py-2 rounded-md hover:bg-white/10 transition-all duration-200 text-sm font-medium flex items-center whitespace-nowrap
            `}
          >
            Services
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link 
            to={isHomePage ? "#testimonials" : "/#testimonials"} 
            onClick={() => isHomePage && scrollToSection('testimonials')}
            className={`
              text-white px-2 py-2 rounded-md hover:bg-white/10 transition-all duration-200 text-sm font-medium flex items-center whitespace-nowrap
            `}
          >
            Testimonials
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link 
            to={isHomePage ? "#contact" : "/#contact"} 
            onClick={() => isHomePage && scrollToSection('contact')}
            className={`
              text-white px-2 py-2 rounded-md hover:bg-white/10 transition-all duration-200 text-sm font-medium flex items-center whitespace-nowrap
            `}
          >
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationLinks;
