import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VehicleGrid } from './components/VehicleGrid';
import { ComparisonTool } from './components/ComparisonTool';
import { Calculators } from './components/Calculators';
import { UpcomingLaunches } from './components/UpcomingLaunches';
import { Showrooms } from './components/Showrooms';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { BiometricModal } from './components/BiometricModal';
import { TestRideModal } from './components/TestRideModal';
import { SellVehicleModal } from './components/SellVehicleModal';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isBiometricModalOpen, setIsBiometricModalOpen] = useState(false);
  const [isTestRideModalOpen, setIsTestRideModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero />
            <VehicleGrid />
            <ComparisonTool />
            <Calculators onBankAccess={() => setIsBiometricModalOpen(true)} />
            <UpcomingLaunches />
            <Showrooms onTestRide={() => setIsTestRideModalOpen(true)} />
          </>
        );
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <Contact />;
      case 'sell':
        return <SellVehicleModal isOpen={true} onClose={() => setCurrentSection('home')} />;
      default:
        return (
          <>
            <Hero />
            <VehicleGrid />
          </>
        );
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          onAuthClick={() => setIsAuthModalOpen(true)}
          onNavigate={setCurrentSection}
          onSellClick={() => setIsSellModalOpen(true)}
        />
        
        <main>
          {renderSection()}
        </main>

        <Footer onNavigate={setCurrentSection} />

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
        
        <BiometricModal 
          isOpen={isBiometricModalOpen} 
          onClose={() => setIsBiometricModalOpen(false)} 
        />
        
        <TestRideModal 
          isOpen={isTestRideModalOpen} 
          onClose={() => setIsTestRideModalOpen(false)} 
        />
        
        <SellVehicleModal 
          isOpen={isSellModalOpen} 
          onClose={() => setIsSellModalOpen(false)} 
        />
      </div>
    </AuthProvider>
  );
}

export default App;