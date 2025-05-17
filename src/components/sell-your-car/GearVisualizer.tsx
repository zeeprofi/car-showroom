
import React from 'react';
import { useTheme } from '@/providers/ThemeProvider';

const GearVisualizer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative">
      <div className={`absolute -top-6 -left-6 w-32 h-32 ${isDark ? 'bg-[#FEF7CD]/10' : 'bg-primary'} rounded-full opacity-10`}></div>
      <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
        {/* Gearbox Component */}
        <div className="gearbox">
          <div className="overlay"></div>
          <div className="gear one">
            <div className="gear-inner">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="gear two">
            <div className="gear-inner">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="gear three">
            <div className="gear-inner">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="gear four large">
            <div className="gear-inner">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className={`${isDark ? 'bg-[#1A1F2C]/90' : 'bg-white/90'} backdrop-blur-sm p-4 rounded-lg shadow-lg`}>
            <div className={`${isDark ? 'text-[#FEF7CD] font-bold' : 'text-primary font-bold'}`}>4.9/5</div>
            <div className={`${isDark ? 'text-[#FEF7CD]' : 'text-gray-700'} text-sm`}>★★★★★</div>
            <div className={`${isDark ? 'text-[#FEF7CD]/70' : 'text-gray-600'} text-xs mt-1`}>Based on 1,240+ car valuations</div>
          </div>
        </div>
      </div>
      <div className={`absolute -bottom-6 -right-6 w-40 h-40 ${isDark ? 'bg-[#FEF7CD]/10' : 'bg-secondary'} rounded-full opacity-5`}></div>
    </div>
  );
};

export default GearVisualizer;
