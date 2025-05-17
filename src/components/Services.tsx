
import React, { useState, useEffect } from 'react';
import { Car, FileText, Headphones, CreditCard, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/ThemeProvider';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const services = [
    {
      icon: <Car className="w-12 h-12 text-primary transition-all duration-300" />,
      title: "Car Inspection",
      description: "Comprehensive 150+ point inspection to ensure top quality vehicles"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary transition-all duration-300" />,
      title: "Loan Assistance",
      description: "Get the best loan rates from our partner banks and financial institutions"
    },
    {
      icon: <FileText className="w-12 h-12 text-primary transition-all duration-300" />,
      title: "RTO Services",
      description: "Hassle-free registration and transfer of ownership services"
    },
    {
      icon: <Headphones className="w-12 h-12 text-primary transition-all duration-300" />,
      title: "After-Sale Support",
      description: "Dedicated customer service team for post-purchase assistance"
    }
  ];

  return (
    <section
      className={`py-24 relative overflow-hidden transition-colors duration-300
        ${isDark ? 'bg-black' : 'bg-gradient-to-b from-gray-50 to-white'}
      `}
      id="services"
    >
      {/* Background Elements */}
      {isDark ? (
        <>
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#232323] to-black opacity-50"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-100 to-transparent opacity-70"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
        </>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className={`section-title text-center ${isDark ? 'text-[#FEF7CD]' : ''}`}>
            Our <span className="text-primary font-bold">Services</span>
          </h2>
          <div className={`w-24 h-1.5 mx-auto mb-6 rounded-full ${isDark ? 'bg-primary/40' : 'bg-primary/30'}`}></div>
          <p className={`section-subtitle text-center ${isDark ? 'text-[#FEF7CD]/80' : ''}`}>
            We offer a comprehensive range of services to make your car buying experience seamless
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card p-8 text-center hover-lift relative overflow-hidden group transition-all duration-500 transform 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
                ${isDark ? 'bg-[#121212] border-[#232323] text-[#FEF7CD]' : '' }`
              }
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-[#1A1F2C]/10 to-transparent' : 'from-primary/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div 
                className={`mb-6 flex justify-center items-center mx-auto
                          rounded-full p-5 shadow-md transition-all duration-500 relative z-10
                          ${hoveredIndex === index ? 'bg-primary/10 scale-110' : isDark ? 'bg-[#1A1F2C]' : 'bg-gray-50'}`}
              >
                {React.cloneElement(service.icon, {
                  className: `w-12 h-12 transition-all duration-500 ${
                    hoveredIndex === index ? 'text-primary scale-110' : 'text-primary/80'
                  }`
                })}
              </div>
              <h3 className={`text-xl font-bold mb-3 relative z-10 group-hover:text-primary transition-colors ${isDark ? 'text-[#FEF7CD]' : ''}`}>{service.title}</h3>
              <p className={`${isDark ? 'text-[#FEF7CD]/90' : 'text-gray-600'} mb-5 relative z-10`}>{service.description}</p>
              <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <Button className={`rounded-full h-10 w-10 p-0 flex items-center justify-center text-primary ${isDark ? 'bg-[#232323] hover:bg-primary/20' : 'bg-primary/10 hover:bg-primary/20'}`}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className={`mt-24 glass-card p-10 text-center relative overflow-hidden transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} ${isDark ? 'bg-[#151515] border-[#333] text-[#FEF7CD]' : ''}`} style={{ transitionDelay: `0.6s` }}>
          {/* Background Gradient */}
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-[#222]/20 to-transparent' : 'bg-gradient-to-br from-primary/5 to-transparent'}`}></div>
          <h3 className={`text-2xl font-bold mb-4 relative ${isDark ? 'text-[#FEF7CD]' : ''}`}>About <span className="text-primary">AutoRevive Motors</span></h3>
          <div className={`w-16 h-1 mx-auto mb-6 ${isDark ? 'bg-primary/40' : 'bg-primary/30'}`}></div>
          <p className={`max-w-3xl mx-auto relative ${isDark ? 'text-[#FEF7CD]/80' : 'text-gray-700'}`}>
            Since 2010, AutoRevive Motors has been the trusted destination for quality pre-owned cars in India. 
            With our commitment to transparency, fair pricing, and exceptional customer service, we've helped 
            thousands of customers find their perfect vehicle. Our team of certified technicians ensures that 
            every car meets our rigorous quality standards before it reaches our showroom floor.
          </p>
          <Button variant="outline" className={`mt-6 border-primary text-primary hover:bg-primary hover:text-white relative ${isDark ? 'border-[#FEF7CD]/30 text-[#FEF7CD] hover:bg-primary hover:text-black' : ''}`}>
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
