
import React from 'react';
import { Button } from '@/components/ui/button';
import CarCard from '@/components/CarCard';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
}

interface CarGridProps {
  filteredCars: Car[];
  clearFilters: () => void;
  totalCount?: number; // Total number of cars before pagination
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CarGrid = ({ 
  filteredCars, 
  clearFilters, 
  totalCount,
  currentPage,
  totalPages,
  onPageChange
}: CarGridProps) => {
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex-grow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Available Cars</h2>
        <p className="text-gray-600">{totalCount || filteredCars.length} results</p>
      </div>
      
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl text-center">
          <p className="text-gray-500 text-lg">No cars match your search criteria.</p>
          <Button className="mt-4" variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalCount && totalCount > 0 && (
        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={handlePrevious} 
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  isActive={currentPage === index + 1} 
                  onClick={() => onPageChange(index + 1)}
                  className="cursor-pointer"
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            {totalPages > 3 && currentPage < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            
            <PaginationItem>
              <PaginationNext 
                onClick={handleNext} 
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default CarGrid;
