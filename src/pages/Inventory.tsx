
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSearch from '@/components/inventory/HeroSearch';
import FilterSidebar from '@/components/inventory/FilterSidebar';
import CarGrid from '@/components/inventory/CarGrid';
import { carData, filterCars } from '@/lib/carData';
import { useTheme } from '@/providers/ThemeProvider';

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [fuelFilter, setFuelFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const carsPerPage = 6;

  const clearFilters = () => {
    setSearchQuery('');
    setPriceFilter('all');
    setFuelFilter('all');
    setCurrentPage(1);
  };

  const filteredCars = filterCars(carData, searchQuery, priceFilter, fuelFilter);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  
  // Calculate the current page's cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // We no longer scroll to top automatically when page changes
    // This allows just the car grid to update
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Header />
      
      <HeroSearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      {/* Inventory Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <FilterSidebar 
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
              fuelFilter={fuelFilter}
              setFuelFilter={setFuelFilter}
              clearFilters={clearFilters}
            />
            
            <CarGrid 
              filteredCars={currentCars}
              clearFilters={clearFilters}
              totalCount={filteredCars.length}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Background Effects for Dark Mode */}
      {isDark && (
        <>
          {/* Subtle animated gradients for the dark mode background */}
          <div className="fixed inset-0 -z-10 opacity-70 pointer-events-none">
            <div className="absolute top-0 left-[10%] w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-blue-500/5 blur-3xl animate-float"></div>
            <div className="absolute bottom-[5%] left-[5%] w-64 h-64 rounded-full bg-purple-500/5 blur-3xl animate-float-fast"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Inventory;
