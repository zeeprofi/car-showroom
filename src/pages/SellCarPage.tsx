
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SellCarHero from '@/components/sell-car/SellCarHero';
import HowItWorks from '@/components/sell-car/HowItWorks';
import SellCarForm from '@/components/sell-car/SellCarForm';
import SellCarFAQ from '@/components/sell-car/SellCarFAQ';
import { useTheme } from '@/providers/ThemeProvider';

const SellCarPage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark
          ? 'bg-[#1A1F2C] text-[#FEF7CD]'
          : 'bg-white text-gray-900'
      }`}
    >
      <Header />
      <SellCarHero />
      <HowItWorks />
      <SellCarForm />
      <SellCarFAQ />
      <Footer />
      
      {/* Background Effects for Dark Mode */}
      {isDark && (
        <>
          {/* Subtle animated gradients for the dark mode background */}
          <div className="fixed inset-0 -z-10 opacity-70 pointer-events-none">
            <div className="absolute top-0 left-[10%] w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-blue-500/5 blur-3xl animate-float"></div>
            <div className="absolute bottom-[5%] left-[5%] w-64 h-64 rounded-full bg-purple-500/5 blur-3xl animate-float-fast"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default SellCarPage;
