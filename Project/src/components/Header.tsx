import React, { useState } from 'react';
import { Search, Menu, User, ShoppingBag, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onAuthClick: () => void;
  onNavigate: (section: string) => void;
  onSellClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAuthClick, onNavigate, onSellClick }) => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-blue-700 text-white p-2 rounded-lg mr-3">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-gray-900">Vahan Bazar</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search bikes, scooters, EVs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </form>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => onNavigate('home')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
            >
              Contact
            </button>
            <button 
              onClick={onSellClick}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Sell Vehicle
            </button>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
                  <User className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{user.name}</span>
                <button 
                  onClick={logout}
                  className="text-sm text-gray-600 hover:text-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={onAuthClick}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                Login
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </form>
              
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    onNavigate('home');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    onNavigate('about');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    onNavigate('contact');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700"
                >
                  Contact
                </button>
                <button 
                  onClick={() => {
                    onSellClick();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg text-center"
                >
                  Sell Vehicle
                </button>
                
                {user ? (
                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium">{user.name}</p>
                    <button 
                      onClick={logout}
                      className="text-sm text-red-600 mt-1"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      onAuthClick();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full bg-blue-700 text-white py-2 px-4 rounded-lg text-center"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};