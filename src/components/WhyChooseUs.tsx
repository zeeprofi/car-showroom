
import React, { useEffect, useState } from 'react';
import { Check, Shield, BadgeDollarSign, Car, Gauge } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('why-choose');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.75;
        if (isInViewport) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Car className="w-10 h-10 text-primary" />,
      title: "Premium Selection",
      description: "Curated collection of high-performance vehicles from top manufacturers"
    },
    {
      icon: <Check className="w-10 h-10 text-primary" />,
      title: "150-Point Inspection",
      description: "Every vehicle undergoes a comprehensive 150-point inspection"
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Extended Warranty",
      description: "Exclusive extended warranty packages for your peace of mind"
    },
    {
      icon: <Gauge className="w-10 h-10 text-primary" />,
      title: "Performance Tested",
      description: "All vehicles are tested on track to ensure exceptional performance"
    }
  ];

  return (
    <section 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#070B14]' : 'bg-gray-50'}`} 
      id="why-choose"
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Circuit-like patterns */}
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: `radial-gradient(circle at 30% 20%, ${isDark ? '#ea384c' : '#ea384c'} 1px, transparent 1px), 
                                   radial-gradient(circle at 70% 80%, ${isDark ? '#ea384c' : '#ea384c'} 1px, transparent 1px)`,
                 backgroundSize: '80px 80px'
               }}>
          </div>
        </div>
        
        {/* Angled dividers */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary/10 to-transparent transform -skew-y-2"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-primary/5 to-transparent transform -skew-y-2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center ${isDark ? 'text-[#FEF7CD]' : ''}`}>
            Why Choose <span className="text-primary relative inline-block">
              AutoRevive
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-700 delay-300" style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto text-center mb-16 ${isDark ? 'text-[#FEF7CD]/80' : ''}`}>
            Experience automotive excellence with our premium selection and performance-focused approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative transition-all duration-700 transform 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                ${isDark ? 'bg-[#0C1220] text-[#FEF7CD]' : 'bg-white' }`}
              style={{ 
                transitionDelay: `${index * 0.15}s`,
                borderRadius: '16px',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Futuristic card styling */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Top-left corner */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
                {/* Bottom-right corner */}
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary"></div>
              </div>
              
              {/* Hover effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300"
                style={{ opacity: hoveredIndex === index ? '1' : '0' }}
              ></div>
              
              {/* Content */}
              <div className="p-8 flex flex-col items-center text-center relative z-10">
                <div 
                  className={`mb-6 p-4 rounded-full transition-all duration-500 
                    ${hoveredIndex === index ? 'bg-primary/20 animate-float-fast' : 'bg-primary/10'}`}
                >
                  {React.cloneElement(feature.icon, {
                    className: `w-10 h-10 transition-transform duration-300 ${
                      hoveredIndex === index ? 'text-primary rotate-12' : 'text-primary'
                    }`
                  })}
                </div>
                <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${hoveredIndex === index ? 'text-primary' : ''}`}>
                  {feature.title}
                </h3>
                <p className={`${isDark ? 'text-[#FEF7CD]/90' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
                
                {/* Animated indicator */}
                <div className={`w-0 h-0.5 bg-primary mt-6 transition-all duration-500 ${hoveredIndex === index ? 'w-16' : ''}`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech specs display */}
        <div className={`mt-24 max-w-4xl mx-auto backdrop-blur-md ${isDark ? 'bg-[#0C1220]/70' : 'bg-white/90'} rounded-xl border ${isDark ? 'border-[#1A243B]' : 'border-gray-200'} overflow-hidden transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '0.5s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className={`text-lg font-medium ${isDark ? 'text-[#FEF7CD]' : ''}`}>Years Experience</div>
              <p className={`text-sm mt-2 ${isDark ? 'text-[#FEF7CD]/70' : 'text-gray-600'}`}>Serving automotive enthusiasts since 2013</p>
            </div>
            <div className="p-8 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800">
              <div className="text-4xl font-bold text-primary mb-2">1,500+</div>
              <div className={`text-lg font-medium ${isDark ? 'text-[#FEF7CD]' : ''}`}>Cars Sold</div>
              <p className={`text-sm mt-2 ${isDark ? 'text-[#FEF7CD]/70' : 'text-gray-600'}`}>Building trust with every transaction</p>
            </div>
            <div className="p-8 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className={`text-lg font-medium ${isDark ? 'text-[#FEF7CD]' : ''}`}>Support</div>
              <p className={`text-sm mt-2 ${isDark ? 'text-[#FEF7CD]/70' : 'text-gray-600'}`}>Dedicated assistance whenever you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
