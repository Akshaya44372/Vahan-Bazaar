import React, { useState } from 'react';
import { Filter, Star, Fuel, Zap, Calendar } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  type: 'bike' | 'scooter' | 'ev';
  fuelType: 'petrol' | 'electric' | 'hybrid';
  mileage: number;
  rating: number;
  reviews: number;
  image: string;
  isNew: boolean;
  offer?: string;
  features: string[];
}

const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    price: 195000,
    originalPrice: 210000,
    type: 'bike',
    fuelType: 'petrol',
    mileage: 35,
    rating: 4.5,
    reviews: 2340,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true,
    offer: '15000 OFF',
    features: ['ABS', 'LED Headlamp', 'Digital Console']
  },
  {
    id: '2',
    name: 'Honda Activa 125',
    brand: 'Honda',
    price: 85000,
    type: 'scooter',
    fuelType: 'petrol',
    mileage: 60,
    rating: 4.3,
    reviews: 1890,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: false,
    features: ['CBS', 'Mobile Charger', 'LED Position Lamp']
  },
  {
    id: '3',
    name: 'Ather 450X',
    brand: 'Ather',
    price: 145000,
    type: 'ev',
    fuelType: 'electric',
    mileage: 116,
    rating: 4.7,
    reviews: 567,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true,
    offer: 'SUBSIDY INCLUDED',
    features: ['Smart Dashboard', 'OTA Updates', 'Fast Charging']
  },
  {
    id: '4',
    name: 'Yamaha MT-15',
    brand: 'Yamaha',
    price: 165000,
    originalPrice: 175000,
    type: 'bike',
    fuelType: 'petrol',
    mileage: 48,
    rating: 4.6,
    reviews: 1234,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: false,
    offer: '10000 OFF',
    features: ['ABS', 'USD Forks', 'LED Lighting']
  },
  {
    id: '5',
    name: 'TVS Jupiter',
    brand: 'TVS',
    price: 75000,
    type: 'scooter',
    fuelType: 'petrol',
    mileage: 62,
    rating: 4.2,
    reviews: 2100,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: false,
    features: ['Eco Mode', 'Mobile Charger', 'External Fuel Fill']
  },
  {
    id: '6',
    name: 'OLA S1 Pro',
    brand: 'OLA',
    price: 135000,
    type: 'ev',
    fuelType: 'electric',
    mileage: 181,
    rating: 4.1,
    reviews: 890,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true,
    offer: 'STATE SUBSIDY',
    features: ['Reverse Mode', 'Hill Hold', 'Cruise Control']
  }
];

export const VehicleGrid: React.FC = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filterVehicles = (type: string) => {
    setActiveFilter(type);
    if (type === 'all') {
      setFilteredVehicles(vehicles);
    } else {
      setFilteredVehicles(vehicles.filter(vehicle => vehicle.type === type));
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect two-wheeler that matches your style and needs. 
            From classic motorcycles to modern electric scooters.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <button
                onClick={() => filterVehicles('all')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                All Vehicles
              </button>
              <button
                onClick={() => filterVehicles('bike')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === 'bike'
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Motorcycles
              </button>
              <button
                onClick={() => filterVehicles('scooter')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === 'scooter'
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Scooters
              </button>
              <button
                onClick={() => filterVehicles('ev')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === 'ev'
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Electric
              </button>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>All Prices</option>
                    <option>Under ₹1 Lakh</option>
                    <option>₹1-2 Lakhs</option>
                    <option>₹2-3 Lakhs</option>
                    <option>Above ₹3 Lakhs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>All Brands</option>
                    <option>Honda</option>
                    <option>TVS</option>
                    <option>Yamaha</option>
                    <option>Royal Enfield</option>
                    <option>Ather</option>
                    <option>OLA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>All Types</option>
                    <option>Petrol</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mileage</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Any Mileage</option>
                    <option>30+ km/l</option>
                    <option>40+ km/l</option>
                    <option>50+ km/l</option>
                    <option>60+ km/l</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {vehicle.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </span>
                )}
                {vehicle.offer && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {vehicle.offer}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    {vehicle.brand}
                  </span>
                  <div className="flex items-center space-x-1">
                    {vehicle.fuelType === 'electric' ? (
                      <Zap className="w-4 h-4 text-green-500" />
                    ) : (
                      <Fuel className="w-4 h-4 text-gray-500" />
                    )}
                    <span className="text-xs text-gray-600 capitalize">
                      {vehicle.fuelType}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {vehicle.name}
                </h3>

                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(vehicle.price)}
                    </span>
                    {vehicle.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(vehicle.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating and Mileage */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">
                      {vehicle.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({vehicle.reviews})
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {vehicle.mileage} {vehicle.fuelType === 'electric' ? 'km/charge' : 'km/l'}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors font-medium">
                    View Details
                  </button>
                  <button className="border border-blue-700 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                    Test Drive
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Load More Vehicles
          </button>
        </div>
      </div>
    </section>
  );
};