
import React from 'react';
import { Button } from '@/components/ui/button';
import TireToggle from '../ui/tire-toggle';

interface ActionButtonsProps {
  scrolled: boolean;
  isDark: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ scrolled, isDark }) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {/* Theme toggle */}
      <div className="mr-2">
        <TireToggle />
      </div>
      
      <Button className="bg-primary hover:bg-primary/90 text-white py-2.5 px-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-primary/20 relative overflow-hidden group whitespace-nowrap">
        <span className="relative z-10">Book Test Drive</span>
        <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      </Button>
    </div>
  );
};

export default ActionButtons;
