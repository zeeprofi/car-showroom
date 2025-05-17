import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Gauge, Car, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@/providers/ThemeProvider';
import SpeedometerDisplay from './SpeedometerDisplay';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const navigate = useNavigate();
  
  const carouselImages = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Porsche 911 dramatic angle
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Lightning McLaren
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Ferrari dashboard
    "https://i.ytimg.com/vi/NkIczD3z5fg/maxresdefault.jpg",
    "https://media.evo.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1556220024/evo/2018/04/alp_2658.jpg"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 15,
        y: (e.clientY / window.innerHeight) * 15
      });
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Set up image carousel interval
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageInterval);
    };
  }, [carouselImages.length]);

  const overlayGradient = isDarkMode 
    ? 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(10, 15, 28, 0.8))'
    : 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.65))';

  const handleBrowseInventory = () => {
    navigate('/inventory');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Carousel Images with Parallax Effect */}
      {carouselImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `${overlayGradient}, url('${image}')`,
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px) scale(1.05)`
          }}
        />
      ))}
      
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 z-1 opacity-20 pointer-events-none">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(234, 56, 76, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(234, 56, 76, 0.3) 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}>
        </div>
      </div>
      
      {/* Tech HUD-style Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-1">
        {/* Top-left corner HUD element */}
        <div className={`absolute top-5 left-5 ${isDarkMode ? 'text-red-500' : 'text-red-600'} opacity-50 text-xs`}>
          <div className="border border-current p-2 w-32 animate-pulse">
            <div className="flex items-center">
              <Gauge className="w-3 h-3 mr-1" />
              <span>SYSTEM ACTIVE</span>
            </div>
          </div>
        </div>
        
        {/* Bottom-right corner HUD element */}
        <div className={`absolute bottom-5 right-5 ${isDarkMode ? 'text-red-500' : 'text-red-600'} opacity-50 text-xs`}>
          <div className="border border-current p-2 w-32">
            <div className="flex items-center justify-end">
              <span>COORDINATES LOCKED</span>
              <Settings className="w-3 h-3 ml-1 animate-spin" style={{animationDuration: '3s'}} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Content with enhanced animations */}
      <div className="container relative z-10 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 relative overflow-hidden tracking-tight">
                <span className="inline-block animate-text-reveal">NEXT </span>
                <span className="text-primary inline-block animate-text-pop">GENERATION</span>
                <span className="text-primary absolute -bottom-1 left-0 h-1.5 w-0 bg-primary animate-line-grow"></span>
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 relative overflow-hidden tracking-tight">
                <span className="inline-block animate-text-reveal" style={{animationDelay: '0.3s'}}>AUTO </span>
                <span className="text-primary inline-block animate-text-pop" style={{animationDelay: '0.3s'}}>EXPERIENCE</span>
                <span className="text-primary absolute -bottom-1 left-0 h-1.5 w-0 bg-primary animate-line-grow" style={{animationDelay: '0.5s'}}></span>
              </h1>
            </div>
            
            <p className={`text-xl md:text-2xl text-gray-100 mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.3s'}}>
              Discover engineering excellence with our premium collection of performance vehicles.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.5s'}}>
              <Button 
                className="relative group text-lg h-14 px-8 bg-primary hover:bg-primary/90 overflow-hidden"
                onClick={handleBrowseInventory}
              >
                <span className="relative z-10 flex items-center">
                  Browse Inventory
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              <Link to="/sell-your-car">
                <Button 
                  variant="outline" 
                  className="h-14 px-8 w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Sell Your Car</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Button>
              </Link>
            </div>
            
            {/* Stats with futuristic display */}
            <div className={`grid grid-cols-3 gap-4 mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.7s'}}>
              <div className="text-center border border-white/20 bg-black/30 backdrop-blur-sm py-3 rounded">
                <div className="text-primary font-mono text-2xl">500+</div>
                <div className="text-gray-300 text-sm">VEHICLES</div>
              </div>
              <div className="text-center border border-white/20 bg-black/30 backdrop-blur-sm py-3 rounded">
                <div className="text-primary font-mono text-2xl">24/7</div>
                <div className="text-gray-300 text-sm">SUPPORT</div>
              </div>
              <div className="text-center border border-white/20 bg-black/30 backdrop-blur-sm py-3 rounded">
                <div className="text-primary font-mono text-2xl">100%</div>
                <div className="text-gray-300 text-sm">CERTIFIED</div>
              </div>
            </div>
          </div>
          
          {/* Replacing 3D-like Car Stats Display with Tesla-style Speedometer */}
          <div className={`hidden lg:flex items-center justify-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}`} style={{transitionDelay: '0.8s'}}>
            <div className="w-full max-w-md">
              <SpeedometerDisplay initialSpeed={0} maxSpeed={160} />
            </div>
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className={`flex justify-center lg:justify-start mt-10 gap-2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.8s'}}>
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-primary w-6' : 'bg-white/40'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
