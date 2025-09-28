import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Navigation, Calendar } from 'lucide-react';

interface Showroom {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  reviews: number;
  distance: string;
  timing: string;
  brands: string[];
  services: string[];
  image: string;
  offers?: string;
}

const showrooms: Showroom[] = [
  {
    id: '1',
    name: 'Royal Enfield Showroom',
    address: 'MG Road, Bangalore, Karnataka 560001',
    phone: '+91 80-12345678',
    rating: 4.5,
    reviews: 234,
    distance: '2.5 km',
    timing: '10:00 AM - 8:00 PM',
    brands: ['Royal Enfield'],
    services: ['Test Drive', 'Service Center', 'Spare Parts', 'Insurance'],
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    offers: 'Special financing available'
  },
  {
    id: '2',
    name: 'Honda Two Wheeler Hub',
    address: 'Koramangala, Bangalore, Karnataka 560034',
    phone: '+91 80-23456789',
    rating: 4.3,
    reviews: 456,
    distance: '3.8 km',
    timing: '9:30 AM - 7:30 PM',
    brands: ['Honda'],
    services: ['Test Drive', 'Service', 'Accessories', 'Exchange'],
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    offers: 'Exchange bonus up to ₹15,000'
  },
  {
    id: '3',
    name: 'Multi-Brand Showroom',
    address: 'Whitefield, Bangalore, Karnataka 560066',
    phone: '+91 80-34567890',
    rating: 4.6,
    reviews: 178,
    distance: '5.2 km',
    timing: '10:00 AM - 9:00 PM',
    brands: ['TVS', 'Bajaj', 'Yamaha'],
    services: ['Test Drive', 'Compare', 'Finance', 'Insurance'],
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    offers: 'Best price guarantee'
  },
  {
    id: '4',
    name: 'EV Zone Showroom',
    address: 'Electronic City, Bangalore, Karnataka 560100',
    phone: '+91 80-45678901',
    rating: 4.7,
    reviews: 89,
    distance: '8.1 km',
    timing: '10:00 AM - 8:00 PM',
    brands: ['Ather', 'OLA Electric', 'TVS iQube'],
    services: ['Test Drive', 'Charging Setup', 'Subsidy Help', 'Service'],
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    offers: 'Government subsidy assistance'
  }
];

interface ShowroomsProps {
  onTestRide: () => void;
}

export const Showrooms: React.FC<ShowroomsProps> = ({ onTestRide }) => {
  const [selectedShowroom, setSelectedShowroom] = useState<Showroom | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-blue-700 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Find Nearby Showrooms
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit authorized dealers near you for test drives, expert consultation, 
            and the best deals on your favorite two-wheelers.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Brands</option>
                  <option>Honda</option>
                  <option>TVS</option>
                  <option>Royal Enfield</option>
                  <option>Yamaha</option>
                  <option>Ather</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Distance
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Within 10 km</option>
                  <option>Within 5 km</option>
                  <option>Within 15 km</option>
                  <option>Within 25 km</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors font-medium">
                  Search Showrooms
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Showroom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {showrooms.map((showroom) => (
            <div
              key={showroom.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={showroom.image}
                  alt={showroom.name}
                  className="w-full h-full object-cover"
                />
                {showroom.offers && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      OFFER
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-medium">
                  {showroom.distance}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {showroom.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-900">
                          {showroom.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({showroom.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start mb-3">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{showroom.address}</span>
                </div>

                {/* Contact */}
                <div className="flex items-center mb-3">
                  <Phone className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{showroom.phone}</span>
                </div>

                {/* Timing */}
                <div className="flex items-center mb-4">
                  <Clock className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{showroom.timing}</span>
                </div>

                {/* Brands */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Available Brands:</p>
                  <div className="flex flex-wrap gap-2">
                    {showroom.brands.map((brand, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Services:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {showroom.services.map((service, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-center"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Offers */}
                {showroom.offers && (
                  <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <p className="text-sm font-medium text-orange-800">
                      {showroom.offers}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <button className="border border-blue-700 text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm flex items-center justify-center">
                    <Navigation className="w-4 h-4 mr-1" />
                    Directions
                  </button>
                  <button
                    onClick={onTestRide}
                    className="bg-blue-700 text-white py-2 px-3 rounded-lg hover:bg-blue-800 transition-colors font-medium text-sm flex items-center justify-center"
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    Test Drive
                  </button>
                  <button className="bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interactive Map View
          </h3>
          <p className="text-gray-600 mb-6">
            View all nearby showrooms on an interactive map for better navigation
          </p>
          <div className="bg-white rounded-xl p-8 border-2 border-dashed border-gray-300">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              Interactive map integration would be displayed here
            </p>
            <button className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium">
              View on Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};