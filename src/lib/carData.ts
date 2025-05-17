// Sample car data
export const carData = [
  {
    id: 1,
    name: 'Toyota Camry',
    price: 1800000,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=80',
    year: 2020,
    mileage: '45,000 km',
    fuel: 'Petrol',
    transmission: 'Automatic'
  },
  {
    id: 2,
    name: 'Honda City',
    price: 1500000,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    year: 2019,
    mileage: '38,000 km',
    fuel: 'Petrol',
    transmission: 'Manual'
  },
  {
    id: 3,
    name: 'Hyundai Creta',
    price: 1650000,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
    year: 2021,
    mileage: '25,000 km',
    fuel: 'Diesel',
    transmission: 'Automatic'
  },
  {
    id: 4,
    name: 'Maruti Swift',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
    year: 2020,
    mileage: '32,000 km',
    fuel: 'Petrol',
    transmission: 'Manual'
  },
  {
    id: 5,
    name: 'Tata Nexon',
    price: 1250000,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    year: 2021,
    mileage: '20,000 km',
    fuel: 'Electric',
    transmission: 'Automatic'
  },
  {
    id: 6,
    name: 'Mahindra XUV700',
    price: 2100000,
    image: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?auto=format&fit=crop&w=800&q=80',
    year: 2022,
    mileage: '15,000 km',
    fuel: 'Diesel',
    transmission: 'Automatic'
  },
  {
    id: 7,
    name: 'Kia Seltos',
    price: 1750000,
    image: 'https://images.unsplash.com/photo-1617541078639-d3024befb7b3?auto=format&fit=crop&w=800&q=80',
    year: 2022,
    mileage: '18,000 km',
    fuel: 'Petrol',
    transmission: 'Automatic'
  },
  {
    id: 8,
    name: 'MG Hector',
    price: 1950000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    year: 2021,
    mileage: '22,000 km',
    fuel: 'Diesel',
    transmission: 'Manual'
  },
  {
    id: 9,
    name: 'Volkswagen Polo',
    price: 980000,
    image: 'https://images.unsplash.com/photo-1630990415298-98ef41a76510?auto=format&fit=crop&w=800&q=80',
    year: 2020,
    mileage: '35,000 km',
    fuel: 'Petrol',
    transmission: 'Manual'
  },
  {
    id: 10,
    name: 'Honda WR-V',
    price: 1120000,
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
    year: 2019,
    mileage: '42,000 km',
    fuel: 'Diesel',
    transmission: 'Manual'
  },
  {
    id: 11,
    name: 'Renault Triber',
    price: 870000,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
    year: 2021,
    mileage: '28,000 km',
    fuel: 'Petrol',
    transmission: 'Manual'
  },
  {
    id: 12,
    name: 'Toyota Fortuner',
    price: 3500000,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    year: 2022,
    mileage: '12,000 km',
    fuel: 'Diesel',
    transmission: 'Automatic'
  },
  {
    id: 13,
    name: 'Maruti Baleno',
    price: 920000,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    year: 2021,
    mileage: '30,000 km',
    fuel: 'Petrol',
    transmission: 'Manual'
  },
  {
    id: 14,
    name: 'Hyundai Verna',
    price: 1350000,
    image: 'https://images.unsplash.com/photo-1558383817-aea2a258c53d?auto=format&fit=crop&w=800&q=80',
    year: 2020,
    mileage: '22,000 km',
    fuel: 'Petrol',
    transmission: 'Automatic'
  },
  {
    id: 15,
    name: 'Skoda Rapid',
    price: 1230000,
    image: 'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=800&q=80',
    year: 2019,
    mileage: '40,000 km',
    fuel: 'Petrol',
    transmission: 'Manual'
  }
];

export interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
}

export function filterCars(
  cars: Car[], 
  searchQuery: string, 
  priceFilter: string, 
  fuelFilter: string
): Car[] {
  let filteredCars = [...cars];

  // Filter by search query
  if (searchQuery) {
    filteredCars = filteredCars.filter(car => 
      car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filter by price range
  if (priceFilter !== 'all') {
    if (priceFilter === 'under1000000') {
      filteredCars = filteredCars.filter(car => car.price < 1000000);
    } else if (priceFilter === '1000000to1500000') {
      filteredCars = filteredCars.filter(car => car.price >= 1000000 && car.price <= 1500000);
    } else if (priceFilter === 'above1500000') {
      filteredCars = filteredCars.filter(car => car.price > 1500000);
    }
  }

  // Filter by fuel type
  if (fuelFilter !== 'all') {
    filteredCars = filteredCars.filter(car => 
      car.fuel.toLowerCase() === fuelFilter.toLowerCase()
    );
  }

  return filteredCars;
}
