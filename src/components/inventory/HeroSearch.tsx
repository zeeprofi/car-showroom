
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Car } from 'lucide-react';

interface HeroSearchProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const HeroSearch = ({ searchQuery, setSearchQuery }: HeroSearchProps) => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-primary/30 to-gray-900 pt-32 pb-20 text-white relative overflow-hidden">
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(234, 56, 76, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(234, 56, 76, 0.5) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float-slow"></div>
      <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 relative">
            <Car className="text-primary h-16 w-16 mx-auto mb-2" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary animate-ping-slow opacity-75"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Find Your <span className="text-primary">Perfect</span> Car
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">
            Browse our extensive collection of precision-engineered performance vehicles
          </p>
          
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-grow w-full relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by make, model, or features..."
                  className="h-12 bg-white/10 border-0 text-white placeholder:text-gray-400 pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="h-12 px-8 bg-primary hover:bg-primary/90 w-full md:w-auto relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Search
                  <Filter className="ml-2 h-5 w-5" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </div>
            
            {/* Quick filter tags */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <div className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 cursor-pointer transition-colors">
                Sports Cars
              </div>
              <div className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 cursor-pointer transition-colors">
                SUVs
              </div>
              <div className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 cursor-pointer transition-colors">
                Electric
              </div>
              <div className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 cursor-pointer transition-colors">
                Luxury
              </div>
              <div className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 cursor-pointer transition-colors">
                Under ₹15L
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
