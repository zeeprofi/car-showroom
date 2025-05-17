
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Car as CarIcon, Info, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

// This would typically come from an API call based on the car ID
const carsDatabase = [
  {
    id: 1,
    name: "Honda City ZX",
    price: 850000,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    year: 2020,
    mileage: "32,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    brand: "Honda",
    description: "The Honda City ZX is a premium sedan with cutting-edge features. Its sleek design and spacious interior make it perfect for city driving and long journeys. Equipped with a powerful yet fuel-efficient engine.",
    features: ["Reverse Camera", "Automatic Climate Control", "Push Button Start", "Sunroof", "Cruise Control", "Bluetooth Connectivity"],
    specifications: {
      engine: "1.5L i-VTEC",
      power: "121 HP",
      torque: "145 Nm",
      fuelEfficiency: "17.8 km/l"
    }
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
    brand: "Toyota",
    description: "The Toyota Fortuner is a powerful SUV built for adventure. With its robust 4x4 capability and comfortable interior, it's perfect for both city driving and off-road exploration. Includes Toyota's legendary reliability.",
    features: ["4x4 Drive", "Leather Seats", "7-Seater", "Terrain Management System", "JBL Premium Audio", "Hill Descent Control"],
    specifications: {
      engine: "2.8L Diesel",
      power: "204 HP",
      torque: "500 Nm",
      fuelEfficiency: "14.2 km/l"
    }
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
    brand: "Hyundai",
    description: "The Hyundai Creta SX is a feature-packed compact SUV. Its modern design, spacious cabin, and advanced technology features make it ideal for urban families. Comes with Hyundai's excellent warranty package.",
    features: ["Panoramic Sunroof", "10.25-inch Touchscreen", "Ventilated Seats", "Bose Premium Sound", "BlueLink Connected Car Tech", "Wireless Charging"],
    specifications: {
      engine: "1.5L Petrol",
      power: "115 HP",
      torque: "144 Nm",
      fuelEfficiency: "16.8 km/l"
    }
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
    brand: "Maruti",
    description: "The Maruti Swift VXI is an economical and fun-to-drive hatchback. Perfect for first-time buyers, it offers excellent fuel efficiency and low maintenance costs with ample features for its segment.",
    features: ["Touchscreen Infotainment", "Steering Mounted Controls", "Keyless Entry", "ABS with EBD", "Dual Airbags", "Auto Fold Mirrors"],
    specifications: {
      engine: "1.2L K-Series",
      power: "83 HP",
      torque: "113 Nm",
      fuelEfficiency: "21.2 km/l"
    }
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
    brand: "Honda",
    description: "The Honda Civic Turbo is a sporty sedan offering dynamic performance and sophisticated styling. With its turbocharged engine, it provides an exhilarating driving experience while maintaining fuel efficiency.",
    features: ["Turbo Engine", "Digital Instrument Cluster", "Honda Sensing Suite", "LED Headlights", "Android Auto/Apple CarPlay", "Lane Keep Assist"],
    specifications: {
      engine: "1.5L Turbo",
      power: "174 HP",
      torque: "220 Nm",
      fuelEfficiency: "16.5 km/l"
    }
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
    brand: "Toyota",
    description: "The Toyota Innova Crysta is a spacious and comfortable MPV, perfect for large families. Known for its reliability and strong resale value, it offers a premium cabin experience with ample space for passengers and luggage.",
    features: ["Captain Seats", "Ambient Lighting", "Automatic Climate Control", "7-inch Touchscreen", "Rear AC Vents", "Push Button Start"],
    specifications: {
      engine: "2.4L Diesel",
      power: "148 HP",
      torque: "343 Nm",
      fuelEfficiency: "15.6 km/l"
    }
  }
];

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  // Find the car by ID
  const car = carsDatabase.find(car => car.id === parseInt(id || '0'));
  
  if (!car) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h2 className="text-3xl font-bold">Car not found</h2>
          <p className="mt-4">The car you're looking for does not exist or has been removed.</p>
          <Link to="/inventory">
            <Button className="mt-8">
              Back to Inventory
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBookTest = () => {
    toast({
      title: "Test Drive Scheduled!",
      description: `We'll contact you shortly to confirm your test drive for ${car.name}.`,
    });
  };
  
  const handleSaveToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${car.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 pt-28 pb-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/inventory" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Inventory
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Car Images */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Car Details */}
            <div className="mt-8">
              <h1 className="text-3xl font-bold">{car.name}</h1>
              <p className="text-primary text-2xl font-bold mt-2">₹{car.price.toLocaleString()}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Year</span>
                  </div>
                  <p className="font-medium mt-1">{car.year}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CarIcon className="h-4 w-4" />
                    <span className="text-sm">Mileage</span>
                  </div>
                  <p className="font-medium mt-1">{car.mileage}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Tag className="h-4 w-4" />
                    <span className="text-sm">Fuel Type</span>
                  </div>
                  <p className="font-medium mt-1">{car.fuel}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8" cy="8" r="5" />
                      <path d="M18 16h.01" />
                      <path d="M18 20h.01" />
                      <path d="m13 13 5 5" />
                    </svg>
                    <span className="text-sm">Transmission</span>
                  </div>
                  <p className="font-medium mt-1">{car.transmission}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="mt-2 text-gray-700 leading-relaxed">{car.description}</p>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold">Key Features</h2>
                <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold">Technical Specifications</h2>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-sm text-gray-600">Engine</span>
                    <p className="font-medium mt-1">{car.specifications.engine}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-sm text-gray-600">Power</span>
                    <p className="font-medium mt-1">{car.specifications.power}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-sm text-gray-600">Torque</span>
                    <p className="font-medium mt-1">{car.specifications.torque}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-sm text-gray-600">Fuel Efficiency</span>
                    <p className="font-medium mt-1">{car.specifications.fuelEfficiency}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Interested in this car?</h3>
                  <p className="mt-2 text-gray-600">Schedule a test drive or save it to your wishlist</p>
                  
                  <div className="mt-6">
                    <Button className="w-full mb-3" onClick={handleBookTest}>
                      Schedule Test Drive
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleSaveToWishlist}>
                      <Heart className="mr-2 h-4 w-4" /> 
                      Save to Wishlist
                    </Button>
                  </div>
                  
                  <div className="mt-8 border-t pt-4">
                    <h4 className="font-medium">Have questions?</h4>
                    <p className="text-gray-600 text-sm mt-2">
                      Call our sales team at <span className="font-semibold">+91-9876543210</span> or email us at <span className="font-semibold">sales@autocarsdealer.com</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">EMI Calculator</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="font-medium">₹{Math.round(car.price * 0.8).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-medium">9.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tenure</span>
                      <span className="font-medium">5 Years</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t mt-2">
                      <span className="font-semibold">Monthly EMI</span>
                      <span className="font-bold text-primary">₹{Math.round(car.price / 60).toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetail;
