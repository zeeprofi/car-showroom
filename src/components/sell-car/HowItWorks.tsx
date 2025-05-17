
import React from 'react';
import { FileText, Tag, DollarSign } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

const HowItWorks = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-[#FEF7CD]' : ''}`}>How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all group ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className={`w-16 h-16 ${isDark ? 'bg-[#1A1F2C]' : 'bg-primary/10'} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
              <FileText className={`h-8 w-8 ${isDark ? 'text-[#FEF7CD]' : 'text-primary'}`} />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-[#FEF7CD]' : ''}`}>1. Submit Details</h3>
            <p className={isDark ? 'text-[#FEF7CD]/80' : 'text-gray-600'}>Fill out the form with your vehicle information and upload photos</p>
          </div>
          <div className={`p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all group ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className={`w-16 h-16 ${isDark ? 'bg-[#1A1F2C]' : 'bg-primary/10'} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
              <Tag className={`h-8 w-8 ${isDark ? 'text-[#FEF7CD]' : 'text-primary'}`} />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-[#FEF7CD]' : ''}`}>2. Get Evaluated</h3>
            <p className={isDark ? 'text-[#FEF7CD]/80' : 'text-gray-600'}>Our experts will evaluate your car and provide the best market value</p>
          </div>
          <div className={`p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all group ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className={`w-16 h-16 ${isDark ? 'bg-[#1A1F2C]' : 'bg-primary/10'} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
              <DollarSign className={`h-8 w-8 ${isDark ? 'text-[#FEF7CD]' : 'text-primary'}`} />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-[#FEF7CD]' : ''}`}>3. Get Paid</h3>
            <p className={isDark ? 'text-[#FEF7CD]/80' : 'text-gray-600'}>Accept our offer and receive instant payment directly to your account</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
