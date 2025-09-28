import React from 'react';
import { Search, TrendingUp, Shield, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/20">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                India's Premier
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {' '}Two-Wheeler{' '}
                </span>
                Marketplace
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Buy and sell bikes in seconds. The ultimate platform for discovering, 
                comparing, and purchasing your dream two-wheeler with AI-powered assistance.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search by brand, model, or type..."
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="bg-green-500/20 p-3 rounded-lg mx-auto w-fit mb-2 group-hover:bg-green-500/30 transition-colors">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-sm font-medium">Best Prices</p>
              </div>
              <div className="text-center group">
                <div className="bg-blue-500/20 p-3 rounded-lg mx-auto w-fit mb-2 group-hover:bg-blue-500/30 transition-colors">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-sm font-medium">Verified Dealers</p>
              </div>
              <div className="text-center group">
                <div className="bg-orange-500/20 p-3 rounded-lg mx-auto w-fit mb-2 group-hover:bg-orange-500/30 transition-colors">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <p className="text-sm font-medium">Quick Process</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:text-right space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="text-3xl font-bold text-green-400 mb-2">50K+</div>
                <div className="text-sm text-blue-100">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
                <div className="text-sm text-blue-100">Verified Dealers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="text-3xl font-bold text-orange-400 mb-2">5K+</div>
                <div className="text-sm text-blue-100">Vehicles Listed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-sm text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
    </section>
  );
};