
import React from 'react';
import { useTheme } from '@/providers/ThemeProvider';

const SellCarFAQ = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-[#FEF7CD]' : ''}`}>
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className={`p-6 rounded-xl shadow-sm transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-[#FEF7CD]' : ''}`}>How long does the evaluation process take?</h3>
            <p className={isDark ? 'text-[#FEF7CD]/80' : 'text-gray-600'}>
              Our team typically evaluates your vehicle within 24-48 hours after receiving your complete details and photos.
            </p>
          </div>
          <div className={`p-6 rounded-xl shadow-sm transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-[#FEF7CD]' : ''}`}>What documents do I need to sell my car?</h3>
            <p className={isDark ? 'text-[#FEF7CD]/80' : 'text-gray-600'}>
              You'll need your car's registration certificate, insurance policy, PUC certificate, and service records.
            </p>
          </div>
          <div className={`p-6 rounded-xl shadow-sm transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-[#FEF7CD]' : ''}`}>How is the car's value determined?</h3>
            <p className={isDark ? 'text-[#FEF7CD]/80' : 'text-gray-600'}>
              We consider factors like make, model, year, mileage, condition, service history, and current market demand to determine a fair value.
            </p>
          </div>
          <div className={`p-6 rounded-xl shadow-sm transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-[#FEF7CD]' : ''}`}>How quickly will I receive payment?</h3>
            <p className={isDark ? 'text-[#FEF7CD]/80' : 'text-gray-600'}>
              Once you accept our offer, payment is typically processed within 24 hours directly to your bank account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellCarFAQ;
