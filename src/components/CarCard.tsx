
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Tag, Car as CarIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface CarCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
}

const CarCard = ({ id, name, price, image, year, mileage, fuel, transmission }: CarCardProps) => {
  const { toast } = useToast();

  const handleBookTest = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button inside a link
    toast({
      title: "Test Drive Requested!",
      description: `We'll contact you to schedule a test drive for ${name}.`,
    });
  };

  return (
    <div className="card overflow-hidden group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          {year}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex flex-col items-end">
            <p className="text-primary font-bold">₹{price.toLocaleString()}</p>
            <span className="text-xs text-gray-500">EMI from ₹{Math.round(price / 60).toLocaleString()}/mo</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <Calendar className="h-3.5 w-3.5 text-primary/70" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <CarIcon className="h-3.5 w-3.5 text-primary/70" /> 
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <Tag className="h-3.5 w-3.5 text-primary/70" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70">
              <circle cx="8" cy="8" r="5" />
              <path d="M18 16h.01" />
              <path d="M18 20h.01" />
              <path d="m13 13 5 5" />
            </svg>
            <span>{transmission}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1 border-primary/20 text-primary hover:bg-primary/5" 
            asChild
          >
            <Link to={`/inventory/${id}`}>View Details</Link>
          </Button>
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90 transition-all"
            onClick={handleBookTest}
          >
            Book Test Drive
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
