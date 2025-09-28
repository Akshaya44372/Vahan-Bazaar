import React, { useState } from 'react';
import { Calculator, DollarSign, Fuel, CreditCard, Shield } from 'lucide-react';

interface CalculatorsProps {
  onBankAccess: () => void;
}

export const Calculators: React.FC<CalculatorsProps> = ({ onBankAccess }) => {
  const [activeCalculator, setActiveCalculator] = useState<'emi' | 'fuel'>('emi');
  
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(150000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [loanTenure, setLoanTenure] = useState(24);
  
  // Fuel Calculator State
  const [dailyDistance, setDailyDistance] = useState(30);
  const [fuelPrice, setFuelPrice] = useState(105);
  const [vehicleMileage, setVehicleMileage] = useState(45);

  const calculateEMI = () => {
    const monthlyRate = interestRate / (12 * 100);
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) / 
                (Math.pow(1 + monthlyRate, loanTenure) - 1);
    return Math.round(emi);
  };

  const calculateFuelCost = () => {
    const monthlyDistance = dailyDistance * 30;
    const monthlyFuelConsumption = monthlyDistance / vehicleMileage;
    const monthlyCost = monthlyFuelConsumption * fuelPrice;
    const yearlyCost = monthlyCost * 12;
    
    return {
      monthly: Math.round(monthlyCost),
      yearly: Math.round(yearlyCost),
      fuelPerMonth: monthlyFuelConsumption.toFixed(1)
    };
  };

  const emi = calculateEMI();
  const totalAmount = emi * loanTenure;
  const totalInterest = totalAmount - loanAmount;

  const fuelCost = calculateFuelCost();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-blue-700 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Financial Calculators
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your purchase with our smart calculators. Calculate EMIs, 
            fuel costs, and make informed financial decisions.
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-2 rounded-xl shadow-md">
              <button
                onClick={() => setActiveCalculator('emi')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCalculator === 'emi'
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                <CreditCard className="w-5 h-5 inline mr-2" />
                EMI Calculator
              </button>
              <button
                onClick={() => setActiveCalculator('fuel')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCalculator === 'fuel'
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                <Fuel className="w-5 h-5 inline mr-2" />
                Fuel Cost Calculator
              </button>
            </div>
          </div>

          {activeCalculator === 'emi' ? (
            /* EMI Calculator */
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Calculate Your EMI
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Amount
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="50000"
                        max="500000"
                        step="5000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>₹50K</span>
                        <span className="font-semibold text-blue-700">
                          {formatCurrency(loanAmount)}
                        </span>
                        <span>₹5L</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interest Rate (% per annum)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="7"
                        max="18"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>7%</span>
                        <span className="font-semibold text-blue-700">
                          {interestRate}%
                        </span>
                        <span>18%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Tenure (months)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="12"
                        max="60"
                        step="6"
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>1 Year</span>
                        <span className="font-semibold text-blue-700">
                          {loanTenure} months
                        </span>
                        <span>5 Years</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onBankAccess}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all font-semibold flex items-center justify-center"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Access Bank Integration
                  </button>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    EMI Breakdown
                  </h3>

                  <div className="grid gap-4">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <div className="text-center">
                        <DollarSign className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
                        <p className="text-3xl font-bold text-blue-700">
                          {formatCurrency(emi)}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-xl text-center">
                        <p className="text-sm text-gray-600 mb-1">Principal Amount</p>
                        <p className="text-lg font-bold text-green-700">
                          {formatCurrency(loanAmount)}
                        </p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-xl text-center">
                        <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                        <p className="text-lg font-bold text-orange-700">
                          {formatCurrency(totalInterest)}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                      <p className="text-sm text-gray-600 mb-1">Total Amount Payable</p>
                      <p className="text-xl font-bold text-gray-900">
                        {formatCurrency(totalAmount)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-100 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-2">Quick Tips:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Lower interest rates save more money</li>
                      <li>• Shorter tenure means less total interest</li>
                      <li>• Consider down payment to reduce EMI</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Fuel Cost Calculator */
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Calculate Fuel Costs
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Daily Distance (km)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="10"
                        max="200"
                        step="5"
                        value={dailyDistance}
                        onChange={(e) => setDailyDistance(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>10 km</span>
                        <span className="font-semibold text-blue-700">
                          {dailyDistance} km
                        </span>
                        <span>200 km</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fuel Price (₹/liter)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="90"
                        max="120"
                        step="1"
                        value={fuelPrice}
                        onChange={(e) => setFuelPrice(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>₹90</span>
                        <span className="font-semibold text-blue-700">
                          ₹{fuelPrice}
                        </span>
                        <span>₹120</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Mileage (km/l)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="25"
                        max="70"
                        step="1"
                        value={vehicleMileage}
                        onChange={(e) => setVehicleMileage(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>25 km/l</span>
                        <span className="font-semibold text-blue-700">
                          {vehicleMileage} km/l
                        </span>
                        <span>70 km/l</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Fuel Cost Analysis
                  </h3>

                  <div className="grid gap-4">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <div className="text-center">
                        <Fuel className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Monthly Fuel Cost</p>
                        <p className="text-3xl font-bold text-blue-700">
                          {formatCurrency(fuelCost.monthly)}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-xl text-center">
                        <p className="text-sm text-gray-600 mb-1">Yearly Cost</p>
                        <p className="text-lg font-bold text-green-700">
                          {formatCurrency(fuelCost.yearly)}
                        </p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-xl text-center">
                        <p className="text-sm text-gray-600 mb-1">Fuel/Month</p>
                        <p className="text-lg font-bold text-orange-700">
                          {fuelCost.fuelPerMonth} L
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Monthly Distance Breakdown
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Daily Distance:</span>
                          <span className="font-medium">{dailyDistance} km</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Monthly Distance:</span>
                          <span className="font-medium">{dailyDistance * 30} km</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fuel Efficiency:</span>
                          <span className="font-medium">{vehicleMileage} km/l</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-100 rounded-xl">
                    <h4 className="font-semibold text-green-900 mb-2">Savings Tips:</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Choose vehicles with higher mileage</li>
                      <li>• Regular maintenance improves efficiency</li>
                      <li>• Consider electric vehicles for long-term savings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};