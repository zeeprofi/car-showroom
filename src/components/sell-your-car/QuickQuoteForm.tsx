
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/providers/ThemeProvider';

const QuickQuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carMake: '',
    carModel: '',
    year: '',
  });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({
      name: '',
      phone: '',
      carMake: '',
      carModel: '',
      year: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 p-8 rounded-xl shadow-lg border ${isDark ? 'bg-[#221F26] border-[#32323a]' : 'bg-white border-gray-100'}`}>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="h-12 px-4"
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="h-12 px-4"
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          name="carMake"
          placeholder="Car Make"
          value={formData.carMake}
          onChange={handleChange}
          required
          className="h-12 px-4"
        />
        <Input
          type="text"
          name="carModel"
          placeholder="Car Model"
          value={formData.carModel}
          onChange={handleChange}
          required
          className="h-12 px-4"
        />
      </div>
      <Input
        type="number"
        name="year"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
        required
        className="h-12 px-4"
      />
      <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 transition-transform hover:-translate-y-1 group">
        <DollarSign className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
        Get a Free Quote
      </Button>
      
      <div className={`text-center pt-2 ${isDark ? 'text-[#FEF7CD]/80' : ''}`}>
        <Link to="/sell-your-car" className={`inline-flex items-center ${isDark ? 'text-[#FEF7CD]' : 'text-primary'} hover:opacity-80 font-medium`}>
          Complete car details on our dedicated page
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </form>
  );
};

export default QuickQuoteForm;
