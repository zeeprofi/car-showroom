
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedCars from '@/components/FeaturedCars';
import SellYourCar from '@/components/SellYourCar';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { useTheme } from '@/providers/ThemeProvider';

const Index = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-[#0A0F1C] text-[#E6EDF9]'
          : 'bg-white text-gray-900'
      }`}
    >
      <Header />
      <main className="relative">
        {/* Enhanced futuristic grid pattern overlay with glow effect */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `linear-gradient(to right, ${isDark ? 'rgba(234, 56, 76, 0.1)' : 'rgba(234, 56, 76, 0.07)'} 1px, transparent 1px), 
                                   linear-gradient(to bottom, ${isDark ? 'rgba(234, 56, 76, 0.1)' : 'rgba(234, 56, 76, 0.07)'} 1px, transparent 1px)`,
                 backgroundSize: '40px 40px',
                 filter: 'drop-shadow(0 0 4px rgba(234, 56, 76, 0.4))'
               }}>
          </div>
        </div>
        
        <HeroSection />
        <WhyChooseUs />
        <FeaturedCars />
        <SellYourCar />
        <Testimonials />
        <Services />
      </main>
      <Footer />
      
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 -z-10 opacity-70 pointer-events-none overflow-hidden">
        {/* Large circular glow */}
        <div className={`absolute -top-[30%] -right-[20%] w-[80vw] h-[80vw] rounded-full blur-3xl ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`}></div>
        
        {/* Digital circuit-like lines */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-20"
             style={{
               backgroundImage: `radial-gradient(${isDark ? '#ea384c' : '#ea384c'} 1px, transparent 1px)`,
               backgroundSize: '40px 40px',
               filter: 'drop-shadow(0 0 3px rgba(234, 56, 76, 0.7))'
             }}>
        </div>
        
        {/* Moving gradient elements */}
        <div className="absolute top-[20%] left-[5%] w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-blue-500/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-[5%] left-[5%] w-64 h-64 rounded-full bg-purple-500/5 blur-3xl animate-float-fast"></div>
      </div>
    </div>
  );
};

export default Index;
