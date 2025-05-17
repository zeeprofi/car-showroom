
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import BenefitsList from './sell-your-car/BenefitsList';
import QuickQuoteForm from './sell-your-car/QuickQuoteForm';
import GearVisualizer from './sell-your-car/GearVisualizer';

const SellYourCar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('sell');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className={`py-24 bg-gradient-to-b ${isDark ? 'from-[#1A1F2C] to-[#221F26]' : 'from-white to-gray-50'} relative overflow-hidden`} id="sell">
      {/* Background Elements */}
      <div className={`absolute top-0 right-0 w-1/3 h-1/3 ${isDark ? 'bg-[#555555]/20' : 'bg-primary/5'} rounded-full blur-3xl`}></div>
      <div className={`absolute bottom-0 left-0 w-1/4 h-1/4 ${isDark ? 'bg-[#333333]/10' : 'bg-primary/5'} rounded-full blur-3xl`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Form Section */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className={`section-title ${isDark ? 'text-[#FEF7CD]' : ''}`}>Want to <span className="text-primary font-bold">Sell Your Car</span> Fast?</h2>
            <div className={`w-24 h-1 rounded-full mb-6 ${isDark ? 'bg-[#FEF7CD]/30' : 'bg-primary/30'}`}></div>
            <p className={`mb-8 text-lg ${isDark ? 'text-[#FEF7CD]/90' : 'text-gray-600'}`}>Get the best value for your vehicle with our hassle-free selling process. Fill out the form below for a quick quote or visit our dedicated page for complete details.</p>
            
            <BenefitsList />
            <QuickQuoteForm />
          </div>
          
          {/* Gear Component Section */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <GearVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellYourCar;
