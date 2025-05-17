
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/ThemeProvider';

const FeaturedCars = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const brands = ['All', 'Honda', 'Toyota', 'Hyundai', 'Maruti'];

  const cars = [
    {
      id: 1,
      name: "Honda City ZX",
      price: 850000,
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: 2020,
      mileage: "32,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      brand: "Honda"
    },
    {
      id: 2,
      name: "Toyota Fortuner 4x4",
      price: 3200000,
      image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: 2021,
      mileage: "25,600 km",
      fuel: "Diesel",
      transmission: "Automatic",
      brand: "Toyota"
    },
    {
      id: 3,
      name: "Hyundai Creta SX",
      price: 1450000,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: 2022,
      mileage: "18,200 km",
      fuel: "Petrol",
      transmission: "Manual",
      brand: "Hyundai"
    },
    {
      id: 4,
      name: "Maruti Swift VXI",
      price: 650000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: 2020,
      mileage: "45,000 km",
      fuel: "Petrol",
      transmission: "Manual",
      brand: "Maruti"
    },
    {
      id: 5,
      name: "Honda Civic Turbo",
      price: 1900000,
      image: "https://images.unsplash.com/photo-1606152421802-931770804c1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: 2021,
      mileage: "22,500 km",
      fuel: "Petrol",
      transmission: "Automatic",
      brand: "Honda"
    },
    {
      id: 6,
      name: "Toyota Innova Crysta",
      price: 1750000,
      image: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: 2019,
      mileage: "48,000 km",
      fuel: "Diesel",
      transmission: "Manual",
      brand: "Toyota"
    }
  ];

  const filteredCars = activeFilter === 'all'
    ? cars
    : cars.filter(car => car.brand.toLowerCase() === activeFilter.toLowerCase());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16" id="inventory" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title text-center">Featured <span className="text-primary relative">
            Vehicles
            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-primary transition-all duration-1000" style={{ width: isVisible ? '100%' : '0%' }}></span>
          </span></h2>
          <p className="section-subtitle text-center">Explore our handpicked selection of premium pre-owned cars</p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
          {brands.map((brand, index) => (
            <Button
              key={brand}
              variant={activeFilter === brand.toLowerCase() ? "default" : "outline"}
              className={
                [
                  activeFilter === brand.toLowerCase()
                    ? 'bg-primary'
                    : isDark
                      ? 'text-[#FEF7CD] border-[#FEF7CD]/30'
                      : 'text-secondary',
                  'transition-all duration-300 transform hover:scale-105'
                ].join(' ')
              }
              onClick={() => setActiveFilter(brand.toLowerCase())}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {brand}
            </Button>
          ))}
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car, index) => (
            <div 
              key={car.id}
              className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <Link to={`/inventory?brand=${car.brand.toLowerCase()}`}>
                <CarCard {...car} />
              </Link>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.7s' }}>
          <Link to="/inventory">
            <Button 
              size="lg" 
              className="btn-primary relative overflow-hidden group"
            >
              <span className="relative z-10">View All Inventory</span>
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
