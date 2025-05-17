
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Car } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

interface FilterSidebarProps {
  priceFilter: string;
  setPriceFilter: (value: string) => void;
  fuelFilter: string;
  setFuelFilter: (value: string) => void;
  clearFilters: () => void;
}

const FilterSidebar = ({
  priceFilter,
  setPriceFilter,
  fuelFilter,
  setFuelFilter,
  clearFilters
}: FilterSidebarProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className={`p-6 rounded-xl shadow-md sticky top-24 transition-colors duration-300
        ${isDark 
          ? 'bg-black border border-white/10 text-[#FEF7CD]' 
          : 'bg-white border-[#333]'}`
      }>
        <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDark ? 'text-[#FEF7CD]' : ''}`}>
          <Car className="mr-2 h-5 w-5 text-primary" />
          Filters
        </h3>
        <div className="space-y-6">
          <div>
            <label className={`text-sm font-medium block mb-2 ${isDark ? 'text-[#FEF7CD]' : ''}`}>Price Range</label>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className={isDark ? 'bg-[#181818] border-[#444] text-[#FEF7CD]' : ''}>
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent className={isDark ? 'bg-[#181818] text-[#FEF7CD]' : ''}>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under1000000">Under ₹10 Lakh</SelectItem>
                <SelectItem value="1000000to1500000">₹10 Lakh - ₹15 Lakh</SelectItem>
                <SelectItem value="above1500000">Above ₹15 Lakh</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className={`text-sm font-medium block mb-2 ${isDark ? 'text-[#FEF7CD]' : ''}`}>Fuel Type</label>
            <Select value={fuelFilter} onValueChange={setFuelFilter}>
              <SelectTrigger className={isDark ? 'bg-[#181818] border-[#444] text-[#FEF7CD]' : ''}>
                <SelectValue placeholder="Select fuel type" />
              </SelectTrigger>
              <SelectContent className={isDark ? 'bg-[#181818] text-[#FEF7CD]' : ''}>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="petrol">Petrol</SelectItem>
                <SelectItem value="diesel">Diesel</SelectItem>
                <SelectItem value="electric">Electric</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className={`w-full mt-4 ${isDark ? 'border border-[#FEF7CD]/50 text-[#FEF7CD] bg-[#101010] hover:bg-[#181818]' : ''}`}
            variant="outline"
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
