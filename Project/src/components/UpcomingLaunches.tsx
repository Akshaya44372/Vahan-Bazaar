import React from 'react';
import { Calendar, Star, Zap, Bell } from 'lucide-react';

interface UpcomingVehicle {
  id: string;
  name: string;
  brand: string;
  expectedPrice: string;
  launchDate: string;
  type: 'bike' | 'scooter' | 'ev';
  image: string;
  highlights: string[];
  preBooking: boolean;
}

const upcomingVehicles: UpcomingVehicle[] = [
  {
    id: '1',
    name: 'Royal Enfield Himalayan 450',
    brand: 'Royal Enfield',
    expectedPrice: '₹3.0 - 3.2 Lakhs',
    launchDate: '2025-03-15',
    type: 'bike',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    highlights: ['450cc Engine', 'Adventure Ready', 'LED Lighting', 'TFT Display'],
    preBooking: true
  },
  {
    id: '2',
    name: 'Honda Activa Electric',
    brand: 'Honda',
    expectedPrice: '₹1.2 - 1.4 Lakhs',
    launchDate: '2025-02-20',
    type: 'ev',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    highlights: ['100km Range', 'Fast Charging', 'Smart Features', 'Swappable Battery'],
    preBooking: false
  },
  {
    id: '3',
    name: 'TVS Apache RTR 200 4V',
    brand: 'TVS',
    expectedPrice: '₹1.8 - 2.0 Lakhs',
    launchDate: '2025-04-10',
    type: 'bike',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    highlights: ['200cc Engine', 'Race Derived', 'Ride Modes', 'SmartXonnect'],
    preBooking: true
  },
  {
    id: '4',
    name: 'Bajaj Chetak Premium',
    brand: 'Bajaj',
    expectedPrice: '₹1.6 - 1.8 Lakhs',
    launchDate: '2025-03-25',
    type: 'ev',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    highlights: ['150km Range', 'Premium Design', 'App Connectivity', 'Regenerative Braking'],
    preBooking: false
  }
];

export const UpcomingLaunches: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getDaysUntilLaunch = (dateString: string) => {
    const launchDate = new Date(dateString);
    const today = new Date();
    const diffTime = launchDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-purple-700 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Upcoming Launches
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be the first to know about exciting new two-wheelers coming to market. 
            Pre-book your favorites and get exclusive launch offers.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {upcomingVehicles.map((vehicle) => {
            const daysLeft = getDaysUntilLaunch(vehicle.launchDate);
            
            return (
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
                  
                  {/* Launch Status Badge */}
                  <div className="absolute top-3 left-3">
                    {daysLeft > 0 ? (
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {daysLeft} days left
                      </span>
                    ) : (
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Available Now
                      </span>
                    )}
                  </div>

                  {/* Vehicle Type */}
                  <div className="absolute top-3 right-3">
                    {vehicle.type === 'ev' ? (
                      <div className="bg-green-500 text-white p-2 rounded-full">
                        <Zap className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="bg-blue-500 text-white p-2 rounded-full">
                        <Calendar className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Pre-booking Available */}
                  {vehicle.preBooking && (
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Pre-book
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                      {vehicle.brand}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-purple-700 transition-colors">
                      {vehicle.name}
                    </h3>
                  </div>

                  {/* Expected Price */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Expected Price</p>
                    <p className="text-lg font-bold text-gray-900">
                      {vehicle.expectedPrice}
                    </p>
                  </div>

                  {/* Launch Date */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Launch Date</p>
                    <p className="text-sm font-medium text-gray-900">
                      {formatDate(vehicle.launchDate)}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.highlights.slice(0, 4).map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-lg text-center"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {vehicle.preBooking ? (
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                        Pre-Book Now
                      </button>
                    ) : (
                      <button className="w-full bg-gray-100 text-gray-600 py-2 px-4 rounded-lg cursor-not-allowed font-medium">
                        Pre-booking Soon
                      </button>
                    )}
                    
                    <button className="w-full border border-purple-600 text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors font-medium flex items-center justify-center">
                      <Bell className="w-4 h-4 mr-2" />
                      Notify Me
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Launches
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new vehicle launches, 
              exclusive pre-booking offers, and early bird discounts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};