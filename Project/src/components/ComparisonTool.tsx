import React, { useState } from 'react';
import { GitCompare, Star, Fuel, Zap, Calendar } from 'lucide-react';

interface ComparisonVehicle {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  specs: {
    engine: string;
    power: string;
    mileage: number;
    fuelCapacity: string;
    weight: string;
    topSpeed: string;
  };
  features: string[];
  rating: number;
  fuelType: string;
}

const comparisonVehicles: ComparisonVehicle[] = [
  {
    id: '1',
    name: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    price: 195000,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      engine: '349cc Single Cylinder',
      power: '20.2 bhp',
      mileage: 35,
      fuelCapacity: '13 L',
      weight: '195 kg',
      topSpeed: '120 km/h'
    },
    features: ['ABS', 'LED Headlamp', 'Digital Console', 'Kick Start'],
    rating: 4.5,
    fuelType: 'petrol'
  },
  {
    id: '2',
    name: 'Yamaha MT-15',
    brand: 'Yamaha',
    price: 165000,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      engine: '155cc Single Cylinder',
      power: '18.4 bhp',
      mileage: 48,
      fuelCapacity: '10 L',
      weight: '138 kg',
      topSpeed: '131 km/h'
    },
    features: ['ABS', 'USD Forks', 'LED Lighting', 'VVA Technology'],
    rating: 4.6,
    fuelType: 'petrol'
  },
  {
    id: '3',
    name: 'Ather 450X',
    brand: 'Ather',
    price: 145000,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: {
      engine: 'Electric Motor',
      power: '8.58 bhp',
      mileage: 116,
      fuelCapacity: '2.9 kWh Battery',
      weight: '108 kg',
      topSpeed: '90 km/h'
    },
    features: ['Smart Dashboard', 'OTA Updates', 'Fast Charging', 'Mobile App'],
    rating: 4.7,
    fuelType: 'electric'
  }
];

export const ComparisonTool: React.FC = () => {
  const [selectedVehicles, setSelectedVehicles] = useState<ComparisonVehicle[]>([
    comparisonVehicles[0],
    comparisonVehicles[1]
  ]);
  const [showComparison, setShowComparison] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const selectVehicle = (vehicle: ComparisonVehicle, index: number) => {
    const newSelected = [...selectedVehicles];
    newSelected[index] = vehicle;
    setSelectedVehicles(newSelected);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GitCompare className="w-8 h-8 text-blue-700 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Compare Vehicles
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make informed decisions by comparing specifications, features, and pricing 
            of different two-wheelers side by side.
          </p>
        </div>

        {/* Comparison Interface */}
        <div className="bg-gray-50 rounded-2xl p-8">
          {!showComparison ? (
            /* Vehicle Selection */
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {[0, 1].map((index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Select Vehicle {index + 1}
                    </h3>
                    <div className="grid gap-4">
                      {comparisonVehicles.map((vehicle) => (
                        <div
                          key={vehicle.id}
                          onClick={() => selectVehicle(vehicle, index)}
                          className={`p-4 rounded-xl cursor-pointer transition-all ${
                            selectedVehicles[index]?.id === vehicle.id
                              ? 'bg-blue-100 border-2 border-blue-500'
                              : 'bg-white border-2 border-transparent hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <img
                              src={vehicle.image}
                              alt={vehicle.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">
                                {vehicle.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {vehicle.brand}
                              </p>
                              <p className="text-lg font-bold text-blue-700">
                                {formatPrice(vehicle.price)}
                              </p>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">
                                {vehicle.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowComparison(true)}
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
                >
                  Compare Selected Vehicles
                </button>
              </div>
            </div>
          ) : (
            /* Comparison Results */
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  Comparison Results
                </h3>
                <button
                  onClick={() => setShowComparison(false)}
                  className="text-blue-700 hover:text-blue-800 font-medium"
                >
                  Change Selection
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {selectedVehicles.map((vehicle, index) => (
                  <div key={index} className="bg-white rounded-xl p-6">
                    {/* Vehicle Header */}
                    <div className="text-center mb-6">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {vehicle.name}
                      </h4>
                      <p className="text-gray-600 mb-2">{vehicle.brand}</p>
                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <div className="text-2xl font-bold text-blue-700">
                          {formatPrice(vehicle.price)}
                        </div>
                        <div className="flex items-center space-x-1">
                          {vehicle.fuelType === 'electric' ? (
                            <Zap className="w-4 h-4 text-green-500" />
                          ) : (
                            <Fuel className="w-4 h-4 text-gray-500" />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {vehicle.rating} Rating
                        </span>
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="space-y-4">
                      <h5 className="font-semibold text-gray-900 text-center border-b pb-2">
                        Specifications
                      </h5>
                      <div className="space-y-3">
                        {Object.entries(vehicle.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className="font-medium text-gray-900">
                              {typeof value === 'number' && key === 'mileage' 
                                ? `${value} ${vehicle.fuelType === 'electric' ? 'km/charge' : 'km/l'}`
                                : value
                              }
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-6">
                      <h5 className="font-semibold text-gray-900 mb-3 text-center border-b pb-2">
                        Key Features
                      </h5>
                      <div className="grid grid-cols-2 gap-2">
                        {vehicle.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-center"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <button className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors font-medium">
                        View Details
                      </button>
                      <button className="border border-blue-700 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                        Test Drive
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};