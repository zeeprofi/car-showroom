
import React from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

const BenefitsList = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const benefits = [
    "Best market value guaranteed",
    "Hassle-free paperwork",
    "Instant payment transfer",
    "Free car valuation"
  ];

  return (
    <div className="mb-8 space-y-2">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className={`flex-shrink-0 h-5 w-5 rounded-full ${isDark ? 'bg-[#FEF7CD]/20' : 'bg-primary/20'} flex items-center justify-center`}>
            <Check className={`h-3 w-3 ${isDark ? 'text-[#FEF7CD]' : 'text-primary'}`} />
          </div>
          <span className={isDark ? 'text-[#FEF7CD]' : 'text-gray-700'}>{benefit}</span>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
