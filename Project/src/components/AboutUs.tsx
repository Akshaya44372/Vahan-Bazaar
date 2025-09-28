import React from 'react';
import { Users, Award, Shield, Zap, Heart, Target, TrendingUp } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-green-400">Vahan Bazar</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing the two-wheeler marketplace with cutting-edge technology, 
              unmatched customer service, and India's largest network of verified dealers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To democratize two-wheeler ownership in India by providing a seamless, 
                    transparent, and technology-driven marketplace that connects buyers with 
                    verified sellers, ensuring the best deals and unmatched customer experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                    <Zap className="w-6 h-6 mr-2" />
                    Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become India's most trusted and innovative two-wheeler marketplace, 
                    empowering millions of customers to make informed decisions and achieve 
                    their mobility dreams while supporting the growth of our dealer partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">200+</div>
                <div className="text-sm text-gray-600">Verified Dealers</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-700 mb-2">25+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-700 mb-2">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust & Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Building lasting relationships through honest communication, 
                verified information, and transparent pricing across all our services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision we make prioritizes customer satisfaction, 
                ensuring exceptional experiences from discovery to delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously evolving with cutting-edge technology to simplify 
                and enhance the two-wheeler buying and selling experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2020, Vahan Bazar emerged from a simple observation: 
                  the two-wheeler industry needed a digital transformation. What started 
                  as a small team of automotive enthusiasts and tech innovators has grown 
                  into India's leading two-wheeler marketplace.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  We recognized that buying a two-wheeler was often a complex, 
                  time-consuming process filled with uncertainty. Our founders set out 
                  to create a platform that would make this journey simple, transparent, 
                  and enjoyable for everyone involved.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to serve customers across 25+ cities, working with 
                  over 200 verified dealers and helping thousands of Indians find their 
                  perfect ride every month. Our journey continues as we expand our reach 
                  and enhance our platform with new features and services.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  2020
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Company Founded</h4>
                  <p className="text-sm text-gray-600">Started with a vision to transform the two-wheeler marketplace</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  2021
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Platform Launch</h4>
                  <p className="text-sm text-gray-600">Officially launched in Bangalore with 50+ dealer partners</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  2022
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Multi-City Expansion</h4>
                  <p className="text-sm text-gray-600">Expanded to 10 major cities across India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  2023
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI Integration</h4>
                  <p className="text-sm text-gray-600">Launched AI-powered recommendations and biometric authentication</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  2024
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Market Leadership</h4>
                  <p className="text-sm text-gray-600">Became India's fastest-growing two-wheeler marketplace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and growth at Vahan Bazar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Rajesh Kumar</h3>
                <p className="text-blue-600 font-medium mb-3">CEO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Former automotive industry executive with 15+ years of experience. 
                  Passionate about transforming mobility solutions in India.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Priya Sharma</h3>
                <p className="text-green-600 font-medium mb-3">CTO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Technology leader with expertise in AI, machine learning, 
                  and scalable platform architecture. IIT alumna.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Amit Patel</h3>
                <p className="text-purple-600 font-medium mb-3">VP of Growth</p>
                <p className="text-gray-600 text-sm">
                  Growth marketing expert who has scaled multiple consumer 
                  platforms across India. IIM alumnus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vahan Bazar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that makes us India's preferred two-wheeler marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Award-Winning Service
              </h3>
              <p className="text-gray-600 text-sm">
                Recognized for excellence in customer service and platform innovation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600 text-sm">
                Dedicated specialists to guide you through every step of your journey
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Proven Results
              </h3>
              <p className="text-gray-600 text-sm">
                Track record of successful transactions and satisfied customers
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cutting-Edge Tech
              </h3>
              <p className="text-gray-600 text-sm">
                Latest technology including AI recommendations and biometric security
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};